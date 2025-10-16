import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#231f0f] text-[#f8f8f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-xs sm:text-sm text-[#f8f8f5]/70 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs sm:text-sm text-[#f8f8f5]/70 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-[#f8f8f5]/70 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm text-[#f8f8f5]/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/industries"
                  className="text-xs sm:text-sm text-[#f8f8f5]/70 hover:text-primary transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-xs sm:text-sm text-[#f8f8f5]/70 hover:text-primary transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-xs sm:text-sm text-[#f8f8f5]/70 hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#f8f8f5]/70">
              <li>{COMPANY.contact.address.street}</li>
              <li>{COMPANY.contact.address.city}, {COMPANY.contact.address.zip}</li>
              <li>Email: {COMPANY.contact.email}</li>
              <li>Phone: {COMPANY.contact.phone}</li>
            </ul>
          </div>
          <div className="flex items-center justify-start md:justify-end gap-4">
            <Link
              href={COMPANY.social.linkedin}
              className="text-[#f8f8f5]/70 hover:text-primary transition-colors"
            >
              <svg
                fill="currentColor"
                height="20"
                viewBox="0 0 256 256"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
              </svg>
            </Link>
            <Link
              href={COMPANY.social.twitter}
              className="text-[#f8f8f5]/70 hover:text-primary transition-colors"
            >
              <svg
                fill="currentColor"
                height="20"
                viewBox="0 0 256 256"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="border-t border-primary/20 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-[#f8f8f5]/50">
          <p>© {currentYear} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
