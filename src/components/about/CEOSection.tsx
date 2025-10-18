"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { COMPANY } from "@/lib/constants/company";

export function CEOSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: CEO Image */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt={COMPANY.about.ceo.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute bottom-8 left-8 bg-primary text-white px-6 py-4 rounded-xl shadow-xl">
                  <div className="text-3xl font-black mb-1">{COMPANY.about.ceo.experience}</div>
                  <div className="text-sm font-medium">Experience</div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Leadership</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                {COMPANY.about.ceo.title}
                <br />
                <span className="text-primary">{COMPANY.about.ceo.name}</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {COMPANY.about.ceo.description}
              </p>

              {/* Quote */}
              <div className="relative bg-card border-l-4 border-primary p-6 rounded-r-xl shadow-lg">
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary/20" />
                <p className="text-foreground italic leading-relaxed relative z-10">
                  "{COMPANY.about.ceo.quote}"
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-bold">{COMPANY.about.ceo.name}</p>
                  <p className="text-sm text-muted-foreground">{COMPANY.about.ceo.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
