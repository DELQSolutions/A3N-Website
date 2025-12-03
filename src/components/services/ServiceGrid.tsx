"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/constants/services";
import { ServiceCard } from "@/components/sections/ServiceCard";

// Updated categories based on expanded SERVICES list
const categories = [
  { id: "all", label: "All Services" },
  { id: "sap", label: "SAP Solutions" },
  { id: "solutions", label: "AI, RPA & Software Solutions" },
  { id: "consulting", label: "Consulting & Resource Services" },
];

export function ServiceGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? SERVICES
      : SERVICES.filter((service) => service.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-3 mb-8">
            Our Best <span className="text-primary">Services</span>
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white text-foreground hover:bg-primary/10 border border-border"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
