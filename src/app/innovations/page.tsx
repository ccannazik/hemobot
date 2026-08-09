import type { Metadata } from "next";
import Link from "next/link";
import { Nxt007ResearchSection } from "@/components/Nxt007ResearchSection";
import { Disclaimer } from "@/components/Disclaimer";
import { InnovationArticleGroup, INNOVATIONS_DELIVERABLE } from "@/components/InnovationArticleGroup";
import { InnovationFigure } from "@/components/InnovationFigure";
import { SitePathGuide } from "@/components/SitePathGuide";
import { PagePathNav } from "@/components/PagePathNav";
import {
  INNOVATION_ARTICLE_SECTIONS,
  HEMOPHILIA_MECHANISM_VISUAL,
} from "@/data/innovations-article";
import {
  INNOVATIONS_INTRO,
  INNOVATIONS_DISCLAIMER,
  GENETIC_DISTINCTION_NOTICE,
} from "@/data/innovations";

export const metadata: Metadata = {
  title: "Hemophilia Biotechnology Innovations",
  description:
    "Explore recent hemophilia research involving gene therapy, CRISPR editing, RNA interference, engineered cells, anti-TFPI therapies, and factor VIII-mimetic antibodies.",
};

export default function InnovationsPage() {
  const articleSections = INNOVATION_ARTICLE_SECTIONS.filter(
    (section) => section.id !== "other-treatments"
  );
  const otherSection = INNOVATION_ARTICLE_SECTIONS.find(
    (section) => section.id === "other-treatments"
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="text-sm font-medium text-teal-700 mb-2">Research &amp; Science</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Latest Hemophilia Biotechnology Innovations
        </h1>
        <p className="mt-4 text-slate-600 leading-relaxed">{INNOVATIONS_INTRO}</p>
      </header>

      <SitePathGuide currentHref="/innovations" className="mb-8" />

      <Disclaimer variant="subtle" className="mb-8">
        <p className="font-medium mb-0.5">Educational information only</p>
        <p>{INNOVATIONS_DISCLAIMER}</p>
      </Disclaimer>

      <InnovationFigure
        src={HEMOPHILIA_MECHANISM_VISUAL.src}
        alt={HEMOPHILIA_MECHANISM_VISUAL.alt}
        width={HEMOPHILIA_MECHANISM_VISUAL.width}
        height={HEMOPHILIA_MECHANISM_VISUAL.height}
      />

      <Nxt007ResearchSection />

      {articleSections.map((section) => (
        <InnovationArticleGroup key={section.id} section={section} />
      ))}

      <Disclaimer variant="subtle" className="my-8">
        <p className="font-medium mb-0.5">Important distinction</p>
        <p>{GENETIC_DISTINCTION_NOTICE}</p>
      </Disclaimer>

      {otherSection && <InnovationArticleGroup section={otherSection} />}

      <aside className="mt-12 rounded-xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-2">
          Project deliverable
        </p>
        <p className="text-sm font-semibold text-slate-900">
          {INNOVATIONS_DELIVERABLE.name}
          {" — "}
          <Link
            href={`mailto:${INNOVATIONS_DELIVERABLE.email}`}
            className="text-primary-600 hover:underline font-medium"
          >
            {INNOVATIONS_DELIVERABLE.email}
          </Link>
        </p>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {INNOVATIONS_DELIVERABLE.description}
        </p>
      </aside>

      <PagePathNav currentHref="/innovations" />
    </div>
  );
}
