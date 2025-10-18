"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AboutContent() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 group">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Team collaboration"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
          </div>

          {/* Right: Accordion Content */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-bold text-primary uppercase tracking-wider mb-3 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight">
              About <span className="text-primary">Us</span>
            </h2>

            <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who are we?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We are an engineering services company that transforms ideas into reality—from concept to prototype delivering market-ready solutions across industries such as Manufacturing, Automotive, Healthcare, Asset Tracking, and more.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We are an integrator of Artificial Intelligence and Machine Learning into embedded IoT devices.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What We Do?</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>SAP consulting and implementation services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Custom enterprise application development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Digital transformation and cloud solutions</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Our Expertise</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 15 years of experience in SAP ecosystem and enterprise solutions, we've successfully delivered 500+ projects across various industries, helping businesses achieve digital excellence through innovative technology solutions.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
