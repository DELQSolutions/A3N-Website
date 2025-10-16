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
  {
    id: '1',
    title: 'SAP S/4HANA',
    slug: 'sap-s4hana',
    description: 'Next-generation ERP suite designed for digital business, providing real-time insights and intelligent automation.',
    icon: 'Building',
    category: 'sap',
    features: [
      'Real-time analytics and reporting',
      'Simplified data model',
      'Cloud-ready architecture',
      'Advanced business processes',
      'Intelligent technologies integration'
    ],
    benefits: [
      'Reduced IT costs',
      'Improved business agility',
      'Enhanced user experience',
      'Real-time decision making'
    ]
  },
  {
    id: '2',
    title: 'SAP Ariba',
    slug: 'sap-ariba',
    description: 'Cloud-based procurement and supply chain management solution connecting buyers and suppliers globally.',
    icon: 'Cart',
    category: 'sap',
    features: [
      'Procurement management',
      'Supplier collaboration',
      'Contract management',
      'Sourcing solutions',
      'Supply chain visibility'
    ]
  },
  {
    id: '3',
    title: 'SAP SuccessFactors',
    slug: 'sap-successfactors',
    description: 'Comprehensive cloud-based human capital management suite for workforce planning and talent management.',
    icon: 'Users',
    category: 'sap',
    features: [
      'Core HR & Payroll',
      'Talent Management',
      'Learning Management',
      'Workforce Analytics',
      'Employee Experience Management'
    ]
  },
  {
    id: '4',
    title: 'SAP Concur',
    slug: 'sap-concur',
    description: 'Integrated travel, expense, and invoice management solution for complete spend visibility.',
    icon: 'Airplane',
    category: 'sap',
    features: [
      'Travel booking & management',
      'Expense reporting',
      'Invoice management',
      'Compliance & audit',
      'Mobile accessibility'
    ]
  },
  {
    id: '5',
    title: 'SAP Fieldglass',
    slug: 'sap-fieldglass',
    description: 'Vendor management system for managing external workforce and services procurement.',
    icon: 'Clipboard',
    category: 'sap',
    features: [
      'External workforce management',
      'Services procurement',
      'Contingent workforce analytics',
      'Compliance management',
      'Supplier collaboration'
    ]
  },
  {
    id: '6',
    title: 'Custom ERP Solutions',
    slug: 'custom-erp',
    description: 'Every business is unique, and your ERP solution should be too. SAP Custom ERP empowers organizations to tailor their Enterprise Resource Planning system to meet specific business needs, driving efficiency, agility, and growth.',
    icon: 'Cog',
    category: 'sap',
    features: [
      'Personalized Solutions: Tailor your ERP to align perfectly with your business processes, industry requirements, and strategic goals',
      'Scalable and Flexible: Adapt and scale your ERP solution as your business grows, ensuring it continues to meet your evolving needs',
      'Seamless Integration: Connect with existing systems and third-party applications effortlessly, creating a unified ecosystem',
      'Future-Ready: Leverage SAP\'s robust platform to stay ahead with the latest innovations in AI, machine learning, IoT, and more',
      'Enhanced Decision-Making: Gain deeper insights with customized reporting and analytics'
    ],
    benefits: [
      'Reduced IT costs',
      'Improved business agility',
      'Enhanced user experience',
      'Real-time decision making'
    ]
  },
  {
    id: '7',
    title: 'SAP BTP Integration',
    slug: 'integrations',
    description: 'SAP Business Technology Platform integration services for seamless system connectivity.',
    icon: 'Link',
    category: 'sap',
    features: [
      'API management',
      'Integration flows',
      'Cloud platform services',
      'Extension development',
      'Data migration'
    ]
  },
  {
    id: '8',
    title: 'Automation Services',
    slug: 'automation',
    description: 'Intelligent automation solutions to streamline business processes and increase efficiency.',
    icon: 'Lightning',
    category: 'solutions',
    features: [
      'Robotic Process Automation (RPA)',
      'Workflow automation',
      'Business process management',
      'AI-powered automation',
      'Integration automation'
    ]
  },
  {
    id: '9',
    title: 'Data Analytics',
    slug: 'data-analytics',
    description: 'Advanced analytics and business intelligence solutions for data-driven decision making.',
    icon: 'Chart',
    category: 'solutions',
    features: [
      'Business intelligence dashboards',
      'Predictive analytics',
      'Data warehousing',
      'Real-time reporting',
      'Data visualization'
    ]
  },
  {
    id: '10',
    title: 'Artificial Intelligence',
    slug: 'ai',
    description: 'AI and machine learning solutions to enhance business operations and customer experiences.',
    icon: 'Brain',
    category: 'solutions',
    features: [
      'Machine learning models',
      'Natural language processing',
      'Computer vision',
      'Predictive maintenance',
      'Intelligent automation'
    ]
  },
  {
    id: '11',
    title: 'Application Development',
    slug: 'app-development',
    description: 'Custom enterprise application development services tailored to your business needs.',
    icon: 'Code',
    category: 'solutions',
    features: [
      'Web application development',
      'Mobile app development',
      'Cloud-native applications',
      'API development',
      'Legacy modernization'
    ]
  },
  {
    id: '12',
    title: 'SAP Consulting Services',
    slug: 'consulting',
    description: 'Expert SAP consulting to guide your digital transformation journey from strategy to implementation.',
    icon: 'Briefcase',
    category: 'consulting',
    features: [
      'SAP strategy & roadmap',
      'Implementation services',
      'System optimization',
      'Change management',
      'Training & support'
    ]
  }
] as const;

export const getServiceBySlug = (slug: string): Service | undefined => {
  return SERVICES.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return SERVICES.filter(service => service.category === category);
};
