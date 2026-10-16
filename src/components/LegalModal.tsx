import React, { useState } from 'react';
import { X, Shield, FileText, Scale, Lock, BookOpen, Building2, CheckCircle2, ExternalLink, Printer } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type LegalTab = 'all' | 'bce' | 'ip' | 'liability' | 'gdpr' | 'science';

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<LegalTab>('all');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1e2824]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white border border-[#c2dad3] rounded-2xl max-w-4xl w-full shadow-2xl max-h-[90vh] flex flex-col overflow-hidden relative text-[#2c3531]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-title"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#e5e5de] bg-[#fbfbfa] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e2edea] border border-[#c2dad3] flex items-center justify-center text-[#325249] shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 id="legal-title" className="text-lg sm:text-xl font-extrabold text-[#222222] font-display">
                Mentions Légales, RGPD & Cadre Réglementaire Belge
              </h3>
              <p className="text-xs text-[#656563] mt-0.5">
                Cognitive Studio (Simon Maistriau) • BCE BE 1034.236.665 • Conforme au Code de droit économique belge
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#dcdcd5] text-xs font-semibold text-[#505a55] hover:bg-[#efefe9] transition-colors"
              title="Imprimer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#656563] hover:text-[#222222] hover:bg-[#efefe9] transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="px-5 sm:px-6 py-2.5 border-b border-[#e5e5de] bg-[#f8f8f6] flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-medium">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#325249] text-white font-semibold'
                : 'text-[#505a55] hover:bg-[#e8e8e1]'
            }`}
          >
            Vue Intégrale
          </button>
          <button
            onClick={() => setActiveTab('bce')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'bce'
                ? 'bg-[#325249] text-white font-semibold'
                : 'text-[#505a55] hover:bg-[#e8e8e1]'
            }`}
          >
            1. Identité & BCE
          </button>
          <button
            onClick={() => setActiveTab('ip')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'ip'
                ? 'bg-[#325249] text-white font-semibold'
                : 'text-[#505a55] hover:bg-[#e8e8e1]'
            }`}
          >
            2. Propriété Intellectuelle
          </button>
          <button
            onClick={() => setActiveTab('liability')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'liability'
                ? 'bg-[#325249] text-white font-semibold'
                : 'text-[#505a55] hover:bg-[#e8e8e1]'
            }`}
          >
            3. Responsabilité & IA
          </button>
          <button
            onClick={() => setActiveTab('gdpr')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'gdpr'
                ? 'bg-[#325249] text-white font-semibold'
                : 'text-[#505a55] hover:bg-[#e8e8e1]'
            }`}
          >
            4. RGPD & Confidentialité
          </button>
          <button
            onClick={() => setActiveTab('science')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'science'
                ? 'bg-[#325249] text-white font-semibold'
                : 'text-[#505a55] hover:bg-[#e8e8e1]'
            }`}
          >
            5. Droit Scientifique
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8 text-xs sm:text-sm leading-relaxed text-[#404b46]">

          {/* SECTION 1: Identité Juridique */}
          {(activeTab === 'all' || activeTab === 'bce') && (
            <section className="space-y-3 pb-6 border-b border-[#e5e5de]">
              <div className="flex items-center gap-2 text-[#325249] font-bold text-sm sm:text-base font-display">
                <Building2 className="w-4 h-4 text-[#457265]" />
                <h4>1. IDENTITÉ JURIDIQUE & INFORMATIONS LÉGALES</h4>
              </div>

              <p>
                Bienvenue sur la plateforme officielle de <strong className="text-[#222222]">Cognitive Studio</strong>. Conformément aux obligations légales en vigueur en Belgique (notamment le Livre XII du Code de droit économique relatif au droit de l'économie électronique), vous trouverez ci-dessous l’ensemble des informations relatives à notre entité juridique, à la responsabilité éditoriale et à l’hébergement technique :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#f8f8f6] p-4 rounded-xl border border-[#e5e5de]">
                <div>
                  <span className="text-[11px] font-mono text-[#656563] uppercase tracking-wider block">Dénomination Commerciale</span>
                  <span className="font-bold text-[#222222]">Cognitive Studio / Cognitive-Studio.be</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#656563] uppercase tracking-wider block">Forme Juridique</span>
                  <span className="font-bold text-[#222222]">Entreprise individuelle (Indépendant à titre complémentaire)</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#656563] uppercase tracking-wider block">Fondateur & Exploitant</span>
                  <span className="font-bold text-[#222222]">Simon Maistriau</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#656563] uppercase tracking-wider block">Numéro d'Entreprise (BCE / TVA)</span>
                  <span className="font-bold text-[#222222] font-mono">BE 1034.236.665</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#656563] uppercase tracking-wider block">Siège Social & d'Exploitation</span>
                  <span className="font-bold text-[#222222]">Avenue Heydenberg n°39, 1200 Woluwe-Saint-Lambert (Bruxelles), Belgique</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#656563] uppercase tracking-wider block">Contact Électronique</span>
                  <span className="font-bold text-[#222222] font-mono">info@cognitive-studio.be / Maistriau.Simon@gmail.com</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#656563] uppercase tracking-wider block">Ligne Téléphonique Directe & WhatsApp</span>
                  <span className="font-bold text-[#222222] font-mono">+32 472 23 06 14</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#656563] uppercase tracking-wider block">Horaires de Consultation</span>
                  <span className="text-[#222222]">Lun & Ven : 8h-19h • Mar au Jeu : 19h30-21h • Sam-Dim sur urgence</span>
                </div>
              </div>

              <div className="pt-2">
                <h5 className="font-bold text-[#222222] text-xs mb-1">Direction de la Publication & Responsabilité Éditoriale</h5>
                <p>
                  Le contenu de ce site et des programmes pédagogiques est placé sous l'entière responsabilité de <strong className="text-[#222222]">Simon Maistriau</strong>, consultant en méthodologie et en stratégie cognitive.
                </p>
              </div>

              <div className="pt-2">
                <h5 className="font-bold text-[#222222] text-xs mb-1">Hébergement & Infrastructure Technique</h5>
                <p>
                  Le site cognitive-studio.be est hébergé par <strong>GitHub Pages</strong> (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis). Les polices de caractères sont chargées depuis Google Fonts (Google Ireland Ltd.).
                </p>
              </div>
            </section>
          )}

          {/* SECTION 2: Propriété Intellectuelle */}
          {(activeTab === 'all' || activeTab === 'ip') && (
            <section className="space-y-3 pb-6 border-b border-[#e5e5de]">
              <div className="flex items-center gap-2 text-[#325249] font-bold text-sm sm:text-base font-display">
                <Shield className="w-4 h-4 text-[#457265]" />
                <h4>2. MENTIONS LÉGALES ET PROPRIÉTÉ INTELLECTUELLE</h4>
              </div>
              <p className="text-[11px] font-mono text-[#656563]">
                Conformément au Livre XI du Code de droit économique belge (Propriété intellectuelle)
              </p>

              <p>
                Le site internet et la marque <strong className="text-[#222222]">Cognitive-Studio.be</strong> ainsi que la dénomination commerciale sont la propriété exclusive de Simon Maistriau.
              </p>

              <p>
                <strong className="text-[#222222]">Droits d'auteur et Propriété Intellectuelle :</strong> L'intégralité du contenu présent sur ce site et fourni lors des prestations de service (incluant, de façon non limitative : la méthodologie « C.O.R.E. », les supports de cours, les fiches pédagogiques, les schémas explicatifs, les structures de « prompts » IA, les logos, textes, infographies et éléments graphiques) est protégée par le droit d'auteur et le droit de la propriété intellectuelle en vigueur en Belgique.
              </p>

              <p>
                Ces éléments sont la propriété exclusive de Simon Maistriau ou de ses partenaires. Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, des contenus, par quelque procédé que ce soit et sur quelque support que ce soit, est formellement interdite sans l'autorisation écrite et préalable de l'auteur.
              </p>

              <div className="p-3 bg-[#e2edea]/40 rounded-xl border border-[#c2dad3] text-xs text-[#2c3531]">
                <strong>Licence d'usage privé concédée :</strong> L'accès aux formations, masterclasses et audits confère au client un droit d'usage privé, strictement personnel et non exclusif du matériel pédagogique. Le client s'interdit formellement de revendre, distribuer ou former des tiers avec la méthode Cognitive Studio sans accord de licence explicite. Tout contrevenant s'expose à des poursuites judiciaires conformément aux dispositions du Code de droit économique belge.
              </div>
            </section>
          )}

          {/* SECTION 3: Limitation de Responsabilité & IA */}
          {(activeTab === 'all' || activeTab === 'liability') && (
            <section className="space-y-3 pb-6 border-b border-[#e5e5de]">
              <div className="flex items-center gap-2 text-[#325249] font-bold text-sm sm:text-base font-display">
                <FileText className="w-4 h-4 text-[#457265]" />
                <h4>3. CLAUSE DE NON-RESPONSABILITÉ & CADRE D'UTILISATION DE L'IA</h4>
              </div>
              <p className="text-[11px] font-mono text-[#656563]">
                Conformément au droit des obligations belge et aux règles déontologiques
              </p>

              <div className="space-y-2.5">
                <p>
                  <strong className="text-[#222222]">Nature des obligations (Obligation de Moyens) :</strong> Dans le cadre de ses prestations de conseil, d'audit, de coaching méthodologique et de formation, Cognitive Studio est soumis à une <em>obligation de moyens</em> et non de résultat. Le prestataire s'engage à mettre en œuvre tout son savoir-faire scientifique, son expertise et les meilleures pratiques du secteur pour accompagner le client vers ses objectifs.
                </p>

                <p>
                  <strong className="text-[#222222]">Limites liées à l'apprentissage (Pôle Étudiant) :</strong> La réussite scolaire ou académique dépendant de facteurs intrinsèques à l'élève (travail personnel, assiduité, réactivité cognitive, gestion du stress lors des épreuves), Cognitive Studio ne pourra en aucun cas être tenu responsable d'un échec à un examen, d'une non-admission ou de résultats jugés insuffisants par le client ou sa famille.
                </p>

                <p>
                  <strong className="text-[#222222]">Limites liées au conseil et à l'Intelligence Artificielle (Pôle Professionnel) :</strong> Cognitive Studio conseille le client sur l'organisation et l'utilisation d'outils technologiques avancés (logiciels Low-Code, CRM, bases Notion, Intelligence Artificielle générative type OpenAI, Anthropic, Google Gemini).
                </p>

                <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#505a55]">
                  <li>
                    <strong className="text-[#222222]">Utilisation de l'IA :</strong> Le client reconnaît expressément que les outils d'Intelligence Artificielle générative sont susceptibles de produire des hallucinations ou inexactitudes. Cognitive Studio forme le client à l'esprit critique et à la vérification systématique, mais ne saurait être tenu responsable des contenus générés par ces tiers technologiques ni des conséquences de leur exploitation sans contrôle humain préalable.
                  </li>
                  <li>
                    <strong className="text-[#222222]">Prise de décision souveraine :</strong> Le client reste seul responsable des décisions managériales, juridiques, fiscales ou stratégiques prises pour son entreprise suite aux recommandations formulées.
                  </li>
                  <li>
                    <strong className="text-[#222222]">Plafond d'indemnisation :</strong> La responsabilité de Simon Maistriau ne pourra être engagée que pour des dommages directs résultant d'une faute lourde prouvée liée à sa seule intervention. Elle est expressément exclue de tout dommage indirect (perte de chiffre d'affaires, préjudice d'image, perte fortuite de données). En tout état de cause, si la responsabilité du prestataire venait à être engagée, elle serait strictement plafonnée au montant total des honoraires perçus pour la mission concernée.
                  </li>
                </ul>
              </div>
            </section>
          )}

          {/* SECTION 4: RGPD & Confidentialité */}
          {(activeTab === 'all' || activeTab === 'gdpr') && (
            <section className="space-y-3 pb-6 border-b border-[#e5e5de]">
              <div className="flex items-center gap-2 text-[#325249] font-bold text-sm sm:text-base font-display">
                <Lock className="w-4 h-4 text-[#457265]" />
                <h4>4. POLITIQUE DE CONFIDENTIALITÉ & TRAITEMENT DES DONNÉES (RGPD)</h4>
              </div>
              <p className="text-[11px] font-mono text-[#656563]">
                Conformément au Règlement Général sur la Protection des Données (UE 2016/679) et à la loi belge du 30 juillet 2018
              </p>

              <p>
                <strong className="text-[#222222]">Responsable du Traitement :</strong> Simon Maistriau, Cognitive Studio, Avenue Heydenberg n°39, 1200 Woluwe-Saint-Lambert, Belgique (contact : info@cognitive-studio.be).
              </p>

              <p>
                <strong className="text-[#222222]">Collecte et Finalités :</strong> Nous ne collectons que les données strictement nécessaires à l'exécution de nos missions de conseil et d'accompagnement :
              </p>

              <ul className="list-disc pl-5 space-y-1 text-xs text-[#505a55]">
                <li>Identité et coordonnées (Nom, prénom, email, téléphone, adresse de facturation) pour la gestion administrative, contractuelle et comptable.</li>
                <li>Données relatives au parcours académique (étudiants) ou aux processus organisationnels internes (professionnels) afin d'adapter sur-mesure l'architecture méthodologique.</li>
                <li>Base légale : Exécution du contrat ou de mesures précontractuelles (Article 6.1.b du RGPD). Aucune donnée n'est jamais vendue, louée ou cédée à des fins de prospection commerciale tierce.</li>
              </ul>

              <div className="p-3 bg-[#f8f8f6] rounded-xl border border-[#e5e5de] space-y-1.5">
                <h5 className="font-bold text-[#222222] text-xs">Données collectées via ce site</h5>
                <p className="text-xs text-[#505a55]">
                  • <strong>Formulaire de contact :</strong> il ne transmet rien à un serveur. Il ouvre votre propre messagerie avec un e-mail pré-rempli (nom, téléphone, e-mail, profil, message) que vous choisissez d'envoyer ou non à info@cognitive-studio.be. Ces informations servent uniquement à répondre à votre demande et à préparer un éventuel accompagnement.<br />
                  • <strong>WhatsApp :</strong> si vous nous écrivez via WhatsApp, vos messages sont traités par WhatsApp (Meta) selon ses propres conditions ; nous les utilisons uniquement pour vous répondre.<br />
                  • <strong>Navigation :</strong> le site n'utilise ni cookies publicitaires, ni outil de mesure d'audience. L'hébergeur (GitHub Pages) et Google Fonts reçoivent, comme tout serveur web, l'adresse IP des visiteurs pour afficher les pages ; nous n'y avons pas accès.<br />
                  • <strong>Conservation :</strong> les demandes de contact sans suite sont supprimées au plus tard 12 mois après le dernier échange.
                </p>
              </div>

              <div className="p-3 bg-[#f8f8f6] rounded-xl border border-[#e5e5de] space-y-1.5">
                <h5 className="font-bold text-[#222222] text-xs">Mesures de Sécurité & Vigilance IA</h5>
                <p className="text-xs text-[#505a55]">
                  • <strong>Minimisation :</strong> Aucune donnée superflue n'est archivée.<br />
                  • <strong>Cloisonnement étanche :</strong> Les dossiers opérationnels sont chiffrés et uniquement accessibles par Simon Maistriau.<br />
                  • <strong>Vigilance IA & Confidentialité (« Opt-out ») :</strong> Lors des audits et déploiements d'outils d'IA pour nos clients, nous appliquons systématiquement les protocoles de désactivation de l'entraînement des modèles (« Zero Data Retention » / « Training Opt-out ») pour préserver le secret des affaires et les secrets professionnels.
                </p>
              </div>

              <p>
                <strong className="text-[#222222]">Durée de Conservation :</strong> Les données comptables et factures sont conservées pendant 7 ans (obligation légale fiscale belge). Les dossiers de travail opérationnels sont purgés ou anonymisés 1 an après la fin de la mission contractuelle, sauf accord explicite du client.
              </p>

              <p>
                <strong className="text-[#222222]">Exercice de vos Droits :</strong> Vous bénéficiez d'un droit permanent d'accès, de rectification, de limitation, d'effacement (« droit à l'oubli ») et de portabilité de vos données. Pour exercer l'un de ces droits, adressez un simple courriel à <span className="font-mono font-bold text-[#325249]">info@cognitive-studio.be</span> avec copie de votre justificatif d'identité. Vous disposez également du droit d'introduire une réclamation auprès de l'Autorité de Protection des Données belge (APD, rue de la Presse 35, 1000 Bruxelles - www.autoriteprotectiondonnees.be).
              </p>
            </section>
          )}

          {/* SECTION 5: Droit Scientifique & Citation */}
          {(activeTab === 'all' || activeTab === 'science') && (
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-[#325249] font-bold text-sm sm:text-base font-display">
                <BookOpen className="w-4 h-4 text-[#457265]" />
                <h4>5. POLITIQUE D'UTILISATION DES RESSOURCES SCIENTIFIQUES & CITATION</h4>
              </div>
              <p className="text-[11px] font-mono text-[#656563]">
                Conformément à l'exception d'enseignement et au droit de courte citation (Code de droit économique belge, Art. XI.190)
              </p>

              <p>
                <strong className="text-[#222222]">Nature et Finalité Pédagogique Non Lucrative :</strong> Les articles, graphiques, données et extraits de publications scientifiques mobilisés sur le site Cognitive Studio ou lors des sessions de coaching méthodologique sont exploités strictement à des fins d'illustration didactique de l'enseignement et de recherche indépendante. Conformément à l'article XI.190 et suivants du CDE, cet usage est rigoureusement non lucratif : Cognitive Studio ne revend pas le contenu de ces travaux, mais facture exclusivement son travail d'analyse, de synthèse et de vulgarisation pédagogique.
              </p>

              <p>
                <strong className="text-[#222222]">Sourçage Systématique & Intégrité des Métadonnées :</strong> Toute référence à une découverte ou publication tierce est assortie de sa citation complète (Auteurs, Titre de l'œuvre, Année, Revue, Éditeur, et identifiant pérenne DOI si existant). Les documents remis aux étudiants conservent l'intégralité des mentions de copyright d'origine.
              </p>

              <p>
                <strong className="text-[#222222]">Procédure de Signalement & Retrait (Notice and Takedown) :</strong> Si vous êtes l'auteur ou l'ayant droit d'une œuvre mentionnée et estimez que son utilisation outrepasse les principes de l'exception d'enseignement, vous pouvez notifier votre demande motivée à <span className="font-mono font-bold text-[#325249]">info@cognitive-studio.be</span>. Le contenu litigieux sera ajusté ou retiré dans les plus brefs délais.
              </p>

              <div className="p-3 bg-[#f8f8f6] rounded-xl border border-[#e5e5de] text-xs text-[#505a55]">
                <strong className="text-[#222222]">Droit applicable & Règlement des Litiges :</strong> Les présentes mentions légales et conditions d'exercice sont régies exclusivement par le droit belge. En cas de litige relatif à l'interprétation ou à l'exécution des prestations, les parties s'engagent à privilégier une conciliation amiable ou une médiation agréée avant toute saisine judiciaire. À défaut d'accord, les tribunaux francophones de l'arrondissement judiciaire de Bruxelles sont seuls compétents.
              </div>
            </section>
          )}

        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-5 border-t border-[#e5e5de] bg-[#fbfbfa] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#505a55]">
            <CheckCircle2 className="w-4 h-4 text-[#325249]" />
            <span>Document mis à jour pour l'exercice 2026 • Cognitive Studio</span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#325249] hover:bg-[#233a34] text-white font-semibold shadow-sm transition-colors cursor-pointer"
          >
            J'ai pris connaissance des mentions légales
          </button>
        </div>
      </div>
    </div>
  );
};
