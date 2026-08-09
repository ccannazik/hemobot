import type { Metadata } from "next";
import { Nxt007ResearchSection } from "@/components/Nxt007ResearchSection";
import { Disclaimer } from "@/components/Disclaimer";
import {
  InnovationResearchArticle,
  InnovationResearchChapter,
} from "@/components/InnovationResearchArticle";
import { InnovationFigure } from "@/components/InnovationFigure";
import { SitePathGuide } from "@/components/SitePathGuide";
import { PagePathNav } from "@/components/PagePathNav";
import { Card } from "@/components/Card";
import {
  INNOVATIONS_PAGE_TITLE,
  GENE_THERAPY_CHAPTER_TITLE,
  INNOVATIONS_ARTICLES,
  HEMOPHILIA_MECHANISM_VISUAL,
  CRISPR_VISUAL,
} from "@/data/innovations-content";
import { INNOVATIONS_DISCLAIMER } from "@/data/innovations";

export const metadata: Metadata = {
  title: "Hemophilia Biotechnology Innovations",
  description: "Hemophilia gene therapy and research summaries with source links.",
};

export default function InnovationsPage() {
  const geneTherapyArticles = INNOVATIONS_ARTICLES.filter((a) =>
    ["valoctocogene", "etranacogene", "fidanacogene"].includes(a.id)
  );
  const stemCellArticle = INNOVATIONS_ARTICLES.find((a) => a.id === "autologous-cd34");
  const crisprArticle = INNOVATIONS_ARTICLES.find((a) => a.id === "crispr-f8-lsec");

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="text-sm font-medium text-teal-700 mb-2">Research &amp; Science</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">{INNOVATIONS_PAGE_TITLE}</h1>
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

      <InnovationResearchChapter title={GENE_THERAPY_CHAPTER_TITLE} articles={geneTherapyArticles} />

      {stemCellArticle && (
        <section className="mb-12" aria-labelledby="stem-cell-heading">
          <h2 id="stem-cell-heading" className="text-2xl font-bold text-slate-900 mb-6">
            {stemCellArticle.title}
          </h2>
          <Card>
            <InnovationResearchArticle article={stemCellArticle} hideTitle />
          </Card>
        </section>
      )}

      {crisprArticle && (
        <section className="mb-12" aria-labelledby="crispr-heading">
          <h2 id="crispr-heading" className="text-2xl font-bold text-slate-900 mb-6">
            {crisprArticle.title}
          </h2>
          <Card>
            <InnovationResearchArticle article={crisprArticle} hideTitle />
          </Card>
          <InnovationFigure
            src={CRISPR_VISUAL.src}
            alt={CRISPR_VISUAL.alt}
            width={CRISPR_VISUAL.width}
            height={CRISPR_VISUAL.height}
          />
        </section>
      )}

      <PagePathNav currentHref="/innovations" />
    </div>
  );
}
