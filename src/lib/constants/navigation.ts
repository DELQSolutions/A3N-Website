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
    href: '/about'
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'AI Solutions',
        href: '/services/ai-solutions',
        children: [
          { label: 'Generative AI', href: '/services/generative-ai' },
          { label: 'Agentic AI', href: '/services/agentic-ai' }
        ]
      },
      {
        label: 'RPA',
        href: '/services/rpa',
        children: [
          { label: 'Automation Consulting', href: '/services/automation-consulting' },
          { label: 'BoT Development and Implementation', href: '/services/bot-development' },
          { label: 'Training and Support', href: '/services/rpa-training' }
        ]
      },
      {
        label: 'Software Service',
        href: '/services/software-service',
        children: [
          { label: 'Hire Dedicated Resource', href: '/services/dedicated-resource' },
          { label: 'Offshore Development Centre', href: '/services/offshore-development' },
          { label: 'E-Commerce Development', href: '/services/ecommerce-development' },
          { label: 'Mobile App Development', href: '/services/mobile-app-development' }
        ]
      },
      {
        label: 'SAP Solutions',
        href: '/services/sap-solutions',
        children: [
          {
            label: 'SAP Implementation',
            href: '/services/sap-implementation',
            children: [
              { label: 'SAP S4/HANA', href: '/services/sap-s4hana' },
              { label: 'SAP SuccessFactors', href: '/services/sap-successfactors' },
              { label: 'SAP ARIBA', href: '/services/sap-ariba' },
              { label: 'SAP Fieldglass', href: '/services/sap-fieldglass' },
              { label: 'SAP Concur', href: '/services/sap-concur' }
            ]
          },
          {
            label: 'SAP Consulting and Services',
            href: '/services/sap-consulting',
            children: [
              { label: 'BTP Application Development', href: '/services/btp-application' },
              { label: 'Integrations', href: '/services/sap-integrations' },
              { label: 'HR Process Automations', href: '/services/hr-automations' },
              { label: 'Analytics and Reporting', href: '/services/sap-analytics' },
              { label: 'AI Product Development Services', href: '/services/ai-product-dev' },
              { label: 'Corporate Training Solutions', href: '/services/corporate-training' }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions'
  },
  {
    label: 'Portfolio',
    href: '/gallery'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
] as const;
