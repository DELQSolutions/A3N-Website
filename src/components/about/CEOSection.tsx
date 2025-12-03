"use client";

import { Quote, User2 } from "lucide-react";
import { COMPANY } from "@/lib/constants/company";

export function CEOSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Icon Avatar instead of CEO photo */}
            <div className="relative mb-6 flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center shadow-lg mb-2 border-4 border-primary/10">
                <User2 className="w-16 h-16 text-primary" />
              </div>
              <div className="bg-gradient-to-r from-primary via-accent to-primary px-5 py-2 rounded-full shadow text-white text-xs font-medium -mt-5 z-10">
                <span className="font-bold text-lg mr-1">{COMPANY.about.ceo.experience}</span>
                <span>Experience</span>
              </div>
            </div>

            <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-1 mb-4">
              {COMPANY.about.ceo.title}
              <br />
              <span className="text-primary">{COMPANY.about.ceo.name}</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {COMPANY.about.ceo.description}
            </p>

            {/* Quote */}
            <div className="relative bg-card border-l-4 border-primary/80 p-8 rounded-xl shadow-xl max-w-2xl mx-auto">
              <Quote className="absolute -top-6 -left-6 w-10 h-10 text-primary/30" />
              <p className="text-foreground italic leading-relaxed relative z-10 text-lg">
                "{COMPANY.about.ceo.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-bold">{COMPANY.about.ceo.name}</p>
                <p className="text-sm text-muted-foreground">{COMPANY.about.ceo.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
