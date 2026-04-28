import {
  ClipboardList,
  Code2,
  Headphones,
  LayoutTemplate,
  Rocket,
  Search,
  TestTube2,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

const steps = [
  {
    title: "Discovery",
    description:
      "We understand your business goals, problems, users, and required software features.",
    icon: Search,
  },
  {
    title: "Planning",
    description:
      "We define the scope, structure, timeline, modules, and technical direction of the project.",
    icon: ClipboardList,
  },
  {
    title: "UI/UX Design",
    description:
      "We design modern screens, dashboards, user flows, and responsive layouts before development.",
    icon: LayoutTemplate,
  },
  {
    title: "Development",
    description:
      "We build the website, software platform, admin panel, integrations, and backend systems.",
    icon: Code2,
  },
  {
    title: "Testing",
    description:
      "We test performance, responsiveness, usability, forms, modules, and user permissions.",
    icon: TestTube2,
  },
  {
    title: "Launch",
    description:
      "We deploy the final product to hosting, cloud, or server environments with proper setup.",
    icon: Rocket,
  },
  {
    title: "Support",
    description:
      "We continue with maintenance, improvements, updates, and technical support after launch.",
    icon: Headphones,
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-transparent">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      <div className="container-custom">
        <SectionHeader
          eyebrow="Our Process"
          title="A clear development process from idea to launch"
          description="We follow a structured workflow so every project moves with clarity, communication, and measurable progress."
        />

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/60 via-white/10 to-transparent lg:block" />

          <div className="grid gap-5 lg:grid-cols-7">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-sm font-bold text-slate-500">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
