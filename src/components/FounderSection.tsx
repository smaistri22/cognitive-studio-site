import React from 'react';
import { 
  Award, 
  BookOpen, 
  MapPin, 
  Phone, 
  Linkedin, 
  Instagram, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const FounderSection: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section id="fondateur" className="py-16 md:py-24 bg-[#e0e0db] border-b border-[#cfcfc7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8e6e1] border border-[#b8cec7] text-[#325249] text-xs font-mono font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#325249]" />
            <span>{t.founder.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#333333] font-display tracking-tight">
            {t.founder.title}
          </h2>
          <p className="mt-4 text-[#555555] text-sm sm:text-base leading-relaxed">
            {t.founder.subtitle}
          </p>
        </div>

        {/* Founder Bio Card */}
        <div className="bg-white border border-[#cfcfc7] rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Visual Portrait & Badges */}
            <div className="lg:col-span-4 space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#cfcfc7] bg-[#eaeae5] p-6 text-center shadow-xs">
                <div className="w-28 h-28 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-[#325249] shadow-sm relative">
                  <img 
                    src="/simon-maistriau.jpg" 
                    alt="Simon Maistriau" 
                    className="w-full h-full object-cover object-center"
                    width={112}
                    height={112}
                  />
                </div>

                <h3 className="text-xl font-bold text-[#333333] font-display">
                  {COMPANY_INFO.founder}
                </h3>
                <p className="text-xs text-[#325249] font-mono font-semibold mt-1">
                  {t.founder.roleTitle}
                </p>

                <div className="mt-4 pt-4 border-t border-[#cfcfc7] space-y-2 text-left text-xs text-[#333333]">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#325249] shrink-0" />
                    <span><strong className="text-[#333333]">{t.founder.credentials[0]}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#325249] shrink-0" />
                    <span>{t.founder.credentials[1]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#325249] shrink-0" />
                    <span>Avenue Heydenberg 39, 1200 Woluwe-Saint-Lambert</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-center gap-3">
                  <a
                    href={COMPANY_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white hover:bg-[#325249] text-[#333333] hover:text-white transition-colors border border-[#cfcfc7]"
                    title="LinkedIn Simon Maistriau"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white hover:bg-[#325249] text-[#333333] hover:text-white transition-colors border border-[#cfcfc7]"
                    title="Instagram Cognitive Studio"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="p-2.5 rounded-xl bg-[#d8e6e1] hover:bg-[#325249] text-[#325249] hover:text-white transition-colors border border-[#b8cec7]"
                    title="Appeler Simon Maistriau"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Brussels Zones Card */}
              <div className="bg-[#eaeae5] border border-[#cfcfc7] rounded-xl p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#333333] mb-2">
                  <MapPin className="w-4 h-4 text-[#325249]" />
                  <span>{language === 'fr' ? 'Zones d’Intervention Physique' : 'Physical Coverage Areas'}</span>
                </div>
                <p className="text-[11px] text-[#555555] mb-2">
                  {language === 'fr' 
                    ? 'Déplacements au bureau, sur site & domiciles à Bruxelles :' 
                    : 'In-office, on-site, and home visits in Brussels:'}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {COMPANY_INFO.zones.map((zone, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white text-[#333333] border border-[#cfcfc7]"
                    >
                      {zone}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Founder's Narrative */}
            <div className="lg:col-span-8 space-y-6 text-sm text-[#333333] leading-relaxed">
              
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#333333] font-display mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#325249]"></span>
                  {language === 'fr' 
                    ? 'Un parcours universitaire au service de la méthode' 
                    : 'An academic background in the service of method'}
                </h4>
                <p>
                  {t.founder.bio1}
                </p>
                <p className="mt-2 text-[#555555]">
                  {language === 'fr' 
                    ? "Mon master à Leiden portait sur l'évolution de la cognition humaine, à la croisée de l'archéologie, des sciences cognitives et de la théorie de l'évolution. J'en ai gardé une méthode : comprendre comment l'on apprend et comment l'on résout des problèmes complexes, pour en tirer des outils concrets. C'est cette rigueur que j'apporte à mes étudiants et à mes clients professionnels. Mes études de droit actuelles nourrissent la même exigence de structure et de précision."
                    : "My Master's at Leiden focused on the evolution of human cognition, at the crossroads of archaeology, the cognitive sciences and evolutionary theory. It gave me a method: understand how people learn and solve complex problems, and turn that into practical tools. That is the rigour I bring to my students and professional clients. My current law studies call for the same discipline of structure and precision."}
                </p>
              </div>

              <div className="pt-4 border-t border-[#cfcfc7]">
                <h4 className="text-base sm:text-lg font-bold text-[#333333] font-display mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#325249]"></span>
                  {language === 'fr' 
                    ? 'Le Déclic : La Naissance de la Méthode C.O.R.E.' 
                    : 'The Turning Point: Genesis of the C.O.R.E. Method'}
                </h4>
                <p>
                  {t.founder.bio2}
                </p>
                <p className="mt-2 text-[#325249] font-semibold">
                  {t.founder.bio3}
                </p>
              </div>

              <div className="pt-4 border-t border-[#cfcfc7]">
                <h4 className="text-base sm:text-lg font-bold text-[#333333] font-display mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#325249]"></span>
                  {language === 'fr' 
                    ? 'Ma force : un diagnostic précis' 
                    : 'My core strength: precise diagnosis'}
                </h4>
                <p>
                  {language === 'fr'
                    ? "Ma force réside dans ma capacité d'observation systémique. Grâce à la cartographie des points de blocage, j'identifie la « fuite » exacte de temps ou d'énergie pour établir un plan d'action précis. Je ne m'arrête pas au symptôme : je cherche la cause."
                    : "My core differentiator is systemic diagnostic observation. By mapping operational and cognitive bottlenecks, I pinpoint the exact leak of time or mental stamina to design a calibrated action roadmap. We never treat superficial symptoms; we solve root causes."}
                </p>
              </div>

              {/* Hours Box */}
              <div className="pt-4 border-t border-[#cfcfc7] bg-[#d8e6e1] p-4 rounded-xl border border-[#b8cec7] flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono uppercase text-[#325249] font-bold block">
                    {language === 'fr' ? 'Bureau & Disponibilités' : 'Office & Availability'}
                  </span>
                  <span className="text-xs text-[#333333]">
                    {language === 'fr' 
                      ? 'Lundi au vendredi (9h-18h) • Week-end : urgences uniquement' 
                      : 'Monday to Friday (09:00-18:00) • Weekends: emergencies only'}
                  </span>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-4 py-2 rounded-lg bg-[#325249] hover:bg-[#243c35] text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
