import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ArrowUpRight, 
  GraduationCap,
  Briefcase,
  Rocket,
  Globe
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { AudienceType } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

interface HeaderProps {
  currentAudience: AudienceType;
  onSelectAudience: (aud: AudienceType) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentAudience, 
  onSelectAudience,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const t = getTranslations(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.header.nav.core, href: '#methode-core' },
    { name: t.header.nav.services, href: '#services-section' },
    { name: t.header.nav.simulator, href: '#simulateur' },
    { name: t.header.nav.comparison, href: '#comparatif' },
    { name: t.header.nav.founder, href: '#fondateur' },
    { name: t.header.nav.faq, href: '#faq' },
    { name: t.header.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#2a2a2a]/95 backdrop-blur-md border-b border-[#444444] shadow-md py-3' 
          : 'bg-[#333333] border-b border-[#404040] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Authentic Logo */}
        <a 
          href="#top" 
          id="brand-logo"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img 
            src="/logo.png" 
            alt="Cognitive Studio"
            className="w-10 h-10 object-contain rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white font-display flex items-center gap-1.5">
              Cognitive<span className="text-[#e0e0db]">Studio</span>
            </span>
            <span className="text-[10px] font-medium tracking-wider uppercase text-[#b8b8b0] font-mono">
              {t.header.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-[#c0c0b8]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => handleNavClick(link.href)}
              className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-[#3d3d3d] transition-colors text-xs xl:text-sm border-b-2 border-transparent hover:border-[#325249]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions & Language Switcher */}
        <div className="hidden sm:flex items-center gap-2 xl:gap-3">
          {/* Language Toggle Pill */}
          <div 
            className="inline-flex items-center bg-[#252525] border border-[#444444] rounded-lg p-0.5 text-xs font-mono font-medium"
            title="Changer de langue / Switch language"
          >
            <button
              type="button"
              onClick={() => setLanguage('fr')}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                language === 'fr' 
                  ? 'bg-[#325249] text-white font-bold shadow-xs' 
                  : 'text-[#9e9e95] hover:text-white hover:bg-[#323232]'
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                language === 'en' 
                  ? 'bg-[#325249] text-white font-bold shadow-xs' 
                  : 'text-[#9e9e95] hover:text-white hover:bg-[#323232]'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            id="header-whatsapp-btn"
            title="Poser une question directe sur WhatsApp"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#243c35] hover:bg-[#1d312b] text-[#e0e0db] border border-[#325249] text-xs font-semibold transition-all hover:scale-[1.02]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#e0e0db]" />
            <span>{t.common.whatsAppDirect}</span>
          </a>

          <button
            id="header-booking-btn"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#325249] hover:bg-[#243c35] text-white font-semibold text-xs tracking-wide shadow-sm transition-all hover:scale-[1.02] cursor-pointer border border-[#325249]"
          >
            <span>{t.common.bookAudit}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile menu and Language */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-2 py-1 rounded-md bg-[#252525] border border-[#444444] text-[#e0e0db] font-mono text-xs font-bold"
            aria-label="Toggle language"
          >
            {language.toUpperCase()}
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#a3a3a3] hover:text-white hover:bg-[#3d3d3d] transition-colors"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#333333] border-b border-[#444444] px-4 pt-3 pb-6 space-y-3 mt-2 text-[#e0e0db]"
        >
          {/* Mobile Language Switcher Row */}
          <div className="flex items-center justify-between pb-3 border-b border-[#404040]">
            <span className="text-xs text-[#b8b8b0] flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#e0e0db]" />
              <span>Langue / Language:</span>
            </span>
            <div className="inline-flex items-center bg-[#242424] border border-[#444444] rounded-lg p-0.5 text-xs font-mono">
              <button
                type="button"
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-md transition-all ${
                  language === 'fr' 
                    ? 'bg-[#325249] text-white font-bold' 
                    : 'text-[#888880] hover:text-white'
                }`}
              >
                Français (FR)
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md transition-all ${
                  language === 'en' 
                    ? 'bg-[#325249] text-white font-bold' 
                    : 'text-[#888880] hover:text-white'
                }`}
              >
                English (EN)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pb-3 border-b border-[#404040]">
            <button
              onClick={() => { onSelectAudience('students'); setMobileMenuOpen(false); }}
              className={`p-2 rounded-lg text-xs font-medium text-center flex flex-col items-center gap-1 border ${
                currentAudience === 'students' 
                  ? 'bg-[#325249] border-[#325249] text-white' 
                  : 'bg-[#2a2a2a] border-[#404040] text-[#e0e0db]'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.header.audiences.students}</span>
            </button>
            <button
              onClick={() => { onSelectAudience('pros'); setMobileMenuOpen(false); }}
              className={`p-2 rounded-lg text-xs font-medium text-center flex flex-col items-center gap-1 border ${
                currentAudience === 'pros' 
                  ? 'bg-[#325249] border-[#325249] text-white' 
                  : 'bg-[#2a2a2a] border-[#404040] text-[#e0e0db]'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>{t.header.audiences.pros}</span>
            </button>
            <button
              onClick={() => { onSelectAudience('incubator'); setMobileMenuOpen(false); }}
              className={`p-2 rounded-lg text-xs font-medium text-center flex flex-col items-center gap-1 border ${
                currentAudience === 'incubator' 
                  ? 'bg-[#325249] border-[#325249] text-white' 
                  : 'bg-[#2a2a2a] border-[#404040] text-[#e0e0db]'
              }`}
            >
              <Rocket className="w-4 h-4" />
              <span>{t.header.audiences.incubator}</span>
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block px-3 py-2 rounded-lg text-[#d0d0d0] hover:text-white hover:bg-[#3d3d3d] text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#404040] space-y-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-[#e0e0db] px-3 py-2 rounded-lg hover:bg-[#3d3d3d]"
            >
              <Phone className="w-4 h-4 text-[#e0e0db]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#243c35] hover:bg-[#1d312b] text-[#e0e0db] font-medium text-sm border border-[#325249]"
            >
              <MessageSquare className="w-4 h-4 text-[#e0e0db]" />
              <span>{t.common.whatsAppDirect}</span>
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-2.5 rounded-lg bg-[#325249] hover:bg-[#243c35] text-white font-bold text-sm text-center shadow-sm cursor-pointer"
            >
              {t.common.bookAudit}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
