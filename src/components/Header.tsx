"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { useAuth } from "@/components/AuthProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/treatments", label: "Treatments" },
  { href: "/innovations", label: "Innovations" },
  { href: "/find-care", label: "Hospital Directory" },
  { href: "/community", label: "Community" },
  { href: "/podcast", label: "Podcast" },
  { href: "/assistant", label: "HemoBot AI" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-warm-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-2.5 py-2 text-sm font-medium transition-colors whitespace-nowrap",
                pathname === link.href
                  ? "bg-primary-50 text-primary-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/assistant"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span className="hidden lg:inline">Talk with HemoBot</span>
            <span className="lg:hidden">HemoBot AI</span>
          </Link>

          {user ? (
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <Link href="/account" className="text-slate-600 hover:text-primary-600 font-medium truncate max-w-[100px]">
                My Account
              </Link>
              <button
                type="button"
                onClick={logout}
                className="text-slate-500 hover:text-slate-800 font-medium"
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="hidden sm:inline-flex text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              Sign in
            </Link>
          )}

          <button
            type="button"
            className="xl:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="xl:hidden border-t border-slate-200 bg-white px-4 py-4 max-h-[70vh] overflow-y-auto"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium",
                  pathname === link.href
                    ? "bg-primary-50 text-primary-700"
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/assistant"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-4 py-3 text-base font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Talk with HemoBot
            </Link>
            {user ? (
              <>
                <Link
                  href="/account"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 rounded-lg px-4 py-3 text-primary-600 font-medium"
                >
                  My Account
                </Link>
                <button
                type="button"
                onClick={() => {
                  logout();
                  setMobileOpen(false);
                }}
                className="mt-2 rounded-lg px-4 py-3 text-left text-slate-600"
              >
                Sign out ({user.name})
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-lg px-4 py-3 text-primary-600 font-medium"
              >
                Sign in to Community
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
