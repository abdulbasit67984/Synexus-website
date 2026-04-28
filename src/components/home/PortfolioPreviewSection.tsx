import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ButtonLink } from "@/components/common/Button";

const projects = [
  {
    title: "Business ERP Dashboard",
    category: "ERP System",
    description:
      "A centralized dashboard concept for managing operations, finance, inventory, and reports.",
    href: "/portfolio/business-erp-dashboard",
  },
  {
    title: "Corporate CMS Website",
    category: "CMS Platform",
    description:
      "A modern content-managed website structure with pages, blogs, media, and SEO controls.",
    href: "/portfolio/corporate-cms-website",
  },
  {
    title: "Inventory Control Panel",
    category: "Inventory System",
    description:
      "A stock management interface for products, suppliers, warehouses, purchases, and alerts.",
    href: "/portfolio/inventory-control-panel",
  },
];

export function PortfolioPreviewSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Portfolio"
            title="Featured digital product work"
            description="A preview of the type of software interfaces, websites, dashboards, and business systems we design and develop."
            className="max-w-2xl"
          />

          <ButtonLink href="/portfolio" variant="secondary">
            View Portfolio
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link key={project.title} href={project.href}>
              <div className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                <div className="relative h-56 overflow-hidden border-b border-white/10 bg-white/[0.04]">
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

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                    View Case Study
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}