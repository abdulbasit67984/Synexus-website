"use client";

import Link from "next/link";
import { ArrowRight, Layers3, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const serviceNodes = [
  { x: 50, y: 10 },
  { x: 78, y: 22 },
  { x: 88, y: 50 },
  { x: 78, y: 78 },
  { x: 50, y: 90 },
  { x: 22, y: 78 },
  { x: 12, y: 50 },
  { x: 22, y: 22 },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(22,167,158,0.12),transparent_30%),radial-gradient(circle_at_82%_46%,rgba(17,61,92,0.08),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-6 rounded-[2.5rem] border border-white/5 bg-white/5 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl" />
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/30 to-transparent" /> */}
      {/* <div className="pointer-events-none absolute bottom-[-120px] left-1/2 h-64 w-[76%] -translate-x-1/2 rounded-full bg-[#16a79e]/14 blur-3xl" /> */}
      <div className="pointer-events-none absolute left-[-5rem] top-20 hidden select-none text-[22rem] font-black leading-none text-[#10958d]/[0.035] lg:block">
        X
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(560px,1.08fr)]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
              What We Offer
            </p>

            <h2 className="mt-5 max-w-3xl text-2xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl md:leading-[1.08]">
              Software services arranged around your business core
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5e6772] md:text-md">
              From custom websites to complete operating systems, Synexus
              connects strategy, design, engineering, cloud, and automation into
              one practical product path.
            </p>

            <div className="mt-8 grid gap-3 lg:hidden">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeIndex === index;

                return (
                  <button
                    key={service.slug}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={cn(
                      "flex min-h-16 items-center gap-4 rounded-2xl border p-3 text-left transition duration-300",
                      isActive
                        ? "border-[#16a79e]/45 bg-white/90 shadow-[0_18px_45px_rgba(22,167,158,0.16)]"
                        : "border-[#dcebea] bg-white/55 hover:border-[#16a79e]/35 hover:bg-white/85"
                    )}
                  >
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
                    <span>
                      <span className="block text-sm font-bold text-[#24303b]">
                        {service.title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-[#64717d]">
                        {service.tagline}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-[#dcebea] bg-white/[0.72] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.slug}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#11988f] to-[#17aea3] text-white shadow-[0_18px_38px_rgba(18,155,146,0.24)]">
                      <ActiveIcon className="h-7 w-7" />
                    </div>

                    <div className="rounded-full border border-[#cdeee9] bg-[#effaf8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#129b92]">
                      Service 0{activeIndex + 1}
                    </div>
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#16a79e]">
                    {activeService.tagline}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-[#09131f] md:text-3xl">
                    {activeService.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-xs leading-7 text-[#5e6772] md:text-sm">
                    {activeService.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeService.features.slice(0, 5).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-[#d5ece9] bg-[#f7fdfc] px-3 py-1.5 text-xs font-semibold text-[#24303b]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/services/${activeService.slug}`}
                      className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#11988f] to-[#17aea3] px-6 text-xs font-semibold text-white shadow-[0_18px_40px_rgba(18,155,146,0.22)] transition hover:-translate-y-0.5"
                    >
                      Explore This Service
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <Link
                      href="/services"
                      className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-[#4cc3b8] bg-transparent px-6 text-xs font-semibold text-[#129b92] transition hover:bg-[#effaf8]"
                    >
                      View All Services
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative hidden min-h-[620px] lg:block">
            <div className="absolute right-[8%] top-9 space-y-6 opacity-45">
              <div className="ml-16 h-px w-40 bg-[#9adfd7]" />
              <div className="h-px w-52 bg-[#9adfd7]" />
              <div className="ml-24 h-px w-32 bg-[#9adfd7]" />
            </div>

            <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 rounded-full border border-[#d7ece9] bg-white/[0.22] shadow-[inset_0_0_80px_rgba(22,167,158,0.08)] backdrop-blur-sm" />
              <div className="absolute inset-12 rounded-full border border-dashed border-[#16a79e]/25" />
              <div className="absolute inset-28 rounded-full border border-[#d7ece9] bg-white/45" />

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="serviceLine" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#16a79e" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#16a79e" stopOpacity="0.85" />
                  </linearGradient>
                </defs>

                {serviceNodes.map((node, index) => {
                  const isActive = activeIndex === index;
                  const isHovered = hoveredIndex === index;

                  return (
                    <motion.line
                      key={`${services[index].slug}-line`}
                      x1="50"
                      y1="50"
                      x2={node.x}
                      y2={node.y}
                      stroke={isActive || isHovered ? "url(#serviceLine)" : "#cdeee9"}
                      strokeWidth={isActive ? 0.55 : isHovered ? 0.42 : 0.24}
                      strokeLinecap="round"
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : isHovered ? 0.82 : 0.36,
                        pathLength: isActive || isHovered ? 1 : 0.72,
                      }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />
                  );
                })}
              </svg>

              <motion.div
                className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#cdeee9] bg-white/85 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-4 rounded-full border border-dashed border-[#16a79e]/30" />
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[#effaf8] text-center shadow-[inset_0_0_26px_rgba(22,167,158,0.12)]">
                  <div className="absolute -right-1 top-5 h-2 w-2 rounded-full bg-[#f4b84a]" />
                  <div>
                    <div className="flex justify-center text-[#16a79e]">
                      <Layers3 className="h-6 w-6" />
                    </div>
                    <p className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#0f1720]">
                      SYNE<span className="text-[#16a79e]">X</span>US
                    </p>
                    <p className="mt-1 text-[10px] font-bold text-[#16a79e]">
                      Service Core
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16a79e]/12 blur-3xl"
                animate={{ scale: [0.94, 1.08, 0.94], opacity: [0.42, 0.74, 0.42] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              />

              {services.map((service, index) => {
                const Icon = service.icon;
                const node = serviceNodes[index];
                const isActive = activeIndex === index;
                const isHovered = hoveredIndex === index;

                return (
                  <motion.button
                    key={service.slug}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ y: -8, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "absolute flex w-44 -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-2xl border p-3 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a79e]/40",
                      isActive
                        ? "border-[#16a79e]/55 bg-white shadow-[0_22px_55px_rgba(22,167,158,0.18)]"
                        : isHovered
                          ? "border-[#16a79e]/35 bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.09)]"
                          : "border-[#dcebea] bg-white/72 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
                    )}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                    }}
                  >
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition duration-300",
                        isActive
                          ? "bg-[#16a79e] text-white shadow-[0_10px_24px_rgba(22,167,158,0.28)]"
                          : "bg-[#eef9f8] text-[#16a79e]"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.72rem] font-bold leading-5 text-[#24303b]">
                        {service.title}
                      </span>
                      <span className="mt-0.5 flex items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#129b92]">
                        <Sparkles className="h-3 w-3" />
                        Module
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
