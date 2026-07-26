"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Logo } from "@/components/Logo";
import { LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { useAuth } from "@/components/AuthProvider";

export function LoginForm() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { login, register } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/community";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await register(name, email, password);
      }
      router.push(redirect);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <div className="flex gap-2 mb-6 p-1 bg-slate-100 rounded-xl">
        <button
          type="button"
          onClick={() => setMode("login")}
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors ${
            mode === "login" ? "bg-white shadow text-primary-700" : "text-slate-600"
          }`}
        >
          <LogIn className="h-4 w-4" /> Sign In
        </button>
        <button
          type="button"
          onClick={() => setMode("register")}
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors ${
            mode === "register" ? "bg-white shadow text-primary-700" : "text-slate-600"
          }`}
        >
          <UserPlus className="h-4 w-4" /> Create Account
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "register" && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Display name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
              placeholder="How you'd like to appear in the community"
            />
          </div>
        )}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
        )}

        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? "Please wait…" : mode === "login" ? "Sign In" : "Create Account"}
        </Button>
      </form>

      <p className="mt-6 text-xs text-slate-500 text-center">
        By joining, you agree to our{" "}
        <Link href="/terms" className="text-primary-600 hover:underline">
          Terms of Use
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-primary-600 hover:underline">
          Privacy Policy
        </Link>
        . Community posts are peer support — not medical advice.
      </p>
    </>
  );
}

export function LoginPageContent() {
  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <Logo size="auth" showName className="justify-center mb-4" />
        <h1 className="text-3xl font-bold text-slate-900">Join the Community</h1>
        <p className="mt-3 text-slate-600">
          Create a free account to connect with families, caregivers, and patients navigating
          hemophilia together.
        </p>
      </div>
      <Card>
        <LoginForm />
      </Card>
    </div>
  );
}
