"use client";

import { ParticleBackground } from "@/components/effects/ParticleBackground";

export function ServicesHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-slate-900 to-dark">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Geometric Shapes */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight text-white">
            <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Comprehensive SAP solutions and IT services tailored to your business needs
          </p>
          
          {/* Service Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
            {[
              { value: "12+", label: "Services" },
              { value: "500+", label: "Projects" },
              { value: "98%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl md:text-4xl font-black text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
