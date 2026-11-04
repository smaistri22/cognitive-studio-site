import React, { useState } from 'react';
import {
  Brain,
  FolderTree,
  Cpu,
  Zap,
  Check,
  X,
  Briefcase,
  Sparkles
} from 'lucide-react';
import { CorePillar } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const MethodCORE: React.FC = () => {
  const [activePillar, setActivePillar] = useState<CorePillar['letter']>('C');
  const { language } = useLanguage();
  const t = getTranslations(language);

  const pillars = t.methodCore.pillars;
  const selected = pillars.find(p => p.letter === activePillar) || pillars[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'FolderTree': return <FolderTree className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      default: return <Brain className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="methode-core"
      className="py-16 md:py-24 bg-[#faf8f6] border-y border-[#e6dfdb] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1e9e8] border border-[#dcc9ca] text-[#7a4e54] text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#7a4e54]" />
            <span>{t.methodCore.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-[#2f2b2a] font-display tracking-tight">
            {t.methodCore.title}
          </h2>
          <p className="mt-4 text-[#555555] text-sm sm:text-base leading-relaxed">
            {t.methodCore.subtitle}
          </p>
        </div>

        {/* Pillar selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {pillars.map((pillar) => {
            const isSelected = pillar.letter === activePillar;
            return (
              <button
                key={pillar.letter}
                id={`core-pill-${pillar.letter.toLowerCase()}`}
                onClick={() => setActivePillar(pillar.letter)}
                className={`p-4 sm:p-5 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#7a4e54] border-[#5e3a40] text-white shadow-md scale-[1.02]'
                    : 'bg-white border-[#e6dfdb] text-[#2f2b2a] hover:border-[#7a4e54] hover:bg-[#f3efec]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-extrabold text-lg ${
                    isSelected
                      ? 'bg-[#5e3a40] text-[#faf8f6] border border-[#7a4e54]'
                      : 'bg-[#f3efec] text-[#7a4e54] border border-[#e6dfdb]'
                  }`}>
                    {pillar.letter}
                  </span>
                  <div className={isSelected ? 'text-[#faf8f6]' : 'text-[#555555]'}>
                    {getIcon(pillar.iconName)}
                  </div>
                </div>

                <div className={`text-base sm:text-lg font-semibold font-display ${isSelected ? 'text-white' : 'text-[#2f2b2a]'}`}>
                  {pillar.word}
                </div>
                <div className={`text-xs line-clamp-1 mt-0.5 ${isSelected ? 'text-[#faf8f6]' : 'text-[#555555]'}`}>
                  {pillar.subtitle}
                </div>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#dcc9ca]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active pillar detail */}
        <div className="bg-white border border-[#e6dfdb] rounded-2xl p-6 sm:p-8 mb-14 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="lg:max-w-xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-[#f1e9e8] text-[#7a4e54] font-mono text-xs font-bold border border-[#dcc9ca]">
                  {t.methodCore.pillarLabel} {selected.letter}
                </span>
                <span className="text-xs text-[#555555] font-mono">
                  {t.methodCore.principleLabel}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2f2b2a] font-display">
                {selected.word} : {selected.subtitle}
              </h3>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
                {selected.description}
              </p>
            </div>

            <div className="w-full lg:w-96 pt-4 lg:pt-0 lg:border-l lg:border-[#e6dfdb] lg:pl-8">
              <div className="bg-[#f3efec] border border-[#e6dfdb] rounded-xl p-4">
                <div className="flex items-center gap-2 text-[#7a4e54] text-xs font-bold uppercase tracking-wider mb-2">
                  <Briefcase className="w-4 h-4 text-[#7a4e54]" />
                  <span>{t.methodCore.applicationLabel}</span>
                </div>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {selected.businessApplication}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Before / after */}
        <div className="bg-white border border-[#e6dfdb] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-[#2f2b2a] font-display">
              {t.methodCore.compareTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#555555]">
              {t.methodCore.compareSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#f3f3f0] border border-[#e2dad6] rounded-xl p-5">
              <div className="flex items-center gap-2 text-[#777770] font-bold text-sm mb-3">
                <div className="w-6 h-6 rounded-full bg-[#f3efec] border border-[#e2dad6] flex items-center justify-center">
                  <X className="w-3.5 h-3.5 text-[#777770]" />
                </div>
                <span>{t.methodCore.withoutTitle}</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#555555]">
                {t.methodCore.without.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#777770] font-bold">✕</span>
                    <span><strong className="text-[#2f2b2a]">{item.title}</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f1e9e8]/40 border border-[#dcc9ca] rounded-xl p-5">
              <div className="flex items-center gap-2 text-[#7a4e54] font-bold text-sm mb-3">
                <div className="w-6 h-6 rounded-full bg-[#f1e9e8] border border-[#dcc9ca] flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#7a4e54]" />
                </div>
                <span>{t.methodCore.withTitle}</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#2f2b2a]">
                {t.methodCore.with.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#7a4e54] font-bold">✓</span>
                    <span><strong className="text-[#7a4e54]">{item.title}</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
