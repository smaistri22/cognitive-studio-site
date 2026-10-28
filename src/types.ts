// Catégories de prestations (site 100 % professionnel)
export type ServiceCategory = 'formules' | 'conseil' | 'web' | 'fichiers' | 'bureau' | 'abonnements';

export type AudienceType = 'all' | ServiceCategory;

export interface ServiceTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceDetail?: string;
  badge?: string;
  popular?: boolean;
  target: ServiceCategory;
  features: string[];
  ctaText: string;
  highlightNote?: string;
  duration?: string;
  format?: string;
  idealFor?: string;
  deliverables?: string[];
  expectedImpact?: string;
}

export interface ServiceOption {
  name: string;
  price: string;
  category: ServiceCategory;
}

export interface CorePillar {
  letter: 'C' | 'O' | 'R' | 'E';
  word: string;
  subtitle: string;
  description: string;
  businessApplication: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'tarifs' | 'methode';
}

export interface ComparisonRow {
  aspect: string;
  traditional: string;
  cognitiveStudio: string;
  advantage: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  metric: string;
  rating?: number;
  source?: string;
  verified?: boolean;
  date?: string;
}

export interface ReferenceItem {
  client: string;
  sector: string;
  work: string;
  url?: string;
}
