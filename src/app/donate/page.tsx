"use client";

import { useState } from "react";
import { Heart, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { DONATION_TIERS } from "@/data/site";

const IMPACT_ITEMS = [
  "Patient education materials for newly diagnosed families",
  "Moderated support groups and community events",
  "Awareness campaigns in schools and communities",
  "Educational podcasts and resource updates",
  "Free access to the HemoBot platform",
];

export default function DonatePage() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number | "custom">(25);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const displayAmount = amount === "custom" ? customAmount : amount;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 mb-4">
          Beta
        </span>
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 mb-4">
          <Heart className="h-7 w-7" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Support HemoBot</h1>
        <p className="mt-4 text-slate-600 max-w-xl mx-auto">
          This page is in <strong>beta</strong>. Donations are symbolic only — no payment is
          processed. This demonstrates how a future donation flow would work.
        </p>
      </div>

      <Card className="mt-10">
        <h2 className="font-semibold text-lg text-slate-900">Your gift supports</h2>
        <ul className="mt-4 space-y-2">
          {IMPACT_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </Card>

      {submitted ? (
        <Card className="mt-8 text-center py-12 bg-teal-50 border-teal-200">
          <CheckCircle2 className="h-12 w-12 text-teal-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-900">Thank you for your generosity</h2>
          <p className="mt-2 text-slate-600">
            This is a demonstration donation form for our course project. In production, this would
            connect to a secure payment processor.
          </p>
        </Card>
      ) : (
        <Card className="mt-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => setFrequency("once")}
                className={`flex-1 rounded-lg py-2.5 text-sm font-medium ${
                  frequency === "once" ? "bg-white shadow text-primary-700" : "text-slate-600"
                }`}
              >
                One-time
              </button>
              <button
                type="button"
                onClick={() => setFrequency("monthly")}
                className={`flex-1 rounded-lg py-2.5 text-sm font-medium ${
                  frequency === "monthly" ? "bg-white shadow text-primary-700" : "text-slate-600"
                }`}
              >
                Monthly
              </button>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-700 mb-3">Select amount</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {DONATION_TIERS.map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setAmount(tier)}
                    className={`rounded-xl border-2 py-3 text-center font-semibold transition-colors ${
                      amount === tier
                        ? "border-primary-600 bg-primary-50 text-primary-700"
                        : "border-slate-200 hover:border-primary-300"
                    }`}
                  >
                    ${tier}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setAmount("custom")}
                className={`mt-3 w-full rounded-xl border-2 py-3 text-sm font-medium ${
                  amount === "custom"
                    ? "border-primary-600 bg-primary-50 text-primary-700"
                    : "border-slate-200"
                }`}
              >
                Custom amount
              </button>
              {amount === "custom" && (
                <input
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
                />
              )}
            </div>

            <div className="rounded-xl bg-slate-50 p-4 text-center">
              <p className="text-sm text-slate-600">
                {frequency === "monthly" ? "Monthly donation" : "One-time donation"}
              </p>
              <p className="text-3xl font-bold text-slate-900 mt-1">
                ${displayAmount || "—"}
              </p>
            </div>

            <Button type="submit" className="w-full" size="lg">
              {frequency === "monthly" ? "Start Monthly Giving" : "Donate Now"}
            </Button>

            <p className="text-xs text-slate-500 text-center">
              <strong>Beta — symbolic only.</strong> No real payment is collected. A secure payment
              processor would be integrated in a future release.
            </p>
          </form>
        </Card>
      )}
    </div>
  );
}
