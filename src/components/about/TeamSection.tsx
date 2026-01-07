"use client";

import { Linkedin, Mail, User2 } from "lucide-react";

const teamMembers = [
  {
    name: "Pushpak Jha",
    role: "CEO & Founder",
    linkedin: "#",
  },
  {
    name: "Sarah Mitchell",
    role: "CTO",
    linkedin: "#",
  },
  {
    name: "Michael Chen",
    role: "Head of Engineering",
    linkedin: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "SAP Practice Lead",
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
              className="group relative bg-card rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-2xl p-8 flex flex-col items-center"
            >
              {/* Icon Avatar */}
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shadow-inner border-2 border-primary/10 group-hover:scale-105 transition-all">
                  <User2 className="w-10 h-10 text-primary" />
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mt-auto">
                <a
                  href={member.linkedin}
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href={`mailto:${member.name.toLowerCase().replace(/ /g, ".")}@a3n.co.uk`}
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
