"use client";

import { Building, Users, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Building,
    title: "Market Analysis",
    description: "In-depth market research and competitive analysis to position your business for success.",
    badge: "Popular"
  },
  {
    icon: TrendingUp,
    title: "Accounting Consultant",
    description: "Expert financial consulting to optimize your accounting processes and compliance.",
    badge: null
  },
  {
    icon: Users,
    title: "Insurance Consultant",
    description: "Comprehensive insurance solutions tailored to protect your business assets.",
    badge: null
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title">SERVICE WE PROVIDE</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Our Services Built <span className="text-primary">Specifically</span> For Your Business
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative bg-card p-8 rounded-2xl border border-border card-hover group"
            >
              {service.badge && (
                <span className="service-badge">{service.badge}</span>
              )}
              <div className="icon-box group-hover:rotate-6">
                <service.icon className="w-10 h-10 text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
              >
                Read More
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
