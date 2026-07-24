"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Loader2, Bot, User, ExternalLink } from "lucide-react";
import { Button } from "./Button";
import { ChatbotDisclaimer } from "./Disclaimer";
import { quickQuestions } from "@/data/knowledge";

function createSessionId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `session-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: { title: string; url: string }[];
}

interface ChatbotProps {
  compact?: boolean;
}

export function Chatbot({ compact = false }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm the Hemophilia Assistant. I can answer general educational questions about hemophilia, help you understand treatment concepts, and guide you to nearby care resources. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const sessionIdRef = useRef(createSessionId());
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const categories = [...new Set(quickQuestions.map((q) => q.category))];

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim(), sessionId: sessionIdRef.current }),
      });
      const data = await res.json();

      if (!res.ok && !data.response) {
        throw new Error(data.error || data.detail || "Request failed");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response || data.error || "Sorry, I couldn't process that.",
          sources: data.sources,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again or visit our Learn section for educational articles.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  const filteredQuestions = activeCategory
    ? quickQuestions.filter((q) => q.category === activeCategory)
    : quickQuestions.slice(0, 6);

  return (
    <div className={`flex flex-col ${compact ? "h-[500px]" : "h-[calc(100vh-12rem)] min-h-[600px]"}`}>
      <ChatbotDisclaimer />

      {!compact && (
        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                !activeCategory
                  ? "bg-primary-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Topics
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  activeCategory === cat
                    ? "bg-primary-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.split(" ")[0]}…
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {filteredQuestions.map((q) => (
              <button
                key={q.text}
                type="button"
                onClick={() => sendMessage(q.text)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-left text-xs text-slate-700 hover:border-primary-300 hover:bg-primary-50 transition-colors max-w-xs"
              >
                {q.text}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 flex-1 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                msg.role === "user" ? "bg-primary-100 text-primary-700" : "bg-teal-100 text-teal-700"
              }`}
            >
              {msg.role === "user" ? (
                <User className="h-4 w-4" />
              ) : (
                <Bot className="h-4 w-4" />
              )}
            </div>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-primary-600 text-white"
                  : "bg-slate-50 text-slate-800"
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.content}</div>
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-3 border-t border-slate-200 pt-2">
                  <p className="text-xs font-semibold text-slate-500 mb-1">Sources</p>
                  <ul className="space-y-1">
                    {msg.sources.map((s) => (
                      <li key={s.url}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary-600 hover:underline"
                        >
                          {s.title}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
              <Loader2 className="h-4 w-4 animate-spin text-teal-700" />
            </div>
            <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">
              Thinking…
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a general question about hemophilia…"
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          disabled={loading}
          aria-label="Chat message"
        />
        <Button type="submit" disabled={loading || !input.trim()}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
