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

function PrimaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full border border-[#16a79e]/30 bg-[#16a79e]/10 px-6 py-3 font-semibold text-[#16a79e] transition hover:border-[#16a79e]/60 hover:bg-[#16a79e]/20 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </Link>
  );
}

function SecondaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-full border border-[#09131f]/20 bg-white px-6 py-3 font-semibold text-[#09131f] transition hover:border-[#16a79e]/60 hover:bg-[#f8f9fb] ${className}`}
    >
      {children}
    </Link>
  );
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
    <main className="min-h-screen bg-white">
      <section className="section-padding relative overflow-hidden border-b border-[#e8ecf1]">
        <div className="container-custom relative z-10">
          <Link
            href="/portfolio"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#5e6772] transition hover:text-[#16a79e]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
                {project.category}
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-[#09131f] md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5e6772] md:text-lg">
                {project.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#e8ecf1] bg-white p-5">
                  <p className="text-sm text-[#5e6772]">Client Type</p>
                  <p className="mt-2 text-lg font-bold text-[#09131f]">
                    {project.clientType}
                  </p>
                </div>

                <div className="rounded-3xl border border-[#e8ecf1] bg-white p-5">
                  <p className="text-sm text-[#5e6772]">Timeline</p>
                  <p className="mt-2 text-lg font-bold text-[#09131f]">
                    {project.timeline}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <PrimaryLink href="/contact" className="gap-2">
                  Start Similar Project
                  <ArrowRight className="h-5 w-5" />
                </PrimaryLink>

                <SecondaryLink href="/products">
                  View Products
                </SecondaryLink>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#e8ecf1] bg-[#f8f9fb] p-5">
              <div className="rounded-[1.5rem] border border-[#e8ecf1] bg-white p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#09131f]">
                      Case Study Preview
                    </p>
                    <p className="text-xs text-[#5e6772]">
                      Dashboard-style project view
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16a79e]/10 text-[#16a79e]">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                </div>

                <div className="rounded-3xl border border-[#e8ecf1] bg-[#f8f9fb] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="h-3 w-28 rounded-full bg-[#e8ecf1]" />
                    <div className="h-3 w-12 rounded-full bg-[#16a79e]/40" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-4 w-3/4 rounded-full bg-[#16a79e]/40" />
                    <div className="h-3 w-full rounded-full bg-[#e8ecf1]" />
                    <div className="h-3 w-5/6 rounded-full bg-[#e8ecf1]" />
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="h-24 rounded-2xl bg-[#16a79e]/10" />
                    <div className="h-24 rounded-2xl bg-[#e8ecf1]" />
                  </div>

                  <div className="mt-4 h-24 rounded-2xl bg-[#f8f9fb]" />
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {project.services.slice(0, 2).map((service) => (
                    <div
                      key={service}
                      className="rounded-2xl border border-[#e8ecf1] bg-[#16a79e]/10 p-4"
                    >
                      <p className="text-xs text-[#16a79e]">Service</p>
                      <p className="mt-1 text-sm font-bold text-[#09131f]">
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

      <section className="section-padding border-t border-[#e8ecf1] bg-[#f8f9fb]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
              Project Scope
            </p>
            <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl md:leading-[1.08]">
              Services involved in this project
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5e6772] md:text-lg">
              Each portfolio project can combine product planning, design, development, automation, and deployment.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {project.services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-[#e8ecf1] bg-white p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16a79e]/10 text-[#16a79e]">
                  <Layers3 className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-bold text-[#09131f]">{service}</h3>

                <p className="mt-3 text-sm leading-7 text-[#5e6772]">
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
            <div className="rounded-[2rem] border border-[#e8ecf1] bg-white p-6 md:p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16a79e]/10 text-[#16a79e]">
                <ClipboardList className="h-7 w-7" />
              </div>

              <h2 className="text-2xl font-bold text-[#09131f]">Key Features</h2>

              <div className="mt-6 space-y-4">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-[#3d4452]"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#16a79e]" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#e8ecf1] bg-white p-6 md:p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16a79e]/10 text-[#16a79e]">
                <Target className="h-7 w-7" />
              </div>

              <h2 className="text-2xl font-bold text-[#09131f]">
                Expected Results
              </h2>

              <div className="mt-6 space-y-4">
                {project.results.map((result) => (
                  <div
                    key={result}
                    className="flex items-center gap-3 text-sm text-[#3d4452]"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#16a79e]" />
                    {result}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-[#e8ecf1] bg-[#f8f9fb]">
        <div className="container-custom">
          <div className="rounded-[2rem] border border-[#16a79e]/20 bg-[#16a79e]/5 p-8 text-center md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#16a79e]/10 text-[#16a79e]">
              <Sparkles className="h-8 w-8" />
            </div>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-[#09131f] md:text-5xl">
              Want a project like {project.title}?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5e6772]">
              We can build a similar solution or fully customize it according to
              your business model, workflow, modules, and growth requirements.
            </p>

            <div className="mt-9 flex justify-center">
              <PrimaryLink href="/contact">
                Discuss Your Project
              </PrimaryLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}