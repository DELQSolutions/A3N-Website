"use client";

import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Market Research",
    description: "We conduct thorough market analysis to understand your business landscape and opportunities.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80"
  },
  {
    number: "02",
    title: "Make Plan",
    description: "Strategic planning with actionable roadmaps tailored to your business objectives.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
  },
  {
    number: "03",
    title: "Execute",
    description: "Professional implementation with precision, ensuring timely delivery and quality results.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
  }
];

export function WorkProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title">OUR WORKS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            We Follow Three Simple <span className="text-primary">Steps</span>
          </h2>
          <p className="text-gray text-lg leading-relaxed">
            Our streamlined process ensures efficient delivery and exceptional results for every project we undertake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="card-hover group">
              <div className="relative h-64 rounded-t-2xl overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-7xl font-black text-primary opacity-50 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                </div>
              </div>
              <div className="bg-card p-6 rounded-b-2xl border border-t-0 border-border">
                <p className="text-gray leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
