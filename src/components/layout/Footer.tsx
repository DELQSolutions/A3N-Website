import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white" suppressHydrationWarning>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Company */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">
              {COMPANY.name}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Leading provider of comprehensive SAP consulting services,
              specializing in digital transformation and enterprise solutions.
            </p>
            <div className="flex gap-3">
              <Link
                href={COMPANY.social.linkedin}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-all"
                aria-label="LinkedIn"
              >
                <svg
                  fill="currentColor"
                  height="18"
                  viewBox="0 0 256 256"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                </svg>
              </Link>
              <Link
                href={COMPANY.social.twitter}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-all"
                aria-label="Twitter"
              >
                <svg
                  fill="currentColor"
                  height="18"
                  viewBox="0 0 256 256"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "AI & ML Solutions", href: "/services/ai-solutions" },
                { label: "Software Solutions", href: "/services/software-service" },
                { label: "SAP Solutions", href: "/services/sap-solutions" },
                { label: "Resource Augmentation", href: "/resource-augmentation" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Industries", href: "/industries" },
                { label: "Insights", href: "/insights" },
                { label: "Careers", href: "/careers" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY.contact.address.street}
                  <br />
                  {COMPANY.contact.address.city}, {COMPANY.contact.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {COMPANY.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:${COMPANY.contact.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {COMPANY.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50 text-center md:text-left">
              © {currentYear} {COMPANY.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
