import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Code2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const processSteps = [
  {
    title: "Requirement Discussion",
    description:
      "We understand your business goals, current problems, required features, and expected result.",
    icon: ClipboardList,
  },
  {
    title: "Planning & Structure",
    description:
      "We define scope, pages, modules, user flows, technology direction, and delivery roadmap.",
    icon: Layers3,
  },
  {
    title: "Design & Development",
    description:
      "We create the interface, build functionality, connect integrations, and prepare the system.",
    icon: Code2,
  },
  {
    title: "Testing & Launch",
    description:
      "We test responsiveness, performance, features, user flows, and deploy the final product.",
    icon: Rocket,
  },
];

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

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

function DetailList({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: LucideIcon;
  items: string[];
}) {
  return (
    <article className="rounded-[2rem] border border-[#dcebea] bg-white/[0.68] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-8">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e]">
        <Icon className="h-7 w-7" />
      </div>

      <h2 className="text-2xl font-bold text-[#09131f]">{title}</h2>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#16a79e]" />
            <span className="text-sm font-medium leading-6 text-[#5e6772]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon as LucideIcon;
  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-master">
      <section className="relative overflow-hidden bg-transparent pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(22,167,158,0.13),transparent_30%),radial-gradient(circle_at_86%_62%,rgba(17,61,92,0.08),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/28 to-transparent" />
        <div className="pointer-events-none absolute right-[-4rem] top-8 hidden select-none text-[24rem] font-black leading-none text-[#10958d]/[0.035] lg:block">
          X
        </div>

        <div className="container-custom relative z-10">
          <Link
            href="/services"
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#129b92] transition hover:-translate-x-1 hover:text-[#0d8f86]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(470px,0.88fr)]">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#eef9f8] text-[#16a79e] shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                <Icon className="h-8 w-8" />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
                {service.title}
              </p>

              <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-[-0.03em] text-[#09131f] sm:text-5xl md:text-6xl md:leading-[1.02]">
                {service.tagline}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5e6772] md:text-lg">
                {service.description}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <PrimaryLink href="/contact">
                  Discuss This Service
                  <ArrowRight className="h-5 w-5" />
                </PrimaryLink>

                <SecondaryLink href="/portfolio">View Portfolio</SecondaryLink>
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
                        Service Overview
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-[#09131f]">
                        Features and deliverables
                      </h2>
                    </div>

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e] shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
                      <ShieldCheck className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {service.features.slice(0, 6).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 rounded-2xl border border-[#d5ece9] bg-white/78 px-4 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#16a79e]" />
                        <span className="text-sm font-semibold leading-6 text-[#24303b]">
                          {feature}
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

      <section className="section-padding relative overflow-hidden bg-transparent">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(22,167,158,0.10),transparent_30%),radial-gradient(circle_at_82%_74%,rgba(17,61,92,0.07),transparent_34%)]" />

        <div className="container-custom relative z-10">
          <SectionIntro
            eyebrow="What You Get"
            title={`What is included in ${service.title}?`}
            description="Each service is structured to give you practical, useful, and launch-ready digital results."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <DetailList
              title="Key Features"
              icon={Sparkles}
              items={service.features}
            />
            <DetailList
              title="Deliverables"
              icon={Layers3}
              items={service.deliverables}
            />
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-transparent">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/28 to-transparent" />

        <div className="container-custom relative z-10">
          <SectionIntro
            eyebrow="Process"
            title="How this service works"
            description="We follow a structured process so your project moves from idea to launch with clarity."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <article
                  key={step.title}
                  className="group rounded-[1.75rem] border border-[#dcebea] bg-white/[0.68] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#16a79e]/45 hover:bg-white/84"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e] transition duration-300 group-hover:bg-[#16a79e] group-hover:text-white">
                      <StepIcon className="h-6 w-6" />
                    </div>

                    <span className="rounded-full border border-[#cdeee9] bg-[#effaf8] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#129b92]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#09131f]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#5e6772]">
                    {step.description}
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
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionIntro
              align="left"
              eyebrow="Related Services"
              title="Build a stronger package with connected services"
              description="This service can stand alone, or become part of a complete product plan with design, deployment, automation, and support."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {relatedServices.map((item) => {
                const RelatedIcon = item.icon as LucideIcon;

                return (
                  <Link key={item.slug} href={`/services/${item.slug}`}>
                    <article className="group h-full rounded-[1.75rem] border border-[#dcebea] bg-white/[0.72] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#16a79e]/45">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e] transition group-hover:bg-[#16a79e] group-hover:text-white">
                        <RelatedIcon className="h-6 w-6" />
                      </div>

                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#16a79e]">
                        {item.tagline}
                      </p>
                      <h3 className="mt-3 text-lg font-bold text-[#09131f]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#5e6772]">
                        {item.description}
                      </p>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-transparent">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#dcebea] bg-white/[0.68] p-8 shadow-[0_32px_95px_rgba(15,23,42,0.10)] backdrop-blur-xl md:p-12">
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#16a79e]/14 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-95px] left-[-70px] h-72 w-72 rounded-full bg-[#113d5c]/8 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#eef9f8] text-[#16a79e] shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                  <Icon className="h-8 w-8" />
                </div>

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
                  Start This Service
                </p>

                <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#09131f] md:text-5xl">
                  Need {service.title.toLowerCase()} for your business?
                </h2>

                <p className="mt-5 text-base leading-8 text-[#5e6772]">
                  We can plan, design, develop, test, and launch this service
                  according to your business needs, timeline, and budget.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <PrimaryLink href="/contact">
                    Start a Project
                    <ArrowRight className="h-5 w-5" />
                  </PrimaryLink>

                  <SecondaryLink href="/services">View All Services</SecondaryLink>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {service.deliverables.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-[#d5ece9] bg-white/76 p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)]"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e]">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <p className="text-sm font-bold leading-6 text-[#24303b]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
