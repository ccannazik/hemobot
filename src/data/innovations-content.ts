export interface InnovationSource {
  label: string;
  url: string;
}

export interface InnovationSubsection {
  heading: string;
  paragraphs: string[];
}

export interface InnovationArticle {
  id: string;
  title: string;
  subsections: InnovationSubsection[];
  sources?: InnovationSource[];
}

export const INNOVATIONS_PAGE_TITLE = "Latest Hemophilia Biotechnology Innovations";

export const GENE_THERAPY_CHAPTER_TITLE =
  "Gene Therapy for Hemophilia: What Five Years Taught Us";

export const INNOVATIONS_ARTICLES: InnovationArticle[] = [
  {
    id: "valoctocogene",
    title: "Valoctocogene Roxaparvovec",
    subsections: [
      {
        heading: "What Is Valoctocogene Roxaparvovec?",
        paragraphs: [
          "Instead of topping up the missing protein factors from the outside, this therapy hands the body the recipe. It uses a harmless modified virus to carry a working copy of the factor VIII gene into liver cells, and from there the liver starts transcribing the protein itself. It is given once, as a single infusion.",
        ],
      },
      {
        heading: "What the 5-Year Data Show",
        paragraphs: [
          "The GENEr8-1 trial followed 134 men with severe hemophilia A for five years, which makes it the longest look we have at whether this actually lasts.",
          "For the most part, it held up. Compared with their own treatment before gene therapy, participants had about 83% fewer bleeds needing treatment and used roughly 95% less factor VIII. In the fifth year, more than three quarters of them had no treated bleeds at all, and they still reported better quality of life than when they started. Four out of five were off routine prophylaxis entirely.",
          "But the picture is not uniformly good. Factor VIII levels drift down over time, and they vary enormously between people. By week 260 the average was 13.7 IU/dL, while the median was only 6.2, which tells you a handful of strong responders are pulling the average up while plenty of others sit much lower. Twenty-five participants eventually went back on prophylaxis. The safety record, at least, was reassuring: no inhibitors, no clots, no cancers linked to the treatment across the full five years.",
        ],
      },
      {
        heading: "Where This Leaves Things",
        paragraphs: [
          "For most of the men in this trial, five years later, hemophilia is no longer something they plan their week around. That is a real change, and it is worth saying plainly. Still, the levels are sliding, some people never responded well in the first place, and nobody knows yet what year ten looks like or whether a second dose would even work. This is a serious option, not a cure, and the question of how long it lasts is still open.",
        ],
      },
    ],
    sources: [
      {
        label: "ScienceDirect — GENEr8-1 five-year analysis",
        url: "https://www.sciencedirect.com/science/article/pii/S2475037926000749",
      },
    ],
  },
  {
    id: "etranacogene",
    title: "Etranacogene Dezaparvovec",
    subsections: [
      {
        heading: "What Is Etranacogene Dezaparvovec?",
        paragraphs: [
          "It is a single infusion that uses an AAV5 viral vector to deliver a factor IX gene.",
        ],
      },
      {
        heading: "What the 5-Year Data Show",
        paragraphs: [
          "The HOPE-B trial enrolled 54 men with severe or moderately severe hemophilia B and followed them for five years, with results published at the end of 2025. Fifty of them made it through the full five years.",
          "Bleeding dropped from an adjusted rate of 4.16 per year before treatment to 1.52 across months 7 through 60 — a 63% reduction. Factor IX consumption fell by 96%, from roughly 257,000 units a year to under 11,000. For most of these men, that is the difference between a standing infusion schedule and only reaching for a factor occasionally.",
          "The striking part is what did not happen. Factor IX expression stayed stable across the five years, with a mean level of 36.1 IU/dL at year five. That is well into the mild range, and unlike the hemophilia A gene therapies, the levels here did not visibly slide downward over time. Side effects clustered early: 91 treatment-related events in the first six months, only 9 across the following four and a half years. No cancers linked to the vector and no lasting liver toxicity have turned up.",
          "It did not work for everyone. One participant with very high pre-existing antibodies to the AAV5 vector got no benefit at all, and another received only a partial dose. Prior exposure to a common virus can quietly disqualify you from a treatment like this.",
        ],
      },
      {
        heading: "Where This Leaves Things",
        paragraphs: [
          "Five years in, this looks like the more durable of the hemophilia gene therapies — stable expression, near-mild factor levels, most patients off routine infusions. That is a genuinely different life for people who have been infusing since childhood.",
          "However, Fifty-four men is a small trial, five years is not a lifetime, and the reason participants are being tracked out to fifteen years in a follow-up study is that nobody knows yet what happens at year ten or twenty. Neutralizing antibodies rule some people out from the start, and there is still no established way to re-dose someone whose expression fades. It is a one-shot bet with a good five-year record and an unfinished long-term one.",
        ],
      },
    ],
    sources: [
      {
        label: "NEJM — HOPE-B five-year results",
        url: "https://www.nejm.org/doi/abs/10.1056/NEJMoa2514332",
      },
    ],
  },
  {
    id: "fidanacogene",
    title: "Fidanacogene elaparvovec",
    subsections: [
      {
        heading: "What it is",
        paragraphs: [
          "Fidanacogene elaparvovec (brand name Beqvez, or Durveqtix in Europe) was a one-time gene therapy for hemophilia B — the type caused by a missing clotting protein called factor IX.",
          "It worked by using a harmless, modified virus to carry a working copy of the factor IX gene into liver cells. The liver would then make its own clotting factor, so a person wouldn't need regular infusions. It was given once, through an IV.",
        ],
      },
      {
        heading: "How it worked in trials",
        paragraphs: [
          "In the main study of 45 men with moderate to severe hemophilia B:",
          "Bleeding dropped by about 71% compared with their usual preventive infusions.",
          "Around 60% of men had no bleeds after the treatment, which is 29% higher than the period when they were on standard prophylaxis. About that same portion did not need any factor IX infusions.",
          "Factor IX levels rose to roughly 25% of normal — enough to move most people from \"severe\" to \"mild\" hemophilia. Not a full cure, but a big difference in daily life.",
          "It took about 3 months for levels to rise and settle after the infusion.",
          "In the earlier phase 1–2a group, followed the longest (a median of about 5.5 years), the benefit held up.",
          "Two important catches. First, most people screened couldn't get it. Of 316 men evaluated, 204 were ruled out — and 188 of those, nearly six in ten of everyone screened, were excluded for one reason alone: they already had neutralizing antibodies to the AAVRh74var virus, so their immune system would have destroyed the therapy before it worked. The threshold was strict; any detectable antibody disqualified you. A companion blood test screened for this in advance.",
          "Second, it wasn't truly \"one and done.\" About 6 in 10 people needed steroid medication for a few months afterward because the liver reacted to the treatment. That came with the blood tests taken once a week for at least 4 months, and for people with higher liver cancer risk, annual liver ultrasounds and blood tests indefinitely.",
          "Serious safety problems were not seen — no blood clots, no cancers, no dangerous immune reactions to the factor IX itself.",
        ],
      },
      {
        heading: "Where things stand today",
        paragraphs: [
          "It's no longer available. Pfizer stopped selling it worldwide in February 2025, less than a year after FDA approval.",
          "The most important thing to tell families: this was not a safety recall. Nothing dangerous was found. It was a business decision — very few patients and doctors chose it, so the company stopped making it. Anyone who already received it continues to be followed long-term.",
          "Why so few people chose to do the treatment comes down to the reasonable trade-offs. The treatment can not be undone or repeated and carries a list price of $3.5 million. Additionally, the antibody tests immediately disqualified most patients. Nobody knows for sure how long the benefit lasts beyond about six years, which is as far as the longest-followed patients have been tracked. And meanwhile, newer preventive medicines have become much easier to use — some are simple injections under the skin every week or two, instead of IV infusions.",
          "For people with hemophilia B, one gene therapy option remains: Hemgenix (etranacogene dezaparvovec), discussed earlier in this chapter. The difference that matters most here is the one Beqvez couldn't overcome — Hemgenix can be given to people with or without pre-existing antibodies to its viral vector. Many of the men who were screened out of Beqvez would be eligible for it. Non-gene-therapy preventive treatments remain available as well, and have improved considerably.",
        ],
      },
    ],
    sources: [
      {
        label: "NEJM — BENEGENE-2 phase 3 results (Cuker et al.)",
        url: "https://pubmed.ncbi.nlm.nih.gov/39321362/",
      },
      {
        label: "NEJM — multiyear follow-up (phase 1–2a group)",
        url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2307159",
      },
      {
        label: "Beqvez prescribing information (MedCentral summary)",
        url: "https://www.medcentral.com/drugs/monograph/188617-324023/fidanacogene-elaparvovec-dzkt-intravenous",
      },
      {
        label: "Pfizer FDA approval press release (April 2024)",
        url: "https://www.pfizer.com/news/press-release/press-release-detail/us-fda-approves-pfizers-beqveztm-fidanacogene-elaparvovec",
      },
      {
        label: "BioPharma Dive — Pfizer halts Beqvez sales (Feb 2025)",
        url: "https://www.biopharmadive.com/news/pfizer-beqvez-hemophilia-halt-sales-gene-therapy/740590/",
      },
    ],
  },
  {
    id: "autologous-cd34",
    title: "Autologous CD34+ stem-cell gene therapy for hemophilia A",
    subsections: [
      {
        heading: "",
        paragraphs: [
          "take the patient's own blood-forming stem cells, install a working FVIII gene, put them back using lentivirus. Because HSCs self-renew, every daughter cell inherits the gene, thus in theory a life long fix.",
        ],
      },
      {
        heading: "How it worked in Preclinical Trial",
        paragraphs: [
          "First the stem cells of the patient are extracted, using chemicals (G-CSF + plerixafor ) to coax it out of the bone marrow. It is then collected using apheresis.",
          "Second, the stem cells are edited using an inactive lentivirus to fix the gene for transcribing the missing Factor. Since lentivirus embeds the gene into the stem cell's genetic information, it will be a much longer fix than using AAV.",
          "Thirdly, the stem cells once edited must return back into the bone marrow. Which requires the use of Chemotherapy to clear out the old stem cells within the bone marrow. This part of the operation is the most dangerous, since the patient is susceptible to many environmental elements, and especially the clearing of bone marrow will lead to lack of differentiation of blood cells e.g. immune cells.",
          "Fourth, the stem cells are inserted back via IV drops.",
        ],
      },
      {
        heading: "Limitations",
        paragraphs: [
          "As described in the former, the third stage of the procedure requires the clearing of the old bone marrow, so that the new stem cells could multiply, and soon replace the old stem cells to be able to transcribe for the missing factor. This step could lead to infertility, as in the trial, one of the patients dropped out due to concerns of the exact problem, while many others are not eligible, due to age.",
        ],
      },
    ],
    sources: [
      {
        label: "PubMed — NEJM study",
        url: "https://pubmed.ncbi.nlm.nih.gov/39655790/",
      },
    ],
  },
  {
    id: "crispr-f8-lsec",
    title: "CRISPR correction of endogenous F8 in liver endothelial cells",
    subsections: [
      {
        heading: "",
        paragraphs: [
          "The usage of gene therapy - CRISPR cas9 - is injected into liver sinusoidal endothelial cells, which is a major site of factor VIII transcription, via MC3-based LNPs (nanolipid particles) encapsulating the cas9 mRNA in vivo.",
        ],
      },
      {
        heading: "In vivo research using mouses",
        paragraphs: [],
      },
      {
        heading: "Advantages of using LNPs",
        paragraphs: [
          "the short half-life of mRNA that allows for rapid and transient gene editing while preventing off-target effects resulting from prolonged Cas9 expression by plasmid or viral vector",
          "LNPs are known to preferentially accumulate in the liver due to its high blood perfusion rate to take up the majority of circulating lipid, thus it could be rapidly transferred to the site of gene therapy.",
          "Previous studies have demonstrated that routine administration of FVIII mRNA encapsulated in LNPs significantly enhances clotting activity in Hem A mice, which is more effective than FVIII protein replacement therapy Treatment of Hemophilia A Using Factor VIII Messenger RNA Lipid Nanoparticles - PubMed",
          "Additionally, the delivery of anti-CD3 antibody mRNA encapsulated in LNPs, following FVIII gene therapy, has been shown to reduce the immune response against FVIII. Since the LNPs are likely targeted by autoimmune system as a foreign object, this problem leads to ineffective delivery of FVIII in previous FVIII replacement treatments, affecting 30% of the patients.Induction of long-term tolerance to a specific antigen using anti-CD3 lipid nanoparticles following gene therapy - PubMed",
        ],
      },
      {
        heading: "Where it leaves the innovation",
        paragraphs: [
          "Currently this treatment hasn't been approved, and is still undergoing research to discover any other potential down sides to this treatment, especially in off-target situations. Current treatment involves AAV, which is a short term fix, and with CRISPR, with the ability to cleave, and fix the genes for the expression of FVIII, it could prove to be a life long fix.",
        ],
      },
    ],
  },
];

export const HEMOPHILIA_MECHANISM_VISUAL = {
  src: "/innovations/hemophilia-visual-1.png",
  alt: "Comparison diagram of clot formation in a normal blood vessel versus uncontrolled bleeding in hemophilia.",
  width: 800,
  height: 600,
};

export const CRISPR_VISUAL = {
  src: "/innovations/hemophilia-visual-3.png",
  alt: "Diagram of scissors cutting a DNA double helix, illustrating gene editing.",
  width: 400,
  height: 300,
};

export const NXT007_MECHANISM_VISUAL = {
  src: "/innovations/hemophilia-visual-6.png",
  alt: "Diagram showing NXT007 bridging Factor IXa and Factor X in the coagulation cascade.",
  width: 600,
  height: 400,
};
