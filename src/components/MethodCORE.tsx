import React, { useState } from 'react';
import { 
  Brain, 
  FolderTree, 
  Cpu, 
  Zap, 
  Check, 
  X, 
  GraduationCap, 
  Briefcase,
  Sparkles
} from 'lucide-react';
import { CorePillar } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const MethodCORE: React.FC = () => {
  const [activePillar, setActivePillar] = useState<CorePillar['letter']>('C');
  const [comparisonTab, setComparisonTab] = useState<'student' | 'business'>('student');
  const { language } = useLanguage();
  const t = getTranslations(language);

  const pillars = t.methodCore.pillars;
  const selected = pillars.find(p => p.letter === activePillar) || pillars[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'FolderTree': return <FolderTree className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      default: return <Brain className="w-5 h-5" />;
    }
  };

  return (
    <section 
      id="methode-core"
      className="py-16 md:py-24 bg-[#e0e0db] border-y border-[#cfcfc7] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8e6e1] border border-[#b8cec7] text-[#325249] text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#325249]" />
            <span>{t.methodCore.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#333333] font-display tracking-tight">
            {t.methodCore.title}
          </h2>
          <p className="mt-4 text-[#555555] text-sm sm:text-base leading-relaxed">
            {t.methodCore.subtitle}
          </p>
        </div>

        {/* 4 Interactive Letter Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {pillars.map((pillar) => {
            const isSelected = pillar.letter === activePillar;
            return (
              <button
                key={pillar.letter}
                id={`core-pill-${pillar.letter.toLowerCase()}`}
                onClick={() => setActivePillar(pillar.letter)}
                className={`p-4 sm:p-5 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#325249] border-[#243c35] text-white shadow-md scale-[1.02]'
                    : 'bg-white border-[#cfcfc7] text-[#333333] hover:border-[#325249] hover:bg-[#eaeae5]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-extrabold text-lg ${
                    isSelected 
                      ? 'bg-[#243c35] text-[#e0e0db] border border-[#325249]' 
                      : 'bg-[#eaeae5] text-[#325249] border border-[#cfcfc7]'
                  }`}>
                    {pillar.letter}
                  </span>
                  <div className={isSelected ? 'text-[#e0e0db]' : 'text-[#555555]'}>
                    {getIcon(pillar.iconName)}
                  </div>
                </div>

                <div className={`text-base sm:text-lg font-bold font-display ${isSelected ? 'text-white' : 'text-[#333333]'}`}>
                  {pillar.word}
                </div>
                <div className={`text-xs line-clamp-1 mt-0.5 ${isSelected ? 'text-[#e0e0db]' : 'text-[#555555]'}`}>
                  {pillar.subtitle}
                </div>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#b8cec7]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detail Card */}
        <div className="bg-white border border-[#cfcfc7] rounded-2xl p-6 sm:p-8 mb-14 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="lg:max-w-xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-[#d8e6e1] text-[#325249] font-mono text-xs font-bold border border-[#b8cec7]">
                  {language === 'fr' ? `Pilier ${selected.letter}` : `Pillar ${selected.letter}`}
                </span>
                <span className="text-xs text-[#555555] font-mono">
                  {language === 'fr' ? "Principe d'action scientifique" : 'Scientific operating principle'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#333333] font-display">
                {selected.word} : {selected.subtitle}
              </h3>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
                {selected.description}
              </p>
            </div>

            <div className="w-full lg:w-96 space-y-4 pt-4 lg:pt-0 lg:border-l lg:border-[#cfcfc7] lg:pl-8">
              <div className="bg-[#eaeae5] border border-[#cfcfc7] rounded-xl p-4">
                <div className="flex items-center gap-2 text-[#325249] text-xs font-bold uppercase tracking-wider mb-2">
                  <GraduationCap className="w-4 h-4 text-[#325249]" />
                  <span>{language === 'fr' ? 'En Réussite Académique' : 'In Academic Excellence'}</span>
                </div>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {selected.academicApplication}
                </p>
              </div>

              <div className="bg-[#eaeae5] border border-[#cfcfc7] rounded-xl p-4">
                <div className="flex items-center gap-2 text-[#325249] text-xs font-bold uppercase tracking-wider mb-2">
                  <Briefcase className="w-4 h-4 text-[#325249]" />
                  <span>{language === 'fr' ? 'Pour les Indépendants & Pros' : 'For Freelancers & Pros'}</span>
                </div>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {selected.businessApplication}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Before vs After C.O.R.E. Visual Interactive Comparator */}
        <div className="bg-white border border-[#cfcfc7] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#333333] font-display">
                {language === 'fr' ? 'La Transformation Concrète : Avec ou Sans C.O.R.E.' : 'Concrete Transformation: With vs Without C.O.R.E.'}
              </h3>
              <p className="text-xs sm:text-sm text-[#555555]">
                {language === 'fr' ? 'Comparez l’impact concret sur votre quotidien.' : 'Compare cognitive and operational outcomes in your daily routine.'}
              </p>
            </div>

            <div className="flex bg-[#eaeae5] p-1 rounded-xl border border-[#cfcfc7] text-xs font-semibold">
              <button
                onClick={() => setComparisonTab('student')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  comparisonTab === 'student'
                    ? 'bg-[#325249] text-white shadow-xs'
                    : 'text-[#555555] hover:text-[#333333]'
                }`}
              >
                {t.methodCore.modeStudent}
              </button>
              <button
                onClick={() => setComparisonTab('business')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  comparisonTab === 'business'
                    ? 'bg-[#325249] text-white shadow-xs'
                    : 'text-[#555555] hover:text-[#333333]'
                }`}
              >
                {t.methodCore.modePro}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Without C.O.R.E. */}
            <div className="bg-[#faf2f2] border border-[#f2d0d0] rounded-xl p-5">
              <div className="flex items-center gap-2 text-[#9e2a2b] font-bold text-sm mb-3">
                <div className="w-6 h-6 rounded-full bg-[#fce8e8] border border-[#f2d0d0] flex items-center justify-center">
                  <X className="w-3.5 h-3.5 text-[#9e2a2b]" />
                </div>
                <span>{language === 'fr' ? 'Sans la Méthode C.O.R.E. (L’Erreur Classique)' : 'Without C.O.R.E. (The Standard Mistake)'}</span>
              </div>

              {comparisonTab === 'student' ? (
                <ul className="space-y-2.5 text-xs text-[#555555]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#9e2a2b] font-bold">✕</span>
                    <span>
                      <strong className="text-[#333333]">
                        {language === 'fr' ? 'Fiches toutes faites :' : 'Pre-made sheets:'}
                      </strong>{' '}
                      {language === 'fr' ? 'Illusion de savoir, mais mémoire vide 48h après l’examen.' : 'Illusion of mastery, but memory empty 48h post-exam.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9e2a2b] font-bold">✕</span>
                    <span>
                      <strong className="text-[#333333]">
                        {language === 'fr' ? 'IA Béquille :' : 'AI Crutch:'}
                      </strong>{' '}
                      {language === 'fr' ? 'Utilisation passive de ChatGPT pour générer des réponses sans comprendre la logique.' : 'Passive prompting to generate answers without grasping internal logic.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9e2a2b] font-bold">✕</span>
                    <span>
                      <strong className="text-[#333333]">
                        {language === 'fr' ? 'Stress du Blocus :' : 'Blocus Panic:'}
                      </strong>{' '}
                      {language === 'fr' ? 'Travail désorganisé, nuits blanches et sentiment d’épuisement stérile.' : 'Disorganized study sprints, all-nighters, and unproductive burnout.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9e2a2b] font-bold">✕</span>
                    <span>
                      <strong className="text-[#333333]">
                        {language === 'fr' ? 'Soutien d’urgence :' : 'Emergency tutoring:'}
                      </strong>{' '}
                      {language === 'fr' ? 'Payer des heures de soutien pour faire le devoir du lendemain, sans progresser en méthode.' : 'Paying for tutoring hours to finish tomorrow’s homework without improving study methods.'}
                    </span>
                  </li>
                </ul>
              ) : (
                <ul className="space-y-2.5 text-xs text-[#555555]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#9e2a2b] font-bold">✕</span>
                    <span>
                      <strong className="text-[#333333]">
                        {language === 'fr' ? 'Empilement logiciel :' : 'Tool Bloat:'}
                      </strong>{' '}
                      {language === 'fr' ? '10 applications déconnectées qui créent de la confusion mentale.' : '10 disconnected apps causing cognitive clutter and friction.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9e2a2b] font-bold">✕</span>
                    <span>
                      <strong className="text-[#333333]">
                        {language === 'fr' ? 'Rapports de 50 pages :' : '50-page Slide Decks:'}
                      </strong>{' '}
                      {language === 'fr' ? 'Des recommandations théoriques, à mettre en œuvre seul.' : 'Theoretical recommendations you have to implement alone.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9e2a2b] font-bold">✕</span>
                    <span>
                      <strong className="text-[#333333]">
                        {language === 'fr' ? 'Fuites de rentabilité :' : 'Profit Leaks:'}
                      </strong>{' '}
                      {language === 'fr' ? '10 à 15 heures par semaine englouties dans l’administratif manuel.' : '10 to 15 hours each week lost in manual administrative tasks.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9e2a2b] font-bold">✕</span>
                    <span>
                      <strong className="text-[#333333]">
                        {language === 'fr' ? 'Contrats verrouillés :' : 'Rigid Retainers:'}
                      </strong>{' '}
                      {language === 'fr' ? 'Engagements longs et rigides, difficiles à évaluer.' : 'Long, rigid commitments that are hard to evaluate.'}
                    </span>
                  </li>
                </ul>
              )}
            </div>

            {/* With C.O.R.E. */}
            <div className="bg-[#d8e6e1]/40 border border-[#b8cec7] rounded-xl p-5">
              <div className="flex items-center gap-2 text-[#325249] font-bold text-sm mb-3">
                <div className="w-6 h-6 rounded-full bg-[#d8e6e1] border border-[#b8cec7] flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#325249]" />
                </div>
                <span>{language === 'fr' ? 'Avec Cognitive Studio (L’Armature C.O.R.E.)' : 'With Cognitive Studio (The C.O.R.E. Architecture)'}</span>
              </div>

              {comparisonTab === 'student' ? (
                <ul className="space-y-2.5 text-xs text-[#333333]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#325249] font-bold">✓</span>
                    <span>
                      <strong className="text-[#325249]">
                        {language === 'fr' ? 'Méthode « Zéro Support » :' : 'Zero-Support doctrine:'}
                      </strong>{' '}
                      {language === 'fr' ? 'L’élève déconstruit et reformule activement sa propre matière.' : 'Student actively deconstructs, synthesizes and owns the material.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#325249] font-bold">✓</span>
                    <span>
                      <strong className="text-[#325249]">
                        {language === 'fr' ? 'Maîtrise de l’outil :' : 'Tool Mastery:'}
                      </strong>{' '}
                      {language === 'fr' ? 'On apprend à penser sans la machine, pour mieux s’en servir ensuite.' : 'Think first without machines, then use technology wisely.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#325249] font-bold">✓</span>
                    <span>
                      <strong className="text-[#325249]">
                        {language === 'fr' ? 'Rétro-planning réaliste :' : 'Realistic Retro-Planning:'}
                      </strong>{' '}
                      {language === 'fr' ? 'Priorisation des coefficients, révisions calibrées et sérénité.' : 'Subject weighting priority, calibrated study blocks, and mental calm.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#325249] font-bold">✓</span>
                    <span>
                      <strong className="text-[#325249]">
                        {language === 'fr' ? 'Autonomie définitive :' : 'Lifelong Autonomy:'}
                      </strong>{' '}
                      {language === 'fr' ? 'Notre but ultime est que l’étudiant n’ait plus jamais besoin de nous.' : 'Our ultimate triumph is that students never need a tutor again.'}
                    </span>
                  </li>
                </ul>
              ) : (
                <ul className="space-y-2.5 text-xs text-[#333333]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#325249] font-bold">✓</span>
                    <span>
                      <strong className="text-[#325249]">
                        {language === 'fr' ? 'Second Cerveau Notion :' : 'Notion Second Brain:'}
                      </strong>{' '}
                      {language === 'fr' ? 'Centralisation épurée, ergonomique et adaptée à vos gestes réels.' : 'Streamlined, ergonomic hub designed around your actual workflow habits.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#325249] font-bold">✓</span>
                    <span>
                      <strong className="text-[#325249]">
                        {language === 'fr' ? '100% Opérationnel :' : '100% Operational:'}
                      </strong>{' '}
                      {language === 'fr' ? 'Nous créons vos systèmes, automatisons vos tâches et formons vos équipes.' : 'We build systems, automate tasks, and thoroughly train your team.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#325249] font-bold">✓</span>
                    <span>
                      <strong className="text-[#325249]">
                        {language === 'fr' ? 'Budget maîtrisé :' : 'Controlled budget:'}
                      </strong>{' '}
                      {language === 'fr' ? 'Formule directeur des opérations dès 490 € / mois, sans engagement.' : 'Fractional COO oversight from €490/month without rigid lock-in.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#325249] font-bold">✓</span>
                    <span>
                      <strong className="text-[#325249]">
                        {language === 'fr' ? 'Ligne directe WhatsApp :' : 'Direct WhatsApp line:'}
                      </strong>{' '}
                      {language === 'fr' ? 'Échanges en continu avec le fondateur, réponse sous 24 h.' : 'Ongoing chat directly with the founder, reply within 24 hours.'}
                    </span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
