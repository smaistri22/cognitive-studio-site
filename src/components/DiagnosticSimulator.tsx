import React, { useState } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Rocket
} from 'lucide-react';
import { ServiceTier } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

interface DiagnosticSimulatorProps {
  onSelectService: (service: ServiceTier) => void;
}

export const DiagnosticSimulator: React.FC<DiagnosticSimulatorProps> = ({ onSelectService }) => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const [role, setRole] = useState<'student' | 'pro' | 'incubator'>('pro');
  const [challenge, setChallenge] = useState<string>('overwhelmed');
  const [intensity, setIntensity] = useState<'urgent' | 'medium' | 'deep'>('urgent');

  const tiers = t.services.tiers;

  // Compute recommended package based on selection
  const getRecommendation = () => {
    if (role === 'pro') {
      if (intensity === 'urgent') {
        return {
          service: tiers.find(s => s.id === 'pro-hourly') || tiers.find(s => s.id === 'pro-focus') || tiers[0],
          estimatedGain: language === 'fr' ? 'Déblocage immédiat & rentabilité rapide' : 'Immediate operational unblocking & fast ROI',
          timeframe: language === 'fr' ? 'Intervention à la carte (125 € / h)' : 'On-demand session (€125 / hr)',
          highlight: language === 'fr'
            ? 'Méthode Zéro Support directement sur vos livrables réels. Déductible au titre de frais professionnels.'
            : 'Zero-Support method applied directly to your real deliverables. Deductible as a business expense.'
        };
      } else if (intensity === 'medium') {
        return {
          service: tiers.find(s => s.id === 'pro-audit') || tiers[1],
          estimatedGain: language === 'fr' ? 'Détection d’au moins 10h à 15h de fuites par mois' : 'Identification of 10-15 wasted hours per month',
          timeframe: language === 'fr' ? 'Audit Flash 2h (250 €)' : '2-hour immersion (€250)',
          highlight: language === 'fr'
            ? 'Intégralement déduit de votre forfait ou de la formule COO partagé si vous poursuivez.'
            : 'Fully deducted from your package or fractional COO formula if you continue.'
        };
      } else {
        return {
          service: tiers.find(s => s.id === 'pro-architecture') || tiers[3],
          estimatedGain: language === 'fr' ? 'Objectif : 1 à 2 jours gagnés par semaine' : 'Goal: reclaim 1-2 days per week',
          timeframe: language === 'fr' ? '15 heures clés en main (1 500 €)' : '15 hours turnkey package (€1,500)',
          highlight: language === 'fr'
            ? 'Installation complète de votre Second Cerveau digital (Notion, CRM, Automatisations).'
            : 'Turnkey installation of your digital Second Brain (Notion, CRM, automations).'
        };
      }
    } else if (role === 'incubator') {
      return {
        service: tiers.find(s => s.id === 'incubator-side') || tiers[4],
        estimatedGain: language === 'fr' ? 'Premiers revenus générés sans risque pour votre emploi' : 'First paying clients generated without risking employment',
        timeframe: language === 'fr' ? '5 étapes étalées sur mesure (paiement possible en 5 × 500 €)' : '5 structured milestones (Installment plan: 5x €500)',
        highlight: language === 'fr'
          ? 'Diagnostic, MVP, statut belge (BCE/TVA), compte pro et second cerveau clé en main.'
          : 'Diagnostic, MVP, Belgian registration kit, pro account, and turnkey second brain.'
      };
    } else {
      if (intensity === 'urgent') {
        return {
          service: tiers.find(s => s.id === 'student-commando') || tiers[6],
          estimatedGain: language === 'fr' ? 'Révisions ciblées sur vos examens clés' : 'Revision focused on your key exams',
          timeframe: language === 'fr' ? '5 heures intensives avant examens' : '5 intensive hours before exams',
          highlight: language === 'fr' 
            ? 'Plan d’urgence pour le blocus, avec un rétro-planning strict et un suivi sur WhatsApp.'
            : 'Emergency blocus plan with a strict retro-planning and WhatsApp follow-up.'
        };
      } else if (intensity === 'medium') {
        return {
          service: tiers.find(s => s.id === 'student-audit') || tiers[5],
          estimatedGain: language === 'fr' ? 'Clarté immédiate & arrêt des méthodes inefficaces' : 'Immediate clarity & elimination of flawed study habits',
          timeframe: language === 'fr' ? 'Session analytique de 1h30' : 'Single 1h30 analytical session',
          highlight: language === 'fr'
            ? 'Projet académique : diagnostic de la méthode de travail pour repartir sur des bases saines.'
            : 'Academic project: a diagnosis of study methods to restart on solid foundations.'
        };
      } else {
        return {
          service: tiers.find(s => s.id === 'student-custom') || tiers[7],
          estimatedGain: language === 'fr' ? 'Autonomie mémorielle totale & zéro dépendance' : 'Complete memory autonomy & zero dependency',
          timeframe: language === 'fr' ? 'Accompagnement continu sur mesure' : 'Ongoing tailored mentorship',
          highlight: language === 'fr'
            ? 'Construction de votre Second Cerveau étudiant et suivi continu.'
            : 'Deployment of your personal study database with regular reviews.'
        };
      }
    }
  };

  const recommendation = getRecommendation();

  return (
    <section id="simulateur" className="py-16 md:py-24 bg-[#e0e0db] border-y border-[#cfcfc7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8e6e1] border border-[#b8cec7] text-[#325249] text-xs font-mono font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#325249]" />
            <span>{t.simulator.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] font-display">
            {t.simulator.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#555555]">
            {t.simulator.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Questions Box */}
          <div className="lg:col-span-7 bg-white border border-[#cfcfc7] rounded-2xl p-6 sm:p-7 space-y-6 shadow-sm">
            
            {/* Question 1: Profil (Professionnels first) */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#555555] mb-2 font-bold">
                {t.simulator.roleLabel}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => { setRole('pro'); setChallenge('overwhelmed'); }}
                  className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold cursor-pointer ${
                    role === 'pro'
                      ? 'bg-[#325249] border-[#243c35] text-white shadow-xs'
                      : 'bg-[#eaeae5] border-[#cfcfc7] text-[#333333] hover:bg-white'
                  }`}
                >
                  <Briefcase className={`w-4 h-4 mb-1 ${role === 'pro' ? 'text-[#e0e0db]' : 'text-[#325249]'}`} />
                  <span className="font-bold block">{language === 'fr' ? 'Professionnel' : 'Professional'}</span>
                  <span className={`text-[10px] ${role === 'pro' ? 'text-[#e0e0db]' : 'text-[#555555]'}`}>
                    {language === 'fr' ? '125 € / h' : '€125 / h'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => { setRole('incubator'); setChallenge('side_fear'); }}
                  className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold cursor-pointer ${
                    role === 'incubator'
                      ? 'bg-[#325249] border-[#243c35] text-white shadow-xs'
                      : 'bg-[#eaeae5] border-[#cfcfc7] text-[#333333] hover:bg-white'
                  }`}
                >
                  <Rocket className={`w-4 h-4 mb-1 ${role === 'incubator' ? 'text-[#e0e0db]' : 'text-[#325249]'}`} />
                  <span className="font-bold block">{language === 'fr' ? 'Créateur' : 'Founder'}</span>
                  <span className={`text-[10px] ${role === 'incubator' ? 'text-[#e0e0db]' : 'text-[#555555]'}`}>
                    {language === 'fr' ? 'Incubateur' : 'Venture / Side'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => { setRole('student'); setChallenge('exam_stress'); }}
                  className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold cursor-pointer ${
                    role === 'student'
                      ? 'bg-[#325249] border-[#243c35] text-white shadow-xs'
                      : 'bg-[#eaeae5] border-[#cfcfc7] text-[#333333] hover:bg-white'
                  }`}
                >
                  <GraduationCap className={`w-4 h-4 mb-1 ${role === 'student' ? 'text-[#e0e0db]' : 'text-[#325249]'}`} />
                  <span className="font-bold block">{language === 'fr' ? 'Projet Étudiants' : 'Student Project'}</span>
                  <span className={`text-[10px] ${role === 'student' ? 'text-[#e0e0db]' : 'text-[#555555]'}`}>
                    {language === 'fr' ? 'Académique' : 'Methodology'}
                  </span>
                </button>
              </div>
            </div>

            {/* Question 2: Challenge */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#555555] mb-2 font-bold">
                {t.simulator.challengeLabel}
              </label>
              <div className="space-y-2">
                {role === 'student' ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setChallenge('exam_stress')}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer font-medium ${
                        challenge === 'exam_stress'
                          ? 'bg-[#d8e6e1] border-[#325249] text-[#325249]'
                          : 'bg-[#eaeae5] border-[#cfcfc7] text-[#555555] hover:bg-white'
                      }`}
                    >
                      <span>
                        {language === 'fr' 
                          ? 'Sauver une session ou des examens imminents (urgence blocus)' 
                          : 'Rescue an upcoming blocus or exam session (emergency panic)'}
                      </span>
                      <CheckCircle2 className={`w-4 h-4 ${challenge === 'exam_stress' ? 'text-[#325249]' : 'text-transparent'}`} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setChallenge('method_lack')}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer font-medium ${
                        challenge === 'method_lack'
                          ? 'bg-[#d8e6e1] border-[#325249] text-[#325249]'
                          : 'bg-[#eaeae5] border-[#cfcfc7] text-[#555555] hover:bg-white'
                      }`}
                    >
                      <span>
                        {language === 'fr'
                          ? 'Apprendre à travailler efficacement sans y passer des nuits blanches'
                          : 'Learn to study with deep efficiency without pulling all-nighters'}
                      </span>
                      <CheckCircle2 className={`w-4 h-4 ${challenge === 'method_lack' ? 'text-[#325249]' : 'text-transparent'}`} />
                    </button>
                  </>
                ) : role === 'pro' ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setChallenge('time_leak')}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer font-medium ${
                        challenge === 'time_leak'
                          ? 'bg-[#d8e6e1] border-[#325249] text-[#325249]'
                          : 'bg-[#eaeae5] border-[#cfcfc7] text-[#555555] hover:bg-white'
                      }`}
                    >
                      <span>
                        {language === 'fr'
                          ? 'Éliminer la charge administrative et installer un Second Cerveau'
                          : 'Eliminate administrative overhead and deploy a digital Second Brain'}
                      </span>
                      <CheckCircle2 className={`w-4 h-4 ${challenge === 'time_leak' ? 'text-[#325249]' : 'text-transparent'}`} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setChallenge('operational_growth')}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer font-medium ${
                        challenge === 'operational_growth'
                          ? 'bg-[#d8e6e1] border-[#325249] text-[#325249]'
                          : 'bg-[#eaeae5] border-[#cfcfc7] text-[#555555] hover:bg-white'
                      }`}
                    >
                      <span>
                        {language === 'fr'
                          ? 'Déléguer la technique et les opérations à un COO externalisé'
                          : 'Outsource tech and ongoing operations to a fractional COO'}
                      </span>
                      <CheckCircle2 className={`w-4 h-4 ${challenge === 'operational_growth' ? 'text-[#325249]' : 'text-transparent'}`} />
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className="w-full p-3 rounded-xl border text-left text-xs bg-[#d8e6e1] border-[#325249] text-[#325249] flex items-center justify-between font-medium cursor-default"
                  >
                    <span>
                      {language === 'fr'
                        ? 'Lancer un side-project rentable sans quitter mon emploi actuel'
                        : 'Launch a profitable side-hustle without jeopardizing existing career'}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#325249]" />
                  </button>
                )}
              </div>
            </div>

            {/* Question 3: Urgence */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#555555] mb-2 font-bold">
                {t.simulator.urgencyLabel}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setIntensity('urgent')}
                  className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                    intensity === 'urgent'
                      ? 'bg-[#325249] border-[#243c35] text-white shadow-xs'
                      : 'bg-[#eaeae5] border-[#cfcfc7] text-[#555555] hover:bg-white'
                  }`}
                >
                  {language === 'fr' ? 'Urgent / Intensif' : 'Urgent / Intensive'}
                </button>
                <button
                  type="button"
                  onClick={() => setIntensity('medium')}
                  className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                    intensity === 'medium'
                      ? 'bg-[#325249] border-[#243c35] text-white shadow-xs'
                      : 'bg-[#eaeae5] border-[#cfcfc7] text-[#555555] hover:bg-white'
                  }`}
                >
                  {language === 'fr' ? 'Diagnostic & Audit' : 'Diagnostic Audit'}
                </button>
                <button
                  type="button"
                  onClick={() => setIntensity('deep')}
                  className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                    intensity === 'deep'
                      ? 'bg-[#325249] border-[#243c35] text-white shadow-xs'
                      : 'bg-[#eaeae5] border-[#cfcfc7] text-[#555555] hover:bg-white'
                  }`}
                >
                  {language === 'fr' ? 'Suivi de Fond' : 'Deep Transformation'}
                </button>
              </div>
            </div>

          </div>

          {/* Results Box */}
          <div className="lg:col-span-5 bg-white border-2 border-[#325249] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d8e6e1] rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-[#325249] font-bold tracking-wider">
                  {language === 'fr' ? 'Recommandation Sur-Mesure' : 'Bespoke Recommendation'}
                </span>
                <span className="text-[10px] font-bold bg-[#d8e6e1] text-[#325249] px-2.5 py-0.5 rounded-md border border-[#b8cec7]">
                  {language === 'fr' ? 'Méthode C.O.R.E.' : 'C.O.R.E. Method'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#333333] font-display mb-1">
                {recommendation.service.name}
              </h3>
              <p className="text-xs text-[#555555] mb-6">
                {recommendation.service.tagline}
              </p>

              <div className="p-4 rounded-xl bg-[#eaeae5] border border-[#cfcfc7] space-y-3 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-[#555555] block uppercase font-semibold">
                    {language === 'fr' ? 'Tarif officiel TTC' : 'Official Pricing (Tax incl.)'}
                  </span>
                  <span className="text-2xl font-extrabold text-[#333333] font-display">
                    {recommendation.service.price}
                  </span>
                  {recommendation.service.priceDetail && (
                    <span className="text-xs text-[#555555] ml-1.5">{recommendation.service.priceDetail}</span>
                  )}
                </div>

                <div className="pt-2 border-t border-[#cfcfc7]">
                  <span className="text-[10px] font-mono text-[#325249] block uppercase font-bold">
                    {language === 'fr' ? 'Impact ciblé' : 'Targeted Impact'}
                  </span>
                  <p className="text-xs font-semibold text-[#333333]">
                    {recommendation.estimatedGain}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#cfcfc7]">
                  <span className="text-[10px] font-mono text-[#555555] block uppercase font-semibold">
                    {language === 'fr' ? 'Format' : 'Format'}
                  </span>
                  <p className="text-xs text-[#555555]">
                    {recommendation.timeframe}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#555555] leading-relaxed mb-6">
                {recommendation.highlight}
              </p>
            </div>

            <button
              id="simulator-action-btn"
              onClick={() => onSelectService(recommendation.service)}
              className="w-full py-3.5 px-4 rounded-xl bg-[#325249] hover:bg-[#243c35] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer border border-[#243c35]"
            >
              <span>{recommendation.service.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
