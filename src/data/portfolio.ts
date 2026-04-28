import type { PortfolioProject } from "@/types/portfolio";

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Business ERP Dashboard",
    slug: "business-erp-dashboard",
    category: "ERP System",
    shortDescription:
      "A centralized ERP dashboard for managing operations, finance, inventory, and reports.",
    description:
      "This project concept focuses on helping a growing business manage multiple departments from one digital platform. The dashboard includes modules for inventory, finance, sales, HR, reports, and role-based access.",
    clientType: "Growing business",
    timeline: "8 - 12 weeks",
    services: ["ERP Planning", "UI/UX Design", "Dashboard Development"],
    features: [
      "Admin dashboard",
      "Finance overview",
      "Inventory tracking",
      "Sales reports",
      "User role management",
      "Department modules",
    ],
    results: [
      "Centralized business data",
      "Reduced manual reporting",
      "Improved department visibility",
      "Scalable ERP structure",
    ],
  },
  {
    title: "Corporate CMS Website",
    slug: "corporate-cms-website",
    category: "CMS Platform",
    shortDescription:
      "A content-managed company website with pages, blog, media, SEO, and admin controls.",
    description:
      "This project concept is designed for a company that wants full control over website content without depending on developers for every small update. The CMS supports pages, blogs, forms, media, SEO fields, and content sections.",
    clientType: "Corporate company",
    timeline: "4 - 8 weeks",
    services: ["Web Development", "CMS Development", "SEO Structure"],
    features: [
      "Page management",
      "Blog management",
      "Media library",
      "SEO fields",
      "Contact forms",
      "Admin users",
    ],
    results: [
      "Easy content updates",
      "Better SEO control",
      "Professional company presence",
      "Reduced content management effort",
    ],
  },
  {
    title: "Inventory Control Panel",
    slug: "inventory-control-panel",
    category: "Inventory System",
    shortDescription:
      "A stock management interface for products, suppliers, warehouses, purchases, and alerts.",
    description:
      "This project concept helps retail and warehouse-based businesses track product movement, supplier records, stock levels, purchases, and low-stock alerts from a clean dashboard interface.",
    clientType: "Retail / warehouse business",
    timeline: "6 - 10 weeks",
    services: ["Inventory System", "Dashboard Design", "Business Automation"],
    features: [
      "Product records",
      "Stock tracking",
      "Supplier management",
      "Warehouse records",
      "Low-stock alerts",
      "Inventory reports",
    ],
    results: [
      "Improved stock visibility",
      "Reduced inventory confusion",
      "Better purchase planning",
      "Faster inventory reporting",
    ],
  },
  {
    title: "Sales CRM Platform",
    slug: "sales-crm-platform",
    category: "CRM System",
    shortDescription:
      "A CRM system for leads, clients, sales pipelines, follow-ups, and team activity.",
    description:
      "This project concept supports sales teams by organizing leads, clients, deals, tasks, follow-ups, and reporting. It gives managers better visibility into customer communication and sales progress.",
    clientType: "Sales team",
    timeline: "6 - 9 weeks",
    services: ["CRM Development", "UI/UX Design", "Automation"],
    features: [
      "Lead management",
      "Client database",
      "Sales pipeline",
      "Follow-up reminders",
      "Task management",
      "Sales reports",
    ],
    results: [
      "Better lead tracking",
      "Improved follow-ups",
      "Reduced missed opportunities",
      "Clear sales pipeline visibility",
    ],
  },
  {
    title: "HRM Employee Portal",
    slug: "hrm-employee-portal",
    category: "HRM System",
    shortDescription:
      "An HR management portal for employees, attendance, leaves, payroll, and reports.",
    description:
      "This project concept helps HR teams digitize employee records, attendance, leave requests, payroll information, and reporting from one secure platform.",
    clientType: "HR department",
    timeline: "6 - 10 weeks",
    services: ["HRM Development", "Dashboard Design", "Role Management"],
    features: [
      "Employee records",
      "Attendance tracking",
      "Leave requests",
      "Payroll structure",
      "Document records",
      "HR reports",
    ],
    results: [
      "Digitized HR records",
      "Simplified leave management",
      "Better employee data access",
      "Reduced manual HR work",
    ],
  },
  {
    title: "POS Billing System",
    slug: "pos-billing-system",
    category: "POS System",
    shortDescription:
      "A fast billing and sales system for products, receipts, customers, and reports.",
    description:
      "This project concept is suitable for shops, retail counters, service businesses, and small stores that need a clean billing system with product records, receipts, sales tracking, and reporting.",
    clientType: "Retail business",
    timeline: "4 - 7 weeks",
    services: ["POS Development", "Inventory Integration", "Reporting"],
    features: [
      "Billing screen",
      "Product records",
      "Customer records",
      "Receipts",
      "Sales tracking",
      "Daily reports",
    ],
    results: [
      "Faster billing process",
      "Clear sales records",
      "Better product tracking",
      "Improved daily reporting",
    ],
  },
];

export function getPortfolioProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}