import { Service, CaseStudy, TeamMember, Testimonial } from '../types';
import iqraHeroImg from '../assets/images/iqra_islamic_madrasa_1787989336430.jpg';
import lurnixeHeroImg from '../assets/images/lurnixe_orange_white_1787989665999.jpg';

export interface AgencyStatItem {
  value: string;
  numericValue?: number;
  label: string;
  suffix?: string;
  desc?: string;
}

export const AGENCY_STATS: AgencyStatItem[] = [
  { value: '5', numericValue: 5, label: 'Client Platforms Built', suffix: '', desc: 'Live in production' },
  { value: '6', numericValue: 6, label: 'Core Practices', suffix: '', desc: 'Web, Mobile & Software' },
  { value: '12+', numericValue: 12, label: 'Technologies Mastered', suffix: '+', desc: 'Modern full-stack ecosystems' },
  { value: '100%', numericValue: 100, label: 'Client IP Ownership', suffix: '%', desc: 'Full source code ownership' },
  { value: 'Direct', label: 'Developer Access', suffix: '', desc: 'Work directly with builders' },
  { value: '30-Day', label: 'Post-Launch Warranty', suffix: '', desc: 'Included hyper-care & support' },
];

export interface VerifiedClientPlatform {
  name: string;
  category: string;
  url: string;
  caseStudyId: string;
  tagline: string;
}

export const VERIFIED_CLIENT_PLATFORMS: VerifiedClientPlatform[] = [
  { 
    name: 'Iqra Society', 
    category: 'Education Platform / Islamic Learning', 
    url: 'https://iqra-society.com/', 
    caseStudyId: 'iqra-society',
    tagline: 'Online courses & digital Islamic library'
  },
  { 
    name: 'Lurnixe', 
    category: 'E-Commerce Marketplace & Mobile App', 
    url: 'https://www.lurnixe.com/', 
    caseStudyId: 'lurnixe-marketplace',
    tagline: 'Multi-vendor shopping platform & mobile app'
  },
  { 
    name: 'Lurnixe Health', 
    category: 'Healthcare & Digital Health Cards', 
    url: 'https://lurnixehealth.com/', 
    caseStudyId: 'lurnixe-health',
    tagline: 'Digital family health card & QR verification'
  },
  { 
    name: 'KECF India', 
    category: 'NGO / Education & Social Impact', 
    url: 'https://kecfindia.org/', 
    caseStudyId: 'kecf-india',
    tagline: 'Community development & youth empowerment'
  },
  { 
    name: 'AIC-IIIM', 
    category: 'CSIR-IIIM Bio-Incubation Portal', 
    url: 'https://aiciiim.in/', 
    caseStudyId: 'aiciiim-incubation',
    tagline: 'Startup incubation & deep-tech programs'
  },
];

