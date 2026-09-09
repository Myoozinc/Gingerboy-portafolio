import React, { useState } from 'react';
import LobbyGate from './components/LobbyGate.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AnalyticsSection from './components/AnalyticsSection.jsx';
import ContentPillarsSection from './components/ContentPillarsSection.jsx';
import InstagramAccountsSection from './components/InstagramAccountsSection.jsx';
import GGBBeatsTrinity from './components/GGBBeatsTrinity.jsx';
import MYOOZRecordLabelSection from './components/MYOOZRecordLabelSection.jsx';
import FeaturedContent from './components/FeaturedContent.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import MusicProductionServicesSection from './components/MusicProductionServicesSection.jsx';
import BrandAdvertisingServicesSection from './components/BrandAdvertisingServicesSection.jsx';
import Footer from './components/Footer.jsx';
import AudioAtmospherePlayer from './components/AudioAtmospherePlayer.jsx';
import MediaKitPDFModal from './components/MediaKitPDFModal.jsx';

export default function App() {
  const [lang, setLang] = useState('es');
  const [currentUniverse, setCurrentUniverse] = useState('lobby'); // 'lobby', 'gingerboy', 'ggbbeats', 'label', 'prod_services', 'brand_services', 'all'
  const [activeFacet, setActiveFacet] = useState('ggbbeats'); // 'ggbbeats', 'dance', 'chill'
  const [isMediaKitOpen, setIsMediaKitOpen] = useState(false);

  // If in Lobby, show only the ultra-minimalist animated emblem gate
  if (currentUniverse === 'lobby') {
    return (
      <div style={{ minHeight: '100vh', background: '#070403' }}>
        <LobbyGate 
          onSelectUniverse={(universeId) => {
            setCurrentUniverse(universeId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          lang={lang} 
        />
        <MediaKitPDFModal 
          isOpen={isMediaKitOpen} 
          onClose={() => setIsMediaKitOpen(false)} 
          lang={lang} 
        />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      
      {/* Top Universe Dock & Navigation */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        onOpenMediaKit={() => setIsMediaKitOpen(true)} 
        currentUniverse={currentUniverse}
        onSelectUniverse={setCurrentUniverse}
      />

      <main style={{ paddingTop: '4rem' }}>
        
        {/* UNIVERSE 1: GINGER BOY (Public Figure, Tech & Travel) */}
        {(currentUniverse === 'gingerboy' || currentUniverse === 'all') && (
          <div>
            <Hero lang={lang} />
            <AnalyticsSection lang={lang} />
            <ContentPillarsSection lang={lang} />
            <PhotoGallery lang={lang} />
          </div>
        )}

        {/* UNIVERSE 2: GGB BEATS (Sonic Trinity & Production) */}
        {(currentUniverse === 'ggbbeats' || currentUniverse === 'all') && (
          <div>
            <GGBBeatsTrinity 
              activeFacet={activeFacet} 
              setActiveFacet={setActiveFacet} 
              lang={lang} 
            />
            <FeaturedContent lang={lang} />
          </div>
        )}

        {/* UNIVERSE 3: MYOOZ INC RECORD LABEL */}
        {(currentUniverse === 'label' || currentUniverse === 'all') && (
          <div>
            <MYOOZRecordLabelSection lang={lang} />
            <InstagramAccountsSection lang={lang} />
          </div>
        )}

        {/* UNIVERSE 4: SERVICIOS DE PRODUCCIÓN MUSICAL (GGB Beats & MYOOZ InC) */}
        {(currentUniverse === 'prod_services' || currentUniverse === 'services' || currentUniverse === 'all' || currentUniverse === 'ggbbeats') && (
          <div>
            <MusicProductionServicesSection lang={lang} />
          </div>
        )}

        {/* UNIVERSE 5: SERVICIOS DE PUBLICIDAD & ALIANZAS DE MARCA (Ginger Boy) */}
        {(currentUniverse === 'brand_services' || currentUniverse === 'services' || currentUniverse === 'all' || currentUniverse === 'gingerboy') && (
          <div>
            <BrandAdvertisingServicesSection 
              lang={lang} 
              onOpenMediaKit={() => setIsMediaKitOpen(true)} 
            />
          </div>
        )}

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
