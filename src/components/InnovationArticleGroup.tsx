import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card } from "./Card";
import { InnovationFigure } from "./InnovationFigure";
import { cn } from "@/lib/utils";
import type { Innovation, InnovationStatus } from "@/data/innovations";

const STATUS_STYLES: Record<InnovationStatus, string> = {
  "Approved or clinically available": "bg-teal-100 text-teal-800 border-teal-200",
  "Human clinical study": "bg-primary-100 text-primary-800 border-primary-200",
  "Long-term follow-up": "bg-violet-100 text-violet-800 border-violet-200",
  Preclinical: "bg-amber-100 text-amber-900 border-amber-200",
  "Early-stage research": "bg-slate-100 text-slate-700 border-slate-200",
};

export interface InnovationArticleSection {
  id: string;
  title: string;
  items: Innovation[];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface InnovationArticleBlockProps {
  innovation: Innovation;
}

function InnovationArticleBlock({ innovation }: InnovationArticleBlockProps) {
  return (
    <article className="border-b border-slate-100 pb-8 last:border-0 last:pb-0">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-semibold text-slate-900 leading-snug">{innovation.title}</h3>
        <span
          className={cn(
            "inline-flex shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-semibold",
            STATUS_STYLES[innovation.status]
          )}
        >
          {innovation.status}
        </span>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">{innovation.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {innovation.sources.map((source) => (
          <Link
            key={source.url}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${source.label} for ${innovation.title}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-primary-700 hover:bg-primary-50 hover:border-primary-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            {source.label}
            <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </article>
  );
}

interface InnovationArticleGroupProps {
  section: InnovationArticleSection;
}

export function InnovationArticleGroup({ section }: InnovationArticleGroupProps) {
  if (section.items.length === 0) return null;

  return (
    <section className="mb-12" aria-labelledby={`${section.id}-heading`}>
      <h2 id={`${section.id}-heading`} className="text-2xl font-bold text-slate-900 mb-6">
        {section.title}
      </h2>
      <Card className="space-y-8">
        {section.items.map((innovation) => (
          <InnovationArticleBlock key={innovation.id} innovation={innovation} />
        ))}
      </Card>
      {section.image && (
        <InnovationFigure
          src={section.image.src}
          alt={section.image.alt}
          width={section.image.width}
          height={section.image.height}
        />
      )}
    </section>
  );
}
