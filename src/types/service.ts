import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  deliverables: string[];
};