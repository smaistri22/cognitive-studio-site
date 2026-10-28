import { ServiceTier, ServiceOption, CorePillar, FaqItem, ComparisonRow, TestimonialItem, ReferenceItem } from '../types';

export const COMPANY_INFO = {
  name: 'Cognitive Studio',
  legalName: 'Cognitive-Studio (Entreprise Individuelle)',
  founder: 'Simon Maistriau',
  founderTitle: 'Fondateur & Consultant en organisation numérique des cabinets',
  founderCredentials: 'Master en Global Archaeology (Université de Leiden), orienté cognition et évolution humaine • Année passerelle vers le Master en droit (ULB)',
  bce: '1034.236.665',
  address: 'Avenue Heydenberg n°39, 1200 Woluwe-Saint-Lambert, Bruxelles, Belgique',
  phone: '+32 472 23 06 14',
  phoneRaw: '+32472230614',
  whatsappUrl: 'https://wa.me/32472230614?text=Bonjour%20Simon,%20je%20souhaite%20un%20renseignement%20sur%20Cognitive%20Studio',
  email: 'info@cognitive-studio.be',
  personalEmail: 'Maistriau.Simon@gmail.com',
  city: 'Bruxelles (Woluwe-Saint-Lambert), Belgique',
  zones: ['Woluwe-Saint-Lambert', 'Woluwe-Saint-Pierre', 'Etterbeek', 'Ixelles', 'Uccle', 'Auderghem', 'En distanciel'],
  googleReviewsUrl: 'https://maps.google.com/?q=Avenue+Heydenberg+39+1200+Woluwe-Saint-Lambert',
  googleRating: 4.8,
  googleReviewCount: 6,
  hourlyRatePro: '100 €',
  // Mention TVA (régime de franchise des petites entreprises)
  vatNote: 'Prix nets • TVA non applicable (régime de franchise)',
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
    subtitle: 'Diagnostiquer avant de toucher à quoi que ce soit',
    description: 'Nous observons comment votre cabinet travaille réellement : outils, fichiers, facturation, échanges avec les clients. On ne réorganise rien sans avoir compris où se perd le temps et où se trouvent les risques.',
    businessApplication: 'Diagnostic de 2 h (offert si vous poursuivez) : cartographie de vos flux, des ressaisies inutiles et des failles d’accès, avec une proposition chiffrée.',
    iconName: 'Brain'
  },
  {
    letter: 'O',
    word: 'Organiser',
    subtitle: 'Une place pour chaque information',
    description: 'Une structure claire réduit la charge mentale. Chaque donnée — un client, un dossier, une prestation — est encodée une seule fois, au bon endroit, selon des règles simples que toute l’équipe comprend.',
    businessApplication: 'Arborescence des dossiers, fichier maître clients et dossiers, règles de nommage, Drive et agenda professionnels.',
    iconName: 'FolderTree'
  },
  {
    letter: 'R',
    word: 'Restructurer',
    subtitle: 'Relier, automatiser, sécuriser',
    description: 'L’outil ne doit jamais précéder la pensée. Une fois la structure posée, nous relions vos fichiers, automatisons les tâches répétitives et sécurisons les accès — sans boîte noire.',
    businessApplication: 'Fichiers Excel ou Google Sheets interconnectés, facturation automatisée, double authentification, sauvegardes et conformité RGPD.',
    iconName: 'Cpu'
  },
  {
    letter: 'E',
    word: 'Exécuter',
    subtitle: 'Livrer, former, rendre autonome',
    description: 'Tout accompagnement se termine par des outils qui fonctionnent, une documentation claire et une équipe qui sait s’en servir. Tout ce qui est livré vous appartient.',
    businessApplication: 'Mise en ligne, prise en main, documentation écrite, puis suivi mensuel si vous le souhaitez.',
    iconName: 'Zap'
  }
];

const BOOKING_NOTE = 'Diagnostic offert si vous poursuivez';

