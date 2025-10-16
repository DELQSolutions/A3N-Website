import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug } from "@/lib/constants/services";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants/company";

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
  const { slug } = await params; // AWAIT params here
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} - ${COMPANY.name}`,
    description: service.description,
    openGraph: {
      title: `${service.title} - ${COMPANY.name}`,
      description: service.description,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params; // AWAIT params here
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative py-12 sm:py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(35, 31, 15, 0.85), rgba(35, 31, 15, 0.85)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              {service.title}
            </h1>
            <p className="text-sm text-white/80">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              {" / "}
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              {" / "}
              <span>{service.title}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Image */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt={`${service.title} illustration`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Transform Your Business with {service.title}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Why Choose Section */}
              {service.features && service.features.length > 0 && (
                <>
                  <h3 className="text-xl font-bold mb-4">
                    Why Choose {service.title}?
                  </h3>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section (if available) */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="bg-muted/30 py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                Key Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <p className="font-medium">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Drive Competitive Advantage */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Drive Competitive Advantage
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {service.title} is designed to give your business a competitive edge by delivering a solution that is as unique as you are. Whether you're in manufacturing, retail, finance, or any other industry, SAP's flexible framework allows you to build an ERP system that works precisely the way you need it to.
            </p>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="bg-primary/10 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Get Started with {service.title} Today
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Transform your business processes, boost efficiency, and achieve new levels of success with a customized ERP solution from SAP. Contact us today to learn how we can help tailor your ERP system to your specific business needs.
            </p>
            <Button size="lg" asChild className="font-bold">
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
