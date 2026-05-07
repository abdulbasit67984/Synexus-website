import type { Metadata } from "next";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Synexus Software Technologies for website development, ERP systems, CMS platforms, custom software, and business automation solutions.",
};

const contactDetails = [
  {
    label: "Email",
    value: "info@synexus.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+92 300 0000000",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Pakistan",
    icon: MapPin,
  },
  {
    label: "Response Time",
    value: "Within 24 hours",
    icon: Clock,
  },
];

const supportCards = [
  {
    title: "Project Consultation",
    description:
      "Discuss your website, software, ERP, CMS, or automation requirement with a clear technical direction.",
    icon: MessageCircle,
  },
  {
    title: "Secure Communication",
    description:
      "Your project details, business requirements, and technical ideas are handled professionally.",
    icon: ShieldCheck,
  },
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#16a79e]">
        {eyebrow}
      </p>
      <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl md:leading-[1.08]">
        {title}
      </h2>
      <p className="mt-6 text-base leading-8 text-[#5e6772] md:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionIntro
            eyebrow="Contact Us"
            title="Let’s discuss your next digital product"
            description="Share your project idea, product requirement, or business challenge. We will help you plan the right software solution."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-[#e8ecf1] bg-white p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#09131f]">
                  Contact Details
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#5e6772]">
                  Reach out for custom software development, ERP systems, CMS
                  platforms, websites, mobile apps, dashboards, and automation
                  solutions.
                </p>

                <div className="mt-8 space-y-4">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;

                    return (
                      <div
                        key={detail.label}
                        className="flex items-start gap-4 rounded-2xl border border-[#e8ecf1] bg-[#f8f9fb] p-4"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#16a79e]/10 text-[#16a79e]">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-[#09131f]">
                            {detail.label}
                          </p>
                          <p className="mt-1 text-sm text-[#5e6772]">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {supportCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className="rounded-3xl border border-[#e8ecf1] bg-white p-6"
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16a79e]/10 text-[#16a79e]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="text-lg font-bold text-[#09131f]">
                        {card.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#5e6772]">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}