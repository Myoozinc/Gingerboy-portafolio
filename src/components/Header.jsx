import React, { useState } from 'react';
import { Download, Globe, Menu, X, ArrowUpRight, CheckCircle2, Disc3, ExternalLink, Sparkles, Briefcase, Home, Layers, Compass } from 'lucide-react';

export default function Header({ lang, setLang, onOpenMediaKit, currentUniverse, onSelectUniverse }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    es: {
      lobby: 'Lobby',
      gingerboy: 'Ginger Boy',
      ggbbeats: 'GGB Beats',
      label: 'MYOOZ InC',
      services: 'Servicios & Booking',
      all: 'Ver Todo',
      mediaKit: 'Media Kit PDF'
    },
    en: {
      lobby: 'Lobby',
      gingerboy: 'Ginger Boy',
      ggbbeats: 'GGB Beats',
      label: 'MYOOZ InC',
      services: 'Services & Booking',
      all: 'View All',
      mediaKit: 'Media Kit PDF'
    }
  }[lang];

  const handleNavClick = (universeId) => {
    setMobileMenuOpen(false);
    onSelectUniverse(universeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.94)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-light)',
      padding: '0.65rem 0',
      boxShadow: '0 2px 15px rgba(0, 0, 0, 0.03)'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Return to Lobby Brand Button */}
        <div 
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} 
          onClick={() => handleNavClick('lobby')}
          title="Regresar al Lobby Principal"
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--ginger-primary)',
            boxShadow: 'var(--ginger-glow)',
            background: '#0F172A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <img 
              src="/images/ggbbeats-logo-circle.png" 
              alt="GGB Beats Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <div style={{ fontWeight: '800', fontSize: '1.05rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-main)' }}>
              <span>Ginger Boy</span>
              <span style={{ fontSize: '0.72rem', color: '#E05328', background: 'rgba(224, 83, 40, 0.1)', padding: '0.1rem 0.4rem', borderRadius: '6px', fontWeight: '800' }}>LOBBY</span>
            </div>
          </div>
        </div>

        {/* Minimalist Floating Universe Switcher Tabs */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          background: '#F1F5F9',
          padding: '0.3rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-light)'
        }} className="desktop-dock">
          
          <button
            onClick={() => handleNavClick('gingerboy')}
            style={getDockTabStyle(currentUniverse === 'gingerboy', '#E05328')}
          >
            <Compass size={14} />
            <span>{t.gingerboy}</span>
          </button>

          <button
            onClick={() => handleNavClick('ggbbeats')}
            style={getDockTabStyle(currentUniverse === 'ggbbeats', '#D97706')}
          >
            <Disc3 size={14} />
            <span>{t.ggbbeats}</span>
          </button>

          <button
            onClick={() => handleNavClick('label')}
            style={getDockTabStyle(currentUniverse === 'label', '#0F172A')}
          >
            <Layers size={14} />
            <span>{t.label}</span>
          </button>

          <button
            onClick={() => handleNavClick('services')}
            style={getDockTabStyle(currentUniverse === 'services', '#059669')}
          >
            <Briefcase size={14} />
            <span>{t.services}</span>
          </button>

          <button
            onClick={() => handleNavClick('all')}
            style={getDockTabStyle(currentUniverse === 'all', 'var(--text-main)')}
          >
            <span>{t.all}</span>
          </button>
        </nav>

        {/* Actions: Lang & Media Kit */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          
          {/* Lang Toggle */}
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            style={{
              background: '#F1F5F9',
              border: '1px solid var(--border-light)',
              color: 'var(--text-main)',
              padding: '0.4rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.82rem',
              fontWeight: '700'
            }}
          >
            <Globe size={13} color="var(--ginger-primary)" />
            {lang.toUpperCase()}
          </button>

          {/* Media Kit PDF */}
          <button 
            onClick={onOpenMediaKit}
            className="btn-secondary"
            style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}
          >
            <Download size={13} />
            <span className="hide-mobile">{t.mediaKit}</span>
          </button>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              display: 'none',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#FFFFFF',
          borderTop: '1px solid var(--border-light)',
          padding: '1.2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <button onClick={() => handleNavClick('lobby')} style={mobileBtnStyle}>
            <Home size={16} />
            <span>{t.lobby} Principal</span>
          </button>
          <button onClick={() => handleNavClick('gingerboy')} style={mobileBtnStyle}>
            <Compass size={16} color="#E05328" />
            <span>{t.gingerboy} (Figura Pública & Tech)</span>
          </button>
          <button onClick={() => handleNavClick('ggbbeats')} style={mobileBtnStyle}>
            <Disc3 size={16} color="#D97706" />
            <span>{t.ggbbeats} (Trinidad Sonora)</span>
          </button>
          <button onClick={() => handleNavClick('label')} style={mobileBtnStyle}>
            <Layers size={16} />
            <span>{t.label} (Sello Discográfico)</span>
          </button>
          <button onClick={() => handleNavClick('services')} style={mobileBtnStyle}>
            <Briefcase size={16} color="#059669" />
            <span>{t.services} (Calculadora & Tarifas)</span>
          </button>
          <button onClick={() => handleNavClick('all')} style={mobileBtnStyle}>
            <span>{t.all} (Ecosistema Continuo)</span>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 1040px) {
          .desktop-dock { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .hide-mobile { display: none; }
        }
      `}</style>
    </header>
  );
}

const getDockTabStyle = (isActive, activeColor) => ({
  background: isActive ? '#FFFFFF' : 'transparent',
  color: isActive ? activeColor : 'var(--text-muted)',
  border: 'none',
  padding: '0.45rem 1rem',
  borderRadius: 'var(--radius-full)',
  fontSize: '0.82rem',
  fontWeight: isActive ? '800' : '600',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.35rem',
  boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
  transition: 'var(--transition-smooth)'
});

const mobileBtnStyle = {
  background: '#F8FAFC',
  border: '1px solid var(--border-light)',
  padding: '0.75rem 1rem',
  borderRadius: '12px',
  color: 'var(--text-main)',
  fontSize: '0.9rem',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  cursor: 'pointer',
  textAlign: 'left'
};
