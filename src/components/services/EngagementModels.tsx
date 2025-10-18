"use client";

import { Briefcase, Megaphone, Wrench } from "lucide-react";

const models = [
  {
    icon: Briefcase,
    title: "Time & Material",
    description: "Flexible pricing where you pay for actual time and resources used.",
    features: [
      "Pay for time and materials used",
      "Flexible project scope",
      "Transparent billing",
    ],
  },
  {
    icon: Megaphone,
    title: "Staff Augmentation",
    description: "Skilled professionals integrated into your team seamlessly.",
    features: [
      "Quickly access specialized talent",
      "Extend your in-house capabilities",
      "Direct team control",
    ],
  },
  {
    icon: Wrench,
    title: "Fixed Cost Projects",
    description: "Defined scope and budget for predictable project delivery.",
    features: [
      "Fixed budget and timeline",
      "Clearly defined project scope",
      "Predictable costs",
    ],
  },
];

export function EngagementModels() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">
            Engagement
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-3">
            Engagement <span className="text-primary">Models</span>
          </h2>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-2xl"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{model.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {model.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {model.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <svg
                          className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
