"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Droplets } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    e.preventDefault();
    router.push("/");
  }

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label="HEMOBOT home"
      className={`flex items-center gap-2 group ${className}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-teal-600 text-white shadow-md group-hover:shadow-lg transition-shadow">
        <Droplets className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-primary-800">HEMOBOT</span>
        <span className="text-[10px] uppercase tracking-widest text-slate-500 -mt-1">
          Hemophilia Care Platform
        </span>
      </div>
    </Link>
  );
}
