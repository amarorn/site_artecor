import { HeroSection } from "@/sections/HeroSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { DiferenciaisSection } from "@/sections/DiferenciaisSection";
import { PortfolioSection } from "@/sections/PortfolioSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { CTASection } from "@/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DiferenciaisSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
