"use client";

import { Award, Users, Zap, Shield } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Expertise",
    description: "Grounded principles of integrity, engineering excellence, and precision in manufacturing and design.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Leveraging cutting-edge technology and creative problem-solving to deliver solutions that stand out.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We prioritize collaboration with our clients, working as trusted partners at every stage of the development process.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Sustainability",
    description: "Committed to environmental responsibility and building a greener, more sustainable future for all.",
    color: "from-green-500 to-emerald-500",
  },
];

export function CompanyValues() {
  return (
    <section className="py-16 md:py-24 bg-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 grid-pattern" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">From Innovation</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-3">
            Our Core <span className="text-primary">Values</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
