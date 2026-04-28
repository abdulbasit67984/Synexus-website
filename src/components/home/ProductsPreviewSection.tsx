"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  DatabaseZap,
  FileText,
  Landmark,
  Layers3,
  PackageSearch,
  ShoppingCart,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

type ProductVisual = {
  icon: LucideIcon;
  label: string;
  status: string;
};

const productVisuals: Record<string, ProductVisual> = {
  erp: {
    icon: Building2,
    label: "ERP",
    status: "Ops Hub",
  },
  cms: {
    icon: FileText,
    label: "CMS",
    status: "Content",
  },
  crm: {
    icon: Users,
    label: "CRM",
    status: "Pipeline",
  },
  hrm: {
    icon: Landmark,
    label: "HRM",
    status: "People",
  },
  "inventory-management": {
    icon: PackageSearch,
    label: "INV",
    status: "Stock",
  },
  pos: {
    icon: ShoppingCart,
    label: "POS",
    status: "Sales",
  },
};

const deckAngles = [0, 2.4, -2.2, 3.2, -3, 2];

function getProductVisual(slug: string) {
  return productVisuals[slug] ?? { icon: Layers3, label: "APP", status: "Ready" };
}

export function ProductsPreviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeProduct = products[activeIndex];
  const activeVisual = getProductVisual(activeProduct.slug);
  const ActiveIcon = activeVisual.icon;

  useEffect(() => {
    if (products.length <= 1) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="section-padding relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(22,167,158,0.12),transparent_28%),radial-gradient(circle_at_86%_34%,rgba(17,61,92,0.08),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/30 to-transparent" />
      <div className="pointer-events-none absolute bottom-[-96px] right-[-8%] h-64 w-[42%] rounded-full bg-[#16a79e]/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] top-16 hidden select-none text-[22rem] font-black leading-none text-[#10958d]/[0.035] lg:block">
        X
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,0.94fr)_minmax(540px,1.06fr)]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
              Products
            </p>

            <h2 className="mt-5 max-w-3xl text-2xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl md:leading-[1.08]">
              Product systems stacked for daily operations
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5e6772] md:text-md">
              Choose a ready business platform, then shape its modules,
              dashboard, roles, and workflows around the way your team already
              works.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/products/${activeProduct.slug}`}
                className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#11988f] to-[#17aea3] px-6 text-xs font-semibold text-white shadow-[0_18px_40px_rgba(18,155,146,0.22)] transition hover:-translate-y-0.5"
              >
                Open Active Product
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-[#4cc3b8] bg-transparent px-6 text-xs font-semibold text-[#129b92] transition hover:bg-[#effaf8]"
              >
                Request Custom Software
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-9 grid gap-3 lg:hidden">
              {products.map((product, index) => {
                const visual = getProductVisual(product.slug);
                const Icon = visual.icon;
                const isActive = activeIndex === index;

                return (
                  <button
                    key={product.slug}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={cn(
                      "flex min-h-16 items-center justify-between gap-4 rounded-2xl border p-3 text-left transition duration-300",
                      isActive
                        ? "border-[#16a79e]/45 bg-white/90 shadow-[0_18px_45px_rgba(22,167,158,0.16)]"
                        : "border-[#dcebea] bg-white/55 hover:border-[#16a79e]/35 hover:bg-white/85"
                    )}
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <span
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition",
                          isActive
                            ? "bg-[#16a79e] text-white"
                            : "bg-[#eef9f8] text-[#16a79e]"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-bold text-[#24303b]">
                          {product.title}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-[#64717d]">
                          {product.tagline}
                        </span>
                      </span>
                    </span>

                    <span className="hidden rounded-full border border-[#cdeee9] bg-[#effaf8] px-3 py-1 text-xs font-semibold text-[#129b92] sm:inline-flex">
                      {visual.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative mt-10 hidden h-[390px] lg:block">
              <div className="absolute left-8 top-10 h-72 w-72 rounded-full bg-[#16a79e]/12 blur-3xl" />
              <div className="absolute left-8 top-4 h-px w-52 bg-[#9adfd7]/70" />
              <div className="absolute left-24 top-12 h-px w-36 bg-[#9adfd7]/55" />

              {products.map((product, index) => {
                const distance =
                  (index - activeIndex + products.length) % products.length;
                const visual = getProductVisual(product.slug);
                const Icon = visual.icon;
                const isActive = activeIndex === index;
                const isHovered = hoveredIndex === index;

                return (
                  <motion.button
                    key={product.slug}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={cn(
                      "absolute left-0 top-0 flex w-[min(100%,380px)] flex-col rounded-3xl border p-4 text-left shadow-[0_20px_55px_rgba(15,23,42,0.09)] backdrop-blur-xl transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a79e]/40",
                      isActive
                        ? "border-[#16a79e]/50 bg-white"
                        : isHovered
                          ? "border-[#16a79e]/35 bg-white/92"
                          : "border-[#dcebea] bg-white/72"
                    )}
                    style={{
                      zIndex: products.length - distance,
                      pointerEvents: distance > 4 ? "none" : "auto",
                    }}
                    initial={false}
                    animate={{
                      x: distance * 28,
                      y: distance * 26,
                      rotate: deckAngles[distance] ?? 0,
                      scale: Math.max(0.86, 1 - distance * 0.04),
                      opacity: distance > 4 ? 0 : Math.max(0.42, 1 - distance * 0.1),
                    }}
                    whileHover={{ y: distance * 26 - 10, scale: Math.max(0.9, 1 - distance * 0.03) }}
                    whileTap={{ scale: Math.max(0.84, 0.97 - distance * 0.03) }}
                    transition={{ duration: 0.36, ease: "easeOut" }}
                  >
                    <span className="mb-5 flex items-center justify-between gap-4">
                      <span
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition",
                          isActive
                            ? "bg-[#16a79e] text-white shadow-[0_14px_30px_rgba(22,167,158,0.24)]"
                            : "bg-[#eef9f8] text-[#16a79e]"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="rounded-full border border-[#cdeee9] bg-[#effaf8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#129b92]">
                        {visual.status}
                      </span>
                    </span>

                    <span className="text-lg font-bold text-[#09131f]">
                      {product.title}
                    </span>

                    <span className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#16a79e]">
                      {product.tagline}
                    </span>

                    <span className="mt-3 text-xs leading-7 text-[#5e6772]">
                      {product.description}
                    </span>

                    <span className="mt-4 flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-[#d5ece9] bg-[#f7fdfc] px-3 py-1 text-xs font-semibold text-[#24303b]"
                        >
                          {feature}
                        </span>
                      ))}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-8 top-8 hidden space-y-6 opacity-45 lg:block">
              <div className="ml-16 h-px w-40 bg-[#9adfd7]" />
              <div className="h-px w-52 bg-[#9adfd7]" />
              <div className="ml-24 h-px w-32 bg-[#9adfd7]" />
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-[#dcebea] bg-white/[0.74] p-4 shadow-[0_30px_90px_rgba(15,23,42,0.11)] backdrop-blur-xl md:p-5">
              <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-44 w-44 rounded-full bg-[#16a79e]/14 blur-3xl" />
              <div className="pointer-events-none absolute bottom-[-80px] left-[-40px] h-48 w-48 rounded-full bg-[#113d5c]/8 blur-3xl" />

              <div className="relative rounded-[1.45rem] border border-[#dcebea] bg-[#faffff]/80 p-4 md:p-5">
                <div className="flex flex-col gap-4 border-b border-[#dcebea] pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-[#f4b84a]" />
                      <span className="h-3 w-3 rounded-full bg-[#9adfd7]" />
                      <span className="h-3 w-3 rounded-full bg-[#16a79e]" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#64717d]">
                      Product Stack Console
                    </p>
                  </div>

                  <div className="rounded-full border border-[#cdeee9] bg-[#effaf8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#129b92]">
                    Product 0{activeIndex + 1}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProduct.slug}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="pt-6"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#11988f] to-[#17aea3] text-white shadow-[0_18px_38px_rgba(18,155,146,0.24)]">
                          <ActiveIcon className="h-7 w-7" />
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#16a79e]">
                            {activeVisual.status}
                          </p>
                          <h3 className="mt-2 text-2xl font-bold text-[#09131f] md:text-3xl">
                            {activeProduct.title}
                          </h3>
                          <p className="mt-2 text-sm font-semibold text-[#24303b]">
                            {activeProduct.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:min-w-44">
                        <div className="rounded-2xl border border-[#d5ece9] bg-white/75 p-3">
                          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#64717d]">
                            Modules
                          </p>
                          <p className="mt-1 text-2xl font-bold text-[#09131f]">
                            {activeProduct.modules.length}+
                          </p>
                        </div>

                        <div className="rounded-2xl border border-[#d5ece9] bg-white/75 p-3">
                          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#64717d]">
                            Plans
                          </p>
                          <p className="mt-1 text-2xl font-bold text-[#09131f]">
                            {activeProduct.plans.length}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 text-xs leading-7 text-[#5e6772] md:text-sm">
                      {activeProduct.description}
                    </p>

                    <div className="mt-6 grid gap-5 lg:grid-cols-[0.98fr_1.02fr]">
                      <div className="rounded-3xl border border-[#dcebea] bg-white/65 p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <p className="text-sm font-bold text-[#09131f]">
                              Module Board
                            </p>
                            <p className="mt-1 text-xs text-[#64717d]">
                              Active product areas
                            </p>
                          </div>
                          <DatabaseZap className="h-5 w-5 text-[#16a79e]" />
                        </div>

                        <div className="space-y-3">
                          {activeProduct.modules.slice(0, 5).map((module, index) => (
                            <div
                              key={module}
                              className="flex items-center justify-between rounded-2xl border border-[#d5ece9] bg-[#f7fdfc] p-3"
                            >
                              <div className="flex min-w-0 items-center gap-3">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#eef9f8] text-xs font-bold text-[#129b92]">
                                  {index + 1}
                                </span>
                                <span className="truncate text-sm font-semibold text-[#24303b]">
                                  {module}
                                </span>
                              </div>

                              <span className="ml-3 shrink-0 text-xs font-semibold text-[#16a79e]">
                                Active
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-3xl border border-[#dcebea] bg-white/65 p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <p className="text-sm font-bold text-[#09131f]">
                              Launch Signals
                            </p>
                            <p className="mt-1 text-xs text-[#64717d]">
                              Core feature set
                            </p>
                          </div>
                          <BarChart3 className="h-5 w-5 text-[#16a79e]" />
                        </div>

                        <div className="space-y-3">
                          {activeProduct.features.slice(0, 5).map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-3 rounded-2xl border border-[#d5ece9] bg-[#f7fdfc] p-3 text-sm font-semibold text-[#24303b]"
                            >
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#16a79e]" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={`/products/${activeProduct.slug}`}
                        className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#11988f] to-[#17aea3] px-6 text-xs font-semibold text-white shadow-[0_18px_40px_rgba(18,155,146,0.22)] transition hover:-translate-y-0.5"
                      >
                        View Product Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      <Link
                        href="/products"
                        className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-[#4cc3b8] bg-transparent px-6 text-xs font-semibold text-[#129b92] transition hover:bg-[#effaf8]"
                      >
                        View All Products
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 right-10 hidden items-center gap-2 rounded-full border border-[#d5ece9] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#129b92] shadow-[0_14px_35px_rgba(15,23,42,0.08)] backdrop-blur md:flex">
              <Sparkles className="h-4 w-4 text-[#f4b84a]" />
              Ready to customize
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
