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
        <footer className="relative overflow-hidden border-t border-[#dcebea] bg-white/[0.68] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(22,167,158,0.10),transparent_38%),radial-gradient(circle_at_85%_75%,rgba(17,61,92,0.07),transparent_40%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16a79e]/26 to-transparent" />
            <div className="container-custom py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link href="/" className="flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#16a79e] text-base font-black text-white shadow-[0_18px_40px_rgba(18,155,146,0.18)]">
                                S
                            </span>

                            <span>
                                <span className="block text-base font-bold text-[#09131f]">
                                    Synexus
                                </span>
                                <span className="block text-xs font-medium text-[#64717d]">
                                    Software Technologies
                                </span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-[#5e6772]">
                            We build modern websites, custom software, ERP systems, CMS
                            platforms, and business automation solutions for growing
                            companies.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#16a79e]">
                            Quick Links
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#5e6772] transition hover:text-[#16a79e]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#16a79e]">
                            Services
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-sm text-[#5e6772]">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#16a79e]">
                            Products
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {products.map((product) => (
                                <li key={product.href}>
                                    <Link
                                        href={product.href}
                                        className="text-sm text-[#5e6772] transition hover:text-[#16a79e]"
                                    >
                                        {product.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-7 space-y-3">
                            <p className="flex items-start gap-3 text-sm text-[#5e6772]">
                                <Mail className="mt-0.5 h-4 w-4 text-[#16a79e]" />
                                {siteConfig.email}
                            </p>

                            <p className="flex items-start gap-3 text-sm text-[#5e6772]">
                                <Phone className="mt-0.5 h-4 w-4 text-[#16a79e]" />
                                {siteConfig.phone}
                            </p>

                            <p className="flex items-start gap-3 text-sm text-[#5e6772]">
                                <MapPin className="mt-0.5 h-4 w-4 text-[#16a79e]" />
                                {siteConfig.location}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-[#dcebea] pt-6 text-sm text-[#64717d] md:flex-row md:items-center md:justify-between">
                    <p>
                        © {new Date().getFullYear()} Synexus Software Technologies. All
                        rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <Link href="/privacy-policy" className="hover:text-[#16a79e]">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-[#16a79e]">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}