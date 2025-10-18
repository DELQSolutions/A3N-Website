import { Metadata } from "next";
import { COMPANY } from "@/lib/constants/company";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { GoogleMap } from "@/components/contact/GoogleMap";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: `Contact Us - ${COMPANY.name}`,
  description:
    "Get in touch with us. We are here to answer your questions and help transform your business.",
  openGraph: {
    title: `Contact Us - ${COMPANY.name}`,
    description:
      "Get in touch with us. We are here to answer your questions and help transform your business.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactInfoCards />
      <div id="contact-form">
        <ContactFormSection />
      </div>
      <GoogleMap />
      <ContactCTA />
      <TestimonialsSection />
    </div>
  );
}
