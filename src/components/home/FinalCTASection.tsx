import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="section-padding relative overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(22,167,158,0.12),transparent_32%),radial-gradient(circle_at_86%_70%,rgba(17,61,92,0.08),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/28 to-transparent" />

      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-[#dcebea] bg-white/[0.68] px-6 py-14 text-center shadow-[0_32px_95px_rgba(15,23,42,0.10)] backdrop-blur-xl md:px-12 md:py-20">
          <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#16a79e]/14 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-95px] left-[-70px] h-72 w-72 rounded-full bg-[#113d5c]/8 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#eef9f8] text-[#16a79e] shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
              <MessageCircle className="h-8 w-8" />
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
              Start Your Project
            </p>

            <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#09131f] md:text-5xl">
              Ready to build your next digital product?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5e6772] md:text-lg">
              Whether you need a website, ERP system, CMS platform, business
              dashboard, or custom software product, we can help you plan,
              design, develop, and launch it.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#11988f] to-[#17aea3] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(18,155,146,0.22)] transition hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-[#4cc3b8] bg-transparent px-8 text-base font-semibold text-[#129b92] transition hover:-translate-y-0.5 hover:bg-[#effaf8]"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}