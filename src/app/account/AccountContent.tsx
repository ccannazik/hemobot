"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, Lock, Shield, User, Mail, LogOut } from "lucide-react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Disclaimer } from "@/components/Disclaimer";
import { useAuth } from "@/components/AuthProvider";
import { SITE } from "@/data/site";

export default function AccountContent() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 sm:px-6 lg:px-8">
        <Card className="text-center py-12">
          <Lock className="h-12 w-12 text-primary-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-900">My Account</h1>
          <p className="mt-3 text-slate-600">Sign in to view your account information.</p>
          <Link href="/login?redirect=/account" className="inline-block mt-6">
            <Button>Sign In</Button>
          </Link>
        </Card>
      </div>
    );
  }

  async function handleSignOut() {
    await logout();
    router.push("/");
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">My Account</h1>
      <p className="mt-2 text-slate-600">Your {SITE.name} profile and account details.</p>

      <Disclaimer variant="info" className="mt-6">
        <div className="flex items-start gap-2">
          <Shield className="h-5 w-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-1">Privacy Reminder</p>
            <p>
              Your account information is used only to identify you in the community. We do not
              sell your data. Community posts are visible to other signed-in members. Read our{" "}
              <Link href="/privacy" className="text-primary-600 font-medium hover:underline">
                Privacy Policy
              </Link>{" "}
              for full details on how {SITE.name} handles your information.
            </p>
          </div>
        </div>
      </Disclaimer>

      <Card className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Account Information</h2>
        <dl className="space-y-4">
          <div className="flex items-start gap-3">
            <User className="h-5 w-5 text-slate-400 mt-0.5" />
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Display name</dt>
              <dd className="text-slate-900 font-medium">{user.name || "—"}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-slate-400 mt-0.5" />
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Email</dt>
              <dd className="text-slate-900 font-medium">{user.email}</dd>
            </div>
          </div>
        </dl>
      </Card>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/community">
          <Button variant="outline">Go to Community</Button>
        </Link>
        <Button variant="ghost" onClick={handleSignOut}>
          <LogOut className="h-4 w-4" /> Sign Out
        </Button>
      </div>
    </div>
  );
}
