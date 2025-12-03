"use client";

import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { BadgeCheck, Lightbulb, Users } from "lucide-react";

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
          
          {/* Service Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
            <div className="flex flex-col items-center text-white">
              <div className="mb-3 bg-primary/20 p-4 rounded-full">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <div className="text-lg font-bold mb-1">Innovative Solutions</div>
              <div className="text-sm text-white/70">Cutting-edge SAP technology designed for your needs.</div>
            </div>
            <div className="flex flex-col items-center text-white">
              <div className="mb-3 bg-primary/20 p-4 rounded-full">
                <BadgeCheck className="w-8 h-8 text-primary" />
              </div>
              <div className="text-lg font-bold mb-1">Certified Expertise</div>
              <div className="text-sm text-white/70">Certified consultants and proven implementation success.</div>
            </div>
            <div className="flex flex-col items-center text-white">
              <div className="mb-3 bg-primary/20 p-4 rounded-full">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-lg font-bold mb-1">Client Partnership</div>
              <div className="text-sm text-white/70">Collaborating closely to achieve your business goals.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
