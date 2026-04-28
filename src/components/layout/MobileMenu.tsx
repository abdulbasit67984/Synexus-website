"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav-links";
import { ButtonLink } from "@/components/common/Button";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
      >
        <Menu className="h-5 w-5" />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl">
          <div className="container-custom flex h-20 items-center justify-between">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-sm font-black text-slate-950">
                S
              </span>
              <span className="text-base font-bold text-white">Synexus</span>
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="container-custom mt-8 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-2xl border px-5 py-4 text-base font-medium transition",
                  isActive(link.href)
                    ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-200"
                    : "border-white/10 bg-white/[0.04] text-slate-200"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4">
              <ButtonLink href="/contact" className="w-full">
                Start a Project
              </ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}