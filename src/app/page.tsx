import Link from "next/link";
import {
  MapPin,
  MessageCircle,
  BookOpen,
  Users,
  Shield,
  ArrowRight,
  Heart,
  Building2,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { MedicalDisclaimerBanner } from "@/components/Disclaimer";
import { Chatbot } from "@/components/Chatbot";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-teal-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-100)_0%,transparent_50%)] opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-800 mb-6">
              <MapPin className="h-4 w-4" />
              Now serving Palo Alto, California
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Find Hemophilia Care{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-600">
                Near You
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Reliable information, nearby specialized care, and a supportive community for people
              and families affected by hemophilia.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/find-care">
                <Button size="lg">
                  <MapPin className="h-5 w-5" />
                  Find Care Near Me
                </Button>
              </Link>
              <Link href="/assistant">
                <Button size="lg" variant="outline">
                  <MessageCircle className="h-5 w-5" />
                  Ask the Hemophilia Assistant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <MedicalDisclaimerBanner />
      </div>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Everything You Need in One Place</h2>
            <p className="mt-4 text-slate-600">
              From finding a Hemophilia Treatment Center to connecting with other families — HEMOBOT
              supports your entire journey.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Find Nearby Care",
                desc: "Interactive map of hospitals, HTCs, and hematology specialists near Palo Alto.",
                href: "/find-care",
                color: "text-primary-600 bg-primary-50",
              },
              {
                icon: MessageCircle,
                title: "Hemophilia Assistant",
                desc: "Ask general educational questions powered by evidence-based knowledge sources.",
                href: "/assistant",
                color: "text-teal-600 bg-teal-50",
              },
              {
                icon: BookOpen,
                title: "Learn",
                desc: "Curated articles from CDC, Mayo Clinic, and leading bleeding disorder organizations.",
                href: "/learn",
                color: "text-violet-600 bg-violet-50",
              },
              {
                icon: Users,
                title: "Community Forum",
                desc: "Connect with patients, parents, and caregivers in a moderated peer support space.",
                href: "/community",
                color: "text-pink-600 bg-pink-50",
              },
              {
                icon: Heart,
                title: "My Journal",
                desc: "Private personal notes, appointment records, and questions for your care team.",
                href: "/journal",
                color: "text-rose-600 bg-rose-50",
              },
              {
                icon: Building2,
                title: "Government Resources",
                desc: "Official federal and California state healthcare and assistance resources.",
                href: "/resources",
                color: "text-amber-600 bg-amber-50",
              },
            ].map((feature) => (
              <Link key={feature.href} href={feature.href}>
                <Card hover className="h-full">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newly Diagnosed CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-teal-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-12 w-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white">Newly Diagnosed?</h2>
          <p className="mt-4 text-primary-100 max-w-xl mx-auto text-lg">
            We know this can feel overwhelming. Our guided pathway will help you take the first steps
            with confidence.
          </p>
          <Link href="/newly-diagnosed" className="inline-block mt-8">
            <Button size="lg" variant="outline" className="!border-white !text-white hover:!bg-white/10">
              Start Your Journey
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Chatbot Preview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Meet the Hemophilia Assistant</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Get calm, accessible answers to general questions about hemophilia — from
                understanding the basics to learning about treatment concepts and finding care.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-teal-600" />
                  Grounded in CDC, Mayo Clinic, and NBDF sources
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-teal-600" />
                  Safety-first — never diagnoses or recommends treatment
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-teal-600" />
                  Parent-friendly, accessible language
                </li>
              </ul>
              <Link href="/assistant" className="inline-block mt-6">
                <Button>Open Full Assistant</Button>
              </Link>
            </div>
            <div>
              <Chatbot compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
