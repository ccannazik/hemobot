"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/site";

const LOGO_SRC = "/hemobot-logo.png";

type LogoSize = "header" | "footer" | "hero" | "auth";

const sizeClasses: Record<LogoSize, string> = {
  header: "h-9 sm:h-10 w-auto max-w-[2.75rem] sm:max-w-[3rem]",
  footer: "h-16 w-auto max-w-[4.5rem]",
  hero: "h-32 sm:h-40 w-auto max-w-[9rem] sm:max-w-[11rem]",
  auth: "h-24 w-auto max-w-[6.5rem] mx-auto",
};

interface LogoProps {
  className?: string;
  size?: LogoSize;
  showName?: boolean;
}

export function Logo({ className = "", size = "header", showName = true }: LogoProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    e.preventDefault();
    router.push("/");
  }

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label={`${SITE.name} home`}
      className={cn("inline-flex items-center gap-2.5 group", className)}
    >
      <Image
        src={LOGO_SRC}
        alt=""
        width={768}
        height={866}
        priority={size === "header"}
        aria-hidden
        className={cn(sizeClasses[size], "object-contain object-left shrink-0")}
      />
      {showName && (
        <span
          className={cn(
            "font-bold tracking-tight text-primary-800 leading-none",
            size === "header" ? "text-lg sm:text-xl" : "text-xl"
          )}
        >
          {SITE.name}
        </span>
      )}
    </Link>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center sm:items-start gap-2", className)}>
      <Logo size="hero" showName className="pointer-events-none" />
    </div>
  );
}
