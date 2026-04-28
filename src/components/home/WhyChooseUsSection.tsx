import {
  CheckCircle2,
  Lock,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { GlowCard } from "@/components/common/GlowCard";

const reasons = [
  {
    title: "Custom-Built Solutions",
    description:
      "We do not force businesses into generic templates. Every product is planned around your real workflow.",
    icon: Wrench,
  },
  {
    title: "Modern UI/UX",
    description:
      "Clean, responsive, and user-friendly interfaces designed for both desktop and mobile users.",
    icon: Sparkles,
  },
  {
    title: "Scalable Architecture",
    description:
      "Your software is built with future growth in mind, from small teams to enterprise-level systems.",
    icon: Rocket,
  },
  {
    title: "Secure Development",
    description:
      "We follow security-focused development practices to protect business data and user access.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Support",
    description:
      "We provide maintenance, improvements, deployment help, and ongoing technical guidance.",
    icon: Lock,
  },
];

const checklist = [
  "Business-focused planning",
  "Clean and reusable code structure",
  "Mobile-first responsive design",
  "SEO-ready website architecture",
  "Cloud-ready deployment approach",
  "Support after project launch",
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Why Choose Us"
              title="Technology decisions that support real business growth"
              description="We combine software engineering, product design, and business understanding to create digital solutions that are practical, scalable, and easy to manage."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <GlowCard
                  key={reason.title}
                  className={index === 0 ? "sm:col-span-2" : ""}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {reason.description}
                  </p>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}