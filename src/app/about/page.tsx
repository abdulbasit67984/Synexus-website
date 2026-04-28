import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Goal,
  HeartHandshake,
  Layers3,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Synexus Software Technologies, a software company building websites, ERP systems, CMS platforms, mobile apps, and business automation solutions.",
};

const values = [
  {
    title: "Business First",
    description:
      "We focus on solving real business problems, not just building screens and features.",
    icon: Goal,
  },
  {
    title: "Clean Design",
    description:
      "Every interface is planned to be simple, modern, responsive, and easy to use.",
    icon: Eye,
  },
  {
    title: "Reliable Development",
    description:
      "We build with scalable structure, reusable components, and long-term maintainability.",
    icon: Layers3,
  },
  {
    title: "Long-Term Support",
    description:
      "We support clients after launch with improvements, updates, and technical guidance.",
    icon: HeartHandshake,
  },
];

const strengths = [
  "Custom software development",
  "Modern website design and development",
  "ERP, CMS, CRM, HRM, Inventory, and POS systems",
  "Responsive mobile-first interfaces",
  "Business automation workflows",
  "Cloud-ready deployment support",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-master">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                About Synexus
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                We build digital systems that help businesses work smarter
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Synexus Software Technologies is focused on designing and
                developing modern websites, custom software platforms, ERP
                systems, CMS solutions, mobile apps, and business automation
                tools for companies that want to grow digitally.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/contact" size="lg" className="gap-2">
                  Start a Project
                  <ArrowRight className="h-5 w-5" />
                </ButtonLink>

                <ButtonLink href="/services" variant="secondary" size="lg">
                  View Services
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Company Focus
                    </p>
                    <p className="text-xs text-slate-400">
                      Software, systems, and automation
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Rocket className="h-6 w-6" />
                  </div>
                </div>

                <div className="space-y-4">
                  {strengths.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                      <span className="text-sm text-slate-300">{item}</span>
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
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 backdrop-blur-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                <Goal className="h-7 w-7" />
              </div>

              <h2 className="text-3xl font-bold text-white">Our Mission</h2>

              <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
                Our mission is to help businesses move from manual processes to
                modern digital systems. We aim to create software that is
                practical, reliable, easy to use, and aligned with real business
                operations.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 backdrop-blur-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300">
                <Eye className="h-7 w-7" />
              </div>

              <h2 className="text-3xl font-bold text-white">Our Vision</h2>

              <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
                Our vision is to become a trusted technology partner for
                businesses that need websites, software systems, digital
                products, and automation solutions that can grow with them over
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Core Values"
            title="The principles behind our work"
            description="Our process is built around clarity, practical thinking, modern design, and reliable development."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/55 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/[0.025]">
        <div className="container-custom">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-center backdrop-blur-xl md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-300/10 text-cyan-300">
              <ShieldCheck className="h-8 w-8" />
            </div>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Need a technical partner for your business idea?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              We can help you plan, design, develop, launch, and maintain your
              website, software platform, ERP system, CMS, or custom digital
              product.
            </p>

            <div className="mt-9 flex justify-center">
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