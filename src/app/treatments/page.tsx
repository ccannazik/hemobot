import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { TREATMENTS_PAGE_TITLE, TREATMENT_SECTIONS } from "@/data/treatments-content";

export const metadata: Metadata = {
  title: "Treatments",
  description: "Treatment overview for hemophilia.",
};

export default function TreatmentsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="text-sm font-medium text-teal-700 mb-2">Understand Your Options</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">{TREATMENTS_PAGE_TITLE}</h1>
      </header>

      <div className="space-y-6">
        {TREATMENT_SECTIONS.map((section) => (
          <Card key={section.title}>
            <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">{section.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
