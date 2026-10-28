import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Euro, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const FAQSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'tarifs' | 'methode'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();
  const t = getTranslations(language);

  const faqItems = t.faq.items;
  const filteredFaqs = filter === 'all' 
    ? faqItems 
    : faqItems.filter(f => f.category === filter);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#e0e0db] border-b border-[#cfcfc7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8e6e1] border border-[#b8cec7] text-[#325249] text-xs font-mono font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#325249]" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#333333] font-display tracking-tight">
            {t.faq.title}
          </h2>
          <p className="mt-3 text-[#555555] text-xs sm:text-sm">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => { setFilter('all'); setOpenIndex(null); }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#325249] text-white shadow-sm'
                : 'text-[#555555] hover:text-[#333333] bg-white border border-[#cfcfc7]'
            }`}
          >
            {t.faq.filterAll}
          </button>

          <button
            onClick={() => { setFilter('tarifs'); setOpenIndex(null); }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              filter === 'tarifs'
                ? 'bg-[#325249] text-white shadow-sm'
                : 'text-[#555555] hover:text-[#333333] bg-white border border-[#cfcfc7]'
            }`}
          >
            <Euro className="w-3.5 h-3.5" />
            <span>{t.faq.filterTarifs}</span>
          </button>

          <button
            onClick={() => { setFilter('methode'); setOpenIndex(null); }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              filter === 'methode'
                ? 'bg-[#325249] text-white shadow-sm'
                : 'text-[#555555] hover:text-[#333333] bg-white border border-[#cfcfc7]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.faq.filterMethode}</span>
          </button>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const isTarif = faq.category === 'tarifs';

            return (
              <div
                key={idx}
                className={`bg-white border rounded-xl overflow-hidden transition-all shadow-xs ${
                  isOpen ? 'border-[#325249] ring-1 ring-[#325249]/30 shadow-sm' : 'border-[#cfcfc7] hover:border-[#325249]'
                }`}
              >
                <button
                  id={`faq-item-toggle-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-[#d8e6e1] text-[#325249] border border-[#b8cec7]">
                      {isTarif ? t.faq.filterTarifs : t.faq.filterMethode}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#333333] font-display pt-1">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-1.5 rounded-lg border transition-transform shrink-0 mt-1 ${
                    isOpen ? 'rotate-180 bg-[#325249] text-white border-[#243c35]' : 'bg-[#eaeae5] text-[#555555] border-[#cfcfc7]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#eaeae5] animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
