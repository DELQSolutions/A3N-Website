"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const showcaseCards = [
  {
    number: "01",
    title: "Facility Intelligence",
    description: "Smart sensors and automated controls that enhance operational efficiency, visibility, and security.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80",
    badge: "Industry 4.0",
  },
  {
    number: "02",
    title: "Fleet & Route Optimization",
    description: "AI-driven logistics tracking to reduce downtime, cut costs, and improve delivery reliability.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&q=80",
    badge: "SAP + AI",
  },
  {
    number: "03",
    title: "Workforce & HR Transformation",
    description: "Future-ready HR processes powered by SAP SuccessFactors, analytics, and employee experience design.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    badge: "SuccessFactors",
  },
];

export function SolutionHighlightsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCard = showcaseCards[currentIndex];

  const changeSlide = (direction: number) => {
    setCurrentIndex((prev) => (prev + direction + showcaseCards.length) % showcaseCards.length);
  };

  const sideCards = [
    showcaseCards[(currentIndex + 1) % showcaseCards.length],
    showcaseCards[(currentIndex + 2) % showcaseCards.length],
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f2f5f9] text-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <span className="section-title">A3N CORE SOLUTIONS</span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4 leading-tight">
            Revolutionizing Infrastructure Through <br className="hidden lg:block" />
            Intelligent Innovation
          </h2>
        </div>

        <div className="grid lg:grid-cols-[250px_minmax(0,1fr)_250px] gap-4 lg:gap-6 items-stretch">
          <div className="hidden lg:flex flex-col justify-center gap-4">
            <button
              type="button"
              onClick={() => changeSlide(-1)}
              className="rounded-[26px] bg-slate-200/70 p-3 shadow-sm text-left transition-transform hover:scale-[1.01]"
              aria-label="Show previous solution"
            >
              <div
                className="relative h-[360px] rounded-[20px] bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(10,20,40,0.05), rgba(10,20,40,0.65)), url(${sideCards[0].image})`,
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-sky-100">{sideCards[0].badge}</div>
                  <h3 className="text-lg font-bold text-white mt-2">{sideCards[0].title}</h3>
                  <p className="text-xs text-slate-200 mt-2 leading-relaxed">{sideCards[0].description}</p>
                </div>
              </div>
            </button>
          </div>

          <div className="rounded-[34px] bg-gradient-to-br from-[#02152f] via-[#05234a] to-[#061b40] px-5 py-5 md:px-7 md:py-7 shadow-[0_20px_60px_rgba(1,15,35,0.4)]">
            <div className="flex items-start gap-3 mb-5">
              <span className="text-4xl md:text-5xl font-black text-primary">{currentCard.number}</span>
              <div className="h-14 w-px bg-white/20" />
              <div>
                <h3 className="text-2xl md:text-4xl font-black text-white">{currentCard.title}</h3>
                <p className="mt-2 text-sm md:text-base text-slate-200 leading-relaxed max-w-2xl">{currentCard.description}</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(4,10,28,0.2), rgba(4,10,28,0.45)), url(${currentCard.image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/10" />
              <div className="relative z-10 min-h-[300px] md:min-h-[420px] p-5 md:p-6 flex items-end">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-sm">
                  <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-sky-100 mb-2">{currentCard.badge}</div>
                  <p className="text-sm text-slate-200 leading-relaxed max-w-sm">
                    A3N combines SAP expertise, AI acceleration, and delivery support to turn complex business challenges into measurable growth.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => changeSlide(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-lg hover:scale-105 transition-transform"
                aria-label="Previous showcase"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => changeSlide(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-lg hover:scale-105 transition-transform"
                aria-label="Next showcase"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="hidden lg:flex flex-col justify-center gap-4">
            <button
              type="button"
              onClick={() => changeSlide(1)}
              className="rounded-[26px] bg-slate-200/70 p-3 shadow-sm text-left transition-transform hover:scale-[1.01]"
              aria-label="Show next solution"
            >
              <div
                className="relative h-[360px] rounded-[20px] bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(10,20,40,0.05), rgba(10,20,40,0.65)), url(${sideCards[1].image})`,
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-sky-100">{sideCards[1].badge}</div>
                  <h3 className="text-lg font-bold text-white mt-2">{sideCards[1].title}</h3>
                  <p className="text-xs text-slate-200 mt-2 leading-relaxed">{sideCards[1].description}</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105">
            Explore our services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
