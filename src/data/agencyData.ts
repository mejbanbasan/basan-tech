import { Service, CaseStudy, TeamMember, Testimonial } from '../types';
import iqraHeroImg from '../assets/images/iqra_islamic_madrasa_1787989336430.jpg';
import lurnixeHeroImg from '../assets/images/lurnixe_orange_white_1787989665999.jpg';
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
  { value: '5', numericValue: 5, label: 'Client Platforms Built', suffix: '', desc: 'Live in production' },
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
    techStack: ['React.js', 'Node.js', 'Tailwind CSS', 'REST APIs'],
    deliverables: ['Responsive Web App', 'Digital Library Catalog', 'Course Modules', 'Scholar Portals'],
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
      'https://images.unsplash.com/photo-1556742049-0a67e5574f73?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Full-scale multi-vendor marketplace with seller portals, order workflows, and companion mobile app.',
    summary: 'Lurnixe is a complete multi-vendor e-commerce marketplace platform. Basan Tech built the full-featured website and is developing the companion mobile application planned for Play Store availability. The platform empowers sellers with dedicated dashboards and offers customers seamless product browsing, shopping carts, and order management.',
    problemObjective: 'Create an end-to-end multi-vendor commerce ecosystem that allows independent sellers to manage inventories and fulfill orders, while providing buyers with a smooth, responsive browsing and checkout experience across web and mobile.',
    whatWeBuilt: 'Basan Tech engineered the responsive multi-vendor web platform including seller onboarding, merchant dashboards, unified product management, shopping cart, customer accounts, and order tracking workflows. Basan Tech is also engineering the mobile application for Android/Play Store.',
    challenge: 'Designing a scalable architecture capable of handling multi-merchant product catalogs, distinct seller dashboards, customer shopping carts, and synchronized state between web and mobile interfaces.',
    solution: 'Engineered a modular web application with dedicated role-based portals for sellers, customers, and administrators. Built clean REST APIs for catalog management, shopping cart persistence, and mobile application synchronization.',
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
    techStack: ['React.js', 'Node.js', 'Tailwind CSS', 'Mobile App'],
    deliverables: ['Multi-Vendor Storefront', 'Merchant Portals', 'Cart & Checkout', 'Mobile App Architecture'],
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
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Digital Family Health Card with QR profile verification, medical records, and doctor booking.',
    summary: 'Lurnixe Health is a digital healthcare platform engineered to modernize family health management. The platform provides a unified Digital Family Health Card, QR-based rapid profile verification for emergency access, secure digital health records, doctor and clinic connectivity, and streamlined appointment booking.',
    problemObjective: 'Streamline family healthcare access by digitizing health profiles, enabling rapid emergency access to critical health data via QR verification, and connecting patients directly with healthcare providers and clinics.',
    whatWeBuilt: 'Basan Tech designed and developed the digital healthcare platform featuring Digital Family Health Card issuance, QR code generation and verification workflows, digital medical records management, clinic/doctor appointment booking, and admin management tools.',
    challenge: 'Ensuring rapid, secure access to essential health details during emergency consultations while maintaining data confidentiality and providing an easy interface for multi-member family health records.',
    solution: 'Implemented QR-based profile verification for instant access to critical health summaries. Designed modular health profile managers and intuitive appointment booking systems for seamless doctor-patient interactions.',
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
    techStack: ['React.js', 'Node.js', 'QR Engine', 'Tailwind CSS'],
    deliverables: ['Digital Health Card', 'QR Profile Verification', 'Doctor Scheduling', 'Medical Records Hub'],
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
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Non-profit digital hub empowering digital education, youth sports, health camps, and community support.',
    summary: 'KECF India (Khidmat-e-Khalq Educational & Charitable Foundation) is an NGO dedicated to social impact, education, and community empowerment. Basan Tech engineered a professional digital platform showcasing their work across digital education, sports and youth development, health and wellbeing, mentorship, skill and livelihood development, volunteer engagement, and transparent online donations.',
    problemObjective: 'Provide KECF India with a modern, transparent, and engaging web presence to mobilize community support, facilitate donations, attract volunteers, and showcase active education and youth development programs.',
    whatWeBuilt: 'Basan Tech delivered a clean, mobile-responsive web platform featuring comprehensive initiative overviews, online donation pathways, volunteer registration portals, youth mentorship highlights, and community impact showcases.',
    challenge: 'Presenting a multi-faceted non-profit organization\'s diverse initiatives in an inspiring, clean, and easily navigable structure that encourages donor and volunteer participation.',
    solution: 'Structured clear programmatic pillars with dedicated sections for Digital Education, Youth Sports, Healthcare Outreach, Mentorship, and Skill Training. Integrated intuitive donation and volunteer onboarding pathways.',
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
    techStack: ['React.js', 'Node.js', 'Donations API', 'Tailwind CSS'],
    deliverables: ['NGO Web Portal', 'Volunteer Registration', 'Donation System', 'Program Showcase'],
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
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    ],
    tagline: 'Bio-innovation incubation portal, startup mentorship, hackathons, and skill development programs.',
    summary: 'AIC-IIIM (Atal Incubation Centre - CSIR-IIIM Bio-Innovation Foundation) is a premier incubator established under the Atal Innovation Mission (NITI Aayog) to foster bio-entrepreneurship, startup creation, and technological innovation. Basan Tech delivered the official web portal showcasing incubator facilities, startup onboarding, skill development courses, hackathon challenges, and research commercialization.',
    problemObjective: 'Provide an authoritative, accessible institutional web portal for startups, researchers, and innovators to connect with incubation resources, apply for startup MoUs, participate in hackathons, and access specialized technical skill training.',
    whatWeBuilt: 'Basan Tech engineered the official AIC-IIIM web portal with dedicated sections for incubator facilities, startup incubation programs, skill training courses, hackathon competition registration, news announcements, and institutional linkages.',
    challenge: 'Organizing scientific research infrastructure, incubation guidelines, government initiative details, and startup application channels into a polished, modern, and user-friendly digital experience.',
    solution: 'Designed an institutional web architecture with clear navigation for innovators and researchers. Implemented dedicated landing modules for skill development programs, hackathon registrations, startup incubatee showcases, and institutional updates.',
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
    techStack: ['React.js', 'Node.js', 'Tailwind CSS', 'REST APIs'],
    deliverables: ['Incubation Portal', 'Startup Application Funnel', 'Course Catalog', 'Facility Directory'],
    year: '2024',
    featured: true,
    badge: 'Incubation & Research'
  }
];

