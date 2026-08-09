import { NextRequest, NextResponse } from "next/server";
import {
  CHATBOT_SYSTEM_PROMPT,
  classifyQuestion,
  getLocationResponse,
} from "@/lib/chatbot-safety";
import { generateGeminiResponse } from "@/lib/gemini";
import { knowledgeSources } from "@/data/knowledge";
import { prisma } from "@/lib/prisma";

async function saveConversation(
  sessionId: string | undefined,
  message: string,
  response: string,
  category: string
) {
  if (!sessionId) return;
  try {
    await prisma.chatConversation.createMany({
      data: [
        { sessionId, role: "user", content: message, category },
        { sessionId, role: "assistant", content: response, category },
      ],
    });
  } catch (err) {
    console.warn("Failed to save chat conversation:", err);
  }
}

function pickSources(message: string) {
  const relevantSources = knowledgeSources
    .filter((s) => {
      const keywords = s.title.toLowerCase().split(/\s+/);
      const msgLower = message.toLowerCase();
      return keywords.some((k) => k.length > 4 && msgLower.includes(k));
    })
    .slice(0, 3)
    .map((s) => ({ title: s.title, url: s.url }));

  if (relevantSources.length === 0) {
    relevantSources.push({
      title: "CDC — Hemophilia",
      url: "https://www.cdc.gov/hemophilia/index.html",
    });
  }

  return relevantSources;
}

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const safety = classifyQuestion(message);

    if (safety.shouldBlock && safety.boundaryMessage) {
      await saveConversation(sessionId, message, safety.boundaryMessage, safety.category);

      return NextResponse.json({
        response: safety.boundaryMessage,
        category: safety.category,
        sources: [
          {
            title: "CDC Hemophilia Treatment Center Directory",
            url: "https://dbdgateway.cdc.gov/HTCDirSearch.aspx",
          },
        ],
        blocked: true,
      });
    }

    if (safety.category === "location_resource") {
      const response = getLocationResponse();
      await saveConversation(sessionId, message, response, safety.category);

      return NextResponse.json({
        response,
        category: safety.category,
        sources: [
          {
            title: "CDC HTC Directory",
            url: "https://dbdgateway.cdc.gov/HTCDirSearch.aspx",
          },
        ],
        blocked: false,
      });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Gemini API key is not configured. Set GEMINI_API_KEY in your .env file.",
        },
        { status: 503 }
      );
    }

    const sourceContext = knowledgeSources
      .map((s) => `- ${s.title} (${s.organization}): ${s.url}`)
      .join("\n");

    const systemInstruction = `${CHATBOT_SYSTEM_PROMPT}\n\nReference sources:\n${sourceContext}`;

    const responseText = await generateGeminiResponse(apiKey, systemInstruction, message);

    await saveConversation(sessionId, message, responseText, safety.category);

    return NextResponse.json({
      response: responseText,
      category: safety.category,
      sources: pickSources(message),
      blocked: false,
    });
  } catch (error) {
    console.error("Chat API error:", error);

    const detail = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        error:
          detail.toLowerCase().includes("quota") || detail.toLowerCase().includes("limit: 0")
            ? "Gemini API quota is exhausted for this key. Check billing and usage at https://ai.dev/rate-limit, then try again."
            : "HemoBot AI could not reach Gemini right now. Please try again in a moment.",
        detail: process.env.NODE_ENV === "development" ? detail : undefined,
      },
      { status: 502 }
    );
  }
}
