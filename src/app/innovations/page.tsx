import type { Metadata } from "next";
import { InnovationCard } from "@/components/InnovationCard";
import { Disclaimer } from "@/components/Disclaimer";
import {
  GENETIC_INNOVATIONS,
  OTHER_INNOVATIONS,
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
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="text-sm font-medium text-teal-700 mb-2">Research &amp; Science</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Latest Hemophilia Biotechnology Innovations
        </h1>
        <p className="mt-4 text-slate-600 leading-relaxed">{INNOVATIONS_INTRO}</p>
      </header>

      <Disclaimer variant="prominent">
        <p className="font-semibold text-base mb-1">Educational Information Only</p>
        <p>{INNOVATIONS_DISCLAIMER}</p>
      </Disclaimer>

      <section className="mt-12" aria-labelledby="genetic-innovations-heading">
        <h2 id="genetic-innovations-heading" className="text-2xl font-bold text-slate-900 mb-6">
          Genetic and Gene-Based Innovations
        </h2>
        <div className="space-y-4">
          {GENETIC_INNOVATIONS.map((innovation) => (
            <InnovationCard key={innovation.id} innovation={innovation} />
          ))}
        </div>

        <Disclaimer variant="warning" className="mt-8">
          <p className="font-semibold mb-1">Important Distinction</p>
          <p>{GENETIC_DISTINCTION_NOTICE}</p>
        </Disclaimer>
      </section>

      <section className="mt-12" aria-labelledby="other-innovations-heading">
        <h2 id="other-innovations-heading" className="text-2xl font-bold text-slate-900 mb-6">
          Other Important Treatment Innovations
        </h2>
        <div className="space-y-4">
          {OTHER_INNOVATIONS.map((innovation) => (
            <InnovationCard key={innovation.id} innovation={innovation} />
          ))}
        </div>
      </section>
    </div>
  );
}
