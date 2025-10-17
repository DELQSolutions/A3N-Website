import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug } from "@/lib/constants/services";
import { COMPANY } from "@/lib/constants/company";
import { CheckCircle2 } from "lucide-react";

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

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: "Service Not Found - SuMoDigitech",
    };
  }

  return {
    title: `${service.title} - ${COMPANY.name}`,
    description: service.description,
    keywords: [service.title, "SAP", "ERP", "Enterprise solutions", "Digital transformation"],
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

  // Parse features to extract title and description if format is "Title: Description"
  const parseFeature = (feature: string) => {
    const parts = feature.split(':');
    if (parts.length > 1) {
      return {
        title: parts[0].trim(),
        description: parts.slice(1).join(':').trim()
      };
    }
    return {
      title: feature,
      description: ''
    };
  };

  // Service-specific image URLs
  const serviceImages: Record<string, string> = {
    'sap-ariba': 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=80',
    'sap-successfactors': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    'sap-s4hana': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    'custom-erp': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  };

  const serviceImage = serviceImages[slug] || 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background */}
      <section 
        className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(35, 31, 15, 0.85), rgba(35, 31, 15, 0.85)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              {service.title}
            </h1>
            <p className="text-sm text-white/80">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              {" / "}
              <span>{service.title}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="flex-grow bg-gradient-to-br from-primary/5 via-transparent to-transparent">
        <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
                {/* Left: Large Service Image */}
                <div className="relative h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                  <Image
                    src={serviceImage}
                    alt={`${service.title} illustration`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Right: Title and Description */}
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6">
                    {slug === 'sap-ariba' ? (
                      <>
                        SAP Ariba: Leading Cloud-Based{" "}
                        <span className="text-primary">Procurement Solution</span>
                      </>
                    ) : slug === 'sap-successfactors' ? (
                      <>
                        SAP SuccessFactors:{" "}
                        <span className="text-primary">Comprehensive HCM Solutions</span>
                      </>
                    ) : (
                      <>
                        Elevate Your Enterprise with{" "}
                        <span className="text-primary">{service.title}</span>
                      </>
                    )}
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features Section with Enhanced Card */}
              {service.features && service.features.length > 0 && (
                <div className="bg-card p-6 sm:p-8 md:p-12 rounded-2xl border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
                    Why {service.title}?
                  </h3>
                  
                  <ul className="space-y-5 sm:space-y-6">
                    {service.features.map((feature, index) => {
                      const parsed = parseFeature(feature);
                      
                      return (
                        <li 
                          key={index} 
                          className="flex items-start gap-3 sm:gap-4 group hover:translate-x-2 transition-all duration-300"
                        >
                          {/* Circular icon indicator with rotation animation */}
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center group-hover:rotate-[360deg] group-hover:bg-primary group-hover:text-foreground transition-all duration-500">
                              <CheckCircle2 className="w-5 h-5" />
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            {parsed.description ? (
                              <>
                                <h4 className="text-base sm:text-lg font-semibold mb-1">
                                  {parsed.title}
                                </h4>
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                  {parsed.description}
                                </p>
                              </>
                            ) : (
                              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                {parsed.title}
                              </p>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Benefits Section - If Available */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="mt-12 sm:mt-16 bg-muted/30 p-6 sm:p-8 rounded-xl">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
                    Key Benefits
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {service.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-card rounded-lg border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm sm:text-base font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
