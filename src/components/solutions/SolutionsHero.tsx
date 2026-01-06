"use client";

import { ParticleBackground } from "@/components/effects/ParticleBackground";

export function SolutionsHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-slate-900 to-dark">
      <ParticleBackground />

      <div className="absolute top-10 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight text-white">
            Industry <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Tailored digital transformation solutions for your industry
          </p>
        </div>
      </div>
    </section>
  );
}
