import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Synexus Software Technologies website and services.",
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We may collect basic contact information such as your name, email address, phone number, company name, service interest, and project details when you submit a contact form or communicate with us.",
  },
  {
    title: "How We Use Information",
    content:
      "We use submitted information to respond to project inquiries, understand your business requirements, provide service recommendations, prepare proposals, and communicate about software development services.",
  },
  {
    title: "Project Information",
    content:
      "Any project details, business requirements, software ideas, documents, or technical information shared with us are used only for discussion, planning, estimation, and project execution purposes.",
  },
  {
    title: "Data Sharing",
    content:
      "We do not sell your personal information. Information may only be shared with trusted team members or service providers when required to deliver a requested service.",
  },
  {
    title: "Security",
    content:
      "We take reasonable steps to protect submitted information and project details. However, no online transmission or storage method can be guaranteed to be completely secure.",
  },
  {
    title: "Cookies and Analytics",
    content:
      "This website may use basic analytics or cookies in the future to understand visitor behavior, improve performance, and improve website content.",
  },
  {
    title: "Contact",
    content:
      "If you have questions about this Privacy Policy or how your information is handled, you can contact us through the Contact page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-master">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="container-custom relative z-10">
          <SectionHeader
            eyebrow="Privacy Policy"
            title="How we handle your information"
            description="This page explains how Synexus Software Technologies may collect, use, and protect information submitted through this website."
          />

          <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl md:p-10">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-300/10 text-cyan-300">
              <ShieldCheck className="h-8 w-8" />
            </div>

            <p className="mb-10 text-sm leading-7 text-slate-400">
              Last updated: April 2026
            </p>

            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-2xl font-bold text-white">
                    {section.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}