import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Goal,
  HeartHandshake,
  Layers3,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Synexus Software Technologies, a software company building websites, ERP systems, CMS platforms, mobile apps, and business automation solutions.",
};

type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const values: Value[] = [
  {
    title: "Business First",
    description:
      "We shape every product around the workflow, goals, and daily decisions of the business using it.",
    icon: Goal,
  },
  {
    title: "Clear Experience",
    description:
      "Interfaces are planned to feel calm, responsive, polished, and simple for real users.",
    icon: Eye,
  },
  {
    title: "Reliable Structure",
    description:
      "We build reusable foundations that can support new modules, users, and integrations over time.",
    icon: Layers3,
  },
  {
    title: "Long-Term Care",
    description:
      "Launch is only one milestone. We stay available for improvements, updates, and guidance.",
    icon: HeartHandshake,
  },
];

const strengths = [
  "Custom software development",
  "Modern website design and development",
  "ERP, CMS, CRM, HRM, Inventory, and POS systems",
  "Responsive mobile-first interfaces",
  "Business automation workflows",
  "Cloud-ready deployment support",
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Rocket },
  { value: "20+", label: "Business Solutions", icon: Layers3 },
  { value: "5+", label: "Industries Served", icon: UsersRound },
];

const process = [
  {
    step: "01",
    title: "Understand",
    description:
      "We map your goals, users, operations, and pain points before proposing a solution.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We translate requirements into clean flows, focused screens, and scalable product structure.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We develop, test, refine, deploy, and support the system with long-term reliability in mind.",
  },
];

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
        {eyebrow}
      </p>
      <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl md:leading-[1.08]">
        {title}
      </h2>
      <p className="mt-6 text-base leading-8 text-[#5e6772] md:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-master">
      <section className="relative overflow-hidden bg-transparent pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(22,167,158,0.13),transparent_30%),radial-gradient(circle_at_86%_62%,rgba(17,61,92,0.08),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/28 to-transparent" />
        <div className="pointer-events-none absolute right-[-4rem] top-8 hidden select-none text-[24rem] font-black leading-none text-[#10958d]/[0.035] lg:block">
          X
        </div>

        <div className="container-custom relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(480px,0.88fr)]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
                About Synexus
              </p>

              <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-[-0.03em] text-[#09131f] sm:text-3xl md:text-4xl md:leading-[1.02]">
                Digital systems built with clarity, craft, and business purpose
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5e6772] md:text-lg">
                Synexus Software Technologies designs and develops modern
                websites, ERP systems, CMS platforms, business dashboards,
                mobile apps, and automation tools for growing companies.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#11988f] to-[#17aea3] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(18,155,146,0.22)] transition hover:-translate-y-0.5"
                >
                  Start a Project
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-[#4cc3b8] bg-white/58 px-8 text-base font-semibold text-[#129b92] shadow-[0_14px_34px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:bg-[#effaf8]"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-full bg-[#16a79e]/12 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-[#dcebea] bg-white/[0.72] p-5 shadow-[0_32px_95px_rgba(15,23,42,0.10)] backdrop-blur-xl">
                <div className="pointer-events-none absolute right-[-72px] top-[-72px] h-56 w-56 rounded-full bg-[#16a79e]/14 blur-3xl" />
                <div className="pointer-events-none absolute bottom-[-88px] left-[-64px] h-64 w-64 rounded-full bg-[#113d5c]/8 blur-3xl" />

                <div className="relative rounded-[1.65rem] border border-[#dcebea] bg-[#faffff]/82 p-5 md:p-6">
                  <div className="flex items-center justify-between gap-5 border-b border-[#dcebea] pb-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#16a79e]">
                        Company Focus
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-[#09131f]">
                        Software, systems, automation
                      </h2>
                    </div>

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e] shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
                      <Sparkles className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {strengths.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-[#d5ece9] bg-white/78 px-4 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#16a79e]" />
                        <span className="text-sm font-semibold leading-6 text-[#24303b]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-transparent py-8">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/18 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="grid overflow-hidden rounded-[2rem] border border-[#dcebea] bg-white/[0.68] shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:grid-cols-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="group relative min-h-36 p-6 transition duration-300 hover:bg-white/72"
                >
                  {index !== 0 ? (
                    <div className="absolute left-0 top-6 hidden h-[calc(100%-3rem)] w-px bg-[#dcebea] sm:block" />
                  ) : null}

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-3xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm font-bold text-[#24303b]">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#64717d]">
                        Built for real workflows
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#16a79e] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-transparent">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(22,167,158,0.10),transparent_30%),radial-gradient(circle_at_82%_74%,rgba(17,61,92,0.07),transparent_34%)]" />

        <div className="container-custom relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <SectionIntro
              align="left"
              eyebrow="Purpose"
              title="We turn operational complexity into useful digital products"
              description="Our work sits between business understanding, interface design, and reliable engineering. The goal is software that looks refined and makes everyday work easier."
            />

            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-[2rem] border border-[#dcebea] bg-white/[0.68] p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e]">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#09131f]">
                  Our Mission
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#5e6772] md:text-base">
                  To help businesses replace manual processes with practical,
                  reliable, and elegant software systems that support growth.
                </p>
              </article>

              <article className="rounded-[2rem] border border-[#dcebea] bg-white/[0.68] p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e]">
                  <Lightbulb className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#09131f]">
                  Our Vision
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#5e6772] md:text-base">
                  To become a trusted technology partner for companies that
                  need digital platforms built to evolve with them.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-transparent">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/28 to-transparent" />

        <div className="container-custom relative z-10">
          <SectionIntro
            eyebrow="Core Values"
            title="The principles behind our work"
            description="Our process is built around clarity, practical thinking, modern design, reliable development, and long-term technical value."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group rounded-[1.75rem] border border-[#dcebea] bg-white/[0.68] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#16a79e]/45 hover:bg-white/84"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e] transition duration-300 group-hover:bg-[#16a79e] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#09131f]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#5e6772]">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-transparent">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(22,167,158,0.11),transparent_32%),radial-gradient(circle_at_84%_72%,rgba(17,61,92,0.08),transparent_36%)]" />

        <div className="container-custom relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <SectionIntro
              align="left"
              eyebrow="How We Work"
              title="A calm process from idea to launch"
              description="We keep projects understandable with a focused sequence: learn the business, design the experience, build the system, and keep improving it."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {process.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[1.75rem] border border-[#dcebea] bg-white/[0.72] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#16a79e]">
                    Step {item.step}
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-[#09131f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5e6772]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-transparent">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#dcebea] bg-white/[0.68] px-6 py-14 text-center shadow-[0_32px_95px_rgba(15,23,42,0.10)] backdrop-blur-xl md:px-12 md:py-20">
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#16a79e]/14 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-95px] left-[-70px] h-72 w-72 rounded-full bg-[#113d5c]/8 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#eef9f8] text-[#16a79e] shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                <ShieldCheck className="h-8 w-8" />
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
                Technical Partner
              </p>

              <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#09131f] md:text-5xl">
                Need a team to shape your next digital system?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5e6772] md:text-lg">
                We can help you plan, design, develop, launch, and maintain a
                website, ERP system, CMS, business dashboard, or custom digital
                product.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#11988f] to-[#17aea3] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(18,155,146,0.22)] transition hover:-translate-y-0.5"
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
