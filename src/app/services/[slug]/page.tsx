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
} from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { ButtonLink } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";

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
      "We define the scope, pages, modules, user flows, technology direction, and delivery roadmap.",
    icon: Layers3,
  },
  {
    title: "Design & Development",
    description:
      "We create the interface, build the functionality, connect integrations, and prepare the system.",
    icon: Code2,
  },
  {
    title: "Testing & Launch",
    description:
      "We test responsiveness, performance, features, user flows, and then deploy the final product.",
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

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-master">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="container-custom relative z-10">
          <Link
            href="/services"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-300/10 text-cyan-300">
                <Icon className="h-8 w-8" />
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                {service.title}
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                {service.tagline}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {service.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/contact" size="lg" className="gap-2">
                  Discuss This Service
                  <ArrowRight className="h-5 w-5" />
                </ButtonLink>

                <ButtonLink href="/portfolio" variant="secondary" size="lg">
                  View Portfolio
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Service Overview
                    </p>
                    <p className="text-xs text-slate-400">
                      Features and deliverables
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                </div>

                <div className="grid gap-4">
                  {service.features.slice(0, 6).map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/[0.025]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="What You Get"
            title={`What is included in ${service.title}?`}
            description="Each service is structured to give you practical, useful, and launch-ready digital results."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl md:p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                <Sparkles className="h-7 w-7" />
              </div>

              <h2 className="text-2xl font-bold text-white">Key Features</h2>

              <div className="mt-6 space-y-4">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl md:p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300">
                <Layers3 className="h-7 w-7" />
              </div>

              <h2 className="text-2xl font-bold text-white">Deliverables</h2>

              <div className="mt-6 space-y-4">
                {service.deliverables.map((deliverable) => (
                  <div
                    key={deliverable}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                    {deliverable}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Process"
            title="How this service works"
            description="We follow a structured process so your project moves from idea to launch with clarity."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/55 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                      <StepIcon className="h-6 w-6" />
                    </div>

                    <span className="text-sm font-bold text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/[0.025]">
        <div className="container-custom">
          <div className="grid items-center gap-12 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 backdrop-blur-xl md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-300/10 text-cyan-300">
                <Icon className="h-8 w-8" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Need {service.title.toLowerCase()} for your business?
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
                We can plan, design, develop, test, and launch this service
                according to your business needs, timeline, and budget.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/contact" size="lg" className="gap-2">
                  Start a Project
                  <ArrowRight className="h-5 w-5" />
                </ButtonLink>

                <ButtonLink href="/services" variant="secondary" size="lg">
                  View All Services
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {service.deliverables.slice(0, 4).map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <p className="text-sm font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}