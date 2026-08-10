import React, { useState } from 'react';
import { Sparkles, Download, Globe, Menu, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Header({ lang, setLang, onOpenMediaKit }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    es: {
      nav: ['Inicio', 'Métricas', 'Contenido Top', 'Galería', 'Servicios', 'Contacto'],
      mediaKit: 'Descargar Media Kit',
      contact: 'Colaborar',
    },
    en: {
      nav: ['Home', 'Metrics', 'Top Content', 'Gallery', 'Services', 'Contact'],
      mediaKit: 'Download Media Kit',
      contact: 'Collaborate',
    }
  }[lang];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(9, 11, 16, 0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-light)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => scrollTo('hero')}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'var(--ginger-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            fontSize: '1.2rem',
            color: '#FFF',
            boxShadow: 'var(--ginger-glow)'
          }}>
            GB
          </div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '1.25rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              Ginger Boy <CheckCircle2 size={16} color="#FF5E36" fill="rgba(255, 94, 54, 0.2)" />
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Creator & Influencer Media Kit
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <button onClick={() => scrollTo('metrics')} style={navBtnStyle}>{t.nav[1]}</button>
          <button onClick={() => scrollTo('featured')} style={navBtnStyle}>{t.nav[2]}</button>
          <button onClick={() => scrollTo('gallery')} style={navBtnStyle}>{t.nav[3]}</button>
          <button onClick={() => scrollTo('services')} style={navBtnStyle}>{t.nav[4]}</button>
          <button onClick={() => scrollTo('contact')} style={navBtnStyle}>{t.nav[5]}</button>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          
          {/* Lang Toggle */}
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-light)',
              color: '#FFF',
              padding: '0.5rem 0.8rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}
          >
            <Globe size={14} color="#FF9E2C" />
            {lang.toUpperCase()}
          </button>

          {/* Media Kit PDF trigger */}
          <button 
            onClick={onOpenMediaKit}
            className="btn-secondary"
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
          >
            <Download size={14} />
            <span className="hide-mobile">{t.mediaKit}</span>
          </button>

          {/* Direct CTA */}
          <button 
            onClick={() => scrollTo('contact')}
            className="btn-primary"
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
          >
            <span>{t.contact}</span>
            <ArrowUpRight size={14} />
          </button>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFF',
              display: 'none',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .hide-mobile { display: none; }
        }
      `}</style>
    </header>
  );
}

const navBtnStyle = {
  background: 'none',
  border: 'none',
  color: 'var(--text-muted)',
  fontSize: '0.95rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'var(--transition-fast)',
  ':hover': { color: '#FFF' }
};
