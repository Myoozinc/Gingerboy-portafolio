import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AnalyticsSection from './components/AnalyticsSection.jsx';
import ContentPillarsSection from './components/ContentPillarsSection.jsx';
import InstagramAccountsSection from './components/InstagramAccountsSection.jsx';
import GGBBeatsSection from './components/GGBBeatsSection.jsx';
import FeaturedContent from './components/FeaturedContent.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import ServicesRates from './components/ServicesRates.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import MediaKitPDFModal from './components/MediaKitPDFModal.jsx';

export default function App() {
  const [lang, setLang] = useState('es');
  const [isMediaKitOpen, setIsMediaKitOpen] = useState(false);
  const [preselectedPkg, setPreselectedPkg] = useState(null);

  const handleSelectPackage = (pkg) => {
    setPreselectedPkg(pkg);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Header Bar */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        onOpenMediaKit={() => setIsMediaKitOpen(true)} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero lang={lang} />
        
        {/* Verified 90-Day Analytics & Growth */}
        <AnalyticsSection lang={lang} />

        {/* The 4 Core Content Pillars of Ginger Boy */}
        <ContentPillarsSection lang={lang} />

        {/* Official 4 Instagram Accounts Network */}
        <InstagramAccountsSection lang={lang} />

        {/* GGB Beats: Spotify Player, YouTube Releases & Beat Licensing */}
        <GGBBeatsSection lang={lang} />

        {/* Top Reels Performance */}
        <FeaturedContent lang={lang} />

        {/* Official Photography Lookbook */}
        <PhotoGallery lang={lang} />

        {/* Collaboration Packages & Calculator */}
        <ServicesRates lang={lang} onSelectPackage={handleSelectPackage} />

        {/* Direct Commercial Booking & Inquiry Form */}
        <ContactSection lang={lang} preselectedPkg={preselectedPkg} />
      </main>

      {/* Footer with Label & Social Links */}
      <Footer lang={lang} />

      {/* Media Kit PDF Download Modal */}
      <MediaKitPDFModal 
        isOpen={isMediaKitOpen} 
        onClose={() => setIsMediaKitOpen(false)} 
        lang={lang} 
      />
    </div>
  );
}
