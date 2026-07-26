import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, BookOpen, Users } from "lucide-react";
import { Card } from "@/components/Card";
import { PageDisclaimer } from "@/components/Disclaimer";
import { TREATMENT_SECTIONS } from "@/data/site";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Educational overview of hemophilia treatment concepts — factor replacement, prophylaxis, and newer options.",
};

export default function TreatmentsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-medium text-teal-700 mb-2">Understand Your Options</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Treatment Overview</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          After diagnosis, treatment decisions belong to you and your Hemophilia Treatment Center.
          These educational summaries help you prepare for conversations with your care team — they
          are not personalized medical advice.
        </p>
      </div>

      <PageDisclaimer />

      <div className="mt-10 space-y-6">
        {TREATMENT_SECTIONS.map((section) => (
          <Card key={section.title}>
            <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">{section.summary}</p>
            <p className="mt-2 text-xs text-slate-400">Source: {section.source}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href={section.learnMore}>
                <Button variant="outline" size="sm">
                  <BookOpen className="h-4 w-4" /> Learn More
                </Button>
              </Link>
              <Link href={`/assistant?q=${encodeURIComponent(section.askNavigator)}`}>
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4" /> Ask HemoBot AI
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-10 bg-teal-50 border-teal-200">
        <h3 className="font-semibold text-slate-900">What families do next</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>
            <Link href="/find-care" className="text-primary-600 hover:underline inline-flex items-center gap-1">
              Find a Hemophilia Treatment Center <ArrowRight className="h-3 w-3" />
            </Link>
          </li>
          <li>
            <Link href="/community" className="text-primary-600 hover:underline inline-flex items-center gap-1">
              Ask the community about treatment experiences <Users className="h-3 w-3 inline" />
            </Link>
          </li>
          <li>
            <Link href="/podcast" className="text-primary-600 hover:underline">
              Listen: Factor Replacement Explained Simply
            </Link>
          </li>
        </ul>
      </Card>
    </div>
  );
}
