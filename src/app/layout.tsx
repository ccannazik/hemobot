import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "HEMOBOT — Find Hemophilia Care Near You",
    template: "%s | HEMOBOT",
  },
  description:
    "Reliable hemophilia information, nearby specialized care, and a supportive community for patients and families in Palo Alto and beyond.",
  keywords: ["hemophilia", "HTC", "bleeding disorders", "Palo Alto", "hematology"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
