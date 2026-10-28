import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, User, Users, Briefcase } from 'lucide-react';
import { ServiceTier } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

interface DiagnosticSimulatorProps {
  onSelectService: (service: ServiceTier) => void;
}

type Role = 'solo' | 'team' | 'liberal';
type Challenge = 'web' | 'billing' | 'files' | 'security' | 'all';
type Intensity = 'ponctuel' | 'projet' | 'suivi';

// Table de recommandation : priorité × format × structure → identifiant de prestation
const pickServiceId = (role: Role, challenge: Challenge, intensity: Intensity): string => {
  const team = role === 'team';
  switch (challenge) {
    case 'web':
      if (intensity === 'ponctuel') return 'web-essentiel';
      if (intensity === 'projet') return team ? 'web-surmesure' : 'web-cabinet';
      return 'sub-maintenance';
    case 'billing':
      if (intensity === 'ponctuel') return 'files-billing';
      if (intensity === 'projet') return 'pack-gestion';
      return team ? 'pro-retainer' : 'sub-partner';
    case 'files':
      if (intensity === 'ponctuel') return 'pro-focus';
      if (intensity === 'projet') return team ? 'files-ecosystem' : 'pro-architecture';
      return team ? 'pro-retainer' : 'sub-partner';
    case 'security':
      if (intensity === 'ponctuel') return 'office-security';
      if (intensity === 'projet') return 'office-setup';
      return 'sub-partner';
    case 'all':
    default:
      if (intensity === 'ponctuel') return 'pro-audit';
      if (intensity === 'projet') return team ? 'pack-premium' : role === 'liberal' ? 'pack-demarrage' : 'pack-cabinet';
      return team ? 'pro-retainer' : 'sub-partner';
  }
};

export const DiagnosticSimulator: React.FC<DiagnosticSimulatorProps> = ({ onSelectService }) => {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const sim = t.simulator;

  const [role, setRole] = useState<Role>('solo');
  const [challenge, setChallenge] = useState<Challenge>('all');
  const [intensity, setIntensity] = useState<Intensity>('projet');

  const tiers = t.services.tiers;
  const service = tiers.find(s => s.id === pickServiceId(role, challenge, intensity)) || tiers[0];

  const roleIcon = (value: Role, active: boolean) => {
    const cls = `w-4 h-4 mb-1 ${active ? 'text-[#e0e0db]' : 'text-[#325249]'}`;
    if (value === 'solo') return <User className={cls} />;
    if (value === 'team') return <Users className={cls} />;
    return <Briefcase className={cls} />;
  };

  return (
    <section id="simulateur" className="py-16 md:py-24 bg-[#e0e0db] border-y border-[#cfcfc7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8e6e1] border border-[#b8cec7] text-[#325249] text-xs font-mono font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#325249]" />
            <span>{sim.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] font-display">{sim.title}</h2>
          <p className="mt-2 text-xs sm:text-sm text-[#555555]">{sim.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          <div className="lg:col-span-7 bg-white border border-[#cfcfc7] rounded-2xl p-6 sm:p-7 space-y-6 shadow-sm">

            {/* Q1 */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#555555] mb-2 font-bold">{sim.roleLabel}</label>
              <div className="grid grid-cols-3 gap-2">
                {sim.roles.map((r) => {
                  const active = role === r.value;
                  return (
                    <button
                      key={r.value}
                      type="button"
                      onClick={() => setRole(r.value)}
                      className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold cursor-pointer ${
                        active ? 'bg-[#325249] border-[#243c35] text-white shadow-xs' : 'bg-[#eaeae5] border-[#cfcfc7] text-[#333333] hover:bg-white'
                      }`}
                    >
                      {roleIcon(r.value, active)}
                      <span className="font-bold block">{r.title}</span>
                      <span className={`text-[10px] ${active ? 'text-[#e0e0db]' : 'text-[#555555]'}`}>{r.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Q2 */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#555555] mb-2 font-bold">{sim.challengeLabel}</label>
              <div className="space-y-2">
                {sim.challenges.map((c) => {
                  const active = challenge === c.value;
                  return (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => setChallenge(c.value)}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer font-medium ${
                        active ? 'bg-[#d8e6e1] border-[#325249] text-[#325249]' : 'bg-[#eaeae5] border-[#cfcfc7] text-[#555555] hover:bg-white'
                      }`}
                    >
                      <span>{c.label}</span>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${active ? 'text-[#325249]' : 'text-transparent'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Q3 */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#555555] mb-2 font-bold">{sim.intensityLabel}</label>
              <div className="grid grid-cols-3 gap-2">
                {sim.intensities.map((i) => (
                  <button
                    key={i.value}
                    type="button"
                    onClick={() => setIntensity(i.value)}
                    className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                      intensity === i.value ? 'bg-[#325249] border-[#243c35] text-white shadow-xs' : 'bg-[#eaeae5] border-[#cfcfc7] text-[#555555] hover:bg-white'
                    }`}
                  >
                    {i.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-5 bg-white border-2 border-[#325249] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d8e6e1] rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-[#325249] font-bold tracking-wider">{sim.resultBadge}</span>
                <span className="text-[10px] font-bold bg-[#d8e6e1] text-[#325249] px-2.5 py-0.5 rounded-md border border-[#b8cec7]">
                  {t.services.categories[service.target].label}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#333333] font-display mb-1">{service.name}</h3>
              <p className="text-xs text-[#555555] mb-6">{service.tagline}</p>

              <div className="p-4 rounded-xl bg-[#eaeae5] border border-[#cfcfc7] space-y-3 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-[#555555] block uppercase font-semibold">{sim.priceLabel}</span>
                  <span className="text-2xl font-extrabold text-[#333333] font-display">{service.price}</span>
                  {service.priceDetail && <span className="text-xs text-[#555555] ml-1.5">{service.priceDetail}</span>}
                </div>
                {service.expectedImpact && (
                  <div className="pt-2 border-t border-[#cfcfc7]">
                    <span className="text-[10px] font-mono text-[#325249] block uppercase font-bold">{sim.impactLabel}</span>
                    <p className="text-xs font-semibold text-[#333333]">{service.expectedImpact}</p>
                  </div>
                )}
                {service.duration && (
                  <div className="pt-2 border-t border-[#cfcfc7]">
                    <span className="text-[10px] font-mono text-[#555555] block uppercase font-semibold">{sim.formatLabel}</span>
                    <p className="text-xs text-[#555555]">{service.duration}</p>
                  </div>
                )}
              </div>

              {service.idealFor && (
                <p className="text-xs text-[#555555] leading-relaxed mb-6">{service.idealFor}</p>
              )}
            </div>

            <button
              id="simulator-action-btn"
              onClick={() => onSelectService(service)}
              className="relative w-full py-3.5 px-4 rounded-xl bg-[#325249] hover:bg-[#243c35] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer border border-[#243c35]"
            >
              <span>{service.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
