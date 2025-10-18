"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-accent text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Let's discuss how we can help you achieve your business goals with
            our expert solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="font-bold text-lg"
              asChild
            >
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg"
              asChild
            >
              <Link href="#contact-form">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Meeting
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
