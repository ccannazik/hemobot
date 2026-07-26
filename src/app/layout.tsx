import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SITE } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: `${SITE.fullName} — Hemophilia Support Platform`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "hemophilia",
    "newly diagnosed",
    "HTC",
    "HemoBot",
    "bleeding disorders",
    "patient support",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <AuthProvider>
          <ScrollToTop />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
