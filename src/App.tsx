import React, { useState } from 'react';
import { SiteProvider, useSite } from './context/SiteContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { AdGallery } from './components/AdGallery';
import { PlatformsEcosystem } from './components/PlatformsEcosystem';
import { Portfolio } from './components/Portfolio';
import { CaseStudies } from './components/CaseStudies';
import { WhyChoose } from './components/WhyChoose';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { BlogInsights } from './components/BlogInsights';
import { FAQ } from './components/FAQ';
import { ConsultationBooking } from './components/ConsultationBooking';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { AdminPanel } from './components/AdminPanel';
import { CvModal, PrivacyModal, TermsModal } from './components/Modals';

function MainApp() {
  const { siteData, adminOpen, openAdmin, closeAdmin, saveSiteData, resetSiteData } = useSite();
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string | undefined>();
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForInquiry(serviceName);
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      const topOffset = 80;
      const elementPosition = contactElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      const topOffset = 80;
      const elementPosition = contactElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = () => {
    const consultationElement = document.querySelector('#consultation');
    if (consultationElement) {
      const topOffset = 80;
      const elementPosition = consultationElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top sticky navigation bar */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onOpenAdmin={openAdmin}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Stats Strip */}
        <StatsStrip />

        {/* 3. About Section */}
        <About
          onOpenCvModal={() => setCvModalOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* 4. Core Expertise Section */}
        <Expertise onSelectService={handleSelectService} />

        {/* 5. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 6. Pricing & Service Packages Section */}
        <Pricing
          packages={siteData.pricingPackages}
          onSelectPackage={handleSelectService}
          whatsappNumber={siteData.contact.whatsappNumber}
        />

        {/* 7. Campaign Proof & Ad Creatives Gallery (Google, Meta, TikTok, Instagram) */}
        <AdGallery
          items={siteData.adGallery}
          whatsappNumber={siteData.contact.whatsappNumber}
        />

        {/* 8. Advertising Platforms Ecosystem */}
        <PlatformsEcosystem />

        {/* 8. Portfolio Showcase */}
        <Portfolio />

        {/* 9. Case Studies & Results */}
        <CaseStudies />

        {/* 10. Why Choose Faizan Bhatti */}
        <WhyChoose />

        {/* 11. Client Testimonials */}
        <Testimonials />

        {/* 12. Brands & Partners */}
        <Partners />

        {/* 13. Digital Marketing Insights / Blog */}
        <BlogInsights />

        {/* 14. FAQ Section */}
        <FAQ />

        {/* 15. Book a Strategy Consultation */}
        <ConsultationBooking />

        {/* 16. Contact & Business Inquiry */}
        <Contact preselectedService={selectedServiceForInquiry} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenTerms={() => setTermsModalOpen(true)}
        onOpenAdmin={openAdmin}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloating />

      {/* Master English Admin Panel */}
      <AdminPanel
        isOpen={adminOpen}
        onClose={closeAdmin}
        siteData={siteData}
        onSaveSiteData={saveSiteData}
        onResetSiteData={resetSiteData}
      />

      {/* Modals */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <SiteProvider>
      <MainApp />
    </SiteProvider>
  );
}
