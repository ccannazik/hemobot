import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, BookOpen, MessageCircle, MapPin, Headphones } from "lucide-react";
import { Card } from "@/components/Card";
import { SitePathGuide } from "@/components/SitePathGuide";
import { PagePathNav } from "@/components/PagePathNav";
import { articles, knowledgeSources } from "@/data/knowledge";

export const metadata: Metadata = {
  title: "Learn",
  description: "Evidence-based educational articles about hemophilia for newly diagnosed families.",
};

export default function LearnPage() {
  const categories = [...new Set(articles.map((a) => a.category))];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-teal-700 mb-2">Understand Hemophilia</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Learn About Hemophilia</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Evidence-based articles curated for families who just received a diagnosis. This
          information is for general education only — not personalized medical advice.
        </p>
      </div>

      <SitePathGuide currentHref="/learn" className="mt-8" />

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/treatments" className="text-sm text-primary-600 hover:underline inline-flex items-center gap-1">
          <BookOpen className="h-4 w-4" /> Treatment Overview →
        </Link>
        <Link href="/assistant" className="text-sm text-primary-600 hover:underline inline-flex items-center gap-1">
          <MessageCircle className="h-4 w-4" /> Ask HemoBot AI →
        </Link>
        <Link href="/podcast" className="text-sm text-primary-600 hover:underline inline-flex items-center gap-1">
          <Headphones className="h-4 w-4" /> Patient Stories Podcast →
        </Link>
      </div>

      {categories.map((cat) => (
        <section key={cat} className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">{cat}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {articles
              .filter((a) => a.category === cat)
              .map((article) => {
                const source = knowledgeSources.find((s) => s.id === article.sourceId);
                return (
                  <Card key={article.slug} hover>
                    <BookOpen className="h-8 w-8 text-primary-500 mb-3" />
                    <h3 className="text-lg font-semibold text-slate-900">{article.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{article.summary}</p>
                    <p className="mt-4 text-sm text-slate-700 leading-relaxed">{article.content}</p>
                    {source && (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:underline"
                      >
                        Source: {source.organization}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </Card>
                );
              })}
          </div>
        </section>
      ))}

      <section className="mt-16">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Trusted External Resources</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {knowledgeSources.map((source) => (
            <a key={source.id} href={source.url} target="_blank" rel="noopener noreferrer" className="block">
              <Card hover className="h-full">
                <h3 className="font-medium text-slate-900 text-sm">{source.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{source.organization}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs text-primary-600">
                  Visit resource <ExternalLink className="h-3 w-3" />
                </span>
              </Card>
            </a>
          ))}
        </div>
      </section>

      <Card className="mt-12 bg-primary-50 text-center">
        <p className="text-slate-700 mb-4">Ready to find care near you?</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/assistant" className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-white font-semibold hover:bg-primary-700">
            <MessageCircle className="h-5 w-5" /> Ask HemoBot AI
          </Link>
          <Link href="/find-care" className="inline-flex items-center gap-2 rounded-xl border border-primary-600 px-6 py-3 text-primary-700 font-semibold hover:bg-primary-50">
            <MapPin className="h-5 w-5" /> Hospital Directory
          </Link>
        </div>
      </Card>

      <PagePathNav currentHref="/learn" />
    </div>
  );
}