// Backwards-compatible export
export const TRUSTED_BRANDS = VERIFIED_CLIENT_PLATFORMS;

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    tagline: 'High-performance, ultra-scalable web platforms & SaaS engineered for market dominance.',
    shortDescription: 'Modern responsive web applications, enterprise portals, SaaS platforms, and digital ecosystems built with modern React, Next.js, Node.js, and cloud architectures.',
    fullDescription: 'At Basan Tech, we engineer lightning-fast, secure, and visually captivating web applications. From hyper-scaled SaaS applications handling millions of monthly users to bespoke corporate web portals, our engineering team crafts web experiences with pixel-perfect responsive fidelity, sub-second load times, and bank-grade security standards.',
    iconName: 'Globe',
    badge: 'Core Specialty',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: '$4,500',
    typicalTimeline: '3 - 8 Weeks',
    deliverables: [
      'Single Page Apps (SPA) & Server-Side Rendered (SSR) Systems',
      'Custom SaaS Product Architecture & Multi-Tenant Databases',
      'Interactive Client & Admin Portals with Role-Based Access',
      'API-First Microservices & Third-Party Integrations',
      'SEO Architecture, Lighthouse 98+ Performance Optimization',
      'Automated CI/CD Pipelines & Cloud Hosting Setup'
    ],
    features: [
      {
        title: 'Sub-Second Page Speeds',
        description: 'Optimized rendering pipelines, edge caching, image compression, and dynamic code-splitting for frictionless user journeys.'
      },
      {
        title: 'Microservices & Modular Scale',
        description: 'Decoupled, scalable architectures that effortlessly handle traffic spikes without degraded performance or downtime.'
      },
      {
        title: 'Security & Compliance First',
        description: 'Built-in protection against OWASP Top 10 vulnerabilities, strict GDPR/CCPA compliance, and automated SSL orchestration.'
      },
      {
        title: 'Modern Headless CMS Integration',
        description: 'Empower marketing teams with visual content editors (Sanity, Strapi, Contentful) while maintaining zero engineering friction.'
      }
    ],
    techStack: [
      { category: 'Frontend', items: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vue 3', 'Framer Motion'] },
      { category: 'Backend & APIs', items: ['Node.js', 'Express', 'Python / FastAPI', 'Go', 'GraphQL', 'RESTful APIs'] },
      { category: 'Databases & Cache', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Cloud Firestore'] },
      { category: 'Cloud & Infrastructure', items: ['AWS', 'Google Cloud (GCP)', 'Vercel', 'Docker', 'Cloudflare CDN'] }
    ],
    useCases: [
      'Multi-tenant B2B and B2C SaaS platforms',
      'Customer self-service portals and member dashboards',
      'Real-time collaborative web applications',
      'High-converting enterprise corporate web presence',
      'Interactive data visualization tools and analytical dashboards'
    ],
    caseStudyId: 'iqra-society',
    faqs: [
      {
        question: 'How do you ensure web applications are responsive across all device sizes?',
        answer: 'We design fluid layout systems with Tailwind CSS and responsive breakpoint grids, rigorously testing across 30+ real hardware viewports including flagship smartphones, tablets, high-DPI laptops, and ultra-wide desktop monitors.'
      },
      {
        question: 'Can you migrate our legacy website to a modern tech stack?',
        answer: 'Yes. We specialize in zero-downtime legacy migrations, transferring your existing databases, user sessions, and SEO rankings seamlessly to modern Next.js or React architectures.'
      },
      {
        question: 'Do you provide continuous maintenance and security patching?',
        answer: 'Absolutely. We offer comprehensive post-launch SLA maintenance tiers covering 24/7 uptime monitoring, server optimization, library security patches, and ongoing feature rollouts.'
      }
    ]
  },
  {
    id: 'app-dev',
    title: 'App Development',
    tagline: 'Native & cross-platform iOS & Android apps designed to engage, retain, and scale.',
    shortDescription: 'Intuitive, buttery-smooth mobile applications for iOS and Android powered by React Native, Flutter, Swift, and Kotlin, engineered with offline-first capabilities.',
    fullDescription: 'Transform your mobile vision into an App Store and Google Play standout. Basan Tech builds native and hybrid mobile apps that combine fluid 120 FPS animations, biometric security, push notifications, native hardware integration (Camera, GPS, Bluetooth, HealthKit), and reliable offline-first database synchronization.',
    iconName: 'Smartphone',
    badge: 'High Demand',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: '$6,000',
    typicalTimeline: '4 - 12 Weeks',
    deliverables: [
      'Cross-Platform iOS & Android Codebases (Single Codebase Efficiency)',
      'Native Swift & Kotlin Modules for High-Intensity Operations',
      'Offline-First Data Storage & Instant Cloud Sync',
      'Push Notification Infrastructure (OneSignal, Firebase Cloud Messaging)',
      'In-App Purchases, Stripe, Apple Pay & Google Pay Integration',
      'Full App Store & Google Play Store Submission & Approval Guarantee'
    ],
    features: [
      {
        title: '60-120 FPS Fluid Animations',
        description: 'Native gesture handling and physics-driven micro-interactions that make every screen transition feel natural.'
      },
      {
        title: 'Offline-First Resilience',
        description: 'Local caching and conflict-free replicated data types (CRDTs) ensure users never lose work in poor connectivity.'
      },
      {
        title: 'Native Device Capabilities',
        description: 'Deep integration with biometric FaceID/Fingerprint, GPS geofencing, accelerometer, Bluetooth LE, and camera processing.'
      },
      {
        title: 'Comprehensive Analytics',
        description: 'Built-in event telemetry, crash diagnostics, funnel drop-off analytics, and user journey tracking via Mixpanel/PostHog.'
      }
    ],
    techStack: [
      { category: 'Mobile Frameworks', items: ['React Native', 'Flutter', 'Expo Application Services', 'Swift (iOS)', 'Kotlin (Android)'] },
      { category: 'State & Data', items: ['Zustand', 'Redux Toolkit', 'TanStack Query', 'WatermelonDB', 'SQLite / Realm'] },
      { category: 'Backend & Services', items: ['Firebase Auth/Firestore', 'Supabase', 'Node.js Microservices', 'AWS Amplify'] },
      { category: 'Deployment & CI/CD', items: ['Fastlane', 'GitHub Actions', 'TestFlight', 'Google Play Internal Tracks'] }
    ],
    useCases: [
      'On-demand booking & delivery mobile applications',
      'Health, fitness, and telehealth tracking apps with wearable sync',
      'Fintech wallets, crypto apps, and peer-to-peer payment utilities',
      'Social networking, messaging, and community mobile platforms',
      'Field service management and internal enterprise mobile tools'
    ],
    caseStudyId: 'lurnixe-marketplace',
    faqs: [
      {
        question: 'Should we build cross-platform (React Native/Flutter) or 100% Native?',
        answer: 'For 90% of business applications, modern React Native or Flutter delivers identical performance and visual fidelity while reducing development budget and timeline by 40-50%. We guide you through the tradeoff analysis during our blueprint phase.'
      },
      {
        question: 'Do you handle the App Store and Google Play approval process?',
        answer: 'Yes! We manage 100% of the submission checklist, metadata optimization, privacy policy compliance, age ratings, and test accounts until your app is live and publicly downloadable.'
      }
    ]
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    tagline: 'Tailored enterprise architectures, automated workflows, and high-security backend systems.',
    shortDescription: 'Bespoke enterprise software, custom ERP/CRM engines, workflow automation, complex calculation tools, and distributed cloud microservices built for specific business logic.',
    fullDescription: 'Off-the-shelf software often forces your business into rigid constraints. Basan Tech builds bespoke software engines structured around your proprietary workflows, data models, and operational hierarchies. We engineer resilient systems that automate manual tasks, eliminate spreadsheet chaos, and interconnect disparate legacy tools into a unified mission control.',
    iconName: 'Cpu',
    badge: 'Enterprise Grade',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: '$8,000',
    typicalTimeline: '6 - 16 Weeks',
    deliverables: [
      'Custom Enterprise Resource Planning (ERP) & CRM Systems',
      'Automated Workflow Engines & Document Processing Pipelines',
      'High-Throughput Distributed Microservices Architecture',
      'Granular Role-Based Access Control (RBAC) & Audit Trails',
      'Legacy System Interfacing, Webhooks & Enterprise API Bridges',
      'Full Technical Documentation, Architecture Diagrams & Code Ownership'
    ],
    features: [
      {
        title: 'Custom Business Logic Modeling',
        description: 'Engineered from the ground up to match your exact approval flows, inventory calculations, and compliance rules.'
      },
      {
        title: 'Automated Operations',
        description: 'Eliminate repetitive human error with event-driven background queues, auto-invoicing, and scheduled reporting.'
      },
      {
        title: 'Bank-Grade Data Security',
        description: 'End-to-end encryption at rest (AES-256) and in transit (TLS 1.3), complete tamper-evident audit logs, and SOC2 readiness.'
      },
      {
        title: 'Scalable Cloud Infrastructure',
        description: 'Self-healing Kubernetes clusters, auto-scaling serverless functions, and load-balanced relational databases.'
      }
    ],
    techStack: [
      { category: 'Core Languages', items: ['TypeScript', 'Python', 'Go', 'C# / .NET Core', 'Java / Spring Boot', 'Rust'] },
      { category: 'Architecture', items: ['Microservices', 'Event-Driven (Kafka / RabbitMQ)', 'REST / gRPC / GraphQL', 'Serverless'] },
      { category: 'Enterprise DBs', items: ['PostgreSQL', 'Oracle DB', 'TimescaleDB', 'Redis Enterprise', 'ElasticSearch'] },
      { category: 'Cloud Infrastructure', items: ['AWS ECS / EKS', 'Google Kubernetes Engine', 'Azure Cloud', 'Terraform (IaC)'] }
    ],
    useCases: [
      'Multi-branch supply chain, logistics, and inventory dispatching',
      'Financial risk assessment, automated loan processing, and billing portals',
      'Healthcare patient management, HIPAA-compliant scheduling, and records',
      'Complex B2B configuration, pricing, and quoting (CPQ) software',
      'Internal team operations dashboards replacing legacy spreadsheets'
    ],
    caseStudyId: 'lurnixe-health',
    faqs: [
      {
        question: 'Who owns the intellectual property and source code of custom software?',
        answer: 'You retain 100% full legal ownership of all source code, databases, intellectual property, and architectural assets upon project milestone sign-off. There are zero licensing fees or lock-ins.'
      },
      {
        question: 'How do you test and ensure zero data corruption in mission-critical software?',
        answer: 'We implement comprehensive test-driven development (TDD), end-to-end integration suites with Playwright/Cypress, automated schema migrations, and sandboxed staging environments before any production release.'
      }
    ]
  },
  {
    id: 'desktop-software',
    title: 'Desktop Software Development',
    tagline: 'High-speed, robust desktop applications for Windows, macOS, and Linux.',
    shortDescription: 'Native and cross-platform desktop applications engineered with Electron, Tauri, C++, and .NET for hardware access, local file processing, and offline-heavy enterprise workloads.',
    fullDescription: 'When web browsers reach their limits in hardware access, raw compute performance, local file system manipulation, or air-gapped security, Basan Tech develops powerhouse desktop software. We deliver native-feeling applications across Windows, macOS, and Linux with auto-update mechanisms, hardware sensor access, and low-latency processing.',
    iconName: 'Monitor',
    badge: 'High Performance',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: '$5,500',
    typicalTimeline: '4 - 10 Weeks',
    deliverables: [
      'Cross-Platform Desktop Apps (macOS, Windows, Linux) via Electron / Tauri',
      'Native Windows (.NET / WPF / C#) & macOS (Swift / Cocoa) Solutions',
      'Direct Hardware, USB, Serial Port, and Camera/Audio Device Interfacing',
      'Automatic Silent Background Updates & Code Signing (Apple & Microsoft)',
      'Offline-First Local Database Storage with Zero Latency',
      'Installer Packages (.exe, .msi, .dmg, .pkg, AppImage, deb)'
    ],
    features: [
      {
        title: 'Native OS Integration',
        description: 'System tray widgets, native file dialogs, keyboard shortcuts, OS notifications, and custom menu bars.'
      },
      {
        title: 'Raw Computational Speed',
        description: 'Multi-threaded background workers in Rust and C++ for CPU-intensive data analysis, video editing, and simulations.'
      },
      {
        title: 'Code Signing & Trust',
        description: 'Officially signed with Apple Developer and Microsoft EV certificates to prevent "Unknown Publisher" security warnings.'
      },
      {
        title: 'Ultra-Low Memory Footprint',
        description: 'Lightweight binary builds using modern Tauri and Rust frameworks for sub-50MB RAM consumption.'
      }
    ],
    techStack: [
      { category: 'Desktop Frameworks', items: ['Electron.js', 'Tauri (Rust + Web)', 'WPF / .NET 8 (C#)', 'Qt / C++', 'Swift / Cocoa'] },
      { category: 'Local Storage', items: ['SQLite', 'LevelDB', 'DuckDB', 'Encrypted Local Key-Value Stores'] },
      { category: 'Hardware Protocols', items: ['WebUSB', 'Serial / RS-232', 'Bluetooth Low Energy (BLE)', 'WebSockets'] },
      { category: 'Packaging & Update', items: ['electron-builder', 'NSIS', 'dmgbuild', 'Auto-Updater (S3 / GitHub Releases)'] }
    ],
    useCases: [
      'Industrial equipment control, IoT device configuration, and hardware monitors',
      'Financial trading terminals with sub-millisecond local order processing',
      'Creative media rendering, video compression, and batch file converters',
      'POS (Point of Sale) terminal software with receipt printer & barcode scanner sync',
      'Offline field data loggers and scientific analysis suites'
    ],
    caseStudyId: 'aiciiim-incubation',
    faqs: [
      {
        question: 'Will our desktop application work identically on Windows and Mac?',
        answer: 'Yes! By leveraging Tauri or modern Electron frameworks, we write a single unified UI codebase that automatically adapts to the native window chrome, file systems, and key combinations of both operating systems.'
      },
      {
        question: 'How do users receive software updates?',
        answer: 'We configure automated differential background updates. When you publish a new version, the software silently downloads and installs it on next launch without requiring manual reinstallations.'
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    tagline: 'Data-driven brand authority, high-converting creative content, and viral audience growth.',
    shortDescription: 'Strategic social media management, creative content production, viral video editing, paid ad campaigns (Meta, LinkedIn, TikTok, X), and community building that drives real revenue.',
    fullDescription: 'A world-class product deserves an magnetic online presence. Basan Tech provides full-spectrum digital brand and social media management for tech companies, startups, and growing enterprises. We engineer content calendars, high-production video reels, graphic assets, paid acquisition campaigns, and community engagement strategies that turn passive scrollers into loyal advocates.',
    iconName: 'Share2',
    badge: 'Growth Engine',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: '$2,500 / mo',
    typicalTimeline: 'Ongoing Growth Retainer',
    deliverables: [
      'Comprehensive Social Media & Brand Positioning Strategy',
      'Weekly High-Impact Video Reels, TikToks, Carousel Graphics & Copy',
      'Paid Ad Campaign Setup & Optimization (Meta Ads, LinkedIn, Google, TikTok)',
      'Community Management, Comment Moderation & Direct Message Engagement',
      'Influencer Collaboration & Tech PR Outreach Management',
      'Bi-Weekly ROI & Performance Analytics Dashboards'
    ],
    features: [
      {
        title: 'Viral Video & Short-Form Production',
        description: 'Engaging motion graphics, product walkthroughs, tech explainers, and founder clips edited for maximum retention.'
      },
      {
        title: 'Omnichannel Publishing',
        description: 'Synchronized brand presence across LinkedIn, X (Twitter), Instagram, TikTok, YouTube Shorts, and Facebook.'
      },
      {
        title: 'Hyper-Targeted Paid Campaigns',
        description: 'Precision audience segmentation and A/B ad creative testing to lower Customer Acquisition Cost (CAC).'
      },
      {
        title: 'Real-Time Sentiment Monitoring',
        description: 'Track brand mentions, competitor benchmarks, and emerging industry trends to capture viral cultural moments.'
      }
    ],
    techStack: [
      { category: 'Design & Motion', items: ['Adobe Premiere Pro', 'After Effects', 'Figma', 'Photoshop', 'CapCut Pro'] },
      { category: 'Management & Schedulers', items: ['Hootsuite Enterprise', 'Buffer', 'Sprout Social', 'Later'] },
      { category: 'Ad Platforms', items: ['Meta Business Suite', 'LinkedIn Campaign Manager', 'Google Ads', 'TikTok Ads Manager'] },
      { category: 'Analytics & Tracking', items: ['Google Analytics 4', 'Triple Whale', 'Hotjar', 'Brand24 Social Listening'] }
    ],
    useCases: [
      'Tech startups launching brand-new SaaS or mobile products to the market',
      'B2B software companies generating qualified enterprise sales leads via LinkedIn',
      'E-commerce brands scaling monthly GMV with viral TikTok & Instagram ads',
      'Executive thought-leadership branding for founders and CEOs',
      'Community building and Discord / Telegram management for modern tech products'
    ],
    caseStudyId: 'kecf-india',
    faqs: [
      {
        question: 'Do we have to create our own videos and graphics or do you handle everything?',
        answer: 'Our in-house creative team handles 100% of the scripting, graphic design, animation, video editing, caption copywriting, and hashtag research. All you need to do is give quick monthly approvals.'
      },
      {
        question: 'How do you measure social media ROI?',
        answer: 'We focus on bottom-line business metrics: qualified inbound leads, website referral traffic, customer acquisition costs (CAC), conversion rates, and revenue generated rather than vanity metrics alone.'
      }
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    tagline: 'High-conversion online storefronts, headless commerce, and frictionless checkout flows.',
    shortDescription: 'Conversion-optimized e-commerce stores, custom Shopify Plus builds, WooCommerce platforms, headless commerce, payment gateway integrations, and automated inventory sync.',
    fullDescription: 'Turn visitors into lifelong customers with e-commerce experiences built for maximum conversion velocity. Basan Tech architects custom storefronts, headless commerce engines, and enterprise Shopify Plus solutions that load instantly, streamline one-click checkouts, handle global multi-currency transactions, and synchronize flawlessly with your warehouses and ERPs.',
    iconName: 'ShoppingBag',
    badge: 'Revenue Focused',
    image: lurnixeHeroImg,
    galleryImages: [
      'https://images.unsplash.com/photo-1556742049-0a67e55722ee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'
    ],
    pricingStartingAt: '$5,000',
    typicalTimeline: '3 - 8 Weeks',
    deliverables: [
      'Custom Shopify Plus, WooCommerce, and Headless Storefront Development',
      'Conversion Rate Optimized (CRO) Product Pages & One-Page Checkout',
      'Global Multi-Currency, Multi-Language & Tax Automation (Stripe, PayPal, Klarna)',
      'Automated ERP, Warehouse & Inventory Synchronization',
      'Subscription Commerce & Recurring Billing System Setup',
      'Speed Optimization achieving 95+ Mobile Google PageSpeed Scores'
    ],
    features: [
      {
        title: 'Frictionless 1-Click Checkout',
        description: 'Optimized cart funnels, express Apple Pay / Google Pay checkouts, and dynamic upsells that maximize Average Order Value (AOV).'
      },
      {
        title: 'Headless Commerce Architecture',
        description: 'Decoupled frontend (Next.js) powered by robust e-commerce backends (Shopify Storefront API, Medusa) for limitless design freedom.'
      },
      {
        title: 'Automated Multi-Channel Sync',
        description: 'Real-time inventory synchronization across Amazon, eBay, TikTok Shop, and your main online storefront.'
      },
      {
        title: 'Personalized Product Recommendations',
        description: 'AI-driven product suggestions and smart bundles tailored to customer browsing habits and purchase history.'
      }
    ],
    techStack: [
      { category: 'Platforms & Frameworks', items: ['Shopify Plus', 'Next.js Commerce', 'WooCommerce', 'Medusa.js', 'Magento Enterprise'] },
      { category: 'Payment Gateways', items: ['Stripe Elements', 'Shopify Payments', 'PayPal Braintree', 'Klarna / Afterpay', 'Adyen'] },
      { category: 'Integrations & ERPs', items: ['Klaviyo', 'ShipStation', 'Netsuite', 'QuickBooks Commerce', 'Recharge Subscriptions'] },
      { category: 'Optimization', items: ['InstantSearch (Algolia)', 'Gorgias Helpdesk', 'Yotpo Reviews', 'Cloudflare Edge Caching'] }
    ],
    useCases: [
      'Direct-to-Consumer (DTC) brands scaling to 8-figure annual revenue',
      'B2B wholesale e-commerce portals with tiered pricing and bulk ordering',
      'Subscription box and recurring membership digital commerce',
      'Global multi-region storefronts with localized currencies and tax compliance',
      'High-traffic flash-sale stores engineered to handle 50,000+ simultaneous checkouts'
    ],
    caseStudyId: 'lurnixe-marketplace',
    faqs: [
      {
        question: 'Can you migrate our store from WooCommerce or Magento to Shopify Plus?',
        answer: 'Yes. We provide end-to-end data migration including all customer records, order histories, product SKUs, review data, and SEO 301 redirects to ensure uninterrupted revenue.'
      },
      {
        question: 'Will our e-commerce store be optimized for mobile shoppers?',
        answer: 'Over 75% of online purchases happen on smartphones. We design mobile-first with sticky Add-to-Cart buttons, thumb-friendly navigation, and sub-second touch response.'
      }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'iqra-society',
    title: 'Iqra Society: Islamic Online Education & Da\'wah Platform',
    client: 'Iqra Society',
    category: 'education',
    categoryLabel: 'Education Platform / Islamic Learning',
    liveUrl: 'https://iqra-society.com/',
    heroImage: iqraHeroImg,
    galleryImages: [
      'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532012164546-f432f2e3777a?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Comprehensive Islamic online courses, digital library, and scholar-guided learning platform.',
    summary: 'Iqra Society is an Islamic education and Da\'wah platform engineered by Basan Tech using React.js and Node.js. The platform delivers structured online Islamic courses, a comprehensive digital library, scholar-guided learning modules, research publications, and interactive student learning resources on a modern responsive web architecture.',
    problemObjective: 'Provide an authentic, accessible, and structured digital platform for global students to access Islamic courses, classical literature, Quranic studies, Arabic learning materials, and research articles with a fast, mobile-friendly experience.',
    whatWeBuilt: 'Basan Tech architected and engineered the full-stack web platform using React.js and Node.js. We built interactive learning dashboards, digital library search and reading catalogs, scholar lecture repositories, article and publication indexing, and a fully responsive learning experience.',
    challenge: 'Organizing diverse educational resources—ranging from foundational courses to specialized scholarly articles and multi-volume digital books—into an intuitive, fast-loading, and mobile-optimized digital experience.',
    solution: 'Developed a performant, component-driven React.js web application powered by a Node.js backend. Implemented clear navigation hierarchies, categorized course catalogs, digital library filters, and responsive typography tailored for multilingual reading.',
    keyFeatures: [
      'Islamic online courses with structured learning paths',
      'Digital Islamic library with categorized books & publications',
      'Quran, Hadith, Arabic, and Islamic learning resources',
      'Scholar-guided learning modules and research articles',
      'Interactive student learning experience across devices',
      'Fast, lightweight, and modern responsive web platform'
    ],
    architecture: [
      'React.js Single-Page Application with optimized client routing',
      'Node.js backend service handling content catalogs & API requests',
      'Responsive UI system tailored for multi-device reading comfort',
      'SEO-optimized content structure for educational discoverability'
    ],
    results: [
      {
        metric: '100% Responsive',
        label: 'Multi-Device Learning',
        description: 'Optimized reading comfort and course engagement across all mobile and desktop screens.'
      },
      {
        metric: '< 1.2s',
        label: 'Catalog Load Time',
        description: 'Ultra-fast page loads for digital books, publications, and multimedia modules.'
      },
      {
        metric: 'Global Reach',
        label: 'Worldwide Access',
        description: 'Reliable high-availability digital architecture accessible to students worldwide.'
      }
    ],
    techStack: ['React.js', 'Node.js', 'Tailwind CSS', 'REST APIs'],
    duration: 'Production Deployed',
    year: '2024',
    featured: true,
    badge: 'Education & Da\'wah'
  },
  {
    id: 'lurnixe-marketplace',
    title: 'Lurnixe: Multi-Vendor E-Commerce Marketplace & Mobile App',
    client: 'Lurnixe',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce / Multi-Vendor Marketplace',
    liveUrl: 'https://www.lurnixe.com/',
    heroImage: lurnixeHeroImg,
    galleryImages: [
      'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Full-scale multi-vendor marketplace with seller portals, order workflows, and companion mobile app.',
    summary: 'Lurnixe is a complete multi-vendor e-commerce marketplace platform. Basan Tech built the full-featured website and is developing the companion mobile application planned for Play Store availability. The platform empowers sellers with dedicated dashboards and offers customers seamless product browsing, shopping carts, and order management.',
    problemObjective: 'Create an end-to-end multi-vendor commerce ecosystem that allows independent sellers to manage inventories and fulfill orders, while providing buyers with a smooth, responsive browsing and checkout experience across web and mobile.',
    whatWeBuilt: 'Basan Tech engineered the responsive multi-vendor web platform including seller onboarding, merchant dashboards, unified product management, shopping cart, customer accounts, and order tracking workflows. Basan Tech is also engineering the mobile application for Android/Play Store.',
    challenge: 'Designing a scalable architecture capable of handling multi-merchant product catalogs, distinct seller dashboards, customer shopping carts, and synchronized state between web and mobile interfaces.',
    solution: 'Engineered a modular web application with dedicated role-based portals for sellers, customers, and administrators. Built clean REST APIs for catalog management, shopping cart persistence, and mobile application synchronization.',
    keyFeatures: [
      'Multi-vendor marketplace supporting multiple merchant stores',
      'Seller accounts with dedicated merchant dashboard & analytics',
      'Real-time product management, SKU tracking, and catalog controls',
      'Customer account portal with order history & tracking',
      'Intuitive shopping cart and seamless multi-item checkout',
      'Category-based product browsing, filters, and search',
      'Comprehensive e-commerce management & admin system',
      'Responsive web experience and companion mobile application (planned for Play Store)'
    ],
    architecture: [
      'Responsive React.js e-commerce frontend architecture',
      'Node.js multi-vendor backend APIs and order orchestration',
      'Segregated merchant & customer authentication workflows',
      'Companion mobile app architecture for Android / Google Play Store'
    ],
    results: [
      {
        metric: 'Multi-Vendor',
        label: 'Merchant Ecosystem',
        description: 'Independent seller portals with inventory controls and unified buyer checkout.'
      },
      {
        metric: 'Web + Mobile',
        label: 'Omnichannel Experience',
        description: 'Full-featured web commerce plus companion Android mobile application in active delivery.'
      },
      {
        metric: 'Instant Sync',
        label: 'Cart & Inventory',
        description: 'Real-time SKU availability and dynamic multi-item shopping cart workflows.'
      }
    ],
    techStack: ['React.js', 'Node.js', 'Tailwind CSS', 'Mobile App'],
    duration: 'Web Live • Mobile in Development',
    year: '2024',
    featured: true,
    badge: 'Multi-Vendor & Mobile'
  },
  {
    id: 'lurnixe-health',
    title: 'Lurnixe Health: Digital Family Health Card & Healthcare Platform',
    client: 'Lurnixe Health',
    category: 'healthcare',
    categoryLabel: 'Healthcare Technology / Digital Health Platform',
    liveUrl: 'https://lurnixehealth.com/',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Digital Family Health Card with QR profile verification, medical records, and doctor booking.',
    summary: 'Lurnixe Health is a digital healthcare platform engineered to modernize family health management. The platform provides a unified Digital Family Health Card, QR-based rapid profile verification for emergency access, secure digital health records, doctor and clinic connectivity, and streamlined appointment booking.',
    problemObjective: 'Streamline family healthcare access by digitizing health profiles, enabling rapid emergency access to critical health data via QR verification, and connecting patients directly with healthcare providers and clinics.',
    whatWeBuilt: 'Basan Tech designed and developed the digital healthcare platform featuring Digital Family Health Card issuance, QR code generation and verification workflows, digital medical records management, clinic/doctor appointment booking, and admin management tools.',
    challenge: 'Ensuring rapid, secure access to essential health details during emergency consultations while maintaining data confidentiality and providing an easy interface for multi-member family health records.',
    solution: 'Implemented QR-based profile verification for instant access to critical health summaries. Designed modular health profile managers and intuitive appointment booking systems for seamless doctor-patient interactions.',
    keyFeatures: [
      'Digital Family Health Card consolidating family medical profiles',
      'QR-based health profile verification for rapid clinical & emergency access',
      'Digital health records repository for prescriptions & reports',
      'Emergency medical information and critical contact availability',
      'Doctor and clinic connectivity with direct appointment booking',
      'Health profile management with multi-member support',
      'Secure medical information handling and privacy architecture',
      'Admin and clinic management capabilities'
    ],
    architecture: [
      'Modern web frontend optimized for rapid QR scanning and mobile access',
      'Node.js healthcare API services with encrypted data handling',
      'Digital Health Card QR generation and instant verification pipeline',
      'Clinic and doctor appointment scheduling system'
    ],
    results: [
      {
        metric: '< 2 sec',
        label: 'QR Emergency Access',
        description: 'Instant scan verification for critical medical background in clinical environments.'
      },
      {
        metric: 'Family Unified',
        label: 'Multi-Member Card',
        description: 'Single digital family health card managing all dependents and medical histories.'
      },
      {
        metric: '100% Encrypted',
        label: 'Medical Data Privacy',
        description: 'Strict security boundaries protecting sensitive personal health documents.'
      }
    ],
    techStack: ['React.js', 'Node.js', 'QR Engine', 'Tailwind CSS'],
    duration: 'Production Deployed',
    year: '2024',
    featured: true,
    badge: 'Digital Health & QR'
  },
  {
    id: 'kecf-india',
    title: 'KECF India: Education, Youth & Social Impact Platform',
    client: 'KECF India',
    category: 'ngo',
    categoryLabel: 'NGO / Education & Social Impact Platform',
    liveUrl: 'https://kecfindia.org/',
    heroImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Non-profit digital hub empowering digital education, youth sports, health camps, and community support.',
    summary: 'KECF India (Khidmat-e-Khalq Educational & Charitable Foundation) is an NGO dedicated to social impact, education, and community empowerment. Basan Tech engineered a professional digital platform showcasing their work across digital education, sports and youth development, health and wellbeing, mentorship, skill and livelihood development, volunteer engagement, and transparent online donations.',
    problemObjective: 'Provide KECF India with a modern, transparent, and engaging web presence to mobilize community support, facilitate donations, attract volunteers, and showcase active education and youth development programs.',
    whatWeBuilt: 'Basan Tech delivered a clean, mobile-responsive web platform featuring comprehensive initiative overviews, online donation pathways, volunteer registration portals, youth mentorship highlights, and community impact showcases.',
    challenge: 'Presenting a multi-faceted non-profit organization\'s diverse initiatives (education, sports, health, livelihoods) in an inspiring, clean, and easily navigable structure that encourages donor and volunteer participation.',
    solution: 'Structured clear programmatic pillars with dedicated sections for Digital Education, Youth Sports, Healthcare Outreach, Mentorship, and Skill Training. Integrated intuitive donation and volunteer onboarding pathways.',
    keyFeatures: [
      'Digital Education initiative showcases and student scholarship support',
      'Sports & Youth Development program hubs',
      'Health & Wellbeing medical camp and healthcare outreach information',
      'Youth mentorship and skill/livelihood training initiatives',
      'Direct online donation and contribution processing',
      'Volunteer onboarding and community engagement workflows',
      'Community impact galleries and activity updates',
      'Fully responsive, mobile-first accessible design'
    ],
    architecture: [
      'Responsive React.js web architecture with high accessibility',
      'Node.js backend supporting volunteer inquiries and programmatic updates',
      'Secure donation & contribution integration pathways',
      'Lightweight, high-speed mobile performance for broad community reach'
    ],
    results: [
      {
        metric: '5+ Pillars',
        label: 'Community Programs',
        description: 'Comprehensive coverage of digital education, youth sports, health, and livelihoods.'
      },
      {
        metric: 'Zero Barrier',
        label: 'Mobile Giving',
        description: 'Seamless online contribution and volunteer onboarding for community supporters.'
      },
      {
        metric: '100% Transparent',
        label: 'Impact Visibility',
        description: 'Clear initiative reports, event photographic logs, and program updates.'
      }
    ],
    techStack: ['React.js', 'Node.js', 'Donations API', 'Tailwind CSS'],
    duration: 'Production Deployed',
    year: '2024',
    featured: true,
    badge: 'NGO & Social Impact'
  },
  {
    id: 'aiciiim-incubation',
    title: 'AIC-IIIM Bio-Innovation Foundation: Startup Incubation Portal',
    client: 'AIC-IIIM (CSIR-IIIM)',
    category: 'incubation',
    categoryLabel: 'Innovation & Bio-Incubation Portal',
    liveUrl: 'https://aiciiim.in/',
    heroImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Bio-innovation incubation portal, startup mentorship, hackathons, and skill development programs.',
    summary: 'AIC-IIIM (Atal Incubation Centre - CSIR-IIIM Bio-Innovation Foundation) is a premier incubator established under the Atal Innovation Mission (NITI Aayog) to foster bio-entrepreneurship, startup creation, and technological innovation. Basan Tech delivered the official web portal showcasing incubator facilities, startup onboarding, skill development courses, hackathon challenges, and research commercialization.',
    problemObjective: 'Provide an authoritative, accessible institutional web portal for startups, researchers, and innovators in Jammu & Kashmir and across India to connect with incubation resources, apply for startup MoUs, participate in hackathons, and access specialized technical skill training.',
    whatWeBuilt: 'Basan Tech engineered the official AIC-IIIM web portal with dedicated sections for incubator facilities, startup incubation programs, skill training courses (such as leather processing, aroma, and food technology), hackathon competition registration, news announcements, and institutional linkages.',
    challenge: 'Organizing scientific research infrastructure, incubation guidelines, government initiative details (Atal Innovation Mission, CSIR-IIIM), and startup application channels into a polished, modern, and user-friendly digital experience.',
    solution: 'Designed an institutional web architecture with clear navigation for innovators and researchers. Implemented dedicated landing modules for skill development programs, hackathon registrations, startup incubatee showcases, and institutional updates.',
    keyFeatures: [
      'Startup incubation program portal and mentorship workflows',
      'Bio-innovation, natural products, and biotechnology entrepreneurship focus',
      'Specialized skill development and training program showcases',
      'Hackathon and innovation challenge application portals',
      'Startup MoU announcements and incubatee directory',
      'Research laboratory facilities and technical equipment guide',
      'Institutional news, government initiatives, and event updates',
      'Modern, mobile-responsive layout meeting institutional standards'
    ],
    architecture: [
      'Responsive React.js frontend with institutional typography and hierarchy',
      'Node.js backend for program listings, news feeds, and inquiry routing',
      'Secure modular forms for startup onboarding and event registrations',
      'Optimized performance with fast loading times across devices'
    ],
    results: [
      {
        metric: 'Incubation Hub',
        label: 'AIM / NITI Aayog',
        description: 'Official digital gateway supporting bio-entrepreneurs and technical researchers.'
      },
      {
        metric: 'End-to-End',
        label: 'Program Onboarding',
        description: 'Integrated application channels for incubation, training courses, and hackathons.'
      },
      {
        metric: 'High Authority',
        label: 'Institutional Standards',
        description: 'Compliant institutional structure showcasing CSIR-IIIM labs and facilities.'
      }
    ],
    techStack: ['React.js', 'Node.js', 'Tailwind CSS', 'REST APIs'],
    duration: 'Production Deployed',
    year: '2024',
    featured: true,
    badge: 'Incubation & Research'
  }
];

export const AGENCY_TEAM: TeamMember[] = [
  {
    name: 'Mejban Basan',
    role: 'Founder & Lead Software Engineer',
    department: 'Leadership & Architecture',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Founder of BasanTech. Full-stack software engineer and systems architect specializing in high-performance web applications, mobile platforms, custom software, and scalable digital products.',
    skills: ['System Architecture', 'Full-Stack Web & Mobile', 'Custom Software', 'Cloud Infrastructure'],
    github: 'https://github.com/mejbanbasan'
  },
  {
    name: 'Victoria Vance',
    role: 'Head of Product & UX Design',
    department: 'Design & Strategy',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Award-winning product designer dedicated to crafting friction-free interfaces that balance aesthetic delight with maximum conversion.',
    skills: ['Design Systems', 'User Research', 'Figma', 'Micro-Interactions']
  },
  {
    name: 'Darius Thorne',
    role: 'Principal Mobile & Desktop Engineer',
    department: 'Engineering',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Specialist in low-latency systems, React Native, Rust/Tauri, and cross-platform native hardware device integrations.',
    skills: ['React Native', 'Rust / Tauri', 'Flutter', 'Hardware Protocols']
  },
  {
    name: 'Amara Patel',
    role: 'Director of Growth & Social Strategy',
    department: 'Marketing & Media',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Pioneering viral growth campaigns, performance marketing, and high-impact media production for Fortune 500 brands and high-growth scaleups.',
    skills: ['Omnichannel Growth', 'Performance Ads', 'Brand Strategy', 'Content Production']
  },
  {
    name: 'Liam Zhang',
    role: 'Lead Cloud & DevOps Architect',
    department: 'Infrastructure & Security',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Kubernetes certified specialist ensuring 99.99% uptime, zero-trust security postures, and automated multi-cloud deployment pipelines.',
    skills: ['AWS / GCP', 'Kubernetes', 'CI/CD Pipelines', 'SOC2 / GDPR Compliance']
  },
  {
    name: 'Sophia Lindqvist',
    role: 'Senior E-Commerce Solutions Architect',
    department: 'E-Commerce Engineering',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    bio: 'Headless commerce specialist optimizing Shopify Plus and bespoke checkout funnels for global retail powerhouses.',
    skills: ['Shopify Plus', 'Headless Commerce', 'Checkout CRO', 'Payment APIs']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [];

export interface ClientCommitment {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const CLIENT_COMMITMENTS: ClientCommitment[] = [
  {
    id: 'commitment-1',
    title: 'Direct Builder Collaboration',
    description: 'You communicate directly with the engineers and architects writing your code—no middle layers or misaligned handoffs.',
    icon: 'Users'
  },
  {
    id: 'commitment-2',
    title: '100% Client-Owned Source Code',
    description: 'All GitHub repositories, architectural diagrams, cloud setups, and database assets belong exclusively to you from day one.',
    icon: 'ShieldCheck'
  },
  {
    id: 'commitment-3',
    title: 'Transparent Milestone Delivery',
    description: 'Progress is tracked through regular staging demos, clear pull requests, and predictable sprint milestones.',
    icon: 'CheckCircle2'
  },
  {
    id: 'commitment-4',
    title: '30-Day Post-Launch Warranty',
    description: 'Every project includes dedicated post-deployment support, performance auditing, and hyper-care at no additional cost.',
    icon: 'Sparkles'
  }
];

export const AGENCY_FAQS = [
  {
    category: 'General & Engagement',
    question: 'How do we get started working with Basan Tech?',
    answer: 'Getting started is straightforward: schedule a discovery consultation or submit your project details through our direct inquiry form. We will review your goals, formulate a technical blueprint, and provide a fixed-scope proposal and timeline within 48 hours.'
  },
  {
    category: 'General & Engagement',
    question: 'What engagement models do you offer?',
    answer: 'We offer three flexible models: (1) Fixed-Price Milestone Projects (ideal for well-defined scopes and MVPs), (2) Dedicated Agile Engineering Teams (monthly sprint squads for continuous product scaling), and (3) Monthly Growth Retainers (for ongoing Social Media, CRO, and maintenance).'
  },
  {
    category: 'Technology & Quality',
    question: 'How does Basan Tech ensure software quality and security?',
    answer: 'Every line of code undergoes mandatory peer reviews, automated unit testing, end-to-end integration tests with Playwright/Cypress, static security analysis, and SOC2/GDPR compliance checks before staging or production rollout.'
  },
  {
    category: 'Technology & Quality',
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes! Every project includes a 30-day comprehensive warranty period with dedicated hyper-care. Afterwards, we offer flexible SLA support packages covering 24/7 uptime monitoring, server security updates, feature expansions, and emergency on-call response.'
  }
];
