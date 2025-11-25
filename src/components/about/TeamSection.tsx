"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Pushpak Jha",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    linkedin: "#",
  },
  {
    name: "Sarah Mitchell",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    linkedin: "#",
  },
  {
    name: "Michael Chen",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    linkedin: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "SAP Practice Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    linkedin: "#",
  },
];

export function TeamSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-3">
            Our Committed <span className="text-primary">Team</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links - Show on Hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@a3nitconsulting.com`}
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
