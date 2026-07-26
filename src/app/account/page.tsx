import type { Metadata } from "next";
import AccountContent from "./AccountContent";

export const metadata: Metadata = {
  title: "My Account",
  description: "View your HemoBot account information and privacy settings.",
};

export default function AccountPage() {
  return <AccountContent />;
}
