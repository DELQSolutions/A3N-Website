"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SOLUTIONS, SOLUTION_CATEGORIES } from "@/lib/constants/solutions";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SolutionsGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSolutions =
    activeCategory === "all"
      ? SOLUTIONS
      : SOLUTIONS.filter((solution) => solution.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SOLUTION_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-muted text-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((solution) => (
            <div
              key={solution.id}
              className="group relative bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-primary/50 transition-all hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                  {solution.category.charAt(0).toUpperCase() + solution.category.slice(1)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {solution.description}
                </p>

                <Button variant="ghost" className="group/btn p-0 h-auto" asChild>
                  <Link href={`/solutions/${solution.slug}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
