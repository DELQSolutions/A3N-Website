"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";

export function ConsultationForm() {
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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <div className="bg-card border-2 border-border rounded-2xl p-8">
              <div className="mb-6">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">
                  Let's Talk
                </span>
                <h2 className="text-3xl md:text-4xl font-black mt-2 mb-2">
                  Free <span className="text-primary">Consultation</span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
                <Textarea
                  placeholder="Write Your Message Here"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
                <Button type="submit" size="lg" className="w-full font-bold">
                  Send Message Now
                </Button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Why Choose Our Services?
                </h3>
                <ul className="space-y-4">
                  {[
                    "15+ years of industry experience",
                    "Expert certified professionals",
                    "24/7 dedicated support",
                    "Proven track record of success",
                    "Customized solutions for your business",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="h-6 w-6 text-primary mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action Box */}
              <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Call Us Anytime</p>
                    <p className="text-3xl font-black">+91 8086874344</p>
                  </div>
                </div>
                <p className="text-white/90 mb-6">
                  Our experts are available 24/7 to answer your questions and
                  provide guidance.
                </p>
                <Button variant="secondary" size="lg" className="w-full font-bold">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
