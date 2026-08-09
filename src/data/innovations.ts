export type InnovationStatus =
  | "Approved or clinically available"
  | "Human clinical study"
  | "Long-term follow-up"
  | "Preclinical"
  | "Early-stage research";

export interface ResearchSource {
  label: string;
  url: string;
}

export interface Innovation {
  id: string;
  number: number;
  title: string;
  summary: string;
  status: InnovationStatus;
  category: "genetic" | "other";
  sources: ResearchSource[];
}

export const INNOVATIONS_INTRO =
  "Explore recent developments in hemophilia gene therapy, genome editing, RNA-based treatments, engineered cell therapies, and non-factor therapies. Each entry includes a short plain-language summary and a link to the related scientific publication.";

export const INNOVATIONS_DISCLAIMER =
  "This page is for educational purposes only and does not provide medical advice. Some technologies listed below are experimental, preclinical, or in early-stage research and are not currently available as approved treatments. Patients should discuss treatment decisions with a qualified hemophilia specialist.";

export const GENETIC_DISTINCTION_NOTICE =
  "The approved AAV gene therapies and human clinical studies near the top of this section reflect technologies with substantial clinical data. Many CRISPR, base-editing, prime-editing, mRNA, and engineered-cell approaches listed afterward remain preclinical or early-stage. They should not be interpreted as treatments that are currently available to patients.";

