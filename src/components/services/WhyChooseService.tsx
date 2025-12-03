"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "What makes A3N different?",
    answer:
      "We blend over 15 years of experience with the latest development tools to deliver innovative, market-ready solutions tailored to your business.",
  },
  {
    question: "How do you ensure quality?",
    answer:
      "Our rigorous quality assurance processes, combined with experienced professionals and industry best practices, ensure excellence in every project.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve various industries including Manufacturing, Automotive, Healthcare, Asset Tracking, and more with customized solutions.",
  },
];

export function WhyChooseService() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Why choose us"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
          </div>

          {/* Right: Accordion */}
          <div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">
              Our Promise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-3 mb-8">
              Why <span className="text-primary">A3N?</span>
            </h2>

            <Accordion type="single" collapsible defaultValue="item-0">
              {questions.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
