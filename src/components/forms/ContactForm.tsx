"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/common/Button";

const serviceOptions = [
  "Website Development",
  "Mobile App Development",
  "Custom Software",
  "ERP System",
  "CMS Platform",
  "CRM System",
  "HRM System",
  "Inventory Management",
  "POS / Billing System",
  "UI/UX Design",
  "Business Automation",
  "Other",
];

const budgetOptions = [
  "Not sure yet",
  "Under PKR 100,000",
  "PKR 100,000 - PKR 300,000",
  "PKR 300,000 - PKR 700,000",
  "PKR 700,000+",
  "Custom / Enterprise",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Full Name
          </label>
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email Address
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+92 300 0000000"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            placeholder="Your company"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Interested In
          </label>
          <select
            name="service"
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60"
          >
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Budget Range
          </label>
          <select
            name="budget"
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60"
          >
            {budgetOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Project Details
          </label>
          <textarea
            required
            name="message"
            rows={6}
            placeholder="Tell us about your project, product, business problem, or software requirement..."
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
          />
        </div>
      </div>

      {submitted ? (
        <div className="mt-6 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-200">
          Your message has been prepared successfully. Backend email handling
          can be connected later using API routes, Resend, Nodemailer, or a CRM.
        </div>
      ) : null}

      <div className="mt-7">
        <Button type="submit" size="lg" className="w-full gap-2 sm:w-auto">
          Send Message
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
}