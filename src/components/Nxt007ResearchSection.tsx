import Link from "next/link";
import { ExternalLink, FileText } from "lucide-react";
import { Card } from "./Card";
import { NXT007_RESEARCH, NXT007_REFERENCES } from "@/data/nxt007-research";

export function Nxt007ResearchSection() {
  return (
    <section className="mb-12" aria-labelledby="nxt007-poster-heading">
      <div className="mb-6">
        <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800 mb-3">
          Featured Research
        </span>
        <h2 id="nxt007-poster-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
          {NXT007_RESEARCH.title}
        </h2>
        <p className="mt-2 text-sm font-medium text-primary-600">{NXT007_RESEARCH.subtitle}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">HemoBot Team Research Poster</h3>
        <Card className="overflow-hidden !p-0">
          <div className="relative w-full bg-slate-50" style={{ aspectRatio: "8.5 / 11" }}>
            <object
              data={`${NXT007_RESEARCH.posterPath}#view=FitH`}
              type="application/pdf"
              aria-label={NXT007_RESEARCH.posterAlt}
              className="absolute inset-0 h-full w-full border-0"
            >
              <iframe
                src={`${NXT007_RESEARCH.posterPath}#view=FitH`}
                title={NXT007_RESEARCH.posterAlt}
                className="absolute inset-0 h-full w-full border-0"
              />
            </object>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-4 py-3 bg-slate-50">
            <p className="text-xs text-slate-500">HemoBot research poster — NXT007</p>
            <Link
              href={NXT007_RESEARCH.posterPath}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open NXT007 research poster PDF in a new tab"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
            >
              <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
              Open full poster (PDF)
              <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
          References
        </h3>
        <ol className="space-y-2 text-xs text-slate-600 leading-relaxed list-none">
          {NXT007_REFERENCES.filter((ref) => ref.id !== 8).map((ref) => (
            <li key={ref.id} className="flex gap-2">
              <span className="font-medium text-slate-500 shrink-0">[{ref.id}]</span>
              <span>
                {ref.citation}{" "}
                {ref.url && (
                  <Link
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline break-all"
                  >
                    {ref.url}
                  </Link>
                )}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
