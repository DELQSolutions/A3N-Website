import { Metadata } from "next";
import { COMPANY } from "@/lib/constants/company";
import { ParticleBackground }from "@/components/effects/ParticleBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: `Resource Augmentation - ${COMPANY.name}`,
  description: "Scale your IT team on-demand with skilled professionals to accelerate project delivery and bridge your expertise gaps.",
  openGraph: {
    title: `Resource Augmentation - ${COMPANY.name}`,
    description: "Scale your IT team on-demand with skilled professionals to accelerate project delivery and bridge your expertise gaps.",
    type: "website",
  },
};

const benefits = [
  {
    icon: Users,
    title: "Expert Talent Pool",
    description: "Access to pre-vetted senior developers, architects, and technical experts",
  },
  {
    icon: Clock,
    title: "Rapid Onboarding",
    description: "Get resources integrated into your team within 1-2 weeks",
  },
  {
    icon: TrendingUp,
    title: "Scalable Teams",
    description: "Scale your team up or down based on project requirements",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "All resources are thoroughly vetted for technical and cultural fit",
  },
];

const skillAreas = [
  "Full-Stack Development (React, Node.js, Python, Django)",
  "Mobile Development (iOS, Android, React Native, Flutter)",
  "Cloud Architecture (AWS, Azure, GCP)",
  "DevOps & Infrastructure",
  "AI/ML Engineers & Data Scientists",
  "SAP Consultants & Developers",
  "QA & Test Automation Engineers",
  "UI/UX Designers",
  "Project Managers & Scrum Masters",
  "Business Analysts",
];

const engagementModels = [
  {
    title: "Dedicated Resources",
    description: "Full-time dedicated professionals working exclusively on your projects",
    features: [
      "100% dedicated to your project",
      "Direct communication and collaboration",
      "Long-term partnership",
      "Flexible contract terms",
    ],
  },
  {
    title: "Team Augmentation",
    description: "Supplement your existing team with specialized skill sets",
    features: [
      "Fill specific skill gaps",
      "Seamless team integration",
      "Knowledge transfer",
      "Flexible engagement duration",
    ],
  },
  {
    title: "Project-Based",
    description: "Complete project teams for specific deliverables",
    features: [
      "End-to-end project delivery",
      "Fixed timeline and scope",
      "Predefined milestones",
      "Quality guarantees",
    ],
  },
];

export default function ResourceAugmentationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-slate-900 to-dark">
        <ParticleBackground />
        <div className="absolute top-10 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight text-white">
              <span className="gradient-text">Resource Augmentation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Scale your IT team on-demand with skilled professionals to accelerate project delivery and bridge your expertise gaps
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#engagement-models">Explore Models</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-title pl-8">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Why Choose <span className="text-primary">Our Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-card border-2 border-border rounded-2xl p-6 text-center hover:border-primary/50 hover:shadow-2xl transition-all card-hover"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-title pl-8">Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Available <span className="text-primary">Skill Areas</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {skillAreas.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card p-5 rounded-xl border-2 border-border hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section id="engagement-models" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-title pl-8">Flexible Options</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Engagement <span className="text-primary">Models</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-2xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                <p className="text-muted-foreground mb-6">{model.description}</p>
                <ul className="space-y-3">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-title pl-8">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Simple <span className="text-primary">3-Step Process</span>
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Share Requirements",
                  description: "Tell us about your project needs, required skills, and timeline",
                },
                {
                  step: "02",
                  title: "Meet Candidates",
                  description: "Review profiles and interview pre-vetted candidates within 48 hours",
                },
                {
                  step: "03",
                  title: "Start Building",
                  description: "Onboard resources quickly and start delivery within 1-2 weeks",
                },
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="text-7xl font-black text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <CTASection
        title="Ready to Scale Your Team?"
        description="Let's discuss your resource requirements and find the perfect talent for your project"
        primaryButton={{ text: "Get Started", href: "/contact" }}
        secondaryButton={{ text: "View Services", href: "/services" }}
      />
    </div>
  );
}
