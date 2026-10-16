import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  GraduationCap, 
  Briefcase, 
  Rocket, 
  ChevronDown,
  MapPin
} from 'lucide-react';
import { AudienceType } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

interface HeroProps {
  currentAudience: AudienceType;
  onSelectAudience: (aud: AudienceType) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  currentAudience, 
  onSelectAudience, 
  onOpenBooking 
}) => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section 
      id="hero-section"
      className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-[#e0e0db] border-b border-[#cfcfc7]"
    >
      {/* Subtle organic ambient highlights in forest green tints */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#325249]/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#325249]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Credibility Tag (Address removed from top as requested) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8e6e1] border border-[#b8cec7] text-xs font-semibold text-[#325249] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#325249]" />
            <span>{t.hero.tagline}</span>
            <span className="w-1 h-1 rounded-full bg-[#325249]"></span>
            <span className="text-[#325249] font-normal">{t.hero.subTagline}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#cfcfc7] text-[11px] font-bold text-[#325249] shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-[#325249]" />
            <span>{language === 'fr' ? 'Pôle Entreprises : 125 € / heure' : 'Business Consulting: €125 / hour'}</span>
          </div>
        </div>

        {/* Main Punchy Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#333333] font-display leading-[1.15]">
            {t.hero.h1Main} <br className="hidden sm:inline" />
            <span className="text-[#325249] underline decoration-[#325249]/40 decoration-wavy">
              {t.hero.h1Accent}
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#333333]/90 max-w-2xl mx-auto leading-relaxed font-normal">
            {t.hero.description}
          </p>

          <p className="mt-2 text-xs sm:text-sm text-[#555555] max-w-xl mx-auto">
            {t.hero.scienceNote}
          </p>
        </div>

        {/* Audience Selector Tabs: PROFESSIONNELS FIRST */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="p-1 bg-[#eaeae5] border border-[#cfcfc7] rounded-xl grid grid-cols-3 gap-1 shadow-inner">
            <button
              id="hero-tab-pros"
              onClick={() => onSelectAudience('pros')}
              className={`py-2 px-2 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                currentAudience === 'pros'
                  ? 'bg-[#325249] text-white shadow-sm'
                  : 'text-[#333333] hover:text-[#325249] hover:bg-white/80'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span className="truncate">{t.hero.tabs.pros}</span>
            </button>

            <button
              id="hero-tab-incubator"
              onClick={() => onSelectAudience('incubator')}
              className={`py-2 px-2 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                currentAudience === 'incubator'
                  ? 'bg-[#325249] text-white shadow-sm'
                  : 'text-[#333333] hover:text-[#325249] hover:bg-white/80'
              }`}
            >
              <Rocket className="w-4 h-4" />
              <span className="truncate">{t.hero.tabs.incubator}</span>
            </button>

            <button
              id="hero-tab-students"
              onClick={() => onSelectAudience('students')}
              className={`py-2 px-2 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                currentAudience === 'students'
                  ? 'bg-[#325249] text-white shadow-sm'
                  : 'text-[#333333] hover:text-[#325249] hover:bg-white/80'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span className="truncate">{t.hero.tabs.students}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Context Card based on Audience */}
        <div className="max-w-3xl mx-auto mb-10 bg-white border border-[#cfcfc7] rounded-2xl p-5 sm:p-6 shadow-sm">
          {currentAudience === 'pros' && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#325249] uppercase tracking-wider font-bold">
                    {language === 'fr' ? 'Pôle Principal • Conseil & Opérations' : 'Flagship Track • Strategy & Operations'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#d8e6e1] text-[10px] font-mono font-bold text-[#325249]">
                    125 € / h
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#333333]">
                  {language === 'fr'
                    ? 'Déléguez la construction de votre "Second Cerveau" & libérez 10 à 15h par mois.'
                    : 'Outsource your digital "Second Brain" architecture and reclaim 10 to 15 hours per month.'}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555]">
                  {language === 'fr'
                    ? 'Consultance à l’heure, Audit Flash de 2 h déduit si vous poursuivez, automatisation Notion / CRM sans boîte noire et COO partagé dès 490 € / mois.'
                    : 'Hourly consulting, a 2-hour Flash Audit deducted if you continue, Notion/CRM workflows, and a fractional COO from €490 / month.'}
                </p>
              </div>
              <a
                href="#services-section"
                className="whitespace-nowrap px-4 py-2 rounded-lg bg-[#325249] hover:bg-[#243c35] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>{language === 'fr' ? 'Voir les Formules Pros' : 'View Pro Packages'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {currentAudience === 'incubator' && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#325249] uppercase tracking-wider font-bold">
                  {language === 'fr' ? "Pôle Incubation • De l'Idée aux Premiers Revenus" : 'Incubation Track • From Idea to First Revenue'}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#333333]">
                  {language === 'fr'
                    ? 'Essor Complémentaire & Lancement : Structurez votre activité en toute rentabilité.'
                    : 'Side-Hustle Launchpad & Full Venture: Structure a profitable independent business safely.'}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555]">
                  {language === 'fr'
                    ? 'Diagnostic side-hustle, MVP opérationnel, formalités belges (BCE/TVA), compte pro et second cerveau clé en main.'
                    : 'Side-hustle diagnostic, operational MVP, Belgian regulatory guidance, dedicated setup, and turnkey digital workspace.'}
                </p>
              </div>
              <a
                href="#services-section"
                className="whitespace-nowrap px-4 py-2 rounded-lg bg-[#325249] hover:bg-[#243c35] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>{language === 'fr' ? "Découvrir l'Incubation" : 'Explore Incubator'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {currentAudience === 'students' && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#555555] uppercase tracking-wider font-bold">
                    {language === 'fr' ? 'Projet Académique & Soutien Méthodologique' : 'Academic Project & Methodological Coaching'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#eaeae5] text-[10px] font-mono font-medium text-[#555555]">
                    {language === 'fr' ? 'Projet Pédagogique' : 'Societal Initiative'}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#333333]">
                  {language === 'fr' 
                    ? 'Notre engagement pour la transmission de la rigueur et l’autonomie cognitive.' 
                    : 'Our commitment to fostering intellectual rigor and cognitive self-reliance in students.'}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555]">
                  {language === 'fr'
                    ? 'Méthode « Zéro Support », rétro-planning réaliste pour le blocus et les examens, et moins de dépendance aux outils qui pensent à votre place.'
                    : 'Zero-Support method, realistic blocus and exam schedules, and less dependence on tools that think for you.'}
                </p>
              </div>
              <a
                href="#services-section"
                className="whitespace-nowrap px-4 py-2 rounded-lg bg-[#555555] hover:bg-[#333333] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>{language === 'fr' ? 'Voir le Projet Étudiants' : 'View Student Project'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {currentAudience === 'all' && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#325249] uppercase tracking-wider font-bold">
                  {language === 'fr' ? 'Orientation Stratégique Globale' : 'Global Strategic Orientation'}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#333333]">
                  {language === 'fr' 
                    ? 'Restaurer votre totale indépendance cognitive et opérationnelle.'
                    : 'Restoring your total cognitive and operational independence.'}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555]">
                  {language === 'fr'
                    ? "L'humain au centre, la transparence comme règle, et le refus catégorique des solutions toutes faites sans réflexion critique."
                    : 'Human intelligence at the core, radical transparency, and categorical rejection of pre-made shortcuts without critical thought.'}
                </p>
              </div>
              <a
                href="#methode-core"
                className="whitespace-nowrap px-4 py-2 rounded-lg bg-[#325249] hover:bg-[#243c35] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>{language === 'fr' ? 'Comprendre la Méthode' : 'Explore The Method'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Primary CTA Group */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <button
            id="hero-audit-cta-btn"
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-xl bg-[#325249] hover:bg-[#243c35] text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02] cursor-pointer flex items-center gap-2 border border-[#325249]"
          >
            <span>{t.hero.ctaBooking}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <a
            href="#simulateur"
            className="px-5 py-3.5 rounded-xl bg-white hover:bg-[#eaeae5] text-[#325249] font-semibold text-sm border border-[#b8cec7] transition-all flex items-center gap-2 shadow-xs hover:border-[#325249]"
          >
            <Compass className="w-4 h-4 text-[#325249]" />
            <span>{language === 'fr' ? 'Faire mon Diagnostic Express' : 'Run Express Diagnostic'}</span>
          </a>

          <a
            href="#methode-core"
            className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/40 text-[#333333] hover:text-[#325249] font-medium text-sm transition-colors flex items-center gap-1.5"
          >
            <span>{t.header.nav.core}</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Pillars Trust Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-6 border-t border-[#cfcfc7]">
          <div className="bg-white border border-[#cfcfc7] rounded-xl p-4 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-extrabold text-[#325249] font-display mb-1">
              {language === 'fr' ? 'Rigueur C.O.R.E.' : 'C.O.R.E. Rigor'}
            </div>
            <p className="text-[11px] sm:text-xs text-[#555555]">
              {language === 'fr' ? 'Méthode en 4 étapes nourrie par les sciences cognitives' : 'A 4-step method informed by the cognitive sciences'}
            </p>
          </div>

          <div className="bg-white border border-[#cfcfc7] rounded-xl p-4 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-extrabold text-[#325249] font-display mb-1">
              1:1
            </div>
            <p className="text-[11px] sm:text-xs text-[#555555]">
              {language === 'fr' ? 'Accompagnement direct par le fondateur, sans intermédiaire' : 'Direct support from the founder, no intermediary'}
            </p>
          </div>

          <div className="bg-white border border-[#cfcfc7] rounded-xl p-4 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-extrabold text-[#325249] font-display mb-1">
              &lt; 24h
            </div>
            <p className="text-[11px] sm:text-xs text-[#555555]">
              {language === 'fr' ? 'Réponse du fondateur sur WhatsApp' : 'Reply from the founder on WhatsApp'}
            </p>
          </div>

          <div className="bg-white border border-[#cfcfc7] rounded-xl p-4 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-extrabold text-[#325249] font-display mb-1">
              100%
            </div>
            <p className="text-[11px] sm:text-xs text-[#555555]">
              {language === 'fr' ? 'Opérationnel : Notion, automatisations, outils livrés et expliqués' : 'Operational: Notion, automations, tools delivered and explained'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
