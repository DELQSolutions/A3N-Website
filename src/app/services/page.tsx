import { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";
import { SERVICES } from "@/lib/constants/services";
import { ServiceCard } from "@/components/sections/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services - SuMoDigitech",
  description: "Comprehensive SAP solutions and IT services tailored to your business needs.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary">Home</Link>
              {" / "}
              <span>Services</span>
            </p>
            <p className="text-lg text-muted-foreground">
              Comprehensive SAP solutions and IT services tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
