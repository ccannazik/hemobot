/**
 * Gemini API client using the native Generative Language API.
 * Supports legacy AIza... keys and newer AQ... authorization keys.
 * Dynamically discovers available models for the API key.
 */

const PREFERRED_MODELS = [
  "gemini-2.5-flash",
  "gemini-2.5-flash-preview-05-20",
  "gemini-2.5-pro",
  "gemini-2.0-flash",
  "gemini-2.0-flash-001",
  "gemini-2.0-flash-lite",
  "gemini-2.0-flash-lite-001",
  "gemini-flash-latest",
  "gemini-pro-latest",
];

let cachedModels: string[] | null = null;

function isRetryableError(message: string): boolean {
  const lower = message.toLowerCase();
  return (
    lower.includes("not found") ||
    lower.includes("no longer available") ||
    lower.includes("404") ||
    lower.includes("quota") ||
    lower.includes("rate limit") ||
    lower.includes("429") ||
    lower.includes("resource exhausted") ||
    lower.includes("limit: 0") ||
    lower.includes("overloaded")
  );
}

async function getAvailableModels(apiKey: string): Promise<string[]> {
  if (cachedModels) return cachedModels;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models`,
      { headers: { "x-goog-api-key": apiKey } }
    );
    const data = await response.json();

    if (!response.ok || !data.models) {
      return PREFERRED_MODELS;
    }

    const available = data.models
      .filter((m: { supportedGenerationMethods?: string[] }) =>
        m.supportedGenerationMethods?.includes("generateContent")
      )
      .map((m: { name: string }) => m.name.replace("models/", ""));

    // Prefer known-good order, then append any others
    const ordered = PREFERRED_MODELS.filter((m) => available.includes(m));
    const rest = available.filter((m: string) => !ordered.includes(m));
    cachedModels = [...ordered, ...rest];

    return cachedModels.length > 0 ? cachedModels : PREFERRED_MODELS;
  } catch {
    return PREFERRED_MODELS;
  }
}

async function callModel(
  apiKey: string,
  model: string,
  systemInstruction: string,
  userMessage: string
): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: systemInstruction }],
      },
      contents: [
        {
          role: "user",
          parts: [{ text: userMessage }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
      },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const msg =
      data?.error?.message || `Gemini API error (${response.status}) for model ${model}`;
    throw new Error(msg);
  }

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error(`Empty response from model ${model}`);
  }

  return text;
}

export async function generateGeminiResponse(
  apiKey: string,
  systemInstruction: string,
  userMessage: string
): Promise<string> {
  const models = await getAvailableModels(apiKey);
  let lastError: Error | null = null;

  for (const model of models) {
    try {
      return await callModel(apiKey, model, systemInstruction, userMessage);
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      if (isRetryableError(lastError.message)) {
        console.warn(`Gemini model ${model} unavailable, trying next:`, lastError.message.slice(0, 120));
        continue;
      }
      throw lastError;
    }
  }

  throw lastError || new Error("All Gemini models failed — check API key quota at https://ai.dev/rate-limit");
}
