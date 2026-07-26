"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, Clock, Send } from "lucide-react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { EmergencyNotice, PageDisclaimer } from "@/components/Disclaimer";
import { CONTACT_FAQ, SITE } from "@/data/site";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact Us</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Questions about {SITE.name}? Send us a message — we provide educational and navigation
          support, not medical advice.
        </p>
      </div>

      <EmergencyNotice />

      <div className="mt-8">
        <PageDisclaimer />
      </div>

      <div className="mt-10 grid lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Card>
            <Mail className="h-5 w-5 text-primary-600 mb-2" />
            <h3 className="font-semibold text-slate-900">Email</h3>
            <a href={`mailto:${SITE.email}`} className="text-sm text-primary-600 hover:underline break-all">
              {SITE.email}
            </a>
          </Card>
          <Card>
            <Phone className="h-5 w-5 text-primary-600 mb-2" />
            <h3 className="font-semibold text-slate-900">Phone</h3>
            <p className="text-sm text-slate-500 italic">{SITE.phoneNote}</p>
          </Card>
          <Card>
            <Clock className="h-5 w-5 text-primary-600 mb-2" />
            <h3 className="font-semibold text-slate-900">Office Hours</h3>
            <p className="text-sm text-slate-600">{SITE.officeHours}</p>
          </Card>
        </div>

        <div className="lg:col-span-2">
          {submitted ? (
            <Card className="text-center py-12 bg-teal-50">
              <Send className="h-10 w-10 text-teal-600 mx-auto mb-4" />
              <h2 className="text-xl font-semibold">Message received</h2>
              <p className="mt-2 text-slate-600 text-sm">
                We&apos;ll get back to you by email. For medical questions, contact your
                Hemophilia Treatment Center.
              </p>
            </Card>
          ) : (
            <Card>
              <h2 className="font-semibold text-lg mb-4">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
                />
                <textarea
                  placeholder="How can we help?"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
                />
                <Button type="submit">Send Message</Button>
              </form>
            </Card>
          )}
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {CONTACT_FAQ.map((item) => (
            <Card key={item.q}>
              <h3 className="font-semibold text-slate-900">{item.q}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.a}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Read our{" "}
          <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>.
        </p>
      </section>
    </div>
  );
}
