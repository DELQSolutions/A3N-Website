import { Metadata } from "next";
import { COMPANY } from "@/lib/constants/company";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GalleryStats } from "@/components/gallery/GalleryStats";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: `Portfolio - ${COMPANY.name}`,
  description:
    "Explore our successful SAP implementations, IT projects, and digital transformation journeys.",
  openGraph: {
    title: `Portfolio - ${COMPANY.name}`,
    description:
      "Explore our successful SAP implementations, IT projects, and digital transformation journeys.",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      <GalleryHero />
      {/* <GalleryStats /> */}
      <GalleryGrid />
      <TestimonialsSection />
      <CTASection
        title="Ready to Start Your Project?"
        description="Let's create something amazing together. Contact us to discuss your next project."
        primaryButton={{ text: "Get Started", href: "/contact" }}
        secondaryButton={{ text: "Our Services", href: "/services" }}
      />
    </div>
  );
}
