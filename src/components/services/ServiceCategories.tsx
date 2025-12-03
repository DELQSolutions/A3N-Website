"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { SERVICES, getServicesByCategory } from "@/lib/constants/services";

const categories = [
  {
    id: "sap",
    title: "SAP Services",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "sap" as const,
  },
  {
    id: "solutions",
    title: "AI & Automation Solutions",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    category: "solutions" as const,
  },
  {
    id: "consulting",
    title: "Consulting & Development Services",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    category: "consulting" as const,
  },
];

export function ServiceCategories() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">
            Services Overview
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-3">
            Services <span className="text-primary">Overview</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {categories.map((category, index) => {
            const services = getServicesByCategory(category.category);

            return (
              <div
                key={category.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Accordion */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Accordion type="single" collapsible defaultValue="item-0">
                    {services.slice(0, 6).map((service, subIndex) => (
                      <AccordionItem key={service.id} value={`item-${subIndex}`}>
                        <AccordionTrigger className="text-left">
                          {service.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-4">
                            {service.description}
                          </p>
                          <Button
                            variant="ghost"
                            className="group p-0 h-auto hover:bg-transparent"
                            asChild
                          >
                            <Link href={`/services/${service.slug}`}>
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                          </Button>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  {/* View All Button if more than 6 services */}
                  {services.length > 6 && (
                    <div className="mt-6">
                      <Button variant="outline" asChild className="w-full">
                        <Link href={`/services?category=${category.category}`}>
                          View All {category.title} ({services.length})
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
