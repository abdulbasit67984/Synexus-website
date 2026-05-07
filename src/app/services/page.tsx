import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore web development, mobile app development, ERP solutions, CMS development, UI/UX design, cloud deployment, and business automation services by Synexus Software Technologies.",
};

const industries = [
  "Retail",
  "Education",
  "Healthcare",
  "Real Estate",
  "Finance",
  "Logistics",
  "Corporate Businesses",
  "Startups",
];

const serviceStrengths = [
  {
    title: "Modern Stack",
    description:
      "Scalable and maintainable technologies for websites, dashboards, portals, and business systems.",
    icon: Cpu,
  },
  {
    title: "Fast Delivery",
    description:
      "A structured workflow from planning to design, development, testing, launch, and support.",
    icon: Zap,
  },
  {
    title: "Scalable Systems",
    description:
      "Architecture planned for more users, more modules, deeper reporting, and future integrations.",
    icon: Layers3,
  },
  {
    title: "Reliable Support",
    description:
      "Deployment help, updates, improvements, and technical guidance after project completion.",
    icon: ShieldCheck,
  },
];

const serviceStats = [
  { value: "08", label: "Core Services", detail: "From websites to ERP", icon: Layers3 },
  { value: "360", label: "Product Thinking", detail: "Design, build, launch", icon: Target },
  { value: "24/7", label: "Support Ready", detail: "After launch guidance", icon: ShieldCheck },
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

function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#11988f] to-[#17aea3] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(18,155,146,0.22)] transition hover:-translate-y-0.5"
    >
      {children}
    </Link>
  );
}

function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-[#4cc3b8] bg-white/58 px-8 text-base font-semibold text-[#129b92] shadow-[0_14px_34px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:bg-[#effaf8]"
    >
      {children}
    </Link>
  );
}

