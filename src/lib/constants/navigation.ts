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
      }
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
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Manufacturing Solutions', href: '/solutions/manufacturing-solutions' },
      { label: 'Healthcare Solutions', href: '/solutions/healthcare-solutions' },
      { label: 'Retail Solutions', href: '/solutions/retail-solutions' },
      { label: 'Financial Services Solutions', href: '/solutions/financial-services-solutions' },
      { label: 'Supply Chain Solutions', href: '/solutions/supply-chain-solutions' },
      { label: 'HR & Workforce Solutions', href: '/solutions/hr-workforce-solutions' }
    ]
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
