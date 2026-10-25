import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import Estimator from './components/Estimator';
import DiagnosticTool from './components/DiagnosticTool';
import Gallery from './components/Gallery';
import About from './components/About';
import DistrictCoverage from './components/DistrictCoverage';
import Blog from './components/Blog';
import EmergencyBanner from './components/EmergencyBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileActionDock from './components/MobileActionDock';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState('Plumbing repairs');
  const [prefilledContact, setPrefilledContact] = useState(null);

  const handleOpenQuote = (service = 'Plumbing repairs') => {
    setQuoteService(service);
    setIsQuoteOpen(true);
  };

  const handleSelectServiceForQuote = (serviceName) => {
    setQuoteService(serviceName);
    setPrefilledContact({
      service: serviceName,
      details: `Inquiring about ${serviceName}. Please provide availability and quote.`
    });
    
    // Smooth scroll to contact
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      const topOffset = 80;
      const pos = contactEl.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleEstimateToForm = (estimateData) => {
    setPrefilledContact(estimateData);
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      const topOffset = 80;
      const pos = contactEl.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-surface flex flex-col font-sans relative selection:bg-brand-primary selection:text-white">
      {/* Main Navigation — fixed, floating pill on scroll */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Interactive Live Configurator & Hotspots */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 3-Pillar Bento Trust Strip */}
        <TrustStrip />

        {/* Core 6 Services with Category Filters */}
        <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Interactive Scope & Cost Estimator */}
        <Estimator onSendEstimateToForm={handleEstimateToForm} />

        {/* Interactive Self-Diagnostic Troubleshooter */}
        <DiagnosticTool onOpenQuote={handleOpenQuote} />

        {/* Filterable Portfolio & Multi-Project Before/After Transformation Studio */}
        <Gallery onOpenQuote={handleOpenQuote} />

        {/* About Section */}
        <About onOpenQuote={() => handleOpenQuote()} />

        {/* Interactive Mauritius District Coverage Network */}
        <DistrictCoverage onOpenQuote={handleOpenQuote} />

        {/* Practical Blog Insights */}
        <Blog onOpenQuote={() => handleOpenQuote()} />

        {/* Emergency Call to Action Banner */}
        <EmergencyBanner onOpenQuote={() => handleOpenQuote()} />

        {/* Full Contact Form & Operations Details */}
        <ContactSection 
          prefilledData={prefilledContact} 
          clearPrefilled={() => setPrefilledContact(null)} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Dock */}
      <MobileActionDock onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Global Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialService={quoteService}
      />
    </div>
  );
}
