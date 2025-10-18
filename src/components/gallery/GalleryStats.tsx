"use client";

import { Award, Briefcase, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "500+",
    label: "Projects Completed",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    value: "200+",
    label: "Happy Clients",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Success Rate",
    color: "from-green-500 to-emerald-500",
  },
];

export function GalleryStats() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-primary">Achievements</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-2xl text-center"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Stats */}
                  <div className="text-4xl font-black text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
