import { Service, CaseStudy, TeamMember, Testimonial } from '../types';
import iqraHeroImg from '../assets/images/iqra_islamic_madrasa_1787989336430.webp';
import lurnixeHeroImg from '../assets/images/lurnixe_orange_white_1787989665999.webp';
import cityCareClinicHeroImg from '../assets/images/city_care_clinic_crm.webp';
import { SERVICES_DATA } from './servicesData';

export { SERVICES_DATA };

export interface AgencyStatItem {
  value: string;
  numericValue?: number;
  label: string;
  suffix?: string;
  desc?: string;
}

export const AGENCY_STATS: AgencyStatItem[] = [
  { value: '6', numericValue: 6, label: 'Client Platforms Built', suffix: '', desc: 'Live in production' },
  { value: '6', numericValue: 6, label: 'Core Services', suffix: '', desc: 'Web, Mobile, AI & Software' },
  { value: '14+', numericValue: 14, label: 'Technologies Mastered', suffix: '+', desc: 'Modern full-stack ecosystems' },
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
    name: 'City Care Clinic',
    category: 'Healthcare CRM Platform',
    url: 'https://crm.drmanzooreyecare.com/',
    caseStudyId: 'city-care-clinic',
    tagline: 'Multi-doctor clinic management CRM & real-time patient accounting dashboard'
  },
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

