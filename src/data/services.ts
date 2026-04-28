import {
  Boxes,
  Brush,
  Cloud,
  Code2,
  Lightbulb,
  MonitorSmartphone,
  Settings,
  Workflow,
} from "lucide-react";
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    title: "Web Development",
    slug: "web-development",
    tagline: "Modern websites and web applications",
    description:
      "We build responsive, fast, SEO-ready websites and web applications with clean interfaces and scalable code architecture.",
    icon: Code2,
    features: [
      "Business websites",
      "Landing pages",
      "Web applications",
      "Admin dashboards",
      "SEO-ready structure",
      "Responsive design",
    ],
    deliverables: [
      "Custom website design",
      "Frontend development",
      "Backend/API integration",
      "Performance optimization",
      "Deployment support",
    ],
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    tagline: "Mobile apps for growing digital products",
    description:
      "We develop mobile app experiences for startups, businesses, dashboards, portals, and customer-facing platforms.",
    icon: MonitorSmartphone,
    features: [
      "Android apps",
      "iOS-ready structure",
      "Cross-platform apps",
      "API integration",
      "User authentication",
      "Push notification support",
    ],
    deliverables: [
      "Mobile UI screens",
      "App frontend",
      "Backend connection",
      "Testing support",
      "Launch guidance",
    ],
  },
  {
    title: "ERP Solutions",
    slug: "erp-solutions",
    tagline: "Business operations in one system",
    description:
      "We design and develop ERP systems for finance, inventory, HR, sales, operations, reports, and user management.",
    icon: Boxes,
    features: [
      "Finance module",
      "Inventory module",
      "Sales module",
      "HR module",
      "Reports",
      "Role-based access",
    ],
    deliverables: [
      "ERP planning",
      "Module development",
      "Admin dashboard",
      "Reports setup",
      "Deployment and support",
    ],
  },
  {
    title: "CMS Development",
    slug: "cms-development",
    tagline: "Content management made simple",
    description:
      "We build CMS platforms that allow businesses to manage pages, blogs, media, SEO fields, and website content easily.",
    icon: Settings,
    features: [
      "Page management",
      "Blog management",
      "Media library",
      "SEO fields",
      "Admin users",
      "Custom sections",
    ],
    deliverables: [
      "CMS dashboard",
      "Content modules",
      "Website integration",
      "Role management",
      "Publishing workflow",
    ],
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    tagline: "Clean product interfaces users understand",
    description:
      "We design modern, user-friendly interfaces for websites, dashboards, mobile apps, SaaS products, and business systems.",
    icon: Brush,
    features: [
      "Wireframes",
      "Website UI",
      "Dashboard UI",
      "Mobile UI",
      "Design systems",
      "Prototype flows",
    ],
    deliverables: [
      "UI design screens",
      "Responsive layouts",
      "Component system",
      "Prototype",
      "Developer-ready design",
    ],
  },
  {
    title: "Business Automation",
    slug: "business-automation",
    tagline: "Reduce manual work with smart workflows",
    description:
      "We create automation systems that reduce repetitive tasks, connect tools, improve workflows, and support business efficiency.",
    icon: Workflow,
    features: [
      "Workflow automation",
      "Custom dashboards",
      "Internal tools",
      "Reports automation",
      "Approval flows",
      "Data management",
    ],
    deliverables: [
      "Workflow planning",
      "Automation logic",
      "Dashboard interface",
      "System integration",
      "Testing and support",
    ],
  },
  {
    title: "Cloud & Deployment",
    slug: "cloud-deployment",
    tagline: "Launch secure and reliable products",
    description:
      "We help deploy websites, software systems, admin panels, and business platforms to secure hosting or cloud environments.",
    icon: Cloud,
    features: [
      "Hosting setup",
      "Cloud deployment",
      "Domain setup",
      "SSL setup",
      "Performance checks",
      "Maintenance support",
    ],
    deliverables: [
      "Production deployment",
      "Environment setup",
      "Basic security setup",
      "Performance configuration",
      "Launch support",
    ],
  },
  {
    title: "IT Consulting",
    slug: "it-consulting",
    tagline: "Technical guidance before development",
    description:
      "We help businesses plan software products, choose the right technology direction, and define clear development scope.",
    icon: Lightbulb,
    features: [
      "Product planning",
      "Technical scope",
      "System architecture",
      "Feature planning",
      "Technology advice",
      "Growth roadmap",
    ],
    deliverables: [
      "Requirement analysis",
      "Technical roadmap",
      "Feature document",
      "Architecture guidance",
      "Development plan",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}