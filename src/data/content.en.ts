import { ServiceTier, ServiceOption, CorePillar, FaqItem, ComparisonRow, TestimonialItem, ReferenceItem } from '../types';

export const CORE_PILLARS_EN: CorePillar[] = [
  {
    letter: 'C',
    word: 'Comprehend',
    subtitle: 'Diagnose before touching anything',
    description: 'We look at how your practice actually works: tools, files, billing, client communication. Nothing is reorganised until we understand where time is lost and where the risks are.',
    businessApplication: '2-hour diagnostic (free if you go ahead): a map of your workflows, unnecessary re-typing and access gaps, with a costed proposal.',
    iconName: 'Brain'
  },
  {
    letter: 'O',
    word: 'Organize',
    subtitle: 'One place for every piece of information',
    description: 'A clear structure reduces mental load. Each piece of data — a client, a matter, a billable task — is entered once, in the right place, following simple rules the whole team understands.',
    businessApplication: 'Folder structure, a master client and matter file, naming rules, professional Drive and calendar.',
    iconName: 'FolderTree'
  },
  {
    letter: 'R',
    word: 'Restructure',
    subtitle: 'Connect, automate, secure',
    description: 'Tools must never come before thinking. Once the structure is in place, we connect your files, automate repetitive tasks and secure access — with no black box.',
    businessApplication: 'Interconnected Excel or Google Sheets files, automated billing, two-factor authentication, backups and GDPR compliance.',
    iconName: 'Cpu'
  },
  {
    letter: 'E',
    word: 'Execute',
    subtitle: 'Deliver, train, make you independent',
    description: 'Every engagement ends with working tools, clear documentation and a team that knows how to use them. Everything delivered belongs to you.',
    businessApplication: 'Go-live, hands-on training, written documentation, then monthly support if you wish.',
    iconName: 'Zap'
  }
];

const NOTE = 'Free diagnostic if you go ahead';