export const TRUSTED_BRANDS = VERIFIED_CLIENT_PLATFORMS;

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'iqra-society',
    title: 'Iqra Society: Islamic Online Education & Da\'wah Platform',
    client: 'Iqra Society',
    category: 'education',
    categoryLabel: 'Online Learning Platform',
    liveUrl: 'https://iqra-society.com/',
    heroImage: iqraHeroImg,
    imageAlt: 'Iqra Society — Online Learning & Islamic Research Platform engineered by Basan Tech',
    galleryImages: [
      'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532012164546-f432f2e3777a?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Structured digital curriculum, audio-visual lecture archives, and multilingual reader for global Islamic studies.',
    summary: 'Built for over 1,200 active international students, Iqra Society delivers indexed Islamic course curricula, categorized research literature, and high-bitrate scholar audio archives with instant sub-second search.',
    problemObjective: 'Provide an authentic, accessible, and structured digital platform for global students to access Islamic courses, classical literature, Quranic studies, Arabic learning materials, and research articles with a fast, mobile-friendly experience.',
    whatWeBuilt: 'An interactive learning portal with multilingual reader typography, searchable multi-volume literature archives, and self-paced student course modules.',
    challenge: 'Delivering seamless reading performance across heavy Arabic and English typography, multi-volume books, and high-volume student concurrent streams.',
    solution: 'Architected a modular React application powered by Node.js, utilizing indexed database caching and custom RTL typography components for fast text rendering.',
    resultsMetrics: [
      {
        label: 'Responsive Experience',
        value: '100%',
        change: 'Multi-Device'
      },
      {
        label: 'Catalog Load Speed',
        value: '< 1.2s',
        change: 'Fast'
      }
    ],
    techStack: ['React.js', 'Node.js', 'REST APIs', 'Tailwind CSS', 'AWS S3'],
    deliverables: ['Responsive Web App', 'Digital Library Catalog', 'Course Modules', 'Scholar Portals'],
    year: '2026',
    featured: true,
    badge: 'Education & Academic'
  },
  {
    id: 'lurnixe-marketplace',
    title: 'Lurnixe: Multi-Vendor E-Commerce Marketplace & Mobile App',
    client: 'Lurnixe',
    category: 'ecommerce',
    categoryLabel: 'Multi-Vendor Marketplace',
    liveUrl: 'https://www.lurnixe.com/',
    heroImage: lurnixeHeroImg,
    imageAlt: 'Lurnixe — Multi-Vendor E-Commerce Marketplace & Mobile App engineered by Basan Tech',
    galleryImages: [
      'https://images.unsplash.com/photo-1556742049-0a67e5574f73?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'High-conversion multi-merchant storefront with unified vendor inventory and mobile app checkout.',
    summary: 'An end-to-end multi-merchant retail marketplace engineered to eliminate cart abandonment through sub-15-second checkouts, instant UPI payments, and synchronized merchant stock management.',
    problemObjective: 'Create an end-to-end multi-vendor commerce ecosystem that allows independent sellers to manage inventories and fulfill orders, while providing buyers with a smooth, responsive browsing and checkout experience across web and mobile.',
    whatWeBuilt: 'Multi-vendor seller portals with real-time stock dashboards, lightning-fast product filtering, and a synchronized React Native mobile application for Android.',
    challenge: 'Syncing fluctuating product inventory across dozens of independent sellers while keeping web and mobile checkout workflows instantaneous.',
    solution: 'Implemented high-speed Redis caching for merchant catalogs, asynchronous inventory reservation queues, and instant payment webhooks.',
    resultsMetrics: [
      {
        label: 'Merchant Architecture',
        value: 'Multi-Vendor',
        change: 'Scalable'
      },
      {
        label: 'Platform Reach',
        value: 'Web + Mobile',
        change: 'Omnichannel'
      }
    ],
    techStack: ['Next.js', 'React Native', 'Redis', 'Node.js', 'Tailwind CSS'],
    deliverables: ['Multi-Vendor Storefront', 'Merchant Portals', 'Cart & Checkout', 'Mobile App Architecture'],
    year: '2026',
    featured: true,
    badge: 'E-Commerce & Mobile'
  },
  {
    id: 'city-care-clinic',
    title: 'City Care Clinic: Healthcare CRM & Practice Management Dashboard',
    client: 'Dr. Manzoor Eye Care',
    category: 'healthcare',
    categoryLabel: 'Healthcare CRM Platform',
    liveUrl: 'https://crm.drmanzooreyecare.com/',
    heroImage: cityCareClinicHeroImg,
    imageAlt: 'City Care Clinic — Healthcare CRM & Clinic Management Dashboard built by Basan Tech',
    galleryImages: [
      cityCareClinicHeroImg,
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Centralized clinic management dashboard with multi-doctor scheduling, live revenue tracking, and automated patient follow-ups.',
    summary: 'Replacing paper registers at Dr. Manzoor Eye Care, this clinical CRM unifies daily patient intake, multi-doctor calendars, and automated payment reconciliations across cash, UPI, and Razorpay.',
    problemObjective: 'Dr. Manzoor Eye Care needed a secure, enterprise-grade clinical CRM to eliminate manual paperwork and spreadsheet records. The system needed to manage patient records, coordinate appointments across 5+ active doctors, provide instant quick actions (register patient, book appointment, record payment), and automatically reconcile payments across Razorpay, UPI, and cash.',
    whatWeBuilt: 'A high-throughput administrative CRM built with Laravel 11 featuring 7-day appointment trend charts, quick patient onboarding, and automated follow-up communication workflows.',
    challenge: 'Handling high daily patient throughput across multiple doctors while maintaining sub-second dashboard query speeds and zero payment reconciliation errors.',
    solution: 'Leveraged Laravel 11 modular architecture, Eloquent ORM with optimized database indexing, and queued background notifications for patient reminders and daily revenue aggregation.',
    keyFeatures: [
      'Laravel 11 Architecture with Eloquent ORM & Role-Based Access Control',
      'Digital Patient Profiles & Medical History Management',
      'Multi-Doctor Appointment Scheduling & 7-Day Trend Analytics',
      'Multi-Channel Payment Tracking & Reconciliation (Razorpay, UPI, Cash)',
      'Automated Patient Follow-up Scheduling & Communication Engine',
      'Quick Action Workflows: Register Patient, Book Slot & Record Payment',
      'Comprehensive Clinic Performance & Revenue Reporting'
    ],
    architecture: [
      'Latest Laravel 11 MVC Core with PHP 8.3 & MySQL Database',
      'Tailwind CSS Responsive Dashboard UI for Desktop & Reception Terminals',
      'Razorpay Webhook Integration, UPI QR & Cash Transaction Accounting',
      'Automated Database Migrations, Seeders & Scheduled Task Queues'
    ],
    resultsMetrics: [
      {
        label: 'Clinical Workflow',
        value: '100% Digital',
        change: 'Paperless'
      },
      {
        label: 'Doctor Coordination',
        value: '5+ Doctors',
        change: 'Unified'
      }
    ],
    techStack: ['Laravel 11', 'PHP 8.3', 'MySQL', 'Tailwind CSS', 'Razorpay Webhooks'],
    deliverables: ['Laravel 11 CRM System', 'Doctor Appointment Engine', 'Multi-Method Payment Tracker', 'Patient Records Hub'],
    year: '2026',
    featured: true,
    badge: 'Clinic Management CRM'
  },
  {
    id: 'lurnixe-health',
    title: 'Lurnixe Health: Digital Family Health Card & Healthcare Platform',
    client: 'Lurnixe Health',
    category: 'healthcare',
    categoryLabel: 'Digital Health & Family Care',
    liveUrl: 'https://lurnixehealth.com/',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Lurnixe Health — Digital Family Health Card & Patient Record Portal built by Basan Tech',
    galleryImages: [
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Instant QR-enabled emergency health cards, digitized prescriptions, and unified family health management.',
    summary: 'Designed for rapid emergency response, this portal generates secure QR-encoded Family Health Cards enabling emergency responders and clinics to access vital medical history in under 2 seconds.',
    problemObjective: 'Streamline family healthcare access by digitizing health profiles, enabling rapid emergency access to critical health data via QR verification, and connecting patients directly with healthcare providers and clinics.',
    whatWeBuilt: 'A cryptographic QR profile verification system, encrypted family health record vaults, and direct doctor appointment booking interfaces.',
    challenge: 'Guaranteeing instantaneous access to emergency medical summaries from smartphone cameras while keeping sensitive patient data strictly private.',
    solution: 'Engineered dynamic tokenized QR codes with signed payload verification, decoupled from private health records until authenticated by verified clinical personnel.',
    resultsMetrics: [
      {
        label: 'Emergency Scan Access',
        value: '< 2 sec',
        change: 'Instant QR'
      },
      {
        label: 'Family Support',
        value: 'Multi-Member',
        change: 'Unified'
      }
    ],
    techStack: ['React.js', 'Node.js', 'QR Code Engine', 'PostgreSQL', 'Tailwind CSS'],
    deliverables: ['Digital Health Card', 'QR Profile Verification', 'Doctor Scheduling', 'Medical Records Hub'],
    year: '2026',
    featured: true,
    badge: 'Emergency Health & QR'
  },
  {
    id: 'kecf-india',
    title: 'KECF India: Education, Youth & Social Impact Platform',
    client: 'KECF India',
    category: 'ngo',
    categoryLabel: 'Non-Profit & Community Hub',
    liveUrl: 'https://kecfindia.org/',
    heroImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'KECF India — Non-Profit Organization & Social Impact Platform built by Basan Tech',
    galleryImages: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Transparent donor tracking, grassroots initiative showcases, and volunteer mobilization for social welfare.',
    summary: 'Mobilizing resources across education, youth sports, and medical aid, this platform provides clear program transparency and zero-friction online donation pathways for community donors.',
    problemObjective: 'Provide KECF India with a modern, transparent, and engaging web presence to mobilize community support, facilitate donations, attract volunteers, and showcase active education and youth development programs.',
    whatWeBuilt: 'A storytelling-driven portal with automated donation receipts, dynamic community impact indicators, and volunteer onboarding workflows.',
    challenge: 'Communicating disparate social programs—from child literacy to sports academies—clearly while maintaining absolute transparency for individual and institutional donors.',
    solution: 'Structured clear programmatic pillars with live fund allocation meters, multilingual program guides, and an automated payment gateway generating instant tax receipts.',
    resultsMetrics: [
      {
        label: 'Program Pillars',
        value: '5+ Core',
        change: 'Active'
      },
      {
        label: 'Donor Engagement',
        value: '100%',
        change: 'Transparent'
      }
    ],
    techStack: ['React.js', 'Node.js', 'Donations API', 'Tailwind CSS', 'Cloudflare'],
    deliverables: ['NGO Web Portal', 'Volunteer Registration', 'Donation System', 'Program Showcase'],
    year: '2026',
    featured: true,
    badge: 'Social Impact & NGO'
  },
  {
    id: 'aiciiim-incubation',
    title: 'AIC-IIIM Bio-Innovation Foundation: Startup Incubation Portal',
    client: 'AIC-IIIM (CSIR-IIIM)',
    category: 'incubation',
    categoryLabel: 'Bio-Innovation Incubation Portal',
    liveUrl: 'https://aiciiim.in/',
    heroImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'AIC-IIIM — CSIR Bio-Innovation Incubation & Startup Portal built by Basan Tech',
    galleryImages: [
      'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Institutional deep-tech portal for CSIR-IIIM startup incubation, national hackathons, and lab access.',
    summary: 'Backed by NITI Aayog (Atal Innovation Mission), this institutional portal streamlines government incubation applications, specialized biotech lab bookings, and national hackathon registrations.',
    problemObjective: 'Provide an authoritative, accessible institutional web portal for startups, researchers, and innovators to connect with incubation resources, apply for startup MoUs, participate in hackathons, and access specialized technical skill training.',
    whatWeBuilt: 'An enterprise institutional gateway featuring multi-stage startup application funnels, facility booking systems, and research commercialization directories.',
    challenge: 'Transforming rigorous scientific infrastructure guidelines and government compliance workflows into an accessible, intuitive digital onboarding portal for early-stage entrepreneurs.',
    solution: 'Developed a streamlined institutional portal featuring dynamic incubation milestone trackers, lab equipment reservation calendars, and digital hackathon evaluation rubrics.',
    resultsMetrics: [
      {
        label: 'Institutional Reach',
        value: 'AIM / NITI Aayog',
        change: 'Approved'
      },
      {
        label: 'Startup Applications',
        value: 'Streamlined',
        change: 'Online'
      }
    ],
    techStack: ['React.js', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL'],
    deliverables: ['Incubation Portal', 'Startup Application Funnel', 'Course Catalog', 'Facility Directory'],
    year: '2026',
    featured: true,
    badge: 'Incubation & Deep-Tech'
  }
];

export const AGENCY_TEAM: TeamMember[] = [
  {
    name: 'Basan',
    role: 'Founder',
    department: 'Leadership & Architecture',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Basan founded Basan Tech to build clean, reliable digital solutions for businesses looking to grow online. He helps startups and growing businesses launch modern websites, web applications, and custom software with a focus on quality and long-term value.',
    skills: ['Web & Software Development', 'Business-focused Digital Solutions', 'Scalable, Modern Technology'],
    linkedin: 'https://www.linkedin.com/in/mejbanbasan/'
  },
  {
    name: 'Ahnaf Madhiya',
    role: 'Leadership',
    department: 'Client & Delivery Management',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: "Ahnaf helps shape Basan Tech's project execution and client experience, making sure every website is delivered with attention to detail and technical quality. He specializes in WordPress development and helps clients bring their vision to life online.",
    skills: ['WordPress Development', 'Client Project & Delivery Management', 'Quality-focused Execution'],
    linkedin: 'https://www.linkedin.com/in/ahnafmadhiya/'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-lurnixe',
    clientName: 'Lurnixe',
    clientTitle: 'Founder & CEO',
    avatar: 'LX',
    rating: 5,
    serviceType: 'Multi-Vendor Marketplace & Mobile App',
    quote: 'Our previous storefront struggled with cart drop-offs and slow mobile checkout. Basan Tech re-engineered our platform with instant UPI and card gateways plus real-time inventory sync. Our mobile checkout conversion rate increased noticeably within weeks.',
    date: 'August 2026'
  },
  {
    id: 'test-iqra',
    clientName: 'Iqra Society',
    clientTitle: 'Platform Administrator',
    avatar: 'IS',
    rating: 5,
    serviceType: 'Education & Da\'wah Learning Platform',
    quote: 'Basan Tech engineered our digital learning platform from the ground up. Their communication across weekly sprints was crystal clear, the student-parent dashboard is lightning-fast, and their post-launch support helped us onboard over 1,200 active learners with zero downtime.',
    date: 'July 2026'
  },
  {
    id: 'test-health',
    clientName: 'Lurnixe Health',
    clientTitle: 'Product & Clinical Operations Lead',
    avatar: 'LH',
    rating: 5,
    serviceType: 'Digital Health Card & Patient Portal',
    quote: 'Data privacy and quick access to records were non-negotiable for our clinic operations. Basan Tech delivered a dependable, well-documented architecture with complete code handover and zero vendor lock-in. Their 30-day warranty support was top tier.',
    date: 'June 2026'
  },
  {
    id: 'test-kecf',
    clientName: 'KECF India',
    clientTitle: 'Executive Director',
    avatar: 'KC',
    rating: 5,
    serviceType: 'Institutional & NGO Web Platform',
    quote: 'Basan Tech treated our institutional web portal with immense dedication. The responsive layout, transparent donation tracking, and bilingual support exceeded our expectations. Even months after launch, their team is always available whenever we need quick assistance.',
    date: 'May 2026'
  },
  {
    id: 'test-city-care',
    clientName: 'Dr. Manzoor Eye Care',
    clientTitle: 'Clinical Operations Lead',
    avatar: 'DM',
    rating: 5,
    serviceType: 'Laravel 11 Clinic CRM & Management Dashboard',
    quote: 'Basan Tech engineered our City Care Clinic CRM using the latest Laravel framework. Appointment scheduling, patient tracking across multiple doctors, and daily payment reconciliation work flawlessly with sub-second response times.',
    date: 'October 2026'
  },
  {
    id: 'test-aiciiim',
    clientName: 'AIC-IIIM',
    clientTitle: 'Incubation Program Head',
    avatar: 'AI',
    rating: 5,
    serviceType: 'Startup Incubation & Hackathon Portal',
    quote: 'Basan Tech delivered our official incubator portal under Atal Innovation Mission (NITI Aayog). The application workflows, facility management, and hackathon registration portals operate seamlessly for our startups and researchers.',
    date: 'April 2026'
  }
];

export interface ClientCommitment {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const CLIENT_COMMITMENTS: ClientCommitment[] = [
  {
    id: 'commitment-1',
    title: 'Direct Technical Collaboration',
    description: 'You communicate directly with the engineers and architects building your software—no middle layers or communication gaps.',
    icon: 'Users'
  },
  {
    id: 'commitment-2',
    title: '100% Client-Owned Source Code',
    description: 'All GitHub repositories, architectural diagrams, cloud setups, and database assets belong exclusively to you upon delivery.',
    icon: 'ShieldCheck'
  },
  {
    id: 'commitment-3',
    title: 'Predictable Milestone Delivery',
    description: 'Progress is tracked through regular staging demos, transparent pull requests, and predictable sprint milestones.',
    icon: 'CheckCircle2'
  },
  {
    id: 'commitment-4',
    title: '30-Day Post-Launch Warranty',
    description: 'Every project includes dedicated post-deployment support, performance monitoring, and warranty care at no extra charge.',
    icon: 'Sparkles'
  }
];

export const AGENCY_FAQS = [
  {
    category: 'General & Engagement',
    question: 'How do we get started working with Basan Tech?',
    answer: 'Getting started is simple: submit your project details through our contact form or reach out directly. We will review your goals, formulate a clear technical blueprint, and provide a fixed proposal and timeline within 24–48 hours.'
  },
  {
    category: 'General & Engagement',
    question: 'What engagement models do you offer?',
    answer: 'We offer flexible engagement models: (1) Fixed-Scope Milestone Projects (best for well-defined websites, apps, and MVPs), (2) Dedicated Monthly Sprints (for ongoing software and product scaling), and (3) Strategic Maintenance & Support Retainers.'
  },
  {
    category: 'Technology & Quality',
    question: 'How does Basan Tech ensure code quality and security?',
    answer: 'Every project follows modern clean code principles, strict TypeScript type-checking, responsive design verification across viewports, and OWASP security practices before deployment.'
  },
  {
    category: 'Technology & Quality',
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes! Every project includes a 30-day comprehensive warranty period. We also offer flexible SLA maintenance packages covering uptime monitoring, server security updates, and ongoing feature rollouts.'
  }
];
