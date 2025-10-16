import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { COMPANY } from "@/lib/constants/company";
import { TrendingUp, Users, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* WHO WE ARE Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              WHO WE ARE
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We are a leading IT consulting firm dedicated to providing cutting-edge solutions tailored to meet the unique needs of our clients. With a team of experienced professionals, we deliver exceptional results across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US Section */}
      <section className="bg-muted/30 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              WHY CHOOSE US
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We are committed to providing innovative and effective IT solutions that drive business growth and success. Our client-centric approach ensures that we understand your unique challenges and deliver tailored solutions that meet your specific needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-card p-6 sm:p-8 rounded-xl border border-primary/20 text-center hover:border-primary/50 transition-all">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-4 rounded-full">
                  <TrendingUp className="h-9 w-9 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Expertise</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Our team comprises seasoned experts with deep industry knowledge and technical skills.
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 rounded-xl border border-primary/20 text-center hover:border-primary/50 transition-all">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-4 rounded-full">
                  <Users className="h-9 w-9 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                Client-Centric Approach
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We prioritize our clients' needs, ensuring personalized solutions and exceptional service.
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 rounded-xl border border-primary/20 text-center hover:border-primary/50 transition-all sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-4 rounded-full">
                  <Award className="h-9 w-9 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                Proven Track Record
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We have a history of delivering successful projects and exceeding client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLEAN CORE Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              CLEAN CORE
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We believe in maintaining a clean core in our solutions, ensuring scalability, maintainability, and long-term value for our clients. Our approach focuses on delivering robust and efficient systems that can adapt to evolving business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES Section */}
      <section className="bg-muted/30 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              SERVICES
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
              <h3 className="text-base sm:text-lg font-bold mb-2">
                SAP Consulting
              </h3>
              <p className="text-sm text-muted-foreground">
                Expert SAP implementation, optimization, and support services.
              </p>
            </div>
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
              <h3 className="text-base sm:text-lg font-bold mb-2">
                Cloud Solutions
              </h3>
              <p className="text-sm text-muted-foreground">
                Secure and scalable cloud solutions tailored to your business needs.
              </p>
            </div>
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
              <h3 className="text-base sm:text-lg font-bold mb-2">
                Cybersecurity
              </h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive cybersecurity services to protect your data and systems.
              </p>
            </div>
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
              <h3 className="text-base sm:text-lg font-bold mb-2">
                Custom Software Development
              </h3>
              <p className="text-sm text-muted-foreground">
                Custom software development to address your unique business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST TECH NEWS Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              LATEST TECH NEWS
            </h2>
          </div>
          <div className="bg-card/50 p-6 sm:p-8 rounded-xl border border-primary/20 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                The Future of Cloud Computing
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Explore the latest trends and innovations in cloud technology and how they are transforming businesses.
              </p>
              <Link href="#" className="font-bold text-primary hover:underline text-sm sm:text-base">
                Read More →
              </Link>
            </div>
            <div
              className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto md:min-h-[300px] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80")`,
              }}
              role="img"
              aria-label="Cloud computing technology illustration"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary/10 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Get the latest tech news, insights, and updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your Email"
                className="flex-grow"
              />
              <Button type="submit" className="font-bold whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
