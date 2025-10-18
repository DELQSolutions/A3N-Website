"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Transform Your Business with <span className="text-cyan-100">Smart Solutions</span>
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Subscribe to our newsletter and get the latest insights on SAP and digital transformation
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Your Email"
              className="flex-1 h-14 bg-white border-0 text-lg"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-dark text-white hover:bg-dark/90 h-14 px-8 font-bold text-lg whitespace-nowrap"
            >
              Get Started
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
