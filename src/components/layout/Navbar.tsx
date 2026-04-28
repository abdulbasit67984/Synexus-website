"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { navLinks } from "@/data/nav-links";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 bg-[#f8fbfb]/95 backdrop-blur-xl">
      <div className="container-custom flex h-20 items-center justify-between">
        <Link href="/" className="shrink-0" aria-label="Synexus">
          <img
            src="/synexus-logo.png"
            alt="Synexus"
            width={180}
            height={48}
            className="h-10 w-auto rounded-sm bg-[#f8fbfb] mix-blend-multiply sm:h-12"
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative pb-3 text-[15px] font-medium transition",
                  active
                    ? "text-[#16a79e]"
                    : "text-[#202833] hover:text-[#16a79e]"
                )}
              >
                {link.label}

                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[3px] rounded-full bg-[#16a79e] transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#11988f] to-[#17aea3] px-7 text-smS font-semibold text-white shadow-[0_18px_40px_rgba(18,155,146,0.22)] transition hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}