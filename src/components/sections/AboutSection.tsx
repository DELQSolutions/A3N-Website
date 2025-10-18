"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Business Consultant Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-dark p-8 rounded-2xl shadow-xl">
              <div className="text-5xl font-black mb-2">15+</div>
              <div className="text-sm font-semibold">Years Experience</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="section-title">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              We Are Digital <span className="text-primary">Business Consultant</span>
            </h2>
            <p className="text-gray text-lg mb-6 leading-relaxed">
              We specialize in SAP consulting and comprehensive IT services to help businesses thrive in the digital age. Our expert team delivers measurable outcomes through innovative solutions.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Strategic Digital Transformation",
                "Expert SAP Consulting Services",
                "Custom Enterprise Solutions",
                "24/7 Technical Support"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="btn-primary">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