export const SERVICE_TIERS_EN: ServiceTier[] = [
  {
    id: 'pack-demarrage', name: 'Starter Pro', target: 'formules',
    tagline: 'For the lawyer or professional setting up: online presence, professional email and a first management tool.',
    price: '€1,690', priceDetail: 'instead of €1,930', badge: 'Set-up',
    duration: 'About 3 weeks', format: 'Brussels or remote',
    idealFor: 'Lawyers and independent professionals starting or setting up their own practice.',
    deliverables: ['Essential Website (1 page, mobile, domain name)', 'Digital office: professional email, Drive and calendar', 'One smart file (Excel or Google Sheets)'],
    expectedImpact: 'A visible, organised practice from your very first client.',
    features: ['Free 2-hour diagnostic', 'Essential Website: presentation, practice areas, contact, legal notice', 'Email on your own domain, Google Workspace or Microsoft 365', 'Organised Drive, calendar and online booking page', 'Smart file of your choice: matters, deadlines or clients', '3 months of Website Maintenance included'],
    highlightNote: NOTE, ctaText: 'Choose Starter Pro'
  },
  {
    id: 'pack-gestion', name: 'Billing & Oversight', target: 'formules',
    tagline: 'From time recorded to invoice, without re-typing, with a dashboard and secure access.',
    price: '€1,550', priceDetail: 'instead of €1,770', badge: 'Billing',
    duration: 'About 3 to 4 weeks', format: 'Brussels or remote',
    idealFor: 'Practices that already have a website but lose time on billing and fee tracking.',
    deliverables: ['Automated billing workflow', 'Fees and unpaid invoices dashboard', 'Security & GDPR review'],
    expectedImpact: 'Hours of billing work saved every month, fewer forgotten unpaid invoices.',
    features: ['Free 2-hour diagnostic', 'Timesheet, statement of services and PDF invoice generated automatically', 'Dashboard: fees per client, payments received, unpaid invoices', 'Two-factor authentication, password manager, backups', 'GDPR record-of-processing template', 'Training and documentation'],
    highlightNote: NOTE, ctaText: 'Choose Billing & Oversight'
  },
  {
    id: 'pack-cabinet', name: 'Turnkey Practice', target: 'formules',
    tagline: 'Our reference package: website, digital office, automated billing and security.',
    price: '€2,990', priceDetail: 'instead of €3,460', popular: true, badge: 'Reference package',
    duration: '6 to 8 weeks', format: 'Brussels or remote',
    idealFor: 'Law firms and independent professionals who want to reset everything in one go.',
    deliverables: ['Practice Website (5 pages, booking, SEO)', 'Complete digital office', 'Billing workflow + Security & GDPR review'],
    expectedImpact: 'A visible, organised and secure practice, with billing that almost runs itself.',
    features: ['Free 2-hour diagnostic', 'Practice Website: home, expertise, fees, FAQ, contact', 'Online booking linked to your calendar', 'Professional email, migration from personal accounts, organised Drive', 'Automated billing workflow (time → statement → invoice)', 'Security & GDPR review', '3 months of Website Maintenance included'],
    highlightNote: NOTE, ctaText: 'Choose Turnkey Practice'
  },
  {
    id: 'pack-premium', name: 'Premium Practice', target: 'formules',
    tagline: 'For multi-person practices: full website, bespoke file architecture and a secure environment for the whole team.',
    price: 'From €4,290', priceDetail: 'instead of €4,960', badge: 'Teams',
    duration: '8 to 12 weeks', format: 'Workshops on site + implementation',
    idealFor: 'Practices with associates, partners or a secretariat.',
    deliverables: ['Bespoke bilingual website', 'Interconnected file ecosystem', 'Digital office and security for the whole team'],
    expectedImpact: 'A shared, documented organisation that no longer depends on one person.',
    features: ['Free 2-hour diagnostic', 'Bespoke Website: more than 5 pages, bilingual version included', 'Master client and matter file linked to timesheets, billing and dashboards', 'Digital office for the principal', 'Security & GDPR review', 'Final price set after the diagnostic', '3 months of Website Maintenance included'],
    highlightNote: NOTE, ctaText: 'Discuss my project'
  },
  {
    id: 'pro-audit', name: 'Digital diagnostic', target: 'conseil',
    tagline: 'Two hours to review your tools, files, website and data security.',
    price: 'Free', priceDetail: 'if you go ahead • otherwise €200', badge: 'Starting point',
    highlightNote: 'Free if a package or subscription is signed within 30 days',
    duration: '2 hours', format: 'At your office or by video',
    idealFor: 'Any practice that wants to know where it loses time before investing.',
    deliverables: ['Map of your workflows', 'Written report, no jargon', 'Costed proposal and 3 to 5 quick wins'],
    expectedImpact: 'A clear view of your priorities and their cost, before any commitment.',
    features: ['Review of your tools and software', 'File and Drive organisation', 'Billing and fee tracking', 'Website and visibility', 'Access and data security'],
    ctaText: 'Book my diagnostic'
  },
  {
    id: 'pro-hourly', name: 'Consulting session', target: 'conseil',
    tagline: 'To solve a specific issue: a file, a tool, a procedure, a software choice.',
    price: '€100', priceDetail: 'per hour • then per 30 min', badge: 'On demand',
    duration: 'From 1 hour', format: 'In person in Brussels or by video',
    idealFor: 'Professionals with a precise question who want a quick answer.',
    deliverables: ['Solved during the session whenever possible', 'Written summary within 24 hours'],
    expectedImpact: 'One blocker removed, no commitment.',
    features: ['No minimum volume', 'Direct work on your real files and tools', 'Independent advice before buying software', 'One-off training for a team member'],
    ctaText: 'Book a session'
  },
  {
    id: 'pro-carnet', name: '10-hour bundle', target: 'conseil',
    tagline: '10 prepaid hours, usable over 6 months for any service.',
    price: '€900', priceDetail: '10 h • 10% saving', badge: 'Flexibility',
    duration: 'Valid 6 months', format: 'All services',
    idealFor: 'Practices with regular but uneven needs.',
    deliverables: ['Hour count sent after each intervention'],
    expectedImpact: 'A dedicated contact without a subscription.',
    features: ['Usable for consulting, website, files or security', 'Transparent hour count', 'No minimum beyond 30 minutes per intervention'],
    ctaText: 'Order a bundle'
  },
  {
    id: 'pro-focus', name: 'Process Focus', target: 'conseil',
    tagline: 'Six hours to redesign one key process in your practice.',
    price: '€550', priceDetail: '6-hour package', badge: 'Quick action',
    duration: '6 h in sessions of 1.5 to 3 h', format: 'Brussels or remote',
    idealFor: 'Client intake, opening a matter, fee agreements, deadline tracking.',
    deliverables: ['Process rewritten and implemented on your real documents', 'Ready-to-use templates', 'Procedure sheet'],
    expectedImpact: 'A process that runs without thinking about it.',
    features: ['Work on your real documents', 'Letter, email and checklist templates', 'Procedure sheet for the team', 'WhatsApp support between sessions'],
    ctaText: 'Start a Focus'
  },
  {
    id: 'pro-architecture', name: 'Architecture Pack', target: 'conseil',
    tagline: 'Start again on a clean, lasting organisation: folders, tools, automations and documentation.',
    price: '€1,290', priceDetail: '15-hour package', badge: 'Overhaul',
    duration: '15 h over 6 to 8 weeks', format: 'Workshops + technical set-up',
    idealFor: 'Practices whose organisation grew over time and no longer keeps up.',
    deliverables: ['Folder structure and naming rules', 'Tools selected and configured', 'Documentation and team training'],
    expectedImpact: 'An organisation the whole team understands and applies.',
    features: ['Everything in Process Focus', 'Tool selection and configuration', 'Simple automations', 'Written documentation', 'Team training'],
    ctaText: 'Choose the Architecture Pack'
  },
  {
    id: 'web-essentiel', name: 'Essential Website', target: 'web',
    tagline: 'One complete, polished page to be found and contacted.',
    price: '€790', priceDetail: 'fixed price', badge: 'Simple & fast',
    duration: 'About 2 weeks', format: 'Remote',
    idealFor: 'Independents starting out or wanting a simple presence.',
    deliverables: ['One page: presentation, practice areas, contact, map', 'Mobile-friendly, secure (HTTPS)', 'Domain name and go-live'],
    expectedImpact: 'A professional online presence in two weeks.',
    features: ['Legal notice and privacy policy', 'Hosting without heavy monthly fees', 'Domain name in your name'],
    ctaText: 'Request my website'
  },
  {
    id: 'web-cabinet', name: 'Practice Website', target: 'web',
    tagline: 'Five pages, online booking and basic search optimisation.',
    price: '€1,490', priceDetail: 'fixed price', popular: true, badge: 'Most requested',
    duration: '3 to 4 weeks', format: 'Remote + one meeting',
    idealFor: 'Law firms and independent professionals.',
    deliverables: ['Home, expertise, fees, FAQ, contact', 'Booking linked to your calendar', 'Basic SEO and Google Search Console'],
    expectedImpact: 'Clients who find you and book on their own.',
    features: ['One address and title per page', 'Sitemap and structured data', 'Contact form with no third-party service', 'Texts reviewed with you against your professional rules'],
    ctaText: 'Request my website'
  },
  {
    id: 'web-surmesure', name: 'Bespoke Website', target: 'web',
    tagline: 'More pages, a bilingual version and specific features.',
    price: 'From €2,490', priceDetail: 'on quote', badge: 'Bespoke',
    duration: 'Depends on the project', format: 'Workshops + build',
    idealFor: 'Practices with several partners, offices or languages.',
    deliverables: ['Everything in the Practice Website', 'Bilingual version included', 'Custom features (team, articles, documents)'],
    expectedImpact: 'A website that reflects an established practice.',
    features: ['More than 5 pages', 'FR/NL or FR/EN', 'Final price set after the diagnostic'],
    ctaText: 'Discuss my website'
  },
  {
    id: 'files-smart', name: 'Smart file', target: 'fichiers',
    tagline: 'An Excel or Google Sheets file built for one precise use, easy to work with.',
    price: '€350', priceDetail: 'fixed price', badge: 'First step',
    duration: 'About 1 week', format: 'Excel or Google Sheets',
    idealFor: 'Matter register, deadline tracking, client list, inventory.',
    deliverables: ['Formulas, drop-down lists, input checks', 'Readable layout', 'Built-in user guide'],
    expectedImpact: 'No more makeshift spreadsheet nobody dares to touch.',
    features: ['Designed with you, from your actual use', 'Protected against input errors', 'Can grow into a full ecosystem'],
    ctaText: 'Request my file'
  },
  {
    id: 'files-dashboard', name: 'Management dashboard', target: 'fichiers',
    tagline: 'An overview of your activity, updated automatically.',
    price: '€590', priceDetail: 'fixed price', badge: 'Oversight',
    duration: '1 to 2 weeks', format: 'Excel or Google Sheets',
    idealFor: 'Principals who want to see fees, payments and unpaid invoices at a glance.',
    deliverables: ['Fees per client or matter', 'Payments, unpaid invoices, time recorded', 'Charts and visual alerts'],
    expectedImpact: 'You know where your practice stands without recalculating anything.',
    features: ['Fed by your existing files', 'Late-payment alerts', 'Monthly and yearly view'],
    ctaText: 'Request my dashboard'
  },
  {
    id: 'files-billing', name: 'Billing workflow', target: 'fichiers',
    tagline: 'From recorded time to PDF invoice, without re-typing.',
    price: '€790', priceDetail: 'fixed price', popular: true, badge: 'Our speciality',
    duration: 'About 2 weeks', format: 'Excel or Google Sheets',
    idealFor: 'Lawyers and independents who bill by the hour.',
    deliverables: ['Timesheet', 'Automatic statement of services per client and period', 'Numbered PDF invoice + payment tracking'],
    expectedImpact: 'Billing that takes minutes instead of hours.',
    features: ['Mandatory invoice mentions', 'Table of invoices sent, paid and overdue', 'Data ready for your accountant', 'Bookkeeping stays with your accountant'],
    ctaText: 'Automate my billing'
  },
  {
    id: 'files-ecosystem', name: 'File ecosystem', target: 'fichiers',
    tagline: 'The complete architecture of your management files: information entered once feeds everything else.',
    price: 'From €1,290', priceDetail: 'on quote', badge: 'Interconnection',
    duration: 'Depends on the project', format: 'Workshops + build',
    idealFor: 'Practices juggling several files that do not talk to each other.',
    deliverables: ['Master client and matter file', 'Links to timesheets, billing and dashboards', 'Link diagram and filing rules'],
    expectedImpact: 'One source for each piece of information, zero double entry.',
    features: ['Naming and filing rules', 'System documentation', 'Final price set after the diagnostic'],
    ctaText: 'Discuss my ecosystem'
  },
  {
    id: 'office-setup', name: 'Digital office', target: 'bureau',
    tagline: 'Move from scattered personal accounts to an organised professional environment.',
    price: '€790', priceDetail: 'fixed price • licences at your cost', popular: true, badge: 'Professionalisation',
    duration: '1 to 2 weeks', format: 'Brussels or remote',
    idealFor: 'Professionals still working from a personal Gmail or Outlook address.',
    deliverables: ['Professional email on your practice domain', 'Google Workspace or Microsoft 365 configured', 'Migration of emails, contacts, calendars and files'],
    expectedImpact: 'Client data separated from your private life, and better protected.',
    features: ['Organised Drive (clients, matters, administration)', 'Calendar and booking page', 'Consistent email signatures', '1 hour of hands-on training included'],
    ctaText: 'Professionalise my office'
  },
  {
    id: 'office-security', name: 'Security & GDPR review', target: 'bureau',
    tagline: 'The essential measures to protect your clients’ data and comply with the GDPR.',
    price: '€390', priceDetail: 'fixed price', badge: 'Compliance',
    duration: 'About 1 week', format: 'Brussels or remote',
    idealFor: 'Any professional bound by professional secrecy.',
    deliverables: ['Two-factor authentication and password manager', 'Backups and access review', 'Record-of-processing template'],
    expectedImpact: 'Risks identified and reduced, with a written record.',
    features: ['List of processor agreements to sign', 'Report of measures taken and to take', 'Baseline compliance (not a certified audit or legal advice)'],
    ctaText: 'Secure my practice'
  },
  {
    id: 'sub-maintenance', name: 'Website Maintenance', target: 'abonnements',
    tagline: 'Your website always up to date, backed up and online.',
    price: '€29', priceDetail: 'per month', badge: 'Peace of mind',
    duration: 'No commitment', format: 'Reply within 48 working hours',
    idealFor: 'Any practice with a website.',
    deliverables: ['Domain, hosting and certificate managed', 'Backup and monitoring', '30 min of edits per month'],
    expectedImpact: 'You no longer have to think about your website.',
    features: ['Technical updates', 'Opening hours, texts, photos, fees updated', 'Cancel with one month’s notice'],
    ctaText: 'Subscribe'
  },
  {
    id: 'sub-partner', name: 'Digital Partner', target: 'abonnements',
    tagline: 'A contact who knows your practice, available every month.',
    price: '€129', priceDetail: 'per month', popular: true, badge: 'Most chosen',
    duration: 'No commitment', format: 'Reply within 24 working hours',
    idealFor: 'Practices that want regular support without thinking about it.',
    deliverables: ['Website Maintenance included', '1 hour of work per month', 'Quarterly security review'],
    expectedImpact: 'Small problems are fixed before they grow.',
    features: ['Support by phone, email and WhatsApp', 'Work on the website, files or tools', 'Extra hours at €100/h', 'Cancel with one month’s notice'],
    ctaText: 'Subscribe'
  },
  {
    id: 'pro-retainer', name: 'Fractional COO', target: 'abonnements',
    tagline: 'A part-time operations lead to keep your organisation improving.',
    price: 'From €450', priceDetail: 'per month', badge: 'Oversight',
    duration: 'No commitment', format: 'Priority reply within 12 hours',
    idealFor: 'Established practices with a team but no office manager.',
    deliverables: ['4 hours of work per month', 'Monthly organisation review', 'Continuous improvement of files and tools'],
    expectedImpact: 'Your organisation improves every month, without hiring.',
    features: ['Onboarding of new team members', 'Automation maintenance', 'Volume adjusted to the size of the practice', 'Cancel with one month’s notice'],
    ctaText: 'Delegate my operations'
  }
];

