import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, MapPin, Users, Headphones } from "lucide-react";
import { Chatbot } from "@/components/Chatbot";
import { PageDisclaimer } from "@/components/Disclaimer";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "HemoBot AI",
  description:
    "HemoBot AI — educational answers and website guidance for families new to hemophilia. Not medical advice.",
};

export default function AssistantPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-medium text-teal-700 mb-2">Your AI Guide</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">HemoBot AI</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Ask beginner questions in plain language. HemoBot AI explains medical concepts,
          summarizes treatments at a general level, and recommends which resources on this site to
          visit next — from treatment guides to the hospital directory and community.
        </p>
      </div>

      <PageDisclaimer />

      <div className="mt-6 grid sm:grid-cols-3 gap-3">
        {[
          { href: "/treatments", label: "Treatment Overview", icon: MessageCircle },
          { href: "/find-care", label: "Hospital Directory", icon: MapPin },
          { href: "/community", label: "Join Community", icon: Users },
        ].map((item) => (
          <Link key={item.href} href={item.href}>
            <Card hover className="flex items-center gap-2 !py-3 text-sm font-medium text-primary-700">
              <item.icon className="h-4 w-4" /> {item.label}
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Chatbot />
      </div>

      <Card className="mt-8 bg-teal-50 border-teal-200 text-sm text-slate-600">
        <Headphones className="h-5 w-5 text-teal-700 mb-2" />
        Prefer hearing from real families? Visit our{" "}
        <Link href="/podcast" className="text-primary-600 font-medium hover:underline">podcast</Link>{" "}
        or browse{" "}
        <Link href="/learn" className="text-primary-600 font-medium hover:underline">evidence-based articles</Link>.
      </Card>
    </div>
  );
}
