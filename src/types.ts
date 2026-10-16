export type AudienceType = 'all' | 'students' | 'pros' | 'incubator';

export interface ServiceTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceDetail?: string;
  badge?: string;
  popular?: boolean;
  target: 'students' | 'pros' | 'incubator';
  features: string[];
  ctaText: string;
  highlightNote?: string;
  duration?: string;
  format?: string;
  idealFor?: string;
  deliverables?: string[];
  expectedImpact?: string;
}

export interface CorePillar {
  letter: 'C' | 'O' | 'R' | 'E';
  word: string;
  subtitle: string;
  description: string;
  academicApplication: string;
  businessApplication: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'students' | 'pros' | 'general';
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
  type: 'Étudiant' | 'Indépendant' | 'Créateur de Projet';
  quote: string;
  metric: string;
  rating?: number;
  source?: string;
  verified?: boolean;
  date?: string;
}
