import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Clock,
  MapPin,
  FileCheck,
  TrendingUp,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  Layers,
  MessageCircle,
  HelpCircle,
  GraduationCap,
  Briefcase,
  Rocket
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { AudienceType, ServiceTier } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

interface ServicesSectionProps {
  currentAudience: AudienceType;
  onSelectAudience: (aud: AudienceType) => void;
  onSelectService: (service: ServiceTier) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentAudience,
  onSelectAudience,
  onSelectService
}) => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const [activeCategory, setActiveCategory] = useState<'all' | 'students' | 'pros' | 'incubator'>(
    currentAudience !== 'all' ? currentAudience : 'pros'
  );
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [viewMode, setViewMode] = useState<'cards' | 'compare'>('cards');

  // Keep in sync if parent changes
  useEffect(() => {
    if (currentAudience !== 'all') {
      setActiveCategory(currentAudience);
    }
  }, [currentAudience]);

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const allTiers = t.services.tiers;
  const filteredServices = activeCategory === 'all'
    ? allTiers
    : allTiers.filter(s => s.target === activeCategory);

  // Pole metadata for roadmap & context
  const poleContext = {
    pros: {
      title: language === 'fr' ? 'Pôle Principal : Professionnels & Entreprises' : 'Flagship Track: Professionals & Firms',
      subtitle: language === 'fr' ? 'Conseil opérationnel, Second Cerveau & optimisation des flux' : 'Operational strategy, Second Brain & workflow optimization',
      roadmap: [
        { 
          step: '1. Immersion', 
          title: language === 'fr' ? 'Audit Flash 2h (250 €)' : '2h Flash Audit (€250)', 
          desc: language === 'fr' ? 'Repérer 10 à 15 h perdues par mois (montant déduit si vous poursuivez)' : 'Pinpoint 10-15 wasted hours/month (deducted if you continue)' 
        },
        { 
          step: '2. Restructuration', 
          title: language === 'fr' ? 'Pack Architecture ou séances à l’heure' : 'Architecture Pack or hourly sessions', 
          desc: language === 'fr' ? 'Déploiement Notion, CRM, IA & automatisations sans code' : 'Notion hub, tailored CRM, AI & automations' 
        },
        { 
          step: '3. Pilotage', 
          title: language === 'fr' ? 'Directeur des Opérations Partagé' : 'Fractional COO Oversight', 
          desc: language === 'fr' ? 'Maintenance préventive & sérénité opérationnelle continue' : 'Preventative maintenance & quiet operations' 
        },
      ]
    },
    students: {
      title: language === 'fr' ? 'Projet Académique & Soutien Méthodologique' : 'Academic Project & Student Mentoring',
      subtitle: language === 'fr' ? 'Initiative pédagogique engagée : accompagner les élèves et étudiants vers l’autonomie, sans se reposer sur l’IA' : 'Dedicated educational initiative: guiding students toward cognitive autonomy without relying on AI as a crutch',
      roadmap: [
        { 
          step: '1. Diagnostic', 
          title: language === 'fr' ? 'Audit Méthodologique (1h30)' : 'Methodological Audit (1h30)', 
          desc: language === 'fr' ? 'Cartographie des blocages & de la méthode de travail' : 'Pinpointing bottlenecks & learning profile' 
        },
        { 
          step: '2. Action', 
          title: language === 'fr' ? 'Pack Examens ou suivi continu' : 'Exam Pack or Regular Coaching', 
          desc: language === 'fr' ? 'Rétro-planning, Méthode C.O.R.E. & entraînement actif' : 'Retro-planning, C.O.R.E. method & active drills' 
        },
        { 
          step: '3. Résultat', 
          title: language === 'fr' ? 'Autonomie & Réussite' : 'Autonomy & Exam Success', 
          desc: language === 'fr' ? '+3,5 à +5 pts aux examens et fin définitive des nuits blanches' : '+3.5 to +5 pts grade increase & zero panic' 
        },
      ]
    },
    incubator: {
      title: language === 'fr' ? 'Pôle Incubateur d’Indépendants' : 'Freelancer Incubator Track',
      subtitle: language === 'fr' ? 'Pour porteurs de projets, side-hustles & créateurs d’entreprise' : 'For aspiring founders, side-hustlers & ventures',
      roadmap: [
        { 
          step: '1. Validation', 
          title: language === 'fr' ? 'Diagnostic Side-Hustle' : 'Side-Hustle Diagnostic', 
          desc: language === 'fr' ? 'Validation de l’offre & du levier de croissance le plus rapide' : 'Offer validation & fast monetization lever' 
        },
        { 
          step: '2. Structuration', 
          title: language === 'fr' ? 'Opérations, Statuts & MVP' : 'Operations, Registration & MVP', 
          desc: language === 'fr' ? 'Kit administratif belge, facturation, Second Cerveau' : 'Belgian regulatory kit, billing, Second Brain' 
        },
        { 
          step: '3. Revenus', 
          title: language === 'fr' ? 'Rentabilité Sécurisée' : 'Protected Profitability', 
          desc: language === 'fr' ? 'Premiers clients rentables sans risquer votre équilibre' : 'First paying clients without risking career' 
        },
      ]
    }
  };

  return (
    <section id="services-section" className="py-20 bg-[#e0e0db] border-b border-[#cfcfc7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8e6e1] border border-[#b8cec7] text-[#325249] text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#325249]" />
            <span>{t.services.badge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] font-display tracking-tight leading-tight">
            {t.services.title}
          </h2>
          
          <p className="mt-4 text-[#555555] text-sm sm:text-base leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Segment Tabs: PROFESSIONNELS FIRST */}
        <div className="bg-white p-2 rounded-2xl border border-[#cfcfc7] shadow-xs max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <button
              id="tab-service-pros"
              onClick={() => { setActiveCategory('pros'); onSelectAudience('pros'); }}
              className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                activeCategory === 'pros'
                  ? 'bg-[#325249] text-white shadow-sm'
                  : 'text-[#555555] hover:text-[#333333] hover:bg-[#eaeae5]'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold">
                <Briefcase className="w-4 h-4" />
                <span>{language === 'fr' ? 'Professionnels & Pros' : 'Professionals & Firms'}</span>
              </div>
              <span className={`text-[10px] ${activeCategory === 'pros' ? 'text-[#e0e0db]' : 'text-[#325249] font-bold'}`}>
                {language === 'fr' ? '125 € / heure' : '€125 / hour'}
              </span>
            </button>

            <button
              id="tab-service-incubator"
              onClick={() => { setActiveCategory('incubator'); onSelectAudience('incubator'); }}
              className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                activeCategory === 'incubator'
                  ? 'bg-[#325249] text-white shadow-sm'
                  : 'text-[#555555] hover:text-[#333333] hover:bg-[#eaeae5]'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold">
                <Rocket className="w-4 h-4" />
                <span>{language === 'fr' ? 'Incubateur' : 'Incubator'}</span>
              </div>
              <span className={`text-[10px] ${activeCategory === 'incubator' ? 'text-[#e0e0db]' : 'text-[#777770]'}`}>
                {language === 'fr' ? 'Création & Side-Hustle' : 'Launchpad & Ventures'}
              </span>
            </button>

            <button
              id="tab-service-students"
              onClick={() => { setActiveCategory('students'); onSelectAudience('students'); }}
              className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                activeCategory === 'students'
                  ? 'bg-[#325249] text-white shadow-sm'
                  : 'text-[#555555] hover:text-[#333333] hover:bg-[#eaeae5]'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>{language === 'fr' ? 'Projet Académique' : 'Academic Project'}</span>
              </div>
              <span className={`text-[10px] ${activeCategory === 'students' ? 'text-[#e0e0db]' : 'text-[#777770]'}`}>
                {language === 'fr' ? 'Soutien Étudiants' : 'Student Mentoring'}
              </span>
            </button>

            <button
              onClick={() => { setActiveCategory('all'); onSelectAudience('all'); }}
              className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#325249] text-white shadow-sm'
                  : 'text-[#555555] hover:text-[#333333] hover:bg-[#eaeae5]'
              }`}
            >
              <span className="font-bold">{t.services.tabs.all}</span>
              <span className={`text-[10px] ${activeCategory === 'all' ? 'text-[#e0e0db]' : 'text-[#777770]'}`}>
                {allTiers.length} {language === 'fr' ? 'offres' : 'packages'}
              </span>
            </button>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            {activeCategory !== 'all' ? (
              <div>
                <h3 className="text-lg font-bold text-[#333333] font-display flex items-center gap-2">
                  <span>{poleContext[activeCategory].title}</span>
                  <span className="text-xs font-normal text-[#555555]">
                    • {filteredServices.length} {language === 'fr' ? 'solutions adaptées' : 'tailored solutions'}
                  </span>
                </h3>
                <p className="text-xs text-[#555555]">{poleContext[activeCategory].subtitle}</p>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold text-[#222222] font-display">
                  {language === 'fr' ? "Catalogue Global d'Accompagnement" : 'Full Engagement Catalog'}
                </h3>
                <p className="text-xs text-[#505a55]">
                  {language === 'fr' ? 'Explorez les 3 pôles ou comparez les modalités d’intervention.' : 'Explore all 3 tracks or compare engagement modalities.'}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-[#cfcfc7] text-xs">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'cards'
                  ? 'bg-[#325249] text-white'
                  : 'text-[#555555] hover:text-[#333333]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Fiches Détaillées' : 'Detailed Cards'}</span>
            </button>
            <button
              onClick={() => setViewMode('compare')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'compare'
                  ? 'bg-[#325249] text-white'
                  : 'text-[#555555] hover:text-[#333333]'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Comparatif Rapide' : 'Quick Table'}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Trajectory / Roadmap Banner */}
        {activeCategory !== 'all' && viewMode === 'cards' && (
          <div className="mb-10 bg-white rounded-2xl border border-[#cfcfc7] p-5 sm:p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-4 text-[#325249] font-mono text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-[#325249]" />
              <span>{language === 'fr' ? 'Trajectoire Conseillée pour ce Pôle :' : 'Recommended Pathway for this Track:'}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
              {poleContext[activeCategory].roadmap.map((item, idx) => (
                <div key={idx} className="relative bg-[#eaeae5] rounded-xl p-4 border border-[#cfcfc7]">
                  <div className="text-[11px] font-mono font-bold text-[#325249] mb-1">
                    {item.step}
                  </div>
                  <h4 className="text-sm font-bold text-[#333333] font-display mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW MODE 1: REFINED CONSULTATIVE CARDS */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
            {filteredServices.map((tier) => {
              const isPopular = tier.popular;
              const isExpanded = !!expandedCards[tier.id];
              const isStudent = tier.target === 'students';
              const isPro = tier.target === 'pros';

              return (
                <div
                  key={tier.id}
                  id={`card-${tier.id}`}
                  className={`group relative bg-white rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:shadow-md ${
                    isPopular
                      ? 'border-[#325249] shadow-sm ring-1 ring-[#325249]/20'
                      : 'border-[#cfcfc7] hover:border-[#325249]'
                  }`}
                >
                  {/* Top Popular Ribbon if applicable */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#325249] text-white text-[11px] font-bold font-mono uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs flex items-center gap-1.5 border border-[#243c35]">
                      <Sparkles className="w-3 h-3 text-[#e0e0db]" />
                      <span>{tier.badge || (language === 'fr' ? 'Formule Recommandée' : 'Recommended')}</span>
                    </div>
                  )}

                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    {/* Header Metadata Bar */}
                    <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                      <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-md ${
                        isStudent 
                          ? 'bg-[#d8e6e1] text-[#325249] border border-[#b8cec7]' 
                          : isPro 
                            ? 'bg-[#eaeae5] text-[#333333] border border-[#cfcfc7]' 
                            : 'bg-[#d8e6e1] text-[#325249] border border-[#b8cec7]'
                      }`}>
                        {isStudent 
                          ? (language === 'fr' ? 'Pôle Étudiant' : 'Student Track') 
                          : isPro 
                            ? (language === 'fr' ? 'Pôle Pro & Cabinet' : 'Pro Track') 
                            : (language === 'fr' ? 'Pôle Incubateur' : 'Incubator Track')}
                      </span>

                      {!isPopular && tier.badge && (
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-[#eaeae5] text-[#333333] border border-[#cfcfc7]">
                          {tier.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-xl font-bold text-[#333333] font-display mb-2 tracking-tight group-hover:text-[#325249] transition-colors">
                      {tier.name}
                    </h3>
                    
                    <p className="text-xs text-[#555555] leading-relaxed mb-4 min-h-[34px]">
                      {tier.tagline}
                    </p>

                    {/* Modalité & Durée Chips */}
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      {tier.duration && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#eaeae5] text-[#333333] px-2.5 py-1 rounded-lg border border-[#cfcfc7]">
                          <Clock className="w-3 h-3 text-[#325249]" />
                          <span>{tier.duration}</span>
                        </span>
                      )}
                      {tier.format && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#eaeae5] text-[#333333] px-2.5 py-1 rounded-lg border border-[#cfcfc7]">
                          <MapPin className="w-3 h-3 text-[#325249]" />
                          <span>{tier.format}</span>
                        </span>
                      )}
                    </div>

                    {/* Ideal For */}
                    {tier.idealFor && (
                      <div className="mb-5 p-3 rounded-xl bg-[#eaeae5]/60 border border-[#cfcfc7] text-xs">
                        <span className="font-bold text-[#325249] block mb-0.5 text-[11px] uppercase tracking-wider font-mono">
                          {language === 'fr' ? 'Pour qui ?' : 'Ideal for:'}
                        </span>
                        <p className="text-[#555555] leading-snug">
                          {tier.idealFor}
                        </p>
                      </div>
                    )}

                    {/* Pricing Block */}
                    <div className="py-4 border-y border-[#cfcfc7] mb-5">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-extrabold text-[#333333] font-display tracking-tight">
                          {tier.price}
                        </span>
                        {tier.priceDetail && (
                          <span className="text-xs text-[#555555] font-medium">
                            {tier.priceDetail}
                          </span>
                        )}
                      </div>

                      {tier.highlightNote && (
                        <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#d8e6e1] text-[#325249] text-[11px] font-semibold border border-[#b8cec7]">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#325249]" />
                          <span>{tier.highlightNote}</span>
                        </div>
                      )}
                    </div>

                    {/* Structured Deliverables */}
                    {tier.deliverables && tier.deliverables.length > 0 && (
                      <div className="mb-4 space-y-2">
                        <span className="text-[11px] font-mono uppercase text-[#325249] tracking-wider block font-bold flex items-center gap-1.5">
                          <FileCheck className="w-3.5 h-3.5 text-[#325249]" />
                          <span>{t.services.deliverablesLabel}</span>
                        </span>
                        <div className="space-y-1.5">
                          {tier.deliverables.map((deliv, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-[#333333] bg-[#eaeae5] p-2 rounded-lg border border-[#cfcfc7]">
                              <Check className="w-3.5 h-3.5 text-[#325249] mt-0.5 shrink-0 stroke-[2.5]" />
                              <span className="font-medium">{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Expected Impact Pill */}
                    {tier.expectedImpact && (
                      <div className="mb-5 p-2.5 rounded-xl bg-[#d8e6e1]/40 border border-[#b8cec7] text-xs flex items-start gap-2 text-[#325249]">
                        <TrendingUp className="w-4 h-4 shrink-0 text-[#325249] mt-0.5" />
                        <div>
                          <span className="font-bold block text-[10px] uppercase font-mono">{t.services.roiLabel}</span>
                          <span className="text-xs leading-snug text-[#333333]">{tier.expectedImpact}</span>
                        </div>
                      </div>
                    )}

                    {/* In-Depth Checklist Accordion */}
                    <div className="mt-auto pt-2">
                      <button
                        type="button"
                        onClick={() => toggleExpand(tier.id)}
                        className="w-full text-left py-2 text-xs font-semibold text-[#325249] hover:underline flex items-center justify-between border-t border-[#cfcfc7] pt-3 transition-colors cursor-pointer"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-wider">
                          {isExpanded 
                            ? (language === 'fr' ? 'Masquer le détail' : 'Hide details') 
                            : (language === 'fr' ? `Voir les ${tier.features.length} points` : `View all ${tier.features.length} features`)}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      {isExpanded && (
                        <ul className="pt-3 space-y-2 border-t border-[#cfcfc7] mt-2 animate-fadeIn">
                          {tier.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#333333] leading-normal">
                              <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#325249] stroke-[2.5]" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-6 pt-0 border-t border-[#eaeae5]">
                    <button
                      id={`btn-select-${tier.id}`}
                      onClick={() => onSelectService(tier)}
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                        isPopular
                          ? 'bg-[#325249] hover:bg-[#243c35] text-white shadow-sm border border-[#243c35]'
                          : 'bg-[#eaeae5] hover:bg-[#325249] hover:text-white text-[#325249] border border-[#cfcfc7]'
                      }`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <div className="mt-2 text-center text-[10px] text-[#777770]">
                      {language === 'fr' ? 'Confirmation sous 24h • Sans engagement' : 'Reply within 24h • No lock-in'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW MODE 2: QUICK COMPARISON TABLE */}
        {viewMode === 'compare' && (
          <div className="bg-white rounded-2xl border border-[#cfcfc7] shadow-xs overflow-hidden">
            <div className="p-4 sm:p-6 bg-[#eaeae5] border-b border-[#cfcfc7] flex items-center justify-between">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#333333] font-display">
                  {language === 'fr' ? 'Tableau Comparatif des Formules & Modalités' : 'Formulas & Engagement Modalities Table'}
                </h4>
                <p className="text-xs text-[#555555]">
                  {language === 'fr' ? 'Visualisez en un coup d\'œil les durées, tarifs, formats et livrables clés.' : 'At-a-glance comparison of durations, pricing, formats, and deliverables.'}
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#eaeae5] text-[#325249] font-mono text-[11px] uppercase tracking-wider border-b border-[#cfcfc7]">
                    <th className="p-4 font-bold">{language === 'fr' ? 'Formule' : 'Package'}</th>
                    <th className="p-4 font-bold">{language === 'fr' ? 'Pôle' : 'Track'}</th>
                    <th className="p-4 font-bold">{language === 'fr' ? 'Tarif' : 'Price'}</th>
                    <th className="p-4 font-bold">{language === 'fr' ? 'Volume / Durée' : 'Duration'}</th>
                    <th className="p-4 font-bold">{language === 'fr' ? 'Format' : 'Format'}</th>
                    <th className="p-4 font-bold">{language === 'fr' ? 'Livrables Majeurs' : 'Deliverables'}</th>
                    <th className="p-4 font-bold text-right">{language === 'fr' ? 'Action' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#cfcfc7]">
                  {filteredServices.map((tier) => (
                    <tr key={tier.id} className="hover:bg-[#eaeae5]/50 transition-colors">
                      <td className="p-4 font-bold text-[#333333]">
                        <div className="flex items-center gap-2">
                          <span>{tier.name}</span>
                          {tier.popular && (
                            <span className="px-2 py-0.5 text-[9px] font-bold rounded-md bg-[#325249] text-white">
                              {language === 'fr' ? 'Populaire' : 'Popular'}
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#555555] font-normal mt-0.5 line-clamp-1">
                          {tier.tagline}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-[#d8e6e1] text-[#325249] font-semibold">
                          {tier.target === 'students' 
                            ? (language === 'fr' ? 'Étudiant' : 'Student') 
                            : tier.target === 'pros' 
                              ? (language === 'fr' ? 'Pro & Cabinet' : 'Pro') 
                              : (language === 'fr' ? 'Incubateur' : 'Incubator')}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="font-extrabold text-sm text-[#333333] font-display">{tier.price}</div>
                        <div className="text-[10px] text-[#555555]">{tier.priceDetail}</div>
                      </td>
                      <td className="p-4 text-[#333333] font-medium">
                        {tier.duration || (language === 'fr' ? 'Sur-mesure' : 'Custom')}
                      </td>
                      <td className="p-4 text-[#555555]">
                        {tier.format || (language === 'fr' ? 'Bruxelles / Visio' : 'Brussels / Video')}
                      </td>
                      <td className="p-4 text-[#333333] max-w-xs">
                        {tier.deliverables && tier.deliverables.length > 0 ? (
                          <ul className="space-y-1">
                            {tier.deliverables.slice(0, 2).map((del, i) => (
                              <li key={i} className="flex items-center gap-1.5 text-[11px]">
                                <Check className="w-3 h-3 text-[#325249] shrink-0" />
                                <span className="line-clamp-1">{del}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-[11px] text-[#777770]">{language === 'fr' ? 'Programme complet' : 'Full program'}</span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => onSelectService(tier)}
                          className="px-3 py-1.5 rounded-lg bg-[#325249] hover:bg-[#243c35] text-white font-bold text-xs transition-colors shadow-xs cursor-pointer inline-flex items-center gap-1"
                        >
                          <span>{language === 'fr' ? 'Choisir' : 'Select'}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Audit Deductibility Banner */}
        <div className="mt-14 bg-white border border-[#b8cec7] rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#d8e6e1] border border-[#b8cec7] flex items-center justify-center text-[#325249] shrink-0 mt-1">
                <ShieldCheck className="w-6 h-6 text-[#325249]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-[#333333] font-display">
                  {language === 'fr' ? 'Règle de clarté : l’audit est déduit de la suite' : 'Clarity principle: the audit is deducted from the next step'}
                </h4>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {language === 'fr' 
                    ? 'Vous ne prenez aucun risque financier : le prix de votre premier audit (90 € pour un étudiant, 250 € pour un professionnel) est intégralement déduit de votre facture si vous poursuivez avec un accompagnement de fond.'
                    : 'No financial risk: the price of your first audit (€90 for a student, €250 for a professional) is fully deducted from your invoice if you continue with a longer engagement.'}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 lg:items-end justify-center">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-[#325249] hover:bg-[#243c35] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#e0e0db]" />
                <span>{language === 'fr' ? 'Poser une question sur WhatsApp' : 'Ask on WhatsApp'}</span>
              </a>

              <a
                href="#simulateur"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#eaeae5] hover:bg-[#cfcfc7] text-[#325249] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 border border-[#cfcfc7]"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#325249]" />
                <span>{language === 'fr' ? 'Besoin d’aide ? Faire le Simulateur (1 min)' : 'Need guidance? Take Simulator (1 min)'}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
