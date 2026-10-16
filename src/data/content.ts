import { ServiceTier, CorePillar, FaqItem, ComparisonRow, TestimonialItem } from '../types';

export const COMPANY_INFO = {
  name: 'Cognitive Studio',
  legalName: 'Cognitive-Studio (Entreprise Individuelle)',
  founder: 'Simon Maistriau',
  founderTitle: 'Fondateur & Consultant en Ingénierie Pédagogique et Stratégie Cognitive',
  founderCredentials: 'Master en Global Archaeology (Université de Leiden), orienté cognition et évolution humaine • Année passerelle vers le Master en droit (ULB)',
  bce: '1034.236.665',
  address: 'Avenue Heydenberg n°39, 1200 Woluwe-Saint-Lambert, Bruxelles, Belgique',
  phone: '+32 472 23 06 14',
  phoneRaw: '+32472230614',
  whatsappUrl: 'https://wa.me/32472230614?text=Bonjour%20Simon,%20je%20souhaite%20un%20renseignement%20sur%20Cognitive%20Studio',
  email: 'info@cognitive-studio.be',
  personalEmail: 'Maistriau.Simon@gmail.com',
  city: 'Bruxelles (Woluwe-Saint-Lambert), Belgique',
  zones: ['Woluwe-Saint-Lambert', 'Woluwe-Saint-Pierre', 'Etterbeek', 'Ixelles', 'Uccle', 'Auderghem', 'En distanciel mondial'],
  googleReviewsUrl: 'https://maps.google.com/?q=Avenue+Heydenberg+39+1200+Woluwe-Saint-Lambert',
  googleRating: 4.8,
  googleReviewCount: 6,
  hourlyRatePro: '125 €',
  // Lien vers une page de réservation en ligne (ex. Google Agenda). Vide = les boutons « Réserver » mènent au formulaire de contact.
  bookingUrl: 'https://calendar.app.google/cH4wxPYQGEBx1XRU8',
  hours: [
    { days: 'Lundi au vendredi', time: '9h – 18h' },
    { days: 'Samedi & dimanche', time: 'Urgences uniquement' },
  ],
  socials: {
    linkedin: 'https://linkedin.com/company/cogntive-studio/',
    instagram: 'https://instagram.com/cognitivestudio.be/',
  }
};

export const CORE_PILLARS: CorePillar[] = [
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
];

