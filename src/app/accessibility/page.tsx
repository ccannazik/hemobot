import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility statement for the HemoBot platform.",
};

export default function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Accessibility Statement</h1>

      <Card className="mt-8 space-y-4 text-slate-600 leading-relaxed">
        <p>
          {SITE.fullName} is committed to making our platform accessible to people with
          disabilities. We aim to conform to WCAG 2.1 Level AA guidelines.
        </p>
        <p>Our efforts include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Semantic HTML and keyboard-navigable interfaces</li>
          <li>Visible focus indicators and sufficient color contrast</li>
          <li>Alternative text for meaningful images and icons</li>
          <li>Responsive design for mobile and assistive technologies</li>
          <li>Plain-language content for newly diagnosed families</li>
        </ul>
        <p>
          If you encounter accessibility barriers, please{" "}
          <Link href="/contact" className="text-primary-600 hover:underline">contact us</Link> at{" "}
          {SITE.email}. We will work to address your concern promptly.
        </p>
      </Card>
    </div>
  );
}