export const AGENCY_TEAM: TeamMember[] = [
  {
    name: 'Basan',
    role: 'Founder',
    department: 'Leadership & Architecture',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Basan founded BasanTech to build clean, reliable digital solutions for businesses looking to grow online. He helps startups and growing businesses launch modern websites, web applications, and custom software with a focus on quality and long-term value.',
    skills: ['Web & Software Development', 'Business-focused Digital Solutions', 'Scalable, Modern Technology'],
    linkedin: 'https://www.linkedin.com/in/mejbanbasan/'
  },
  {
    name: 'Ahnaf Madhiya',
    role: 'Leadership',
    department: 'Client & Delivery Management',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: "Ahnaf helps shape BasanTech's project execution and client experience, making sure every website is delivered with attention to detail and technical quality. He specializes in WordPress development and helps clients bring their vision to life online.",
    skills: ['WordPress Development', 'Client Project & Delivery Management', 'Quality-focused Execution'],
    linkedin: 'https://www.linkedin.com/in/ahnafmadhiya/'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Dr. Tariq Mansoor',
    clientTitle: 'Founder, EdTech Platform',
    companyName: '',
    avatar: 'TM',
    rating: 5,
    serviceType: 'Learning Platform & Student Portal',
    quote: 'BasanTech engineered our digital learning platform from the ground up. Their communication across weekly sprints was crystal clear, the student-parent dashboard is lightning-fast, and their post-launch support helped us onboard over 1,200 active learners with zero downtime.',
    date: 'February 2025',
    verified: true
  },
  {
    id: 'test-2',
    clientName: 'Farhan Memon',
    clientTitle: 'Admin Head, Community Management System',
    companyName: '',
    avatar: 'FM',
    rating: 5,
    serviceType: 'Custom Web & Operations Software',
    quote: 'We needed a centralized system to handle resident dues, maintenance tickets, and gate security. The BasanTech team listened closely to our ground workflow, delivered clean and dependable code, and our non-technical staff uses it effortlessly every day.',
    date: 'January 2025',
    verified: true
  },
  {
    id: 'test-3',
    clientName: 'Qasim Patel',
    clientTitle: 'Project Lead, Institutional Website',
    companyName: '',
    avatar: 'QP',
    rating: 5,
    serviceType: 'Institutional Website & CMS Portal',
    quote: 'BasanTech treated our institutional web portal with immense dedication. The responsive layout, transparent donation tracking, and bilingual support exceeded our expectations. Even months after launch, their team is always available whenever we need quick assistance.',
    date: 'December 2024',
    verified: true
  },
  {
    id: 'test-4',
    clientName: 'Sameer Merchant',
    clientTitle: 'Operations Director, E-Commerce Platform',
    companyName: '',
    avatar: 'SM',
    rating: 5,
    serviceType: 'E-Commerce & Payment Flow',
    quote: 'Our previous storefront struggled with cart drop-offs and slow mobile checkout. BasanTech re-engineered our platform with instant UPI and card gateways plus real-time inventory sync. Our mobile checkout conversion rate increased noticeably within weeks.',
    date: 'November 2024',
    verified: true
  },
  {
    id: 'test-5',
    clientName: 'Arif Vhora',
    clientTitle: 'Product Lead, Mobile Application',
    companyName: '',
    avatar: 'AV',
    rating: 5,
    serviceType: 'App Development (Android & iOS)',
    quote: 'Having direct access to the actual developers building our mobile app made the entire journey seamless. They handled Google Play and App Store compliance without a hitch, and the app runs smoothly at 60 FPS across both operating systems.',
    date: 'October 2024',
    verified: true
  },
  {
    id: 'test-6',
    clientName: 'Dr. Farhana Siddiqui',
    clientTitle: 'Technical Director, Custom Healthcare System',
    companyName: '',
    avatar: 'FS',
    rating: 5,
    serviceType: 'Custom Software & Health Records',
    quote: 'Data privacy and quick access to records were non-negotiable for our clinic operations. BasanTech delivered a dependable, well-documented architecture with complete code handover and zero vendor lock-in. Their 30-day warranty support was top tier.',
    date: 'September 2024',
    verified: true
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
    question: 'How do we get started working with BasanTech?',
    answer: 'Getting started is simple: submit your project details through our contact form or reach out directly. We will review your goals, formulate a clear technical blueprint, and provide a fixed proposal and timeline within 24–48 hours.'
  },
  {
    category: 'General & Engagement',
    question: 'What engagement models do you offer?',
    answer: 'We offer flexible engagement models: (1) Fixed-Scope Milestone Projects (best for well-defined websites, apps, and MVPs), (2) Dedicated Monthly Sprints (for ongoing software and product scaling), and (3) Strategic Maintenance & Support Retainers.'
  },
  {
    category: 'Technology & Quality',
    question: 'How does BasanTech ensure code quality and security?',
    answer: 'Every project follows modern clean code principles, strict TypeScript type-checking, responsive design verification across viewports, and OWASP security practices before deployment.'
  },
  {
    category: 'Technology & Quality',
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes! Every project includes a 30-day comprehensive warranty period. We also offer flexible SLA maintenance packages covering uptime monitoring, server security updates, and ongoing feature rollouts.'
  }
];