export const SERVICE_TIERS: ServiceTier[] = [
  // 1. PÔLE PRINCIPAL : INDÉPENDANTS & PROFESSIONNELS
  {
    id: 'pro-hourly',
    name: 'Consultance & Coaching Opérationnel',
    target: 'pros',
    tagline: 'Séance de travail à la carte pour débloquer un point critique, auditer vos outils ou restructurer un processus.',
    price: '125 €',
    priceDetail: 'Par heure d’intervention • Déductible au titre de frais professionnels',
    badge: 'Tarif Horaire de Référence',
    duration: 'À la carte (à partir d’1 heure)',
    format: 'En présentiel à Bruxelles ou en visio interactive',
    idealFor: 'Professions libérales, indépendants, dirigeants et cadres nécessitant un avis d’expert immédiat.',
    deliverables: [
      'Analyse et diagnostic en temps réel du problème opérationnel',
      'Solutions concrètes déployées directement durant la session',
      'Compte-rendu d’action et recommandations écrites sous 24h'
    ],
    expectedImpact: 'Déblocage immédiat et gains d’efficience mesurables dès la fin de l’heure.',
    features: [
      'Tarif de référence transparent : 125 € / heure',
      'Sans engagement de volume : réservez selon vos stricts besoins',
      'Travail direct sur vos flux, outils réels et processus (Méthode Zéro Support)',
      'Déductible au titre de frais professionnels, selon votre situation fiscale'
    ],
    ctaText: 'Réserver une séance pro'
  },
  {
    id: 'pro-audit',
    name: 'Audit Flash Opérations (2h)',
    target: 'pros',
    tagline: 'Deux heures d’analyse pour repérer vos pertes de temps, d’énergie et de rentabilité.',
    price: '250 €',
    priceDetail: 'Forfait 2h (2 × 125 €) • Déduit si vous poursuivez',
    badge: 'Déduit de la suite',
    highlightNote: 'Montant intégralement déduit si vous poursuivez avec le Pack Architecture ou la formule COO partagé',
    duration: '2h d’immersion analytique directe',
    format: 'En immersion dans vos bureaux à Bruxelles ou en visio',
    idealFor: 'Indépendants, professions libérales et dirigeants débordés par l’opérationnel.',
    deliverables: [
      'Cartographie visuelle complète de vos flux opérationnels',
      'Rapport d’audit clair, sans jargon théorique',
      'Feuille de route des 5 Quick Wins à déployer sous 48h'
    ],
    expectedImpact: 'Identification immédiate d’au moins 10 à 15 heures gaspillées par mois.',
    features: [
      '2h d’observation minutieuse de vos flux de travail et outils quotidiens (base 125 € / h)',
      'Rapport d’audit clair, sans jargon théorique',
      'Cartographie exacte des goulets d’étranglement administratifs',
      'Liste de Quick Wins (gains rapides) applicables sous 48 heures',
      'Objectif : identifier au moins 10 h perdues par mois'
    ],
    ctaText: 'Commander mon audit pro'
  },
  {
    id: 'pro-focus',
    name: 'Focus Process Coup de Poing (6h)',
    target: 'pros',
    tagline: 'Intervention intensive de 6 h pour débloquer un défi opérationnel ou commercial critique.',
    price: '750 €',
    priceDetail: 'Forfait 6 heures (6 × 125 €) modulables',
    badge: 'Action Rapide',
    duration: '6 heures d’intervention experte modulable',
    format: 'Sessions de 1h30 à 3h selon vos priorités',
    idealFor: 'Professionnels avec une échéance client critique ou un système bloquant.',
    deliverables: [
      'Restructuration d’un processus clé (onboarding client, proposition, etc.)',
      'Méthode « Zéro Support » : travail en direct sur vos livrables réels',
      'Support WhatsApp réactif pour débloquer les micro-décisions'
    ],
    expectedImpact: 'Déblocage immédiat d’un projet et suppression de la friction opérationnelle.',
    features: [
      '6 heures d’accompagnement à 125 € / h, planifiées selon vos urgences',
      'Idéal pour structurer un pitch décisif ou restructurer un dossier client',
      'Méthode « Zéro Support » : travail en direct sur vos livrables réels',
      'Flexibilité maximale dans la planification de vos créneaux',
      'Support réactif WhatsApp pour débloquer les micro-décisions'
    ],
    ctaText: 'Débloquer mon projet'
  },
  {
    id: 'pro-architecture',
    name: 'Pack Architecture & Second Cerveau (15h)',
    target: 'pros',
    tagline: 'Refonte globale de vos systèmes et installation complète de votre Second Cerveau digital.',
    price: '1 500 €',
    priceDetail: 'Forfait 15h clés en main (375 € de remise par rapport au tarif horaire)',
    popular: true,
    badge: 'Transformation Système Complète',
    duration: '15 heures d’accompagnement sur 6 à 8 semaines',
    format: 'Ateliers de co-construction + déploiement technique direct',
    idealFor: 'Cabinets, indépendants et TPE voulant doubler leur capacité sans recruter.',
    deliverables: [
      'Architecture Notion / Second Cerveau livrée clé en main',
      'Automatisations sans code intégrées (Make / Zapier / CRM)',
      'Documentation opératoire et formation vidéo de vos équipes'
    ],
    expectedImpact: 'Gain net de 1 à 2 jours par semaine pour vous concentrer sur la haute valeur.',
    features: [
      'Tout le contenu du pack Focus Process inclus',
      'Installation technique de votre Second Cerveau digital de A à Z',
      'Intégration d’outils modernes : Notion, CRM sur-mesure, Automatisations',
      'Intelligence Artificielle paramétrée pour vos besoins sans boîte noire',
      'Formation complète de vous et/ou vos collaborateurs',
      'Idéal pour reconversion, création de cabinet ou passage à l’échelle'
    ],
    ctaText: 'Choisir le Pack Architecture'
  },
  {
    id: 'pro-retainer',
    name: 'Directeur des Opérations Partagé (COO)',
    target: 'pros',
    tagline: 'Votre COO externalisé pour piloter vos systèmes, optimiser vos flux et pérenniser votre temps.',
    price: 'Dès 490 €',
    priceDetail: 'Par mois • Formule sans engagement rigide',
    badge: 'Pilotage à temps partagé',
    duration: 'Abonnement mensuel agile et résiliable',
    format: 'Gouvernance mensuelle + support continu asynchrone',
    idealFor: 'Entreprises établies nécessitant un pilotage rigoureux sans embaucher un cadre à temps plein.',
    deliverables: [
      'Revue stratégique mensuelle et optimisation continue des systèmes',
      'Maintenance préventive des automatisations et flux de données',
      'Canal WhatsApp prioritaire, réponse en moins de 12 h'
    ],
    expectedImpact: 'Tranquillité d’esprit totale : votre machine opérationnelle tourne sans vous.',
    features: [
      'Maintenance, évolution et veille de tout votre écosystème digital',
      'Gestion en arrière-plan des automatisations et de la conformité',
      'Réunions stratégiques mensuelles de cadrage et d’arbitrage',
      'Ligne directe WhatsApp prioritaire (réponse < 12 h)',
      'Une alternative plus légère qu’un recrutement à temps plein'
    ],
    ctaText: 'Déléguer mes Opérations'
  },

  // 2. INCUBATEUR D’INDÉPENDANTS
  {
    id: 'incubator-side',
    name: 'Essor Complémentaire (Side-Hustle)',
    target: 'incubator',
    tagline: 'Passez de l’idée au premier client rentable sans mettre en danger votre situation actuelle.',
    price: '2 500 €',
    priceDetail: 'Paiement possible en 5 × 500 €',
    badge: 'Programme Clé en Main',
    popular: true,
    duration: 'Programme structuré de 3 mois',
    format: 'Accompagnement individuel + suivi d’exécution',
    idealFor: 'Salariés ou diplômés désireux de créer leur activité d’indépendant en sécurité.',
    deliverables: [
      'Offre et Produit Minimum Viable (MVP) testés sur le marché',
      'Kit administratif & fiscal complet (statut indépendant Belgique, BCE, TVA)',
      'Stack opérationnelle complète : CRM, facturation, Second Cerveau'
    ],
    expectedImpact: 'Génération de vos premiers revenus dès le 2e mois avec des bases saines.',
    features: [
      'Diagnostic Side-Hustle (1h30) : ciblage du levier de croissance le plus rapide',
      'Conception du Produit Minimum Viable (3h) pour tester le marché immédiatement',
      'Installation du système complet (6h) : Second Cerveau, CRM, facturation',
      'Accompagnement administratif complet : inscription BCE, compte pro belge',
      'Formation comptable pratique et gestion de la fiscalité d’indépendant',
      'Architecture "Zéro Support" : démarrage automatisé dès le 1er euro généré'
    ],
    ctaText: 'Postuler à l’Incubateur'
  },
  {
    id: 'incubator-full',
    name: 'Lancement Projet Principal',
    target: 'incubator',
    tagline: 'Bâtissez une entreprise solide, scalable et rentable dès sa création, avec un mentorat suivi.',
    price: 'Sur Devis',
    priceDetail: 'Accompagnement intensif de 3 à 6 mois',
    badge: 'Haute Envergure',
    duration: 'Mentorat intensif de 3 à 6 mois',
    format: 'Coaching stratégique hebdomadaire + immersion totale',
    idealFor: 'Créateurs visant une entreprise à plein temps nécessitant une architecture sans faille.',
    deliverables: [
      'Modèle économique et stratégie de tarification haute valeur',
      'Écosystème digital et automatisations sur mesure',
      'Accès privilégié au carnet d’adresses et partenaires de Cognitive Studio'
    ],
    expectedImpact: 'Lancement sécurisé avec une structure pérenne et une rentabilité accélérée.',
    features: [
      'Étude de marché concurrentielle et positionnement haute valeur',
      'Définition précise du business model et de la stratégie d’acquisition',
      'Système complet d’opérations et d’automatisation dès le jour 1',
      'Coaching mental de l’entrepreneur : résilience et clarté cognitive',
      'Accès privilégié au réseau d’experts et partenaires de Cognitive Studio'
    ],
    ctaText: 'Étudier mon Lancement'
  },

  // 3. PROJET ACADÉMIQUE & SOUTIEN MÉTHODOLOGIQUE (Projet Mineur / Engagement Sociétal)
  {
    id: 'student-audit',
    name: 'Audit Méthodologique (Projet Académique)',
    target: 'students',
    tagline: 'Intervention analytique pour déconstruire les blocages scolaires et restaurer l’efficience d’apprentissage.',
    price: '90 €',
    priceDetail: 'Session unique de 1h30 (Bruxelles ou visio)',
    badge: 'Projet Académique',
    duration: '1h30 d’analyse en direct',
    format: 'En présentiel à Bruxelles ou en visio HD',
    idealFor: 'Étudiants en perte d’efficacité, stressés ou bloqués dans leur méthode de travail.',
    deliverables: [
      'Diagnostic personnalisé de la méthode de travail, des forces et des blocages',
      'Plan d’action stratégique écrit remis sous 24h',
      'Feuille de route concrète applicable dès la session suivante'
    ],
    expectedImpact: 'Fin des révisions passives & clarté immédiate sur les priorités d’examens.',
    features: [
      'Diagnostic approfondi du profil d’apprentissage et de la charge mentale',
      'Cartographie précise des causes de sous-performance ou de dispersion',
      'Analyse critique des supports de cours réels et élimination des pièges',
      'Plan d’action stratégique immédiat remis dès la fin de la séance',
      'Montant déduit si vous poursuivez avec le Pack Examens'
    ],
    ctaText: 'Réserver l’Audit Étudiant'
  },
  {
    id: 'student-commando',
    name: 'Pack Intensif Examens (Projet Académique)',
    target: 'students',
    tagline: 'Plan d’urgence intensif avant examens pour redresser la situation et valider l’année.',
    price: '350 €',
    priceDetail: 'Forfait 5 heures intensives modulables',
    popular: false,
    badge: 'Projet Académique',
    duration: '5 heures intensives d’accompagnement 1:1',
    format: 'Hybride ou présentiel Bruxelles • Planning flexible',
    idealFor: 'Étudiants à moins de 4 à 6 semaines des examens ou en risque de redoublement.',
    deliverables: [
      'Rétro-planning jour par jour jusqu’au dernier examen',
      'Fiches actives d’extraction de cours avec la Méthode C.O.R.E.',
      'Simulations ciblées de questions de jurys et d’examens réels'
    ],
    expectedImpact: 'Des révisions mieux ciblées et un stress mieux maîtrisé jusqu’au dernier examen.',
    features: [
      'Création immédiate d’un rétro-planning réaliste',
      'Synthèse express des notions clés & élimination drastique du superflu',
      'Implémentation directe de la Méthode C.O.R.E. sur vos cours universitaires',
      'Entraînement aux questions d’examen et régulation physiologique du stress',
      'Ligne directe WhatsApp avec Simon Maistriau, réponse sous 24 h'
    ],
    ctaText: 'Activer le Pack Examens'
  },
  {
    id: 'student-custom',
    name: 'Formule Sans Stress & Autonomie',
    target: 'students',
    tagline: 'Accompagnement continu pour bâtir un Second Cerveau et une autonomie à vie.',
    price: 'Dès 60 €',
    priceDetail: 'Par heure d’accompagnement selon volume',
    badge: 'Projet Académique',
    duration: 'Volume modulable au semestre ou à l’année',
    format: 'Suivi régulier sur-mesure hebdomadaire ou bimensuel',
    idealFor: 'Étudiants préparant médecine, droit, ingénierie, jurys ou concours d’excellence.',
    deliverables: [
      'Workspace Notion sur-mesure "Second Cerveau Étudiant"',
      'Carnet de bord d’apprentissage et indicateurs de rétention',
      'Accompagnement jusqu’à une méthode de travail autonome'
    ],
    expectedImpact: 'Moins de nuits blanches et une autonomie durable dans le travail.',
    features: [
      'Volume d’heures modulable selon vos objectifs académiques précis',
      'Construction du "Second Cerveau" de l’étudiant (Notion / fiches actives)',
      'Suivi régulier du carnet de bord et débriefing stratégique régulier',
      'Préparation poussée aux sessions d’examens universitaires et jurys',
      'Objectif zéro dépendance : l’étudiant n’a plus besoin de tuteur'
    ],
    ctaText: 'Construire ma Formule'
  }
];

