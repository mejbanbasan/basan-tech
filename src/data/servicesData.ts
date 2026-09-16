import { Service } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    tagline: 'Tailored enterprise platforms, internal workflow automation & bespoke business software.',
    shortDescription: 'We build bespoke business software, operational dashboards, ERP/CRM systems, and automated workflows designed specifically around your company’s unique operational processes.',
    fullDescription: 'Off-the-shelf software rarely fits a growing company perfectly. At BasanTech, we engineer custom desktop, web, and cloud-native software solutions built around your exact business requirements. From automating manual back-office tasks to architecting complex multi-role enterprise management systems, we deliver secure, scalable software you completely own.',
    iconName: 'Cpu',
    badge: 'Enterprise Grade',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: 'Custom Quote',
    typicalTimeline: '4 - 12 Weeks',
    deliverables: [
      'Custom Operational Management Systems & Dashboards',
      'Internal Business Tools & Workflow Automation Engines',
      'Role-Based Access Control (RBAC) & Audit Trails',
      'Secure Multi-Tenant Cloud Architecture',
      'Full Source Code & 100% Intellectual Property Transfer'
    ],
    features: [
      {
        title: 'Bespoke Architecture',
        description: 'Engineered from scratch to solve your specific operational bottlenecks with zero software bloat.'
      },
      {
        title: 'Seamless Integrations',
        description: 'Connect with payment gateways, CRMs, legacy databases, ERP systems, and cloud storage providers.'
      },
      {
        title: 'Enterprise Security',
        description: 'End-to-end encryption, strict role privileges, secure session tokens, and regular security audits.'
      }
    ],
    techStack: [
      { category: 'Architecture', items: ['Microservices', 'REST & GraphQL', 'Clean Architecture', 'Event-Driven'] },
      { category: 'Backend', items: ['Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'Redis'] },
      { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Electron'] }
    ],
    useCases: [
      'Internal inventory, order, and logistics tracking platforms',
      'Custom customer onboarding & verification workflows',
      'Automated invoicing and billing management systems',
      'Departmental collaboration portals with role security'
    ],
    faqs: [
      {
        question: 'Do we own 100% of the custom software code?',
        answer: 'Yes. Every line of code, database schema, and infrastructure configuration belongs solely to your company upon milestone completion.'
      },
      {
        question: 'How do you handle feature updates after launch?',
        answer: 'We provide modular, well-documented codebases with automated CI/CD pipelines, making ongoing feature expansions fast and friction-free.'
      }
    ]
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    tagline: 'High-performance, ultra-scalable web platforms & modern SaaS applications.',
    shortDescription: 'Modern responsive web applications, enterprise portals, marketing sites, and digital platforms built with cutting-edge frontends and cloud infrastructures.',
    fullDescription: 'BasanTech crafts lightning-fast, highly responsive web platforms that convert visitors into loyal customers. We combine modern design aesthetics with rock-solid full-stack code to ensure sub-second page loads, effortless responsiveness across all screens, and top-tier SEO rankings.',
    iconName: 'Globe',
    badge: 'Core Practice',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: 'Project Based',
    typicalTimeline: '2 - 6 Weeks',
    deliverables: [
      'Custom High-Converting Web Platforms & Portals',
      'Full Mobile & Tablet Responsive Architecture',
      'Lighthouse 95+ Core Web Vitals & Technical SEO',
      'Interactive Dynamic Components & Modern Micro-Animations',
      'Automated Continuous Deployment (CI/CD)'
    ],
    features: [
      {
        title: 'Ultra-Fast Page Load',
        description: 'Optimized asset bundling, edge delivery, and modern image compression for near-instant rendering.'
      },
      {
        title: 'Search Engine Optimized',
        description: 'Semantic HTML5, automated XML sitemaps, Open Graph metadata, and structured Schema.org JSON-LD.'
      },
      {
        title: 'Responsive & Fluid',
        description: 'Pixel-perfect UI design that looks stunning on every device from smartphones to 4K displays.'
      }
    ],
    techStack: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'] },
      { category: 'Hosting & CDN', items: ['Vercel', 'AWS', 'Cloudflare', 'GitHub Actions'] }
    ],
    useCases: [
      'Company websites and digital corporate showcases',
      'SaaS product frontends and customer dashboards',
      'Interactive client portals with secure authentication',
      'High-conversion landing pages for marketing campaigns'
    ],
    faqs: [
      {
        question: 'Will our website work seamlessly on mobile phones?',
        answer: 'Yes, we employ a mobile-first design philosophy and test across all major iOS and Android screen resolutions.'
      },
      {
        question: 'Can you migrate our existing site to a modern web framework?',
        answer: 'Absolutely. We handle seamless migrations with zero data loss and preserved SEO redirects.'
      }
    ]
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    tagline: 'Cross-platform iOS & Android mobile applications with native speed and fluid UX.',
    shortDescription: 'Intuitive, beautifully designed mobile apps for iOS and Android built with React Native and modern mobile stacks to maximize user retention and engagement.',
    fullDescription: 'Reach your customers wherever they are with sleek, dependable mobile applications. BasanTech engineers cross-platform mobile apps that feel genuinely native, offering 60fps animations, offline data caching, push notifications, and seamless device hardware integrations.',
    iconName: 'Smartphone',
    badge: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: 'Project Based',
    typicalTimeline: '4 - 10 Weeks',
    deliverables: [
      'iOS & Android App Store Ready Builds',
      'Intuitive Touch UI & Fluid Native Navigation',
      'Real-Time Push Notification Engine',
      'Offline Storage & Background Sync',
      'App Store & Google Play Publishing Assistance'
    ],
    features: [
      {
        title: 'Single Codebase Efficiency',
        description: 'Deploy simultaneously to both Apple App Store and Google Play, reducing cost and maintenance time.'
      },
      {
        title: 'Hardware Integrations',
        description: 'Biometric Face ID/Touch ID, camera scanning, GPS location, and Bluetooth device connectivity.'
      },
      {
        title: 'Reliable Offline Mode',
        description: 'Local caching ensures critical functionality remains accessible even with spotty connectivity.'
      }
    ],
    techStack: [
      { category: 'Mobile Framework', items: ['React Native', 'Expo', 'TypeScript'] },
      { category: 'Backend & Cloud', items: ['Node.js', 'Firebase', 'Supabase', 'REST/GraphQL'] }
    ],
    useCases: [
      'On-demand booking and service marketplace apps',
      'Customer loyalty and mobile e-commerce shopping',
      'Field service, logistics, and delivery tracking apps',
      'Internal company communications and employee tools'
    ],
    faqs: [
      {
        question: 'Do you help with App Store and Google Play publishing?',
        answer: 'Yes, we guide you through developer account setup, test builds, app privacy guidelines, and store approval.'
      }
    ]
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    tagline: 'Intelligent generative AI integrations, LLM workflows & automated business intelligence.',
    shortDescription: 'Leverage artificial intelligence to automate customer support, process documents, generate customized content, and build smart AI agents tailored to your business.',
    fullDescription: 'Artificial intelligence is fundamentally reshaping business productivity. BasanTech designs practical, cost-effective AI solutions—from integrating custom OpenAI and Google Gemini agents into your customer service workflows to training custom vector search engines on your internal business documentation.',
    iconName: 'Sparkles',
    badge: 'Next-Gen',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: 'Custom Quote',
    typicalTimeline: '2 - 6 Weeks',
    deliverables: [
      'Custom AI Chatbots & Context-Aware Assistant Agents',
      'Document Parsing, Extraction & Automated Summarization',
      'Retrieval-Augmented Generation (RAG) with Vector Databases',
      'Intelligent API Connectors (OpenAI, Gemini, Anthropic)',
      'Human-in-the-Loop Verification Dashboards'
    ],
    features: [
      {
        title: 'Private & Secure RAG',
        description: 'Your proprietary company data stays confidential and is used strictly for contextual grounding.'
      },
      {
        title: 'Autonomous Workflows',
        description: 'Trigger automated data extraction, classification, and multi-step actions based on AI responses.'
      },
      {
        title: 'Predictable Costs',
        description: 'Optimized prompt engineering and token caching to keep ongoing API costs economical.'
      }
    ],
    techStack: [
      { category: 'AI & LLM', items: ['OpenAI API', 'Google GenAI / Gemini', 'LangChain', 'LlamaIndex'] },
      { category: 'Vector Stores', items: ['Pinecone', 'pgvector (PostgreSQL)', 'ChromaDB', 'Qdrant'] }
    ],
    useCases: [
      '24/7 intelligent customer support chatbots trained on product catalogs',
      'Automated PDF invoice and contract information extraction',
      'Internal knowledge base semantic search for employee teams',
      'Personalized recommendation engines for online shoppers'
    ],
    faqs: [
      {
        question: 'Will our company data be used to train public AI models?',
        answer: 'No. We use enterprise API endpoints with strict zero-data-retention agreements to protect your confidential data.'
      }
    ]
  },
  {
    id: 'hubspot-dev',
    title: 'HubSpot Development',
    tagline: 'Custom HubSpot CMS development, API integrations & automated CRM workflows.',
    shortDescription: 'Turn your HubSpot investment into a high-powered growth engine with custom theme templates, custom modules, third-party API integrations, and streamlined sales pipelines.',
    fullDescription: 'Max out your HubSpot CRM and CMS capabilities. BasanTech provides expert HubSpot engineering, transforming design concepts into custom HubL modules, integrating bespoke external web forms with your CRM contacts, and automating complex deal-stage pipelines to supercharge your sales teams.',
    iconName: 'Layers',
    badge: 'CRM & CMS',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: 'Project Based',
    typicalTimeline: '2 - 4 Weeks',
    deliverables: [
      'Custom HubSpot CMS Themes & Drag-and-Drop Modules',
      'Bi-Directional CRM API Synchronizations & Webhooks',
      'Automated Lead Scoring, Routing & Email Workflows',
      'Bespoke Landing Page Templates with A/B Testing',
      'Third-Party Database to HubSpot Integration Bridges'
    ],
    features: [
      {
        title: 'Marketer-Friendly Modules',
        description: 'Your marketing team gets flexible, easy-to-edit modules with zero ongoing code required.'
      },
      {
        title: 'Clean CRM Data Hygiene',
        description: 'Automated deduplication, property mapping, and webhook triggers to keep records accurate.'
      },
      {
        title: 'Conversion-Focused UX',
        description: 'Smart forms and progressive profiling designed to capture qualified high-value leads.'
      }
    ],
    techStack: [
      { category: 'HubSpot', items: ['HubL', 'HubSpot CMS CLI', 'Custom Modules', 'HubSpot API v3'] },
      { category: 'Frontend', items: ['HTML5', 'Modern CSS/Tailwind', 'JavaScript ES6+'] }
    ],
    useCases: [
      'Custom HubSpot website redesigns and theme building',
      'Connecting external React web apps to HubSpot CRM contacts',
      'Multi-step lead qualification forms syncing to deals',
      'Automated customer lifecycle email triggers'
    ],
    faqs: [
      {
        question: 'Can you integrate HubSpot with our custom backend?',
        answer: 'Yes, we use the HubSpot REST APIs and webhook listeners to sync contacts, deals, and activities in real time.'
      }
    ]
  },
  {
    id: 'reactjs-dev',
    title: 'ReactJS Development',
    tagline: 'Modern, component-driven Single Page Applications & scalable frontend architectures.',
    shortDescription: 'Bespoke React.js applications built with type-safe TypeScript, reusable design systems, state management, and seamless backend API integrations.',
    fullDescription: 'React is the world’s leading UI framework, and it is our primary specialty. BasanTech architects modular, high-speed React applications with clean component hierarchies, robust TypeScript typing, and optimized state management. Whether creating complex analytics dashboards or modern web portals, we write clean, scalable code.',
    iconName: 'Code2',
    badge: 'Core Frontend',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581291518655-9523c932deb4?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: 'Project Based',
    typicalTimeline: '2 - 6 Weeks',
    deliverables: [
      'Modern Single Page Application (SPA) Development',
      'Custom Component Libraries with Tailwind CSS',
      'Robust TypeScript Type Safety & Zero Memory Leaks',
      'API State Management (React Query / TanStack, Redux, Zustand)',
      'Unit & Component Testing with High Code Coverage'
    ],
    features: [
      {
        title: 'Component Reusability',
        description: 'Clean design system components that make extending your app simple and maintainable.'
      },
      {
        title: 'Instant Fluid State',
        description: 'Optimistic UI updates, instant cache reads, and frictionless user experiences.'
      },
      {
        title: 'Future-Proof Code',
        description: 'Built on the newest React 19 standards with modern hooks, server components, and clean hooks.'
      }
    ],
    techStack: [
      { category: 'React Ecosystem', items: ['React 19', 'TypeScript', 'Vite', 'Next.js', 'TanStack Query'] },
      { category: 'Styling & Animation', items: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'] }
    ],
    useCases: [
      'Interactive SaaS software applications and user portals',
      'Data-rich admin dashboards with dynamic charts',
      'Real-time collaborative workspaces and chat interfaces',
      'Dynamic e-commerce cart and checkout funnels'
    ],
    faqs: [
      {
        question: 'Why choose ReactJS for web development?',
        answer: 'React offers unbeatable performance, a massive ecosystem of libraries, and rapid development speed with modular reusable components.'
      }
    ]
  },
  {
    id: 'wordpress-dev',
    title: 'WordPress Development',
    tagline: 'Custom WordPress themes, WooCommerce storefronts, security hardening & speed optimization.',
    shortDescription: 'High-performance bespoke WordPress websites built without heavy page builder bloat. Clean custom code, bulletproof security, and seamless content management.',
    fullDescription: 'WordPress powers over 40% of the internet, but slow generic templates hold businesses back. BasanTech engineers custom, lightweight WordPress themes and tailored WooCommerce stores that load in under a second, score 95+ on Google PageSpeed, and make managing blog posts, products, and media an absolute breeze.',
    iconName: 'Globe',
    badge: 'CMS Specialists',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: 'Project Based',
    typicalTimeline: '2 - 4 Weeks',
    deliverables: [
      'Custom Lightweight WordPress Themes (No Bloated Builders)',
      'WooCommerce Online Storefronts & Payment Gateways',
      'Speed Optimization (Sub-1s Load, 95+ PageSpeed Score)',
      'Security Hardening, Malware Firewalls & Automated Backups',
      'Custom Post Types & Intuitive Gutenberg Block Systems'
    ],
    features: [
      {
        title: 'Zero Plugin Bloat',
        description: 'Bespoke custom code eliminates reliance on sluggish, vulnerable third-party plugins.'
      },
      {
        title: 'Easy Admin Control',
        description: 'Custom Gutenberg blocks and Advanced Custom Fields (ACF) make updating content simple.'
      },
      {
        title: 'E-Commerce Ready',
        description: 'WooCommerce integration configured for Stripe, PayPal, Razorpay, and regional gateways.'
      }
    ],
    techStack: [
      { category: 'WordPress', items: ['PHP 8.2+', 'WordPress Core', 'WooCommerce', 'ACF Pro', 'Gutenberg'] },
      { category: 'Frontend & Caching', items: ['JavaScript', 'Tailwind/Sass', 'Redis Cache', 'Cloudflare'] }
    ],
    useCases: [
      'Corporate business websites with active blogs and resource hubs',
      'B2C and B2B WooCommerce online shopping storefronts',
      'Membership sites with restricted content and payment gates',
      'Fast editorial magazines and multi-author publication portals'
    ],
    faqs: [
      {
        question: 'Can we easily edit text, images, and pages ourselves?',
        answer: 'Yes! We configure tailored, intuitive editor fields so you can update text, swap images, and create new pages without touching code.'
      }
    ]
  },
  {
    id: 'nodejs-dev',
    title: 'Node.js Development',
    tagline: 'High-throughput backend APIs, microservices, real-time engines & secure database architectures.',
    shortDescription: 'Scalable backend web services, RESTful and GraphQL APIs, real-time WebSockets, and enterprise databases designed for low latency and high availability.',
    fullDescription: 'Your frontend is only as powerful as the engine behind it. BasanTech designs high-performance Node.js backend architectures capable of handling thousands of concurrent requests. From REST and GraphQL APIs to real-time WebSockets and asynchronous worker queues, we build resilient, secure infrastructure.',
    iconName: 'Server',
    badge: 'Scalable Backend',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: 'Project Based',
    typicalTimeline: '3 - 8 Weeks',
    deliverables: [
      'High-Throughput RESTful & GraphQL API Endpoints',
      'Real-Time WebSocket & Socket.io Event Channels',
      'Database Schema Architecture (PostgreSQL, MongoDB, Redis)',
      'OAuth2, JWT & Multi-Factor User Authentication Systems',
      'Containerized Docker Microservices & Cloud Server Setup'
    ],
    features: [
      {
        title: 'Non-Blocking I/O',
        description: 'Event-driven asynchronous performance for low latency and high concurrent traffic handling.'
      },
      {
        title: 'Bank-Grade Security',
        description: 'OWASP-compliant data sanitization, rate-limiting, CORS policies, and encrypted credentials.'
      },
      {
        title: 'Scalable Microservices',
        description: 'Decoupled services designed to scale horizontally across cloud clusters on demand.'
      }
    ],
    techStack: [
      { category: 'Runtime & Frameworks', items: ['Node.js', 'Express.js', 'Fastify', 'NestJS', 'TypeScript'] },
      { category: 'Databases & Message Queues', items: ['PostgreSQL', 'MongoDB', 'Redis', 'BullMQ', 'Kafka'] }
    ],
    useCases: [
      'Backend infrastructure for mobile applications and SaaS platforms',
      'High-frequency payment processing and fintech transaction engines',
      'Live notifications, real-time messaging, and collaborative feeds',
      'Third-party software integration hubs and automated data sync pipelines'
    ],
    faqs: [
      {
        question: 'Why choose Node.js for backend development?',
        answer: 'Node.js provides exceptional I/O speed, shared TypeScript models across full-stack codebases, and massive scalability under concurrent loads.'
      }
    ]
  }
];
