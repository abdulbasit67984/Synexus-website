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
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d5ece9] bg-white/78 text-[#129b92] shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
      >
        <Menu className="h-5 w-5" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-white" onClick={() => setIsOpen(false)} />
          <div className="fixed right-0 top-0 pb-5 z-50 w-full max-w-sm bg-white shadow-xl">
            <div className="container-custom flex h-20 items-center bg-white justify-between border-b border-[#e8ecf1]">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <img
                  src="/synexus-logo.png"
                  alt="Synexus"
                  className="h-8 w-auto"
                />
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e8ecf1] bg-[#f8f9fb] text-[#09131f]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="container-custom mt-8 flex flex-col gap-3 bg-white">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-2xl border px-5 py-4 text-base font-medium transition",
                    isActive(link.href)
                      ? "border-[#16a79e]/40 bg-[#16a79e]/10 text-[#16a79e]"
                      : "border-[#e8ecf1] bg-white text-[#3d4452]"
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
        </>)}
    </div>
  );
}
