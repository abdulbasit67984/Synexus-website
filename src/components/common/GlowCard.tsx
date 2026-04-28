import { cn } from "@/lib/utils";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "group glow-border rounded-3xl bg-slate-950/70 p-px transition duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}