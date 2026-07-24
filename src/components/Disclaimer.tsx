import { AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface DisclaimerProps {
  variant?: "info" | "warning" | "medical";
  className?: string;
  children?: React.ReactNode;
}

export function Disclaimer({ variant = "info", className, children }: DisclaimerProps) {
  const styles = {
    info: "bg-primary-50 border-primary-200 text-primary-900",
    warning: "bg-amber-50 border-amber-200 text-amber-900",
    medical: "bg-red-50 border-red-200 text-red-900",
  };

  const Icon = variant === "warning" || variant === "medical" ? AlertTriangle : Info;

  return (
    <div
      role="note"
      className={cn(
        "flex gap-3 rounded-xl border p-4 text-sm leading-relaxed",
        styles[variant],
        className
      )}
    >
      <Icon className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
      <div>{children}</div>
    </div>
  );
}

export function MedicalDisclaimerBanner() {
  return (
    <Disclaimer variant="medical">
      <strong>Not medical advice.</strong> HEMOBOT is an educational and navigation platform. It
      does not diagnose conditions, assess emergencies, or recommend personalized treatment. For
      medical decisions, contact a qualified healthcare professional or Hemophilia Treatment Center.
      In an emergency, call <strong>911</strong>.
    </Disclaimer>
  );
}

export function ChatbotDisclaimer() {
  return (
    <Disclaimer variant="info" className="text-xs">
      Educational information only. This chatbot does not diagnose medical conditions or provide
      individualized medical advice. For personal medical questions, contact a qualified healthcare
      professional.
    </Disclaimer>
  );
}

export function ForumDisclaimer() {
  return (
    <Disclaimer variant="warning">
      Community members share personal experiences. Information posted by users may not be medically
      accurate and should not replace advice from a qualified healthcare professional.
    </Disclaimer>
  );
}

export function JournalPrivacyNote() {
  return (
    <Disclaimer variant="info">
      <strong>Your journal is private.</strong> Entries are stored locally in your session and are
      not shared publicly. HEMOBOT does not analyze journal entries to diagnose conditions or
      recommend treatment. Journal data is for your personal records only.
    </Disclaimer>
  );
}
