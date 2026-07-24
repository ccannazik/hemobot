export interface KnowledgeSource {
  id: string;
  title: string;
  url: string;
  organization: string;
}

export const knowledgeSources: KnowledgeSource[] = [
  {
    id: "cdc-htc",
    title: "CDC Hemophilia Treatment Center Directory",
    url: "https://dbdgateway.cdc.gov/HTCDirSearch.aspx",
    organization: "Centers for Disease Control and Prevention",
  },
  {
    id: "mayo-hemophilia",
    title: "Hemophilia — Symptoms and Causes",
    url: "https://www.mayoclinic.org/diseases-conditions/hemophilia/symptoms-causes/syc-20373327",
    organization: "Mayo Clinic",
  },
  {
    id: "cleveland-a-vs-b",
    title: "Hemophilia A vs B Explained",
    url: "https://health.clevelandclinic.org/hemophilia-a-vs-b-explained",
    organization: "Cleveland Clinic",
  },
  {
    id: "cdc-women",
    title: "Information for Women",
    url: "https://www.cdc.gov/hemophilia/about/information-for-women.html",
    organization: "Centers for Disease Control and Prevention",
  },
  {
    id: "nbdf-a",
    title: "Hemophilia A",
    url: "https://www.bleeding.org/bleeding-disorders-a-z/types/hemophilia-a",
    organization: "National Bleeding Disorders Foundation",
  },
  {
    id: "severity",
    title: "Hemophilia Severity",
    url: "https://www.bleedingdisorders.com/hemophilia-a/severity",
    organization: "Bleeding Disorders.com",
  },
  {
    id: "cdc-testing",
    title: "Hemophilia Testing",
    url: "https://www.cdc.gov/hemophilia/testing/index.html",
    organization: "Centers for Disease Control and Prevention",
  },
  {
    id: "cdc-research",
    title: "Data and Research",
    url: "https://www.cdc.gov/hemophilia/data-research/index.html",
    organization: "Centers for Disease Control and Prevention",
  },
  {
    id: "hoacny-treatment",
    title: "How Hemophilia Is Treated",
    url: "https://www.hoacny.com/hemophilia/how-hemophilia-treated",
    organization: "HOACNY",
  },
  {
    id: "pmc-treatment",
    title: "Hemophilia Treatment — Peer-Reviewed Article",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4313676/",
    organization: "PubMed Central",
  },
  {
    id: "nbdf-inhibitors",
    title: "What Is an Inhibitor?",
    url: "https://www.bleeding.org/bleeding-disorders-a-z/overview/inhibitors/what-is-an-inhibitor",
    organization: "National Bleeding Disorders Foundation",
  },
  {
    id: "pmc-newer",
    title: "Newer Treatment Approaches — Peer-Reviewed Article",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11849425/",
    organization: "PubMed Central",
  },
  {
    id: "haemophilia-society-self",
    title: "Self Treatment",
    url: "https://haemophilia.org.uk/self-treatment/",
    organization: "The Haemophilia Society (UK)",
  },
  {
    id: "cdc-travel",
    title: "Travel Safety",
    url: "https://www.cdc.gov/hemophilia/travel-safe/index.html",
    organization: "Centers for Disease Control and Prevention",
  },
  {
    id: "ucdavis-treatment",
    title: "Hemophilia Treatment",
    url: "https://health.ucdavis.edu/hemophilia/treatment.html",
    organization: "UC Davis Health",
  },
];