export const SERVICE_OPTIONS_EN: ServiceOption[] = [
  { category: 'web', name: 'Google Business Profile (creation, text, photos)', price: '€150' },
  { category: 'web', name: 'Second language version (translation provided)', price: '€350' },
  { category: 'web', name: 'Copywriting, per page', price: '€100' },
  { category: 'web', name: 'Extra page', price: '€120' },
  { category: 'web', name: 'Migration of an existing website (redirects)', price: '€250' },
  { category: 'fichiers', name: 'Script automation (sending, PDF export, archiving)', price: '+ €250' },
  { category: 'fichiers', name: 'Connection to an external tool (billing, calendar, form)', price: '+ €150' },
  { category: 'fichiers', name: 'Clean-up of an existing file', price: '€100/h' },
  { category: 'bureau', name: 'Additional user (associate, secretariat)', price: '€75' },
  { category: 'bureau', name: 'Professional AI tool set-up with privacy settings', price: '€250' },
  { category: 'bureau', name: 'New device configuration', price: '€100' },
  { category: 'conseil', name: 'User training (1 hour)', price: '€100' },
  { category: 'conseil', name: 'Urgent intervention (within 24 h, evening or weekend)', price: '+ 50%' }
];

export const PRO_COMPARISON_EN: ComparisonRow[] = [
  { aspect: 'Sector knowledge', traditional: 'General provider who discovers your constraints', cognitiveStudio: 'Specialised in professional practices: professional secrecy, ethics, GDPR', advantage: 'Fewer explanations, fewer risks' },
  { aspect: 'Contacts', traditional: 'One agency for the website, one IT technician, one consultant', cognitiveStudio: 'One contact for website, files, digital office and security', advantage: 'A consistent overall view' },
  { aspect: 'Pricing transparency', traditional: 'Case-by-case quotes, VAT on top', cognitiveStudio: 'Published fixed prices, net (VAT not applicable)', advantage: 'No surprises on the invoice' },
  { aspect: 'Diagnostic', traditional: 'Paid audit before any project', cognitiveStudio: 'Free diagnostic if you go ahead', advantage: 'No risk to get started' },
  { aspect: 'Ownership', traditional: 'Proprietary solutions, dependence on the provider', cognitiveStudio: 'Website, files, accounts and access in your name, with documentation', advantage: 'You stay free' },
  { aspect: 'Commitment', traditional: '12-month maintenance contracts', cognitiveStudio: 'Subscriptions with no commitment, one month’s notice', advantage: 'Controlled budget' }
];

