import React, { useState } from 'react';
import { Download, Globe, Menu, X, ArrowUpRight, CheckCircle2, Disc3, ExternalLink } from 'lucide-react';

export default function Header({ lang, setLang, onOpenMediaKit }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    es: {
      nav: ['Inicio', 'Métricas', 'Redes IG', 'GGB Beats', 'Contenido Top', 'Galería', 'Tarifas', 'Contacto'],
      mediaKit: 'Descargar Media Kit',
      contact: 'Colaborar',
      labelLink: 'MYOOZ InC Sello Oficial'
    },
    en: {
      nav: ['Home', 'Metrics', 'IG Network', 'GGB Beats', 'Top Content', 'Gallery', 'Rates', 'Contact'],
      mediaKit: 'Download Media Kit',
      contact: 'Collaborate',
      labelLink: 'MYOOZ InC Official Label'
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
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-light)',
      padding: '0.75rem 0',
      boxShadow: '0 2px 15px rgba(0, 0, 0, 0.03)'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo with Official GGB Beats Circular Insignia */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => scrollTo('hero')}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--ginger-primary)',
            boxShadow: 'var(--ginger-glow)',
            background: '#0F172A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/images/ggbbeats-logo-circle.png" 
              alt="GGB Beats Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '1.18rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
              Ginger Boy <CheckCircle2 size={16} color="var(--ginger-primary)" />
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span>GGB Beats</span>
              <span style={{ color: 'var(--text-dim)' }}>•</span>
              <a 
                href="https://myoozinc.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#D97706', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                onClick={(e) => e.stopPropagation()}
              >
                MYOOZ InC <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }} className="desktop-nav">
          <button onClick={() => scrollTo('metrics')} style={navBtnStyle}>{t.nav[1]}</button>
          <button onClick={() => scrollTo('ecosystem')} style={navBtnStyle}>{t.nav[2]}</button>
          <button onClick={() => scrollTo('ggb-beats')} style={{ ...navBtnStyle, color: '#D97706', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Disc3 size={15} />
            <span>{t.nav[3]}</span>
          </button>
          <button onClick={() => scrollTo('featured')} style={navBtnStyle}>{t.nav[4]}</button>
          <button onClick={() => scrollTo('gallery')} style={navBtnStyle}>{t.nav[5]}</button>
          <button onClick={() => scrollTo('services')} style={navBtnStyle}>{t.nav[6]}</button>
          <button onClick={() => scrollTo('contact')} style={navBtnStyle}>{t.nav[7]}</button>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          
          {/* Lang Toggle */}
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            style={{
              background: '#F1F5F9',
              border: '1px solid var(--border-light)',
              color: 'var(--text-main)',
              padding: '0.45rem 0.8rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}
          >
            <Globe size={14} color="var(--ginger-primary)" />
            {lang.toUpperCase()}
          </button>

          {/* Media Kit PDF trigger */}
          <button 
            onClick={onOpenMediaKit}
            className="btn-secondary"
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}
          >
            <Download size={14} />
            <span className="hide-mobile">{t.mediaKit}</span>
          </button>

          {/* Direct CTA */}
          <button 
            onClick={() => scrollTo('contact')}
            className="btn-primary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
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

      <style>{`
        @media (max-width: 1024px) {
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
  fontSize: '0.9rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'var(--transition-smooth)'
};
