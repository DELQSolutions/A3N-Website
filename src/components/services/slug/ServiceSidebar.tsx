"use client";

import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { SERVICES } from "@/lib/constants/services";
import { Button } from "@/components/ui/button";

interface ServiceSidebarProps {
  currentSlug: string;
}

export function ServiceSidebar({ currentSlug }: ServiceSidebarProps) {
  // Group services by category
  const sapServices = SERVICES.filter((s) => s.category === "sap");
  const solutionServices = SERVICES.filter((s) => s.category === "solutions");

  return (
    <aside className="space-y-6">
      {/* Services List */}
      <div className="bg-card border-2 border-border rounded-xl overflow-hidden">
        <div className="bg-primary text-white px-6 py-4">
          <h3 className="text-lg font-bold">Our Services</h3>
        </div>
        <nav className="p-2">
          {/* SAP Services */}
          <div className="mb-4">
            <p className="px-4 py-2 text-xs font-bold text-muted-foreground uppercase">
              SAP Solutions
            </p>
            {sapServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`block px-4 py-3 rounded-lg transition-all ${
                  currentSlug === service.slug
                    ? "bg-primary text-white font-semibold"
                    : "hover:bg-primary/10 text-foreground"
                }`}
              >
                → {service.title}
              </Link>
            ))}
          </div>

          {/* IT Solutions */}
          <div>
            <p className="px-4 py-2 text-xs font-bold text-muted-foreground uppercase">
              IT Solutions
            </p>
            {solutionServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`block px-4 py-3 rounded-lg transition-all ${
                  currentSlug === service.slug
                    ? "bg-primary text-white font-semibold"
                    : "hover:bg-primary/10 text-foreground"
                }`}
              >
                → {service.title}
              </Link>
            ))}
          </div>
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
            <p className="text-2xl font-black">+91 8086874344</p>
          </div>
        </div>
        <Button variant="secondary" className="w-full font-bold" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </aside>
  );
}
