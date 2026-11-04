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
      className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-[#faf8f6] border-b border-[#e6dfdb]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#7a4e54]/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#7a4e54]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1e9e8] border border-[#dcc9ca] text-xs font-semibold text-[#7a4e54] shadow-sm">
            <Scale className="w-3.5 h-3.5 text-[#7a4e54]" />
            <span>{t.hero.specialtyBadge}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e6dfdb] text-[11px] font-bold text-[#7a4e54] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#7a4e54]" />
            <span>{t.common.vatNote}</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-normal text-[#2f2b2a] font-display leading-[1.15]">
            {t.hero.h1Main} <br className="hidden sm:inline" />
            <span className="text-[#7a4e54]">
              {t.hero.h1Accent}
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#2f2b2a]/90 max-w-2xl mx-auto leading-relaxed font-normal">
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
            className="px-6 py-3.5 rounded-xl bg-[#7a4e54] hover:bg-[#5e3a40] text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02] cursor-pointer flex items-center gap-2 border border-[#7a4e54]"
          >
            <span>{t.hero.ctaBooking}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <a
            href="#simulateur"
            className="px-5 py-3.5 rounded-xl bg-white hover:bg-[#f3efec] text-[#7a4e54] font-semibold text-sm border border-[#dcc9ca] transition-all flex items-center gap-2 shadow-xs hover:border-[#7a4e54]"
          >
            <Compass className="w-4 h-4 text-[#7a4e54]" />
            <span>{t.hero.ctaSimulator}</span>
          </a>
        </div>

        {/* Pôles */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center text-xs font-mono uppercase tracking-wider font-bold text-[#7a4e54] mb-4">
            {t.hero.polesTitle}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.hero.poles.map((pole) => (
              <button
                key={pole.category}
                type="button"
                onClick={() => goToCategory(pole.category)}
                className="group text-left bg-white border border-[#e6dfdb] hover:border-[#7a4e54] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded-xl bg-[#f1e9e8] border border-[#dcc9ca] text-[#7a4e54] flex items-center justify-center">
                    {poleIcon(pole.category)}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#7a4e54] bg-[#f3efec] border border-[#e6dfdb] rounded-md px-2 py-0.5">
                    {pole.from}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#2f2b2a] font-display mb-1 group-hover:text-[#7a4e54] transition-colors">
                  {pole.title}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed flex-1">
                  {pole.desc}
                </p>
                <span className="mt-3 text-xs font-semibold text-[#7a4e54] flex items-center gap-1">
                  {language === 'fr' ? 'Voir les tarifs' : 'See pricing'}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-6 border-t border-[#e6dfdb]">
          {t.hero.metrics.map((m, idx) => (
            <div key={idx} className="bg-white border border-[#e6dfdb] rounded-xl p-4 text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-semibold text-[#7a4e54] font-display mb-1">
                {m.value}
              </div>
              <p className="text-[11px] sm:text-xs text-[#555555]">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="#temoignages"
            className="inline-flex items-center gap-1.5 text-xs text-[#555555] hover:text-[#7a4e54]"
          >
            <Star className="w-3.5 h-3.5 text-[#e0a800] fill-[#e0a800]" />
            <span>{language === 'fr' ? 'Note Google : 4,8 / 5 (6 avis)' : 'Google rating: 4.8 / 5 (6 reviews)'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
