import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AnalyticsSection from './components/AnalyticsSection.jsx';
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

      {/* Main Sections */}
      <main>
        <Hero lang={lang} />
        
        <AnalyticsSection lang={lang} />

        {/* GGB Beats Section: Music & Sound Design */}
        <GGBBeatsSection lang={lang} />

        <FeaturedContent lang={lang} />

        <PhotoGallery lang={lang} />

        <ServicesRates lang={lang} onSelectPackage={handleSelectPackage} />

        <ContactSection lang={lang} preselectedPkg={preselectedPkg} />
      </main>

      {/* Footer */}
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
