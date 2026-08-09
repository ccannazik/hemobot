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
  Headphones,
} from "lucide-react";
import { Card } from "@/components/Card";

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
    cta: "Hospital Directory",
  },
  {
    number: 4,
    title: "Ask HemoBot AI",
    description:
      "Get calm answers to beginner questions and learn which resources on this site to visit next.",
    href: "/assistant",
    icon: MessageCircle,
    cta: "Talk with HemoBot AI",
  },
  {
    number: 5,
    title: "Understand Treatment Options",
    description:
      "Educational overview of factor replacement, prophylaxis, and newer options — to discuss with your HTC.",
    href: "/treatments",
    icon: HelpCircle,
    cta: "Treatment Overview",
  },
  {
    number: 6,
    title: "Join the Community",
    description:
      "Connect with other parents and patients who understand what you're going through.",
    href: "/community",
    icon: Users,
    cta: "Join Community",
  },
  {
    number: 7,
    title: "Listen to Patient Stories",
    description:
      "Hear real experiences from families on the HemoBot podcast.",
    href: "/podcast",
    icon: Headphones,
    cta: "Listen to Podcast",
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
          HemoBot AI can answer general educational questions anytime — it does not replace your doctor.
        </p>
        <Link
          href="/assistant"
          className="inline-flex items-center gap-2 mt-4 rounded-xl bg-primary-600 px-6 py-3 text-white font-semibold hover:bg-primary-700"
        >
          Talk with HemoBot AI
        </Link>
      </div>
    </div>
  );
}