export interface Article {
  slug: string;
  title: string;
  summary: string;
  category: string;
  sourceId: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "what-is-hemophilia",
    title: "What Is Hemophilia?",
    summary:
      "Hemophilia is a genetic bleeding disorder in which blood does not clot properly due to missing or low levels of clotting factor proteins.",
    category: "Basics",
    sourceId: "mayo-hemophilia",
    content:
      "Hemophilia is usually inherited and affects mostly males, though women can be carriers and in some cases have symptoms. The condition is characterized by prolonged bleeding after injury, and in severe cases, spontaneous bleeding into joints and muscles. There are two main types: Hemophilia A (factor VIII deficiency) and Hemophilia B (factor IX deficiency). Diagnosis involves blood tests measuring clotting factor levels. Only a qualified healthcare professional can diagnose hemophilia.",
  },
  {
    slug: "hemophilia-a-vs-b",
    title: "Hemophilia A vs. Hemophilia B",
    summary:
      "Both types cause bleeding problems but involve different clotting factors — factor VIII (A) and factor IX (B).",
    category: "Basics",
    sourceId: "cleveland-a-vs-b",
    content:
      "Hemophilia A is the most common type, caused by insufficient factor VIII. Hemophilia B, also called Christmas disease, involves factor IX deficiency. Symptoms and severity classifications (mild, moderate, severe) are similar for both types, but treatments use different replacement products. A hematologist determines the specific type through laboratory testing.",
  },
  {
    slug: "women-and-hemophilia",
    title: "Hemophilia and Women",
    summary:
      "Women can be carriers of hemophilia and may experience bleeding symptoms. Some women have hemophilia themselves.",
    category: "Basics",
    sourceId: "cdc-women",
    content:
      "Women who carry the hemophilia gene may have lower-than-normal clotting factor levels and can experience heavy menstrual bleeding, easy bruising, or prolonged bleeding after procedures. Genetic counseling and specialized care from a Hemophilia Treatment Center can help women understand their status and care options.",
  },
  {
    slug: "severity-levels",
    title: "Understanding Severity: Mild, Moderate, and Severe",
    summary:
      "Severity is based on clotting factor level in the blood and helps guide general care discussions with your healthcare team.",
    category: "Basics",
    sourceId: "severity",
    content:
      "Mild hemophilia typically involves factor levels of 5–40% of normal. Moderate involves 1–5%, and severe is less than 1%. Severe hemophilia often presents earlier in life with spontaneous bleeding. Only your healthcare team can determine your severity level and discuss appropriate management strategies.",
  },
  {
    slug: "inhibitors-overview",
    title: "What Are Inhibitors?",
    summary:
      "Inhibitors are antibodies that can develop in some patients, making standard factor replacement less effective.",
    category: "Treatment",
    sourceId: "nbdf-inhibitors",
    content:
      "An inhibitor is an antibody that neutralizes infused clotting factor, making treatment more challenging. Inhibitors occur more commonly in severe hemophilia A. Specialized treatment plans developed at a Hemophilia Treatment Center are essential for patients with inhibitors.",
  },
  {
    slug: "factor-replacement",
    title: "Factor Replacement Therapy Overview",
    summary:
      "Factor replacement involves infusing the missing clotting factor to help blood clot. This is a general overview — not personalized medical advice.",
    category: "Treatment",
    sourceId: "hoacny-treatment",
    content:
      "Factor replacement therapy supplements the missing clotting factor VIII or IX. Treatment may be on-demand (used when bleeding occurs) or prophylactic (regular scheduled infusions to prevent bleeds). The specific product, dose, and schedule must be determined by your hematologist or HTC care team.",
  },
  {
    slug: "emergency-preparedness",
    title: "Emergency Preparedness for Families",
    summary:
      "General guidance on information to share with emergency medical staff and items to discuss with your care team.",
    category: "Safety",
    sourceId: "cdc-travel",
    content:
      "Families often discuss with their HTC team: a list of current medications and factor products, emergency contact information, medical ID details, and a letter from their hematologist. In a medical emergency, call 911. Always inform emergency staff about the bleeding disorder diagnosis and any current treatment.",
  },
  {
    slug: "travel-with-hemophilia",
    title: "Travel Considerations",
    summary:
      "General tips for traveling with hemophilia medication and supplies — discuss specifics with your care team.",
    category: "Living Well",
    sourceId: "cdc-travel",
    content:
      "When traveling, many families carry extra factor, supplies, and documentation from their HTC. Identify nearby HTCs at your destination in advance using the CDC directory. Discuss travel plans with your hematologist before departure, especially for international travel.",
  },
];

export interface QuickQuestion {
  text: string;
  category: string;
}

