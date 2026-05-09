import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers3,
  PackageCheck,
  Sparkles,
} from "lucide-react";
import { products, getProductBySlug } from "@/data/products";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.title,
    description: product.description,
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

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="section-padding relative overflow-hidden border-b border-[#e8ecf1]">
        <div className="container-custom relative z-10">
          <Link
            href="/products"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#5e6772] transition hover:text-[#16a79e]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
                {product.title}
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-[#09131f] md:text-6xl">
                {product.tagline}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5e6772] md:text-lg">
                {product.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-2xl border border-[#e8ecf1] bg-white px-4 py-3 text-sm text-[#3d4452]"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#16a79e]" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <PrimaryLink href="/contact" className="gap-2">
                  Request Demo
                  <ArrowRight className="h-5 w-5" />
                </PrimaryLink>

                <SecondaryLink href="/products">
                  View All Products
                </SecondaryLink>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#e8ecf1] bg-[#f8f9fb] p-5">
              <div className="rounded-[1.5rem] border border-[#e8ecf1] bg-white p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#09131f]">
                      Product Dashboard
                    </p>
                    <p className="text-xs text-[#5e6772]">
                      {product.title} modules overview
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16a79e]/10 text-[#16a79e]">
                    <PackageCheck className="h-6 w-6" />
                  </div>
                </div>

                <div className="space-y-4">
                  {product.modules.slice(0, 6).map((module, index) => (
                    <div
                      key={module}
                      className="flex items-center justify-between rounded-2xl border border-[#e8ecf1] bg-white p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#16a79e]/10 text-xs font-bold text-[#16a79e]">
                          {index + 1}
                        </span>
                        <span className="text-sm font-medium text-[#3d4452]">
                          {module}
                        </span>
                      </div>

                      <span className="text-xs text-[#16a79e]">Active</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[#e8ecf1] bg-[#16a79e]/10 p-4">
                    <p className="text-xs text-[#16a79e]">Modules</p>
                    <p className="mt-1 text-2xl font-bold text-[#09131f]">
                      {product.modules.length}+
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#e8ecf1] bg-[#16a79e]/10 p-4">
                    <p className="text-xs text-[#16a79e]">Plans</p>
                    <p className="mt-1 text-2xl font-bold text-[#09131f]">
                      {product.plans.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="section-padding border-t border-[#e8ecf1] bg-[#f8f9fb]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
              Modules
            </p>
            <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl md:leading-[1.08]">
              What is included in {product.title}?
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5e6772] md:text-lg">
              Each product can be customized with the modules your business needs.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.modules.map((module) => (
              <div
                key={module}
                className="rounded-3xl border border-[#e8ecf1] bg-white p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16a79e]/10 text-[#16a79e]">
                  <Layers3 className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-bold text-[#09131f]">{module}</h3>

                <p className="mt-3 text-sm leading-7 text-[#5e6772]">
                  Manage {module.toLowerCase()} operations with a clean,
                  reliable, and easy-to-use interface.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="section-padding">
        <div className="container-custom">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-3xl text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
                Benefits
              </p>
              <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl md:leading-[1.08]">
                Designed to make business management easier
              </h2>
              <p className="mt-6 text-base leading-8 text-[#5e6772] md:text-lg">
                Our product architecture focuses on usability, scalability, reporting, and long-term support.
              </p>
            </div>

            <div className="grid gap-4">
              {product.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 rounded-3xl border border-[#e8ecf1] bg-white p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#16a79e]/10 text-[#16a79e]">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <p className="text-sm font-medium text-[#3d4452]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="section-padding border-t border-[#e8ecf1] bg-[#f8f9fb]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
              Plans
            </p>
            <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl md:leading-[1.08]">
              {product.title} packages
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5e6772] md:text-lg">
              Plans are shown here instead of the landing page, so each product has its own relevant package structure.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {product.plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-6 ${
                  plan.highlighted
                    ? "border-[#16a79e]/40 bg-[#16a79e]/5"
                    : "border-[#e8ecf1] bg-white"
                }`}
              >
                {plan.highlighted ? (
                  <div className="absolute right-5 top-5 rounded-full bg-[#16a79e] px-3 py-1 text-xs font-bold text-white">
                    Popular
                  </div>
                ) : null}

                <h3 className="text-2xl font-bold text-[#09131f]">{plan.name}</h3>

                <p className="mt-3 text-sm leading-7 text-[#5e6772]">
                  {plan.description}
                </p>

                <p className="mt-6 text-2xl font-bold text-[#16a79e]">
                  {plan.price}
                </p>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-[#3d4452]"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#16a79e]" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className={`flex w-full items-center justify-center gap-3 rounded-full px-6 py-3 font-semibold transition ${
                      plan.highlighted
                        ? "border border-[#16a79e]/30 bg-[#16a79e]/10 text-[#16a79e] hover:border-[#16a79e]/60 hover:bg-[#16a79e]/20"
                        : "border border-[#09131f]/20 bg-white text-[#09131f] hover:border-[#16a79e]/60 hover:bg-[#f8f9fb]"
                    }`}
                  >
                    Discuss This Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
              FAQ
            </p>
            <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl md:leading-[1.08]">
              Questions about {product.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5e6772] md:text-lg">
              Here are some common questions about this product and how it can be customized.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {product.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-[#e8ecf1] bg-white p-6"
              >
                <h3 className="text-lg font-bold text-[#09131f]">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#5e6772]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-[#16a79e]/20 bg-[#16a79e]/5 p-8 text-center md:p-10">
            <h2 className="text-2xl font-bold text-[#09131f] md:text-3xl">
              Want to customize {product.title}?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#5e6772]">
              We can adjust modules, design, dashboard, user roles, deployment,
              and reports according to your business requirements.
            </p>

            <div className="mt-8 flex justify-center">
              <PrimaryLink href="/contact">
                Contact Us
              </PrimaryLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}