import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";

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

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionIntro
            eyebrow="Portfolio"
            title="Digital product work and software case studies"
            description="Explore examples of websites, dashboards, ERP systems, CMS platforms, CRM tools, inventory systems, and business software concepts."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-[#e8ecf1] bg-[#f8f9fb] px-5 py-3 text-sm font-medium text-[#3d4452]"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project, index) => (
              <Link key={project.slug} href={`/portfolio/${project.slug}`}>
                <article className="group h-full overflow-hidden rounded-3xl border border-[#e8ecf1] bg-white shadow-sm transition duration-300 hover:border-[#16a79e]/40 hover:shadow-md">
                  <div className="relative h-60 overflow-hidden border-b border-[#e8ecf1] bg-[#f8f9fb]">
                    <div className="absolute inset-6 rounded-3xl border border-[#e8ecf1] bg-white p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="h-3 w-24 rounded-full bg-[#e8ecf1]" />
                        <ExternalLink className="h-4 w-4 text-[#16a79e]" />
                      </div>

                      <div className="space-y-3">
                        <div className="h-4 w-3/4 rounded-full bg-[#16a79e]/40" />
                        <div className="h-3 w-full rounded-full bg-[#e8ecf1]" />
                        <div className="h-3 w-5/6 rounded-full bg-[#e8ecf1]" />
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="h-16 rounded-2xl bg-[#16a79e]/10" />
                        <div className="h-16 rounded-2xl bg-[#e8ecf1]" />
                      </div>

                      <div className="mt-3 h-14 rounded-2xl bg-[#f8f9fb]" />
                    </div>

                    <span className="absolute left-5 top-5 rounded-full border border-[#e8ecf1] bg-white px-3 py-1 text-xs font-medium text-[#16a79e]">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-medium text-[#16a79e]">
                      {project.category}
                    </p>

                    <h2 className="mt-3 text-xl font-bold text-[#09131f]">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-[#5e6772]">
                      {project.shortDescription}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#16a79e]">
                      View Case Study
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-[#16a79e]/20 bg-[#16a79e]/5 p-8 text-center md:p-10">
            <h2 className="text-2xl font-bold text-[#09131f] md:text-3xl">
              Want to build something similar?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#5e6772]">
              We can design and develop a custom website, dashboard, ERP, CMS,
              CRM, inventory system, POS system, or business automation platform
              for your company.
            </p>

            <div className="mt-8 flex justify-center">
              <PrimaryLink href="/contact">Start a Project</PrimaryLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}