export const quickQuestions: QuickQuestion[] = [
  { text: "What is hemophilia, and what causes it?", category: "Understanding the Basics" },
  { text: "What's the difference between Hemophilia A and Hemophilia B?", category: "Understanding the Basics" },
  { text: "Is hemophilia the same as being a carrier?", category: "Understanding the Basics" },
  { text: "Can women have hemophilia?", category: "Understanding the Basics" },
  { text: "How is hemophilia inherited?", category: "Understanding the Basics" },
  { text: "What are the chances of passing it to my children?", category: "Understanding the Basics" },
  { text: "What do mild, moderate, and severe hemophilia mean?", category: "Understanding the Basics" },
  { text: "How is hemophilia diagnosed?", category: "Understanding the Basics" },
  { text: "At what age is hemophilia usually diagnosed?", category: "Understanding the Basics" },
  { text: "What is factor replacement therapy?", category: "Treatment and Management" },
  { text: "What is the difference between on-demand treatment and prophylaxis?", category: "Treatment and Management" },
  { text: "What are inhibitors?", category: "Treatment and Management" },
  { text: "Why do some patients develop inhibitors?", category: "Treatment and Management" },
  { text: "What newer treatment options exist?", category: "Treatment and Management" },
  { text: "What are non-factor therapies?", category: "Treatment and Management" },
  { text: "What is gene therapy?", category: "Treatment and Management" },
  { text: "What does self-infusion education generally involve?", category: "Treatment and Management" },
  { text: "What should someone consider if they miss a treatment dose or run out of medication while traveling?", category: "Treatment and Management" },
  { text: "How often should someone generally connect with a hematologist or Hemophilia Treatment Center?", category: "Treatment and Management" },
  { text: "What are general signs associated with a possible bleed?", category: "Bleeding Episodes and Emergencies" },
  { text: "What are some general signs associated with joint bleeding?", category: "Bleeding Episodes and Emergencies" },
  { text: "What situations may require urgent medical evaluation?", category: "Bleeding Episodes and Emergencies" },
  { text: "What information should a patient or caregiver communicate to emergency medical staff?", category: "Bleeding Episodes and Emergencies" },
  { text: "What information is useful to include in a medical ID?", category: "Bleeding Episodes and Emergencies" },
  { text: "What items might families discuss with their healthcare team when preparing an emergency kit?", category: "Bleeding Episodes and Emergencies" },
  { text: "What types of physical activity are generally discussed in hemophilia care?", category: "Living With Hemophilia" },
  { text: "How can joint health be affected over time?", category: "Living With Hemophilia" },
  { text: "What is hemophilic arthropathy?", category: "Living With Hemophilia" },
  { text: "What general dental-care considerations are discussed?", category: "Living With Hemophilia" },
  { text: "What general vaccination questions should patients discuss with their healthcare team?", category: "Living With Hemophilia" },
  { text: "How can families communicate with a child's school?", category: "Living With Hemophilia" },
  { text: "What types of educational accommodations may be discussed?", category: "Living With Hemophilia" },
  { text: "How can someone cope with anxiety related to a chronic bleeding disorder?", category: "Emotional and Social Wellbeing" },
  { text: "How can parents talk to children about their diagnosis?", category: "Emotional and Social Wellbeing" },
  { text: "Where can people find support communities?", category: "Emotional and Social Wellbeing" },
  { text: "How can someone explain hemophilia to friends, partners, or coworkers?", category: "Emotional and Social Wellbeing" },
  { text: "What types of costs may be associated with hemophilia care?", category: "Practical and Financial" },
  { text: "What financial assistance resources may exist?", category: "Practical and Financial" },
  { text: "How does insurance coverage generally work for treatment products?", category: "Practical and Financial" },
  { text: "What is prior authorization?", category: "Practical and Financial" },
  { text: "What should someone consider when traveling internationally with medication and medical supplies?", category: "Practical and Financial" },
  { text: "What resources exist for newly diagnosed families?", category: "Practical and Financial" },
  { text: "Where can people find clinical trials?", category: "Research and Advocacy" },
  { text: "How can someone participate in advocacy?", category: "Research and Advocacy" },
  { text: "How can people support hemophilia awareness?", category: "Research and Advocacy" },
  { text: "Where can users find reputable and current medical information?", category: "Research and Advocacy" },
];

export const forumCategories = [
  "Newly Diagnosed",
  "Parenting and Caregiving",
  "School and Education",
  "Living with Hemophilia",
  "Treatment Experiences",
  "Travel",
  "Emotional Support",
  "Research and Clinical Trials",
  "Advocacy",
  "General Discussion",
];
