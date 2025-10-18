"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  description: string;
}

export function ServiceHero({ title, description }: ServiceHeroProps) {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 105, 148, 0.9), rgba(0, 105, 148, 0.85)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            {title}
          </h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/90">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
