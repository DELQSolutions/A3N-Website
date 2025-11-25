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
      // SAP Solutions Group
      { 
        label: 'SAP Solutions',
        href: '/services#sap',
        children: [
          { label: 'SAP S/4HANA', href: '/services/sap-s4hana' },
          { label: 'SAP Ariba', href: '/services/sap-ariba' },
          { label: 'SAP SuccessFactors', href: '/services/sap-successfactors' },
          { label: 'SAP Concur', href: '/services/sap-concur' },
          { label: 'SAP Fieldglass', href: '/services/sap-fieldglass' }
        ]
      },
      // IT Solutions Group
      { 
        label: 'IT Solutions',
        href: '/services#it',
        children: [
          { label: 'Custom ERP Development', href: '/services/custom-erp' },
          { label: 'AI & Machine Learning', href: '/services/ai' },
          { label: 'Application Development', href: '/services/app-development' },
          { label: 'System Integration', href: '/services/integrations' },
          { label: 'Process Automation', href: '/services/automation' },
          { label: 'Data Analytics', href: '/services/data-analytics' }
        ]
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Manufacturing Solutions', href: '/solutions/manufacturing-solutions' },
      { label: 'Healthcare Solutions', href: '/solutions/healthcare-solutions' },
      { label: 'Retail Solutions', href: '/solutions/retail-solutions' },
      { label: 'Financial Services', href: '/solutions/financial-services-solutions' },
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
