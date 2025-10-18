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

const categories = [
  {
    id: "iot-engineering",
    title: "IoT Engineering Services",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    subcategories: [
      {
        title: "Hardware Design",
        description: "We offer comprehensive IoT and hardware design services, purpose-built for the evolving landscape of IoT and embedded systems.",
        link: "/services/hardware-design",
      },
      {
        title: "Firmware Design",
        description: "Custom firmware development for embedded systems and IoT devices.",
        link: "/services/firmware-design",
      },
      {
        title: "Prototyping",
        description: "Rapid prototyping and proof-of-concept development services.",
        link: "/services/prototyping",
      },
    ],
  },
  {
    id: "iot-customization",
    title: "IoT Customization Services",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    subcategories: [
      {
        title: "Artificial Intelligence",
        description: "By leveraging the latest AI strategies, we develop highly individual approaches that we both instill and practically implement.",
        link: "/services/ai",
      },
      {
        title: "Machine Learning",
        description: "Advanced ML solutions for predictive analytics and automation.",
        link: "/services/machine-learning",
      },
      {
        title: "IoT Dashboard",
        description: "Custom dashboard solutions for real-time IoT data visualization.",
        link: "/services/iot-dashboard",
      },
    ],
  },
  {
    id: "sap-services",
    title: "SAP Services",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    subcategories: [
      {
        title: "SAP S/4HANA",
        description: "Next-generation ERP suite designed for digital business.",
        link: "/services/sap-s4hana",
      },
      {
        title: "SAP Ariba",
        description: "Cloud-based procurement solutions for streamlined operations.",
        link: "/services/sap-ariba",
      },
      {
        title: "SAP SuccessFactors",
        description: "Comprehensive HCM solutions for workforce optimization.",
        link: "/services/sap-successfactors",
      },
    ],
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
          {categories.map((category, index) => (
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
                  {category.subcategories.map((sub, subIndex) => (
                    <AccordionItem key={subIndex} value={`item-${subIndex}`}>
                      <AccordionTrigger className="text-left">
                        {sub.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground mb-4">
                          {sub.description}
                        </p>
                        <Button
                          variant="ghost"
                          className="group p-0 h-auto hover:bg-transparent"
                          asChild
                        >
                          <Link href={sub.link}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                          </Link>
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
