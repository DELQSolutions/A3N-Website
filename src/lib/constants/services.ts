import { Icons } from "@/components/shared/Icons";

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: keyof typeof Icons;
  category: 'sap' | 'solutions' | 'consulting';
  features: string[];
  benefits?: string[];
}

export const SERVICES: Service[] = [
  // --- SAP Solutions ---
  {
    id: "1",
    title: "SAP S/4HANA",
    slug: "sap-s4hana",
    description: "Next-generation ERP suite designed for digital business, providing real-time insights and intelligent automation.",
    icon: "Building",
    category: "sap",
    features: [
      "Real-time analytics and reporting",
      "Simplified data model",
      "Cloud-ready architecture",
      "Advanced business processes",
      "Intelligent technologies integration"
    ],
    benefits: [
      "Reduced IT costs",
      "Improved business agility",
      "Enhanced user experience",
      "Real-time decision making"
    ],
  },
  {
    id: "2",
    title: "SAP SuccessFactors",
    slug: "sap-successfactors",
    description: "SAP SuccessFactors offers a full suite of HCM (Human Capital Management) solutions to optimize and manage your workforce.",
    icon: "Users",
    category: "sap",
    features: [
      "End-to-end talent management",
      "Employee experience and engagement",
      "Global HR, payroll, and compliance",
      "Real-time people analytics",
      "Integration with SAP & third-party systems",
    ],
    benefits: [
      "Improved employee retention",
      "Enhanced workforce productivity",
      "Streamlined HR processes",
      "Better talent acquisition"
    ],
  },
  {
    id: "3",
    title: "SAP ARIBA",
    slug: "sap-ariba",
    description:
      "Cloud-based procurement solution for streamlined buying, supplier collaboration, and transparent transactions.",
    icon: "Cart",
    category: "sap",
    features: [
      "End-to-end procurement management",
      "Supplier network & collaboration",
      "Spend management and reporting",
      "Contract lifecycle management",
      "Invoice and payment automation"
    ],
    benefits: [
      "Reduced procurement costs",
      "Improved supplier relationships",
      "Enhanced spend visibility",
      "Streamlined procurement processes"
    ]
  },
  {
    id: "4",
    title: "SAP Fieldglass",
    slug: "sap-fieldglass",
    description:
      "Vendor management system for external workforce and services procurement.",
    icon: "Clipboard",
    category: "sap",
    features: [
      "External workforce management",
      "Services procurement",
      "Contingent workforce analytics",
      "Compliance management",
      "Supplier collaboration"
    ],
  },
  {
    id: "5",
    title: "SAP Concur",
    slug: "sap-concur",
    description:
      "Integrated travel, expense, and invoice management solution for spend visibility and compliance.",
    icon: "Airplane",
    category: "sap",
    features: [
      "Travel management & booking",
      "Expense reporting",
      "Invoice management",
      "Audit & compliance tracking",
      "Mobile accessibility"
    ]
  },
  {
    id: "6",
    title: "Custom ERP Solutions",
    slug: "custom-erp",
    description: "Custom SAP ERP implementations and extensions tailored for your unique business processes.",
    icon: "Cog",
    category: "sap",
    features: [
      "Custom workflow development",
      "Integration with third-party software",
      "Personalized analytics dashboards",
      "Legacy system migration",
      "Industry-specific modules"
    ],
    benefits: [
      "Reduced IT costs",
      "Improved business agility",
      "Enhanced user experience",
      "Real-time decision making"
    ]
  },
  {
    id: "7",
    title: "BTP Application Development",
    slug: "btp-application",
    description: "Application development and extension using SAP Business Technology Platform (BTP).",
    icon: "AppWindow",
    category: "sap",
    features: [
      "Custom Fiori app development",
      "Business process automation",
      "Integration with SAP & non-SAP systems",
      "Data management",
      "Cloud & hybrid deployments"
    ]
  },
  {
    id: "8",
    title: "Integrations",
    slug: "sap-integrations",
    description: "SAP system integrations (On-premise & Cloud) for unified, automated business processes.",
    icon: "Link2",
    category: "sap",
    features: [
      "API management & middleware",
      "Real-time data synchronization",
      "Integration with legacy applications",
      "Workflow and automation",
      "Security-focused integrations"
    ]
  },
  {
    id: "9",
    title: "HR Process Automations",
    slug: "hr-automations",
    description: "Automation of HR processes using SAP and complementary platforms.",
    icon: "UserCog",
    category: "sap",
    features: [
      "Onboarding & offboarding automation",
      "Payroll & leave automation",
      "Employee records management",
      "HR analytics dashboards",
      "Document generation workflows"
    ]
  },
  {
    id: "10",
    title: "Analytics and Reporting",
    slug: "sap-analytics",
    description: "SAP analytics solutions for actionable business intelligence and reporting.",
    icon: "BarChart2",
    category: "sap",
    features: [
      "Real-time business dashboards",
      "Ad-hoc and scheduled reporting",
      "Analytics Cloud implementation",
      "Self-service data visualization",
      "Integration with SAP S/4HANA data"
    ]
  },
  {
    id: "11",
    title: "AI Product Development Services",
    slug: "ai-product-dev",
    description: "Building AI-powered products and features on SAP and BTP.",
    icon: "Brain",
    category: "sap",
    features: [
      "Custom AI solution development",
      "ML model deployment on BTP",
      "Predictive analytics integration",
      "Data engineering for AI",
      "IoT & AI hybrid use-cases"
    ]
  },
  {
    id: "12",
    title: "Corporate Training Solutions",
    slug: "corporate-training",
    description: "SAP-focused training for end-users and IT teams: adoption, best practices, and certifications.",
    icon: "GraduationCap",
    category: "sap",
    features: [
      "Remote and on-site training",
      "Custom learning materials and labs",
      "Workshops for SAP modules",
      "User adoption programs",
      "Certification exam prep"
    ]
  },
  // --- AI Solutions ---
  {
    id: "13",
    title: "Generative AI",
    slug: "generative-ai",
    description: "Solutions powered by generative AI for content creation, automation, and new business models.",
    icon: "Sparkles",
    category: "solutions",
    features: [
      "Document and content generation",
      "Text summarization and Q/A bots",
      "AI workflow automation",
      "Integration with SAP and legacy systems",
      "Prompt engineering"
    ]
  },
  {
    id: "14",
    title: "Agentic AI",
    slug: "agentic-ai",
    description: "Intelligent AI agents for business automation and process optimization.",
    icon: "Bot",
    category: "solutions",
    features: [
      "End-to-end task automation",
      "Conversational business agents",
      "Custom agent design",
      "Interoperability with APIs and ERPs",
      "Secure deployment and monitoring"
    ]
  },
  // --- RPA Services ---
  {
    id: "15",
    title: "Automation Consulting",
    slug: "automation-consulting",
    description: "Strategy and roadmap consulting for automation and digital transformation initiatives.",
    icon: "CheckSquare",
    category: "solutions",
    features: [
      "Process discovery and mapping",
      "ROI analysis and prioritization",
      "Vendor/tool selection",
      "Governance frameworks",
      "Change management advisory"
    ]
  },
  {
    id: "16",
    title: "BoT Development and Implementation",
    slug: "bot-development",
    description: "Design and deployment of intelligent bots and RPA solutions.",
    icon: "Zap",
    category: "solutions",
    features: [
      "Custom bot development",
      "Integration with enterprise apps",
      "Orchestration and monitoring",
      "Low-code/no-code solutions",
      "Continuous improvement"
    ]
  },
  {
    id: "17",
    title: "RPA Training and Support",
    slug: "rpa-training",
    description: "Training programs and support for RPA adoption and scaling.",
    icon: "BookOpen",
    category: "solutions",
    features: [
      "RPA tools training (UiPath, Automation Anywhere, etc.)",
      "Hands-on labs & use-case implementation",
      "Train-the-trainer programs",
      "Ongoing user support",
      "Automation Center of Excellence setup"
    ]
  },
  // --- Software Services ---
  {
    id: "18",
    title: "Hire Dedicated Resource",
    slug: "dedicated-resource",
    description: "Flexible hiring of dedicated software engineers for long- or short-term commitments.",
    icon: "UserPlus",
    category: "consulting",
    features: [
      "Vetted developer allocation",
      "Focus on SAP, web/mobile, and cloud tech",
      "Scalable contracts",
      "Domain expertise matching",
      "Integrated with client teams"
    ]
  },
  {
    id: "19",
    title: "Offshore Development Centre",
    slug: "offshore-development",
    description: "Setup and management of offshore development centers for cost-effective IT delivery.",
    icon: "Globe",
    category: "consulting",
    features: [
      "End-to-end ODC setup",
      "Recruitment and HR management",
      "Dedicated infrastructure",
      "IP protection and compliance",
      "Project-based or FTE engagement"
    ]
  },
  {
    id: "20",
    title: "E-Commerce Development",
    slug: "ecommerce-development",
    description: "Custom e-commerce platforms and integrations for B2B and B2C businesses.",
    icon: "ShoppingBag",
    category: "solutions",
    features: [
      "Headless and traditional e-commerce",
      "Payment gateway integration",
      "ERP & CRM connectivity",
      "Mobile app development",
      "Marketplace solutions"
    ]
  },
  {
    id: "21",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Design and development of cross-platform and native mobile apps.",
    icon: "Smartphone",
    category: "solutions",
    features: [
      "iOS, Android, & hybrid apps",
      "Enterprise mobility strategy",
      "App store deployment",
      "Integration with SAP & backend APIs",
      "User experience (UX/UI) design"
    ]
  },
  // --- Other Services by Previous List ---
  {
    id: "22",
    title: "SAP Consulting and Services",
    slug: "sap-consulting",
    description: "Comprehensive SAP consulting and support across implementation, optimization, and enhancement tracks.",
    icon: "Briefcase",
    category: "consulting",
    features: [
      "SAP strategy & roadmap",
      "Implementation services",
      "System optimization",
      "Change management",
      "Training & support"
    ]
  },
  // ---- Resource Augmentation (kept from original) ----
  {
    id: "23",
    title: "Resource Augmentation",
    slug: "resource-augmentation",
    description: "Scale your team with skilled professionals to accelerate project delivery and fill expertise gaps efficiently.",
    icon: "Users",
    category: "consulting",
    features: [
      "Quick Access to Skilled Talent: Get access to vetted professionals with specialized skills within days, not months.",
      "Flexible Engagement Models: Choose from hourly, part-time, or full-time engagement based on your project needs.",
      "Seamless Integration: Our professionals integrate directly into your existing teams and workflows.",
      "Cost-Effective Scaling: Reduce hiring costs and overhead while maintaining quality and productivity.",
      "Domain Expertise: Access experts across SAP, IoT, AI/ML, Cloud, and Enterprise Application Development.",
      "Reduced Time-to-Market: Accelerate project delivery with immediate access to skilled resources.",
    ],
    benefits: [
      "Reduce recruitment time by 70%",
      "Lower operational costs by up to 40%",
      "Access to global talent pool",
      "Flexible scaling up or down",
      "No long-term commitment required",
      "Focus on core business activities",
    ],
  }
] as const;

export const getServiceBySlug = (slug: string): Service | undefined => {
  return SERVICES.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return SERVICES.filter(service => service.category === category);
};
