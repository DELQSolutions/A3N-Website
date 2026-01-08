export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAVIGATION: NavItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Insights', href: '/insights' },
      { label: 'Careers', href: '/careers' }
    ]
  },
  {
    label: 'AI & ML Solutions',
    href: '/services/ai-solutions',
    children: [
      { label: 'Generative AI', href: '/services/generative-ai' },
      { label: 'Agentic AI', href: '/services/agentic-ai' },
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'Computer Vision', href: '/services/computer-vision' },
      { label: 'NLP Solutions', href: '/services/nlp-solutions' },
      { label: 'Deep Learning', href: '/services/deep-learning' },
      { label: 'MLOps', href: '/services/mlops' },
      { label: 'AI Analytics', href: '/services/ai-analytics' }
    ]
  },
  {
    label: 'Software Solutions',
    href: '/services/software-service',
    children: [
      { label: 'RPA Solutions', href: '/services/rpa' },
      { label: 'Automation Consulting', href: '/services/automation-consulting' },
      { label: 'Bot Development and Implementation', href: '/services/bot-development' },
      { label: 'RPA Training and Support', href: '/services/rpa-training' },
      { label: 'Hire Dedicated Resource', href: '/services/dedicated-resource' },
      { label: 'Offshore Development Centre', href: '/services/offshore-development' },
      { label: 'E-Commerce Development', href: '/services/ecommerce-development' },
      { label: 'Mobile App Development', href: '/services/mobile-app-development' },
      { label: 'Web Development', href: '/services/web-development' }
    ]
  },
  {
    label: 'SAP Solutions',
    href: '/services/sap-solutions',
    children: [
      { label: 'SAP Business One', href: '/services/sap-business-one' },
      { label: 'SAP B1 Express Edition', href: '/services/sap-b1-express-edition' },
      { label: 'SAP Business One Cloud', href: '/services/sap-business-one-cloud' },
      { label: 'SAP Business One Cloud Hosting', href: '/services/sap-business-one-cloud-hosting' },
      { label: 'SAP Business One HANA', href: '/services/sap-business-one-hana' },
      { label: 'SAP S/4 HANA Cloud', href: '/services/sap-s4-hana-cloud' },
      { label: 'SAP Business One Mobility Solutions', href: '/services/sap-business-one-mobility' },
      { label: 'SAP Business One Analytics & Reporting', href: '/services/sap-business-one-analytics' },
      { label: 'HR and Talent Management', href: '/services/hr-talent-management' },
      { label: 'SAP Add-ons', href: '/services/sap-add-ons' },
      { label: 'SAP Business One Demo', href: '/services/sap-business-one-demo' },
      { label: 'SAP S/4HANA', href: '/services/sap-s4hana' },
      { label: 'SAP SuccessFactors', href: '/services/sap-successfactors' },
      { label: 'SAP ARIBA', href: '/services/sap-ariba' },
      { label: 'SAP Fieldglass', href: '/services/sap-fieldglass' },
      { label: 'SAP Concur', href: '/services/sap-concur' },
      { label: 'Custom ERP Solutions', href: '/services/custom-erp' },
      { label: 'BTP Application Development', href: '/services/btp-application' }
    ]
  },
  {
    label: 'Resource Augmentation',
    href: '/resource-augmentation'
  }
] as const;
