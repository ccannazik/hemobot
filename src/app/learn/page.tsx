import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, BookOpen } from "lucide-react";
import { Card } from "@/components/Card";
import { articles, knowledgeSources } from "@/data/knowledge";

export const metadata: Metadata = {
  title: "Learn About Hemophilia",
  description: "Educational articles and trusted resources about hemophilia from CDC, Mayo Clinic, and leading organizations.",
};

export default function LearnPage() {
  const categories = [...new Set(articles.map((a) => a.category))];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Learn About Hemophilia</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Evidence-based educational articles curated from reputable medical organizations. This
          information is for general education only — not personalized medical advice.
        </p>
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
            <a
              key={source.id}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
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

      <div className="mt-12 text-center">
        <p className="text-slate-600 mb-4">Have a specific question?</p>
        <Link
          href="/assistant"
          className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-white font-semibold hover:bg-primary-700"
        >
          Ask the Hemophilia Assistant
        </Link>
      </div>
    </div>
  );
}
