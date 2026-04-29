"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  FileText,
  Landmark,
  PackageSearch,
  ShoppingCart,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { portfolioProjects } from "@/data/portfolio";
import type { PortfolioProject } from "@/types/portfolio";
import { cn } from "@/lib/utils";

type ProjectVisual = {
  icon: LucideIcon;
  label: string;
  accent: string;
};

const projectVisuals: Record<string, ProjectVisual> = {
  "ERP System": {
    icon: Building2,
    label: "ERP",
    accent: "Operations",
  },
  "CMS Platform": {
    icon: FileText,
    label: "CMS",
    accent: "Content",
  },
  "CRM System": {
    icon: Users,
    label: "CRM",
    accent: "Pipeline",
  },
  "Inventory System": {
    icon: PackageSearch,
    label: "INV",
    accent: "Stock",
  },
  "HRM System": {
    icon: Landmark,
    label: "HRM",
    accent: "People",
  },
  "POS System": {
    icon: ShoppingCart,
    label: "POS",
    accent: "Retail",
  },
};

function getProjectVisual(category: string) {
  return (
    projectVisuals[category] ?? {
      icon: BarChart3,
      label: "APP",
      accent: "System",
    }
  );
}

export function PortfolioPreviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeProject = portfolioProjects[activeIndex];
  const activeVisual = getProjectVisual(activeProject.category);
  const ActiveIcon = activeVisual.icon;

  return (
    <section className="section-padding relative overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(22,167,158,0.12),transparent_30%),radial-gradient(circle_at_86%_66%,rgba(17,61,92,0.08),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/28 to-transparent" />
      <div className="pointer-events-none absolute right-[-5rem] top-16 hidden select-none text-[22rem] font-black leading-none text-[#10958d]/[0.035] lg:block">
        X
      </div>

      <motion.div
        className="container-custom relative z-10"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
              Portfolio
            </p>

            <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl md:leading-[1.08]">
              Featured product work staged for review
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5e6772] md:text-md">
              Browse selected software concepts across ERP, CMS, CRM,
              inventory, HRM, and POS systems from one focused project
              workbench.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="group inline-flex h-12 w-fit items-center justify-center gap-3 rounded-2xl border border-[#4cc3b8] bg-white/58 px-6 text-xs font-semibold text-[#129b92] shadow-[0_14px_34px_rgba(15,23,42,0.06)] transition hover:bg-[#effaf8]"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-[minmax(0,0.86fr)_minmax(560px,1.14fr)]">
          <div className="flex flex-col gap-5">
            <ActiveProjectPanel
              activeProject={activeProject}
              activeVisual={activeVisual}
              ActiveIcon={ActiveIcon}
              activeIndex={activeIndex}
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {portfolioProjects.map((project, index) => {
                const visual = getProjectVisual(project.category);
                const Icon = visual.icon;
                const isActive = activeIndex === index;
                const isHovered = hoveredIndex === index;

                return (
                  <motion.button
                    key={project.slug}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "flex min-h-20 items-center gap-3 rounded-3xl border p-3 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a79e]/40",
                      isActive
                        ? "border-[#16a79e]/55 bg-white shadow-[0_18px_45px_rgba(22,167,158,0.16)]"
                        : isHovered
                          ? "border-[#16a79e]/35 bg-white/90 shadow-[0_14px_36px_rgba(15,23,42,0.07)]"
                          : "border-[#dcebea] bg-white/62 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition duration-300",
                        isActive
                          ? "bg-[#16a79e] text-white shadow-[0_10px_24px_rgba(22,167,158,0.26)]"
                          : "bg-[#eef9f8] text-[#16a79e]"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#16a79e]">
                        Case 0{index + 1} / {visual.label}
                      </span>
                      <span className="mt-1 block truncate text-sm font-bold text-[#24303b]">
                        {project.title}
                      </span>
                      <span className="mt-1 block truncate text-xs font-semibold text-[#64717d]">
                        {project.category}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <ProjectWorkbenchPreview
            activeProject={activeProject}
            activeVisual={activeVisual}
            ActiveIcon={ActiveIcon}
            activeIndex={activeIndex}
          />
        </div>
      </motion.div>
    </section>
  );
}

function ActiveProjectPanel({
  activeProject,
  activeVisual,
  ActiveIcon,
  activeIndex,
}: {
  activeProject: PortfolioProject;
  activeVisual: ProjectVisual;
  ActiveIcon: LucideIcon;
  activeIndex: number;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#dcebea] bg-white/76 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.slug}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.26, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#11988f] to-[#17aea3] text-white shadow-[0_16px_34px_rgba(18,155,146,0.23)]">
                <ActiveIcon className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#16a79e]">
                  Featured Case 0{activeIndex + 1}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#09131f]">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            <span className="inline-flex w-fit rounded-full border border-[#f4d48a] bg-[#fff7df] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#9b6b0b]">
              {activeVisual.accent}
            </span>
          </div>

          <p className="mt-5 text-sm leading-7 text-[#5e6772]">
            {activeProject.shortDescription}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <InfoTile
              icon={Users}
              label="Client Type"
              value={activeProject.clientType}
            />
            <InfoTile
              icon={CalendarDays}
              label="Timeline"
              value={activeProject.timeline}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {activeProject.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-[#d5ece9] bg-[#f7fdfc] px-3 py-1.5 text-xs font-semibold text-[#24303b]"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/portfolio/${activeProject.slug}`}
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#11988f] to-[#17aea3] px-6 text-xs font-semibold text-white shadow-[0_18px_40px_rgba(18,155,146,0.22)] transition hover:-translate-y-0.5"
            >
              View Case Study
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/portfolio"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-[#4cc3b8] bg-transparent px-6 text-xs font-semibold text-[#129b92] transition hover:bg-[#effaf8]"
            >
              View All Work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function InfoTile({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[#dcebea] bg-[#f7fdfc] p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#64717d]">
          {label}
        </p>
        <Icon className="h-4 w-4 text-[#16a79e]" />
      </div>
      <p className="text-sm font-bold text-[#24303b]">{value}</p>
    </div>
  );
}

function ProjectWorkbenchPreview({
  activeProject,
  activeVisual,
  ActiveIcon,
  activeIndex,
}: {
  activeProject: PortfolioProject;
  activeVisual: ProjectVisual;
  ActiveIcon: LucideIcon;
  activeIndex: number;
}) {
  return (
    <div className="relative overflow-hidden rounded-[2.25rem] border border-[#dcebea] bg-white/[0.68] p-4 shadow-[0_32px_95px_rgba(15,23,42,0.10)] backdrop-blur-xl md:p-5">
      <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#16a79e]/14 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-95px] left-[-70px] h-72 w-72 rounded-full bg-[#113d5c]/8 blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-[#dcebea] bg-[#faffff]/72 p-4 md:p-5">
        <div className="flex flex-col gap-4 border-b border-[#dcebea] pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#f4b84a]" />
              <span className="h-3 w-3 rounded-full bg-[#9adfd7]" />
              <span className="h-3 w-3 rounded-full bg-[#16a79e]" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#64717d]">
              Project Workbench
            </p>
          </div>

          <div className="rounded-full border border-[#cdeee9] bg-[#effaf8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#129b92]">
            {activeVisual.label} / 0{activeIndex + 1}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.slug}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="pt-5"
          >
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.55rem] border border-[#d5ece9] bg-white/76 p-4 shadow-[inset_0_0_60px_rgba(22,167,158,0.08)] sm:min-h-[500px] md:p-5">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(22,167,158,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(22,167,158,0.07)_1px,transparent_1px)] bg-[size:36px_36px]" />
              <motion.div
                className="pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/65 to-transparent"
                animate={{ x: ["-30%", "760%"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10 flex h-full min-h-[380px] flex-col">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#11988f] to-[#17aea3] text-white shadow-[0_18px_38px_rgba(18,155,146,0.24)]">
                      <ActiveIcon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#16a79e]">
                        {activeProject.category}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-[#09131f] md:text-3xl">
                        {activeProject.title}
                      </h3>
                    </div>
                  </div>

                  <ExternalLink className="h-5 w-5 text-[#16a79e]" />
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="rounded-[1.35rem] border border-[#dcebea] bg-[#f7fdfc]/82 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64717d]">
                      Image Slot
                    </p>
                    <div className="mt-4 aspect-[4/3] overflow-hidden rounded-[1.1rem] border border-[#d5ece9] bg-white/80 p-4">
                      <div className="flex h-full flex-col justify-between rounded-2xl border border-[#d5ece9] bg-gradient-to-br from-[#faffff] to-[#effaf8] p-4">
                        <div className="flex items-center justify-between">
                          <div className="h-3 w-24 rounded-full bg-[#9adfd7]/70" />
                          <Sparkles className="h-4 w-4 text-[#f4b84a]" />
                        </div>
                        <div className="space-y-3">
                          <div className="h-4 w-3/4 rounded-full bg-[#16a79e]/35" />
                          <div className="h-3 w-full rounded-full bg-[#d5ece9]" />
                          <div className="h-3 w-5/6 rounded-full bg-[#d5ece9]" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-16 rounded-2xl bg-[#16a79e]/10" />
                          <div className="h-16 rounded-2xl bg-[#113d5c]/8" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.35rem] border border-[#dcebea] bg-white/78 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64717d]">
                        Key Results
                      </p>
                      <div className="mt-4 space-y-3">
                        {activeProject.results.slice(0, 3).map((result) => (
                          <div
                            key={result}
                            className="flex items-center gap-3 rounded-2xl border border-[#d5ece9] bg-[#f7fdfc] px-3 py-2.5"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#16a79e]" />
                            <span className="text-xs font-semibold leading-5 text-[#24303b]">
                              {result}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {activeProject.features.slice(0, 4).map((feature) => (
                        <div
                          key={feature}
                          className="rounded-2xl border border-[#d5ece9] bg-[#f7fdfc] p-3"
                        >
                          <p className="truncate text-xs font-bold text-[#24303b]">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href={`/portfolio/${activeProject.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-bold text-[#129b92]"
                  >
                    Open active case
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
