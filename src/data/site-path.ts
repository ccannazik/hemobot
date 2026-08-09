export interface SitePathStep {
  id: string;
  label: string;
  shortLabel: string;
  href: string;
  description: string;
}

/** Suggested reading order for new visitors — not enforced. */
export const SITE_PATH: SitePathStep[] = [
  {
    id: "home",
    label: "Home",
    shortLabel: "Home",
    href: "/",
    description: "Start with what HemoBot is and how the site is organized.",
  },
  {
    id: "background",
    label: "Background",
    shortLabel: "Background",
    href: "/learn",
    description: "Read plain-language articles on hemophilia basics.",
  },
  {
    id: "patient-experience",
    label: "Patient Experience",
    shortLabel: "Stories",
    href: "/podcast",
    description: "Watch and listen to patient-facing content.",
  },
  {
    id: "innovations",
    label: "Innovations",
    shortLabel: "Innovations",
    href: "/innovations",
    description: "Explore recent research summaries and sources.",
  },
];

export function getSitePathStep(href: string): SitePathStep | undefined {
  return SITE_PATH.find((step) => step.href === href);
}

export function getAdjacentPathSteps(href: string): {
  previous?: SitePathStep;
  next?: SitePathStep;
} {
  const index = SITE_PATH.findIndex((step) => step.href === href);
  if (index === -1) return {};
  return {
    previous: index > 0 ? SITE_PATH[index - 1] : undefined,
    next: index < SITE_PATH.length - 1 ? SITE_PATH[index + 1] : undefined,
  };
}
