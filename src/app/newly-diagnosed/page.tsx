import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  MapPin,
  MessageCircle,
  Users,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Card } from "@/components/Card";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Newly Diagnosed?",
  description: "A reassuring guided pathway for families newly diagnosed with hemophilia.",
};

const steps = [
  {
    number: 1,
    title: "Learn the Basics",
    description:
      "Understand what hemophilia is, how it affects the body, and what it means for your family.",
    href: "/learn",
    icon: BookOpen,
    cta: "Read Articles",
  },
  {
    number: 2,
    title: "Understand Hemophilia Types",
    description:
      "Learn the difference between Hemophilia A and B, and what mild, moderate, and severe mean in general terms.",
    href: "/learn",
    icon: HelpCircle,
    cta: "Compare Types",
  },
  {
    number: 3,
    title: "Find a Hemophilia Treatment Center",
    description:
      "Locate an official HTC near Palo Alto for comprehensive, specialized bleeding disorder care.",
    href: "/find-care",
    icon: MapPin,
    cta: "Find Care Near Me",
  },
  {
    number: 4,
    title: "Prepare Questions for Your Healthcare Team",
    description:
      "Use our journal to write down questions before your first hematology appointment.",
    href: "/journal",
    icon: MessageCircle,
    cta: "Open My Journal",
  },
  {
    number: 5,
    title: "Find Community Support",
    description:
      "Connect with other parents and patients who understand what you're going through.",
    href: "/community",
    icon: Users,
    cta: "Join the Community",
  },
  {
    number: 6,
    title: "Explore Trusted Resources",
    description:
      "Access official government resources, CDC information, and reputable educational materials.",
    href: "/resources",
    icon: BookOpen,
    cta: "View Resources",
  },
];

export default function NewlyDiagnosedPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-800 mb-4">
          You are not alone
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Newly Diagnosed?</h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          A new diagnosis can feel overwhelming. This guided pathway will help you take meaningful
          first steps — at your own pace.
        </p>
      </div>

      <Disclaimer variant="info" className="mt-8">
        This pathway provides general educational guidance only. It does not replace care from a
        qualified healthcare professional or Hemophilia Treatment Center. Every person&apos;s journey
        is unique.
      </Disclaimer>

      <div className="mt-12 space-y-6">
        {steps.map((step) => (
          <Card key={step.number} className="relative overflow-hidden">
            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-bold text-lg">
                {step.number}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <step.icon className="h-5 w-5 text-teal-600" />
                  <h2 className="text-xl font-semibold text-slate-900">{step.title}</h2>
                </div>
                <p className="mt-2 text-slate-600 leading-relaxed">{step.description}</p>
                <Link
                  href={step.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
                >
                  {step.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <CheckCircle2 className="h-6 w-6 text-slate-200 shrink-0 hidden sm:block" />
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center rounded-2xl bg-gradient-to-br from-primary-50 to-teal-50 p-8 border border-primary-100">
        <h2 className="text-xl font-bold text-slate-900">Have a question right now?</h2>
        <p className="mt-2 text-slate-600">
          Our Hemophilia Assistant can answer general educational questions anytime.
        </p>
        <Link
          href="/assistant"
          className="inline-flex items-center gap-2 mt-4 rounded-xl bg-primary-600 px-6 py-3 text-white font-semibold hover:bg-primary-700"
        >
          Ask the Assistant
        </Link>
      </div>
    </div>
  );
}