function FeatureList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-[1.35rem] border border-[#dcebea] bg-white/76 p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
      <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#24303b]">
        {title}
      </h3>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#16a79e]" />
            <span className="text-sm font-medium leading-6 text-[#5e6772]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-master">
      <section className="relative overflow-hidden bg-transparent pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(22,167,158,0.13),transparent_30%),radial-gradient(circle_at_86%_62%,rgba(17,61,92,0.08),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/28 to-transparent" />
        <div className="pointer-events-none absolute right-[-4rem] top-8 hidden select-none text-[24rem] font-black leading-none text-[#10958d]/[0.035] lg:block">
          X
        </div>

        <div className="container-custom relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(470px,0.88fr)]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
                Services
              </p>

              <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-[-0.03em] text-[#09131f] sm:text-5xl md:text-6xl md:leading-[1.02]">
                Software services for websites, systems, and automation
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5e6772] md:text-lg">
                We help businesses design, develop, launch, and maintain
                digital products that improve operations, customer experience,
                reporting, and long-term growth.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <PrimaryLink href="/contact">
                  Start a Project
                  <ArrowRight className="h-5 w-5" />
                </PrimaryLink>

                <SecondaryLink href="/products">View Products</SecondaryLink>
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
                        Service System
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-[#09131f]">
                        Plan, design, build, launch
                      </h2>
                    </div>

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e] shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
                      <Sparkles className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {services.slice(0, 6).map((service, index) => {
                      const Icon = service.icon as LucideIcon;

                      return (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="group flex items-center gap-3 rounded-2xl border border-[#d5ece9] bg-white/78 px-4 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-[#16a79e]/45 hover:bg-white"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef9f8] text-[#16a79e] transition group-hover:bg-[#16a79e] group-hover:text-white">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#16a79e]">
                              Service 0{index + 1}
                            </span>
                            <span className="mt-1 block truncate text-sm font-bold text-[#24303b]">
                              {service.title}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
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
            {serviceStats.map((stat, index) => {
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
                        {stat.detail}
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
          <SectionIntro
            eyebrow="Service Catalog"
            title="Choose a focused service or combine them into one product package"
            description="Each service is built to work independently, but the strongest projects often combine planning, UI, development, deployment, and long-term support."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon as LucideIcon;

              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <article className="group flex h-full flex-col rounded-[1.75rem] border border-[#dcebea] bg-white/[0.68] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#16a79e]/45 hover:bg-white/84">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e] transition duration-300 group-hover:bg-[#16a79e] group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-[#cdeee9] bg-[#effaf8] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#129b92]">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#16a79e]">
                      {service.tagline}
                    </p>

                    <h2 className="mt-3 text-xl font-bold text-[#09131f]">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-[#5e6772]">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#129b92]">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-transparent">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/28 to-transparent" />

        <div className="container-custom relative z-10">
          <SectionIntro
            eyebrow="Service Details"
            title="What we can build for your business"
            description="From a polished website to a complete operations platform, we define the features and deliverables clearly before development starts."
          />

          <div className="mt-14 space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon as LucideIcon;

              return (
                <article
                  key={service.slug}
                  className="relative overflow-hidden rounded-[2.25rem] border border-[#dcebea] bg-white/[0.68] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-8"
                >
                  <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-[#16a79e]/10 blur-3xl" />

                  <div className="relative grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
                    <div>
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e]">
                        <Icon className="h-7 w-7" />
                      </div>

                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#16a79e]">
                        Service 0{index + 1}
                      </p>

                      <h2 className="mt-4 text-3xl font-bold text-[#09131f]">
                        {service.title}
                      </h2>

                      <p className="mt-4 text-sm leading-7 text-[#5e6772] md:text-base">
                        {service.description}
                      </p>

                      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-[#4cc3b8] bg-white/58 px-6 text-sm font-semibold text-[#129b92] transition hover:-translate-y-0.5 hover:bg-[#effaf8]"
                        >
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                          href="/contact"
                          className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#11988f] to-[#17aea3] px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(18,155,146,0.18)] transition hover:-translate-y-0.5"
                        >
                          Discuss Service
                        </Link>
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <FeatureList title="Key Features" items={service.features} />
                      <FeatureList
                        title="Deliverables"
                        items={service.deliverables}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-transparent">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(22,167,158,0.11),transparent_32%),radial-gradient(circle_at_84%_72%,rgba(17,61,92,0.08),transparent_36%)]" />

        <div className="container-custom relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <SectionIntro
              align="left"
              eyebrow="Why Our Services"
              title="Built with design, development, and business logic together"
              description="Our services are not only about writing code. We convert business requirements into clean product flows, useful dashboards, and maintainable systems."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {serviceStrengths.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[1.75rem] border border-[#dcebea] bg-white/[0.72] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-bold text-[#09131f]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#5e6772]">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-transparent">
        <div className="container-custom relative z-10">
          <SectionIntro
            eyebrow="Industries"
            title="Industries we can support"
            description="Our solutions can be customized for different business models, workflows, approval chains, reporting needs, and customer experiences."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-[#d5ece9] bg-white/72 px-5 py-3 text-sm font-semibold text-[#24303b] shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
              >
                {industry}
              </span>
            ))}
          </div>

          <div className="relative mt-14 overflow-hidden rounded-[2.25rem] border border-[#dcebea] bg-white/[0.68] px-6 py-14 text-center shadow-[0_32px_95px_rgba(15,23,42,0.10)] backdrop-blur-xl md:px-12 md:py-20">
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#16a79e]/14 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-95px] left-[-70px] h-72 w-72 rounded-full bg-[#113d5c]/8 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#eef9f8] text-[#16a79e] shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                <Rocket className="h-8 w-8" />
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
                Service Package
              </p>

              <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#09131f] md:text-5xl">
                Need a complete package for your project?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5e6772] md:text-lg">
                We can combine design, development, product planning,
                deployment, and support into one clear package for your
                website, app, ERP, CMS, dashboard, or custom software product.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <PrimaryLink href="/contact">
                  Start a Project
                  <ArrowRight className="h-5 w-5" />
                </PrimaryLink>

                <SecondaryLink href="/products">View Products</SecondaryLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
