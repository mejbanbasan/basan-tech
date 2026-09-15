export type PageView = 
  | 'home' 
  | 'services' 
  | 'service-detail' 
  | 'portfolio' 
  | 'about' 
  | 'testimonials'
  | 'contact';

export type ServiceId = 
  | 'web-dev' 
  | 'app-dev' 
  | 'custom-software' 
  | 'desktop-software' 
  | 'social-media' 
  | 'ecommerce';

export interface Service {
  id: ServiceId;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tagline: string;
  iconName: string;
  badge: string;
  image: string;
  galleryImages: string[];
  deliverables: string[];
  features: {
    title: string;
    description: string;
  }[];
  techStack?: {
    category: string;
    items: string[];
  }[];
  pricingStartingAt?: string;
  typicalTimeline?: string;
  useCases: string[];
  caseStudyId?: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: ServiceId | 'education' | 'ecommerce' | 'healthcare' | 'ngo' | 'incubation' | 'hybrid';
  categoryLabel: string;
  liveUrl?: string;
  heroImage: string;
  galleryImages: string[];
  tagline: string;
  summary: string;
  problemObjective?: string;
  challenge: string;
  whatWeBuilt?: string;
  solution: string;
  keyFeatures?: string[];
  architecture: string[];
  results?: {
    metric: string;
    label: string;
    description: string;
  }[];
  techStack: string[];
  duration?: string;
  year: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
  featured: boolean;
  badge?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  avatar: string;
  bio: string;
  skills: string[];
  linkedin?: string;
  github?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  companyName: string;
  avatar: string;
  rating: number;
  serviceType: string;
  comment: string;
  projectImpact: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  selectedServices: ServiceId[];
  budgetRange: string;
  estimatedTimeline: string;
  projectDescription: string;
}
