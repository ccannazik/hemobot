export interface GovernmentResource {
  title: string;
  description: string;
  url: string;
  category: string;
}

export const governmentResources: GovernmentResource[] = [
  {
    title: "CDC — Hemophilia",
    description: "Official information on hemophilia, HTCs, testing, and research from the U.S. Centers for Disease Control and Prevention.",
    url: "https://www.cdc.gov/hemophilia/index.html",
    category: "Federal healthcare resources",
  },
  {
    title: "CDC Hemophilia Treatment Center Directory",
    description: "Search for official Hemophilia Treatment Centers across the United States.",
    url: "https://dbdgateway.cdc.gov/HTCDirSearch.aspx",
    category: "Federal healthcare resources",
  },
  {
    title: "National Institutes of Health — Hemophilia",
    description: "Research and health information from NIH.",
    url: "https://www.nhlbi.nih.gov/health/hemophilia",
    category: "Federal healthcare resources",
  },
  {
    title: "California Department of Public Health",
    description: "State public health information and resources for California residents.",
    url: "https://www.cdph.ca.gov/",
    category: "State healthcare resources",
  },
  {
    title: "California Department of Health Care Services",
    description: "Information on Medi-Cal and state healthcare programs in California.",
    url: "https://www.dhcs.ca.gov/",
    category: "State healthcare resources",
  },
  {
    title: "Santa Clara County Public Health Department",
    description: "Local public health department serving Palo Alto and surrounding communities.",
    url: "https://www.sccgov.org/sites/phd/Pages/phd.aspx",
    category: "Public health departments",
  },
  {
    title: "Americans with Disabilities Act (ADA)",
    description: "Federal civil rights law prohibiting discrimination against individuals with disabilities.",
    url: "https://www.ada.gov/",
    category: "Disability and accessibility resources",
  },
  {
    title: "California Department of Rehabilitation",
    description: "Vocational rehabilitation and independent living services.",
    url: "https://www.dor.ca.gov/",
    category: "Disability and accessibility resources",
  },
  {
    title: "HealthCare.gov",
    description: "Official marketplace for health insurance in the United States.",
    url: "https://www.healthcare.gov/",
    category: "Insurance and assistance resources",
  },
  {
    title: "Covered California",
    description: "California's official health insurance marketplace.",
    url: "https://www.coveredca.com/",
    category: "Insurance and assistance resources",
  },
  {
    title: "Social Security Disability Benefits",
    description: "Information on disability benefits from the Social Security Administration.",
    url: "https://www.ssa.gov/disability/",
    category: "Government benefits information",
  },
  {
    title: "988 Suicide & Crisis Lifeline",
    description: "Free, confidential support for people in distress. Call or text 988.",
    url: "https://988lifeline.org/",
    category: "Emergency healthcare information",
  },
  {
    title: "Emergency — Call 911",
    description: "For life-threatening emergencies including severe uncontrolled bleeding, call 911 immediately.",
    url: "tel:911",
    category: "Emergency healthcare information",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ceren Cannazik",
    role: "Co-Founder & Product Lead",
    bio: "Passionate about making hemophilia care navigation accessible for families in the Bay Area and beyond.",
  },
  {
    name: "Aakash Aggrwal",
    role: "Co-Founder & Engineering Lead",
    bio: "Building secure, scalable technology to connect patients with verified healthcare resources.",
  },
  {
    name: "Matteo Marrufo",
    role: "Healthcare Partnerships",
    bio: "Works with Hemophilia Treatment Centers and medical institutions to ensure accurate, trustworthy information.",
  },
  {
    name: "Justin Law",
    role: "Community & Outreach",
    bio: "Leads community engagement initiatives and supports moderated peer support programs.",
  },
  {
    name: "Nil Canozkan",
    role: "Design & Accessibility",
    bio: "Ensures HemoBot is welcoming, accessible, and easy to use for patients of all ages and caregivers.",
  },
];
