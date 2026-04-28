import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    title: "ERP System",
    slug: "erp",
    tagline: "Complete business management in one platform",
    description:
      "A powerful ERP solution designed to manage finance, inventory, HR, sales, operations, and reporting from a single centralized system.",
    image: "/assets/products/erp.png",
    features: [
      "Finance management",
      "Inventory control",
      "HR and payroll",
      "Sales tracking",
      "Role-based access",
      "Advanced reports",
    ],
    modules: [
      "Dashboard",
      "Finance",
      "Inventory",
      "Purchasing",
      "Sales",
      "Human Resources",
      "Payroll",
      "Reports",
      "User Roles",
    ],
    benefits: [
      "Reduce manual business operations",
      "Improve visibility across departments",
      "Centralize company data",
      "Track performance in real time",
      "Scale modules as your business grows",
    ],
    plans: [
      {
        name: "ERP Starter",
        description: "For small businesses starting digital operations.",
        price: "Contact for Pricing",
        features: [
          "Core dashboard",
          "Inventory module",
          "Sales module",
          "Limited users",
          "Basic reports",
          "Email support",
        ],
      },
      {
        name: "ERP Professional",
        description: "For growing teams that need more control and reporting.",
        price: "Contact for Pricing",
        highlighted: true,
        features: [
          "All Starter features",
          "Finance module",
          "HR module",
          "Role-based access",
          "Advanced reports",
          "Priority support",
        ],
      },
      {
        name: "ERP Enterprise",
        description: "For larger organizations with custom workflows.",
        price: "Custom Quote",
        features: [
          "All Professional features",
          "Custom modules",
          "API integrations",
          "Unlimited users option",
          "Cloud or self-hosted setup",
          "Dedicated support",
        ],
      },
    ],
    faqs: [
      {
        question: "Can the ERP be customized?",
        answer:
          "Yes. Modules, dashboards, reports, roles, and workflows can be customized according to your business process.",
      },
      {
        question: "Can it be deployed on our own server?",
        answer:
          "Yes. The ERP can be deployed on cloud hosting or a private company server depending on your requirements.",
      },
    ],
  },
  {
    title: "CMS Platform",
    slug: "cms",
    tagline: "Manage website content with ease",
    description:
      "A flexible CMS platform for business websites, landing pages, blogs, media libraries, content teams, and SEO-focused publishing.",
    image: "/assets/products/cms.png",
    features: [
      "Page management",
      "Blog management",
      "Media library",
      "SEO controls",
      "Admin users",
      "Form management",
    ],
    modules: [
      "Pages",
      "Blog",
      "Media Library",
      "Navigation",
      "SEO Settings",
      "Forms",
      "Users",
      "Analytics",
    ],
    benefits: [
      "Update website content without developers",
      "Publish blogs and landing pages easily",
      "Manage images and media in one place",
      "Improve SEO content control",
      "Give access to multiple team members",
    ],
    plans: [
      {
        name: "CMS Basic",
        description: "For small websites and company profiles.",
        price: "Contact for Pricing",
        features: [
          "Page management",
          "Blog module",
          "Media library",
          "Basic SEO fields",
          "Admin dashboard",
          "Email support",
        ],
      },
      {
        name: "CMS Pro",
        description: "For growing websites and content teams.",
        price: "Contact for Pricing",
        highlighted: true,
        features: [
          "All Basic features",
          "Custom forms",
          "Multiple admin roles",
          "Advanced SEO controls",
          "Content sections",
          "Priority support",
        ],
      },
      {
        name: "CMS Enterprise",
        description: "For larger organizations with advanced content needs.",
        price: "Custom Quote",
        features: [
          "All Pro features",
          "Custom workflows",
          "Multi-language support",
          "Approval system",
          "Custom integrations",
          "Dedicated support",
        ],
      },
    ],
    faqs: [
      {
        question: "Can the CMS be used for a company website?",
        answer:
          "Yes. It is suitable for company websites, blogs, landing pages, service pages, and product pages.",
      },
      {
        question: "Can we manage SEO from the CMS?",
        answer:
          "Yes. SEO titles, descriptions, slugs, and page content can be managed from the admin dashboard.",
      },
    ],
  },
  {
    title: "CRM System",
    slug: "crm",
    tagline: "Manage leads, clients, and sales pipelines",
    description:
      "A CRM solution for tracking leads, managing clients, organizing follow-ups, monitoring deals, and improving customer communication.",
    image: "/assets/products/crm.png",
    features: [
      "Lead management",
      "Client records",
      "Sales pipeline",
      "Follow-up tasks",
      "Deal tracking",
      "Reports",
    ],
    modules: [
      "Leads",
      "Clients",
      "Deals",
      "Tasks",
      "Follow-ups",
      "Notes",
      "Pipeline",
      "Reports",
    ],
    benefits: [
      "Track every lead from one place",
      "Improve customer follow-up",
      "Organize sales activity",
      "Monitor team performance",
      "Reduce missed opportunities",
    ],
    plans: [
      {
        name: "CRM Starter",
        description: "For small teams managing leads and clients.",
        price: "Contact for Pricing",
        features: [
          "Lead records",
          "Client database",
          "Basic pipeline",
          "Task management",
          "Limited users",
          "Email support",
        ],
      },
      {
        name: "CRM Professional",
        description: "For growing sales teams.",
        price: "Contact for Pricing",
        highlighted: true,
        features: [
          "All Starter features",
          "Advanced pipeline",
          "Follow-up reminders",
          "Sales reports",
          "Role-based access",
          "Priority support",
        ],
      },
      {
        name: "CRM Enterprise",
        description: "For larger sales operations.",
        price: "Custom Quote",
        features: [
          "All Professional features",
          "Custom workflows",
          "API integrations",
          "Team performance reports",
          "Custom dashboard",
          "Dedicated support",
        ],
      },
    ],
    faqs: [
      {
        question: "Can CRM stages be customized?",
        answer:
          "Yes. Lead stages, deal stages, tasks, and follow-up workflows can be customized.",
      },
      {
        question: "Can multiple sales users work in the CRM?",
        answer:
          "Yes. Multiple users can be added with different roles and permissions.",
      },
    ],
  },
  {
    title: "HRM System",
    slug: "hrm",
    tagline: "Simplify employee and HR operations",
    description:
      "A human resource management system for employee records, attendance, leaves, payroll, departments, and HR reporting.",
    image: "/assets/products/hrm.png",
    features: [
      "Employee records",
      "Attendance",
      "Leave requests",
      "Payroll",
      "Departments",
      "HR reports",
    ],
    modules: [
      "Employees",
      "Departments",
      "Attendance",
      "Leaves",
      "Payroll",
      "Documents",
      "Reports",
      "User Roles",
    ],
    benefits: [
      "Digitize employee records",
      "Simplify attendance tracking",
      "Manage leaves and approvals",
      "Organize payroll data",
      "Improve HR reporting",
    ],
    plans: [
      {
        name: "HRM Starter",
        description: "For small teams and basic HR management.",
        price: "Contact for Pricing",
        features: [
          "Employee records",
          "Departments",
          "Attendance tracking",
          "Leave records",
          "Basic reports",
          "Email support",
        ],
      },
      {
        name: "HRM Professional",
        description: "For companies with structured HR workflows.",
        price: "Contact for Pricing",
        highlighted: true,
        features: [
          "All Starter features",
          "Leave approvals",
          "Payroll module",
          "Document records",
          "Role-based access",
          "Priority support",
        ],
      },
      {
        name: "HRM Enterprise",
        description: "For larger organizations.",
        price: "Custom Quote",
        features: [
          "All Professional features",
          "Custom HR workflows",
          "Advanced reporting",
          "Integrations",
          "Custom dashboard",
          "Dedicated support",
        ],
      },
    ],
    faqs: [
      {
        question: "Can payroll rules be customized?",
        answer:
          "Yes. Payroll fields, allowances, deductions, and salary structures can be customized.",
      },
      {
        question: "Does it support leave approvals?",
        answer:
          "Yes. Leave requests and approval flows can be added according to company policy.",
      },
    ],
  },
  {
    title: "Inventory Management",
    slug: "inventory-management",
    tagline: "Track stock, purchases, suppliers, and warehouses",
    description:
      "An inventory system for managing products, stock levels, purchases, suppliers, warehouses, movement history, and low-stock alerts.",
    image: "/assets/products/inventory.png",
    features: [
      "Product records",
      "Stock tracking",
      "Purchases",
      "Suppliers",
      "Warehouses",
      "Low-stock alerts",
    ],
    modules: [
      "Products",
      "Categories",
      "Stock",
      "Purchases",
      "Suppliers",
      "Warehouses",
      "Transfers",
      "Reports",
    ],
    benefits: [
      "Avoid stock confusion",
      "Track product movement",
      "Manage supplier records",
      "Monitor warehouse stock",
      "Generate inventory reports",
    ],
    plans: [
      {
        name: "Inventory Starter",
        description: "For small shops and basic stock control.",
        price: "Contact for Pricing",
        features: [
          "Product records",
          "Stock tracking",
          "Supplier records",
          "Basic reports",
          "Limited users",
          "Email support",
        ],
      },
      {
        name: "Inventory Professional",
        description: "For businesses with purchasing and warehouse needs.",
        price: "Contact for Pricing",
        highlighted: true,
        features: [
          "All Starter features",
          "Purchase management",
          "Warehouse tracking",
          "Low-stock alerts",
          "Stock movement history",
          "Priority support",
        ],
      },
      {
        name: "Inventory Enterprise",
        description: "For advanced inventory operations.",
        price: "Custom Quote",
        features: [
          "All Professional features",
          "Multiple warehouses",
          "Custom reports",
          "Barcode support option",
          "Integrations",
          "Dedicated support",
        ],
      },
    ],
    faqs: [
      {
        question: "Can it support multiple warehouses?",
        answer:
          "Yes. Multiple warehouse support can be added for larger inventory operations.",
      },
      {
        question: "Can low-stock alerts be added?",
        answer:
          "Yes. You can define minimum stock levels and receive low-stock alerts.",
      },
    ],
  },
  {
    title: "POS / Billing System",
    slug: "pos",
    tagline: "Fast billing and sales management",
    description:
      "A POS and billing solution for shops, retailers, restaurants, service businesses, and sales counters.",
    image: "/assets/products/pos.png",
    features: [
      "Fast billing",
      "Product management",
      "Sales tracking",
      "Receipts",
      "Discounts",
      "Reports",
    ],
    modules: [
      "Billing",
      "Products",
      "Customers",
      "Sales",
      "Receipts",
      "Discounts",
      "Payments",
      "Reports",
    ],
    benefits: [
      "Speed up billing",
      "Track daily sales",
      "Manage products easily",
      "Generate receipts",
      "Monitor revenue reports",
    ],
    plans: [
      {
        name: "POS Starter",
        description: "For small shops and simple billing.",
        price: "Contact for Pricing",
        features: [
          "Billing screen",
          "Product records",
          "Customer records",
          "Sales reports",
          "Single counter",
          "Email support",
        ],
      },
      {
        name: "POS Professional",
        description: "For growing retail and service businesses.",
        price: "Contact for Pricing",
        highlighted: true,
        features: [
          "All Starter features",
          "Multiple users",
          "Discount controls",
          "Payment records",
          "Inventory link option",
          "Priority support",
        ],
      },
      {
        name: "POS Enterprise",
        description: "For businesses with multiple counters or branches.",
        price: "Custom Quote",
        features: [
          "All Professional features",
          "Multi-branch option",
          "Advanced reports",
          "Custom receipts",
          "Integrations",
          "Dedicated support",
        ],
      },
    ],
    faqs: [
      {
        question: "Can receipts be customized?",
        answer:
          "Yes. Receipt layout, business details, tax fields, and invoice format can be customized.",
      },
      {
        question: "Can it connect with inventory?",
        answer:
          "Yes. The POS can be connected with inventory management to update stock after sales.",
      },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}