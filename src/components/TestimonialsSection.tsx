import React from 'react';
import { 
  Star, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Scale,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const testimonials = t.testimonials.items;

  const references = t.testimonials.references;

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

        {/* Références */}
        <div className="mb-12">
          <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-[#325249] mb-4 text-center">
            {t.testimonials.referencesTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {references.map((ref, idx) => (
              <div key={idx} className="bg-white border border-[#cfcfc7] rounded-2xl p-6 flex flex-col shadow-sm hover:border-[#325249] transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-xl bg-[#d8e6e1] border border-[#b8cec7] text-[#325249] flex items-center justify-center shrink-0">
                    <Scale className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#333333] font-display">{ref.client}</h4>
                    <span className="text-[11px] text-[#555555]">{ref.sector}</span>
                  </div>
                </div>
                <p className="text-xs text-[#333333] leading-relaxed flex-1">{ref.work}</p>
                {ref.url && (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#325249] hover:underline"
                  >
                    <span>{t.testimonials.visitSite}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Avis */}
        <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-[#325249] mb-4 text-center">
          {t.testimonials.reviewsTitle}
        </h3>
        <div className="max-w-2xl mx-auto">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#cfcfc7] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#555555] bg-[#eaeae5] px-2 py-0.5 rounded border border-[#cfcfc7]">
                  <ShieldCheck className="w-3 h-3 text-[#325249]" />
                  <span>{t.testimonials.verifiedGoogle}</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#333333] leading-relaxed italic mb-6 whitespace-pre-line">
                « {item.quote} »
              </p>
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#cfcfc7] flex-wrap">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#333333] font-display">{item.name}</h4>
                  <span className="text-[11px] text-[#555555]">{item.date}</span>
                </div>
                <div className="text-[11px] font-bold text-[#325249] font-mono bg-[#d8e6e1] px-2.5 py-1.5 rounded-lg border border-[#b8cec7] inline-flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 shrink-0 text-[#325249]" />
                  <span>{item.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
