import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { StickyVideoSection } from "@/components/sections/StickyVideoSection";
import { HorizontalDomainsSection } from "@/components/sections/HorizontalDomainsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyNTISection } from "@/components/sections/WhyNTISection";
import { SectorsSection } from "@/components/sections/SectorsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <StickyVideoSection />
      <HorizontalDomainsSection />
      <StatsSection />
      <WhyNTISection />
      <SectorsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PartnersMarquee />
      <CTASection />
    </>
  );
}
