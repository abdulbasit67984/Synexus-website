"use client";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Code2,
  FileCheck2,
  Headphones,
  LayoutTemplate,
  Rocket,
  Search,
  TestTube2,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ProcessStep = {
  title: string;
  phase: string;
  output: string;
  description: string;
  icon: LucideIcon;
  x: number;
  y: number;
};

const steps: ProcessStep[] = [
  {
    title: "Discovery",
    phase: "Strategy",
    output: "Goal map",
    description:
      "We understand your business goals, problems, users, and required software features.",
    icon: Search,
    x: 13,
    y: 23,
  },
  {
    title: "Planning",
    phase: "Scope",
    output: "Module plan",
    description:
      "We define the scope, structure, timeline, modules, and technical direction of the project.",
    icon: ClipboardList,
    x: 36,
    y: 16,
  },
  {
    title: "UI/UX Design",
    phase: "Design",
    output: "Interface direction",
    description:
      "We design modern screens, dashboards, user flows, and responsive layouts before development.",
    icon: LayoutTemplate,
    x: 65,
    y: 22,
  },
  {
    title: "Development",
    phase: "Build",
    output: "Working system",
    description:
      "We build the website, software platform, admin panel, integrations, and backend systems.",
    icon: Code2,
    x: 84,
    y: 45,
  },
  {
    title: "Testing",
    phase: "Validate",
    output: "Tested release",
    description:
      "We test performance, responsiveness, usability, forms, modules, and user permissions.",
    icon: TestTube2,
    x: 66,
    y: 68,
  },
  {
    title: "Launch",
    phase: "Deploy",
    output: "Live product",
    description:
      "We deploy the final product to hosting, cloud, or server environments with proper setup.",
    icon: Rocket,
    x: 38,
    y: 73,
  },
  {
    title: "Support",
    phase: "Care",
    output: "Ongoing guidance",
    description:
      "We continue with maintenance, improvements, updates, and technical support after launch.",
    icon: Headphones,
    x: 14,
    y: 61,
  },
];

const blueprintNotes = [
  "Client brief",
  "Scope map",
  "UI flow",
  "Build queue",
  "QA pass",
];

