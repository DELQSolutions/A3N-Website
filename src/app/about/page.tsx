import { Metadata } from "next";
import Image from "next/image";
import { COMPANY } from "@/lib/constants/company";
import { ArrowRight, Lightbulb, Rocket, TrendingUp, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us - SuMoDigitech",
  description: COMPANY.about.description,
  openGraph: {
    title: "About Us - SuMoDigitech",
    description: COMPANY.about.description,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt="Technology background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              {" / "}
              <span>About Us</span>
            </p>
          </div>
        </div>
      </section>

      {/* About Section with Illustration */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Illustration */}
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration and innovation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right: Content */}
            <div>
              <p className="text-sm font-semibold text-primary mb-2">ABOUT US</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {COMPANY.about.title}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {COMPANY.about.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission with Team Photo */}
      <section className="bg-muted/30 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-card p-6 sm:p-8 rounded-xl border border-primary/20 hover:shadow-lg transition-all">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                {COMPANY.about.vision.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {COMPANY.about.vision.description}
              </p>
            </div>
            <div className="bg-card p-6 sm:p-8 rounded-xl border border-primary/20 hover:shadow-lg transition-all">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                {COMPANY.about.mission.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {COMPANY.about.mission.description}
              </p>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden max-w-5xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
              alt="Our professional team at SuMoDigitech"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* CEO Section with Photo */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-2">OUR VISIONARY</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Visionary Behind SuMoDigitech Success
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-center mb-8">
              <div className="bg-card p-6 sm:p-8 rounded-xl border border-primary/20">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {COMPANY.about.ceo.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our CEO, Mr. {COMPANY.about.ceo.name}, brings over {COMPANY.about.ceo.experience} of industry knowledge to steer our company towards success. Additionally, our CEO leads our Strategic Business Unit, driving innovation and identifying new business opportunities to ensure we stay at the forefront of industry developments.
                </p>
              </div>

              {/* CEO Photo */}
              <div className="relative h-[300px] md:h-[350px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt={`${COMPANY.about.ceo.name}, CEO of SuMoDigitech`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* CEO Quote */}
            <div className="bg-primary/10 p-6 sm:p-8 rounded-xl border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div>
                  <p className="font-bold text-lg sm:text-xl mb-2">
                    {COMPANY.about.ceo.title} | {COMPANY.about.ceo.name}
                  </p>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{COMPANY.about.ceo.quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process with Images */}
      <section className="bg-muted/30 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-2">WORK PROCESS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              We Follow Three Simple Steps
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We follow a straightforward approach: Innovate to create cutting-edge solutions, implement them effectively, and continuously improve to ensure lasting success and adaptability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {COMPANY.process.map((step, index) => {
              const images = [
                "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
              ];
              
              return (
                <div
                  key={step.step}
                  className="bg-card rounded-xl border border-primary/20 overflow-hidden hover:shadow-lg transition-all"
                >
                  {/* Image with overlay */}
                  <div className="relative h-[200px]">
                    <Image
                      src={images[index]}
                      alt={`${step.title} process illustration`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-4xl font-black text-primary mb-1">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden max-w-5xl mx-auto group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
              alt="Our team collaboration video"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="bg-primary/90 hover:bg-primary w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all group-hover:scale-110">
                <Play className="h-8 w-8 sm:h-10 sm:w-10 text-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAP Services with Icons */}
      <section className="bg-muted/30 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-2">WHY CHOOSE US</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Services <span className="text-primary">We</span> Offer
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We offer SAP Consulting Services, including implementation, custom ABAP development, S/4HANA solutions, and flexible deployment options through the SAP Flex Model.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {COMPANY.sapServices.map((service, index) => {
              const icons = [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
              ];

              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all text-center"
                >
                  <div className="relative h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src={icons[index]}
                      alt={`${service.title} icon`}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <h3 className="text-base font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {COMPANY.tagline}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your business with our innovative solutions?
            </p>
            <Button size="lg" asChild className="font-bold">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
