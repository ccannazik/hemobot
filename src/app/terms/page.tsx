import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the HemoBot platform.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Terms of Use</h1>

      <Card className="mt-8 space-y-6 text-slate-600 leading-relaxed text-sm">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Acceptance</h2>
          <p className="mt-2">
            By using {SITE.fullName}, you agree to these terms. If you do not agree, please do not
            use the platform.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Educational Purpose</h2>
          <p className="mt-2">
            This platform provides educational information and peer support. It does not provide
            medical advice, diagnosis, or treatment. See our{" "}
            <Link href="/disclaimer" className="text-primary-600 hover:underline">Medical Disclaimer</Link>.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Community Guidelines</h2>
          <p className="mt-2">
            Community members must not share medical advice as fact, harass others, or post
            misleading information. We reserve the right to moderate or remove content.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Accounts</h2>
          <p className="mt-2">
            You are responsible for maintaining the confidentiality of your account credentials
            and for activity under your account.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
          <p className="mt-2">
            Questions about these terms:{" "}
            <Link href="/contact" className="text-primary-600 hover:underline">{SITE.email}</Link>
          </p>
        </section>
      </Card>
    </div>
  );
}
