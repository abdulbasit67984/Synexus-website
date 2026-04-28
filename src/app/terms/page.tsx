import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for using the Synexus Software Technologies website and services.",
};

const sections = [
  {
    title: "Use of Website",
    content:
      "By using this website, you agree to use it only for lawful purposes and in a way that does not harm the website, its content, or other users.",
  },
  {
    title: "Service Information",
    content:
      "The information on this website is provided for general service and product explanation. Final project scope, pricing, timeline, and deliverables are confirmed through written discussion, quotation, or agreement.",
  },
  {
    title: "Project Proposals",
    content:
      "Submitting a contact form or project inquiry does not create a binding agreement. A project starts only after both parties agree on the scope, timeline, pricing, and payment terms.",
  },
  {
    title: "Product Plans",
    content:
      "Product plans shown on the website are general package structures. Features, pricing, deployment, customization, and support may vary depending on the client requirement.",
  },
  {
    title: "Intellectual Property",
    content:
      "Website content, design concepts, graphics, and written material belong to Synexus Software Technologies unless otherwise stated. Client project ownership terms are defined separately in the project agreement.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Synexus Software Technologies is not responsible for indirect losses, business interruption, or damages caused by misuse of the website, third-party services, hosting issues, or external systems.",
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these terms from time to time. Continued use of the website means you accept the latest version of these terms.",
  },
  {
    title: "Contact",
    content:
      "If you have questions about these Terms and Conditions, you can contact us through the Contact page.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-master">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="container-custom relative z-10">
          <SectionHeader
            eyebrow="Terms & Conditions"
            title="Website and service terms"
            description="These terms explain the basic conditions for using this website and discussing services with Synexus Software Technologies."
          />

          <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl md:p-10">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-300/10 text-cyan-300">
              <FileText className="h-8 w-8" />
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