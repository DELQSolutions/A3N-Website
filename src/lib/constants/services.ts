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
    description: 'SAP Ariba is the world\'s leading cloud-based procurement solution, transforming how businesses manage their procurement processes. It offers a comprehensive platform that connects buyers and suppliers, enabling efficient and transparent transactions. By leveraging SAP Ariba, organizations can streamline their procurement operations, reduce costs, and improve supplier relationships.',
    icon: 'Cart',
    category: 'sap',
    features: [
      'Comprehensive Procurement Management: Manage the entire procurement lifecycle, from sourcing and orders to invoices and payments, all on one integrated platform',
      'Global Supplier Network: Connect with millions of suppliers worldwide, simplifying discovery, qualification, and collaboration',
      'Enhanced Collaboration: Improve communication and foster stronger relationships with suppliers through shared documents and real-time insights',
      'Spend Visibility: Gain clear, actionable insights into your organization\'s spending to identify savings opportunities and ensure compliance',
      'Scalability: Whether you\'re a small business or a large enterprise, SAP Ariba scales to meet your evolving procurement needs'
    ],
    benefits: [
      'Reduced procurement costs',
      'Improved supplier relationships',
      'Enhanced spend visibility',
      'Streamlined procurement processes'
    ]
  },
  {
    id: '3',
    title: 'SAP SuccessFactors',
    slug: 'sap-successfactors',
    description: 'SAP SuccessFactors offers a comprehensive suite of human capital management (HCM) solutions designed to optimize your workforce and drive business success. From talent acquisition to performance management, learning, and development, SuccessFactors provides the tools you need to attract, engage, and retain top talent.',
    icon: 'Users',
    category: 'sap',
    features: [
      'Talent Management: Streamline your talent acquisition, onboarding, and performance management processes to identify and nurture high-potential employees',
      'Employee Experience: Enhance employee engagement and satisfaction with personalized experiences, continuous feedback, and career development opportunities',
      'Data-Driven Decisions: Leverage real-time analytics and insights to make informed decisions about your workforce, optimize resource allocation, and improve overall performance',
      'Global Compliance: Ensure compliance with global and local regulations, manage workforce data securely, and mitigate risks',
      'Seamless Integration: Integrate SuccessFactors with your existing IT landscape, including ERP systems, to create a unified and efficient HR ecosystem'
    ],
    benefits: [
      'Improved employee retention',
      'Enhanced workforce productivity',
      'Better talent acquisition',
      'Streamlined HR processes'
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
