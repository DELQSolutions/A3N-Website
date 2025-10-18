"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ParticleBackground } from "@/components/effects/ParticleBackground";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
    title: "Empowering Businesses with Innovative IT Solutions",
    description: "We specialize in SAP consulting and a wide range of IT services to help your business thrive in the digital age.",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
    title: "Transform Your Enterprise with SAP Solutions",
    description: "Expert SAP implementation and consulting services tailored to your business needs.",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
    title: "Digital Transformation Made Simple",
    description: "Accelerate your digital journey with our comprehensive technology solutions.",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const changeSlide = (direction: number) => {
    setCurrentSlide((prev) => {
      const newIndex = prev + direction;
      if (newIndex >= slides.length) return 0;
      if (newIndex < 0) return slides.length - 1;
      return newIndex;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center carousel-container overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(15,23,42,0.8) 100%), url(${slide.image})`,
          }}
        />
      ))}

      {/* Navigation Arrows */}
      <div
        className="carousel-nav absolute left-4 top-1/2 -translate-y-1/2 bg-primary/20 backdrop-blur-md hover:bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer z-10 border border-primary/30"
        onClick={() => changeSlide(-1)}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div
        className="carousel-nav absolute right-4 top-1/2 -translate-y-1/2 bg-primary/20 backdrop-blur-md hover:bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer z-10 border border-primary/30"
        onClick={() => changeSlide(1)}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white text-left relative z-10">
        <div className="max-w-4xl animate-[fadeInUp_1s_ease-out]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
            {slides[currentSlide].title.split(' ').map((word, i) => (
              <span
                key={i}
                className={i % 3 === 0 ? "gradient-text" : ""}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link
              href="/services"
              className="group bg-primary text-white font-bold text-base px-8 py-4 rounded-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50 text-center"
            >
              Explore Our Services
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/about"
              className="glass-effect text-white font-bold text-base px-8 py-4 rounded-lg hover:bg-white/20 transition-all text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full cursor-pointer transition-all ${
              index === currentSlide ? "bg-primary w-12" : "bg-white/50 w-8"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
