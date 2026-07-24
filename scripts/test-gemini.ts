import { config } from "dotenv";
config({ path: ".env" });

import { generateGeminiResponse } from "../src/lib/gemini";
import { CHATBOT_SYSTEM_PROMPT } from "../src/lib/chatbot-safety";

async function main() {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error("No GEMINI_API_KEY in .env");
    process.exit(1);
  }

  console.log("Testing Gemini API...");
  const response = await generateGeminiResponse(
    apiKey,
    CHATBOT_SYSTEM_PROMPT,
    "What is hemophilia?"
  );
  console.log("Success! Response preview:");
  console.log(response.slice(0, 200) + "...");
}

main().catch((err) => {
  console.error("Failed:", err.message);
  process.exit(1);
});
