import { CorePillar, ServiceTier, ComparisonRow, TestimonialItem, FaqItem } from '../types';
import { 
  CORE_PILLARS, 
  SERVICE_TIERS, 
  STUDENT_COMPARISON, 
  PRO_COMPARISON, 
  FAQ_DATA, 
  TESTIMONIALS 
} from './content';

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
    audiences: {
      students: string;
      pros: string;
      incubator: string;
    };
  };
  hero: {
    tagline: string;
    subTagline: string;
    location: string;
    h1Main: string;
    h1Accent: string;
    description: string;
    scienceNote: string;
    tabs: {
      students: string;
      pros: string;
      incubator: string;
    };
    bullets: string[];
    ctaBooking: string;
    ctaWhatsapp: string;
    ratingText: string;
  };
  methodCore: {
    badge: string;
    title: string;
    subtitle: string;
    switchMode: string;
    modeStudent: string;
    modePro: string;
    pillars: CorePillar[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    tabs: {
      all: string;
      students: string;
      pros: string;
      incubator: string;
    };
    durationLabel: string;
    formatLabel: string;
    deliverablesLabel: string;
    roiLabel: string;
    tiers: ServiceTier[];
  };
  simulator: {
    badge: string;
    title: string;
    subtitle: string;
    roleLabel: string;
    roles: {
      student: string;
      pro: string;
      incubator: string;
    };
    challengeLabel: string;
    challenges: {
      student: { label: string; value: string }[];
      pro: { label: string; value: string }[];
      incubator: { label: string; value: string }[];
    };
    urgencyLabel: string;
    urgencies: {
      urgent: { title: string; desc: string };
      medium: { title: string; desc: string };
      deep: { title: string; desc: string };
    };
    recommendedFormula: string;
    estimatedGainLabel: string;
    timeframeLabel: string;
    keyHighlightLabel: string;
    ctaButton: string;
  };
  comparisons: {
    badge: string;
    title: string;
    subtitle: string;
    tabStudents: string;
    tabPros: string;
    colAspect: string;
    colTraditional: string;
    colCognitive: string;
    colAdvantage: string;
    studentRows: ComparisonRow[];
    proRows: ComparisonRow[];
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
    callToAction: string;
    consultantCreds: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterStudents: string;
    filterPros: string;
    verifiedGoogle: string;
    items: TestimonialItem[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterStudents: string;
    filterPros: string;
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
        student: string;
        parent: string;
        pro: string;
        project: string;
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
    bookAudit: 'Réserver un Audit',
    whatsAppDirect: 'WhatsApp direct',
    callNow: 'Appeler',
    address: 'Avenue Heydenberg n°39, 1200 Woluwe-Saint-Lambert',
    certifiedGoogle: 'Avis publiés sur Google • Bruxelles & Woluwe-Saint-Lambert',
    viewOnMaps: 'Voir sur Maps',
    readMore: 'En savoir plus',
    close: 'Fermer',
  },
  header: {
    tagline: 'Bruxelles • Stratégie & Incubation',
    nav: {
      core: 'Méthode C.O.R.E.',
      services: 'Formules & Tarifs',
      simulator: 'Simulateur',
      comparison: 'Comparatif',
      founder: 'Simon Maistriau',
      faq: 'FAQ',
      contact: 'Contact',
    },
    audiences: {
      pros: 'Professionnels & Entreprises',
      incubator: 'Incubateur',
      students: 'Projet Académique (Étudiants)',
    },
  },
  hero: {
    tagline: 'L’exception au quotidien',
    subTagline: 'Rigueur universitaire & efficacité concrète',
    location: '',
    h1Main: "L'Ingénierie Pédagogique & Opérationnelle",
    h1Accent: 'Pour Professionnels, Dirigeants & Cabinets.',
    description: "Déployez votre Second Cerveau, supprimez les frictions opérationnelles et libérez jusqu’à 15 h par mois grâce à un accompagnement personnalisé à Bruxelles.",
    scienceNote: 'Une méthode nourrie par les sciences cognitives : structurez vos flux, maîtrisez l’intelligence artificielle et gagnez en autonomie. (Volet sociétal : Projet Académique dédié aux étudiants).',
    tabs: {
      pros: 'Professionnels & Entreprises',
      incubator: 'Incubateur Indépendants',
      students: 'Projet Académique (Étudiants)',
    },
    bullets: [
      'Tarif horaire de référence pour professionnels : 125 €, déductible au titre de frais professionnels',
      'Installation complète du Second Cerveau digital (Notion, automatisations, CRM)',
      'Méthode C.O.R.E. propriétaire : Comprendre, Organiser, Restructurer, Exécuter',
    ],
    ctaBooking: 'Réserver une séance pro',
    ctaWhatsapp: 'Échanger sur WhatsApp',
    ratingText: 'Note Google : 4,8 / 5 (6 avis)',
  },
  methodCore: {
    badge: 'INGÉNIERIE COGNITIVE PROPRIÉTAIRE',
    title: 'La Méthode C.O.R.E.',
    subtitle: 'Une architecture cognitive en 4 étapes pour remplacer l’improvisation par la certitude des résultats.',
    switchMode: 'Voir l’application pour :',
    modeStudent: 'Projet Académique (Étudiants)',
    modePro: 'Professionnels & Entreprises',
    pillars: [
      {
        letter: 'C',
        word: 'Comprendre',
        subtitle: 'Déconstruire les systèmes & refuser la boîte noire',
        description: 'La compréhension profonde remplace le par-cœur stérile et la dépendance aveugle aux IA génératives. Nous isolons les principes premiers de chaque défi pour ancrer la logique dans vos réseaux cognitifs durables.',
        academicApplication: 'Déconstruction méthodique du cours, cartographie conceptuelle sans fiches pré-mâchées, appropriation des mécanismes d’examen.',
        businessApplication: 'Audit sans complaisance des processus d’entreprise, détection des points de friction et identification précise des goulots d’étranglement.',
        iconName: 'Brain'
      },
      {
        letter: 'O',
        word: 'Organiser',
        subtitle: 'Bâtir votre "Second Cerveau" & structurer le flux',
        description: 'La clarté mentale naît d’une structure irréprochable. Nous éliminons la charge cognitive inutile en matérialisant un écosystème d’organisation personnel ou d’entreprise (Notion, protocoles, rituels).',
        academicApplication: 'Rétro-planning réaliste, priorisation absolue des matières à fort coefficient, routine de travail fluide sans procrastination.',
        businessApplication: 'Architecture Notion complète, centralisation des connaissances, CRM opérationnel et suppression des doublons administratifs.',
        iconName: 'FolderTree'
      },
      {
        letter: 'R',
        word: 'Restructurer',
        subtitle: 'Affûter l’esprit critique & colmater les fuites',
        description: 'L’outil ne doit jamais précéder la pensée. Nous apprenons à maîtriser les outils modernes (IA, automatisations) plutôt que de leur sous-traiter passivement notre intellect.',
        academicApplication: 'Méthode « Zéro Support » : l’élève produit lui-même sa matière, développe un esprit de synthèse rigoureux et maîtrise la rhétorique.',
        businessApplication: 'Simplification radicale des démarches, automatisation des tâches chronophages et réduction des coûts de gestion externe.',
        iconName: 'Cpu'
      },
      {
        letter: 'E',
        word: 'Exécuter',
        subtitle: 'Passer à l’action avec précision',
        description: 'La théorie sans résultat est inutile. Tout accompagnement se traduit par des livrables tangibles, des quick-wins immédiats et une autonomie totale retrouvée.',
        academicApplication: 'Mises en situation sous pression, examens blancs minutés, techniques de gestion du stress et validation sereine des crédits ECTS.',
        businessApplication: 'Mise en ligne de l’offre, contractualisation, facturation automatisée et indépendance opérationnelle pérenne.',
        iconName: 'Zap'
      }
    ]
  },
  services: {
    badge: 'CATALOGUE DES INTERVENTIONS',
    title: 'Des Formules Conçues Pour Des Résultats Tangibles',
    subtitle: 'Interventions pour indépendants et entreprises, et Projet Académique d’accompagnement des étudiants. Tous les prix sont indiqués toutes taxes comprises.',
    tabs: {
      pros: 'Professionnels & Entreprises',
      incubator: 'Incubateur d’Indépendants',
      students: 'Projet Académique (Étudiants)',
      all: 'Toutes les formules',
    },
    durationLabel: 'Durée :',
    formatLabel: 'Format :',
    deliverablesLabel: 'Livrables concrets :',
    roiLabel: 'Impact attendu :',
    tiers: SERVICE_TIERS
  },
  simulator: {
    badge: 'SIMULATEUR INTERACTIF',
    title: 'Trouvez la formule exacte pour votre situation',
    subtitle: 'Répondez à 3 questions pour estimer vos gains de temps, de rentabilité et obtenir votre plan d’action recommandé.',
    roleLabel: '1. Votre Profil Actuel',
    roles: {
      pro: 'Professionnel / Dirigeant / Indépendant',
      incubator: 'Porteur de projet / Salarié',
      student: 'Projet Académique (Étudiant / Parent d’élève)',
    },
    challengeLabel: '2. Votre Principal Obstacle',
    challenges: {
      pro: [
        { label: 'Noyé sous l’opérationnel et la gestion administrative', value: 'overwhelmed' },
        { label: 'Perte de temps sur des outils mal synchronisés ou vieillissants', value: 'bad_tools' },
        { label: 'Besoin d’un pilotage de direction des opérations sans recruter', value: 'coo_needed' }
      ],
      incubator: [
        { label: 'Idée de side-hustle mais peur de la complexité administrative', value: 'side_fear' },
        { label: 'Lancement d’une société à temps plein avec bases solides', value: 'full_launch' }
      ],
      student: [
        { label: 'Examens ou blocus imminent (panique / manque de temps)', value: 'exam_stress' },
        { label: 'Méthode de travail inefficace malgré de longues heures d’étude', value: 'bad_method' },
        { label: 'Objectif de mention ou concours d’excellence (médecine, droit)', value: 'high_stakes' }
      ]
    },
    urgencyLabel: '3. Horizon de Temps & Intensité Souhaitée',
    urgencies: {
      urgent: {
        title: 'Action rapide',
        desc: 'Intervention ciblée (125 € / h)'
      },
      medium: {
        title: 'Diagnostic & Restructuration',
        desc: 'Audit Flash 2h (250 €) et plan d’action structuré'
      },
      deep: {
        title: 'Transformation en Profondeur',
        desc: 'Pack Architecture 15h ou Direction des Opérations Partagée'
      }
    },
    recommendedFormula: 'Formule Recommandée pour Votre Situation :',
    estimatedGainLabel: 'Gain Estimé :',
    timeframeLabel: 'Cadence :',
    keyHighlightLabel: 'Pourquoi ce choix ?',
    ctaButton: 'Sélectionner cette formule et réserver',
  },
  comparisons: {
    badge: 'ANALYSE COMPARATIVE',
    title: 'Pourquoi Cognitive Studio Change la Donne',
    subtitle: 'Deux approches comparées, pour les professionnels comme pour les étudiants.',
    tabPros: 'Professionnels : Cognitive Studio vs conseil traditionnel',
    tabStudents: 'Projet Académique : Cognitive Studio vs Tutorat Classique',
    colAspect: 'Critère Analysé',
    colTraditional: 'Approche Traditionnelle',
    colCognitive: 'Approche Cognitive Studio',
    colAdvantage: 'Bénéfice Concret',
    studentRows: STUDENT_COMPARISON,
    proRows: PRO_COMPARISON
  },
  founder: {
    badge: 'LE FONDATEUR',
    title: 'De la recherche universitaire à l’efficacité opérationnelle',
    subtitle: '« Mon approche : allier l’exigence universitaire à l’efficacité concrète sur le terrain. »',
    roleTitle: 'Fondateur & Consultant en méthodologie',
    credentials: [
      'Master en Global Archaeology, Université de Leiden',
      'Année passerelle vers le Master en droit (ULB)',
      'Woluwe-Saint-Lambert, Bruxelles (Belgique)',
    ],
    bio1: "Diplômé d’un Master en Global Archaeology de l’Université de Leiden, orienté vers l’évolution de la cognition humaine, Simon Maistriau a fondé Cognitive Studio pour réduire l’écart entre la théorie académique et l’efficacité réelle sur le terrain. Il poursuit aujourd’hui des études de droit à l’ULB, en année passerelle vers le Master en droit (droit public et international).",
    bio2: "Que ce soit auprès d’étudiants en difficulté méthodologique ou d’entrepreneurs submergés par leurs flux administratifs, son diagnostic est le même : l’empilement d’outils sans compréhension profonde ne génère que surcharge mentale et dépendance.",
    bio3: "À travers la Méthode C.O.R.E. et le principe de « Zéro Support », il aide ses clients à retrouver leur autonomie : vous comprenez les principes premiers, structurez vos données et exécutez avec précision.",
    callToAction: 'Échanger directement avec Simon Maistriau',
    consultantCreds: 'Master en Global Archaeology (Université de Leiden) • Année passerelle Master en droit (ULB)',
  },
  testimonials: {
    badge: 'RETOURS D’EXPÉRIENCE',
    title: 'Ce Que Disent Ceux Qui Ont Franchi Le Pas',
    subtitle: 'Une sélection d’avis publiés sur la fiche Google de Cognitive Studio.',
    filterAll: 'Tous les avis',
    filterStudents: 'Pôle Étudiants & Scolarité',
    filterPros: 'Pôle Professionnels & Gestion',
    verifiedGoogle: 'Avis publiés sur Google',
    items: TESTIMONIALS
  },
  faq: {
    badge: 'QUESTIONS FRÉQUENTES',
    title: 'Toutes les Réponses à Vos Interrogations',
    subtitle: 'Méthodologie, logistique, déductibilité fiscale et garanties : tout ce qu’il faut savoir avant de démarrer.',
    filterAll: 'Toutes les questions',
    filterStudents: 'Questions Étudiants',
    filterPros: 'Questions Professionnels',
    items: FAQ_DATA
  },
  contact: {
    badge: 'PRISE DE CONTACT DIRECTE',
    title: 'Échangeons sur Votre Situation',
    subtitle: "Une question sur un pack ? Un audit à planifier d'urgence avant vos examens ou votre rentrée ? Réponse du fondateur sous 24 h.",
    form: {
      name: 'Nom et Prénom *',
      phone: 'Numéro de Téléphone *',
      email: 'Adresse E-mail *',
      role: 'Vous êtes :',
      roleOptions: {
        student: 'Étudiant',
        parent: 'Parent d’élève',
        pro: 'Indépendant / Chef d’entreprise',
        project: 'Porteur de projet',
      },
      formula: 'Formule ou besoin spécifique',
      formulaPlaceholder: 'Audit Flash (250 €), Pack Examens (350 €), Incubateur...',
      message: 'Message descriptif du projet ou de la situation scolaire *',
      messagePlaceholder: 'Précisez votre établissement / métier, vos échéances et les blocages constatés...',
      sendCopy: '',
      submitBtn: 'Envoyer ma demande par e-mail',
      submitting: 'Ouverture de votre messagerie...',
      successTitle: 'Votre message est prêt',
      successDesc: 'Votre messagerie s’est ouverte avec votre demande pré-remplie : il ne reste qu’à cliquer sur Envoyer. Si rien ne s’est ouvert, écrivez à info@cognitive-studio.be ou passez par WhatsApp.',
      accelerateWhatsapp: 'Accélérer sur WhatsApp',
      sendAnother: 'Envoyer un autre message',
    },
    directCard: {
      title: 'Ligne Directe du Fondateur',
      phoneTitle: 'Téléphone Belgique',
      whatsappTitle: 'WhatsApp',
      emailTitle: 'Courriel officiel',
    },
    hoursCard: {
      title: 'Heures d’Ouverture & Bureau',
      zonesTitle: 'Zones Physiques Couvertes (Bruxelles) :',
      zonesDesc: 'Woluwe-Saint-Lambert, Woluwe-Saint-Pierre, Etterbeek, Ixelles, Uccle, Auderghem. Séances en présentiel au bureau, à domicile ou téléconsultation vidéo sécurisée.',
      addressTitle: 'Adresse du Bureau :',
    },
  },
  footer: {
    brandDesc: 'Cabinet de Conseil en Stratégie Cognitive, Organisation & Méthodologie. Incubateur d’Indépendants à Bruxelles. Une approche fondée sur la rigueur universitaire, pour gagner en autonomie.',
    legalNote: 'Entreprise individuelle • Conforme au Code de droit économique belge.',
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
    bookAudit: 'Book an Audit',
    whatsAppDirect: 'Direct WhatsApp',
    callNow: 'Call Us',
    address: 'Avenue Heydenberg 39, 1200 Woluwe-Saint-Lambert',
    certifiedGoogle: 'Reviews published on Google • Brussels & Woluwe-Saint-Lambert',
    viewOnMaps: 'View on Maps',
    readMore: 'Learn More',
    close: 'Close',
  },
  header: {
    tagline: 'Brussels • Strategy & Incubation',
    nav: {
      core: 'C.O.R.E. Method',
      services: 'Packages & Pricing',
      simulator: 'Simulator',
      comparison: 'Comparison',
      founder: 'Simon Maistriau',
      faq: 'FAQ',
      contact: 'Contact',
    },
    audiences: {
      pros: 'Professionals & Enterprises',
      incubator: 'Incubator',
      students: 'Academic Project (Students)',
    },
  },
  hero: {
    tagline: 'Excellence in everyday practice',
    subTagline: 'Academic rigor & practical efficiency',
    location: '',
    h1Main: 'Pedagogical Engineering & Operations',
    h1Accent: 'For Professionals, Executives & Firms.',
    description: 'Deploy your Second Brain, eliminate operational friction, and reclaim up to 15 hours per month with personalised support in Brussels.',
    scienceNote: 'A method informed by the cognitive sciences: structure your workflows, master AI without dependency, and gain autonomy. (Societal initiative: Academic Project for students).',
    tabs: {
      pros: 'Professionals & Enterprises',
      incubator: 'Freelancer Incubator',
      students: 'Academic Project (Students)',
    },
    bullets: [
      'Standard hourly consulting rate for professionals: €125, deductible as a business expense',
      'Turnkey Second Brain digital ecosystem (Notion, automations, CRM)',
      'Proprietary C.O.R.E. Method: Comprehend, Organize, Restructure, Execute',
    ],
    ctaBooking: 'Book a pro session',
    ctaWhatsapp: 'Chat on WhatsApp',
    ratingText: 'Google rating: 4.8 / 5 (6 reviews)',
  },
  methodCore: {
    badge: 'PROPRIETARY COGNITIVE ENGINEERING',
    title: 'The C.O.R.E. Method',
    subtitle: 'A 4-stage cognitive architecture designed to replace guesswork with deterministic results.',
    switchMode: 'View application for:',
    modeStudent: 'Academic Project (Students)',
    modePro: 'Professionals & Enterprises',
    pillars: [
      {
        letter: 'C',
        word: 'Comprehend',
        subtitle: 'Deconstruct systems & reject the black box',
        description: 'Deep understanding replaces rote memorization and blind dependence on generative AI. We isolate the first principles of every challenge to anchor knowledge into long-term cognitive networks.',
        academicApplication: 'Methodical course deconstruction, concept mapping without pre-made study sheets, full mastery of examination mechanisms.',
        businessApplication: 'Uncompromising audit of business workflows, detection of friction points, and precise bottleneck identification.',
        iconName: 'Brain'
      },
      {
        letter: 'O',
        word: 'Organize',
        subtitle: 'Build your "Second Brain" & streamline the flow',
        description: 'Mental clarity stems from flawless structure. We eliminate cognitive overload by materializing an external organization ecosystem (Notion, protocols, rituals).',
        academicApplication: 'Realistic retro-planning, strict prioritization of high-credit subjects, fluid study routines free of procrastination.',
        businessApplication: 'Complete Notion workspace architecture, knowledge centralization, operational CRM, and removal of administrative duplications.',
        iconName: 'FolderTree'
      },
      {
        letter: 'R',
        word: 'Restructure',
        subtitle: 'Sharpen critical thinking & seal operational leaks',
        description: 'Tools must never precede thought. We teach you to master modern software (AI, automations) rather than passively outsourcing your intellect to them.',
        academicApplication: 'Zero-Support doctrine: students produce their own synthesized notes, sharpen rigorous analysis, and master academic rhetoric.',
        businessApplication: 'Radical simplification of workflows, automation of repetitive tasks, and lower external management costs.',
        iconName: 'Cpu'
      },
      {
        letter: 'E',
        word: 'Execute',
        subtitle: 'Take action with precision',
        description: 'Theory without tangible outcome is pointless. Every engagement yields concrete deliverables, immediate quick wins, and lasting autonomy.',
        academicApplication: 'Timed simulations under real exam conditions, stress regulation techniques, and confident validation of university credits.',
        businessApplication: 'Live launch of commercial offers, streamlined contracts, automated invoicing, and durable operational independence.',
        iconName: 'Zap'
      }
    ]
  },
  services: {
    badge: 'ENGAGEMENT CATALOG',
    title: 'Solutions Engineered For Measurable Operational ROI',
    subtitle: 'Services for freelancers and companies, plus an academic project supporting students. All prices include all taxes.',
    tabs: {
      pros: 'Professionals & Enterprises',
      incubator: 'Freelancer Incubator',
      students: 'Academic Project (Students)',
      all: 'All Packages',
    },
    durationLabel: 'Duration:',
    formatLabel: 'Format:',
    deliverablesLabel: 'Concrete Deliverables:',
    roiLabel: 'Expected Impact:',
    tiers: [
      // 1. PRIMARY: PROFESSIONALS & ENTERPRISES
      {
        id: 'pro-hourly',
        name: 'Operational Consulting & Strategy',
        target: 'pros',
        tagline: 'On-demand high-touch session to unlock critical friction, audit tools, or restructure workflows.',
        price: '€125',
        priceDetail: 'Per intervention hour • Deductible as a business expense',
        badge: 'Benchmark Hourly Rate',
        duration: 'On-demand (starting from 1 hour)',
        format: 'In-person in Brussels or interactive video',
        idealFor: 'Independent professionals, executives, partners, and firms requiring immediate expert advice.',
        deliverables: [
          'Real-time diagnostic and operational root-cause analysis',
          'Concrete solutions implemented directly during the session',
          'Action summary and written roadmap within 24 hours'
        ],
        expectedImpact: 'Immediate bottleneck clearance and tangible efficiency gains right after the session.',
        features: [
          'Transparent benchmark hourly rate: €125 / hour',
          'Zero volume commitment: book according to your strict needs',
          'Direct work on your real tools, data, and workflows (Zero-Support method)',
          'Deductible as a business expense, depending on your tax situation'
        ],
        ctaText: 'Book a pro session'
      },
      {
        id: 'pro-audit',
        name: 'Flash Operations Audit (2h)',
        target: 'pros',
        tagline: 'Two hours of analysis to uncover losses of time, energy and profitability.',
        price: '€250',
        priceDetail: '2-hour fixed package (2 × €125) • Deducted if you continue',
        badge: 'Deducted from next step',
        highlightNote: 'Fully deducted if you continue with the Architecture Pack or the Fractional COO formula',
        duration: '2 hours of live analytical immersion',
        format: 'On-site immersion at your Brussels office or via video',
        idealFor: 'Freelancers, legal professionals and founders overwhelmed by daily operations.',
        deliverables: [
          'Comprehensive visual mapping of your operational workflows',
          'Clear audit report free of theoretical jargon',
          '5 Quick Wins roadmap to be deployed within 48 hours'
        ],
        expectedImpact: 'Immediate identification of at least 10 to 15 wasted hours per month.',
        features: [
          '2 hours observing real daily tools, client flows and administrative routines (based on €125/h)',
          'Clear, actionable audit report without consultant fluff',
          'Exact blueprint of administrative bottlenecks and manual errors',
          'Actionable Quick Wins list ready to implement within 48 hours',
          'Goal: pinpoint at least 10 hours lost every month'
        ],
        ctaText: 'Order a pro audit'
      },
      {
        id: 'pro-focus',
        name: 'Knockout Process Focus (6h)',
        target: 'pros',
        tagline: '6-hour intensive sprint to unlock a critical operational or commercial bottleneck.',
        price: '€750',
        priceDetail: '6-hour modular package (6 × €125)',
        badge: 'Rapid Action',
        duration: '6 flexible hours of expert tactical intervention',
        format: '1h30 to 3h working sessions based on your priorities',
        idealFor: 'Professionals facing a critical client deadline or a stalled internal process.',
        deliverables: [
          'Complete overhaul of a key process (client onboarding, proposal, delivery)',
          'Zero-Support method: direct co-working on your actual live deliverables',
          'Responsive WhatsApp access to unblock tactical micro-decisions'
        ],
        expectedImpact: 'Immediate unlocking of high-stakes projects and eradication of operational friction.',
        features: [
          '6 hours of agile consulting scheduled around your critical priorities',
          'Ideal for structuring a decisive pitch or revamping a client workflow',
          'Zero-Support doctrine: live hands-on execution on real business assets',
          'Maximum flexibility in booking time slots',
          'Direct WhatsApp chat to clear bottlenecks in real time'
        ],
        ctaText: 'Unblock my project'
      },
      {
        id: 'pro-architecture',
        name: 'Architecture & Second Brain Pack (15h)',
        target: 'pros',
        tagline: 'Holistic system redesign and turnkey deployment of your digital Second Brain.',
        price: '€1,500',
        priceDetail: '15-hour turnkey package (€375 discount compared with the hourly rate)',
        popular: true,
        badge: 'Complete System Transformation',
        duration: '15 coaching and execution hours over 6 to 8 weeks',
        format: 'Co-design workshops + hands-on technical deployment',
        idealFor: 'Boutique firms, freelancers and SMEs aiming to double output without hiring.',
        deliverables: [
          'Turnkey Notion / Second Brain workspace customized to your trade',
          'No-code automation flows (Make / Zapier / CRM integration)',
          'Standard operating procedures (SOPs) and video tutorials for team'
        ],
        expectedImpact: 'Net savings of 1 to 2 full days per week to focus on high-value business.',
        features: [
          'All components from the Knockout Process pack included',
          'End-to-end setup of your digital Second Brain from scratch',
          'Modern tech stack: Notion, tailored CRM, automated pipelines',
          'Configured AI agents tailored to your business without black-box dependency',
          'Comprehensive training for you and/or your staff members',
          'Ideal for career transitions, practice setup or scaling operations'
        ],
        ctaText: 'Select Architecture Pack'
      },
      {
        id: 'pro-retainer',
        name: 'Fractional COO (Chief Operating Officer)',
        target: 'pros',
        tagline: 'Your outsourced COO to orchestrate systems, optimize pipelines, and safeguard your time.',
        price: 'From €490',
        priceDetail: 'Per month • Flexible agreement without rigid lock-in',
        badge: 'Shared operations lead',
        duration: 'Agile monthly subscription, cancelable anytime',
        format: 'Monthly governance session + asynchronous ongoing oversight',
        idealFor: 'Growing boutique firms, successful solo founders, and busy leaders wanting continuous operational rigor.',
        deliverables: [
          'Monthly strategic alignment and operational roadmapping',
          'Continuous maintenance and upgrades of your Second Brain & automations',
          'Priority WhatsApp channel with the founder, reply within 12 hours'
        ],
        expectedImpact: 'Reclaiming at least 15 hours of mental bandwidth every month.',
        features: [
          'Fractional COO presence at a fraction of a full-time executive cost',
          'Monthly strategic sprint to audit KPIs and eliminate newly created friction',
          'Continuous evolution of your internal knowledge base and client portals',
          'Priority direct access to Simon Maistriau via WhatsApp',
          'Cancelable each month with 15 days notice: zero forced lock-in'
        ],
        ctaText: 'Retain Fractional COO'
      },
      // 2. INCUBATOR FOR ASPIRING FOUNDERS
      {
        id: 'incubator-side',
        name: 'Side-Hustle Launchpad',
        target: 'incubator',
        tagline: 'Go from idea to your first paying client without putting your current situation at risk.',
        price: '€2,500',
        priceDetail: 'Payment possible in 5 × €500',
        badge: 'Turnkey Programme',
        popular: true,
        duration: 'Structured 3-month programme',
        format: 'One-to-one coaching + execution follow-up',
        idealFor: 'Employees or graduates who want to start a self-employed activity safely.',
        deliverables: [
          'Offer and Minimum Viable Product (MVP) tested on the market',
          'Complete Belgian administrative & tax toolkit (self-employed status, BCE, VAT)',
          'Full operational stack: CRM, invoicing, Second Brain'
        ],
        expectedImpact: 'First revenue from the second month, on sound foundations.',
        features: [
          'Side-hustle diagnostic (1h30): targeting the fastest growth lever',
          'MVP design (3h) to test the market immediately',
          'Full system setup (6h): Second Brain, CRM, invoicing',
          'Complete administrative support: BCE registration, Belgian business account',
          'Practical training in bookkeeping and self-employed taxation',
          'Zero-Support architecture: automated start from the first euro earned'
        ],
        ctaText: 'Apply to Incubator'
      },
      {
        id: 'incubator-full',
        name: 'Flagship Project Launch',
        target: 'incubator',
        tagline: 'Build a resilient, scalable, and profitable business from day one, with close mentoring.',
        price: 'Custom Quote',
        priceDetail: '3 to 6-month intensive high-touch incubation',
        badge: 'High Impact',
        duration: '3 to 6 months of intensive mentorship',
        format: 'Weekly executive coaching + full operational immersion',
        idealFor: 'Entrepreneurs aiming for full-time venture launch requiring flawless foundational systems.',
        deliverables: [
          'Validated business model and high-ticket pricing strategy',
          'Bespoke digital ecosystem and no-code automations',
          'Privileged introduction to Cognitive Studio’s network and legal partners'
        ],
        expectedImpact: 'Secured launch with sustainable operational architecture and accelerated profitability.',
        features: [
          'Competitive market analysis and premium brand positioning',
          'Precise design of the business model and client acquisition systems',
          'Comprehensive day-one operational and automated workflow architecture',
          'Founder cognitive coaching: mental resilience and decision clarity',
          'Exclusive access to partner ecosystem and legal advisory network'
        ],
        ctaText: 'Explore Flagship Launch'
      },
      // 3. MINOR PROJECT: ACADEMIC PROJECT (STUDENTS)
      {
        id: 'student-audit',
        name: 'Methodological Audit',
        target: 'students',
        tagline: 'Targeted analytical intervention to pinpoint learning bottlenecks and restore study efficiency.',
        price: '€90',
        priceDetail: 'Single 1h30 session (Brussels or HD Video)',
        badge: 'Academic Project • Diagnosis',
        duration: '1h30 live diagnostic analysis',
        format: 'In-person in Brussels or secure video call',
        idealFor: 'Students losing efficiency, feeling overwhelmed or stuck in unproductive study habits.',
        deliverables: [
          'Personalised diagnosis of study methods, strengths and blockers',
          'Written strategic action plan delivered within 24 hours',
          'Concrete roadmap immediately applicable for upcoming study blocks'
        ],
        expectedImpact: 'End of passive revision & immediate clarity on exam priorities.',
        features: [
          'In-depth diagnosis of cognitive learning profile and mental load',
          'Precise mapping of underperformance root causes and attention dispersion',
          'Critical review of real course syllabus notes & elimination of traps',
          'Immediate action plan delivered right after the consultation',
          'Deducted if you continue with the Intensive Exam Pack'
        ],
        ctaText: 'Book Student Audit'
      },
      {
        id: 'student-commando',
        name: 'Intensive Exam Pack',
        target: 'students',
        tagline: 'Intensive emergency rescue plan before university blocus to secure your academic year.',
        price: '€350',
        priceDetail: '5-hour flexible intensive package',
        popular: false,
        badge: 'Academic Project • Blocus',
        duration: '5 intensive hours of 1:1 strategic coaching',
        format: 'Hybrid or in-person Brussels • Flexible scheduling',
        idealFor: 'Students within 4 to 6 weeks of exams or at risk of repeating the year.',
        deliverables: [
          'Day-by-day retro-planning through the last exam',
          'Active extraction study sheets built with the C.O.R.E. Method',
          'Targeted mock simulations of real exam questions and oral juries'
        ],
        expectedImpact: 'Better-targeted revision and calmer exams, up to the very last one.',
        features: [
          'Immediate creation of a realistic revision schedule',
          'Express synthesis of core concepts & drastic elimination of noise',
          'Direct implementation of the C.O.R.E. Method on university course materials',
          'Exam question drills and physiological stress regulation protocols',
          'Direct WhatsApp line with Simon Maistriau, reply within 24 hours'
        ],
        ctaText: 'Activate the Exam Pack'
      },
      {
        id: 'student-custom',
        name: 'Stress-Free & Autonomy Formula',
        target: 'students',
        tagline: 'Ongoing coaching to build a lifelong Second Brain and lasting autonomy.',
        price: 'From €60',
        priceDetail: 'Per coaching hour based on volume',
        badge: 'Academic Project • Autonomy',
        duration: 'Custom volume per semester or academic year',
        format: 'Regular bespoke weekly or bi-monthly follow-up',
        idealFor: 'Students preparing medical school, law, engineering, civil competitions or high-stake juries.',
        deliverables: [
          'Custom Notion workspace: "Student Second Brain"',
          'Learning logbook and spaced retention indicators',
          'Coaching until the student works independently'
        ],
        expectedImpact: 'Fewer all-nighters and lasting independence in study.',
        features: [
          'Customizable hours adapted to your exact academic milestones',
          'Deployment of the student\'s digital "Second Brain" (Notion & active notes)',
          'Regular logbook reviews and ongoing strategic recalibration',
          'Rigorous training for university exam sessions and jury defense',
          'Zero-dependence target: student never needs a tutor again'
        ],
        ctaText: 'Build My Program'
      }
    ]
  },
  simulator: {
    badge: 'INTERACTIVE SIMULATOR',
    title: 'Find the exact formula for your situation',
    subtitle: 'Answer 3 quick questions to estimate time savings, ROI, and receive your recommended action plan.',
    roleLabel: '1. Your Current Profile',
    roles: {
      pro: 'Freelancer / Business Executive',
      incubator: 'Aspiring Founder / Professional',
      student: 'Academic Project (Student / Parent)',
    },
    challengeLabel: '2. Your Primary Challenge',
    challenges: {
      pro: [
        { label: 'Drowning under manual operations and repetitive administration', value: 'overwhelmed' },
        { label: 'Losing time across disconnected or outdated software tools', value: 'bad_tools' },
        { label: 'Need executive operational leadership without full-time payroll', value: 'coo_needed' }
      ],
      incubator: [
        { label: 'Have a side-hustle idea but deterred by administrative hurdles', value: 'side_fear' },
        { label: 'Launching a full-time enterprise built on solid foundations', value: 'full_launch' }
      ],
      student: [
        { label: 'Upcoming university blocus or exams (stress / time crunch)', value: 'exam_stress' },
        { label: 'Inefficient study method despite long hours of revision', value: 'bad_method' },
        { label: 'Aiming for honors or competitive exams (medicine, law, engineering)', value: 'high_stakes' }
      ]
    },
    urgencyLabel: '3. Time Horizon & Desired Intensity',
    urgencies: {
      urgent: {
        title: 'Rapid action',
        desc: 'Targeted intervention (€125 / h)'
      },
      medium: {
        title: 'Diagnostic & Restructuring',
        desc: 'Deep-dive 2h audit (€250) and structured strategic roadmap'
      },
      deep: {
        title: 'Deep System Transformation',
        desc: 'Architecture Pack 15h or Fractional COO partnership'
      }
    },
    recommendedFormula: 'Recommended Formula for Your Situation:',
    estimatedGainLabel: 'Estimated Gain:',
    timeframeLabel: 'Cadence:',
    keyHighlightLabel: 'Why This Choice?',
    ctaButton: 'Select this formula and book',
  },
  comparisons: {
    badge: 'COMPARATIVE ANALYSIS',
    title: 'Why Cognitive Studio Is A Game Changer',
    subtitle: 'Two approaches compared, for professionals and for students.',
    tabPros: 'Professionals: Cognitive Studio vs traditional consulting',
    tabStudents: 'Academic Project: Cognitive Studio vs Traditional Tutoring',
    colAspect: 'Evaluated Metric',
    colTraditional: 'Traditional Approach',
    colCognitive: 'Cognitive Studio Approach',
    colAdvantage: 'Tangible Benefit',
    studentRows: [
      {
        aspect: 'Type of Intervention',
        traditional: 'Surface-level tutoring (putting out fires subject by subject)',
        cognitiveStudio: 'Holistic coaching (subject matter, method, cognition & autonomy)',
        advantage: 'Sustainable 360° perspective'
      },
      {
        aspect: 'Coach Profile',
        traditional: 'Tutor profile varies depending on the platform or agency',
        cognitiveStudio: 'A single point of contact, Simon Maistriau, who follows the student throughout',
        advantage: 'Personalised, consistent follow-up'
      },
      {
        aspect: 'Availability & Support',
        traditional: 'Strict session hours only, zero contact in-between sessions',
        cognitiveStudio: 'Direct WhatsApp line, reply within 24 hours',
        advantage: 'Reassuring continuous guidance'
      },
      {
        aspect: 'Materials & Tools',
        traditional: 'Generic pre-made study sheets forgotten 48h after the exam',
        cognitiveStudio: 'Zero-Support Method + Personal Second Brain database construction',
        advantage: 'Lifelong memory anchoring'
      },
      {
        aspect: 'Real Pricing',
        traditional: 'Variable hourly rate, often increased by agency fees',
        cognitiveStudio: 'From €60 / hour depending on volume, no intermediary',
        advantage: 'Clear pricing, no agency fees'
      }
    ],
    proRows: [
      {
        aspect: 'Pricing Transparency',
        traditional: 'Day-rate billing that is often hard to read',
        cognitiveStudio: '€125 / h and published fixed packages (€250 audit, deducted if you continue)',
        advantage: 'No surprises on the invoice'
      },
      {
        aspect: 'Retainer Model',
        traditional: 'Monthly retainers that are often expensive',
        cognitiveStudio: 'Fractional COO from €490 / month',
        advantage: 'Controlled budget'
      },
      {
        aspect: 'Contractual Flexibility',
        traditional: 'Rigid 6 to 12-month lock-in contracts with strict termination notice',
        cognitiveStudio: 'Agile customized terms with or without long-term commitment',
        advantage: 'Complete operational freedom'
      },
      {
        aspect: 'Technology & Stack',
        traditional: 'Tools that are often heavy and slow to deploy',
        cognitiveStudio: 'Current tools (Notion, n8n/Make, controlled AI, no black box)',
        advantage: 'Live deployment in days'
      },
      {
        aspect: 'Concrete Deliverables',
        traditional: 'Theoretical reports that can be hard to put into practice',
        cognitiveStudio: '100% Operational: live Notion spaces, active automations, immediate ROI',
        advantage: 'Measurable instant results'
      },
      {
        aspect: 'Client Support',
        traditional: 'Multiple contacts and ticket-based support',
        cognitiveStudio: 'Direct WhatsApp communication with the founder within 24 hours',
        advantage: 'Immediate human responsiveness'
      }
    ]
  },
  founder: {
    badge: 'THE FOUNDER',
    title: 'From academic research to operational efficiency',
    subtitle: '« My approach: combining academic rigor with practical, hands-on efficiency. »',
    roleTitle: 'Founder & Methodology Consultant',
    credentials: [
      'MA in Global Archaeology, Leiden University',
      'Bridging year towards a Master of Laws (ULB)',
      'Woluwe-Saint-Lambert, Brussels (Belgium)',
    ],
    bio1: "A graduate of Leiden University (MA in Global Archaeology, with a focus on the evolution of human cognition), Simon Maistriau founded Cognitive Studio to close the gap between academic theory and real-world effectiveness. He is now studying law at ULB, in the bridging year towards a Master of Laws (public and international law).",
    bio2: "Whether working with university students struggling with study methodology or entrepreneurs overwhelmed by administrative friction, his diagnostic is identical: stacking software tools without fundamental comprehension creates mental exhaustion and helplessness.",
    bio3: "Through the proprietary C.O.R.E. Method and the strict 'Zero-Support' doctrine, he helps his clients regain their autonomy: you grasp first principles, organize your systems, and execute with precision.",
    callToAction: 'Talk Directly with Simon Maistriau',
    consultantCreds: 'MA in Global Archaeology (Leiden University) • Bridging year, Master of Laws (ULB)',
  },
  testimonials: {
    badge: 'CLIENT REVIEWS',
    title: 'What Those Who Made The Shift Say',
    subtitle: 'A selection of reviews published on the Cognitive Studio Google profile.',
    filterAll: 'All Reviews',
    filterStudents: 'Students & Academics',
    filterPros: 'Professionals & Operations',
    verifiedGoogle: 'Reviews published on Google',
    items: [
      {
        name: 'Corporate & Business Client',
        role: 'Executive Direction & Corporate Partnership',
        type: 'Indépendant',
        quote: "The team at Cognitive Studio demonstrates excellent management and impeccable follow-up. Communication is fluid, efficient and transparent, making collaboration particularly smooth and enjoyable.\n\nI highly recommend their services to any professional seeking rigorous, high-quality support!",
        metric: 'Exemplary management & flawless follow-up for business leaders',
        rating: 5,
        source: 'Google Review',
        verified: true,
        date: 'Published on Google'
      },
      {
        name: 'Student Parent',
        role: 'Mentorship from 10th Grade to 1st Year University',
        type: 'Étudiant',
        quote: "The founder accompanied my son throughout his schooling from 10th grade all the way to his 1st year of university. He is a truly human, dependable, pedagogical and knowledgeable person. He knows exactly how to speak with teenagers/young adults, guide them and keep them motivated. Always kind, helpful and attentive. He helped my son across all subjects and we achieved our goals; I can never thank him enough.\n\nI recommend him 100% with complete confidence.",
        metric: 'Target goals achieved in every academic subject',
        rating: 5,
        source: 'Google Review',
        verified: true,
        date: 'Published on Google'
      },
      {
        name: 'University Student',
        role: 'Transition 12th Grade to 1st Year University',
        type: 'Étudiant',
        quote: "I had classes with him for two years, in 12th grade and then during my first year at university. He helped me tremendously, especially with methodology (where I had significant difficulties). Thanks to him, I learned how to work better, manage my stress and prepare for exams effectively. He pushed me to aim higher, which allowed me to enter university with much greater confidence and pass my entire first semester! He was a genuine pillar of support and was able to help in every subject, whether literature, languages or sciences.\n\nHighly dedicated, always available and truly attentive. I recommend without hesitation.",
        metric: 'Methodology mastery & entire 1st semester passed',
        rating: 5,
        source: 'Google Review',
        verified: true,
        date: 'Published on Google'
      },
      {
        name: 'High School Senior (Rhéto)',
        role: 'CESS Graduate (Final Year Secondary)',
        type: 'Étudiant',
        quote: 'The teacher helped me immensely. I took a similar pack at the end of high school. Having not studied much beforehand it was tricky, but he guided me and I passed without any re-sit exam. Thank you again!',
        metric: 'Direct pass without re-sit exam',
        rating: 5,
        source: 'Google Review',
        verified: true,
        date: 'Published on Google'
      }
    ]
  },
  faq: {
    badge: 'FREQUENTLY ASKED QUESTIONS',
    title: 'Answers to Your Questions',
    subtitle: 'Methodology, logistics, tax deductibility, and guarantees: everything you need to know before getting started.',
    filterAll: 'All Questions',
    filterStudents: 'Student Questions',
    filterPros: 'Professional Questions',
    items: [
      {
        category: 'students',
        question: 'Why do you refuse to provide pre-made revision summaries or flashcards?',
        answer: 'This is our core neuro-pedagogical doctrine and the key to our students\' success. Handing over a pre-digested summary produces an illusion of competence (cognitive ease), but the brain discards it within days. With our "Zero-Support" method, we guide students to deconstruct course architecture themselves, prioritize knowledge, and construct active syntheses. It requires deliberate effort initially, but it is the only scientifically validated path to enduring memory retention and genuine academic autonomy.'
      },
      {
        category: 'students',
        question: 'What is the real difference between Cognitive Studio and traditional private tutoring?',
        answer: 'Traditional tutoring acts like a temporary crutch: it puts out the immediate fire of tomorrow\'s homework on a subject-by-subject basis. Cognitive Studio offers systemic cognitive and methodological coaching: we train students how to learn, how to direct sustained focus, build realistic study schedules, regulate exam stress, and reason critically. Our crowning achievement is when students never need us again.'
      },
      {
        category: 'students',
        question: 'Should I choose an intensive pack (e.g., the Exam Pack) or a continuous formula?',
        answer: 'Packs are targeted tactical interventions: the Intensive Exam Pack (5h) is designed for emergency situations to secure an upcoming blocus or exam session by prioritizing high-coefficient subjects. Continuous formulas establish durable study systems across an entire semester or academic year. In practice, most students start with an Audit or the Exam Pack to resolve urgent challenges, then transition smoothly into a customized regular schedule.'
      },
      {
        category: 'students',
        question: 'My child has fallen behind and lost motivation. Can your approach work for them?',
        answer: 'Absolutely. Academic demotivation almost always stems from learned helplessness: the student exerts effort without seeing proportional marks, and disengages as an ego defense. By equipping them with concrete cognitive strategies that yield rapid initial breakthroughs, confidence and intrinsic motivation regenerate naturally. We guarantee our rigor and empathy, provided the student commits to active engagement.'
      },
      {
        category: 'pros',
        question: 'I am not tech-savvy: won’t tools like Notion, AI, and automations overwhelm me?',
        answer: 'Preventing overwhelm is precisely why we exist. Our founding principle is: "Tools must never precede thought." We do not build bloated software monuments. We craft ergonomic, clean ecosystems tailored to your actual daily habits. Every tool is delivered with step-by-step training and simplified standard operating procedures. You save hours within the first week without ever having to write a line of code.'
      },
      {
        category: 'pros',
        question: 'Why is the Flash Audit (€250) billed upfront before ongoing consulting?',
        answer: 'We never reorganise anything without a prior diagnosis. The Flash Audit is a 2-hour analytical immersion where we dissect your actual workflows to produce an uncompromising roadmap. To reward your decision to take action, this €250 fee is fully deducted from your first invoice when upgrading to the Architecture Pack or Fractional COO retainer.'
      },
      {
        category: 'pros',
        question: 'How much time commitment is required from my side during the engagement?',
        answer: 'Our commitment is to save you valuable time, not drain it. During the first month of setup and architectural calibration, we request 1 to 2 hours of strategic consultation per week. Subsequently, under our recurring retainer, we operate quietly in the background maintaining and optimizing your systems while you focus exclusively on clients and core expertise.'
      },
      {
        category: 'pros',
        question: 'How do you differ from a traditional agency or corporate consultancy?',
        answer: 'Many consulting engagements end with a report that you then have to implement yourself. At Cognitive Studio, we work hands-on: we get into your workflows, build your custom Notion databases, configure your automation pipelines, and remain directly accessible on WhatsApp to clear roadblocks immediately.'
      }
    ]
  },
  contact: {
    badge: 'DIRECT CONTACT',
    title: 'Let’s Discuss Your Objectives',
    subtitle: 'Have a question about a package? Need an urgent audit before your upcoming exams or project launch? Reply from the founder within 24 hours.',
    form: {
      name: 'Full Name *',
      phone: 'Phone Number *',
      email: 'Email Address *',
      role: 'You are:',
      roleOptions: {
        student: 'Student',
        parent: 'Parent of Student',
        pro: 'Freelancer / Business Executive',
        project: 'Project Founder / Entrepreneur',
      },
      formula: 'Requested package or specific need',
      formulaPlaceholder: 'Flash Audit (€250), Exam Pack (€350), Incubator...',
      message: 'Description of your project or academic situation *',
      messagePlaceholder: 'Please specify your institution or trade, upcoming deadlines, and observed bottlenecks...',
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
      zonesTitle: 'In-Person Coverage (Brussels):',
      zonesDesc: 'Woluwe-Saint-Lambert, Woluwe-Saint-Pierre, Etterbeek, Ixelles, Uccle, Auderghem. In-person sessions at the office, at home, or via secure HD video calls.',
      addressTitle: 'Office Address:',
    },
  },
  footer: {
    brandDesc: 'Consulting Practice in Cognitive Strategy, Organization & Methodology. Freelancer Incubator in Brussels. An approach grounded in academic rigor, to help you gain autonomy.',
    legalNote: 'Sole proprietorship • Compliant with the Belgian Code of Economic Law.',
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

