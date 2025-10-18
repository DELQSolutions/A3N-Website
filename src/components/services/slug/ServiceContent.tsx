"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Service } from "@/lib/constants/services";

interface ServiceContentProps {
  service: Service;
  imageUrl: string;
}

export function ServiceContent({ service, imageUrl }: ServiceContentProps) {
  // Parse features to extract title and description
  const parseFeature = (feature: string) => {
    const parts = feature.split(":");
    if (parts.length > 1) {
      return {
        title: parts[0].trim(),
        description: parts.slice(1).join(":").trim(),
      };
    }
    return {
      title: feature,
      description: "",
    };
  };

  return (
    <div className="space-y-12">
      {/* Main Image */}
      <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={imageUrl}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 70vw"
          priority
        />
      </div>

      {/* Service Description */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {service.title}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Key Features */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-8">
          Why Choose {service.title}?
        </h3>

        <ul className="space-y-6">
          {service.features.map((feature, index) => {
            const parsed = parseFeature(feature);

            return (
              <li
                key={index}
                className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center group-hover:rotate-[360deg] group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {parsed.description ? (
                    <>
                      <h4 className="text-lg font-semibold mb-2">
                        {parsed.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {parsed.description}
                      </p>
                    </>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">
                      {parsed.title}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Benefits Section - If Available */}
      {service.benefits && service.benefits.length > 0 && (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Key Benefits
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
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
      )}
    </div>
  );
}
