import type { Metadata } from "next";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: July 2026</p>

      <div className="mt-8 prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">What We Collect</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
            <li>
              <strong>Journal entries:</strong> Stored privately and associated with a local session
              identifier. Not shared publicly.
            </li>
            <li>
              <strong>Forum posts:</strong> Publicly visible when you choose to post. Display name
              optional.
            </li>
            <li>
              <strong>Chatbot conversations:</strong> May be stored to improve the service. Not used
              for medical diagnosis.
            </li>
            <li>
              <strong>Location data:</strong> Only used when you explicitly search for nearby care or
              grant location permission. Not stored permanently.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">What We Do Not Do</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
            <li>We do not sell your personal data.</li>
            <li>We do not use journal entries to diagnose conditions.</li>
            <li>We do not share private journal data with other users.</li>
            <li>We do not collect unnecessary sensitive health information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Journal Privacy</h2>
          <p className="mt-3 text-sm">
            My Hemophilia Journal entries are private by default. They are stored in our database
            associated with your local session and are not visible to other users or the public.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Forum Privacy</h2>
          <p className="mt-3 text-sm">
            Posts and comments in the Hemophilia Community are public. Do not share personal medical
            details you wish to keep private. Community content may be moderated or removed if
            reported.
          </p>
        </section>

        <Disclaimer variant="info" className="mt-8">
          For questions about this privacy policy, contact the HemoBot team through our{" "}
          forum or official channels.
        </Disclaimer>
      </div>
    </div>
  );
}
