import { AlertTriangle, Info, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { MEDICAL_DISCLAIMER_TEXT } from "@/data/site";

interface DisclaimerProps {
  variant?: "info" | "warning" | "medical" | "prominent";
  className?: string;
  children?: React.ReactNode;
}

export function Disclaimer({ variant = "info", className, children }: DisclaimerProps) {
  const styles = {
    info: "bg-primary-50 border-primary-300 text-primary-900",
    warning: "bg-amber-50 border-amber-300 text-amber-900",
    medical: "bg-red-50 border-red-300 text-red-900",
    prominent:
      "bg-amber-50 border-2 border-amber-400 text-slate-800 shadow-sm",
  };

  const Icon =
    variant === "prominent" || variant === "medical" || variant === "warning"
      ? ShieldAlert
      : Info;

  return (
    <div
      role="note"
      aria-label="Medical disclaimer"
      className={cn(
        "flex gap-3 rounded-xl border p-4 sm:p-5 text-sm leading-relaxed",
        styles[variant],
        className
      )}
    >
      <Icon className="h-6 w-6 shrink-0 mt-0.5" aria-hidden="true" />
      <div>{children}</div>
    </div>
  );
}

export function MedicalDisclaimerBanner({ prominent = false }: { prominent?: boolean }) {
  return (
    <Disclaimer variant={prominent ? "prominent" : "medical"}>
      <p className="font-semibold text-base mb-1">Important Medical Notice</p>
      <p>{MEDICAL_DISCLAIMER_TEXT}</p>
    </Disclaimer>
  );
}

export function ChatbotDisclaimer() {
  return (
    <Disclaimer variant="prominent" className="text-sm">
      <p className="font-semibold mb-1">HemoBot AI — Educational Use Only</p>
      <p>
        HemoBot AI explains general concepts and helps you find resources on this
        website. It does <strong>not</strong> diagnose conditions, recommend treatments, or replace
        your doctor or Hemophilia Treatment Center. For personal medical questions, contact a
        qualified healthcare professional.
      </p>
    </Disclaimer>
  );
}

export function ForumDisclaimer() {
  return (
    <Disclaimer variant="warning">
      <p className="font-semibold mb-1">Peer Support — Not Medical Advice</p>
      Community members share personal experiences. Posts may not be medically accurate and must
      not replace advice from a qualified healthcare professional or HTC.
    </Disclaimer>
  );
}

export function JournalPrivacyNote() {
  return (
    <Disclaimer variant="info">
      <strong>Your journal is private.</strong> Entries are for your personal records only. HemoBot
      does not analyze journal entries to diagnose or recommend treatment.
    </Disclaimer>
  );
}

export function PageDisclaimer() {
  return <MedicalDisclaimerBanner prominent />;
}

export function EmergencyNotice() {
  return (
    <Disclaimer variant="medical">
      <div className="flex items-start gap-2">
        <AlertTriangle className="h-5 w-5 shrink-0" />
        <p>
          <strong>Medical emergency?</strong> If you or someone else may be experiencing severe
          bleeding or another emergency, contact your physician or call <strong>911</strong>{" "}
          immediately. Do not use this website for emergency decisions.
        </p>
      </div>
    </Disclaimer>
  );
}