export const SERVICE_TIERS: ServiceTier[] = [
  // ───────────── FORMULES CLÉ EN MAIN ─────────────
  {
    id: 'pack-demarrage',
    name: 'Démarrage Pro',
    target: 'formules',
    tagline: 'Pour l’avocat ou le professionnel qui s’installe : présence en ligne, adresse pro et premier outil de gestion.',
    price: '1 690 €',
    priceDetail: 'au lieu de 1 930 €',
    badge: 'Installation',
    duration: 'Environ 3 semaines',
    format: 'Bruxelles ou à distance',
    idealFor: 'Avocats et professionnels libéraux qui démarrent ou s’installent à leur compte.',
    deliverables: [
      'Site Essentiel (1 page, mobile, nom de domaine)',
      'Bureau numérique : e-mail pro, Drive et agenda',
      'Un fichier intelligent (Excel ou Google Sheets)'
    ],
    expectedImpact: 'Un cabinet visible et organisé dès le premier client.',
    features: [
      'Diagnostic de 2 h offert',
      'Site Essentiel : présentation, domaines d’intervention, contact, mentions légales',
      'Adresse e-mail sur votre nom de domaine, Google Workspace ou Microsoft 365',
      'Drive organisé, agenda et page de réservation en ligne',
      'Fichier intelligent au choix : suivi des dossiers, des délais ou des clients',
      '3 mois de Maintenance Site offerts'
    ],
    highlightNote: BOOKING_NOTE,
    ctaText: 'Choisir Démarrage Pro'
  },
  {
    id: 'pack-gestion',
    name: 'Gestion & Pilotage',
    target: 'formules',
    tagline: 'Du temps presté à la facture, sans ressaisie, avec un tableau de bord et des accès sécurisés.',
    price: '1 550 €',
    priceDetail: 'au lieu de 1 770 €',
    badge: 'Facturation',
    duration: 'Environ 3 à 4 semaines',
    format: 'Bruxelles ou à distance',
    idealFor: 'Cabinets qui ont déjà un site mais perdent du temps sur la facturation et le suivi des honoraires.',
    deliverables: [
      'Circuit de facturation automatisé',
      'Tableau de bord des honoraires et impayés',
      'Bilan sécurité & RGPD'
    ],
    expectedImpact: 'Plusieurs heures de facturation récupérées chaque mois, moins d’impayés oubliés.',
    features: [
      'Diagnostic de 2 h offert',
      'Feuille de temps, relevé des prestations et facture PDF générés automatiquement',
      'Tableau de bord : honoraires par client, encaissements, impayés',
      'Double authentification, gestionnaire de mots de passe, sauvegardes',
      'Modèle de registre des traitements RGPD',
      'Formation et documentation'
    ],
    highlightNote: BOOKING_NOTE,
    ctaText: 'Choisir Gestion & Pilotage'
  },
  {
    id: 'pack-cabinet',
    name: 'Cabinet clé en main',
    target: 'formules',
    tagline: 'Notre formule de référence : site, bureau numérique, facturation automatisée et sécurité.',
    price: '2 990 €',
    priceDetail: 'au lieu de 3 460 €',
    popular: true,
    badge: 'Formule de référence',
    duration: '6 à 8 semaines',
    format: 'Bruxelles ou à distance',
    idealFor: 'Cabinets d’avocats et professions libérales qui veulent tout remettre à plat en une fois.',
    deliverables: [
      'Site Cabinet (5 pages, prise de rendez-vous, référencement)',
      'Bureau numérique complet',
      'Circuit de facturation + Bilan sécurité & RGPD'
    ],
    expectedImpact: 'Un cabinet visible, organisé et sécurisé, avec une facturation qui se fait presque seule.',
    features: [
      'Diagnostic de 2 h offert',
      'Site Cabinet : accueil, expertises, honoraires, FAQ, contact',
      'Prise de rendez-vous en ligne reliée à votre agenda',
      'E-mail pro, transfert des comptes privés, Drive organisé',
      'Circuit de facturation automatisé (temps → relevé → facture)',
      'Bilan sécurité & RGPD',
      '3 mois de Maintenance Site offerts'
    ],
    highlightNote: BOOKING_NOTE,
    ctaText: 'Choisir le Cabinet clé en main'
  },
  {
    id: 'pack-premium',
    name: 'Cabinet Premium',
    target: 'formules',
    tagline: 'Pour les cabinets de plusieurs personnes : site complet, architecture de fichiers sur mesure et environnement sécurisé pour toute l’équipe.',
    price: 'Dès 4 290 €',
    priceDetail: 'au lieu de 4 960 €',
    badge: 'Équipes',
    duration: '8 à 12 semaines',
    format: 'Ateliers au cabinet + mise en place',
    idealFor: 'Cabinets avec collaborateurs, associés ou secrétariat.',
    deliverables: [
      'Site Sur-mesure, bilingue',
      'Écosystème de fichiers interconnectés',
      'Bureau numérique et sécurité pour toute l’équipe'
    ],
    expectedImpact: 'Une organisation commune, documentée, qui ne dépend plus d’une seule personne.',
    features: [
      'Diagnostic de 2 h offert',
      'Site Sur-mesure : plus de 5 pages, version bilingue incluse',
      'Fichier maître clients et dossiers relié aux feuilles de temps, à la facturation et aux tableaux de bord',
      'Bureau numérique pour le titulaire',
      'Bilan sécurité & RGPD',
      'Prix définitif fixé après le diagnostic',
      '3 mois de Maintenance Site offerts'
    ],
    highlightNote: BOOKING_NOTE,
    ctaText: 'Étudier mon projet'
  },

  // ───────────── CONSEIL & ORGANISATION ─────────────
  {
    id: 'pro-audit',
    name: 'Diagnostic numérique',
    target: 'conseil',
    tagline: 'Deux heures pour faire le point sur vos outils, vos fichiers, votre site et la sécurité de vos données.',
    price: 'Offert',
    priceDetail: 'si vous poursuivez • sinon 200 €',
    badge: 'Point de départ',
    highlightNote: 'Gratuit si un forfait ou un abonnement est signé dans les 30 jours',
    duration: '2 h',
    format: 'Dans vos bureaux ou en visio',
    idealFor: 'Tout cabinet qui veut savoir où il perd du temps avant d’investir.',
    deliverables: [
      'Cartographie de vos flux de travail',
      'Rapport écrit, sans jargon',
      'Proposition chiffrée et 3 à 5 actions rapides'
    ],
    expectedImpact: 'Une vision claire de vos priorités et de leur coût, avant tout engagement.',
    features: [
      'Revue de vos outils et logiciels',
      'Organisation des fichiers et du Drive',
      'Facturation et suivi des honoraires',
      'Site internet et visibilité',
      'Sécurité des accès et des données'
    ],
    ctaText: 'Réserver mon diagnostic'
  },
  {
    id: 'pro-hourly',
    name: 'Séance de conseil',
    target: 'conseil',
    tagline: 'Pour débloquer un point précis : un fichier, un outil, une procédure, un choix de logiciel.',
    price: '100 €',
    priceDetail: 'par heure • puis par tranche de 30 min',
    badge: 'À la carte',
    duration: 'À partir d’1 h',
    format: 'En présentiel à Bruxelles ou en visio',
    idealFor: 'Professionnels qui ont une question précise et veulent une réponse rapide.',
    deliverables: [
      'Résolution en séance quand c’est possible',
      'Compte rendu écrit sous 24 h'
    ],
    expectedImpact: 'Un blocage levé, sans engagement.',
    features: [
      'Sans engagement de volume',
      'Travail direct sur vos fichiers et outils réels',
      'Avis indépendant avant un achat de logiciel',
      'Formation ponctuelle d’un collaborateur'
    ],
    ctaText: 'Réserver une séance'
  },
  {
    id: 'pro-carnet',
    name: 'Carnet de 10 heures',
    target: 'conseil',
    tagline: '10 heures prépayées, utilisables sur 6 mois pour n’importe quelle prestation.',
    price: '900 €',
    priceDetail: '10 h • 10 % d’économie',
    badge: 'Souplesse',
    duration: 'Valable 6 mois',
    format: 'Toutes prestations',
    idealFor: 'Cabinets qui ont des besoins réguliers mais irréguliers.',
    deliverables: [
      'Décompte des heures après chaque intervention'
    ],
    expectedImpact: 'Un interlocuteur disponible sans abonnement.',
    features: [
      'Utilisable pour le conseil, le site, les fichiers ou la sécurité',
      'Décompte transparent',
      'Pas de minimum par intervention au-delà de 30 min'
    ],
    ctaText: 'Commander un carnet'
  },
  {
    id: 'pro-focus',
    name: 'Focus Process',
    target: 'conseil',
    tagline: 'Six heures pour refondre un processus clé de votre cabinet.',
    price: '550 €',
    priceDetail: 'forfait 6 h',
    badge: 'Action rapide',
    duration: '6 h en séances de 1 h 30 à 3 h',
    format: 'Bruxelles ou à distance',
    idealFor: 'Accueil d’un nouveau client, ouverture de dossier, convention d’honoraires, suivi des échéances.',
    deliverables: [
      'Processus réécrit et mis en place sur vos documents réels',
      'Modèles prêts à l’emploi',
      'Fiche de procédure'
    ],
    expectedImpact: 'Un processus qui tourne sans y penser.',
    features: [
      'Travail sur vos documents réels',
      'Modèles de courriers, e-mails et checklists',
      'Fiche de procédure pour l’équipe',
      'Échanges WhatsApp entre les séances'
    ],
    ctaText: 'Lancer un Focus'
  },
  {
    id: 'pro-architecture',
    name: 'Pack Architecture',
    target: 'conseil',
    tagline: 'Repartir sur une organisation propre et durable : dossiers, outils, automatisations et documentation.',
    price: '1 290 €',
    priceDetail: 'forfait 15 h',
    badge: 'Refonte',
    duration: '15 h sur 6 à 8 semaines',
    format: 'Ateliers + mise en place technique',
    idealFor: 'Cabinets dont l’organisation s’est construite au fil du temps et ne suit plus.',
    deliverables: [
      'Arborescence des dossiers et règles de nommage',
      'Outils choisis et configurés',
      'Documentation et formation de l’équipe'
    ],
    expectedImpact: 'Une organisation que toute l’équipe comprend et applique.',
    features: [
      'Tout le contenu du Focus Process',
      'Choix et configuration des outils',
      'Automatisations simples',
      'Documentation écrite',
      'Formation de l’équipe'
    ],
    ctaText: 'Choisir le Pack Architecture'
  },

  // ───────────── PRÉSENCE EN LIGNE ─────────────
  {
    id: 'web-essentiel',
    name: 'Site Essentiel',
    target: 'web',
    tagline: 'Une page complète et soignée pour être trouvé et contacté.',
    price: '790 €',
    priceDetail: 'forfait',
    badge: 'Sobre & rapide',
    duration: 'Environ 2 semaines',
    format: 'À distance',
    idealFor: 'Indépendants qui démarrent ou veulent une présence sobre.',
    deliverables: [
      'Une page : présentation, domaines, contact, plan d’accès',
      'Adapté au téléphone, sécurisé (HTTPS)',
      'Nom de domaine et mise en ligne'
    ],
    expectedImpact: 'Une présence professionnelle en ligne en deux semaines.',
    features: [
      'Mentions légales et politique de confidentialité',
      'Hébergement sans frais mensuels lourds',
      'Nom de domaine à votre nom'
    ],
    ctaText: 'Demander mon site'
  },
  {
    id: 'web-cabinet',
    name: 'Site Cabinet',
    target: 'web',
    tagline: 'Cinq pages, prise de rendez-vous en ligne et référencement de base.',
    price: '1 490 €',
    priceDetail: 'forfait',
    popular: true,
    badge: 'Le plus demandé',
    duration: '3 à 4 semaines',
    format: 'À distance + un rendez-vous',
    idealFor: 'Cabinets d’avocats et professions libérales.',
    deliverables: [
      'Accueil, expertises, honoraires, FAQ, contact',
      'Prise de rendez-vous reliée à votre agenda',
      'Référencement de base et Google Search Console'
    ],
    expectedImpact: 'Des clients qui vous trouvent et prennent rendez-vous seuls.',
    features: [
      'Une adresse et un titre par page',
      'Plan du site et données structurées',
      'Formulaire de contact sans service tiers',
      'Textes relus avec vous au regard des règles de votre ordre'
    ],
    ctaText: 'Demander mon site'
  },
  {
    id: 'web-surmesure',
    name: 'Site Sur-mesure',
    target: 'web',
    tagline: 'Plus de pages, une version bilingue et des fonctions spécifiques.',
    price: 'Dès 2 490 €',
    priceDetail: 'sur devis',
    badge: 'Sur mesure',
    duration: 'Selon le projet',
    format: 'Ateliers + réalisation',
    idealFor: 'Cabinets avec plusieurs associés, bureaux ou langues.',
    deliverables: [
      'Tout le Site Cabinet',
      'Version bilingue incluse',
      'Fonctions sur mesure (équipe, articles, documents)'
    ],
    expectedImpact: 'Un site à l’image d’un cabinet établi.',
    features: [
      'Plus de 5 pages',
      'FR/NL ou FR/EN',
      'Prix définitif fixé après le diagnostic'
    ],
    ctaText: 'Étudier mon site'
  },

  // ───────────── FICHIERS INTERCONNECTÉS ─────────────
  {
    id: 'files-smart',
    name: 'Fichier intelligent',
    target: 'fichiers',
    tagline: 'Un fichier Excel ou Google Sheets conçu pour un usage précis, simple à utiliser.',
    price: '350 €',
    priceDetail: 'forfait',
    badge: 'Premier pas',
    duration: 'Environ 1 semaine',
    format: 'Excel ou Google Sheets',
    idealFor: 'Registre des dossiers, suivi des délais, liste de clients, inventaire.',
    deliverables: [
      'Formules, listes déroulantes, contrôles de saisie',
      'Mise en forme lisible',
      'Mode d’emploi intégré'
    ],
    expectedImpact: 'Fini le tableau bricolé que personne n’ose toucher.',
    features: [
      'Conçu avec vous, à partir de vos usages',
      'Protégé contre les erreurs de saisie',
      'Évolutif vers un écosystème complet'
    ],
    ctaText: 'Demander mon fichier'
  },
  {
    id: 'files-dashboard',
    name: 'Tableau de bord de gestion',
    target: 'fichiers',
    tagline: 'Une vue d’ensemble de votre activité, mise à jour automatiquement.',
    price: '590 €',
    priceDetail: 'forfait',
    badge: 'Pilotage',
    duration: '1 à 2 semaines',
    format: 'Excel ou Google Sheets',
    idealFor: 'Titulaires qui veulent suivre honoraires, encaissements et impayés d’un coup d’œil.',
    deliverables: [
      'Honoraires par client ou dossier',
      'Encaissements, impayés, temps presté',
      'Graphiques et alertes visuelles'
    ],
    expectedImpact: 'Vous savez où en est votre cabinet sans rien recalculer.',
    features: [
      'Alimenté par vos fichiers existants',
      'Alertes de retard de paiement',
      'Vue mensuelle et annuelle'
    ],
    ctaText: 'Demander mon tableau de bord'
  },
  {
    id: 'files-billing',
    name: 'Circuit de facturation',
    target: 'fichiers',
    tagline: 'Du temps presté à la facture PDF, sans ressaisie.',
    price: '790 €',
    priceDetail: 'forfait',
    popular: true,
    badge: 'Notre spécialité',
    duration: 'Environ 2 semaines',
    format: 'Excel ou Google Sheets',
    idealFor: 'Avocats et indépendants qui facturent au temps passé.',
    deliverables: [
      'Feuille de temps',
      'Relevé des prestations automatique par client et période',
      'Facture PDF numérotée + suivi des paiements'
    ],
    expectedImpact: 'Une facturation qui prend quelques minutes au lieu de quelques heures.',
    features: [
      'Mentions obligatoires sur les factures',
      'Tableau des factures envoyées, payées et en retard',
      'Données prêtes pour votre comptable',
      'La comptabilité reste chez votre comptable'
    ],
    ctaText: 'Automatiser ma facturation'
  },
  {
    id: 'files-ecosystem',
    name: 'Écosystème de fichiers',
    target: 'fichiers',
    tagline: 'L’architecture complète de vos fichiers de gestion : une information saisie une fois alimente tout le reste.',
    price: 'Dès 1 290 €',
    priceDetail: 'sur devis',
    badge: 'Interconnexion',
    duration: 'Selon le projet',
    format: 'Ateliers + réalisation',
    idealFor: 'Cabinets qui jonglent entre plusieurs fichiers qui ne se parlent pas.',
    deliverables: [
      'Fichier maître clients et dossiers',
      'Liens vers feuilles de temps, facturation et tableaux de bord',
      'Schéma des liens et règles de classement'
    ],
    expectedImpact: 'Une seule source pour chaque information, zéro double saisie.',
    features: [
      'Règles de nommage et de classement',
      'Documentation du système',
      'Prix définitif fixé après le diagnostic'
    ],
    ctaText: 'Étudier mon écosystème'
  },

  // ───────────── BUREAU NUMÉRIQUE & SÉCURITÉ ─────────────
  {
    id: 'office-setup',
    name: 'Bureau numérique',
    target: 'bureau',
    tagline: 'Passer des comptes privés éparpillés à un environnement professionnel et organisé.',
    price: '790 €',
    priceDetail: 'forfait • licences à votre charge',
    popular: true,
    badge: 'Professionnalisation',
    duration: '1 à 2 semaines',
    format: 'Bruxelles ou à distance',
    idealFor: 'Professionnels qui travaillent encore sur une adresse Gmail ou Outlook personnelle.',
    deliverables: [
      'E-mail pro sur le nom de domaine du cabinet',
      'Google Workspace ou Microsoft 365 configuré',
      'Transfert des e-mails, contacts, agendas et fichiers'
    ],
    expectedImpact: 'Des données de clients séparées de votre vie privée, et mieux protégées.',
    features: [
      'Drive organisé (clients, dossiers, administration)',
      'Agenda et page de réservation',
      'Signatures e-mail harmonisées',
      '1 h de prise en main incluse'
    ],
    ctaText: 'Professionnaliser mon bureau'
  },
  {
    id: 'office-security',
    name: 'Bilan sécurité & RGPD',
    target: 'bureau',
    tagline: 'Les mesures de base pour protéger les données de vos clients et respecter le RGPD.',
    price: '390 €',
    priceDetail: 'forfait',
    badge: 'Conformité',
    duration: 'Environ 1 semaine',
    format: 'Bruxelles ou à distance',
    idealFor: 'Tout professionnel soumis au secret professionnel.',
    deliverables: [
      'Double authentification et gestionnaire de mots de passe',
      'Sauvegardes et revue des accès',
      'Modèle de registre des traitements'
    ],
    expectedImpact: 'Des risques identifiés et réduits, avec une trace écrite.',
    features: [
      'Liste des contrats de sous-traitance à conclure',
      'Rapport des mesures prises et à prendre',
      'Mise en conformité de base (ni audit certifié, ni avis juridique)'
    ],
    ctaText: 'Sécuriser mon cabinet'
  },

  // ───────────── ABONNEMENTS ─────────────
  {
    id: 'sub-maintenance',
    name: 'Maintenance Site',
    target: 'abonnements',
    tagline: 'Votre site toujours à jour, sauvegardé et disponible.',
    price: '29 €',
    priceDetail: 'par mois',
    badge: 'Tranquillité',
    duration: 'Sans engagement',
    format: 'Réponse sous 48 h ouvrables',
    idealFor: 'Tout cabinet qui possède un site.',
    deliverables: [
      'Domaine, hébergement et certificat gérés',
      'Sauvegarde et surveillance',
      '30 min de retouches par mois'
    ],
    expectedImpact: 'Vous n’avez plus à penser à votre site.',
    features: [
      'Mises à jour techniques',
      'Changement d’horaires, textes, photos, tarifs',
      'Résiliable avec un mois de préavis'
    ],
    ctaText: 'Souscrire'
  },
  {
    id: 'sub-partner',
    name: 'Partenaire Numérique',
    target: 'abonnements',
    tagline: 'Un interlocuteur qui connaît votre cabinet, disponible chaque mois.',
    price: '129 €',
    priceDetail: 'par mois',
    popular: true,
    badge: 'Le plus choisi',
    duration: 'Sans engagement',
    format: 'Réponse sous 24 h ouvrables',
    idealFor: 'Cabinets qui veulent un support régulier sans y penser.',
    deliverables: [
      'Maintenance Site incluse',
      '1 h d’intervention par mois',
      'Revue sécurité chaque trimestre'
    ],
    expectedImpact: 'Les petits problèmes sont réglés avant de devenir grands.',
    features: [
      'Assistance par téléphone, e-mail et WhatsApp',
      'Intervention sur le site, les fichiers ou les outils',
      'Heures supplémentaires à 100 €/h',
      'Résiliable avec un mois de préavis'
    ],
    ctaText: 'Souscrire'
  },
  {
    id: 'pro-retainer',
    name: 'COO partagé',
    target: 'abonnements',
    tagline: 'Un responsable des opérations à temps partagé pour faire évoluer votre organisation.',
    price: 'Dès 450 €',
    priceDetail: 'par mois',
    badge: 'Pilotage',
    duration: 'Sans engagement',
    format: 'Réponse prioritaire sous 12 h',
    idealFor: 'Cabinets établis, avec une équipe, sans responsable administratif.',
    deliverables: [
      '4 h d’intervention par mois',
      'Point mensuel sur l’organisation',
      'Évolution continue des fichiers et outils'
    ],
    expectedImpact: 'Votre organisation progresse chaque mois, sans recrutement.',
    features: [
      'Formation des nouveaux collaborateurs',
      'Maintenance des automatisations',
      'Volume ajustable selon la taille du cabinet',
      'Résiliable avec un mois de préavis'
    ],
    ctaText: 'Déléguer mes opérations'
  }
];

