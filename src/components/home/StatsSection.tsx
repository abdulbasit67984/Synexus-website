const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "20+",
    label: "Business Solutions",
  },
  {
    value: "5+",
    label: "Industries Served",
  },
  {
    value: "24/7",
    label: "Support Ready",
  },
];

export function StatsSection() {
  return (
    <section className="relative border-y border-white/10 bg-transparent">
      <div className="container-custom py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 text-center backdrop-blur-xl"
            >
              <p className="text-3xl font-bold text-white md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
