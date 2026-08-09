import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card } from "./Card";
import type { InnovationArticle } from "@/data/innovations-content";

interface InnovationResearchArticleProps {
  article: InnovationArticle;
  hideTitle?: boolean;
}

export function InnovationResearchArticle({ article, hideTitle = false }: InnovationResearchArticleProps) {
  return (
    <article className="border-b border-slate-100 pb-10 last:border-0 last:pb-0">
      {!hideTitle && (
        <h3 className="text-xl font-semibold text-slate-900 mb-5">{article.title}</h3>
      )}
      <div className="space-y-6">
        {article.subsections.map((subsection) => {
          if (!subsection.heading && subsection.paragraphs.length === 0) return null;

          return (
            <div key={subsection.heading || "intro"}>
              {subsection.heading && (
                <h4 className="text-base font-semibold text-slate-800 mb-2">
                  {subsection.heading}
                </h4>
              )}
              {subsection.paragraphs.length > 0 && (
                <div className="space-y-3">
                  {subsection.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-sm text-slate-600 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {article.sources && article.sources.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {article.sources.map((source) => (
            <Link
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${source.label} — ${article.title}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-primary-700 hover:bg-primary-50 hover:border-primary-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              {source.label}
              <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}

interface InnovationResearchChapterProps {
  title?: string;
  articles: InnovationArticle[];
}

export function InnovationResearchChapter({ title, articles }: InnovationResearchChapterProps) {
  return (
    <section
      className="mb-12"
      aria-labelledby={title ? `chapter-${title.slice(0, 24).replace(/\s/g, "-")}` : undefined}
    >
      {title && (
        <h2
          id={`chapter-${title.slice(0, 24).replace(/\s/g, "-")}`}
          className="text-2xl font-bold text-slate-900 mb-6"
        >
          {title}
        </h2>
      )}
      <Card className="space-y-10">
        {articles.map((article) => (
          <InnovationResearchArticle key={article.id} article={article} />
        ))}
      </Card>
    </section>
  );
}