export const SERVICE_OPTIONS: ServiceOption[] = [
  { category: 'web', name: 'Fiche d’établissement Google (création, texte, photos)', price: '150 €' },
  { category: 'web', name: 'Version dans une seconde langue (traduction fournie)', price: '350 €' },
  { category: 'web', name: 'Rédaction des textes, par page', price: '100 €' },
  { category: 'web', name: 'Page supplémentaire', price: '120 €' },
  { category: 'web', name: 'Reprise d’un site existant (migration, redirections)', price: '250 €' },
  { category: 'fichiers', name: 'Automatisation par script (envoi, export PDF, archivage)', price: '+ 250 €' },
  { category: 'fichiers', name: 'Raccordement à un outil externe (facturation, agenda, formulaire)', price: '+ 150 €' },
  { category: 'fichiers', name: 'Reprise et nettoyage d’un fichier existant', price: '100 €/h' },
  { category: 'bureau', name: 'Utilisateur supplémentaire (collaborateur, secrétariat)', price: '75 €' },
  { category: 'bureau', name: 'Mise en place d’un outil d’IA professionnel avec réglages de confidentialité', price: '250 €' },
  { category: 'bureau', name: 'Configuration d’un nouvel appareil', price: '100 €' },
  { category: 'conseil', name: 'Formation d’un utilisateur (1 h)', price: '100 €' },
  { category: 'conseil', name: 'Intervention urgente (sous 24 h, soir ou week-end)', price: '+ 50 %' }
];

