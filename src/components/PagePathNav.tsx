import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAdjacentPathSteps } from "@/data/site-path";

interface PagePathNavProps {
  currentHref: string;
}

export function PagePathNav({ currentHref }: PagePathNavProps) {
  const { previous, next } = getAdjacentPathSteps(currentHref);
  if (!previous && !next) return null;

  return (
    <nav
      className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3 sm:justify-between"
      aria-label="Suggested path navigation"
    >
      {previous ? (
        <Link
          href={previous.href}
          className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm hover:border-primary-200 hover:bg-primary-50/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-primary-600" aria-hidden="true" />
          <span>
            <span className="block text-xs text-slate-500">Previous</span>
            <span className="font-medium text-slate-800">{previous.label}</span>
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group inline-flex items-center justify-end gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm hover:border-primary-200 hover:bg-primary-50/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 sm:ml-auto text-right"
        >
          <span>
            <span className="block text-xs text-slate-500">Next</span>
            <span className="font-medium text-slate-800">{next.label}</span>
          </span>
          <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-primary-600" aria-hidden="true" />
        </Link>
      ) : null}
    </nav>
  );
}
