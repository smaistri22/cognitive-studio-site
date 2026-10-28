import React from 'react';
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const Comparisons: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const rows = t.comparisons.rows;

  return (
    <section id="comparatif" className="py-16 md:py-24 bg-[#e0e0db] border-b border-[#cfcfc7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8e6e1] border border-[#b8cec7] text-[#325249] text-xs font-mono font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#325249]" />
            <span>{t.comparisons.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#333333] font-display tracking-tight">
            {t.comparisons.title}
          </h2>
          <p className="mt-4 text-[#555555] text-sm sm:text-base leading-relaxed">
            {t.comparisons.subtitle}
          </p>
        </div>

        <div className="bg-white border border-[#cfcfc7] rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 bg-[#eaeae5] border-b border-[#cfcfc7] p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#333333]">
            <div className="col-span-4 sm:col-span-3">{t.comparisons.colAspect}</div>
            <div className="col-span-4 sm:col-span-4 text-[#555555]">{t.comparisons.colTraditional}</div>
            <div className="col-span-4 sm:col-span-5 text-[#325249] font-display font-extrabold">{t.comparisons.colCognitive}</div>
          </div>

          <div className="divide-y divide-[#cfcfc7] text-xs sm:text-sm">
            {rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-[#eaeae5]/40 transition-colors">
                <div className="col-span-4 sm:col-span-3 font-semibold text-[#333333] pr-2">
                  {row.aspect}
                  <div className="hidden sm:block text-[11px] font-normal text-[#325249] mt-0.5">{row.advantage}</div>
                </div>
                <div className="col-span-4 sm:col-span-4 text-[#555555] pr-2 flex items-start gap-1.5">
                  <XCircle className="w-4 h-4 text-[#9e2a2b] shrink-0 mt-0.5" />
                  <span className="leading-snug">{row.traditional}</span>
                </div>
                <div className="col-span-4 sm:col-span-5 text-[#333333] flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#325249] shrink-0 mt-0.5" />
                  <span className="font-semibold text-[#325249] leading-snug">{row.cognitiveStudio}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
