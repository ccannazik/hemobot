export const SITE = {
  name: "HemoBot",
  tagline: "HemoBot",
  fullName: "HemoBot",
  nonprofitName: "HemoBot",
  description:
    "An educational and community platform helping families navigate life after a hemophilia diagnosis.",
  email: "hemobot@gmail.com",
  phone: null as string | null,
  phoneNote: "Coming soon",
  officeHours: "Monday – Friday, 9:00 AM – 5:00 PM PT",
  mission:
    "HemoBot helps newly diagnosed families and individuals find educational resources, practical next steps, and community connection in one place.",
  aiName: "HemoBot AI",
};

export const USER_JOURNEY = [
  {
    step: 1,
    title: "Receive Your Diagnosis",
    description: "Take a breath — you can explore resources here at your own pace.",
    href: "/newly-diagnosed",
  },
  {
    step: 2,
    title: "Understand Hemophilia",
    description: "Learn the basics in plain language from educational articles.",
    href: "/learn",
  },
  {
    step: 3,
    title: "Ask HemoBot AI",
    description: "Get calm answers to beginner questions — not medical advice.",
    href: "/assistant",
  },
  {
    step: 4,
    title: "Find a Treatment Center",
    description: "Locate Hemophilia Treatment Centers (HTCs) and specialized care near you.",
    href: "/find-care",
  },
  {
    step: 5,
    title: "Join the Community",
    description: "Connect with parents, caregivers, and patients who understand.",
    href: "/community",
  },
  {
    step: 6,
    title: "Watch & Listen",
    description: "Patient stories and educational videos.",
    href: "/podcast",
  },
];

export const HOMEPAGE_SECTIONS = [
  {
    title: "What should I do first?",
    description: "A guided pathway for the overwhelming first days after diagnosis.",
    href: "/newly-diagnosed",
    icon: "compass",
  },
  {
    title: "Understand Hemophilia",
    description: "Educational articles on types, severity, and daily life.",
    href: "/learn",
    icon: "book",
  },
  {
    title: "Find Care",
    description: "Interactive directory of Hemophilia Treatment Centers and specialists.",
    href: "/find-care",
    icon: "map",
  },
  {
    title: "Connect With Families",
    description: "A moderated community of parents, caregivers, and patients.",
    href: "/community",
    icon: "users",
  },
  {
    title: "Ask HemoBot AI",
    description: "General educational answers to help you get started.",
    href: "/assistant",
    icon: "bot",
  },
];

export const DONATION_TIERS = [10, 25, 50, 100];

export const CONTACT_FAQ = [
  {
    q: "Is HemoBot a medical provider?",
    a: "No. HemoBot is an educational and community platform. We do not provide medical care, diagnosis, or treatment.",
  },
  {
    q: "How can I reach the team?",
    a: "Email us at hemobot@gmail.com or use the contact form on this page.",
  },
  {
    q: "Can I suggest a treatment center for the directory?",
    a: "Yes. Use the contact form and include the facility name and official website.",
  },
  {
    q: "Is my community account information private?",
    a: "Profile information is used only for community participation. See our Privacy Policy for details.",
  },
];

export const MEDICAL_DISCLAIMER_TEXT =
  "This website provides educational information only and is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare professional or Hemophilia Treatment Center with questions about a medical condition. Never disregard professional medical advice or delay seeking it because of something you read here. In a medical emergency, call 911.";

export const COMMUNITY_CATEGORIES = [
  "Newly Diagnosed",
  "Parents & Caregivers",
  "Adults with Hemophilia",
  "Treatment Questions",
  "School & Sports",
  "Success Stories",
  "Questions for Community",
];

export const YOUTUBE_PODCAST_VIDEO_ID = "Yf7Su_68ipk";
