import React, { useState } from 'react';
import { 
  Linkedin, 
  Instagram, 
  Phone, 
  FileText,
  Building,
  Scale,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { LegalModal } from './LegalModal';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const Footer: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = getTranslations(language);

  return (
    <footer className="bg-[#333333] border-t border-[#444444] pt-16 pb-12 text-[#b1b0ac] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1 & 2: Brand Info & New Address */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img 
                src="/logo.png" 
                alt="Cognitive Studio"
                className="w-9 h-9 object-contain rounded-lg shadow-sm"
                width={36}
                height={36}
              />
              <span className="text-base font-extrabold text-white font-display tracking-tight uppercase">
                Cognitive<span className="text-[#c2dad3]">Studio</span>
              </span>
            </div>

            <p className="text-[#b1b0ac] leading-relaxed text-xs max-w-sm">
              {t.footer.brandDesc}
            </p>

            <div className="pt-2 text-[11px] text-[#9a9a95] space-y-1.5">
              <div>
                <span className="text-[#b1b0ac] font-medium">
                  {language === 'fr' ? 'Bureau & Siège social :' : 'Office & Headquarters:'}
                </span>{' '}
                <strong className="text-white font-medium">Avenue Heydenberg n°39, 1200 Woluwe-Saint-Lambert, Bruxelles</strong>
              </div>
              <div>BCE : <strong className="text-white font-mono">{COMPANY_INFO.bce}</strong> ({language === 'fr' ? 'Entreprise individuelle' : 'Sole proprietorship'})</div>
              <div>{t.footer.founderLine}</div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#242424] hover:bg-[#325249] text-white transition-colors border border-[#484848]"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#242424] hover:bg-[#325249] text-white transition-colors border border-[#484848]"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-2 rounded-lg bg-[#242424] hover:bg-[#325249] text-white transition-colors border border-[#484848]"
                title="Appel"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Language Switcher in Footer */}
              <div className="ml-2 inline-flex items-center bg-[#242424] border border-[#484848] rounded-lg p-0.5 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setLanguage('fr')}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                    language === 'fr' ? 'bg-[#325249] text-white font-bold' : 'text-[#888880] hover:text-white'
                  }`}
                >
                  FR
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                    language === 'en' ? 'bg-[#325249] text-white font-bold' : 'text-[#888880] hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2">
              <li><a href="#top" className="hover:text-white transition-colors">{language === 'fr' ? 'Accueil' : 'Home'}</a></li>
              <li><a href="#methode-core" className="hover:text-white transition-colors">{t.header.nav.core}</a></li>
              <li><a href="#services-section" className="hover:text-white transition-colors">{t.header.nav.services}</a></li>
              <li><a href="#simulateur" className="hover:text-white transition-colors">{t.header.nav.simulator}</a></li>
              <li><a href="#comparatif" className="hover:text-white transition-colors">{t.header.nav.comparison}</a></li>
              <li><a href="#fondateur" className="hover:text-white transition-colors">{t.header.nav.founder}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{t.header.nav.faq}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t.header.nav.contact}</a></li>
            </ul>
          </div>

          {/* Col 4: Collaborations (Replaces the listed packs per user request) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#c2dad3]" />
              <span>{t.footer.collaborationsTitle}</span>
            </h4>
            
            <p className="text-[11px] text-[#9a9a95] leading-relaxed">
              {language === 'fr' 
                ? 'Partenariats juridiques et collaborations professionnelles :' 
                : 'Legal partnerships and professional collaborations:'}
            </p>

            <ul className="space-y-2.5 pt-1">
              {t.footer.collaborations.map((collab, index) => (
                <li key={index} className="p-2.5 rounded-xl bg-[#272727] border border-[#444444] transition-colors hover:border-[#325249]">
                  <div className="font-semibold text-white text-xs flex items-center justify-between">
                    {collab.url ? (
                      <a href={collab.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#c2dad3] hover:underline transition-colors">
                        {collab.name}
                      </a>
                    ) : (
                      <span>{collab.name}</span>
                    )}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#325249]"></span>
                  </div>
                  <div className="text-[10px] text-[#c2dad3] font-mono mt-0.5">
                    {collab.detail}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              {t.footer.hoursTitle}
            </h4>
            <p className="text-[#b1b0ac] text-xs leading-relaxed">
              {language === 'fr' ? (
                <>
                  Lundi & vendredi : 8h - 19h <br />
                  Mardi au jeudi : 19h30 - 21h <br />
                  Week-end : sur demande (urgences)
                </>
              ) : (
                <>
                  Monday & Friday: 08:00 - 19:00 <br />
                  Tuesday to Thursday: 19:30 - 21:00 <br />
                  Weekends: on request (emergencies)
                </>
              )}
            </p>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#253932] text-[#c2dad3] border border-[#457265] font-semibold text-xs hover:bg-[#325249] transition-colors"
              >
                <span>WhatsApp : +32 472 23 06 14</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setLegalModalOpen(true)}
                className="text-xs text-[#c2dad3] hover:text-white underline flex items-center gap-1 cursor-pointer text-left"
              >
                <FileText className="w-3.5 h-3.5 shrink-0" />
                <span>{t.footer.legalModalBtn}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#444444] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9a9a95]">
          <div>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLegalModalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Mentions Légales & BCE
            </button>
            <span>•</span>
            <a 
              href="https://www.cognitive-studio.be" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              cognitive-studio.be
            </a>
          </div>
        </div>

      </div>

      {/* Comprehensive Legal Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
      />
    </footer>
  );
};
