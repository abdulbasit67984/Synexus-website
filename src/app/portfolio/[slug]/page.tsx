import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Layers3,
  Sparkles,
  Target,
} from "lucide-react";
import {
  portfolioProjects,
  getPortfolioProjectBySlug,
} from "@/data/portfolio";
import { ButtonLink } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";

type PortfolioDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-master">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="container-custom relative z-10">
          <Link
            href="/portfolio"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                {project.category}
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {project.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                  <p className="text-sm text-slate-400">Client Type</p>
                  <p className="mt-2 text-lg font-bold text-white">
                    {project.clientType}
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                  <p className="text-sm text-slate-400">Timeline</p>
                  <p className="mt-2 text-lg font-bold text-white">
                    {project.timeline}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/contact" size="lg" className="gap-2">
                  Start Similar Project
                  <ArrowRight className="h-5 w-5" />
                </ButtonLink>

                <ButtonLink href="/products" variant="secondary" size="lg">
                  View Products
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Case Study Preview
                    </p>
                    <p className="text-xs text-slate-400">
                      Dashboard-style project view
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="h-3 w-28 rounded-full bg-white/15" />
                    <div className="h-3 w-12 rounded-full bg-cyan-300/40" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-4 w-3/4 rounded-full bg-cyan-300/40" />
                    <div className="h-3 w-full rounded-full bg-white/10" />
                    <div className="h-3 w-5/6 rounded-full bg-white/10" />
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="h-24 rounded-2xl bg-cyan-300/10" />
                    <div className="h-24 rounded-2xl bg-violet-400/10" />
                  </div>

                  <div className="mt-4 h-24 rounded-2xl bg-white/[0.04]" />
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {project.services.slice(0, 2).map((service) => (
                    <div
                      key={service}
                      className="rounded-2xl border border-white/10 bg-cyan-300/10 p-4"
                    >
                      <p className="text-xs text-cyan-200">Service</p>
                      <p className="mt-1 text-sm font-bold text-white">
                        {service}
                      </p>
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
            eyebrow="Project Scope"
            title="Services involved in this project"
            description="Each portfolio project can combine product planning, design, development, automation, and deployment."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {project.services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-slate-950/55 p-6 backdrop-blur-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <Layers3 className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-bold text-white">{service}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Planned and executed as part of the full project delivery
                  process.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl md:p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                <ClipboardList className="h-7 w-7" />
              </div>

              <h2 className="text-2xl font-bold text-white">Key Features</h2>

              <div className="mt-6 space-y-4">
                {project.features.map((feature) => (
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
                <Target className="h-7 w-7" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                Expected Results
              </h2>

              <div className="mt-6 space-y-4">
                {project.results.map((result) => (
                  <div
                    key={result}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                    {result}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/[0.025]">
        <div className="container-custom">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-center backdrop-blur-xl md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-300/10 text-cyan-300">
              <Sparkles className="h-8 w-8" />
            </div>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Want a project like {project.title}?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              We can build a similar solution or fully customize it according to
              your business model, workflow, modules, and growth requirements.
            </p>

            <div className="mt-9 flex justify-center">
              <ButtonLink href="/contact" size="lg">
                Discuss Your Project
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}