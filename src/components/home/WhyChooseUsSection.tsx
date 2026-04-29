"use client";

import {
  CheckCircle2,
  Clock3,
  Gauge,
  Lock,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Reason = {
  title: string;
  label: string;
  description: string;
  proof: string;
  icon: LucideIcon;
};

type EngineNode = {
  x: number;
  y: number;
};

const reasons: Reason[] = [
  {
    title: "Custom-Built Solutions",
    label: "Fit",
    description:
      "We do not force businesses into generic templates. Every product is planned around your real workflow.",
    proof: "Mapped to your team, roles, and operations before development starts.",
    icon: Wrench,
  },
  {
    title: "Modern UI/UX",
    label: "Flow",
    description:
      "Clean, responsive, and user-friendly interfaces designed for both desktop and mobile users.",
    proof: "Dashboards, portals, and public pages stay readable across screen sizes.",
    icon: Sparkles,
  },
  {
    title: "Scalable Architecture",
    label: "Scale",
    description:
      "Your software is built with future growth in mind, from small teams to enterprise-level systems.",
    proof: "Modules, permissions, and deployment paths are planned for expansion.",
    icon: Rocket,
  },
  {
    title: "Secure Development",
    label: "Trust",
    description:
      "We follow security-focused development practices to protect business data and user access.",
    proof: "Access control, data protection, and safer defaults are part of the build.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Support",
    label: "Care",
    description:
      "We provide maintenance, improvements, deployment help, and ongoing technical guidance.",
    proof: "Launch support continues into upgrades, improvements, and technical guidance.",
    icon: Lock,
  },
];

const checklist = [
  "Business-focused planning",
  "Clean reusable code",
  "Mobile-first screens",
  "SEO-ready structure",
  "Cloud-ready delivery",
  "Post-launch support",
];

const proofMetrics = [
  {
    value: "01",
    label: "Workflow-first discovery",
    icon: Gauge,
  },
  {
    value: "02",
    label: "Secure delivery path",
    icon: ShieldCheck,
  },
  {
    value: "03",
    label: "Support after launch",
    icon: Clock3,
  },
];

const engineNodes: EngineNode[] = [
  { x: 19, y: 18 },
  { x: 74, y: 15 },
  { x: 84, y: 45 },
  { x: 66, y: 76 },
  { x: 23, y: 69 },
];

const coreNode = { x: 48, y: 46 };

export function WhyChooseUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeReason = reasons[activeIndex];
  const ActiveIcon = activeReason.icon;

  return (
    <section className="section-padding relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_22%,rgba(22,167,158,0.13),transparent_30%),radial-gradient(circle_at_86%_62%,rgba(17,61,92,0.09),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/30 to-transparent" />
      <div className="pointer-events-none absolute left-[-8%] top-24 h-72 w-72 rounded-full bg-[#16a79e]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] bottom-10 hidden select-none text-[21rem] font-black leading-none text-[#10958d]/[0.035] lg:block">
        X
      </div>

      <motion.div
        className="container-custom relative z-10"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(600px,1.12fr)]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
              Why Choose Us
            </p>

            <h2 className="mt-5 max-w-3xl text-2xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl md:leading-[1.08]">
              A delivery engine built around business growth
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5e6772] md:text-md">
              We connect product thinking, interface design, scalable
              engineering, security, and long-term support into one practical
              path for your software.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {proofMetrics.map((metric, index) => {
                const Icon = metric.icon;

                return (
                  <motion.div
                    key={metric.label}
                    className="rounded-3xl border border-[#dcebea] bg-white/[0.72] p-4 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.38,
                      ease: "easeOut",
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-lg font-bold text-[#09131f]">
                        {metric.value}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e]">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <p className="mt-3 text-xs font-semibold leading-6 text-[#5e6772]">
                      {metric.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex min-h-12 items-center gap-3 rounded-2xl border border-[#dcebea] bg-white/[0.58] px-4 py-3 text-xs font-semibold text-[#24303b] backdrop-blur"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#16a79e]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <div className="grid gap-3">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                const isActive = activeIndex === index;

                return (
                  <button
                    key={reason.title}
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
                      <span className="block text-sm font-bold text-[#09131f]">
                        {reason.title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-[#64717d]">
                        {reason.description}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <ActiveReasonPanel
              activeReason={activeReason}
              ActiveIcon={ActiveIcon}
              activeIndex={activeIndex}
              className="mt-5"
            />
          </div>

          <div className="hidden lg:block">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-[#dcebea] bg-white/[0.64] shadow-[0_32px_95px_rgba(15,23,42,0.10)] backdrop-blur-xl">
              <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#16a79e]/14 blur-3xl" />
              <div className="pointer-events-none absolute bottom-[-95px] left-[-70px] h-72 w-72 rounded-full bg-[#113d5c]/8 blur-3xl" />
              <div className="absolute inset-8 rounded-[1.75rem] border border-[#dcebea] bg-[#faffff]/48" />

              <div className="absolute right-10 top-10 space-y-6 opacity-45">
                <div className="ml-16 h-px w-40 bg-[#9adfd7]" />
                <div className="h-px w-52 bg-[#9adfd7]" />
                <div className="ml-24 h-px w-32 bg-[#9adfd7]" />
              </div>

              <div className="relative z-10 h-[430px]">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="advantageLine"
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#113d5c"
                        stopOpacity="0.12"
                      />
                      <stop
                        offset="55%"
                        stopColor="#16a79e"
                        stopOpacity="0.5"
                      />
                      <stop
                        offset="100%"
                        stopColor="#16a79e"
                        stopOpacity="0.9"
                      />
                    </linearGradient>
                  </defs>

                  {engineNodes.map((node, index) => {
                    const isActive = activeIndex === index;
                    const isHovered = hoveredIndex === index;

                    return (
                      <motion.line
                        key={reasons[index].title}
                        x1={coreNode.x}
                        y1={coreNode.y}
                        x2={node.x}
                        y2={node.y}
                        stroke={
                          isActive || isHovered
                            ? "url(#advantageLine)"
                            : "#cdeee9"
                        }
                        strokeLinecap="round"
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : isHovered ? 0.78 : 0.38,
                          pathLength: isActive || isHovered ? 1 : 0.68,
                          strokeWidth: isActive
                            ? 0.56
                            : isHovered
                              ? 0.44
                              : 0.24,
                        }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      />
                    );
                  })}

                  <motion.circle
                    cx={coreNode.x}
                    cy={coreNode.y}
                    r="16"
                    fill="none"
                    stroke="#16a79e"
                    strokeOpacity="0.2"
                    strokeWidth="0.35"
                    animate={{ r: [12, 18, 12], opacity: [0.25, 0.85, 0.25] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </svg>

                <motion.div
                  className="absolute flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-[#cdeee9] bg-white/90 shadow-[0_26px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl"
                  style={{
                    left: `${coreNode.x}%`,
                    top: `${coreNode.y}%`,
                  }}
                  animate={{ y: [-4, 4, -4] }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-3 rounded-[1.45rem] border border-dashed border-[#16a79e]/26" />
                  <div className="relative text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#11988f] to-[#17aea3] text-white shadow-[0_18px_38px_rgba(18,155,146,0.24)]">
                      <ActiveIcon className="h-7 w-7" />
                    </div>
                    <p className="mt-4 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#0f1720]">
                      SYNE<span className="text-[#16a79e]">X</span>US
                    </p>
                    <p className="mt-1 text-[10px] font-bold text-[#16a79e]">
                      Advantage Core
                    </p>
                  </div>
                </motion.div>

                {reasons.map((reason, index) => {
                  const Icon = reason.icon;
                  const node = engineNodes[index];
                  const isActive = activeIndex === index;
                  const isHovered = hoveredIndex === index;

                  return (
                    <motion.button
                      key={reason.title}
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
                            : "border-[#dcebea] bg-white/76 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
                      )}
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                      }}
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
                        <span className="block text-[0.72rem] font-bold leading-5 text-[#24303b]">
                          {reason.title}
                        </span>
                        <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#129b92]">
                          {reason.label}
                        </span>
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <div className="relative z-10 px-6 pb-6">
                <ActiveReasonPanel
                  activeReason={activeReason}
                  ActiveIcon={ActiveIcon}
                  activeIndex={activeIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ActiveReasonPanel({
  activeReason,
  ActiveIcon,
  activeIndex,
  className,
}: {
  activeReason: Reason;
  ActiveIcon: LucideIcon;
  activeIndex: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.75rem] border border-[#dcebea] bg-white/86 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.09)] backdrop-blur-xl mt-4",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeReason.title}
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
                  Advantage 0{activeIndex + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#09131f]">
                  {activeReason.title}
                </h3>
              </div>
            </div>

            <span className="inline-flex w-fit rounded-full border border-[#f4d48a] bg-[#fff7df] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#9b6b0b]">
              {activeReason.label}
            </span>
          </div>

          <p className="mt-5 text-sm leading-7 text-[#5e6772]">
            {activeReason.description}
          </p>

          <div className="mt-5 rounded-2xl border border-[#d5ece9] bg-[#f7fdfc] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64717d]">
              Delivery signal
            </p>
            <p className="mt-2 text-sm font-semibold leading-7 text-[#24303b]">
              {activeReason.proof}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
