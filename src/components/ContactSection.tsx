import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { ServiceTier } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

interface ContactSectionProps {
  selectedService?: ServiceTier | null;
  onClearService?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  selectedService,
  onClearService 
}) => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Étudiant',
    formula: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({
        ...prev,
        formula: selectedService.name,
        role: selectedService.target === 'students' 
          ? (language === 'fr' ? 'Étudiant' : 'Student')
          : selectedService.target === 'incubator' 
            ? (language === 'fr' ? 'Porteur de projet' : 'Project Founder')
            : (language === 'fr' ? 'Indépendant' : 'Freelancer')
      }));
    }
  }, [selectedService, language]);

  // Envoi : ouvre la messagerie du visiteur avec un e-mail pré-rempli adressé à Cognitive Studio
  // (aucun service tiers : le message part de la boîte du visiteur, qui en garde une copie).
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = language === 'fr'
      ? `[Site internet] Demande de ${formData.name}${formData.formula ? ` – ${formData.formula}` : ''}`
      : `[Website] Request from ${formData.name}${formData.formula ? ` – ${formData.formula}` : ''}`;
    const body = [
      formData.message,
      '',
      '—',
      `${language === 'fr' ? 'Nom' : 'Name'} : ${formData.name}`,
      `${language === 'fr' ? 'Téléphone' : 'Phone'} : ${formData.phone}`,
      `E-mail : ${formData.email}`,
      `${language === 'fr' ? 'Profil' : 'Profile'} : ${formData.role}`,
      formData.formula ? `${language === 'fr' ? 'Formule ou besoin' : 'Package or need'} : ${formData.formula}` : '',
    ].filter((line, index) => line !== '' || index === 1).join('\n');
    const link = document.createElement('a');
    link.href = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour Simon,\nJe suis ${formData.name || 'un visiteur'} (${formData.role}).\nFormule: ${formData.formula || 'Audit Stratégique'}.\n${formData.message ? `Projet: ${formData.message}` : ''}`
  );

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#e0e0db] border-b border-[#cfcfc7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8e6e1] border border-[#b8cec7] text-[#325249] text-xs font-mono font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#325249]" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#333333] font-display tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-[#555555] text-sm sm:text-base leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white border border-[#cfcfc7] rounded-3xl p-6 sm:p-8 shadow-sm">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#d8e6e1] border border-[#b8cec7] text-[#325249] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#325249]" />
                </div>
                <h3 className="text-xl font-bold text-[#333333] font-display">
                  {t.contact.form.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] max-w-md mx-auto">
                  {t.contact.form.successDesc}
                </p>
                
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/32472230614?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#325249] hover:bg-[#243c35] text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.contact.form.accelerateWhatsapp}</span>
                  </a>
                  <button
                    onClick={() => { setSubmitted(false); onClearService?.(); }}
                    className="px-4 py-2.5 rounded-xl bg-[#eaeae5] hover:bg-[#cfcfc7] text-[#333333] text-xs font-medium transition-colors cursor-pointer"
                  >
                    {t.contact.form.sendAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {selectedService && (
                  <div className="bg-[#d8e6e1] border border-[#b8cec7] rounded-xl p-3 flex items-center justify-between">
                    <div className="text-xs">
                      <span className="text-[#325249] font-mono font-bold block">
                        {language === 'fr' ? 'Formule sélectionnée :' : 'Selected formula:'}
                      </span>
                      <span className="text-[#333333] font-bold">{selectedService.name} ({selectedService.price})</span>
                    </div>
                    <button
                      type="button"
                      onClick={onClearService}
                      className="text-xs text-[#555555] hover:text-[#333333] underline cursor-pointer"
                    >
                      {language === 'fr' ? 'Modifier' : 'Change'}
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Simon Maistriau"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#eaeae5] border border-[#cfcfc7] text-[#333333] placeholder-[#777770] text-xs sm:text-sm focus:outline-none focus:border-[#325249] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+32 472 23 06 14"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#eaeae5] border border-[#cfcfc7] text-[#333333] placeholder-[#777770] text-xs sm:text-sm focus:outline-none focus:border-[#325249] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="votre-email@domaine.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#eaeae5] border border-[#cfcfc7] text-[#333333] placeholder-[#777770] text-xs sm:text-sm focus:outline-none focus:border-[#325249] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                      {t.contact.form.role}
                    </label>
                    <select
                      value={formData.role}
                      onChange={e => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#eaeae5] border border-[#cfcfc7] text-[#333333] text-xs sm:text-sm focus:outline-none focus:border-[#325249] transition-colors"
                    >
                      <option value="Étudiant">{t.contact.form.roleOptions.student}</option>
                      <option value="Parent d’élève">{t.contact.form.roleOptions.parent}</option>
                      <option value="Indépendant">{t.contact.form.roleOptions.pro}</option>
                      <option value="Porteur de projet">{t.contact.form.roleOptions.project}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                    {t.contact.form.formula}
                  </label>
                  <input
                    type="text"
                    placeholder={t.contact.form.formulaPlaceholder}
                    value={formData.formula}
                    onChange={e => setFormData({ ...formData, formula: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#eaeae5] border border-[#cfcfc7] text-[#333333] placeholder-[#777770] text-xs sm:text-sm focus:outline-none focus:border-[#325249] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.contact.form.messagePlaceholder}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#eaeae5] border border-[#cfcfc7] text-[#333333] placeholder-[#777770] text-xs sm:text-sm focus:outline-none focus:border-[#325249] transition-colors resize-none"
                  ></textarea>
                </div>

                <p className="text-[11px] text-[#555555]">
                  {language === 'fr'
                    ? 'Le bouton ouvre votre messagerie avec un e-mail pré-rempli : vous gardez ainsi une copie de votre demande. Vos données ne servent qu’à vous répondre (voir la politique de confidentialité dans les mentions légales).'
                    : 'The button opens your email app with a pre-filled message, so you keep a copy of your request. Your data is only used to reply to you (see the privacy policy in the legal notices).'}
                </p>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#325249] hover:bg-[#243c35] text-white font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>{t.contact.form.submitting}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>{t.contact.form.submitBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Direct Info, Hours & New Office Address */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-white border border-[#cfcfc7] rounded-3xl p-6 sm:p-7 space-y-5 shadow-sm">
              <h3 className="text-lg font-bold text-[#333333] font-display flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#325249]" />
                {t.contact.directCard.title}
              </h3>

              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="p-3.5 rounded-2xl bg-[#eaeae5] border border-[#cfcfc7] hover:border-[#325249] flex items-center gap-3.5 group transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#d8e6e1] text-[#325249] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#555555] block uppercase font-medium">
                      {t.contact.directCard.phoneTitle}
                    </span>
                    <span className="text-sm font-bold text-[#333333] group-hover:text-[#325249]">
                      {COMPANY_INFO.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-[#d8e6e1]/40 border border-[#b8cec7] hover:border-[#325249] flex items-center gap-3.5 group transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#325249] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#325249] block uppercase font-bold">
                      {t.contact.directCard.whatsappTitle}
                    </span>
                    <span className="text-sm font-bold text-[#325249] group-hover:text-[#243c35]">
                      {language === 'fr' ? 'Discuter avec Simon Maistriau' : 'Chat with Simon Maistriau'}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="p-3.5 rounded-2xl bg-[#eaeae5] border border-[#cfcfc7] hover:border-[#325249] flex items-center gap-3.5 group transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#d8e6e1] text-[#325249] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#555555] block uppercase font-medium">
                      {t.contact.directCard.emailTitle}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#333333] group-hover:text-[#325249]">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Office Address & Hours Card */}
            <div className="bg-white border border-[#cfcfc7] rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-[#333333] font-display font-bold text-base">
                <MapPin className="w-4 h-4 text-[#325249]" />
                <span>{t.contact.hoursCard.addressTitle}</span>
              </div>

              {/* Exact new address */}
              <div className="p-3.5 rounded-2xl bg-[#eaeae5] border border-[#cfcfc7]">
                <div className="text-xs font-bold text-[#333333]">
                  Avenue Heydenberg n°39
                </div>
                <div className="text-xs text-[#555555] mt-0.5">
                  1200 Woluwe-Saint-Lambert (Bruxelles), Belgique
                </div>
                <div className="mt-2 pt-2 border-t border-[#cfcfc7] flex items-center justify-between text-[11px]">
                  <span className="text-[#666660]">Métro / Accès aisé</span>
                  <a 
                    href={COMPANY_INFO.googleReviewsUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[#325249] font-semibold hover:underline"
                  >
                    {t.common.viewOnMaps} →
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 text-[#333333] font-display font-bold text-sm mb-2">
                  <Clock className="w-3.5 h-3.5 text-[#325249]" />
                  <span>{t.contact.hoursCard.title}</span>
                </div>

                <div className="divide-y divide-[#cfcfc7] text-xs">
                  {language === 'fr' ? (
                    <>
                      <div className="py-2 flex items-center justify-between">
                        <span className="text-[#333333] font-medium">Lundi & vendredi</span>
                        <span className="font-mono text-[#325249] font-bold">08:00 - 19:00</span>
                      </div>
                      <div className="py-2 flex items-center justify-between">
                        <span className="text-[#333333] font-medium">Mardi au jeudi</span>
                        <span className="font-mono text-[#325249] font-bold">19:30 - 21:00</span>
                      </div>
                      <div className="py-2 flex items-center justify-between">
                        <span className="text-[#333333] font-medium">Week-end</span>
                        <span className="font-mono text-[#325249] font-bold">Sur demande (urgences)</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="py-2 flex items-center justify-between">
                        <span className="text-[#333333] font-medium">Monday & Friday</span>
                        <span className="font-mono text-[#325249] font-bold">08:00 - 19:00</span>
                      </div>
                      <div className="py-2 flex items-center justify-between">
                        <span className="text-[#333333] font-medium">Tuesday to Thursday</span>
                        <span className="font-mono text-[#325249] font-bold">19:30 - 21:00</span>
                      </div>
                      <div className="py-2 flex items-center justify-between">
                        <span className="text-[#333333] font-medium">Weekends</span>
                        <span className="font-mono text-[#325249] font-bold">On request (emergencies)</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase text-[#555555] block mb-1 font-bold">
                  {t.contact.hoursCard.zonesTitle}
                </span>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {t.contact.hoursCard.zonesDesc}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
