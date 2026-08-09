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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-2.5 sm:py-3">
          <Logo className="shrink-0 min-w-0" />

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <Link
              href="/assistant"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="hidden md:inline">Talk with HemoBot</span>
              <span className="md:hidden">HemoBot</span>
            </Link>

            {user ? (
              <div className="hidden md:flex items-center gap-2 text-sm">
                <Link
                  href="/account"
                  className="text-slate-600 hover:text-primary-600 font-medium truncate max-w-[7rem]"
                >
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
                className="hidden md:inline-flex text-sm font-medium text-primary-600 hover:text-primary-700 px-1"
              >
                Sign in
              </Link>
            )}

            <button
              type="button"
              className="lg:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="h-6 w-6 shrink-0" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 shrink-0" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <nav
          className="hidden lg:flex flex-wrap items-center justify-center gap-x-1 gap-y-1 border-t border-slate-100 py-2"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-2.5 py-1.5 text-[13px] font-medium transition-colors whitespace-nowrap leading-none",
                pathname === link.href
                  ? "bg-primary-50 text-primary-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {mobileOpen && (
        <nav
          className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 max-h-[70vh] overflow-y-auto"
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
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
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
