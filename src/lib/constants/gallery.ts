export interface GalleryItem {
    id: string;
    title: string;
    category: "sap" | "it" | "consulting" | "all";
    description: string;
    image: string;
    tags: string[];
    client?: string;
    year?: string;
  }
  
  export const GALLERY_ITEMS: GalleryItem[] = [
    {
      id: "1",
      title: "SAP S/4HANA Implementation",
      category: "sap",
      description: "Enterprise-wide SAP S/4HANA implementation for a Fortune 500 manufacturing company",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["SAP S/4HANA", "Manufacturing", "Cloud"],
      client: "Manufacturing Corp",
      year: "2024",
    },
    {
      id: "2",
      title: "Cloud Migration Project",
      category: "it",
      description: "Complete cloud infrastructure migration to AWS with zero downtime",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      tags: ["AWS", "Cloud", "Migration"],
      client: "Tech Solutions Inc",
      year: "2024",
    },
    {
      id: "3",
      title: "Digital Transformation Strategy",
      category: "consulting",
      description: "Comprehensive digital transformation roadmap for retail enterprise",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      tags: ["Strategy", "Digital", "Retail"],
      client: "Retail Giant",
      year: "2023",
    },
    {
      id: "4",
      title: "SAP Ariba Procurement Solution",
      category: "sap",
      description: "Streamlined procurement processes with SAP Ariba implementation",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=80",
      tags: ["SAP Ariba", "Procurement", "Automation"],
      client: "Global Enterprises",
      year: "2023",
    },
    {
      id: "5",
      title: "Custom ERP Development",
      category: "it",
      description: "Tailored ERP solution for mid-sized manufacturing company",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["ERP", "Custom Development", "Integration"],
      client: "MidCo Manufacturing",
      year: "2024",
    },
    {
      id: "6",
      title: "SuccessFactors HR Transformation",
      category: "sap",
      description: "Complete HR digitization with SAP SuccessFactors",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      tags: ["SAP SuccessFactors", "HR", "Cloud"],
      client: "Enterprise Solutions",
      year: "2023",
    },
    {
      id: "7",
      title: "AI-Powered Analytics Dashboard",
      category: "it",
      description: "Real-time business intelligence dashboard with AI insights",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tags: ["AI", "Analytics", "Dashboard"],
      client: "Data Corp",
      year: "2024",
    },
    {
      id: "8",
      title: "Business Process Optimization",
      category: "consulting",
      description: "End-to-end business process reengineering for financial services",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      tags: ["Process", "Optimization", "Finance"],
      client: "FinTech Group",
      year: "2023",
    },
    {
      id: "9",
      title: "Mobile App Development",
      category: "it",
      description: "Cross-platform mobile application for customer engagement",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      tags: ["Mobile", "React Native", "UX/UI"],
      client: "Retail Chain",
      year: "2024",
    },
  ];
  
  export const GALLERY_CATEGORIES = [
    { id: "all", label: "All Projects" },
    { id: "sap", label: "SAP Solutions" },
    { id: "it", label: "IT Services" },
    { id: "consulting", label: "Consulting" },
  ] as const;
  