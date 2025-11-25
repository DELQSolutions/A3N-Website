import { Metadata } from "next";
import { COMPANY } from "@/lib/constants/company";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { SolutionsGrid } from "@/components/solutions/SolutionsGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: `Industry Solutions - ${COMPANY.name}`,
  description:
    "Discover industry-specific solutions tailored for manufacturing, healthcare, retail, and financial services.",
  openGraph: {
    title: `Industry Solutions - ${COMPANY.name}`,
    description:
      "Discover industry-specific solutions tailored for manufacturing, healthcare, retail, and financial services.",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      <SolutionsHero />
      <SolutionsGrid />
      <TestimonialsSection />
      <CTASection
        title="Ready to Transform Your Industry?"
        description="Let's discuss how our industry solutions can help your business thrive."
        primaryButton={{ text: "Contact Us", href: "/contact" }}
        secondaryButton={{ text: "View Services", href: "/services" }}
      />
    </div>
  );
}
