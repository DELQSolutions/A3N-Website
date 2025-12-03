"use client";

import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { COMPANY } from "@/lib/constants/company";

export function MissionVision() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Direction</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-3 mb-4">
            Mission & <span className="text-primary">Vision</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-card p-8 hover:border-primary/50 transition-all hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{COMPANY.about.mission.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {COMPANY.about.mission.description}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-accent/20 bg-card p-8 hover:border-accent/50 transition-all hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{COMPANY.about.vision.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {COMPANY.about.vision.description}
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt="Our team working together"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
