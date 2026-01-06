import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { WorkProcessSection } from "@/components/sections/WorkProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <WorkProcessSection />
      <TestimonialsSection />
      <CTASection
        title="Ready to Transform Your Business?"
        description="Partner with us to accelerate your digital transformation journey with expert SAP and IT solutions."
        primaryButton={{ text: "Get Started", href: "/contact" }}
        secondaryButton={{ text: "Our Services", href: "/services" }}
      />
      <NewsletterSection />
    </div>
  );
}
