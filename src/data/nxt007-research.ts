export interface ResearchReference {
  id: number;
  citation: string;
  url?: string;
}

export const NXT007_RESEARCH = {
  title: "NXT007: A Next-Generation Factor VIII–Mimetic Bispecific Antibody",
  subtitle: "HemoBot Team Research Project",
  posterPath: "/innovations/NXT007-poster.pdf",
  posterAlt:
    "Research poster titled NXT007: The Future of Hemophilia A Treatment by Ceren Cannazik, Aakash Aggrwal, Matteo Marrufo, Justin Law, and Nil Canozkan, showing introduction, methods, potency results compared with emicizumab, an antibody structure diagram, and conclusions.",
  sections: [
    {
      heading: "Background",
      paragraphs: [
        "Hemophilia is a genetic condition in which the lack of a blood-clotting protein named factor VIII makes coagulation difficult. That means that even small bleeding can result in a serious problem. Innovation in recent years has helped develop therapies to treat the condition, and one of the most recent advancements is NXT007.",
      ],
    },
    {
      heading: "Current Treatment Limitations",
      paragraphs: [
        "The options patients have right now are not perfect. Factor replacement therapy can help treat the condition, but the patient needs frequent administration throughout their entire life. Another newer antibody drug named emicizumab can make bleeding easier to manage, but still does not restore clotting to normal levels.",
      ],
    },
    {
      heading: "What Is NXT007?",
      paragraphs: [
        "NXT007 is a bispecific antibody, which means it joins two different clotting factors and mimics the job of factor VIII. It has also been reported to be a longer-term solution, requiring fewer doses. No threatening clotting was reported in early studies, and a single injection was tolerated in healthy participants.",
        "NXT007 is not fully developed yet, and clinical tests are underway. But this treatment could make it easier for individuals with hemophilia to live their life with less risk. It intends to bring their clotting levels closer to that of someone without hemophilia.",
      ],
    },
  ],
  teamNote:
    "The HemoBot team completed a research project on NXT007 as part of our hemophilia innovations education initiative. The poster below summarizes our findings for educational purposes.",
};

export const NXT007_REFERENCES: ResearchReference[] = [
  {
    id: 1,
    citation:
      "Centers for Disease Control and Prevention. Treatment of Hemophilia. Reviewed November 13, 2024. Accessed July 14, 2026.",
    url: "https://www.cdc.gov/hemophilia/treatment/index.html",
  },
  {
    id: 2,
    citation:
      "Parisi K, Kumar A. Emicizumab. In: StatPearls [Internet]. Treasure Island, FL: StatPearls Publishing; updated July 4, 2023. Accessed July 14, 2026.",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK559180/",
  },
  {
    id: 3,
    citation:
      "Sambe T, Miwa T, Yoneyama K, et al. A first-in-human study of NXT007, a next-generation, activated factor VIII-mimetic bispecific antibody, in healthy participants. J Thromb Haemost. 2025;23(10):3098-3110. doi:10.1016/j.jtha.2025.06.013",
    url: "https://pubmed.ncbi.nlm.nih.gov/41246456/",
  },
  {
    id: 4,
    citation:
      "Koga H, Yamano T, Betancur J, et al. Efficient production of bispecific antibody by FAST-Ig and its application to NXT007 for the treatment of hemophilia A. mAbs. 2023;15(1):2222441. doi:10.1080/19420862.2023.2222441",
    url: "https://pubmed.ncbi.nlm.nih.gov/37440268/",
  },
  {
    id: 5,
    citation:
      "US Food and Drug Administration, Center for Drug Evaluation and Research, Center for Biologics Evaluation and Research. Bispecific Antibody Development Programs: Guidance for Industry. May 2021. Accessed July 14, 2026.",
    url: "https://www.fda.gov/media/123313/download",
  },
  {
    id: 6,
    citation:
      "Teranishi-Ikawa Y, Soeda T, Koga H, et al. A bispecific antibody NXT007 exerts a hemostatic activity in hemophilia A monkeys enough to keep a nonhemophilic state. J Thromb Haemost. 2024;22(2):430-440. doi:10.1016/j.jtha.2023.09.034",
    url: "https://pubmed.ncbi.nlm.nih.gov/37890447/",
  },
  {
    id: 7,
    citation:
      "Al-Huniti A, Reyes Hernandez M, Ten Eyck P, Staber JM. Mental health disorders in haemophilia: systematic literature review and meta-analysis. Haemophilia.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8475067/",
  },
  {
    id: 8,
    citation:
      "Anthropic. Claude (Opus 4.8) [Large language model]. Accessed July 14, 2026.",
    url: "https://claude.ai",
  },
];
