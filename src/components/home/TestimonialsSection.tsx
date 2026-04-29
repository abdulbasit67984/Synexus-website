"use client";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageSquareQuote,
  Quote,
  Star,
  type LucideIcon,
} from "lucide-react";
import { motion, type PanInfo } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  role: string;
  feedback: string;
};

type TrustMetric = {
  label: string;
  value: string;
  icon: LucideIcon;
};

const testimonials: Testimonial[] = [
  {
    name: "Business Client",
    role: "Operations Manager",
    feedback:
      "The team understood our workflow clearly and converted it into a clean software structure that made our daily operations easier.",
  },
  {
    name: "Startup Founder",
    role: "Product Owner",
    feedback:
      "The website and dashboard design felt modern, responsive, and very professional. Communication throughout the project was smooth.",
  },
  {
    name: "Retail Company",
    role: "Management Team",
    feedback:
      "Their software planning helped us organize inventory, sales, and reporting in a much better way than our previous manual process.",
  },
];

const trustMetrics: TrustMetric[] = [
  {
    label: "Clear Communication",
    value: "01",
    icon: MessageSquareQuote,
  },
  {
    label: "Modern UI",
    value: "02",
    icon: Star,
  },
  {
    label: "Workflow Focus",
    value: "03",
    icon: CheckCircle2,
  },
];

const dragThreshold = 70;

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  }

  function goToNext() {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }

  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (info.offset.x <= -dragThreshold) {
      goToNext();
      return;
    }

    if (info.offset.x >= dragThreshold) {
      goToPrevious();
    }
  }

  return (
    <section className="section-padding relative overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(22,167,158,0.12),transparent_30%),radial-gradient(circle_at_84%_64%,rgba(17,61,92,0.08),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/28 to-transparent" />
      <div className="pointer-events-none absolute left-[-5rem] top-20 hidden select-none text-[21rem] font-black leading-none text-[#10958d]/[0.035] lg:block">
        X
      </div>

      <motion.div
        className="container-custom relative z-10"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
            Client Feedback
          </p>

          <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl md:leading-[1.08]">
            Trusted for practical and modern software solutions
          </h2>

          <p className="mt-6 text-base leading-8 text-[#5e6772] md:text-md">
            We focus on clear communication, strong design, reliable
            development, and long-term technical value.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={metric.label}
                className="rounded-3xl border border-[#dcebea] bg-white/[0.68] p-4 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.34,
                  ease: "easeOut",
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-bold text-[#09131f]">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#64717d]">
                      {metric.label}
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="relative mx-auto mt-12 max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#dcebea] bg-white/[0.68] px-4 py-7 shadow-[0_32px_95px_rgba(15,23,42,0.10)] backdrop-blur-xl md:px-8 md:py-9">
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#16a79e]/14 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-95px] left-[-70px] h-72 w-72 rounded-full bg-[#113d5c]/8 blur-3xl" />

            <motion.div
              className="relative z-10 flex cursor-grab touch-pan-y items-stretch active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={handleDragEnd}
              animate={{ x: `calc(50% - ${activeIndex * 72 + 36}%)` }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={testimonial.name}
                    className="w-[86%] shrink-0 px-3 md:w-[72%]"
                    animate={{
                      scale: isActive ? 1 : 0.92,
                      opacity: isActive ? 1 : 0.55,
                    }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <article
                      className={cn(
                        "flex h-full min-h-[360px] flex-col rounded-[2rem] border bg-white/84 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors duration-300 md:min-h-[390px] md:p-8",
                        isActive
                          ? "border-[#16a79e]/55 shadow-[0_28px_80px_rgba(22,167,158,0.16)]"
                          : "border-[#dcebea]"
                      )}
                    >
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#11988f] to-[#17aea3] text-white shadow-[0_16px_34px_rgba(18,155,146,0.23)]">
                          <Quote className="h-6 w-6" />
                        </div>

                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              className="h-4 w-4 fill-[#f4b84a] text-[#f4b84a]"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#16a79e]">
                        Review 0{index + 1}
                      </p>

                      <blockquote className="mt-4 text-lg font-bold leading-8 tracking-[-0.01em] text-[#09131f] md:text-2xl md:leading-10">
                        &quot;{testimonial.feedback}&quot;
                      </blockquote>

                      <div className="mt-auto flex items-center gap-4 pt-8">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eef9f8] text-lg font-bold text-[#16a79e] shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
                          {testimonial.name.charAt(0)}
                        </div>

                        <div>
                          <h3 className="text-sm font-bold text-[#09131f]">
                            {testimonial.name}
                          </h3>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#64717d]">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </article>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex justify-center gap-2 sm:justify-start">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Show review ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a79e]/40",
                    activeIndex === index
                      ? "w-8 bg-[#16a79e]"
                      : "w-2.5 bg-[#cdeee9] hover:bg-[#9adfd7]"
                  )}
                />
              ))}
            </div>

            <div className="flex justify-center gap-3 sm:justify-end">
              <button
                type="button"
                aria-label="Previous review"
                onClick={goToPrevious}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d5ece9] bg-white/78 text-[#129b92] transition hover:-translate-y-0.5 hover:bg-[#effaf8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a79e]/40"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={goToNext}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-[#11988f] to-[#17aea3] text-white shadow-[0_14px_32px_rgba(18,155,146,0.20)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a79e]/40"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