const deliveryArtifacts = [
  "Requirements",
  "Wireframes",
  "Modules",
  "Release plan",
];

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeStep = steps[activeIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section className="section-padding relative overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(22,167,158,0.12),transparent_30%),radial-gradient(circle_at_85%_72%,rgba(17,61,92,0.08),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/30 to-transparent" />
      <div className="pointer-events-none absolute left-[-6rem] top-24 hidden select-none text-[22rem] font-black leading-none text-[#10958d]/[0.035] lg:block">
        X
      </div>

      <motion.div
        className="container-custom relative z-10"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
            Our Process
          </p>

          <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl md:leading-[1.08]">
            A blueprint for moving from idea to launch
          </h2>

          <p className="mt-6 text-base leading-8 text-[#5e6772] md:text-md">
            Every project moves through a planned delivery board so decisions,
            design, engineering, validation, and launch support stay connected.
          </p>
        </div>

        <div className="mt-12 lg:hidden">
          <div className="grid gap-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={step.title}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={cn(
                    "flex min-h-20 items-center gap-4 rounded-3xl border p-4 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a79e]/40",
                    isActive
                      ? "border-[#16a79e]/50 bg-white shadow-[0_18px_45px_rgba(22,167,158,0.15)]"
                      : "border-[#dcebea] bg-white/62 hover:border-[#16a79e]/35 hover:bg-white/90"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition",
                      isActive
                        ? "bg-[#16a79e] text-white"
                        : "bg-[#eef9f8] text-[#16a79e]"
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </span>

                  <span className="min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#16a79e]">
                      0{index + 1} / {step.phase}
                    </span>
                    <span className="mt-1 block text-sm font-bold text-[#09131f]">
                      {step.title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#64717d]">
                      {step.output}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <ProcessDetailPanel
            activeStep={activeStep}
            ActiveIcon={ActiveIcon}
            activeIndex={activeIndex}
            className="mt-5"
          />
        </div>

        <div className="relative mt-14 hidden lg:block">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#dcebea] bg-white/[0.66] p-6 shadow-[0_32px_95px_rgba(15,23,42,0.10)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(22,167,158,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(22,167,158,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(22,167,158,0.13),transparent_30%)]" />
            <motion.div
              className="pointer-events-none absolute inset-y-0 w-28 bg-gradient-to-r from-transparent via-white/55 to-transparent"
              animate={{ x: ["-20%", "900%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 grid min-h-[680px] grid-cols-[minmax(0,1fr)_400px] gap-6">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-[#dcebea] bg-[#faffff]/54">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="processLine" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#16a79e" stopOpacity="0.16" />
                      <stop offset="55%" stopColor="#16a79e" stopOpacity="0.72" />
                      <stop offset="100%" stopColor="#113d5c" stopOpacity="0.44" />
                    </linearGradient>
                  </defs>

                  {steps.slice(0, -1).map((step, index) => {
                    const nextStep = steps[index + 1];
                    const isActive = activeIndex === index || activeIndex === index + 1;
                    const isHovered =
                      hoveredIndex === index || hoveredIndex === index + 1;

                    return (
                      <motion.line
                        key={`${step.title}-${nextStep.title}`}
                        x1={step.x}
                        y1={step.y}
                        x2={nextStep.x}
                        y2={nextStep.y}
                        stroke={isActive || isHovered ? "url(#processLine)" : "#cdeee9"}
                        strokeWidth={isActive ? 0.6 : isHovered ? 0.48 : 0.28}
                        strokeLinecap="round"
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : isHovered ? 0.78 : 0.42,
                          pathLength: isActive || isHovered ? 1 : 0.72,
                        }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      />
                    );
                  })}
                </svg>

                <div className="absolute left-8 top-8 flex items-center gap-3 rounded-full border border-[#cdeee9] bg-white/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#129b92] shadow-[0_14px_35px_rgba(15,23,42,0.07)]">
                  <FileCheck2 className="h-4 w-4" />
                  Delivery Blueprint
                </div>

                <div className="absolute right-8 top-8 flex max-w-[330px] flex-wrap justify-end gap-2">
                  {blueprintNotes.map((note) => (
                    <span
                      key={note}
                      className="rounded-full border border-[#d5ece9] bg-white/72 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#64717d] shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                <div className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] border border-[#cdeee9] bg-white/82 p-4 text-center shadow-[0_24px_70px_rgba(15,23,42,0.09)] backdrop-blur-xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeStep.title}-hub`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                    >
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#16a79e]">
                        Active Handoff
                      </p>
                      <p className="mt-3 text-lg font-bold text-[#09131f]">
                        {activeStep.output}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-[#64717d]">
                        {activeStep.phase} phase is connected to the full
                        delivery path.
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="absolute bottom-8 left-8 right-8 grid grid-cols-4 gap-3">
                  {deliveryArtifacts.map((artifact, index) => (
                    <div
                      key={artifact}
                      className="rounded-2xl border border-[#d5ece9] bg-white/72 p-3 shadow-[0_12px_28px_rgba(15,23,42,0.04)]"
                    >
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#16a79e]">
                        0{index + 1}
                      </p>
                      <p className="mt-1 truncate text-xs font-bold text-[#24303b]">
                        {artifact}
                      </p>
                    </div>
                  ))}
                </div>

                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeIndex === index;
                  const isHovered = hoveredIndex === index;

                  return (
                    <motion.button
                      key={step.title}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{ y: -7, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "absolute flex w-48 -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-3xl border p-3 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a79e]/40",
                        isActive
                          ? "border-[#16a79e]/55 bg-white shadow-[0_22px_55px_rgba(22,167,158,0.18)]"
                          : isHovered
                            ? "border-[#16a79e]/35 bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.09)]"
                            : "border-[#dcebea] bg-white/78 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
                      )}
                      style={{ left: `${step.x}%`, top: `${step.y}%` }}
                    >
                      <span
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition duration-300",
                          isActive
                            ? "bg-[#16a79e] text-white shadow-[0_10px_24px_rgba(22,167,158,0.28)]"
                            : "bg-[#eef9f8] text-[#16a79e]"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[#16a79e]">
                          Step 0{index + 1}
                        </span>
                        <span className="mt-1 block text-[0.76rem] font-bold leading-5 text-[#24303b]">
                          {step.title}
                        </span>
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-5">
                <ProcessDetailPanel
                  activeStep={activeStep}
                  ActiveIcon={ActiveIcon}
                  activeIndex={activeIndex}
                  className="flex-1"
                />

                <div className="rounded-[1.75rem] border border-[#dcebea] bg-white/72 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.07)] backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64717d]">
                    Workflow guardrails
                  </p>

                  <div className="mt-5 space-y-3">
                    {["Clear approvals", "Visible milestones", "Launch-ready handoff"].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-2xl border border-[#d5ece9] bg-[#f7fdfc] px-4 py-3"
                        >
                          <span className="text-sm font-semibold text-[#24303b]">
                            {item}
                          </span>
                          <ArrowRight className="h-4 w-4 text-[#16a79e]" />
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "7", label: "Delivery phases" },
                    { value: "1", label: "Connected roadmap" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-[#dcebea] bg-white/72 p-4 shadow-[0_14px_34px_rgba(15,23,42,0.06)] backdrop-blur-xl"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-2xl font-bold text-[#09131f]">
                          {item.value}
                        </p>
                        <CheckCircle2 className="h-5 w-5 text-[#16a79e]" />
                      </div>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#64717d]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProcessDetailPanel({
  activeStep,
  ActiveIcon,
  activeIndex,
  className,
}: {
  activeStep: ProcessStep;
  ActiveIcon: LucideIcon;
  activeIndex: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.75rem] border border-[#dcebea] bg-white/86 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.09)] backdrop-blur-xl",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.title}
          className="flex h-full flex-col"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.26, ease: "easeOut" }}
        >
          <div className="flex items-start justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#11988f] to-[#17aea3] text-white shadow-[0_16px_34px_rgba(18,155,146,0.23)]">
                <ActiveIcon className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#16a79e]">
                  Phase 0{activeIndex + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#09131f]">
                  {activeStep.title}
                </h3>
              </div>
            </div>

            <span className="inline-flex w-fit rounded-full border border-[#f4d48a] bg-[#fff7df] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#9b6b0b]">
              {activeStep.phase}
            </span>
          </div>

          <p className="mt-6 text-sm leading-7 text-[#5e6772]">
            {activeStep.description}
          </p>

          <div className="mt-6 rounded-2xl border border-[#d5ece9] bg-[#f7fdfc] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64717d]">
              Output
            </p>
            <p className="mt-2 text-lg font-bold text-[#09131f]">
              {activeStep.output}
            </p>
          </div>

          <div className="mt-auto pt-6">
            <div className="h-2 overflow-hidden rounded-full bg-[#e1f2ef]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#11988f] to-[#17aea3]"
                initial={false}
                animate={{ width: `${((activeIndex + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-[#64717d]">
              <span>Progress</span>
              <span>
                {activeIndex + 1}/{steps.length}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
