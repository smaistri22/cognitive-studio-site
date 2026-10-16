import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  GraduationCap, 
  Briefcase 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const Comparisons: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'pros'>('pros');
  const { language } = useLanguage();
  const t = getTranslations(language);

  const rows = activeTab === 'pros' ? t.comparisons.proRows : t.comparisons.studentRows;

  return (
    <section id="comparatif" className="py-16 md:py-24 bg-[#e0e0db] border-b border-[#cfcfc7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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

        {/* Tab Switcher: Pros First */}
        <div className="flex justify-center mb-8">
          <div className="bg-white border border-[#cfcfc7] p-1.5 rounded-2xl inline-flex gap-2 shadow-xs">
            <button
              id="compare-tab-pros"
              onClick={() => setActiveTab('pros')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'pros'
                  ? 'bg-[#325249] text-white shadow-sm'
                  : 'text-[#555555] hover:text-[#333333]'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>{t.comparisons.tabPros}</span>
            </button>

            <button
              id="compare-tab-students"
              onClick={() => setActiveTab('students')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'students'
                  ? 'bg-[#325249] text-white shadow-sm'
                  : 'text-[#555555] hover:text-[#333333]'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.comparisons.tabStudents}</span>
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border border-[#cfcfc7] rounded-2xl overflow-hidden shadow-sm">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#eaeae5] border-b border-[#cfcfc7] p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#333333]">
            <div className="col-span-4 sm:col-span-3">{t.comparisons.colAspect}</div>
            <div className="col-span-4 sm:col-span-4 text-[#555555]">
              {t.comparisons.colTraditional}
            </div>
            <div className="col-span-4 sm:col-span-5 text-[#325249] font-display font-extrabold flex items-center gap-1.5">
              <span>{t.comparisons.colCognitive}</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-[#d8e6e1] text-[10px] font-mono font-bold text-[#325249] border border-[#b8cec7]">
                MÉTHODE C.O.R.E.
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#cfcfc7] text-xs sm:text-sm">
            {rows.map((row, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-[#eaeae5]/40 transition-colors"
              >
                <div className="col-span-4 sm:col-span-3 font-semibold text-[#333333]">
                  {row.aspect}
                </div>

                <div className="col-span-4 sm:col-span-4 text-[#555555] pr-2 flex items-start gap-1.5">
                  <XCircle className="w-4 h-4 text-[#9e2a2b] shrink-0 mt-0.5" />
                  <span className="leading-snug">{row.traditional}</span>
                </div>

                <div className="col-span-4 sm:col-span-5 text-[#333333] flex items-start gap-1.5 bg-[#d8e6e1]/30 sm:bg-transparent -my-2 py-2 px-2 sm:p-0 rounded-lg sm:rounded-none">
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
