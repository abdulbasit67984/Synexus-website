import Link from "next/link";
import { ArrowRight, BrainCircuit, Layers3, Target } from "lucide-react";
import { SynexusXSceneClient } from "@/components/home/SynexusXSceneClient";

const trustItems = [
  {
    title: "AI-Powered",
    subtitle: "Solutions",
    icon: BrainCircuit,
  },
  {
    title: "Scalable",
    subtitle: "Systems",
    icon: Layers3,
  },
  {
    title: "Business-Focused",
    subtitle: "Approach",
    icon: Target,
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent pb-16 pt-4 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,167,158,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(22,167,158,0.08),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#16a79e]/14 to-transparent" />
      <div className="pointer-events-none absolute bottom-[-88px] left-1/2 h-44 w-[72%] -translate-x-1/2 rounded-full bg-[#16a79e]/20 blur-3xl" />

      {/* <div className="absolute left-0 top-28 h-44 w-36 opacity-35 [background-image:radial-gradient(circle_at_1px_1px,rgba(22,167,158,0.30)_1.4px,transparent_0)] [background-size:14px_14px]" /> */}

      <div className="absolute right-0 top-8 hidden select-none text-[20rem] font-black leading-none text-[#10958d]/[0.04] lg:block xl:text-[28rem]">
        X
      </div>

      <div className="absolute right-[12%] top-24 hidden lg:block">
        <div className="space-y-6 opacity-35">
          <div className="ml-20 h-px w-40 bg-[#9adfd7]" />
          <div className="ml-8 h-px w-48 bg-[#9adfd7]" />
          <div className="ml-24 h-px w-36 bg-[#9adfd7]" />
        </div>
      </div>

      <div className="relative z-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl md:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
              Innovate. Integrate. Elevate.
            </p>

            <h1 className="mt-6 text-xl font-bold tracking-[-0.03em] text-[#09131f] sm:text-4xl md:text-5xl xl:text-[3rem] xl:leading-[1.02]">
              Smart Software Solutions for{" "}
              <span className="text-[#16a79e]">Modern Businesses</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#5e6772]">
              SYNEXUS builds custom software, ERP systems, CRM solutions, AI
              integration, automation, and digital platforms for growing
              businesses.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#11988f] to-[#17aea3] px-7 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(18,155,146,0.22)] transition hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-[#4cc3b8] bg-transparent px-7 text-sm font-semibold text-[#129b92] transition hover:bg-[#effaf8]"
              >
                Let&apos;s Talk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 flex flex-col gap-5 border-t border-[#deebea] pt-8 sm:flex-row sm:items-start sm:gap-0">
              {trustItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex items-center gap-3 ${index !== trustItems.length - 1
                      ? "sm:mr-6 sm:border-r sm:border-[#dbe8e7] sm:pr-6"
                      : ""
                      }`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef9f8] text-[#16a79e]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#24303b]">
                        {item.title}
                      </p>
                      <p className="text-sm font-medium text-[#24303b]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-2xl sm:h-[480px] lg:h-[540px]">
            <SynexusXSceneClient />
          </div>
        </div>
      </div>
    </section>
  );
}
