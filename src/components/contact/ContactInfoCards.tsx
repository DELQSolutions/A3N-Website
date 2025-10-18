"use client";

import { MapPin, Mail, Phone, Users } from "lucide-react";
import { COMPANY } from "@/lib/constants/company";

export function ContactInfoCards() {
  const contactCards = [
    {
      icon: MapPin,
      title: "Our Address",
      content: `${COMPANY.contact.address.street}, ${COMPANY.contact.address.city}, ${COMPANY.contact.address.zip}`,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Our Mailbox",
      content: COMPANY.contact.email,
      link: `mailto:${COMPANY.contact.email}`,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Phone,
      title: "Call us directly",
      content: COMPANY.contact.phone,
      link: `tel:${COMPANY.contact.phone}`,
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Users,
      title: "Join our team",
      content: "careers@sumodigitech.com",
      link: "mailto:careers@sumodigitech.com",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">
            How can we help you?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Contact <span className="text-primary">Us</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border-2 border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-2xl text-center"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  {card.link ? (
                    <a
                      href={card.link}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm break-words"
                    >
                      {card.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm break-words">
                      {card.content}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
