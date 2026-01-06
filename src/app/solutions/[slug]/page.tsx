import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOLUTIONS, getSolutionBySlug } from "@/lib/constants/solutions";
import { COMPANY } from "@/lib/constants/company";
import { SolutionHero } from "@/components/solutions/slug/SolutionHero";
import { SolutionContent } from "@/components/solutions/slug/SolutionContent";
import { SolutionSidebar } from "@/components/solutions/slug/SolutionSidebar";
import { ServiceTechnologies } from "@/components/services/slug/ServiceTechnologies";
import { ConsultationForm } from "@/components/services/slug/ConsultationForm";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

interface SolutionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: "Solution Not Found",
    };
  }

  return {
    title: `${solution.title} - ${COMPANY.name}`,
    description: solution.description,
    openGraph: {
      title: `${solution.title} - ${COMPANY.name}`,
      description: solution.description,
      type: "website",
    },
  };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  // Convert technologies to format expected by ServiceTechnologies
  const technologies = [
    {
      category: "Core Technologies",
      items: solution.technologies.slice(0, 4),
    },
    {
      category: "Integration",
      items: ["REST APIs", "Web Services", "Middleware", "Cloud Integration"],
    },
    {
      category: "Support",
      items: ["24/7 Support", "Training", "Documentation", "Maintenance"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SolutionHero title={solution.title} description={solution.description} />

      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Use SolutionSidebar for solutions pages */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <SolutionSidebar currentSlug={slug} />
            </div>

            <SolutionContent solution={solution} />
          </div>
        </div>
      </main>

      <ServiceTechnologies
        title={solution.title}
        technologies={technologies}
      />

      <ConsultationForm />
      <TestimonialsSection />

      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss how this solution can transform your business."
        primaryButton={{ text: "Contact Us", href: "/contact" }}
        secondaryButton={{ text: "View All Solutions", href: "/solutions" }}
      />
    </div>
  );
}
