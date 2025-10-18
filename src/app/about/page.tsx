import { Metadata } from "next";
import { COMPANY } from "@/lib/constants/company";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutContent } from "@/components/about/AboutContent";
import { MissionVision } from "@/components/about/MissionVision";
import { TeamSection } from "@/components/about/TeamSection";
import { CompanyValues } from "@/components/about/CompanyValues";
import { CEOSection } from "@/components/about/CEOSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: `About Us - ${COMPANY.name}`,
  description: COMPANY.about.description,
  openGraph: {
    title: `About Us - ${COMPANY.name}`,
    description: COMPANY.about.description,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutContent />
      <MissionVision />
      <CEOSection />
      <CompanyValues />
      <TeamSection />
      <CTASection
        title={COMPANY.tagline}
        description="Ready to transform your business with our innovative solutions?"
        primaryButton={{ text: "Get Started", href: "/contact" }}
        secondaryButton={{ text: "Our Services", href: "/services" }}
      />
    </div>
  );
}
