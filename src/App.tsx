import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MethodCORE } from './components/MethodCORE';
import { ServicesSection } from './components/ServicesSection';
import { DiagnosticSimulator } from './components/DiagnosticSimulator';
import { Comparisons } from './components/Comparisons';
import { FounderSection } from './components/FounderSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AudienceType, ServiceTier } from './types';
import { COMPANY_INFO } from './data/content';

function AppContent() {
  const [currentAudience, setCurrentAudience] = useState<AudienceType>('formules');
  const [selectedService, setSelectedService] = useState<ServiceTier | null>(null);

  const handleSelectService = (service: ServiceTier) => {
    setSelectedService(service);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Réservation : page de réservation en ligne si elle est configurée (COMPANY_INFO.bookingUrl),
  // sinon défilement vers le formulaire de contact.
  const handleOpenBooking = () => {
    if (COMPANY_INFO.bookingUrl) {
      window.open(COMPANY_INFO.bookingUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#e0e0db] text-[#333333] flex flex-col font-sans selection:bg-[#325249] selection:text-white">
      
      {/* Main Header with Navigation, Direct Actions & Language Switcher */}
      <Header 
        currentAudience={currentAudience}
        onSelectAudience={setCurrentAudience}
        onOpenBooking={handleOpenBooking}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          currentAudience={currentAudience}
          onSelectAudience={setCurrentAudience}
          onOpenBooking={handleOpenBooking}
        />

        {/* Method C.O.R.E. Interactive Explicator */}
        <MethodCORE />

        {/* Prestations & tarifs (100 % professionnels) */}
        <ServicesSection 
          currentAudience={currentAudience}
          onSelectAudience={setCurrentAudience}
          onSelectService={handleSelectService}
        />

        {/* Interactive Diagnostic & ROI Simulator */}
        <DiagnosticSimulator 
          onSelectService={handleSelectService}
        />

        {/* Side-by-Side Objective Comparisons */}
        <Comparisons />

        {/* Academic Founder Profile (Simon Maistriau) */}
        <FounderSection />

        {/* Field Testimonials & Real Impact */}
        <TestimonialsSection />

        {/* Categorized FAQ */}
        <FAQSection />

        {/* Direct Contact & Booking System */}
        <ContactSection 
          selectedService={selectedService}
          onClearService={() => setSelectedService(null)}
        />
      </main>

      {/* Full Belgian Legal Footer, Collaborations & Address */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
