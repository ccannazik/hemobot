import { Suspense } from "react";
import type { Metadata } from "next";
import { LoginPageContent } from "./LoginForm";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Create a free account to join the HemoBot community.",
};

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading…</div>}>
      <LoginPageContent />
    </Suspense>
  );
}
