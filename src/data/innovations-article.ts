import type { Innovation } from "./innovations";
import { INNOVATIONS, OTHER_INNOVATIONS } from "./innovations";

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

const byId = (id: string) => INNOVATIONS.find((item) => item.id === id)!;

/** Editorial deletions: gen-4, gen-6, gen-8 removed as duplicates. */
const GENE_THERAPY_ITEMS: Innovation[] = [
  byId("gen-1"),
  byId("gen-2"),
  byId("gen-3"),
];

const STEM_CELL_ITEM: Innovation[] = [byId("gen-5")];

const CRISPR_LSEC_ITEMS: Innovation[] = [byId("gen-7")];

const GENOME_EDITING_ITEMS: Innovation[] = [
  byId("gen-9"),
  byId("gen-10"),
  byId("gen-11"),
  byId("gen-12"),
  byId("gen-13"),
  byId("gen-14"),
  byId("gen-15"),
  byId("gen-16"),
];

export const INNOVATION_ARTICLE_SECTIONS: InnovationArticleSection[] = [
  {
    id: "gene-therapy-five-year",
    title: "Gene Therapy for Hemophilia: What Five Years Taught Us",
    items: GENE_THERAPY_ITEMS,
  },
  {
    id: "stem-cell-gene-therapy",
    title: "Autologous CD34+ stem-cell gene therapy",
    items: STEM_CELL_ITEM,
  },
  {
    id: "crispr-f8-lsec",
    title: "CRISPR correction of endogenous F8 in liver endothelial cells",
    items: CRISPR_LSEC_ITEMS,
    image: {
      src: "/innovations/hemophilia-visual-3.png",
      alt: "Diagram of scissors cutting a DNA double helix, illustrating gene editing.",
      width: 400,
      height: 300,
    },
  },
  {
    id: "genome-editing-research",
    title: "Genome Editing and Related Research",
    items: GENOME_EDITING_ITEMS,
  },
  {
    id: "other-treatments",
    title: "Other Important Treatment Innovations",
    items: OTHER_INNOVATIONS,
  },
];

export const HEMOPHILIA_MECHANISM_VISUAL = {
  src: "/innovations/hemophilia-visual-1.png",
  alt: "Comparison diagram of clot formation in a normal blood vessel versus uncontrolled bleeding in hemophilia.",
  width: 800,
  height: 600,
};

export const NXT007_MECHANISM_VISUAL = {
  src: "/innovations/hemophilia-visual-6.png",
  alt: "Diagram showing NXT007 bridging Factor IXa and Factor X in the coagulation cascade.",
  width: 600,
  height: 400,
};
