import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AnalyticsSection from './components/AnalyticsSection.jsx';
import ContentPillarsSection from './components/ContentPillarsSection.jsx';
import InstagramAccountsSection from './components/InstagramAccountsSection.jsx';
import GGBBeatsTrinity from './components/GGBBeatsTrinity.jsx';
import MYOOZRecordLabelSection from './components/MYOOZRecordLabelSection.jsx';
import FeaturedContent from './components/FeaturedContent.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import ServicesHub from './components/ServicesHub.jsx';
import Footer from './components/Footer.jsx';
import AudioAtmospherePlayer from './components/AudioAtmospherePlayer.jsx';
import MediaKitPDFModal from './components/MediaKitPDFModal.jsx';

export default function App() {
  const [lang, setLang] = useState('es');
  const [isMediaKitOpen, setIsMediaKitOpen] = useState(false);
  const [activeFacet, setActiveFacet] = useState('ggbbeats'); // 'ggbbeats', 'dance', 'chill'
  const [preselectedPkg, setPreselectedPkg] = useState(null);

  const handleSelectPackage = (pkg) => {
    setPreselectedPkg(pkg);
    const el = document.getElementById('services-hub');
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
        {/* 1. Hero: Ginger Boy - Public Figure & Tech Innovator */}
        <Hero lang={lang} />
        
        {/* 2. Verified 90-Day Analytics & Growth */}
        <AnalyticsSection lang={lang} />

        {/* 3. The 4 Core Content Pillars of Ginger Boy (Lifestyle, Travel, Apps, Brand) */}
        <ContentPillarsSection lang={lang} />

        {/* 4. Official 4 Instagram Accounts Network */}
        <InstagramAccountsSection lang={lang} />

        {/* 5. GGB Beats Trinity: 3 Identical Logos with Light Beams on Infinite White Canvas */}
        <GGBBeatsTrinity 
          activeFacet={activeFacet} 
          setActiveFacet={setActiveFacet} 
          lang={lang} 
        />

        {/* 6. MYOOZ InC Record Label Section: Artists Roster (Rasta Mia, JOSS, etc.) & Merch */}
        <MYOOZRecordLabelSection lang={lang} />

        {/* 7. Interactive Multi-Slide Instagram Carousel & Top Reels Performance */}
        <FeaturedContent lang={lang} />

        {/* 8. Official Photography & Streetwear Lookbook */}
        <PhotoGallery lang={lang} />

        {/* 9. Reserved Business Space: "¿Quieres trabajar conmigo? / ¿Necesitas un servicio?" */}
        <ServicesHub 
          lang={lang} 
          preselectedPkg={preselectedPkg} 
        />
      </main>

      {/* Footer with Label & Social Links */}
      <Footer lang={lang} />

      {/* Floating GGB Beats Dynamic Audio Atmosphere Player */}
      <AudioAtmospherePlayer 
        activeFacet={activeFacet} 
        lang={lang} 
      />

      {/* Media Kit PDF Download Modal */}
      <MediaKitPDFModal 
        isOpen={isMediaKitOpen} 
        onClose={() => setIsMediaKitOpen(false)} 
        lang={lang} 
      />
    </div>
  );
}
