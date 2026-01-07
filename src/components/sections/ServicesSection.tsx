"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "AI & ML Solutions",
    description:
      "Harness the power of Artificial Intelligence and Machine Learning to automate processes, analyze data, and drive business innovation.",
    image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?w=600&q=80",
    badge: "Popular",
  },
  {
    number: "02",
    title: "Software Solutions",
    description:
      "End-to-end software solutions tailored to your business needs, including custom development, integration, and support for digital transformation.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    badge: null,
  },
  {
    number: "03",
    title: "SAP Solutions",
    description:
      "Comprehensive SAP consulting and implementation services to modernize your enterprise resource planning and optimize operations.",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&q=80",
    badge: null,
  },
  {
    number: "04",
    title: "Resource Augmentation",
    description:
      "Scale your IT team on-demand with skilled professionals to accelerate project delivery and bridge your expertise gaps.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    badge: "New",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title">
            AI &amp; ML Solutions | Software Development | SAP Solutions | Resource Augmentation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Our Services Built <span className="text-primary">Specifically</span> For Your
            Business
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="card-hover group flex flex-col h-full min-h-[460px] bg-card rounded-2xl overflow-hidden border border-border"
            >
              {/* Image Container with Overlay Effect */}
              <div className="relative h-60 md:h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

                {/* Number Badge and Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-6xl md:text-7xl font-black text-primary opacity-50 mb-2">
                    {service.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>

                {/* Optional Badge */}
                {service.badge && (
                  <span className="service-badge">{service.badge}</span>
                )}
              </div>

              {/* Content Card */}
              <div className="flex flex-col flex-1 justify-between p-6">
                <p className="text-gray leading-relaxed flex-1">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all mt-4"
                >
                  Read More
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
