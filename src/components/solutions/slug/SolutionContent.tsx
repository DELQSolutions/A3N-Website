"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Solution } from "@/lib/constants/solutions";

interface SolutionContentProps {
  solution: Solution;
}

export function SolutionContent({ solution }: SolutionContentProps) {
  return (
    <div className="space-y-12">
      {/* Main Image */}
      <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 70vw"
          priority
        />
      </div>

      {/* Description */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {solution.title}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {solution.description}
        </p>
      </div>

      {/* Key Features */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-8">
          Key Features
        </h3>

        <ul className="space-y-6">
          {solution.features.map((feature, index) => {
            const [title, ...descParts] = feature.split(":");
            const description = descParts.join(":").trim();

            return (
              <li
                key={index}
                className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center group-hover:rotate-[360deg] group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2">{title}</h4>
                  {description && (
                    <p className="text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Benefits */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Business Benefits
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {solution.benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-5 bg-card rounded-xl border-2 border-border hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
