"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, FileText, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/constants/services";
import { Button } from "@/components/ui/button";

interface ServiceSidebarProps {
  currentSlug: string;
}

export function ServiceSidebar({ currentSlug }: ServiceSidebarProps) {
  // Group services by category
  const sapServices = SERVICES.filter((s) => s.category === "sap");
  const solutionServices = SERVICES.filter((s) => s.category === "solutions");
  const consultingServices = SERVICES.filter((s) => s.category === "consulting");

  // Accordion expanded state; all collapsed by default
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(section)) {
        next.delete(section);
      } else {
        next.add(section);
      }
      return next;
    });
  };

  const ServiceGroup = ({
    title,
    services,
    sectionKey,
  }: {
    title: string;
    services: typeof SERVICES;
    sectionKey: string;
  }) => {
    const isExpanded = expandedSections.has(sectionKey);
    return (
      <div className="mb-2">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full flex items-center justify-between px-4 py-2 text-xs font-bold text-muted-foreground uppercase hover:text-primary transition-colors"
        >
          <span>{title}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
        {isExpanded && (
          <div className="space-y-1 mt-1">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`block px-4 py-2 text-sm rounded-lg transition-all ${
                  currentSlug === service.slug
                    ? "bg-primary text-white font-semibold"
                    : "hover:bg-primary/10 text-foreground"
                }`}
              >
                {service.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="space-y-6">
      {/* Services List with Accordion */}
      <div className="bg-card border-2 border-border rounded-xl overflow-hidden">
        <div className="bg-primary text-white px-6 py-4">
          <h3 className="text-lg font-bold">Our Services</h3>
        </div>
        <nav className="p-2 max-h-[600px] overflow-y-auto">
          <ServiceGroup
            title="SAP Solutions"
            services={sapServices}
            sectionKey="sap"
          />
          <ServiceGroup
            title="AI & Software Solutions"
            services={solutionServices}
            sectionKey="solutions"
          />
          <ServiceGroup
            title="Consulting Services"
            services={consultingServices}
            sectionKey="consulting"
          />
        </nav>
      </div>

      {/* Download Brochure */}
      <div className="bg-card border-2 border-border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="font-bold">Service Brochure</h4>
            <p className="text-sm text-muted-foreground">Download PDF</p>
          </div>
        </div>
        <Button variant="outline" className="w-full" asChild>
          <a href="#" download>
            Download
          </a>
        </Button>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-br from-primary to-accent text-white rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium">Have a Question?</p>
            <p className="text-2xl font-black">+44 7586 955136</p>
          </div>
        </div>
        <Button variant="secondary" className="w-full font-bold" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </aside>
  );
}
