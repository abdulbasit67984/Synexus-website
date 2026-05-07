import type { Metadata } from "next";
import { Orbitron, Oxanium } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Synexus Software Technologies",
    "software company",
    "ERP software",
    "CMS development",
    "CRM software",
    "HRM software",
    "inventory management software",
    "POS system",
    "web development",
    "mobile app development",
    "business automation",
    "custom software development",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${oxanium.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="noise-overlay" />
        <div className="radial-blur" />
        <Navbar />

        <div className="bg-master">
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
