import { CorePillar, ServiceTier, ServiceOption, ComparisonRow, TestimonialItem, FaqItem, ReferenceItem, ServiceCategory } from '../types';
import {
  CORE_PILLARS,
  SERVICE_TIERS,
  SERVICE_OPTIONS,
  PRO_COMPARISON,
  FAQ_DATA,
  TESTIMONIALS,
  REFERENCES
} from './content';
import {
  CORE_PILLARS_EN,
  SERVICE_TIERS_EN,
  SERVICE_OPTIONS_EN,
  PRO_COMPARISON_EN,
  FAQ_DATA_EN,
  TESTIMONIALS_EN,
  REFERENCES_EN
} from './content.en';

export interface CategoryInfo {
  label: string;
  short: string;
  title: string;
  subtitle: string;
}

export interface Translations {
  common: {
    language: string;
    bookAudit: string;
    whatsAppDirect: string;
    callNow: string;
    address: string;
    certifiedGoogle: string;
    viewOnMaps: string;
    readMore: string;
    close: string;
    vatNote: string;
  };
  header: {
    tagline: string;
    nav: {
      core: string;
      services: string;
      simulator: string;
      comparison: string;
      founder: string;
      faq: string;
      contact: string;
    };
  };
  hero: {
    tagline: string;
    subTagline: string;
    specialtyBadge: string;
    h1Main: string;
    h1Accent: string;
    description: string;
    scienceNote: string;
    polesTitle: string;
    poles: { category: ServiceCategory; title: string; desc: string; from: string }[];
    ctaBooking: string;
    ctaSimulator: string;
    metrics: { value: string; label: string }[];
  };
  methodCore: {
    badge: string;
    title: string;
    subtitle: string;
    pillarLabel: string;
    principleLabel: string;
    applicationLabel: string;
    compareTitle: string;
    compareSubtitle: string;
    withoutTitle: string;
    withTitle: string;
    without: { title: string; text: string }[];
    with: { title: string; text: string }[];
    pillars: CorePillar[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    allLabel: string;
    offersLabel: string;
    categories: Record<ServiceCategory, CategoryInfo>;
    pathwayTitle: string;
    pathway: { step: string; title: string; desc: string }[];
    cardsView: string;
    tableView: string;
    idealForLabel: string;
    deliverablesLabel: string;
    roiLabel: string;
    showDetails: (n: number) => string;
    hideDetails: string;
    recommended: string;
    popular: string;
    cardFooter: string;
    tableTitle: string;
    tableSubtitle: string;
    colPackage: string;
    colCategory: string;
    colPrice: string;
    colDuration: string;
    colFormat: string;
    colDeliverables: string;
    colAction: string;
    select: string;
    optionsTitle: string;
    optionsSubtitle: string;
    bannerTitle: string;
    bannerText: string;
    bannerWhatsapp: string;
    bannerSimulator: string;
    tiers: ServiceTier[];
    options: ServiceOption[];
  };
  simulator: {
    badge: string;
    title: string;
    subtitle: string;
    roleLabel: string;
    roles: { value: 'solo' | 'team' | 'liberal'; title: string; desc: string }[];
    challengeLabel: string;
    challenges: { value: 'web' | 'billing' | 'files' | 'security' | 'all'; label: string }[];
    intensityLabel: string;
    intensities: { value: 'ponctuel' | 'projet' | 'suivi'; label: string }[];
    resultBadge: string;
    priceLabel: string;
    impactLabel: string;
    formatLabel: string;
  };
  comparisons: {
    badge: string;
    title: string;
    subtitle: string;
    colAspect: string;
    colTraditional: string;
    colCognitive: string;
    rows: ComparisonRow[];
  };
  founder: {
    badge: string;
    title: string;
    subtitle: string;
    roleTitle: string;
    credentials: string[];
    bio1: string;
    bio2: string;
    bio3: string;
    quote: string;
    callToAction: string;
    consultantCreds: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    referencesTitle: string;
    reviewsTitle: string;
    verifiedGoogle: string;
    visitSite: string;
    items: TestimonialItem[];
    references: ReferenceItem[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterTarifs: string;
    filterMethode: string;
    items: FaqItem[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      phone: string;
      email: string;
      role: string;
      roleOptions: {
        lawyer: string;
        liberal: string;
        business: string;
        other: string;
      };
      formula: string;
      formulaPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      sendCopy: string;
      submitBtn: string;
      submitting: string;
      successTitle: string;
      successDesc: string;
      accelerateWhatsapp: string;
      sendAnother: string;
    };
    directCard: {
      title: string;
      phoneTitle: string;
      whatsappTitle: string;
      emailTitle: string;
    };
    hoursCard: {
      title: string;
      zonesTitle: string;
      zonesDesc: string;
      addressTitle: string;
    };
  };
  footer: {
    brandDesc: string;
    legalNote: string;
    address: string;
    founderLine: string;
    navTitle: string;
    collaborationsTitle: string;
    collaborations: {
      name: string;
      detail: string;
      url?: string;
    }[];
    hoursTitle: string;
    legalModalBtn: string;
    copyright: string;
  };
}

export const TRANSLATIONS_FR: Translations = {
  common: {
    language: 'Français',
    bookAudit: 'Diagnostic offert',
    whatsAppDirect: 'WhatsApp direct',
    callNow: 'Appeler',
    address: 'Avenue Heydenberg n°39, 1200 Woluwe-Saint-Lambert',
    certifiedGoogle: 'Avis publiés sur Google • Bruxelles & Woluwe-Saint-Lambert',
    viewOnMaps: 'Voir sur Maps',
    readMore: 'En savoir plus',
    close: 'Fermer',
    vatNote: 'Prix nets • TVA non applicable (régime de franchise)',
  },
  header: {
    tagline: 'Bruxelles • Cabinets libéraux',
    nav: {
      core: 'Méthode',
      services: 'Tarifs',
      simulator: 'Simulateur',
      comparison: 'Comparatif',
      founder: 'Fondateur',
      faq: 'FAQ',
      contact: 'Contact',
    },
  },
  hero: {
    tagline: 'Studio numérique',
    subTagline: 'Rigueur universitaire & efficacité concrète',
    specialtyBadge: 'Spécialisé dans les cabinets d’avocats & professions libérales',
    h1Main: 'Le studio numérique',
    h1Accent: 'des cabinets d’avocats & professions libérales.',
    description: 'Site internet, fichiers de gestion interconnectés, bureau numérique et sécurité des données : nous organisons votre cabinet pour que vous vous consacriez à vos dossiers.',
    scienceNote: 'Un interlocuteur unique, qui étudie le droit et connaît les contraintes d’un cabinet : secret professionnel, déontologie, RGPD.',
    polesTitle: 'Ce que nous mettons en place',
    poles: [
      { category: 'web', title: 'Présence en ligne', desc: 'Site du cabinet, prise de rendez-vous en ligne, référencement et fiche Google.', from: 'dès 790 €' },
      { category: 'fichiers', title: 'Fichiers interconnectés', desc: 'Excel ou Google Sheets reliés entre eux : du temps presté à la facture, sans ressaisie.', from: 'dès 350 €' },
      { category: 'bureau', title: 'Bureau numérique & sécurité', desc: 'E-mail pro, Drive organisé, double authentification, sauvegardes et RGPD.', from: 'dès 390 €' },
      { category: 'conseil', title: 'Conseil & organisation', desc: 'Diagnostic offert, refonte de vos processus, documentation et formation.', from: '100 € / h' },
    ],
    ctaBooking: 'Réserver mon diagnostic offert',
    ctaSimulator: 'Trouver ma formule (1 min)',
    metrics: [
      { value: 'Offert', label: 'Diagnostic de 2 h si vous poursuivez' },
      { value: '1:1', label: 'Un seul interlocuteur : le fondateur' },
      { value: '< 24 h', label: 'Réponse par téléphone, e-mail ou WhatsApp' },
      { value: '100 %', label: 'Site, fichiers et comptes à votre nom' },
    ],
  },
  methodCore: {
    badge: 'NOTRE MÉTHODE',
    title: 'La Méthode C.O.R.E.',
    subtitle: 'Quatre étapes, issues des sciences cognitives, pour remplacer l’improvisation par une organisation qui tient dans la durée.',
    pillarLabel: 'Étape',
    principleLabel: 'Principe',
    applicationLabel: 'Dans votre cabinet',
    compareTitle: 'Votre cabinet, avant et après',
    compareSubtitle: 'Ce qui change concrètement au quotidien.',
    withoutTitle: 'Sans organisation numérique',
    withTitle: 'Avec Cognitive Studio',
    without: [
      { title: 'Ressaisies :', text: 'les mêmes informations encodées dans trois fichiers différents.' },
      { title: 'Facturation :', text: 'des heures chaque mois à reconstituer le temps presté et rédiger les factures.' },
      { title: 'Comptes privés :', text: 'données de clients mêlées à votre messagerie personnelle, sans double authentification.' },
      { title: 'Site absent ou daté :', text: 'des clients qui ne vous trouvent pas ou ne peuvent pas prendre rendez-vous.' },
    ],
    with: [
      { title: 'Une seule saisie :', text: 'chaque information alimente automatiquement les autres fichiers.' },
      { title: 'Facturation automatisée :', text: 'du temps presté à la facture PDF en quelques minutes.' },
      { title: 'Bureau sécurisé :', text: 'e-mail pro, accès protégés, sauvegardes et registre RGPD.' },
      { title: 'Cabinet visible :', text: 'un site clair, conforme à votre déontologie, avec prise de rendez-vous en ligne.' },
    ],
    pillars: CORE_PILLARS
  },
  services: {
    badge: 'PRESTATIONS & TARIFS',
    title: 'Des prix fixes, publiés, sans surprise',
    subtitle: 'Choisissez une formule clé en main ou composez votre accompagnement. Tous les prix sont nets : TVA non applicable (régime de franchise).',
    allLabel: 'Tout voir',
    offersLabel: 'offres',
    categories: {
      formules: { label: 'Formules', short: 'Clé en main', title: 'Formules clé en main', subtitle: 'Les prestations les plus demandées par les cabinets, regroupées avec 12 à 14 % d’économie.' },
      conseil: { label: 'Conseil', short: 'Dès 100 € / h', title: 'Conseil & organisation', subtitle: 'Diagnostic, séances à la carte et refonte de vos processus.' },
      web: { label: 'Sites', short: 'Dès 790 €', title: 'Présence en ligne', subtitle: 'Des sites sobres, rapides et conformes aux règles de votre profession.' },
      fichiers: { label: 'Fichiers', short: 'Dès 350 €', title: 'Fichiers interconnectés & automatisation', subtitle: 'Excel ou Google Sheets reliés entre eux : une information saisie une fois alimente tout le reste.' },
      bureau: { label: 'Bureau & sécurité', short: 'Dès 390 €', title: 'Bureau numérique, sécurité & RGPD', subtitle: 'Un environnement professionnel, séparé de votre vie privée, et des données protégées.' },
      abonnements: { label: 'Abonnements', short: 'Dès 29 € / mois', title: 'Abonnements mensuels', subtitle: 'Sans engagement, résiliables avec un mois de préavis. 10 % de réduction en paiement annuel.' },
    },
    pathwayTitle: 'Comment nous travaillons',
    pathway: [
      { step: '1. Diagnostic', title: '2 h offertes si vous poursuivez', desc: 'Outils, fichiers, site et sécurité passés en revue, proposition chiffrée sous 5 jours.' },
      { step: '2. Mise en place', title: 'Forfait à prix fixe', desc: 'Réalisation, point d’étape et deux séries de corrections incluses.' },
      { step: '3. Suivi', title: 'Abonnement si vous le souhaitez', desc: 'Maintenance, assistance et évolution, sans engagement.' },
    ],
    cardsView: 'Fiches détaillées',
    tableView: 'Comparatif rapide',
    idealForLabel: 'Pour qui ?',
    deliverablesLabel: 'Livrables :',
    roiLabel: 'Résultat attendu :',
    showDetails: (n) => `Voir les ${n} points`,
    hideDetails: 'Masquer le détail',
    recommended: 'Recommandé',
    popular: 'Populaire',
    cardFooter: 'Réponse sous 24 h • Sans engagement',
    tableTitle: 'Tableau comparatif des prestations',
    tableSubtitle: 'Durées, tarifs, formats et livrables en un coup d’œil.',
    colPackage: 'Prestation',
    colCategory: 'Catégorie',
    colPrice: 'Tarif',
    colDuration: 'Durée',
    colFormat: 'Format',
    colDeliverables: 'Livrables',
    colAction: 'Action',
    select: 'Choisir',
    optionsTitle: 'Options & prestations complémentaires',
    optionsSubtitle: 'À ajouter à n’importe quelle prestation.',
    bannerTitle: 'Le diagnostic est offert si vous poursuivez',
    bannerText: 'Vous ne prenez aucun risque : les 2 h de diagnostic (200 €) sont gratuites si un forfait ou un abonnement est signé dans les 30 jours. Le barème complet est disponible sur simple demande.',
    bannerWhatsapp: 'Poser une question sur WhatsApp',
    bannerSimulator: 'Trouver ma formule (1 min)',
    tiers: SERVICE_TIERS,
    options: SERVICE_OPTIONS,
  },
  simulator: {
    badge: 'SIMULATEUR',
    title: 'Quelle formule pour votre cabinet ?',
    subtitle: 'Trois questions pour obtenir une recommandation et son prix.',
    roleLabel: '1. Votre structure',
    roles: [
      { value: 'solo', title: 'Avocat seul', desc: 'Cabinet individuel' },
      { value: 'team', title: 'Cabinet avec équipe', desc: 'Associés, collaborateurs' },
      { value: 'liberal', title: 'Autre profession', desc: 'Libérale ou indépendante' },
    ],
    challengeLabel: '2. Votre priorité',
    challenges: [
      { value: 'web', label: 'Avoir un site professionnel et être trouvé en ligne' },
      { value: 'billing', label: 'Facturer plus vite, sans ressaisie, et suivre les impayés' },
      { value: 'files', label: 'Mettre de l’ordre dans mes fichiers et mes processus' },
      { value: 'security', label: 'Passer à un e-mail pro et sécuriser les données de mes clients' },
      { value: 'all', label: 'Un peu tout cela : remettre le cabinet à plat' },
    ],
    intensityLabel: '3. Le format souhaité',
    intensities: [
      { value: 'ponctuel', label: 'Ponctuel' },
      { value: 'projet', label: 'Projet complet' },
      { value: 'suivi', label: 'Suivi régulier' },
    ],
    resultBadge: 'Recommandation',
    priceLabel: 'Tarif (TVA non applicable)',
    impactLabel: 'Résultat attendu',
    formatLabel: 'Durée',
  },
  comparisons: {
    badge: 'COMPARATIF',
    title: 'Pourquoi Cognitive Studio',
    subtitle: 'Un seul interlocuteur qui connaît les cabinets, au lieu de plusieurs prestataires généralistes.',
    colAspect: 'Critère',
    colTraditional: 'Prestataires classiques',
    colCognitive: 'Cognitive Studio',
    rows: PRO_COMPARISON
  },
  founder: {
    badge: 'LE FONDATEUR',
    title: 'De la recherche universitaire à l’organisation des cabinets',
    subtitle: '« Mon approche : allier l’exigence universitaire à l’efficacité concrète sur le terrain. »',
    roleTitle: 'Fondateur & Consultant en organisation numérique',
    credentials: [
      'Master en Global Archaeology, Université de Leiden',
      'Année passerelle vers le Master en droit (ULB)',
      'Woluwe-Saint-Lambert, Bruxelles (Belgique)',
    ],
    bio1: "Diplômé d’un Master en Global Archaeology de l’Université de Leiden, orienté vers l’évolution de la cognition humaine, Simon Maistriau a fondé Cognitive Studio pour réduire l’écart entre la théorie et l’efficacité réelle sur le terrain. Il poursuit aujourd’hui des études de droit à l’ULB, en année passerelle vers le Master en droit.",
    bio2: "Auprès des cabinets d’avocats et des indépendants qu’il accompagne, son constat est constant : l’empilement d’outils mal reliés crée des ressaisies, des oublis de facturation et des risques pour la confidentialité des dossiers.",
    bio3: "À travers la Méthode C.O.R.E., il conçoit des systèmes simples — site, fichiers interconnectés, bureau numérique sécurisé — que le cabinet comprend, possède et sait faire évoluer.",
    quote: "Mon master à Leiden portait sur l'évolution de la cognition humaine, à la croisée de l'archéologie, des sciences cognitives et de la théorie de l'évolution. J'en ai gardé une méthode : comprendre comment l'on travaille et comment l'on résout des problèmes complexes, pour en tirer des outils concrets. Mes études de droit me permettent de parler le même langage que les cabinets que j'accompagne.",
    callToAction: 'Échanger directement avec Simon Maistriau',
    consultantCreds: 'Master en Global Archaeology (Université de Leiden) • Année passerelle Master en droit (ULB)',
  },
  testimonials: {
    badge: 'RÉFÉRENCES',
    title: 'Ils nous ont confié leur cabinet',
    subtitle: 'Quelques réalisations récentes et l’avis publié sur notre fiche Google.',
    referencesTitle: 'Réalisations',
    reviewsTitle: 'Avis client',
    verifiedGoogle: 'Avis publié sur Google',
    visitSite: 'Voir le site',
    items: TESTIMONIALS,
    references: REFERENCES
  },
  faq: {
    badge: 'QUESTIONS FRÉQUENTES',
    title: 'Vos questions, nos réponses',
    subtitle: 'Tarifs, confidentialité, propriété des outils et méthode de travail.',
    filterAll: 'Toutes les questions',
    filterTarifs: 'Tarifs & conditions',
    filterMethode: 'Méthode & confidentialité',
    items: FAQ_DATA
  },
  contact: {
    badge: 'CONTACT',
    title: 'Parlons de votre cabinet',
    subtitle: 'Une question sur une prestation, un diagnostic à planifier ? Réponse du fondateur sous 24 h ouvrables.',
    form: {
      name: 'Nom et prénom *',
      phone: 'Téléphone *',
      email: 'Adresse e-mail *',
      role: 'Vous êtes :',
      roleOptions: {
        lawyer: 'Avocat / Cabinet d’avocats',
        liberal: 'Autre profession libérale',
        business: 'Indépendant / PME',
        other: 'Autre',
      },
      formula: 'Prestation ou besoin',
      formulaPlaceholder: 'Diagnostic offert, Site Cabinet, Circuit de facturation…',
      message: 'Décrivez votre cabinet et votre besoin *',
      messagePlaceholder: 'Taille du cabinet, outils utilisés, ce qui vous fait perdre du temps, échéances…',
      sendCopy: '',
      submitBtn: 'Envoyer ma demande par e-mail',
      submitting: 'Ouverture de votre messagerie...',
      successTitle: 'Votre message est prêt',
      successDesc: 'Votre messagerie s’est ouverte avec votre demande pré-remplie : il ne reste qu’à cliquer sur Envoyer. Si rien ne s’est ouvert, écrivez à info@cognitive-studio.be ou passez par WhatsApp.',
      accelerateWhatsapp: 'Accélérer sur WhatsApp',
      sendAnother: 'Envoyer un autre message',
    },
    directCard: {
      title: 'Ligne directe du fondateur',
      phoneTitle: 'Téléphone Belgique',
      whatsappTitle: 'WhatsApp',
      emailTitle: 'Courriel officiel',
    },
    hoursCard: {
      title: 'Heures d’ouverture & bureau',
      zonesTitle: 'Déplacements inclus (Bruxelles) :',
      zonesDesc: 'Woluwe-Saint-Lambert, Woluwe-Saint-Pierre, Etterbeek, Ixelles, Uccle, Auderghem. Ailleurs en Belgique sur devis ; toutes les prestations sont aussi possibles à distance.',
      addressTitle: 'Adresse du bureau :',
    },
  },
  footer: {
    brandDesc: 'Studio numérique des cabinets d’avocats et professions libérales à Bruxelles : sites internet, fichiers de gestion interconnectés, bureau numérique et sécurité des données.',
    legalNote: 'Entreprise individuelle • TVA non applicable (régime de franchise) • Conforme au Code de droit économique belge.',
    address: 'Avenue Heydenberg n°39, 1200 Woluwe-Saint-Lambert, Bruxelles',
    founderLine: 'Fondateur & Responsable : Simon Maistriau',
    navTitle: 'Navigation',
    collaborationsTitle: 'Collaborations',
    collaborations: [
      { name: 'Me Philippe Maistriau', detail: 'Avocat au Barreau', url: 'https://www.avocat-maistriau.com/' },
      { name: 'Me Ana Ferreira', detail: 'Avocate au Barreau de Bruxelles', url: 'https://avocate-anaferreira.com/' }
    ],
    hoursTitle: 'Disponibilités',
    legalModalBtn: 'Consulter les Mentions Légales Belges',
    copyright: 'Cognitive-Studio. Tous droits réservés. L’outil ne doit jamais précéder la pensée.',
  }
};

export const TRANSLATIONS_EN: Translations = {
  common: {
    language: 'English',
    bookAudit: 'Free diagnostic',
    whatsAppDirect: 'Direct WhatsApp',
    callNow: 'Call Us',
    address: 'Avenue Heydenberg 39, 1200 Woluwe-Saint-Lambert',
    certifiedGoogle: 'Reviews published on Google • Brussels & Woluwe-Saint-Lambert',
    viewOnMaps: 'View on Maps',
    readMore: 'Learn More',
    close: 'Close',
    vatNote: 'Net prices • VAT not applicable (small-business exemption)',
  },
  header: {
    tagline: 'Brussels • Law firms',
    nav: {
      core: 'Method',
      services: 'Pricing',
      simulator: 'Simulator',
      comparison: 'Comparison',
      founder: 'Founder',
      faq: 'FAQ',
      contact: 'Contact',
    },
  },
  hero: {
    tagline: 'Digital studio',
    subTagline: 'Academic rigor & practical efficiency',
    specialtyBadge: 'Specialised in law firms & independent professionals',
    h1Main: 'The digital studio',
    h1Accent: 'for law firms & independent professionals.',
    description: 'Website, interconnected management files, digital office and data security: we organise your practice so you can focus on your cases.',
    scienceNote: 'A single contact who studies law and knows the constraints of a practice: professional secrecy, ethics, GDPR.',
    polesTitle: 'What we set up',
    poles: [
      { category: 'web', title: 'Online presence', desc: 'Practice website, online booking, SEO and Google profile.', from: 'from €790' },
      { category: 'fichiers', title: 'Interconnected files', desc: 'Linked Excel or Google Sheets files: from time recorded to invoice, without re-typing.', from: 'from €350' },
      { category: 'bureau', title: 'Digital office & security', desc: 'Professional email, organised Drive, two-factor authentication, backups and GDPR.', from: 'from €390' },
      { category: 'conseil', title: 'Consulting & organisation', desc: 'Free diagnostic, process redesign, documentation and training.', from: '€100 / h' },
    ],
    ctaBooking: 'Book my free diagnostic',
    ctaSimulator: 'Find my package (1 min)',
    metrics: [
      { value: 'Free', label: '2-hour diagnostic if you go ahead' },
      { value: '1:1', label: 'One contact: the founder' },
      { value: '< 24 h', label: 'Reply by phone, email or WhatsApp' },
      { value: '100%', label: 'Website, files and accounts in your name' },
    ],
  },
  methodCore: {
    badge: 'OUR METHOD',
    title: 'The C.O.R.E. Method',
    subtitle: 'Four steps, drawn from the cognitive sciences, to replace improvisation with an organisation that lasts.',
    pillarLabel: 'Step',
    principleLabel: 'Principle',
    applicationLabel: 'In your practice',
    compareTitle: 'Your practice, before and after',
    compareSubtitle: 'What concretely changes day to day.',
    withoutTitle: 'Without digital organisation',
    withTitle: 'With Cognitive Studio',
    without: [
      { title: 'Re-typing:', text: 'the same information entered in three different files.' },
      { title: 'Billing:', text: 'hours every month rebuilding time records and drafting invoices.' },
      { title: 'Personal accounts:', text: 'client data mixed with your personal mailbox, without two-factor authentication.' },
      { title: 'No or outdated website:', text: 'clients who cannot find you or book an appointment.' },
    ],
    with: [
      { title: 'Enter once:', text: 'each piece of information automatically feeds the other files.' },
      { title: 'Automated billing:', text: 'from time recorded to PDF invoice in minutes.' },
      { title: 'Secure office:', text: 'professional email, protected access, backups and GDPR records.' },
      { title: 'Visible practice:', text: 'a clear website, compliant with your professional rules, with online booking.' },
    ],
    pillars: CORE_PILLARS_EN
  },
  services: {
    badge: 'SERVICES & PRICING',
    title: 'Fixed, published prices, no surprises',
    subtitle: 'Choose a turnkey package or build your own engagement. All prices are net: VAT not applicable (small-business exemption).',
    allLabel: 'View all',
    offersLabel: 'offers',
    categories: {
      formules: { label: 'Packages', short: 'Turnkey', title: 'Turnkey packages', subtitle: 'The services practices request most, bundled with 12 to 14% savings.' },
      conseil: { label: 'Consulting', short: 'From €100 / h', title: 'Consulting & organisation', subtitle: 'Diagnostic, on-demand sessions and process redesign.' },
      web: { label: 'Websites', short: 'From €790', title: 'Online presence', subtitle: 'Clean, fast websites that respect your professional rules.' },
      fichiers: { label: 'Files', short: 'From €350', title: 'Interconnected files & automation', subtitle: 'Linked Excel or Google Sheets files: information entered once feeds everything else.' },
      bureau: { label: 'Office & security', short: 'From €390', title: 'Digital office, security & GDPR', subtitle: 'A professional environment, separate from your private life, with protected data.' },
      abonnements: { label: 'Subscriptions', short: 'From €29 / month', title: 'Monthly subscriptions', subtitle: 'No commitment, one month’s notice. 10% off with annual payment.' },
    },
    pathwayTitle: 'How we work',
    pathway: [
      { step: '1. Diagnostic', title: '2 hours, free if you go ahead', desc: 'Tools, files, website and security reviewed; costed proposal within 5 days.' },
      { step: '2. Set-up', title: 'Fixed-price package', desc: 'Delivery, mid-point review and two rounds of corrections included.' },
      { step: '3. Support', title: 'Subscription if you wish', desc: 'Maintenance, assistance and improvements, no commitment.' },
    ],
    cardsView: 'Detailed cards',
    tableView: 'Quick table',
    idealForLabel: 'Ideal for:',
    deliverablesLabel: 'Deliverables:',
    roiLabel: 'Expected result:',
    showDetails: (n) => `View all ${n} points`,
    hideDetails: 'Hide details',
    recommended: 'Recommended',
    popular: 'Popular',
    cardFooter: 'Reply within 24h • No commitment',
    tableTitle: 'Services comparison table',
    tableSubtitle: 'Durations, prices, formats and deliverables at a glance.',
    colPackage: 'Service',
    colCategory: 'Category',
    colPrice: 'Price',
    colDuration: 'Duration',
    colFormat: 'Format',
    colDeliverables: 'Deliverables',
    colAction: 'Action',
    select: 'Select',
    optionsTitle: 'Options & add-ons',
    optionsSubtitle: 'Can be added to any service.',
    bannerTitle: 'The diagnostic is free if you go ahead',
    bannerText: 'No risk: the 2-hour diagnostic (€200) is free if a package or subscription is signed within 30 days. The full price list is available on request.',
    bannerWhatsapp: 'Ask on WhatsApp',
    bannerSimulator: 'Find my package (1 min)',
    tiers: SERVICE_TIERS_EN,
    options: SERVICE_OPTIONS_EN,
  },
  simulator: {
    badge: 'SIMULATOR',
    title: 'Which package for your practice?',
    subtitle: 'Three questions to get a recommendation and its price.',
    roleLabel: '1. Your structure',
    roles: [
      { value: 'solo', title: 'Sole lawyer', desc: 'Individual practice' },
      { value: 'team', title: 'Firm with a team', desc: 'Partners, associates' },
      { value: 'liberal', title: 'Other profession', desc: 'Liberal or independent' },
    ],
    challengeLabel: '2. Your priority',
    challenges: [
      { value: 'web', label: 'Have a professional website and be found online' },
      { value: 'billing', label: 'Bill faster, without re-typing, and track unpaid invoices' },
      { value: 'files', label: 'Bring order to my files and processes' },
      { value: 'security', label: 'Move to professional email and secure my clients’ data' },
      { value: 'all', label: 'A bit of everything: reset the whole practice' },
    ],
    intensityLabel: '3. Preferred format',
    intensities: [
      { value: 'ponctuel', label: 'One-off' },
      { value: 'projet', label: 'Full project' },
      { value: 'suivi', label: 'Ongoing support' },
    ],
    resultBadge: 'Recommendation',
    priceLabel: 'Price (VAT not applicable)',
    impactLabel: 'Expected result',
    formatLabel: 'Duration',
  },
  comparisons: {
    badge: 'COMPARISON',
    title: 'Why Cognitive Studio',
    subtitle: 'One contact who knows professional practices, instead of several general providers.',
    colAspect: 'Criterion',
    colTraditional: 'Typical providers',
    colCognitive: 'Cognitive Studio',
    rows: PRO_COMPARISON_EN
  },
  founder: {
    badge: 'THE FOUNDER',
    title: 'From academic research to organising professional practices',
    subtitle: '« My approach: combining academic rigor with practical, hands-on efficiency. »',
    roleTitle: 'Founder & Digital Organisation Consultant',
    credentials: [
      'MA in Global Archaeology, Leiden University',
      'Bridging year towards a Master of Laws (ULB)',
      'Woluwe-Saint-Lambert, Brussels (Belgium)',
    ],
    bio1: "A graduate of Leiden University (MA in Global Archaeology, with a focus on the evolution of human cognition), Simon Maistriau founded Cognitive Studio to close the gap between theory and real-world effectiveness. He is now studying law at ULB, in the bridging year towards a Master of Laws.",
    bio2: "With the law firms and independents he supports, his finding is always the same: a pile of poorly connected tools creates re-typing, forgotten billing and risks to client confidentiality.",
    bio3: "Through the C.O.R.E. Method, he designs simple systems — website, interconnected files, secure digital office — that the practice understands, owns and can evolve.",
    quote: "My Master's at Leiden focused on the evolution of human cognition, at the crossroads of archaeology, the cognitive sciences and evolutionary theory. It gave me a method: understanding how people work and solve complex problems, and turning that into concrete tools. My law studies let me speak the same language as the practices I support.",
    callToAction: 'Talk Directly with Simon Maistriau',
    consultantCreds: 'MA in Global Archaeology (Leiden University) • Bridging year, Master of Laws (ULB)',
  },
  testimonials: {
    badge: 'REFERENCES',
    title: 'They trusted us with their practice',
    subtitle: 'Some recent projects and the review published on our Google profile.',
    referencesTitle: 'Projects',
    reviewsTitle: 'Client review',
    verifiedGoogle: 'Review published on Google',
    visitSite: 'Visit website',
    items: TESTIMONIALS_EN,
    references: REFERENCES_EN
  },
  faq: {
    badge: 'FREQUENTLY ASKED QUESTIONS',
    title: 'Your questions, our answers',
    subtitle: 'Pricing, confidentiality, ownership of tools and working method.',
    filterAll: 'All questions',
    filterTarifs: 'Pricing & terms',
    filterMethode: 'Method & confidentiality',
    items: FAQ_DATA_EN
  },
  contact: {
    badge: 'CONTACT',
    title: 'Let’s talk about your practice',
    subtitle: 'A question about a service, a diagnostic to schedule? Reply from the founder within 24 working hours.',
    form: {
      name: 'Full name *',
      phone: 'Phone *',
      email: 'Email address *',
      role: 'You are:',
      roleOptions: {
        lawyer: 'Lawyer / Law firm',
        liberal: 'Other independent profession',
        business: 'Freelancer / SME',
        other: 'Other',
      },
      formula: 'Service or need',
      formulaPlaceholder: 'Free diagnostic, Practice Website, Billing workflow…',
      message: 'Describe your practice and your need *',
      messagePlaceholder: 'Size of the practice, tools used, what wastes your time, deadlines…',
      sendCopy: '',
      submitBtn: 'Send my request by email',
      submitting: 'Opening your email app...',
      successTitle: 'Your message is ready',
      successDesc: 'Your email app has opened with your request pre-filled: just click Send. If nothing opened, write to info@cognitive-studio.be or use WhatsApp.',
      accelerateWhatsapp: 'Fast-Track via WhatsApp',
      sendAnother: 'Send another message',
    },
    directCard: {
      title: 'Founder Direct Line',
      phoneTitle: 'Belgium Phone Line',
      whatsappTitle: 'WhatsApp',
      emailTitle: 'Official Email',
    },
    hoursCard: {
      title: 'Office Location & Availability',
      zonesTitle: 'Travel included (Brussels):',
      zonesDesc: 'Woluwe-Saint-Lambert, Woluwe-Saint-Pierre, Etterbeek, Ixelles, Uccle, Auderghem. Elsewhere in Belgium on quote; all services are also available remotely.',
      addressTitle: 'Office Address:',
    },
  },
  footer: {
    brandDesc: 'Digital studio for law firms and independent professionals in Brussels: websites, interconnected management files, digital office and data security.',
    legalNote: 'Sole proprietorship • VAT not applicable (small-business exemption) • Compliant with the Belgian Code of Economic Law.',
    address: 'Avenue Heydenberg 39, 1200 Woluwe-Saint-Lambert, Brussels',
    founderLine: 'Founder & Managing Director: Simon Maistriau',
    navTitle: 'Navigation',
    collaborationsTitle: 'Collaborations',
    collaborations: [
      { name: 'Me Philippe Maistriau', detail: 'Attorney at Law', url: 'https://www.avocat-maistriau.com/' },
      { name: 'Me Ana Ferreira', detail: 'Attorney at Law, Brussels Bar', url: 'https://avocate-anaferreira.com/' }
    ],
    hoursTitle: 'Hours & Response Time',
    legalModalBtn: 'Consult Belgian Legal Notices',
    copyright: 'Cognitive-Studio. All rights reserved. Tools must never precede thought.',
  }
};

export const getTranslations = (lang: 'fr' | 'en'): Translations => {
  return lang === 'en' ? TRANSLATIONS_EN : TRANSLATIONS_FR;
};
