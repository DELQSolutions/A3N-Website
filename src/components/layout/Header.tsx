"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { COMPANY } from "@/lib/constants/company";
import { NAVIGATION, NavItem } from "@/lib/constants/navigation";
import { Button } from "@/components/ui/button";

// Define mega menu configurations for items with children
const megaMenuConfig: Record<
  string,
  {
    sections: {
      title: string;
      items: { label: string; href: string; description?: string }[];
    }[];
    description: string;
    image?: string;
  }
> = {
  '/about': {
    sections: [
      {
        title: 'Company',
        items: [
          { label: 'About Us', href: '/about', description: 'Who we are & what we do' },
        ]
      },
      {
        title: 'Resources',
        items: [
          { label: 'Insights', href: '/insights', description: 'Latest news & tech insights' },
        ]
      },
      {
        title: 'Careers',
        items: [
          { label: 'Join Us', href: '/careers', description: 'Join our team' },
        ]
      }
    ],
    description: 'Learn more about our mission, values, and the opportunities to grow with us.',
    image: '/images/solutions-hero.png',
  },
  '/services/ai-solutions': {
    sections: [
      {
        title: 'Next-Gen AI',
        items: [
          { label: 'Generative AI', href: '/services/generative-ai', description: 'Advanced generative AI models' },
          { label: 'Agentic AI', href: '/services/agentic-ai', description: 'Autonomous AI agents' },
          { label: 'AI Analytics', href: '/services/ai-analytics', description: 'Predictive analytics' },
        ]
      },
      {
        title: 'Core Intelligence',
        items: [
          { label: 'Machine Learning', href: '/services/machine-learning', description: 'ML model development' },
          { label: 'Deep Learning', href: '/services/deep-learning', description: 'Neural network solutions' },
          { label: 'Computer Vision', href: '/services/computer-vision', description: 'Image & video AI' },
        ]
      },
      {
        title: 'Applied AI & Ops',
        items: [
          { label: 'NLP Solutions', href: '/services/nlp-solutions', description: 'Natural language processing' },
          { label: 'MLOps', href: '/services/mlops', description: 'ML operations & deployment' },
        ]
      }
    ],
    description: 'Cutting-edge AI and Machine Learning solutions to transform your business operations.',
    image: '/images/ai-solutions-hero.png',
  },
  '/services/software-service': {
    sections: [
      {
        title: 'RPA & Automation',
        items: [
          { label: 'RPA Solutions', href: '/services/rpa', description: 'Intelligent automation' },
          { label: 'Automation Consulting', href: '/services/automation-consulting', description: 'Expert automation guidance' },
          { label: 'Bot Development', href: '/services/bot-development', description: 'Custom bot creation' },
          { label: 'RPA Training', href: '/services/rpa-training', description: 'RPA training & support' },
        ]
      },
      {
        title: 'Development Services',
        items: [
          { label: 'E-Commerce Development', href: '/services/ecommerce-development', description: 'Online store solutions' },
          { label: 'Mobile App Development', href: '/services/mobile-app-development', description: 'iOS & Android apps' },
          { label: 'Web Development', href: '/services/web-development', description: 'Custom web applications' },
        ]
      },
      {
        title: 'Offshore Development',
        items: [
          { label: 'Offshore Development', href: '/services/offshore-development', description: 'ODC setup & management' },
          { label: 'Dedicated Resources', href: '/services/dedicated-resource', description: 'Hire expert developers' },
        ]
      }
    ],
    description: 'Comprehensive software development and automation services tailored to your needs.',
    image: '/images/software-hero.png',
  },
  '/services/sap-solutions': {
    sections: [
      {
        title: 'SAP Business One Suite',
        items: [
          { label: 'SAP Business One', href: '/services/sap-business-one', description: 'Complete ERP for SMBs' },
          { label: 'SAP B1 Express Edition', href: '/services/sap-b1-express-edition', description: 'Simplified ERP for startups' },
          { label: 'SAP Business One Cloud', href: '/services/sap-business-one-cloud', description: 'Cloud-native ERP solution' },
          { label: 'SAP B1 Cloud Hosting', href: '/services/sap-business-one-cloud-hosting', description: 'Enterprise hosting' },
          { label: 'SAP Business One HANA', href: '/services/sap-business-one-hana', description: 'In-memory ERP platform' },
          { label: 'SAP B1 Mobility', href: '/services/sap-business-one-mobility', description: 'Mobile ERP access' },
        ]
      },
      {
        title: 'Enterprise SAP',
        items: [
          { label: 'SAP S/4HANA', href: '/services/sap-s4hana', description: 'Next-gen intelligent ERP' },
          { label: 'SAP S/4 HANA Cloud', href: '/services/sap-s4-hana-cloud', description: 'Cloud ERP with AI' },
          { label: 'SAP SuccessFactors', href: '/services/sap-successfactors', description: 'Cloud HR management' },
          { label: 'SAP ARIBA', href: '/services/sap-ariba', description: 'Procurement solutions' },
          { label: 'SAP Fieldglass', href: '/services/sap-fieldglass', description: 'Vendor management' },
          { label: 'SAP Concur', href: '/services/sap-concur', description: 'Travel & expense' },
        ]
      },
      {
        title: 'Specialized SAP',
        items: [
          { label: 'SAP B1 Analytics', href: '/services/sap-business-one-analytics', description: 'Advanced analytics' },
          { label: 'HR & Talent Management', href: '/services/hr-talent-management', description: 'Complete HR solutions' },
          { label: 'SAP Add-ons', href: '/services/sap-add-ons', description: 'Certified extensions' },
          { label: 'SAP B1 Demo', href: '/services/sap-business-one-demo', description: 'Interactive demos' },
          { label: 'BTP Development', href: '/services/btp-application', description: 'Custom SAP apps' },
          { label: 'Custom ERP', href: '/services/custom-erp', description: 'Tailored ERP systems' },
        ]
      }
    ],
    description: "Comprehensive SAP solutions from Business One to S/4HANA, covering all your enterprise needs.",
    image: "/images/sap-solutions-hero.png",
  },
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = (key: string) => {
    setExpandedMenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const handleMouseEnter = (href: string) => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setActiveMegaMenu(href);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  const handleMegaMenuMouseEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
  };

  const handleMegaMenuMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 lg:h-24 items-center justify-between gap-4">
          {/* Logo with PNG */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="A3N IT Consulting Logo"
              width={60}
              height={60}
              className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {NAVIGATION.map((item) => {
              const hasMegaMenu = item.children && megaMenuConfig[item.href];

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => hasMegaMenu && handleMouseEnter(item.href)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-0.5 text-sm xl:text-base font-medium transition-colors hover:text-primary whitespace-nowrap ${activeMegaMenu === item.href ? 'text-primary' : ''
                      }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMegaMenu === item.href ? 'rotate-180' : ''
                        }`} />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="font-bold text-sm xl:text-base px-4 xl:px-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      {activeMegaMenu && megaMenuConfig[activeMegaMenu] && (
        <div
          className="absolute left-0 right-0 w-full bg-white border-t border-gray-100 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-12 gap-8">
              {/* Menu Sections */}
              <div className="col-span-9">
                <div className="grid grid-cols-3 gap-6">
                  {megaMenuConfig[activeMegaMenu].sections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-sm font-bold text-primary uppercase tracking-wide mb-4">
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setActiveMegaMenu(null)}
                              className="group block p-3 rounded-lg hover:bg-primary/5 transition-all"
                            >
                              <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {item.label}
                              </div>
                              {item.description && (
                                <div className="text-xs text-muted-foreground mt-1">
                                  {item.description}
                                </div>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right Column - Featured Content */}
              <div className="col-span-3">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 h-full">
                  <div className="relative h-32 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                    <Image
                      src={megaMenuConfig[activeMegaMenu].image || '/images/placeholder.jpg'}
                      alt="Service Preview"
                      fill
                      className="object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {megaMenuConfig[activeMegaMenu].description}
                  </p>
                  <Button asChild size="sm" className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden py-4 border-t border-primary/20 bg-white">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {NAVIGATION.map((item) => {
              const isExpanded = expandedMenus.has(item.href);
              return (
                <div key={item.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="block text-base font-medium hover:text-primary transition-colors flex-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => toggleMenu(item.href)}
                        className="p-1 hover:text-primary transition-colors"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${isExpanded ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.children && isExpanded && (
                    <div className="ml-4 mt-3 space-y-2">
                      {item.children.map((child) => {
                        const childKey = `${item.href}-${child.href}`;
                        const childExpanded = expandedMenus.has(childKey);
                        return (
                          <div key={child.href}>
                            <div className="flex items-center justify-between">
                              <Link
                                href={child.href}
                                className="block text-sm py-2 px-3 rounded-lg bg-gray-50 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors flex-1"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                              {child.children && (
                                <button
                                  onClick={() => toggleMenu(childKey)}
                                  className="p-1 hover:text-primary transition-colors"
                                >
                                  <ChevronDown
                                    className={`h-4 w-4 transition-transform ${childExpanded ? "rotate-180" : ""
                                      }`}
                                  />
                                </button>
                              )}
                            </div>

                            {child.children && childExpanded && (
                              <div className="ml-4 mt-2 space-y-1">
                                {child.children.map((grandchild) => (
                                  <Link
                                    key={grandchild.href}
                                    href={grandchild.href}
                                    className="block text-sm py-2 px-3 rounded-lg text-gray-600 hover:bg-primary/10 hover:text-primary transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    • {grandchild.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            <Button asChild className="w-full font-bold mt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
