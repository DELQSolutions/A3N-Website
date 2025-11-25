"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Market Analysis",
    description: "In-depth market research and competitive analysis to position your business for success.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    badge: "Popular",
  },
  {
    number: "02",
    title: "Accounting Consultant",
    description: "Expert financial consulting to optimize your accounting processes and compliance.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    badge: null,
  },
  {
    number: "03",
    title: "Insurance Consultant",
    description: "Comprehensive insurance solutions tailored to protect your business assets.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    badge: null,
  },
  {
    number: "04",
    title: "Resource Augmentation",
    description: "Scale your team with skilled professionals to accelerate project delivery and fill expertise gaps.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    badge: "New",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title">SERVICE WE PROVIDE</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Our Services Built <span className="text-primary">Specifically</span> For Your
            Business
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="card-hover group">
              {/* Image Container with Overlay Effect */}
              <div className="relative h-64 rounded-t-2xl overflow-hidden">
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
                  <div className="text-7xl font-black text-primary opacity-50 mb-2">
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
              <div className="bg-card p-6 rounded-b-2xl border border-t-0 border-border">
                <p className="text-gray leading-relaxed">{service.description}</p>
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
