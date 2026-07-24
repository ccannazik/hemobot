import type { Metadata } from "next";
import { MedicalDisclaimerBanner } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Medical Disclaimer</h1>

      <div className="mt-8 space-y-6">
        <MedicalDisclaimerBanner />

        <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
          <p>
            HEMOBOT is an educational information and community support platform. It is{" "}
            <strong>not</strong> a medical device, diagnostic tool, or emergency triage system.
          </p>

          <h2 className="text-lg font-semibold text-slate-900 pt-4">What HEMOBOT Provides</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>General educational information about hemophilia</li>
            <li>A directory of healthcare facilities and Hemophilia Treatment Centers</li>
            <li>Peer community support through moderated forums</li>
            <li>Private personal journaling tools</li>
            <li>Links to official government and medical organization resources</li>
          </ul>

          <h2 className="text-lg font-semibold text-slate-900 pt-4">What HEMOBOT Does Not Provide</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Medical diagnosis of any condition</li>
            <li>Individualized medical advice or treatment recommendations</li>
            <li>Medication dosing guidance</li>
            <li>Emergency medical assessment or triage</li>
            <li>A replacement for qualified healthcare professionals</li>
          </ul>

          <h2 className="text-lg font-semibold text-slate-900 pt-4">Emergency Situations</h2>
          <p>
            If you or someone else is experiencing a medical emergency — including severe or
            uncontrolled bleeding — call <strong>911</strong> immediately or go to the nearest
            emergency department. Do not rely on HEMOBOT or its chatbot for emergency decisions.
          </p>

          <h2 className="text-lg font-semibold text-slate-900 pt-4">Community Content</h2>
          <p>
            Information shared by community members reflects personal experiences and may not be
            medically accurate. Always verify health information with a qualified healthcare
            professional or Hemophilia Treatment Center.
          </p>

          <h2 className="text-lg font-semibold text-slate-900 pt-4">Healthcare Directory</h2>
          <p>
            Facility information is sourced from public directories and official websites. HEMOBOT
            makes no guarantees about the accuracy, availability, or quality of listed providers.
            Always verify current contact information and services directly with the facility.
          </p>
        </div>
      </div>
    </div>
  );
}
