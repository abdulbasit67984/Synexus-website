import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProductsPreviewSection } from "@/components/home/ProductsPreviewSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PortfolioPreviewSection } from "@/components/home/PortfolioPreviewSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-master">
      <HeroSection />
      <ServicesSection />
      <ProductsPreviewSection />
      <WhyChooseUsSection />
      <StatsSection />
      <ProcessSection />
      <PortfolioPreviewSection />
      <TestimonialsSection />
      <FinalCTASection />
    </main>
  );
}

// import { HeroSection } from "@/components/home/HeroSection";

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-[#f8fbfb]">
//       <HeroSection />
//     </main>
//   );
// }