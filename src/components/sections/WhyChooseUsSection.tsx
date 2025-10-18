"use client";

import { Trophy, Target, Lightbulb, Shield } from "lucide-react";

const features = [
  {
    icon: Trophy,
    number: "01",
    title: "Qualified Consultants",
    description: "Our team consists of seasoned experts with deep industry knowledge and proven track records."
  },
  {
    icon: Target,
    number: "02",
    title: "Best Results",
    description: "We deliver measurable outcomes that exceed expectations and drive business growth."
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Flexible Packages",
    description: "Customizable solutions designed to fit your specific needs and budget constraints."
  },
  {
    icon: Shield,
    number: "04",
    title: "24/7 Support",
    description: "Round-the-clock assistance ensuring your business operations run smoothly."
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-dark via-slate-900 to-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <span className="section-title text-primary">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              We Are <span className="text-primary">Always</span> Comitted to the Results
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 15 years of experience in digital transformation and SAP consulting, we've helped hundreds of businesses achieve their goals through innovative technology solutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center group">
              <div className="relative mb-6">
                <div className="text-8xl font-black text-primary/20 absolute -top-4 left-1/2 transform -translate-x-1/2">
                  {feature.number}
                </div>
                <div className="icon-box relative z-10">
                  <feature.icon className="w-10 h-10 text-dark" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-white/10">
          {[
            { number: "230+", label: "Happy Customers" },
            { number: "789+", label: "Projects Completed" },
            { number: "890+", label: "Satisfied Clients" },
            { number: "15+", label: "Awards Won" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center counter">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
