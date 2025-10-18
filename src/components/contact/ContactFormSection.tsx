"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants/company";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Info with Image */}
            <div className="space-y-8">
              {/* Image */}
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                  alt="Contact us"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-primary">Contact</span> Info
                </h2>
                <p className="text-muted-foreground mb-8">
                  We are happy to hear from you! Feel free to reach out through
                  any of the following channels.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Address</h4>
                      <p className="text-muted-foreground text-sm">
                        {COMPANY.contact.address.street}
                        <br />
                        {COMPANY.contact.address.city},{" "}
                        {COMPANY.contact.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <a
                        href={`mailto:${COMPANY.contact.email}`}
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {COMPANY.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <a
                        href={`tel:${COMPANY.contact.phone}`}
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {COMPANY.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-card border-2 border-border rounded-2xl p-8">
              <div className="mb-6">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">
                  Ready to get started?
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  Get in touch with <span className="text-primary">us</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name*
                    </label>
                    <Input
                      placeholder="Enter your First Name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name*
                    </label>
                    <Input
                      placeholder="Enter your Last Name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email address*
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone number
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company Name*
                    </label>
                    <Input
                      placeholder="Enter your Company Name"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Country/Region*
                    </label>
                    <Input
                      placeholder="Enter your Country / Region"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Message*
                  </label>
                  <Textarea
                    placeholder="Describe about your project"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <p className="text-sm text-muted-foreground">
                  We are committed to protecting your privacy. We will never
                  collect information about you without your explicit consent.
                </p>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-bold text-lg"
                >
                  Send message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
