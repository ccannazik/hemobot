import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, MapPin, Users, Headphones } from "lucide-react";
import { Chatbot } from "@/components/Chatbot";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "HemoBot AI",
  description:
    "HemoBot AI — educational answers and website guidance for families new to hemophilia. Not medical advice.",
};

export default function AssistantPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-6xl flex-col px-3 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <header className="mb-4 shrink-0 sm:mb-6">
        <p className="text-sm font-medium text-teal-700 mb-1 sm:mb-2">Your AI Guide</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">HemoBot AI</h1>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
          Ask beginner questions in plain language. HemoBot AI explains medical concepts,
          summarizes treatments at a general level, and recommends which resources on this site to
          visit next — from treatment guides to the hospital directory and community.
        </p>
      </header>

      <div className="mb-4 flex shrink-0 gap-2 overflow-x-auto pb-1 sm:mb-6 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible">
        {[
          { href: "/treatments", label: "Treatment Overview", icon: MessageCircle },
          { href: "/find-care", label: "Hospital Directory", icon: MapPin },
          { href: "/community", label: "Join Community", icon: Users },
        ].map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 sm:shrink">
            <Card hover className="flex items-center gap-2 !py-2.5 sm:!py-3 whitespace-nowrap text-sm font-medium text-primary-700">
              <item.icon className="h-4 w-4 shrink-0" /> {item.label}
            </Card>
          </Link>
        ))}
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <Chatbot page />
      </div>

      <Card className="mt-4 sm:mt-6 shrink-0 bg-teal-50 border-teal-200 text-sm text-slate-600">
        <Headphones className="h-5 w-5 text-teal-700 mb-2" />
        Prefer hearing from real families? Visit our{" "}
        <Link href="/podcast" className="text-primary-600 font-medium hover:underline">podcast</Link>{" "}
        or browse{" "}
        <Link href="/learn" className="text-primary-600 font-medium hover:underline">evidence-based articles</Link>.
      </Card>
    </div>
  );
}
