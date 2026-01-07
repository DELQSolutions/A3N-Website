export const COMPANY = {
  name: "A3N IT Consulting",
  tagline: "Innovate | Implement | Improve",
  description: "Leading provider of comprehensive SAP consulting services, specializing in digital transformation and enterprise solutions.",
  
  contact: {
    email: "contact@a3n.co.uk",
    phone: "+44 7586 955136",
    address: {
      street: "Foundry Mews",
      city: "West London",
      state: "",
      zip: "TW3 2AQ",
      full: "Foundry Mews, TW3 2AQ West London"
    }
  },
  
  social: {
    linkedin: "https://linkedin.com/company/a3nitconsulting",
    twitter: "https://twitter.com/a3nitconsulting",
    facebook: "https://facebook.com/a3nitconsulting"
  },
  
  hours: "Monday - Friday: 9:00 AM - 6:00 PM",
  
  about: {
    title: "Reinvent your business model with A3N It Consulting",
    description: "In today's digital age, businesses are automating processes to enhance customer satisfaction, make real-time decisions, reduce costs, and manage risks. A3N It Consulting, a trusted partner, delivers measurable outcomes through industry-specific solutions and cutting-edge technologies like IoT, Robotics, Machine Learning, and SAP Business One. We help modernize processes and swiftly solve challenges, ensuring our clients navigate their digital transformation with confidence and agility.",
    
    vision: {
      title: "Our Vision",
      description: "A3N It Consulting's vision is to empower businesses with intelligent, customized digital solutions that drive efficiency and growth. From ERP systems to mobile apps and web design, we deliver solutions precisely aligned with our clients' unique needs, ensuring their long-term success."
    },
    
    mission: {
      title: "Our Mission",
      description: "A3N It Consulting empowers businesses with technology-driven solutions tailored to industry needs. Specializing in IoT, Robotics, Machine Learning, and SAP Business One, we streamline operations and enhance decision-making, enabling our clients to thrive in the digital era with confidence and agility."
    },
    
    ceo: {
      name: "Pushpak Jha",
      title: "CEO",
      experience: "25+ years",
      quote: "After spending more than two decades in SAP Ecosystem, an important aspect I understood that faster adaptability to change and dare to innovate is the key to become a successful enterprise!! That one key requirement, became the seed for the inception of A3N It Consulting",
      description: "Founded with a vision to provide SMEs with tailored IT solutions, A3N It Consulting is led by a team of industry experts with exceptional technical expertise and experience."
    }
  },
  
  process: [
    {
      step: 1,
      title: "Innovate",
      description: "We drive progress by fostering a culture of creativity and forward-thinking. Our goal is to develop cutting-edge solutions that anticipate and address future challenges."
    },
    {
      step: 2,
      title: "Implement",
      description: "We execute our innovative ideas with precision and efficiency, ensuring that our solutions are delivered on time and to the highest standards."
    },
    {
      step: 3,
      title: "Improve",
      description: "We are committed to continuous enhancement, constantly seeking feedback and refining our processes to achieve superior outcomes and exceed customer expectations."
    }
  ],
  
  sapServices: [
    {
      title: "SAP Functional Implementation",
      description: "SAP Functional Implementation involves configuring SAP modules to align with business processes, including data migration, testing, and user training. SAP Technical Implementation focuses on system setup, custom development, integration, security, and performance optimization.",
      link: "/services/sap-implementation"
    },
    {
      title: "SAP ABAP Development",
      description: "SAP ABAP Development involves coding custom programs, reports, and interfaces using the ABAP language to extend SAP functionalities. It includes debugging, performance optimization, and integration with other SAP modules and systems.",
      link: "/services/sap-abap"
    },
    {
      title: "SAP S/4HANA Solutions",
      description: "SAP S/4HANA Solutions offer real-time enterprise resource planning (ERP) with in-memory computing, enhancing business processes with faster data processing and advanced analytics. It supports digital transformation with integrated modules for finance, supply chain, and more.",
      link: "/services/sap-s4hana"
    },
    {
      title: "SAP Flex Model",
      description: "The SAP Flex Model provides a flexible deployment approach, allowing businesses to choose between on-premise, cloud, or hybrid environments for their SAP solutions. It enables scalable, customized implementations tailored to specific business needs.",
      link: "/services/sap-flex"
    }
  ]
} as const;