export const FAQ_DATA_EN: FaqItem[] = [
  { category: 'tarifs', question: 'Why are your prices shown without VAT?', answer: 'Cognitive Studio falls under the Belgian small-business VAT exemption scheme. VAT is therefore not applicable: the price shown is the price you pay.' },
  { category: 'tarifs', question: 'Is the diagnostic really free?', answer: 'Yes, if a package or subscription is signed within 30 days. If you decide not to go ahead, it is billed €200 (2 hours), and you keep the report and recommendations.' },
  { category: 'methode', question: 'Do you only work with lawyers?', answer: 'Our speciality is the digital organisation of law firms and independent professionals, whose constraints we know (professional secrecy, ethics, GDPR). We also support independents and small businesses with similar needs.' },
  { category: 'methode', question: 'How do you protect the confidentiality of my files?', answer: 'A confidentiality undertaking and a GDPR processor agreement are signed before any access to your data. We only access what is necessary, accounts stay in your name, and the access given to us is removed at the end of the engagement.' },
  { category: 'tarifs', question: 'Who owns the website, files and accounts?', answer: 'You do, once paid in full. Domain names, licences and accounts are opened in your name, and every delivery comes with documentation so you can change provider if you wish.' },
  { category: 'methode', question: 'I am not comfortable with technology. Will I manage?', answer: 'That is exactly the point. We start from your real habits, keep tools simple (Excel, Google Sheets, Google Workspace or Microsoft 365), and every delivery includes hands-on training and a written guide.' },
  { category: 'methode', question: 'Do you replace my accountant?', answer: 'No. We automate the preparation of your invoices and fee tracking, and deliver clean data to your accountant. Bookkeeping and tax returns remain their responsibility.' },
  { category: 'methode', question: 'Do you work with Excel or Google Sheets?', answer: 'Both. We choose with you the tool you already use or the one that best suits your practice, and design linked files to avoid any double entry.' },
  { category: 'methode', question: 'How much of my time will it take?', answer: 'About 1 to 2 hours a week during set-up, mainly to validate choices and review texts. After that, maintenance happens in the background.' },
  { category: 'tarifs', question: 'Do subscriptions lock me in?', answer: 'No. All subscriptions are commitment-free and can be cancelled with one month’s notice. Annual payment gives a 10% discount.' }
];

export const TESTIMONIALS_EN: TestimonialItem[] = [
  {
    name: 'Professional client',
    role: 'Management & business collaboration',
    quote: "L'équipe de Cognitive Studio fait preuve d'une excellente gestion et d'un suivi irréprochable. La communication est fluide, efficace et transparente, ce qui rend la collaboration particulièrement fluide et agréable.\n\nJe recommande vivement leurs services à tout professionnel recherchant un accompagnement rigoureux et de qualité !",
    metric: 'Outstanding management & follow-up for professionals',
    rating: 5,
    source: 'Google review',
    verified: true,
    date: 'Published on Google (original in French)'
  }
];

export const REFERENCES_EN: ReferenceItem[] = [
  { client: 'Law practice', sector: 'Brussels Bar', work: 'Practice website: 5 pages, online booking, SEO and Google profile' },
  { client: 'Law practice', sector: 'Brussels', work: 'Interconnected billing workflow: timesheet, statement of services and invoice generated automatically' },
  { client: 'Law firms', sector: 'Brussels', work: 'Digital organisation: management tools, files and data security' }
];