export const PRO_COMPARISON: ComparisonRow[] = [
  {
    aspect: 'Connaissance du secteur',
    traditional: 'Prestataire généraliste, qui découvre vos contraintes',
    cognitiveStudio: 'Spécialisé dans les cabinets libéraux : secret professionnel, déontologie, RGPD',
    advantage: 'Moins d’explications, moins de risques'
  },
  {
    aspect: 'Interlocuteurs',
    traditional: 'Une agence pour le site, un informaticien, un consultant',
    cognitiveStudio: 'Un seul interlocuteur pour le site, les fichiers, le bureau numérique et la sécurité',
    advantage: 'Une vision d’ensemble cohérente'
  },
  {
    aspect: 'Transparence des tarifs',
    traditional: 'Devis au cas par cas, TVA en sus',
    cognitiveStudio: 'Prix fixes publiés, nets (TVA non applicable)',
    advantage: 'Aucune surprise sur la facture'
  },
  {
    aspect: 'Diagnostic',
    traditional: 'Audit payant avant tout projet',
    cognitiveStudio: 'Diagnostic offert si vous poursuivez',
    advantage: 'Aucun risque pour démarrer'
  },
  {
    aspect: 'Propriété des outils',
    traditional: 'Solutions propriétaires, dépendance au prestataire',
    cognitiveStudio: 'Site, fichiers, comptes et accès à votre nom, avec documentation',
    advantage: 'Vous restez libre'
  },
  {
    aspect: 'Engagement',
    traditional: 'Contrats de maintenance de 12 mois',
    cognitiveStudio: 'Abonnements sans engagement, résiliables avec un mois de préavis',
    advantage: 'Budget maîtrisé'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'tarifs',
    question: 'Pourquoi vos prix sont-ils indiqués sans TVA ?',
    answer: 'Cognitive Studio relève du régime de franchise de TVA des petites entreprises. La TVA n’est donc pas applicable : le prix affiché est le prix que vous payez, sans supplément.'
  },
  {
    category: 'tarifs',
    question: 'Le diagnostic est-il vraiment gratuit ?',
    answer: 'Oui, s’il est suivi d’un forfait ou d’un abonnement signé dans les 30 jours. Si vous décidez de ne pas poursuivre, il est facturé 200 € (2 h), et vous gardez le rapport et les recommandations.'
  },
  {
    category: 'methode',
    question: 'Travaillez-vous uniquement avec des avocats ?',
    answer: 'Notre spécialité est l’organisation numérique des cabinets d’avocats et des professions libérales, dont nous connaissons les contraintes (secret professionnel, déontologie, RGPD). Nous accompagnons aussi des indépendants et de petites entreprises qui ont des besoins similaires.'
  },
  {
    category: 'methode',
    question: 'Comment protégez-vous la confidentialité de mes dossiers ?',
    answer: 'Un engagement de confidentialité et un contrat de sous-traitance RGPD sont signés avant tout accès à vos données. Nous n’accédons qu’à ce qui est nécessaire, les comptes restent à votre nom, et les accès qui nous sont donnés sont retirés en fin de mission.'
  },
  {
    category: 'tarifs',
    question: 'À qui appartiennent le site, les fichiers et les comptes ?',
    answer: 'À vous, dès le paiement complet. Le nom de domaine, les licences et les comptes sont ouverts à votre nom, et chaque livraison est accompagnée d’une documentation pour que vous puissiez en changer de prestataire si vous le souhaitez.'
  },
  {
    category: 'methode',
    question: 'Je ne suis pas à l’aise avec l’informatique. Vais-je m’en sortir ?',
    answer: 'C’est précisément le but. Nous partons de vos habitudes réelles, nous gardons les outils simples (Excel, Google Sheets, Google Workspace ou Microsoft 365) et chaque livraison comprend une prise en main et un mode d’emploi écrit.'
  },
  {
    category: 'methode',
    question: 'Remplacez-vous mon comptable ?',
    answer: 'Non. Nous automatisons la préparation de vos factures et le suivi de vos honoraires, et nous livrons des données propres à votre comptable. La tenue de la comptabilité et les déclarations fiscales restent de son ressort.'
  },
  {
    category: 'methode',
    question: 'Travaillez-vous avec Excel ou Google Sheets ?',
    answer: 'Avec les deux. Nous choisissons avec vous l’outil que vous utilisez déjà ou qui convient le mieux à votre cabinet, et nous concevons des fichiers reliés entre eux pour éviter toute double saisie.'
  },
  {
    category: 'methode',
    question: 'Quel temps dois-je y consacrer ?',
    answer: 'Environ 1 à 2 heures par semaine pendant la mise en place, surtout pour valider les choix et relire les textes. Ensuite, la maintenance se fait en arrière-plan.'
  },
  {
    category: 'tarifs',
    question: 'Les abonnements m’engagent-ils sur la durée ?',
    answer: 'Non. Tous les abonnements sont sans engagement et résiliables avec un mois de préavis. Le paiement annuel donne droit à 10 % de réduction.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Client Professionnel',
    role: 'Direction & Collaboration Entreprise',
    quote: "L'équipe de Cognitive Studio fait preuve d'une excellente gestion et d'un suivi irréprochable. La communication est fluide, efficace et transparente, ce qui rend la collaboration particulièrement fluide et agréable.\n\nJe recommande vivement leurs services à tout professionnel recherchant un accompagnement rigoureux et de qualité !",
    metric: 'Gestion & suivi irréprochable pour professionnels',
    rating: 5,
    source: 'Avis Google',
    verified: true,
    date: 'Avis publié sur Google'
  }
];

export const REFERENCES: ReferenceItem[] = [
  {
    client: 'Cabinet d’avocate',
    sector: 'Barreau de Bruxelles',
    work: 'Site du cabinet : 5 pages, prise de rendez-vous en ligne, référencement et fiche Google'
  },
  {
    client: 'Cabinet d’avocat',
    sector: 'Bruxelles',
    work: 'Circuit de facturation interconnecté : feuille de temps, relevé des prestations et facture générés automatiquement'
  },
  {
    client: 'Cabinets d’avocats',
    sector: 'Bruxelles',
    work: 'Organisation numérique : outils de gestion, fichiers et sécurité des données'
  }
];
