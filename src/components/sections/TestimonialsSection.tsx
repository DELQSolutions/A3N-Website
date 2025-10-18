"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Anderson",
    role: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    content: "SuMoDigitech transformed our business operations with their expert SAP consulting. The results exceeded our expectations!"
  },
  {
    name: "Sarah Mitchell",
    role: "Operations Manager, GlobalTech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    content: "Professional, knowledgeable, and dedicated. They delivered our project on time and within budget. Highly recommended!"
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateLabs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    content: "The best IT consulting partner we've worked with. Their expertise in digital transformation is unmatched."
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title">WHAT CLIENT SAY</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Client <span className="text-primary">Testimonials</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-xl relative">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary opacity-20" />
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg text-gray italic mb-6 leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </p>
                <div>
                  <h4 className="text-xl font-bold mb-1">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-primary font-medium">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === activeIndex
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
