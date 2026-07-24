import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Building2 } from "lucide-react";
import { Card } from "@/components/Card";
import { governmentResources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Government & State Resources",
  description: "Official federal and California government healthcare, insurance, and assistance resources.",
};

export default function ResourcesPage() {
  const categories = [...new Set(governmentResources.map((r) => r.category))];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Government & State Resources
        </h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Links to official public resources for healthcare, insurance, disability services, and
          emergency information. All links point to official government websites.
        </p>
      </div>

      {categories.map((category) => (
        <section key={category} className="mt-12">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary-600" />
            {category}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {governmentResources
              .filter((r) => r.category === category)
              .map((resource) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target={resource.url.startsWith("tel:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  <Card hover className="h-full">
                    <h3 className="font-semibold text-slate-900">{resource.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {resource.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs text-primary-600">
                      Visit official site <ExternalLink className="h-3 w-3" />
                    </span>
                  </Card>
                </a>
              ))}
          </div>
        </section>
      ))}

      <div className="mt-12 rounded-2xl bg-primary-50 border border-primary-200 p-6">
        <p className="text-sm text-primary-900">
          HEMOBOT does not provide eligibility determinations for government programs. Visit the
          official websites linked above for current requirements and application processes.
        </p>
      </div>
    </div>
  );
}
