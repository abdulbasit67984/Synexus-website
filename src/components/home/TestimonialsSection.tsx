import { Quote, Star } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

const testimonials = [
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

export function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-transparent">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      <div className="container-custom">
        <SectionHeader
          eyebrow="Client Feedback"
          title="Trusted for practical and modern software solutions"
          description="We focus on clear communication, strong design, reliable development, and long-term technical value."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-white/10 bg-slate-950/55 p-6 backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <Quote className="h-8 w-8 text-cyan-300" />

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-cyan-300 text-cyan-300"
                    />
                  ))}
                </div>
              </div>

              <p className="text-sm leading-7 text-slate-300">
                “{testimonial.feedback}”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-300/10 text-sm font-bold text-cyan-300">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
