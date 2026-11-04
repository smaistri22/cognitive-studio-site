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
  PlusCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { AudienceType, ServiceCategory, ServiceTier } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

interface ServicesSectionProps {
  currentAudience: AudienceType;
  onSelectAudience: (aud: AudienceType) => void;
  onSelectService: (service: ServiceTier) => void;
}

const CATEGORY_ORDER: ServiceCategory[] = ['formules', 'conseil', 'web', 'fichiers', 'bureau', 'abonnements'];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentAudience,
  onSelectAudience,
  onSelectService
}) => {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const s = t.services;

  const [activeCategory, setActiveCategory] = useState<AudienceType>(currentAudience);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [viewMode, setViewMode] = useState<'cards' | 'compare'>('cards');

  useEffect(() => {
    setActiveCategory(currentAudience);
  }, [currentAudience]);

  const selectCategory = (cat: AudienceType) => {
    setActiveCategory(cat);
    onSelectAudience(cat);
  };

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allTiers = s.tiers;
  const filteredServices = activeCategory === 'all'
    ? allTiers
    : allTiers.filter(tier => tier.target === activeCategory);

  const filteredOptions = activeCategory === 'all' || activeCategory === 'formules' || activeCategory === 'abonnements'
    ? s.options
    : s.options.filter(o => o.category === activeCategory);

  const activeInfo = activeCategory !== 'all' ? s.categories[activeCategory] : null;

  return (
    <section id="services-section" className="py-20 bg-[#faf8f6] border-b border-[#e6dfdb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1e9e8] border border-[#dcc9ca] text-[#7a4e54] text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#7a4e54]" />
            <span>{s.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2f2b2a] font-display tracking-tight leading-tight">
            {s.title}
          </h2>
          <p className="mt-4 text-[#555555] text-sm sm:text-base leading-relaxed">
            {s.subtitle}
          </p>
        </div>

        {/* Pathway */}
        <div className="mb-10 bg-white rounded-2xl border border-[#e6dfdb] p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4 text-[#7a4e54] font-mono text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-[#7a4e54]" />
            <span>{s.pathwayTitle}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {s.pathway.map((item, idx) => (
              <div key={idx} className="bg-[#f3efec] rounded-xl p-4 border border-[#e6dfdb]">
                <div className="text-[11px] font-mono font-bold text-[#7a4e54] mb-1">{item.step}</div>
                <h4 className="text-sm font-semibold text-[#2f2b2a] font-display mb-1">{item.title}</h4>
                <p className="text-xs text-[#555555] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category tabs */}
        <div className="bg-white p-2 rounded-2xl border border-[#e6dfdb] shadow-xs mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {CATEGORY_ORDER.map((cat) => {
              const info = s.categories[cat];
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  id={`tab-service-${cat}`}
                  onClick={() => selectCategory(cat)}
                  className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                    isActive
                      ? 'bg-[#7a4e54] text-white shadow-sm'
                      : 'text-[#555555] hover:text-[#2f2b2a] hover:bg-[#f3efec]'
                  }`}
                >
                  <span className="font-bold text-center">{info.label}</span>
                  <span className={`text-[10px] ${isActive ? 'text-[#faf8f6]' : 'text-[#7a4e54] font-bold'}`}>
                    {info.short}
                  </span>
                </button>
              );
            })}
            <button
              onClick={() => selectCategory('all')}
              className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#7a4e54] text-white shadow-sm'
                  : 'text-[#555555] hover:text-[#2f2b2a] hover:bg-[#f3efec]'
              }`}
            >
              <span className="font-bold">{s.allLabel}</span>
              <span className={`text-[10px] ${activeCategory === 'all' ? 'text-[#faf8f6]' : 'text-[#777770]'}`}>
                {allTiers.length} {s.offersLabel}
              </span>
            </button>
          </div>
        </div>

        {/* Category header + view toggle */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-[#2f2b2a] font-display">
              {activeInfo ? activeInfo.title : (language === 'fr' ? 'Toutes les prestations' : 'All services')}
            </h3>
            <p className="text-xs text-[#555555] max-w-2xl">
              {activeInfo ? activeInfo.subtitle : t.common.vatNote}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-[#e6dfdb] text-xs">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'cards' ? 'bg-[#7a4e54] text-white' : 'text-[#555555] hover:text-[#2f2b2a]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{s.cardsView}</span>
            </button>
            <button
              onClick={() => setViewMode('compare')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'compare' ? 'bg-[#7a4e54] text-white' : 'text-[#555555] hover:text-[#2f2b2a]'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{s.tableView}</span>
            </button>
          </div>
        </div>

        {/* CARDS */}
        {viewMode === 'cards' && (
          <div className={`grid grid-cols-1 md:grid-cols-2 ${filteredServices.length === 4 ? 'xl:grid-cols-4 gap-5' : 'lg:grid-cols-3 gap-7'} items-stretch`}>
            {filteredServices.map((tier) => {
              const isPopular = tier.popular;
              const isExpanded = !!expandedCards[tier.id];

              return (
                <div
                  key={tier.id}
                  id={`card-${tier.id}`}
                  className={`group relative bg-white rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:shadow-md ${
                    isPopular
                      ? 'border-[#7a4e54] shadow-sm ring-1 ring-[#7a4e54]/20'
                      : 'border-[#e6dfdb] hover:border-[#7a4e54]'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#7a4e54] text-white text-[11px] font-bold font-mono uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs flex items-center gap-1.5 border border-[#5e3a40] whitespace-nowrap">
                      <Sparkles className="w-3 h-3 text-[#faf8f6]" />
                      <span>{tier.badge || s.recommended}</span>
                    </div>
                  )}

                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-[#f1e9e8] text-[#7a4e54] border border-[#dcc9ca]">
                        {s.categories[tier.target].label}
                      </span>
                      {!isPopular && tier.badge && (
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-[#f3efec] text-[#2f2b2a] border border-[#e6dfdb]">
                          {tier.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-[#2f2b2a] font-display mb-2 tracking-tight group-hover:text-[#7a4e54] transition-colors">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#555555] leading-relaxed mb-4 min-h-[34px]">
                      {tier.tagline}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      {tier.duration && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#f3efec] text-[#2f2b2a] px-2.5 py-1 rounded-lg border border-[#e6dfdb]">
                          <Clock className="w-3 h-3 text-[#7a4e54]" />
                          <span>{tier.duration}</span>
                        </span>
                      )}
                      {tier.format && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#f3efec] text-[#2f2b2a] px-2.5 py-1 rounded-lg border border-[#e6dfdb]">
                          <MapPin className="w-3 h-3 text-[#7a4e54]" />
                          <span>{tier.format}</span>
                        </span>
                      )}
                    </div>

                    {tier.idealFor && (
                      <div className="mb-5 p-3 rounded-xl bg-[#f3efec]/60 border border-[#e6dfdb] text-xs">
                        <span className="font-bold text-[#7a4e54] block mb-0.5 text-[11px] uppercase tracking-wider font-mono">
                          {s.idealForLabel}
                        </span>
                        <p className="text-[#555555] leading-snug">{tier.idealFor}</p>
                      </div>
                    )}

                    <div className="py-4 border-y border-[#e6dfdb] mb-5">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-3xl sm:text-4xl font-semibold text-[#2f2b2a] font-display tracking-tight">
                          {tier.price}
                        </span>
                        {tier.priceDetail && (
                          <span className="text-xs text-[#555555] font-medium">{tier.priceDetail}</span>
                        )}
                      </div>
                      {tier.highlightNote && (
                        <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#f1e9e8] text-[#7a4e54] text-[11px] font-semibold border border-[#dcc9ca]">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#7a4e54]" />
                          <span>{tier.highlightNote}</span>
                        </div>
                      )}
                    </div>

                    {tier.deliverables && tier.deliverables.length > 0 && (
                      <div className="mb-4 space-y-2">
                        <span className="text-[11px] font-mono uppercase text-[#7a4e54] tracking-wider font-bold flex items-center gap-1.5">
                          <FileCheck className="w-3.5 h-3.5 text-[#7a4e54]" />
                          <span>{s.deliverablesLabel}</span>
                        </span>
                        <div className="space-y-1.5">
                          {tier.deliverables.map((deliv, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-[#2f2b2a] bg-[#f3efec] p-2 rounded-lg border border-[#e6dfdb]">
                              <Check className="w-3.5 h-3.5 text-[#7a4e54] mt-0.5 shrink-0 stroke-[2.5]" />
                              <span className="font-medium">{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {tier.expectedImpact && (
                      <div className="mb-5 p-2.5 rounded-xl bg-[#f1e9e8]/40 border border-[#dcc9ca] text-xs flex items-start gap-2 text-[#7a4e54]">
                        <TrendingUp className="w-4 h-4 shrink-0 text-[#7a4e54] mt-0.5" />
                        <div>
                          <span className="font-bold block text-[10px] uppercase font-mono">{s.roiLabel}</span>
                          <span className="text-xs leading-snug text-[#2f2b2a]">{tier.expectedImpact}</span>
                        </div>
                      </div>
                    )}

                    <div className="mt-auto pt-2">
                      <button
                        type="button"
                        onClick={() => toggleExpand(tier.id)}
                        className="w-full text-left py-2 text-xs font-semibold text-[#7a4e54] hover:underline flex items-center justify-between border-t border-[#e6dfdb] pt-3 transition-colors cursor-pointer"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-wider">
                          {isExpanded ? s.hideDetails : s.showDetails(tier.features.length)}
                        </span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                      {isExpanded && (
                        <ul className="pt-3 space-y-2 border-t border-[#e6dfdb] mt-2 animate-fadeIn">
                          {tier.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#2f2b2a] leading-normal">
                              <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#7a4e54] stroke-[2.5]" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#f3efec]">
                    <button
                      id={`btn-select-${tier.id}`}
                      onClick={() => onSelectService(tier)}
                      className={`w-full mt-4 py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                        isPopular
                          ? 'bg-[#7a4e54] hover:bg-[#5e3a40] text-white shadow-sm border border-[#5e3a40]'
                          : 'bg-[#f3efec] hover:bg-[#7a4e54] hover:text-white text-[#7a4e54] border border-[#e6dfdb]'
                      }`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="mt-2 text-center text-[10px] text-[#777770]">{s.cardFooter}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TABLE */}
        {viewMode === 'compare' && (
          <div className="bg-white rounded-2xl border border-[#e6dfdb] shadow-xs overflow-hidden">
            <div className="p-4 sm:p-6 bg-[#f3efec] border-b border-[#e6dfdb]">
              <h4 className="text-base sm:text-lg font-semibold text-[#2f2b2a] font-display">{s.tableTitle}</h4>
              <p className="text-xs text-[#555555]">{s.tableSubtitle}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#f3efec] text-[#7a4e54] font-mono text-[11px] uppercase tracking-wider border-b border-[#e6dfdb]">
                    <th className="p-4 font-bold">{s.colPackage}</th>
                    <th className="p-4 font-bold">{s.colCategory}</th>
                    <th className="p-4 font-bold">{s.colPrice}</th>
                    <th className="p-4 font-bold">{s.colDuration}</th>
                    <th className="p-4 font-bold">{s.colFormat}</th>
                    <th className="p-4 font-bold">{s.colDeliverables}</th>
                    <th className="p-4 font-bold text-right">{s.colAction}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e6dfdb]">
                  {filteredServices.map((tier) => (
                    <tr key={tier.id} className="hover:bg-[#f3efec]/50 transition-colors">
                      <td className="p-4 font-bold text-[#2f2b2a]">
                        <div className="flex items-center gap-2">
                          <span>{tier.name}</span>
                          {tier.popular && (
                            <span className="px-2 py-0.5 text-[9px] font-bold rounded-md bg-[#7a4e54] text-white">{s.popular}</span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#555555] font-normal mt-0.5 line-clamp-1">{tier.tagline}</div>
                      </td>
                      <td className="p-4">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-[#f1e9e8] text-[#7a4e54] font-semibold whitespace-nowrap">
                          {s.categories[tier.target].label}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="font-semibold text-sm text-[#2f2b2a] font-display whitespace-nowrap">{tier.price}</div>
                        <div className="text-[10px] text-[#555555]">{tier.priceDetail}</div>
                      </td>
                      <td className="p-4 text-[#2f2b2a] font-medium">{tier.duration}</td>
                      <td className="p-4 text-[#555555]">{tier.format}</td>
                      <td className="p-4 text-[#2f2b2a] max-w-xs">
                        <ul className="space-y-1">
                          {(tier.deliverables || []).slice(0, 2).map((del, i) => (
                            <li key={i} className="flex items-center gap-1.5 text-[11px]">
                              <Check className="w-3 h-3 text-[#7a4e54] shrink-0" />
                              <span className="line-clamp-1">{del}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => onSelectService(tier)}
                          className="px-3 py-1.5 rounded-lg bg-[#7a4e54] hover:bg-[#5e3a40] text-white font-bold text-xs transition-colors shadow-xs cursor-pointer inline-flex items-center gap-1"
                        >
                          <span>{s.select}</span>
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

        {/* Options */}
        {filteredOptions.length > 0 && (
          <div className="mt-12 bg-white rounded-2xl border border-[#e6dfdb] shadow-xs overflow-hidden">
            <div className="p-4 sm:p-6 bg-[#f3efec] border-b border-[#e6dfdb] flex items-center gap-2">
              <PlusCircle className="w-4 h-4 text-[#7a4e54]" />
              <div>
                <h4 className="text-base font-semibold text-[#2f2b2a] font-display">{s.optionsTitle}</h4>
                <p className="text-xs text-[#555555]">{s.optionsSubtitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-[#e6dfdb]">
              {filteredOptions.map((opt, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4 px-5 py-3 border-b border-[#f3efec] text-xs">
                  <span className="text-[#2f2b2a]">{opt.name}</span>
                  <span className="font-bold text-[#7a4e54] whitespace-nowrap font-mono">{opt.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Banner */}
        <div className="mt-14 bg-white border border-[#dcc9ca] rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#f1e9e8] border border-[#dcc9ca] flex items-center justify-center text-[#7a4e54] shrink-0 mt-1">
                <ShieldCheck className="w-6 h-6 text-[#7a4e54]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-semibold text-[#2f2b2a] font-display">{s.bannerTitle}</h4>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">{s.bannerText}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 lg:items-end justify-center">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-[#7a4e54] hover:bg-[#5e3a40] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#faf8f6]" />
                <span>{s.bannerWhatsapp}</span>
              </a>
              <a
                href="#simulateur"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#f3efec] hover:bg-[#e6dfdb] text-[#7a4e54] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 border border-[#e6dfdb]"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#7a4e54]" />
                <span>{s.bannerSimulator}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
