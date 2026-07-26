import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "About HemoBot — an educational and community platform for hemophilia.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">About {SITE.name}</h1>
      <p className="mt-4 text-lg text-slate-600 leading-relaxed">{SITE.mission}</p>

      <Card className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">What {SITE.name} offers</h2>
        <ul className="mt-3 space-y-2 text-slate-600 leading-relaxed list-disc pl-5">
          <li>Educational articles about hemophilia</li>
          <li>A hospital and HTC directory</li>
          <li>{SITE.aiName} for general questions and site navigation</li>
          <li>A community forum for peer support</li>
          <li>Podcast and video content</li>
        </ul>
        <p className="mt-4 text-sm text-slate-500">
          {SITE.name} provides educational information only — not medical advice or diagnosis.
        </p>
      </Card>

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link href="/contact" className="text-primary-600 hover:underline">Contact us →</Link>
        <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy →</Link>
      </div>
    </div>
  );
}
