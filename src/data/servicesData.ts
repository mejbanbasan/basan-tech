import { Service } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'website-dev',
    title: 'Website Development',
    tagline: 'High-performance, ultra-scalable web platforms & modern responsive websites.',
    shortDescription: 'Custom, high-performance responsive websites, web applications, and landing pages engineered for speed and search engine visibility.',
    fullDescription: 'Basan Tech crafts lightning-fast, highly responsive websites and web platforms that convert visitors into loyal customers. We combine modern design aesthetics with rock-solid full-stack code to ensure sub-second page loads, effortless responsiveness across all screens, and top-tier SEO rankings.',
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
      'Custom High-Converting Websites & Web Portals',
      'Full Mobile & Tablet Responsive UI/UX Architecture',
      'Lighthouse 95+ Core Web Vitals & Technical SEO',
      'Interactive Dynamic Components & Modern Micro-Animations',
      'Automated Continuous Deployment (CI/CD)'
    ],
    features: [
      {
        title: 'Ultra-Fast Page Speed',
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
      { category: 'Backend & APIs', items: ['Node.js', 'REST APIs', 'GraphQL', 'Express'] },
      { category: 'Hosting & CDN', items: ['Vercel', 'AWS', 'Cloudflare', 'GitHub Actions'] }
    ],
    useCases: [
      'Corporate & startup marketing websites',
      'Interactive SaaS product landing pages',
      'Educational & institutional web portals',
      'Lead-generation websites with automated CRM sync'
    ],
    faqs: [
      {
        question: 'Will our website be fully responsive on mobile devices?',
        answer: 'Yes. Every website is built mobile-first and tested rigorously across iOS Safari, Android Chrome, tablets, and desktop resolutions.'
      },
      {
        question: 'How do you ensure good search engine rankings?',
        answer: 'We implement clean semantic HTML5, fast server-side rendering, Open Graph meta tags, structured JSON-LD schemas, and Lighthouse performance tuning.'
      }
    ]
  },
  {
    id: 'app-dev',
    title: 'App Development (Android & iOS)',
    tagline: 'Native and cross-platform mobile apps built for seamless iOS & Android user experiences.',
    shortDescription: 'Native and cross-platform mobile apps for iOS and Android built with intuitive UX, smooth performance, and robust offline support.',
    fullDescription: 'We design and engineer mobile applications that deliver native-grade performance, intuitive gestures, and seamless offline functionality. From consumer apps to enterprise workforce tools, our mobile solutions are engineered for rapid app store approvals and effortless scaling.',
    iconName: 'Smartphone',
    badge: 'Mobile Engineering',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: 'Project Based',
    typicalTimeline: '4 - 10 Weeks',
    deliverables: [
      'Cross-Platform iOS & Android Mobile Applications',
      'Native Device Hardware Integration (Camera, Biometrics, GPS)',
      'Real-Time Push Notification Engine (Firebase Cloud Messaging)',
      'Secure Token-Based Authentication & Offline SQLite Storage',
      'Google Play Store & Apple App Store Publishing Assistance'
    ],
    features: [
      {
        title: 'Single Codebase Efficiency',
        description: 'High-performance React Native & Flutter architectures that run identically on iOS and Android.'
      },
      {
        title: 'Offline-First Capability',
        description: 'Local caching and background synchronization so users can access data without internet connections.'
      },
      {
        title: '60 FPS Fluid Animations',
        description: 'Native-accelerated UI transitions and ergonomic touch gestures tailored to mobile operating systems.'
      }
    ],
    techStack: [
      { category: 'Mobile Frameworks', items: ['React Native', 'Flutter', 'TypeScript', 'Kotlin', 'Swift'] },
      { category: 'Backend & Cloud', items: ['Firebase', 'Supabase', 'Node.js', 'PostgreSQL', 'Redis'] },
      { category: 'Device Features', items: ['Push Notifications', 'Camera & Biometrics', 'Geolocation', 'Offline Cache'] }
    ],
    useCases: [
      'On-demand consumer booking & delivery apps',
      'Digital wallet and membership identification apps',
      'Field sales and logistics tracking applications',
      'Interactive health tracking & community apps'
    ],
    faqs: [
      {
        question: 'Do you help publish the app to Google Play and Apple App Store?',
        answer: 'Yes. We guide you through developer account setup, test build distributions (TestFlight & Internal Tracks), and full store submission.'
      },
      {
        question: 'Do you build native or cross-platform apps?',
        answer: 'We specialize in modern cross-platform frameworks (React Native and Flutter) that deliver near-native performance while saving 40-50% in development costs.'
      }
    ]
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    tagline: 'Tailored enterprise platforms, internal workflow automation & bespoke business software.',
    shortDescription: 'Tailored enterprise platforms, internal workflow automation tools, and bespoke software systems built to solve your unique business challenges.',
    fullDescription: 'Off-the-shelf software rarely fits a growing company perfectly. At Basan Tech, we engineer custom software solutions built around your exact business requirements. From automating manual back-office tasks to architecting complex multi-role enterprise management systems, we deliver secure, scalable software you completely own.',
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
      { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Vite'] }
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
    id: 'desktop-software',
    title: 'Desktop Software Development',
    tagline: 'High-performance, secure cross-platform desktop applications engineered for Windows, macOS, and Linux.',
    shortDescription: 'High-performance, secure cross-platform desktop applications engineered for Windows, macOS, and Linux environments.',
    fullDescription: 'When web apps lack the hardware access, raw compute performance, or offline security your business operations require, Basan Tech builds dedicated desktop applications. Engineered with modern cross-platform technologies, our desktop software delivers native system integration, offline file handling, and lightning-fast local performance.',
    iconName: 'Laptop',
    badge: 'Desktop Systems',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: 'Project Based',
    typicalTimeline: '3 - 8 Weeks',
    deliverables: [
      'Cross-Platform Desktop Apps (Windows .exe, macOS .dmg, Linux .AppImage)',
      'Direct OS Hardware Integration (Printers, Scanners, COM/Serial Ports)',
      'Encrypted Local Database Storage (SQLite / Embedded DB)',
      'Automated Background Software Updates & Installer Packages',
      'Full Source Code & Desktop Build Tooling'
    ],
    features: [
      {
        title: 'Native OS Integration',
        description: 'System tray integration, native notifications, file-system access, and local device communication.'
      },
      {
        title: 'High Compute & Low Latency',
        description: 'Optimized memory management and background multi-threading for intensive data processing.'
      },
      {
        title: 'Autonomous Offline Operation',
        description: 'Complete functionality without an internet connection, featuring background sync when online.'
      }
    ],
    techStack: [
      { category: 'Desktop Frameworks', items: ['Electron', 'Tauri', 'C++', 'Python (PyQt)', 'TypeScript'] },
      { category: 'Local Storage', items: ['SQLite', 'Embedded RocksDB', 'Local Encrypted Storage'] },
      { category: 'Packaging & CI', items: ['electron-builder', 'WiX Toolset', 'GitHub Actions', 'Code Signing'] }
    ],
    useCases: [
      'Offline-capable Point-of-Sale (POS) and retail billing software',
      'Industrial hardware monitoring and diagnostic dashboards',
      'Secure internal document encryption & file management tools',
      'Media processing, desktop automation, and data backup utilities'
    ],
    faqs: [
      {
        question: 'Can the desktop software run on both Windows and macOS?',
        answer: 'Yes. We use cross-platform frameworks such as Tauri and Electron that compile native executables for Windows, macOS, and Linux from a unified codebase.'
      },
      {
        question: 'Does the desktop app work without an internet connection?',
        answer: 'Absolutely. We design desktop applications with local-first databases (SQLite), ensuring all core functions work reliably 100% offline.'
      }
    ]
  },
  {
    id: 'ecommerce-dev',
    title: 'E-commerce Development',
    tagline: 'Scalable digital storefronts and multi-vendor marketplaces engineered for high conversions and volume.',
    shortDescription: 'Scalable online stores, custom checkout funnels, multi-vendor marketplaces, and seamless payment gateway integrations.',
    fullDescription: 'Basan Tech engineers custom e-commerce platforms and digital storefronts engineered for fast page loads, effortless catalog navigation, and friction-free checkouts. Whether building a direct-to-consumer store or a multi-vendor marketplace, we maximize customer conversion rates and handle high transaction volumes securely.',
    iconName: 'ShoppingBag',
    badge: 'Commerce & Retail',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: 'Project Based',
    typicalTimeline: '3 - 8 Weeks',
    deliverables: [
      'Custom Modern E-Commerce Web Storefront & Mobile Checkout',
      'Multi-Currency & Local Payment Gateway Integrations (Stripe, Razorpay, PayPal)',
      'Real-Time Inventory Management & Automated Order Tracking',
      'Customer Loyalty Programs, Promo Codes & Discount Engines',
      'SEO-Optimized Product Catalog Architecture & Schema Markup'
    ],
    features: [
      {
        title: 'Frictionless Checkout',
        description: 'Single-page checkout with instant address autocomplete, guest checkout, and digital wallet support.'
      },
      {
        title: 'High-Volume Scalability',
        description: 'Edge-cached product catalogs and Redis-backed cart sessions that handle flash sales effortlessly.'
      },
      {
        title: 'Automated Logistics & Invoicing',
        description: 'Direct webhooks for shipping courier updates, automated PDF invoices, and customer notifications.'
      }
    ],
    techStack: [
      { category: 'Frontend Commerce', items: ['Next.js Commerce', 'React', 'Tailwind CSS', 'Shopify Storefront API'] },
      { category: 'Backend & Data', items: ['Node.js', 'PostgreSQL', 'Redis', 'WooCommerce API', 'Medusa.js'] },
      { category: 'Payments & Logistics', items: ['Stripe', 'Razorpay', 'PayPal', 'Shiprocket', 'Twilio SMS'] }
    ],
    useCases: [
      'Direct-to-consumer (D2C) brand flagship storefronts',
      'Multi-vendor marketplace platforms with vendor commissions',
      'B2B wholesale e-commerce with volume tiers and quoting',
      'Digital subscription and recurring membership stores'
    ],
    faqs: [
      {
        question: 'Which payment gateways can you integrate?',
        answer: 'We integrate all major domestic and international payment gateways including Stripe, Razorpay, PayPal, Apple Pay, Google Pay, and UPI.'
      },
      {
        question: 'Can you migrate our existing store without losing SEO or orders?',
        answer: 'Yes. We handle complete 301 URL redirects, customer account migrations, and order history imports to safeguard your organic search rankings.'
      }
    ]
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    tagline: 'Bespoke LLM integrations, intelligent workflow agents, and machine learning solutions for modern teams.',
    shortDescription: 'Custom AI integrations, intelligent automated workflows, LLM agents, and smart predictive tools to accelerate business productivity.',
    fullDescription: 'Artificial intelligence is most powerful when deeply integrated into your daily business workflows. Basan Tech builds tailored AI solutions: intelligent document analyzers, autonomous customer support agents, automated internal search over proprietary data (RAG), and smart prediction engines that save hundreds of staff hours every month.',
    iconName: 'Sparkles',
    badge: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: 'Project Based',
    typicalTimeline: '3 - 8 Weeks',
    deliverables: [
      'Custom LLM Integration & Retrieval-Augmented Generation (RAG)',
      '24/7 Intelligent AI Customer Support Assistants & Voice Agents',
      'Automated Document Processing (OCR, Data Extraction, Summaries)',
      'Internal Knowledge Base Chatbots with Strict Data Privacy',
      'Predictive Analytics Dashboards & Smart Recommendation Engines'
    ],
    features: [
      {
        title: 'Zero Data Leakage',
        description: 'Enterprise privacy architectures ensuring your proprietary data is never used to train public models.'
      },
      {
        title: 'Contextual Accuracy (RAG)',
        description: 'Vector embeddings and hybrid search that provide verifiable answers grounded in your business data.'
      },
      {
        title: 'Autonomous Tool Calling',
        description: 'AI agents that can safely execute real business tasks like booking meetings, updating CRMs, or issuing tickets.'
      }
    ],
    techStack: [
      { category: 'AI & LLMs', items: ['OpenAI GPT-4o', 'Claude 3.5', 'Llama 3', 'LangChain', 'LlamaIndex'] },
      { category: 'Vector Databases', items: ['Pinecone', 'pgvector (PostgreSQL)', 'Chroma', 'Qdrant'] },
      { category: 'Backend Engine', items: ['Python', 'FastAPI', 'Node.js', 'Docker', 'Redis Queue'] }
    ],
    useCases: [
      'Automated customer support bots that resolve 70%+ of queries',
      'Legal & financial document summarization and invoice data extraction',
      'Internal employee knowledge assistants over internal wikis and SOPs',
      'Personalized e-commerce recommendation engines'
    ],
    faqs: [
      {
        question: 'Will our proprietary company data remain private and secure?',
        answer: 'Yes. We strictly utilize private enterprise APIs with zero-data-retention agreements or self-hosted open-source models (like Llama 3) in your private cloud.'
      },
      {
        question: 'How accurate are the AI responses?',
        answer: 'By employing Retrieval-Augmented Generation (RAG) with vector embeddings and strict system guardrails, we eliminate hallucinations and enforce source citations.'
      }
    ]
  }
];
