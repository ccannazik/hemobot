import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_PATH } from "@/data/site-path";

interface SitePathGuideProps {
  currentHref?: string;
  className?: string;
}

export function SitePathGuide({ currentHref, className }: SitePathGuideProps) {
  return (
    <aside
      className={cn(
        "rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 sm:px-5 sm:py-4",
        className
      )}
      aria-label="Suggested site path"
    >
      <p className="text-xs font-medium text-slate-500 mb-2">Don&apos;t know where to start?</p>
      <p className="text-sm text-slate-600 leading-relaxed mb-3">
        Many visitors read in this order — you can jump to any page at any time:
      </p>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-sm">
        {SITE_PATH.map((step, index) => {
          const isCurrent = step.href === currentHref;
          return (
            <li key={step.id} className="flex items-center gap-1.5 min-w-0">
              {index > 0 && (
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
              )}
              {isCurrent ? (
                <span
                  className="font-semibold text-primary-700 truncate"
                  aria-current="page"
                >
                  {step.label}
                </span>
              ) : (
                <Link
                  href={step.href}
                  className="font-medium text-primary-600 hover:text-primary-700 hover:underline truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                >
                  {step.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
