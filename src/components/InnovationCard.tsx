import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";
import type { Innovation, InnovationStatus } from "@/data/innovations";

const STATUS_STYLES: Record<
  InnovationStatus,
  { badge: string; border: string }
> = {
  "Approved or clinically available": {
    badge: "bg-teal-100 text-teal-800 border-teal-200",
    border: "border-l-teal-500",
  },
  "Human clinical study": {
    badge: "bg-primary-100 text-primary-800 border-primary-200",
    border: "border-l-primary-500",
  },
  "Long-term follow-up": {
    badge: "bg-violet-100 text-violet-800 border-violet-200",
    border: "border-l-violet-500",
  },
  Preclinical: {
    badge: "bg-amber-100 text-amber-900 border-amber-200",
    border: "border-l-amber-500",
  },
  "Early-stage research": {
    badge: "bg-slate-100 text-slate-700 border-slate-200",
    border: "border-l-slate-400",
  },
};

interface InnovationCardProps {
  innovation: Innovation;
}

export function InnovationCard({ innovation }: InnovationCardProps) {
  const styles = STATUS_STYLES[innovation.status];

  return (
    <Card className={cn("border-l-4", styles.border)}>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-3 min-w-0">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-sm font-bold text-primary-700"
            aria-hidden="true"
          >
            {innovation.number}
          </span>
          <h3 className="text-lg font-semibold text-slate-900 leading-snug pt-0.5">
            {innovation.title}
          </h3>
        </div>
        <span
          className={cn(
            "inline-flex shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold",
            styles.badge
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
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-primary-700 hover:bg-primary-50 hover:border-primary-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            {source.label}
            <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </Card>
  );
}
