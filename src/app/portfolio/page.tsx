import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ButtonLink } from "@/components/common/Button";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore portfolio projects and software case studies by Synexus Software Technologies.",
};

const categories = [
  "All Projects",
  "ERP System",
  "CMS Platform",
  "CRM System",
  "Inventory System",
  "HRM System",
  "POS System",
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-master">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="container-custom relative z-10">
          <SectionHeader
            eyebrow="Portfolio"
            title="Digital product work and software case studies"
            description="Explore examples of websites, dashboards, ERP systems, CMS platforms, CRM tools, inventory systems, and business software concepts."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-300"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project, index) => (
              <Link key={project.slug} href={`/portfolio/${project.slug}`}>
                <article className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                  <div className="relative h-60 overflow-hidden border-b border-white/10 bg-white/[0.04]">
                    <div className="absolute inset-6 rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="h-3 w-24 rounded-full bg-white/15" />
                        <ExternalLink className="h-4 w-4 text-cyan-300" />
                      </div>

                      <div className="space-y-3">
                        <div className="h-4 w-3/4 rounded-full bg-cyan-300/40" />
                        <div className="h-3 w-full rounded-full bg-white/10" />
                        <div className="h-3 w-5/6 rounded-full bg-white/10" />
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="h-16 rounded-2xl bg-cyan-300/10" />
                        <div className="h-16 rounded-2xl bg-violet-400/10" />
                      </div>

                      <div className="mt-3 h-14 rounded-2xl bg-white/[0.04]" />
                    </div>

                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-cyan-300/20 blur-2xl" />
                    <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-violet-400/20 blur-2xl" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-medium text-cyan-200">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-medium text-cyan-300">
                      {project.category}
                    </p>

                    <h2 className="mt-3 text-xl font-bold text-white">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {project.shortDescription}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      View Case Study
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl md:p-10">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Want to build something similar?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              We can design and develop a custom website, dashboard, ERP, CMS,
              CRM, inventory system, POS system, or business automation platform
              for your company.
            </p>

            <div className="mt-8 flex justify-center">
              <ButtonLink href="/contact">Start a Project</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}