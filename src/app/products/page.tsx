import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore ERP, CMS, CRM, HRM, Inventory, POS, and custom software products by Synexus Software Technologies.",
};

const productHighlights = [
  {
    title: "Quick Setup",
    description: "Deploy ready-made products or customize them for your business needs in weeks.",
    icon: Zap,
  },
  {
    title: "Feature Rich",
    description: "Comprehensive modules built with best practices and industry standards.",
    icon: Sparkles,
  },
  {
    title: "Reliable & Secure",
    description: "Enterprise-grade security, regular updates, and dedicated support.",
    icon: ShieldCheck,
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

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionIntro
            eyebrow="Products"
            title="Software products for business operations"
            description="Explore ready-to-use and customizable products built to simplify management, automate workflows, and support business growth."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`}>
                <article className="group flex h-full flex-col rounded-3xl border border-[#e8ecf1] bg-white p-6 shadow-sm transition duration-300 hover:border-[#16a79e]/40 hover:shadow-md">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16a79e]/10 text-xl font-bold text-[#16a79e]">
                    {product.title.charAt(0)}
                  </div>

                  <p className="mb-3 text-sm font-medium text-[#16a79e]">
                    {product.tagline}
                  </p>

                  <h2 className="text-2xl font-bold text-[#09131f]">
                    {product.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#5e6772]">
                    {product.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {product.features.slice(0, 4).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-[#3d4452]"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#16a79e]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#16a79e]">
                      View Product Details
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden border-t border-[#e8ecf1] bg-[#f8f9fb]">
        <div className="container-custom relative z-10">
          <SectionIntro
            eyebrow="Product Benefits"
            title="Why choose our software products"
            description="Built with quality, scalability, and user experience at the core."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {productHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#e8ecf1] bg-white p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16a79e]/10 text-[#16a79e]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#09131f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#5e6772]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#16a79e]/20 bg-[#16a79e]/5 p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-[#09131f] md:text-3xl">
              Need a custom software solution?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#5e6772]">
              If your business needs a custom platform, dashboard, portal,
              automation system, or SaaS product, we can design and develop it
              around your workflow.
            </p>

            <div className="mt-8 flex justify-center">
              <PrimaryLink href="/contact">Request Custom Software</PrimaryLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}