export const STUDENT_COMPARISON: ComparisonRow[] = [
  {
    aspect: 'Type d’intervention',
    traditional: 'Soutien scolaire de rattrapage (éteindre l’incendie matière par matière)',
    cognitiveStudio: 'Coaching global (matière, méthode, cognition & autonomie)',
    advantage: 'Vision à 360° durable'
  },
  {
    aspect: 'Profil de l’intervenant',
    traditional: 'Intervenant au profil variable selon la plateforme ou l’agence',
    cognitiveStudio: 'Un interlocuteur unique, Simon Maistriau, qui suit l’élève de bout en bout',
    advantage: 'Suivi personnalisé et cohérent'
  },
  {
    aspect: 'Disponibilité & Réactivité',
    traditional: 'Pendant les heures de cours strictes uniquement, aucun contact entre-temps',
    cognitiveStudio: 'Ligne directe WhatsApp, réponse sous 24 h',
    advantage: 'Accompagnement continu rassurant'
  },
  {
    aspect: 'Supports & Outils fournis',
    traditional: 'Fiches toutes faites génériques oubliées 48h après l’examen',
    cognitiveStudio: 'Méthode Zéro Support + Construction de la base de données personnelle (Second Cerveau)',
    advantage: 'Ancrage mémoriel définitif'
  },
  {
    aspect: 'Tarif réel',
    traditional: 'Tarif horaire variable, souvent majoré par des frais d’agence',
    cognitiveStudio: 'Dès 60 € / heure selon le volume, sans intermédiaire',
    advantage: 'Tarif clair, sans frais d’agence'
  }
];

