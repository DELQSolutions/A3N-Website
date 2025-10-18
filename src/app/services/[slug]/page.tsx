import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug } from "@/lib/constants/services";
import { COMPANY } from "@/lib/constants/company";
import { ServiceHero } from "@/components/services/slug/ServiceHero";
import { ServiceSidebar } from "@/components/services/slug/ServiceSidebar";
import { ServiceContent } from "@/components/services/slug/ServiceContent";
import { ConsultationForm } from "@/components/services/slug/ConsultationForm";
import { ServiceTechnologies } from "@/components/services/slug/ServiceTechnologies";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} - ${COMPANY.name}`,
    description: service.description,
    keywords: [
      service.title,
      "SAP",
      "ERP",
      "Enterprise solutions",
      "Digital transformation",
    ],
    openGraph: {
      title: `${service.title} - ${COMPANY.name}`,
      description: service.description,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Service-specific images
  const serviceImages: Record<string, string> = {
    "sap-s4hana":
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    "sap-ariba":
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80",
    "sap-successfactors":
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    "custom-erp":
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    "app-development":
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
  };

  const serviceImage =
    serviceImages[slug] ||
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80";

  // Technologies based on service category
  const getTechnologies = () => {
    if (service.category === "sap") {
      return [
        {
          category: "SAP Technologies",
          items: ["SAP HANA", "SAP Fiori", "SAP Cloud Platform", "ABAP"],
        },
        {
          category: "Integration",
          items: ["SAP PI/PO", "SAP CPI", "REST APIs", "OData Services"],
        },
        {
          category: "Analytics",
          items: [
            "SAP Analytics Cloud",
            "SAP BusinessObjects",
            "SAP BW/4HANA",
          ],
        },
      ];
    } else if (service.slug === "ai") {
      return [
        {
          category: "AI Frameworks",
          items: ["TensorFlow", "PyTorch", "scikit-learn", "Keras"],
        },
        {
          category: "Cloud Platforms",
          items: ["AWS SageMaker", "Azure ML", "Google AI Platform"],
        },
        {
          category: "Tools",
          items: ["Jupyter", "MLflow", "Docker", "Kubernetes"],
        },
      ];
    } else {
      return [
        {
          category: "Development",
          items: ["React", "Node.js", "Python", "Java"],
        },
        {
          category: "Cloud",
          items: ["AWS", "Azure", "Google Cloud", "Docker"],
        },
        {
          category: "Database",
          items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
        },
      ];
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <ServiceHero title={service.title} description={service.description} />

      {/* Main Content */}
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Sidebar */}
            <ServiceSidebar currentSlug={slug} />

            {/* Main Content */}
            <ServiceContent service={service} imageUrl={serviceImage} />
          </div>
        </div>
      </main>

      {/* Technologies */}
      <ServiceTechnologies
        title={service.title}
        technologies={getTechnologies()}
      />

      {/* Consultation Form */}
      <ConsultationForm />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss how we can help transform your business with our expert solutions."
        primaryButton={{ text: "Contact Us", href: "/contact" }}
        secondaryButton={{ text: "View All Services", href: "/services" }}
      />
    </div>
  );
}