export const INNOVATIONS: Innovation[] = [
  {
    id: "gen-1",
    number: 1,
    title: "Valoctocogene roxaparvovec for hemophilia A",
    summary:
      "An AAV5 vector delivers a shortened functional F8 gene to liver cells. Five-year phase III findings indicate sustained reductions in bleeding episodes and factor VIII use, although expression may decline over time in some patients.",
    status: "Approved or clinically available",
    category: "genetic",
    sources: [{ label: "View on PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/42064204/" }],
  },
  {
    id: "gen-2",
    number: 2,
    title: "Etranacogene dezaparvovec for hemophilia B",
    summary:
      "An AAV5 gene therapy delivers the high-activity FIX-Padua gene variant, enabling liver cells to produce functional factor IX after a single infusion.",
    status: "Approved or clinically available",
    category: "genetic",
    sources: [
      { label: "View phase III study", url: "https://pubmed.ncbi.nlm.nih.gov/36812434/" },
      { label: "View five-year analysis", url: "https://pubmed.ncbi.nlm.nih.gov/41358585/" },
    ],
  },
  {
    id: "gen-3",
    number: 3,
    title: "Fidanacogene elaparvovec for hemophilia B",
    summary:
      "An AAV gene therapy carrying the high-activity FIX-R338L, also known as FIX-Padua, variant. Phase III results reported substantial reductions in bleeding and factor IX prophylaxis use.",
    status: "Approved or clinically available",
    category: "genetic",
    sources: [{ label: "View on PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/39321362/" }],
  },
  {
    id: "gen-4",
    number: 4,
    title: "Long-term durability of AAV factor IX gene transfer",
    summary:
      "Long-term follow-up studies suggest that factor IX expression and reduced bleeding can persist for years following a single AAV-based gene-therapy infusion.",
    status: "Long-term follow-up",
    category: "genetic",
    sources: [{ label: "View five-year study", url: "https://pubmed.ncbi.nlm.nih.gov/41358585/" }],
  },
  {
    id: "gen-5",
    number: 5,
    title: "Autologous CD34+ stem-cell gene therapy for hemophilia A",
    summary:
      "A patient's blood-forming stem cells are collected and modified with a lentiviral vector carrying an engineered F8 gene. The modified cells are then returned to the patient after conditioning.",
    status: "Human clinical study",
    category: "genetic",
    sources: [{ label: "Read the NEJM study", url: "https://pubmed.ncbi.nlm.nih.gov/39655790/" }],
  },
  {
    id: "gen-6",
    number: 6,
    title: "Myeloid- and macrophage-directed factor VIII production",
    summary:
      "This stem-cell-based strategy uses a CD68 promoter to direct factor VIII production primarily through monocyte and macrophage cell lineages.",
    status: "Human clinical study",
    category: "genetic",
    sources: [{ label: "Read the NEJM study", url: "https://pubmed.ncbi.nlm.nih.gov/39655790/" }],
  },
  {
    id: "gen-7",
    number: 7,
    title: "CRISPR correction of endogenous F8 in liver endothelial cells",
    summary:
      "Lipid nanoparticles carrying Cas9 messenger RNA and guide RNA corrected an F8 frameshift mutation in a hemophilia A mouse model and restored measurable factor VIII activity.",
    status: "Preclinical",
    category: "genetic",
    sources: [{ label: "View on PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/39640016/" }],
  },
  {
    id: "gen-8",
    number: 8,
    title: "Endothelial-targeted lipid nanoparticles for F8 editing",
    summary:
      "New nanoparticle designs are being developed to target liver sinusoidal endothelial cells, which are a major physiological source of factor VIII.",
    status: "Preclinical",
    category: "genetic",
    sources: [{ label: "View related PubMed study", url: "https://pubmed.ncbi.nlm.nih.gov/39640016/" }],
  },
  {
    id: "gen-9",
    number: 9,
    title: "Base editing of hemophilia A mutations",
    summary:
      "DNA base editors corrected selected disease-causing F8 variants in laboratory models and restored a portion of normal factor VIII secretion or activity without using conventional double-strand DNA breaks.",
    status: "Preclinical",
    category: "genetic",
    sources: [{ label: "View on PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/38718928/" }],
  },
  {
    id: "gen-10",
    number: 10,
    title: "Prime editing for hemophilia A variants",
    summary:
      "Prime-editing systems may correct substitutions, small insertions, and small deletions that cannot be addressed by standard base-editing methods.",
    status: "Early-stage research",
    category: "genetic",
    sources: [{ label: "View on PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/38718928/" }],
  },
  {
    id: "gen-11",
    number: 11,
    title: "Base editing to generate high-activity FIX-R338Q",
    summary:
      "Rather than repairing every individual F9 mutation, researchers edited the F9 gene to create the gain-of-function FIX-R338Q variant, sometimes called the Shanghai variant.",
    status: "Preclinical",
    category: "genetic",
    sources: [{ label: "View on PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/41129587/" }],
  },
  {
    id: "gen-12",
    number: 12,
    title: "Combined F9 insertion and antithrombin editing",
    summary:
      "An experimental strategy combines insertion of a therapeutic factor IX sequence with reduction of SERPINC1, the gene that encodes antithrombin, to rebalance blood coagulation through two mechanisms.",
    status: "Preclinical",
    category: "genetic",
    sources: [{ label: "View on PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/37064777/" }],
  },
  {
    id: "gen-13",
    number: 13,
    title: "Lipid-nanoparticle F9 mRNA therapy",
    summary:
      "Lipid nanoparticles deliver temporary F9 messenger RNA to liver cells, allowing them to produce factor IX without permanently changing the patient's DNA. Repeat dosing may be required.",
    status: "Preclinical",
    category: "genetic",
    sources: [{ label: "View on PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/41355232/" }],
  },
  {
    id: "gen-14",
    number: 14,
    title: "Engineered factor VIII proteins with improved secretion",
    summary:
      "Modified F8 transgenes are being designed to increase factor VIII production, improve secretion, reduce cellular stress, and potentially permit lower gene-therapy vector doses.",
    status: "Preclinical",
    category: "genetic",
    sources: [{ label: "View on PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/41198051/" }],
  },
  {
    id: "gen-15",
    number: 15,
    title: "Gene-engineered B cells producing factor IX",
    summary:
      "Autologous B cells are genetically modified to secrete high-activity factor IX as a potentially durable and adjustable form of living medicine.",
    status: "Preclinical",
    category: "genetic",
    sources: [{ label: "View on PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/40914806/" }],
  },
  {
    id: "gen-16",
    number: 16,
    title: "Nonviral CRISPR ribonucleoprotein delivery",
    summary:
      "Lipid nanoparticles deliver CRISPR components transiently as Cas9 protein, messenger RNA, or ribonucleoprotein complexes. This may reduce prolonged exposure to the gene-editing machinery compared with DNA-based delivery.",
    status: "Early-stage research",
    category: "genetic",
    sources: [{ label: "View on PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/39415058/" }],
  },
  {
    id: "other-1",
    number: 1,
    title: "Concizumab anti-TFPI therapy",
    summary:
      "A subcutaneous monoclonal antibody that blocks tissue factor pathway inhibitor, increasing thrombin generation in people with hemophilia A or B, including some patients with inhibitors.",
    status: "Approved or clinically available",
    category: "other",
    sources: [{ label: "View phase III PubMed study", url: "https://pubmed.ncbi.nlm.nih.gov/37646676/" }],
  },
  {
    id: "other-2",
    number: 2,
    title: "Marstacimab anti-TFPI therapy",
    summary:
      "A once-weekly subcutaneous antibody that rebalances coagulation by targeting tissue factor pathway inhibitor rather than replacing factor VIII or factor IX.",
    status: "Approved or clinically available",
    category: "other",
    sources: [
      { label: "View study without inhibitors", url: "https://pubmed.ncbi.nlm.nih.gov/40608864/" },
      { label: "View study with inhibitors", url: "https://pubmed.ncbi.nlm.nih.gov/41351884/" },
    ],
  },
  {
    id: "other-3",
    number: 3,
    title: "Fitusiran RNA-interference therapy",
    summary:
      "A small interfering RNA treatment that reduces liver production of antithrombin. It is designed to improve clot generation in hemophilia A or B, with or without inhibitors.",
    status: "Approved or clinically available",
    category: "other",
    sources: [
      { label: "View phase III study", url: "https://pubmed.ncbi.nlm.nih.gov/37003287/" },
      { label: "View updated dose-regimen study", url: "https://pubmed.ncbi.nlm.nih.gov/40053895/" },
    ],
  },
  {
    id: "other-4",
    number: 4,
    title: "Mim8 next-generation factor VIII-mimetic antibody",
    summary:
      "A bispecific antibody designed to bring activated factor IX and factor X together, reproducing an important part of factor VIII's function in the coagulation process.",
    status: "Human clinical study",
    category: "other",
    sources: [{ label: "View on PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/41246456/" }],
  },
];

export const GENETIC_INNOVATIONS = INNOVATIONS.filter(
  (i) => i.category === "genetic" && !["gen-4", "gen-6", "gen-8"].includes(i.id)
);
export const OTHER_INNOVATIONS = INNOVATIONS.filter((i) => i.category === "other");
