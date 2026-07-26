import Link from "next/link";
import {
  MapPin,
  MessageCircle,
  BookOpen,
  Users,
  Shield,
  ArrowRight,
  Compass,
  Bot,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { MedicalDisclaimerBanner } from "@/components/Disclaimer";
import { Chatbot } from "@/components/Chatbot";
import { LogoMark } from "@/components/Logo";
import { HOMEPAGE_SECTIONS, USER_JOURNEY, SITE } from "@/data/site";

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  compass: Compass,
  book: BookOpen,
  map: MapPin,
  users: Users,
  bot: Bot,
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-teal-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-100)_0%,transparent_50%)] opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <LogoMark className="mb-6" />
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              New to Hemophilia?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-600">
                You&apos;re not alone.
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              {SITE.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/assistant">
                <Button size="lg">
                  <MessageCircle className="h-5 w-5" />
                  Talk with HemoBot
                </Button>
              </Link>
              <Link href="/find-care">
                <Button size="lg" variant="outline">
                  <MapPin className="h-5 w-5" />
                  Find Treatment Centers
                </Button>
              </Link>
              <Link href="/community">
                <Button size="lg" variant="outline">
                  <Users className="h-5 w-5" />
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <MedicalDisclaimerBanner prominent />
      </div>

      <section className="py-16 bg-white border-y border-warm-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Your Path After Diagnosis</h2>
            <p className="mt-4 text-slate-600">
              Explore resources step by step — from understanding hemophilia to finding care and
              connecting with others.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {USER_JOURNEY.map((step) => (
              <Link key={step.step} href={step.href}>
                <Card hover className="h-full">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-bold">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                    Continue <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Everything in One Place</h2>
            <p className="mt-4 text-slate-600">
              {SITE.name} brings educational content, care navigation, and community support together.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOMEPAGE_SECTIONS.map((section) => {
              const Icon = sectionIcons[section.icon] || BookOpen;
              return (
                <Link key={section.href} href={section.href}>
                  <Card hover className="h-full">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{section.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{section.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  </Card>
                </Link>
              );
            })}
            <Link href="/podcast">
              <Card hover className="h-full">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Headphones className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Podcast & Video</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Watch and listen to patient stories and educational content.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                  Watch <ArrowRight className="h-4 w-4" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Shield className="h-10 w-10 text-primary-600 mb-4" />
            <h2 className="text-3xl font-bold text-slate-900">About {SITE.name}</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">{SITE.mission}</p>
            <Link href="/about" className="inline-block mt-4 text-primary-600 font-medium hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Meet {SITE.aiName}</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Ask beginner questions in plain language. {SITE.aiName} explains general concepts
                and helps you find the right pages on this site — it does not replace your doctor.
              </p>
              <Link href="/assistant" className="inline-block mt-6">
                <Button>Open {SITE.aiName}</Button>
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
