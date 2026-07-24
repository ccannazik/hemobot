import type { Metadata } from "next";
import { HemophiliaJournal } from "@/components/HemophiliaJournal";

export const metadata: Metadata = {
  title: "My Hemophilia Journal",
  description: "Private personal journal for recording notes, questions, and experiences related to hemophilia care.",
};

export default function JournalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">My Hemophilia Journal</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          A private space to record personal notes, questions for your healthcare provider, and
          appointment records. This is not a diagnostic tool.
        </p>
      </div>
      <HemophiliaJournal />
    </div>
  );
}
