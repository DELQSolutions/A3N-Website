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
      label: 'Services',
      href: '/services',
      children: [
        { label: 'SAP S/4HANA', href: '/services/sap-s4hana' },
        { label: 'SAP Ariba', href: '/services/sap-ariba' },
        { label: 'SAP SuccessFactors', href: '/services/sap-successfactors' },
        { label: 'SAP Concur', href: '/services/sap-concur' },
        { label: 'SAP Fieldglass', href: '/services/sap-fieldglass' },
        { label: 'Custom ERP', href: '/services/custom-erp' },
        { label: 'Integrations', href: '/services/integrations' },
        { label: 'Automation', href: '/services/automation' },
        { label: 'Data Analytics', href: '/services/data-analytics' }
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      children: [
        { label: 'Artificial Intelligence', href: '/solutions/ai' },
        { label: 'Application Development', href: '/solutions/app-development' }
      ]
    },
    {
      label: 'Gallery',
      href: '/gallery'
    },
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Contact',
      href: '/contact'
    }
  ] as const;
  