export const PRO_COMPARISON: ComparisonRow[] = [
  {
    aspect: 'Transparence des tarifs',
    traditional: 'Facturation à la journée, souvent peu lisible',
    cognitiveStudio: '125 € / h et forfaits fixes affichés (audit de 250 €, déduit si vous poursuivez)',
    advantage: 'Aucune surprise sur la facture'
  },
  {
    aspect: 'Modèle d’abonnement',
    traditional: 'Abonnements mensuels souvent élevés',
    cognitiveStudio: 'Directeur des opérations partagé dès 490 € / mois',
    advantage: 'Budget maîtrisé'
  },
  {
    aspect: 'Flexibilité d’engagement',
    traditional: 'Contrats rigides verrouillés sur 6 à 12 mois fermes avec préavis lourd',
    cognitiveStudio: 'À l’heure (125 €) ou par forfait, sans engagement de durée',
    advantage: 'Totale liberté de pilotage'
  },
  {
    aspect: 'Technologie & Outils',
    traditional: 'Outils souvent lourds et longs à mettre en place',
    cognitiveStudio: 'Outils actuels (Notion, n8n/Make, IA maîtrisée, sans boîte noire)',
    advantage: 'Mise en production en quelques jours'
  },
  {
    aspect: 'Livrables concrets',
    traditional: 'Rapports théoriques parfois difficiles à mettre en œuvre',
    cognitiveStudio: '100% Opérationnel : templates Notion, automatisations actives, gains directs',
    advantage: 'Résultats mesurables immédiats'
  },
  {
    aspect: 'Support client',
    traditional: 'Interlocuteurs multiples et support par tickets',
    cognitiveStudio: 'Ligne directe WhatsApp avec le fondateur sous 24h',
    advantage: 'Réactivité humaine immédiate'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'pros',
    question: 'Pourquoi votre tarif horaire est-il fixé à 125 € et comment est-il rentabilisé ?',
    answer: 'Notre tarif horaire de 125 € couvre une expertise qui combine méthodologie, organisation des processus et déploiement no-code (Notion, IA, flux automatisés). Pour un professionnel, ce montant est en principe déductible au titre de frais professionnels, selon sa situation fiscale. L’objectif de chaque accompagnement est de vous faire gagner 10 à 15 heures par mois, ce qui rentabilise rapidement l’investissement.'
  },
  {
    category: 'pros',
    question: 'Je ne suis pas technophile : vos outils (Notion, IA, automatisations) ne risquent-ils pas de me dépasser ?',
    answer: 'C’est précisément le piège que nous évitons. Notre principe fondateur est : "L’outil ne doit jamais précéder la pensée". Nous n’empilons pas d’usines à gaz logicielles. Nous créons un écosystème sur-mesure, ergonomique et épuré, centré sur vos gestes métier réels. Aucun outil n’est livré sans sa formation pas-à-pas et son protocole d’utilisation simplifié. Vous gagnez du temps dès la première semaine sans jamais devoir devenir ingénieur.'
  },
  {
    category: 'pros',
    question: 'Pourquoi l’Audit Flash (250 €) est-il payant avant un accompagnement de fond ?',
    answer: 'On ne réorganise rien sans diagnostic préalable. L’Audit Flash est une immersion de 2 h (2 × 125 €) pendant laquelle nous analysons vos flux réels pour établir un diagnostic honnête. Si vous poursuivez avec le Pack Architecture ou la formule Directeur des opérations partagé, ces 250 € sont intégralement déduits de votre première facture.'
  },
  {
    category: 'pros',
    question: 'Quel est l’investissement de temps requis de mon côté lors de l’accompagnement ?',
    answer: 'Notre promesse est de vous faire gagner du temps précieux, pas d’en siphonner. Durant le premier mois de cadrage et d’installation technique, nous sollicitons 1 à 2 heures de concertation par semaine. Ensuite, dans le cadre de notre suivi mensuel, nous opérons silencieusement en arrière-plan pour maintenir, optimiser et fluidifier vos opérations pendant que vous vous concentrez sur vos clients et votre expertise.'
  },
  {
    category: 'pros',
    question: 'Quelle est la différence avec une agence ou un grand cabinet de conseil ?',
    answer: 'Beaucoup de missions de conseil se concluent par un rapport, à charge pour vous de le mettre en œuvre. Chez Cognitive Studio, nous travaillons sur le terrain : nous mettons les mains dans vos processus, configurons vos bases Notion, créons vos passerelles d’automatisation et restons joignables en direct via WhatsApp pour lever immédiatement chaque blocage.'
  },
  {
    category: 'students',
    question: 'En quoi consiste le Projet Académique & Soutien Méthodologique de Cognitive Studio ?',
    answer: 'C’est notre projet pédagogique et sociétal : transmettre aux élèves du secondaire supérieur, rhétos et étudiants universitaires la même rigueur méthodologique et d’organisation que celle que nous appliquons aux entreprises. Nous refusons les béquilles artificielles pour forcer l’autonomie mémorielle et intellectuelle.'
  },
  {
    category: 'students',
    question: 'Pourquoi ne fournissez-vous aucune fiche de révision toute faite ?',
    answer: 'C’est notre parti pris neuro-pédagogique le plus fort et la clé de notre réussite. Donner une fiche déjà digérée procure à l’étudiant l’illusion de la compréhension (effet d’aisance cognitive), mais son cerveau l’oublie quelques jours après. Avec notre méthode « Zéro Support », nous forçons l’étudiant à décomposer lui-même la structure, à hiérarchiser l’information et à créer ses propres synthèses actives.'
  },
  {
    category: 'students',
    question: 'Quelle est la réelle différence avec du soutien scolaire classique ?',
    answer: 'Le soutien scolaire traditionnel agit comme une béquille temporaire matière par matière. Notre projet académique enseigne comment apprendre, comment gérer son attention, structurer son rétro-planning, dompter le stress et raisonner scientifiquement.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Client Professionnel',
    role: 'Direction & Collaboration Entreprise',
    type: 'Indépendant',
    quote: "L'équipe de Cognitive Studio fait preuve d'une excellente gestion et d'un suivi irréprochable. La communication est fluide, efficace et transparente, ce qui rend la collaboration particulièrement fluide et agréable.\n\nJe recommande vivement leurs services à tout professionnel recherchant un accompagnement rigoureux et de qualité !",
    metric: 'Gestion & suivi irréprochable pour professionnels',
    rating: 5,
    source: 'Avis Google',
    verified: true,
    date: 'Avis publié sur Google'
  },
  {
    name: 'Parent d’Élève',
    role: 'Accompagnement de la 4ème secondaire à Bac 1 Université',
    type: 'Étudiant',
    quote: "Le fondateur a accompagné mon fils dans sa scolarité depuis la 4ème secondaire jusqu'à sa 1ère année d'université. C'est une personne très humaine, fiable, pédagogue et instruit. Il sait parfaitement comment parler aux ados/jeunes, les orienter et les motiver. Toujours gentil, serviable et à l'écoute. Il a aidé mon fils dans toutes les matières et nous avons atteint nos objectifs, je ne le remercierai jamais assez.\n\nJe le recommande vivement à 100%.",
    metric: 'Objectifs atteints dans toutes les matières',
    rating: 5,
    source: 'Avis Google',
    verified: true,
    date: 'Avis publié sur Google'
  },
  {
    name: 'Étudiant Universitaire',
    role: 'Transition 6ème secondaire vers 1ère Université',
    type: 'Étudiant',
    quote: "J’ai eu cours avec lui pendant deux ans, en sixième secondaire puis en première année à l’université. Il m’a énormément aidé, surtout au niveau de la méthodologie (où j’avais énormément de difficultés). Grâce à lui j’ai appris à mieux travailler, à gérer mon stress et à préparer mes examens efficacement. Il m’a poussé à viser plus haut, ce qui m’a permis d’aborder l’université avec beaucoup plus de confiance et de réussir tout mon premier quadrimestre! Il a été un réel soutien et a pu m’aider qu’importe la matière que ce soit en littérature, langues ou sciences.\n\nC’est quelqu’un de très investi, toujours disponible et vraiment à l’écoute. Je recommande sans hésiter",
    metric: 'Méthodologie & 1er quadrimestre validé',
    rating: 5,
    source: 'Avis Google',
    verified: true,
    date: 'Avis publié sur Google'
  },
  {
    name: 'Élève en Rhéto',
    role: 'Diplômé du CESS (Fin de secondaire)',
    type: 'Étudiant',
    quote: 'Le professeur m’a beaucoup aidé. J’ai pris un pack similaire en fin de retho. N’ayant pas beaucoup étudié en amont c’était délicat mais il m’a suivit et je suis passé sans examen de passage. Encore merci !',
    metric: 'Réussite directe sans examen de passage',
    rating: 5,
    source: 'Avis Google',
    verified: true,
    date: 'Avis publié sur Google'
  }
];
