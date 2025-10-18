"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ConsultationCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-16 md:py-24 bg-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 grid-pattern" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
              alt="Consultation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Form */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">
              Let's Talk
            </span>
            <h2 className="text-3xl md:text-4xl font-black mt-3 mb-6">
              Free <span className="text-primary">Consultation</span>
            </h2>
            <p className="text-white/70 mb-8">
              Our experienced technical team will get with customer to better
              understand requirements and provide a solution tailored for the
              most optimal outcome possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <Input
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Textarea
                placeholder="Write Your Message Here"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold"
              >
                Send Message Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
