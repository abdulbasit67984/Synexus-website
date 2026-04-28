import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/data/nav-links";
import { siteConfig } from "@/lib/constants";

const services = [
    "Web Development",
    "Mobile App Development",
    "ERP Solutions",
    "CMS Development",
    "UI/UX Design",
    "Business Automation",
];

const products = [
    {
        label: "ERP System",
        href: "/products/erp",
    },
    {
        label: "CMS Platform",
        href: "/products/cms",
    },
    {
        label: "CRM System",
        href: "/products/crm",
    },
    {
        label: "HRM System",
        href: "/products/hrm",
    },
];

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-950/80">
            <div className="container-custom py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link href="/" className="flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-base font-black text-slate-950">
                                S
                            </span>

                            <span>
                                <span className="block text-base font-bold text-white">
                                    Synexus
                                </span>
                                <span className="block text-xs font-medium text-slate-400">
                                    Software Technologies
                                </span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                            We build modern websites, custom software, ERP systems, CMS
                            platforms, and business automation solutions for growing
                            companies.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
                            Quick Links
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-400 transition hover:text-cyan-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
                            Services
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-sm text-slate-400">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
                            Products
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {products.map((product) => (
                                <li key={product.href}>
                                    <Link
                                        href={product.href}
                                        className="text-sm text-slate-400 transition hover:text-cyan-300"
                                    >
                                        {product.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-7 space-y-3">
                            <p className="flex items-start gap-3 text-sm text-slate-400">
                                <Mail className="mt-0.5 h-4 w-4 text-cyan-300" />
                                {siteConfig.email}
                            </p>

                            <p className="flex items-start gap-3 text-sm text-slate-400">
                                <Phone className="mt-0.5 h-4 w-4 text-cyan-300" />
                                {siteConfig.phone}
                            </p>

                            <p className="flex items-start gap-3 text-sm text-slate-400">
                                <MapPin className="mt-0.5 h-4 w-4 text-cyan-300" />
                                {siteConfig.location}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
                    <p>
                        © {new Date().getFullYear()} Synexus Software Technologies. All
                        rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <Link href="/privacy-policy" className="hover:text-cyan-300">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-cyan-300">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}