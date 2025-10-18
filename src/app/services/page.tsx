import { Metadata } from "next";
import { COMPANY } from "@/lib/constants/company";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceCategories } from "@/components/services/ServiceCategories";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { EngagementModels } from "@/components/services/EngagementModels";
import { WhyChooseService } from "@/components/services/WhyChooseService";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ConsultationCTA } from "@/components/services/ConsultationCTA";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: `Our Services - ${COMPANY.name}`,
  description:
    "Comprehensive SAP solutions and IT services tailored to your business needs.",
  openGraph: {
    title: `Our Services - ${COMPANY.name}`,
    description:
      "Comprehensive SAP solutions and IT services tailored to your business needs.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <ServiceCategories />
      <ServiceGrid />
      <WhyChooseService />
      <ServiceProcess />
      <EngagementModels />
      <ConsultationCTA />
      <TestimonialsSection />
    </div>
  );
}
