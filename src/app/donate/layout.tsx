import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support patient education, community events, and the HemoBot nonprofit mission.",
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
