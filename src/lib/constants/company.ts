export const COMPANY = {
  name: "SuMoDigitech",
  tagline: "Innovate | Implement | Improve",
  description: "Leading provider of comprehensive SAP consulting services, specializing in digital transformation and enterprise solutions.",
  
  contact: {
    email: "contact@sumodigitech.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Tech Avenue",
      city: "Innovation City",
      state: "CA",
      zip: "94043",
      full: "123 Tech Avenue, Innovation City, CA 94043"
    }
  },
  
  social: {
    linkedin: "https://linkedin.com/company/sumodigitech",
    twitter: "https://twitter.com/sumodigitech",
    facebook: "https://facebook.com/sumodigitech"
  },
  
  hours: "Monday - Friday: 9:00 AM - 6:00 PM",
  
  about: {
    title: "Reinvent your business model with SuMoDigitech",
    description: "In today's digital age, businesses are automating processes to enhance customer satisfaction, make real-time decisions, reduce costs, and manage risks. SuMoDigitech, a trusted partner, delivers measurable outcomes through industry-specific solutions and cutting-edge technologies like IoT, Robotics, Machine Learning, and SAP Business One. We help modernize processes and swiftly solve challenges, ensuring our clients navigate their digital transformation with confidence and agility.",
    
    vision: {
      title: "Our Vision",
      description: "SuMoDigitech's vision is to empower businesses with intelligent, customized digital solutions that drive efficiency and growth. From ERP systems to mobile apps and web design, we deliver solutions precisely aligned with our clients' unique needs, ensuring their long-term success."
    },
    
    mission: {
      title: "Our Mission",
      description: "SuMoDigitech empowers businesses with technology-driven solutions tailored to industry needs. Specializing in IoT, Robotics, Machine Learning, and SAP Business One, we streamline operations and enhance decision-making, enabling our clients to thrive in the digital era with confidence and agility."
    },
    
    ceo: {
      name: "Pushpak Jha",
      title: "CEO",
      experience: "25+ years",
      quote: "After spending more than two decades in SAP Ecosystem, an important aspect I understood that faster adaptability to change and dare to innovate is the key to become a successful enterprise!! That one key requirement, became the seed for the inception of SuMoDigitech",
      description: "Founded with a vision to provide SMEs with tailored IT solutions, SuMoDigitech is led by a team of industry experts with exceptional technical expertise and experience."
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
