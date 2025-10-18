"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
    <section className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-end carousel-container overflow-hidden">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${slide.image})`,
          }}
        />
      ))}

      {/* Navigation Arrows */}
      <div
        className="carousel-nav absolute left-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-10"
        onClick={() => changeSlide(-1)}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div
        className="carousel-nav absolute right-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-10"
        onClick={() => changeSlide(1)}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-24 text-white text-left relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3 sm:mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Link
              href="/services"
              className="bg-primary text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary/90 transition-all text-center"
            >
              Explore Our Services
            </Link>
            <Link
              href="/about"
              className="bg-white/10 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/20 transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`carousel-indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
