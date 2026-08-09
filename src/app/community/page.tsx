import type { Metadata } from "next";
import Link from "next/link";
import { CommunityGate } from "@/components/CommunityForum";

export const metadata: Metadata = {
  title: "Community",
  description:
    "A moderated peer-support community for newly diagnosed families, parents, caregivers, and adults with hemophilia.",
};

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Connect With Families</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Share experiences, ask questions, and find support from people who understand the journey.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          Looking for patient stories? Visit our{" "}
          <Link href="/podcast" className="text-primary-600 hover:underline">podcast</Link> or ask
          the{" "}
          <Link href="/assistant" className="text-primary-600 hover:underline">HemoBot AI</Link>.
        </p>
      </div>
      <CommunityGate />
    </div>
  );
}
