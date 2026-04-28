import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers3,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { services } from "@/data/services";
import { ButtonLink } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore web development, mobile app development, ERP solutions, CMS development, UI/UX design, cloud deployment, and business automation services by Synexus Software Technologies.",
};

const industries = [
  "Retail",
  "Education",
  "Healthcare",
  "Real Estate",
  "Finance",
  "Logistics",
  "Corporate Businesses",
  "Startups",
];

const serviceStrengths = [
  {
    title: "Modern Stack",
    description:
      "We use scalable and maintainable technologies suitable for modern websites, dashboards, and software products.",
    icon: Cpu,
  },
  {
    title: "Fast Delivery",
    description:
      "Our workflow keeps the project structured from planning to design, development, testing, and launch.",
    icon: Zap,
  },
  {
    title: "Scalable Systems",
    description:
      "We plan systems so they can support more users, more modules, and more business operations over time.",
    icon: Layers3,
  },
  {
    title: "Reliable Support",
    description:
      "We support deployment, updates, improvements, and technical guidance after project completion.",
    icon: ShieldCheck,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-master">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="container-custom relative z-10">
          <SectionHeader
            eyebrow="Services"
            title="Software services for websites, systems, and automation"
            description="We help businesses design, develop, launch, and maintain digital products that improve operations, customer experience, and long-term growth."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>

                    <p className="mb-3 text-sm font-medium text-cyan-300">
                      {service.tagline}
                    </p>

                    <h2 className="text-xl font-bold text-white">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/[0.025]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Service Details"
            title="What we can build for your business"
            description="Each service can be used independently or combined into a complete product development package."
          />

          <div className="mt-14 space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.slug}
                  className="grid gap-8 rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 backdrop-blur-xl md:p-8 lg:grid-cols-[0.9fr_1.1fr]"
                >
                  <div>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                      <Icon className="h-7 w-7" />
                    </div>

                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                      Service 0{index + 1}
                    </p>

                    <h2 className="text-3xl font-bold text-white">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">
                      {service.description}
                    </p>

                    <div className="mt-7">
                      <ButtonLink href="/contact" variant="secondary">
                        Discuss This Service
                      </ButtonLink>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Key Features
                      </h3>

                      <div className="mt-5 space-y-3">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 text-sm text-slate-300"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Deliverables
                      </h3>

                      <div className="mt-5 space-y-3">
                        {service.deliverables.map((deliverable) => (
                          <div
                            key={deliverable}
                            className="flex items-center gap-3 text-sm text-slate-300"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader
              align="left"
              eyebrow="Why Our Services"
              title="Built with design, development, and business logic together"
              description="Our services are not only about writing code. We help convert business requirements into clean product flows, useful dashboards, and maintainable systems."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {serviceStrengths.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/[0.025]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Industries"
            title="Industries we can support"
            description="Our solutions can be customized for different business models, workflows, and operational needs."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-300"
              >
                {industry}
              </span>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-center backdrop-blur-xl md:p-12">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Need a service package for your project?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              We can combine design, development, product planning, deployment,
              and support into one complete package for your website, app, ERP,
              CMS, dashboard, or custom software product.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href="/contact" size="lg" className="gap-2">
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>

              <ButtonLink href="/products" variant="secondary" size="lg">
                View Products
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}