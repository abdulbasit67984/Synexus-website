import { ArrowRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/common/Button";

export function FinalCTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 px-6 py-14 text-center backdrop-blur-xl md:px-12 md:py-20">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-300/10 text-cyan-300">
              <MessageCircle className="h-8 w-8" />
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Start Your Project
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Ready to build your next digital product?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Whether you need a website, ERP system, CMS platform, business
              dashboard, or custom software product, we can help you plan,
              design, develop, and launch it.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href="/contact" size="lg" className="gap-2">
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>

              <ButtonLink href="/portfolio" variant="secondary" size="lg">
                View Portfolio
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}