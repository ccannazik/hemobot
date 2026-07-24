import type { Metadata } from "next";
import { Chatbot } from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Hemophilia Assistant",
  description: "Ask general educational questions about hemophilia. Educational information only — not medical advice.",
};

export default function AssistantPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Hemophilia Assistant</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Ask general educational questions about hemophilia. I provide information grounded in
          reputable sources like the CDC, Mayo Clinic, and National Bleeding Disorders Foundation.
          I cannot diagnose conditions or recommend personalized treatment.
        </p>
      </div>
      <Chatbot />
    </div>
  );
}
