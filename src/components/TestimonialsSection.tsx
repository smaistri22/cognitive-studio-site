import React, { useState } from 'react';
import { 
  Star, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  GraduationCap, 
  Briefcase
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'etudiants' | 'pros'>('all');
  const { language } = useLanguage();
  const t = getTranslations(language);

  const testimonials = t.testimonials.items;

  const filtered = testimonials.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'etudiants') return item.type === 'Étudiant';
    if (filter === 'pros') return item.type === 'Indépendant' || item.type === 'Créateur de Projet';
    return true;
  });

  return (
    <section id="temoignages" className="py-16 md:py-24 bg-[#e0e0db] border-b border-[#cfcfc7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8e6e1] border border-[#b8cec7] text-[#325249] text-xs font-mono font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#325249]" />
            <span>{t.testimonials.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#333333] font-display tracking-tight">
            {t.testimonials.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#555555]">
            {t.testimonials.subtitle}
          </p>

          {/* Real Google Rating Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-white border border-[#cfcfc7] rounded-2xl px-5 py-3 shadow-xs">
            <div className="flex items-center gap-2">
              {/* Google 4-color G Icon */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span className="font-bold text-sm text-[#333333]">{language === 'fr' ? `${String(COMPANY_INFO.googleRating).replace('.', ',')} / 5 • ${COMPANY_INFO.googleReviewCount} avis` : `${COMPANY_INFO.googleRating} / 5 • ${COMPANY_INFO.googleReviewCount} reviews`}</span>
            </div>

            <div className="flex items-center gap-0.5 text-amber-500 relative">
              <svg width="0" height="0" className="absolute pointer-events-none opacity-0">
                <defs>
                  <linearGradient id="star-4-8" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="80%" stopColor="#f59e0b" />
                    <stop offset="80%" stopColor="#cfcfc7" />
                  </linearGradient>
                </defs>
              </svg>
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
              <Star className="w-4 h-4 fill-[url(#star-4-8)] text-amber-500" />
            </div>

            <span className="text-xs text-[#555555] hidden sm:inline">•</span>

            <span className="text-xs font-semibold text-[#555555]">
              {t.common.certifiedGoogle}
            </span>

            <a
              href={COMPANY_INFO.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#325249] hover:text-[#333333] hover:underline transition-colors ml-1"
            >
              <span>{t.common.viewOnMaps}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-[#325249] text-white shadow-xs'
                : 'bg-white text-[#555555] border border-[#cfcfc7] hover:bg-[#eaeae5]'
            }`}
          >
            {t.testimonials.filterAll} ({testimonials.length})
          </button>
          <button
            onClick={() => setFilter('etudiants')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              filter === 'etudiants'
                ? 'bg-[#325249] text-white shadow-xs'
                : 'bg-white text-[#555555] border border-[#cfcfc7] hover:bg-[#eaeae5]'
            }`}
          >
            {t.testimonials.filterStudents} (3)
          </button>
          <button
            onClick={() => setFilter('pros')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              filter === 'pros'
                ? 'bg-[#325249] text-white shadow-xs'
                : 'bg-white text-[#555555] border border-[#cfcfc7] hover:bg-[#eaeae5]'
            }`}
          >
            {t.testimonials.filterPros} (1)
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#cfcfc7] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#325249] transition-all shadow-sm hover:shadow-md relative"
            >
              <div>
                {/* Header card badge & date */}
                <div className="flex items-center justify-between gap-2 mb-3 text-[11px]">
                  <span className="font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#eaeae5] text-[#333333] border border-[#cfcfc7]">
                    {item.type}
                  </span>
                  <span className="text-[#888882] text-[11px] font-mono">
                    {item.date || (language === 'fr' ? 'Récemment' : 'Recently')}
                  </span>
                </div>

                {/* Google stars & source */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#555555] bg-[#eaeae5] px-2 py-0.5 rounded border border-[#cfcfc7]">
                    <ShieldCheck className="w-3 h-3 text-[#325249]" />
                    <span>{language === 'fr' ? 'Avis Google' : 'Google Review'}</span>
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed italic mb-6 whitespace-pre-line">
                  « {item.quote} »
                </p>
              </div>

              <div>
                {/* Metric */}
                <div className="mb-4">
                  <div className="text-[11px] font-bold text-[#325249] font-mono bg-[#d8e6e1] px-2.5 py-1.5 rounded-lg border border-[#b8cec7] inline-flex items-center gap-1.5 w-full justify-center text-center">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0 text-[#325249]" />
                    <span>{item.metric}</span>
                  </div>
                </div>

                {/* Author profile */}
                <div className="pt-4 border-t border-[#cfcfc7] flex items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#333333] font-display">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-[#555555] block leading-tight mt-0.5">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
