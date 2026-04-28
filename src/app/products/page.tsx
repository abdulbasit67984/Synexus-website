import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ButtonLink } from "@/components/common/Button";

export const metadata = {
  title: "Products",
  description:
    "Explore ERP, CMS, CRM, HRM, Inventory, POS, and custom software products by Synexus Software Technologies.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-master">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="container-custom relative z-10">
          <SectionHeader
            eyebrow="Products"
            title="Software products for business operations"
            description="Explore ready-to-use and customizable products built to simplify management, automate workflows, and support business growth."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`}>
                <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-xl font-bold text-cyan-300">
                    {product.title.charAt(0)}
                  </div>

                  <p className="mb-3 text-sm font-medium text-cyan-300">
                    {product.tagline}
                  </p>

                  <h2 className="text-2xl font-bold text-white">
                    {product.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {product.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {product.features.slice(0, 4).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      View Product Details
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl md:p-10">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Need a custom software product?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              If your business needs a custom platform, dashboard, portal,
              automation system, or SaaS product, we can design and develop it
              around your workflow.
            </p>

            <div className="mt-8 flex justify-center">
              <ButtonLink href="/contact">Request Custom Software</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}