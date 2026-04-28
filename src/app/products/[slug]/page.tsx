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
import { ButtonLink } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";

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

export async function generateMetadata({ params }: ProductDetailPageProps) {
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

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-master">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="container-custom relative z-10">
          <Link
            href="/products"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                {product.title}
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                {product.tagline}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {product.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/contact" size="lg" className="gap-2">
                  Request Demo
                  <ArrowRight className="h-5 w-5" />
                </ButtonLink>

                <ButtonLink href="/products" variant="secondary" size="lg">
                  View All Products
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Product Dashboard
                    </p>
                    <p className="text-xs text-slate-400">
                      {product.title} modules overview
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <PackageCheck className="h-6 w-6" />
                  </div>
                </div>

                <div className="space-y-4">
                  {product.modules.slice(0, 6).map((module, index) => (
                    <div
                      key={module}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-300/10 text-xs font-bold text-cyan-300">
                          {index + 1}
                        </span>
                        <span className="text-sm font-medium text-slate-200">
                          {module}
                        </span>
                      </div>

                      <span className="text-xs text-cyan-300">Active</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-cyan-300/10 p-4">
                    <p className="text-xs text-cyan-200">Modules</p>
                    <p className="mt-1 text-2xl font-bold text-white">
                      {product.modules.length}+
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-violet-400/10 p-4">
                    <p className="text-xs text-violet-200">Plans</p>
                    <p className="mt-1 text-2xl font-bold text-white">
                      {product.plans.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/[0.025]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Modules"
            title={`What is included in ${product.title}?`}
            description="Each product can be customized with the modules your business needs."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.modules.map((module) => (
              <div
                key={module}
                className="rounded-3xl border border-white/10 bg-slate-950/55 p-6 backdrop-blur-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <Layers3 className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-bold text-white">{module}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Manage {module.toLowerCase()} operations with a clean,
                  reliable, and easy-to-use interface.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader
              align="left"
              eyebrow="Benefits"
              title="Designed to make business management easier"
              description="Our product architecture focuses on usability, scalability, reporting, and long-term support."
            />

            <div className="grid gap-4">
              {product.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <p className="text-sm font-medium text-slate-300">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/[0.025]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Plans"
            title={`${product.title} packages`}
            description="Plans are shown here instead of the landing page, so each product has its own relevant package structure."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {product.plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-6 backdrop-blur-xl ${
                  plan.highlighted
                    ? "border-cyan-300/50 bg-cyan-300/10"
                    : "border-white/10 bg-slate-950/55"
                }`}
              >
                {plan.highlighted ? (
                  <div className="absolute right-5 top-5 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">
                    Popular
                  </div>
                ) : null}

                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {plan.description}
                </p>

                <p className="mt-6 text-2xl font-bold text-cyan-300">
                  {plan.price}
                </p>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <ButtonLink
                    href="/contact"
                    variant={plan.highlighted ? "primary" : "secondary"}
                    className="w-full"
                  >
                    Discuss This Plan
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="FAQ"
            title={`Questions about ${product.title}`}
            description="Here are some common questions about this product and how it can be customized."
          />

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {product.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-slate-950/55 p-6 backdrop-blur-xl"
              >
                <h3 className="text-lg font-bold text-white">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl md:p-10">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Want to customize {product.title}?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              We can adjust modules, design, dashboard, user roles, deployment,
              and reports according to your business requirements.
            </p>

            <div className="mt-8 flex justify-center">
              <ButtonLink href="/contact" size="lg">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}