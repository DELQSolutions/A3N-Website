export interface Solution {
    id: string;
    slug: string;
    title: string;
    category: "manufacturing" | "healthcare" | "retail" | "finance" | "all";
    description: string;
    icon: string;
    features: string[];
    benefits: string[];
    technologies: string[];
    image: string;
  }
  
  export const SOLUTIONS: Solution[] = [
    {
      id: "1",
      slug: "manufacturing-solutions",
      title: "Manufacturing Solutions",
      category: "manufacturing",
      description:
        "Comprehensive digital solutions for modern manufacturing operations, from production planning to quality control.",
      icon: "Factory",
      features: [
        "Production Planning & Scheduling: Optimize manufacturing workflows with intelligent scheduling",
        "Quality Management: Real-time quality control and compliance tracking",
        "Supply Chain Integration: Seamless integration with suppliers and distributors",
        "Asset Management: Track and maintain manufacturing equipment",
        "IoT Integration: Connect machines for real-time monitoring",
      ],
      benefits: [
        "Reduce production downtime by 30%",
        "Improve quality metrics",
        "Lower operational costs",
        "Enhance supply chain visibility",
      ],
      technologies: ["SAP S/4HANA", "SAP Manufacturing Execution", "IoT Platforms", "AI/ML"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    },
    {
      id: "2",
      slug: "healthcare-solutions",
      title: "Healthcare Solutions",
      category: "healthcare",
      description:
        "Transform healthcare delivery with integrated digital solutions for patient care, operations, and compliance.",
      icon: "Heart",
      features: [
        "Electronic Health Records: Centralized patient data management",
        "Appointment Management: Streamlined scheduling and patient flow",
        "Pharmacy Integration: Complete medication management system",
        "Lab Integration: Real-time lab results and diagnostic tracking",
        "Billing & Insurance: Automated billing and claims processing",
      ],
      benefits: [
        "Improve patient satisfaction",
        "Reduce administrative burden",
        "Ensure regulatory compliance",
        "Enhance care coordination",
      ],
      technologies: ["SAP for Healthcare", "HL7 Integration", "FHIR Standards", "Cloud Infrastructure"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    },
    {
      id: "3",
      slug: "retail-solutions",
      title: "Retail Solutions",
      category: "retail",
      description:
        "Omnichannel retail solutions that connect online and offline experiences for modern consumers.",
      icon: "ShoppingCart",
      features: [
        "Point of Sale Systems: Modern POS with inventory integration",
        "E-commerce Platform: Seamless online shopping experience",
        "Inventory Management: Real-time stock tracking across channels",
        "Customer Loyalty Programs: Build lasting customer relationships",
        "Analytics & Reporting: Data-driven insights for business growth",
      ],
      benefits: [
        "Increase sales conversion",
        "Reduce inventory costs",
        "Improve customer experience",
        "Enable data-driven decisions",
      ],
      technologies: ["SAP Commerce Cloud", "SAP Customer Experience", "AI Recommendations", "Mobile Apps"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    },
    {
      id: "4",
      slug: "financial-services-solutions",
      title: "Financial Services Solutions",
      category: "finance",
      description:
        "Secure and compliant financial solutions for banking, insurance, and fintech companies.",
      icon: "TrendingUp",
      features: [
        "Core Banking Systems: Modern banking platform with real-time processing",
        "Risk Management: Comprehensive risk assessment and mitigation",
        "Compliance Automation: Automated regulatory compliance reporting",
        "Customer Portal: Self-service portal for customers",
        "Payment Processing: Secure multi-channel payment integration",
      ],
      benefits: [
        "Enhance security and compliance",
        "Reduce operational risks",
        "Improve customer service",
        "Accelerate digital transformation",
      ],
      technologies: ["SAP Banking", "Blockchain", "AI Fraud Detection", "Cloud Security"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    },
    {
      id: "5",
      slug: "supply-chain-solutions",
      title: "Supply Chain Solutions",
      category: "manufacturing",
      description:
        "End-to-end supply chain visibility and optimization for complex global operations.",
      icon: "Truck",
      features: [
        "Demand Planning: AI-powered demand forecasting",
        "Warehouse Management: Intelligent warehouse operations",
        "Transportation Management: Optimize logistics and delivery",
        "Supplier Collaboration: Real-time supplier integration",
        "Track & Trace: Complete shipment visibility",
      ],
      benefits: [
        "Reduce supply chain costs",
        "Improve delivery times",
        "Enhance visibility",
        "Increase agility",
      ],
      technologies: ["SAP Integrated Business Planning", "SAP Ariba", "IoT Tracking", "AI Optimization"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    },
    {
      id: "6",
      slug: "hr-workforce-solutions",
      title: "HR & Workforce Solutions",
      category: "finance",
      description:
        "Modern HR solutions for talent management, payroll, and employee engagement.",
      icon: "Users",
      features: [
        "Talent Acquisition: Streamlined recruitment and onboarding",
        "Performance Management: Continuous performance tracking",
        "Learning & Development: Employee training and development",
        "Payroll Processing: Automated payroll with compliance",
        "Employee Self-Service: Empower employees with self-service tools",
      ],
      benefits: [
        "Attract top talent",
        "Improve employee retention",
        "Ensure payroll accuracy",
        "Boost productivity",
      ],
      technologies: ["SAP SuccessFactors", "AI Recruitment", "Learning Management Systems", "Analytics"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    },
  ];
  
  export const SOLUTION_CATEGORIES = [
    { id: "all", label: "All Solutions" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "healthcare", label: "Healthcare" },
    { id: "retail", label: "Retail" },
    { id: "finance", label: "Financial Services" },
  ] as const;
  
  export function getSolutionBySlug(slug: string): Solution | undefined {
    return SOLUTIONS.find((solution) => solution.slug === slug);
  }
  