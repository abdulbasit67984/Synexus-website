import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { ButtonLink } from "@/components/common/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-master">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 text-center backdrop-blur-xl md:p-12">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-300/10 text-cyan-300">
              <SearchX className="h-10 w-10" />
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              404 Error
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Page not found
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
              The page you are looking for may have been moved, removed, or does
              not exist.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href="/" size="lg" className="gap-2">
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </ButtonLink>

              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-base font-semibold text-white transition hover:border-cyan-300/60 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}