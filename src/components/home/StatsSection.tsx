import { Clock3, Layers3, Rocket, UsersRound, type LucideIcon } from "lucide-react";

type Stat = {
  value: string;
  label: string;
  detail: string;
  icon: LucideIcon;
};

const stats: Stat[] = [
  {
    value: "50+",
    label: "Projects Delivered",
    detail: "Built for real teams",
    icon: Rocket,
  },
  {
    value: "20+",
    label: "Business Solutions",
    detail: "Across core workflows",
    icon: Layers3,
  },
  {
    value: "5+",
    label: "Industries Served",
    detail: "With tailored systems",
    icon: UsersRound,
  },
  {
    value: "24/7",
    label: "Support Ready",
    detail: "After launch help",
    icon: Clock3,
  },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-transparent py-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/28 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/18 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16a79e]/8 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid overflow-hidden rounded-[2rem] border border-[#dcebea] bg-white/[0.68] shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group relative min-h-36 p-6 transition duration-300 hover:bg-white/72"
              >
                {index !== 0 ? (
                  <div className="absolute left-0 top-6 hidden h-[calc(100%-3rem)] w-px bg-[#dcebea] lg:block" />
                ) : null}

                {index > 1 ? (
                  <div className="absolute inset-x-6 top-0 h-px bg-[#dcebea] sm:hidden" />
                ) : null}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-3xl font-bold tracking-[-0.02em] text-[#09131f] md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-bold text-[#24303b]">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#64717d]">
                      {stat.detail}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef9f8] text-[#16a79e] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#16a79e] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
