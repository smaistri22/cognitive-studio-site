import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Compass,
  Scale,
  Globe,
  FileSpreadsheet,
  ShieldCheck,
  Briefcase,
  Star
} from 'lucide-react';
import { AudienceType, ServiceCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

interface HeroProps {
  currentAudience: AudienceType;
  onSelectAudience: (aud: AudienceType) => void;
  onOpenBooking: () => void;
}

const poleIcon = (category: ServiceCategory) => {
  switch (category) {
    case 'web': return <Globe className="w-5 h-5" />;
    case 'fichiers': return <FileSpreadsheet className="w-5 h-5" />;
    case 'bureau': return <ShieldCheck className="w-5 h-5" />;
    default: return <Briefcase className="w-5 h-5" />;
  }
};

export const Hero: React.FC<HeroProps> = ({ onSelectAudience, onOpenBooking }) => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const goToCategory = (category: ServiceCategory) => {
    onSelectAudience(category);
    const el = document.getElementById('services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero-section"
      className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-[#e0e0db] border-b border-[#cfcfc7]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#325249]/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#325249]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8e6e1] border border-[#b8cec7] text-xs font-semibold text-[#325249] shadow-sm">
            <Scale className="w-3.5 h-3.5 text-[#325249]" />
            <span>{t.hero.specialtyBadge}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#cfcfc7] text-[11px] font-bold text-[#325249] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#325249]" />
            <span>{t.common.vatNote}</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#333333] font-display leading-[1.15]">
            {t.hero.h1Main} <br className="hidden sm:inline" />
            <span className="text-[#325249] underline decoration-[#325249]/40 decoration-wavy">
              {t.hero.h1Accent}
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#333333]/90 max-w-2xl mx-auto leading-relaxed font-normal">
            {t.hero.description}
          </p>

          <p className="mt-3 text-xs sm:text-sm text-[#555555] max-w-xl mx-auto">
            {t.hero.scienceNote}
          </p>
        </div>

        {/* CTA */}
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
            <span>{t.hero.ctaSimulator}</span>
          </a>
        </div>

        {/* Pôles */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center text-xs font-mono uppercase tracking-wider font-bold text-[#325249] mb-4">
            {t.hero.polesTitle}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.hero.poles.map((pole) => (
              <button
                key={pole.category}
                type="button"
                onClick={() => goToCategory(pole.category)}
                className="group text-left bg-white border border-[#cfcfc7] hover:border-[#325249] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded-xl bg-[#d8e6e1] border border-[#b8cec7] text-[#325249] flex items-center justify-center">
                    {poleIcon(pole.category)}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#325249] bg-[#eaeae5] border border-[#cfcfc7] rounded-md px-2 py-0.5">
                    {pole.from}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#333333] font-display mb-1 group-hover:text-[#325249] transition-colors">
                  {pole.title}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed flex-1">
                  {pole.desc}
                </p>
                <span className="mt-3 text-xs font-semibold text-[#325249] flex items-center gap-1">
                  {language === 'fr' ? 'Voir les tarifs' : 'See pricing'}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-6 border-t border-[#cfcfc7]">
          {t.hero.metrics.map((m, idx) => (
            <div key={idx} className="bg-white border border-[#cfcfc7] rounded-xl p-4 text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-extrabold text-[#325249] font-display mb-1">
                {m.value}
              </div>
              <p className="text-[11px] sm:text-xs text-[#555555]">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="#temoignages"
            className="inline-flex items-center gap-1.5 text-xs text-[#555555] hover:text-[#325249]"
          >
            <Star className="w-3.5 h-3.5 text-[#e0a800] fill-[#e0a800]" />
            <span>{language === 'fr' ? 'Note Google : 4,8 / 5 (6 avis)' : 'Google rating: 4.8 / 5 (6 reviews)'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
