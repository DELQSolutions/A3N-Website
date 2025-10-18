"use client";

import { Search, FileText, Cog } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Challenges",
    description:
      "Complex requirements, evolving technologies, and tight timelines can stand in the way of successful IoT innovation.",
  },
  {
    icon: FileText,
    title: "Solutions",
    description:
      "We combine deep expertise, agile processes, and advanced tools to turn obstacles into seamless, scalable solutions.",
  },
  {
    icon: Cog,
    title: "Results",
    description:
      "Faster time-to-market, optimized operations, and innovative products that exceed expectations.",
  },
];

export function ServiceProcess() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-3">
            Solving What <span className="text-primary">Matters Most</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/50 transition-all hover:shadow-xl group"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
