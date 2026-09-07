import React from 'react';
import { Eye, Film, Sparkles, TrendingUp, Users, ArrowRight, ShieldCheck, MapPin, MousePointer, HeartHandshake, Disc3, ExternalLink } from 'lucide-react';

export default function Hero({ lang }) {
  const content = {
    es: {
      tag: 'PORTAFOLIO COMERCIAL OFICIAL & MEDIA KIT',
      title: 'Ginger Boy',
      role: 'Creador, Figura Pública & Tech Innovator',
      producerNote: 'Productor Musical & Beatmaker en MYOOZ InC (GGB Beats)',
      brandSubtitle: 'Portafolio comercial oficial de Ginger Boy (@gingerboyofficial): creador de contenido de viajes y estilo de vida, desarrollador de proyectos tecnológicos con impacto social, e impulsor del sistema musical GGB Beats (@gingerboybeats).',
      ctaPrimary: 'Explorar Métricas',
      ctaSecondary: 'GGB Beats Music Wing',
      badges: [
        { label: 'Seguidores Activos', val: '23,250', icon: Users, color: '#E05328', note: '+6.3% en 90 días' },
        { label: 'Visualizaciones Totales', val: '658,848', icon: Eye, color: '#D97706', note: '52.2% no seguidores (viral)' },
        { label: 'Audiencia Femenina', val: '69.4%', icon: HeartHandshake, color: '#E11D48', note: 'Moda, Cultura & Lifestyle' },
        { label: 'Visitas al Perfil', val: '54,770', icon: MousePointer, color: '#7C3AED', note: '1,169 clics en web/link' }
      ]
    },
    en: {
      tag: 'OFFICIAL COMMERCIAL PORTFOLIO & MEDIA KIT',
      title: 'Ginger Boy',
      role: 'Creator, Public Figure & Tech Innovator',
      producerNote: 'Music Producer & Beatmaker at MYOOZ InC (GGB Beats)',
      brandSubtitle: 'Official commercial media kit for Ginger Boy (@gingerboyofficial): lifestyle & travel creator, humanitarian tech developer, and producer behind the GGB Beats sonic system (@gingerboybeats).',
      ctaPrimary: 'Explore Metrics',
      ctaSecondary: 'GGB Beats Music Wing',
      badges: [
        { label: 'Total Followers', val: '23,250', icon: Users, color: '#E05328', note: '+6.3% in 90 days' },
        { label: 'Total Impressions', val: '658,848', icon: Eye, color: '#D97706', note: '52.2% viral discovery' },
        { label: 'Female Audience', val: '69.4%', icon: HeartHandshake, color: '#E11D48', note: 'Fashion, Lifestyle & Culture' },
        { label: 'Profile Visits', val: '54,770', icon: MousePointer, color: '#7C3AED', note: '1,169 bio link clicks' }
      ]
    }
  }[lang];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{
      paddingTop: '8.5rem',
      paddingBottom: '4.5rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Column: Text & Hierarchy */}
          <div>
            <div className="section-tag">
              <Sparkles size={14} />
              {content.tag}
            </div>

            <h1 style={{
              fontSize: '3.4rem',
              lineHeight: 1.1,
              fontWeight: 800,
              marginBottom: '0.4rem',
              letterSpacing: '-0.03em',
              color: 'var(--text-main)'
            }}>
              Ginger Boy <br />
              <span className="gradient-text">{content.role}</span>
            </h1>

            {/* Facets Badges */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', margin: '1rem 0 1.5rem 0' }}>
              <span style={{
                background: '#F1F5F9',
                color: 'var(--text-main)',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: '700',
                border: '1px solid var(--border-light)'
              }}>
                @gingerboyofficial • Figura Pública
              </span>
              <span style={{
                background: 'rgba(217, 119, 6, 0.1)',
                color: '#D97706',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: '700',
                border: '1px solid rgba(217, 119, 6, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
                <Disc3 size={13} />
                GGB Beats (@gingerboybeats) • MYOOZ InC
              </span>
            </div>

            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              maxWidth: '560px',
              fontWeight: '400',
              lineHeight: '1.6'
            }}>
              {content.brandSubtitle}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <button onClick={() => scrollTo('metrics')} className="btn-primary">
                <span>{content.ctaPrimary}</span>
                <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollTo('ggb-beats')} className="btn-secondary" style={{ borderColor: '#D97706', color: '#D97706' }}>
                <Disc3 size={16} />
                <span>{content.ctaSecondary}</span>
              </button>
            </div>

            {/* Trust Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.6rem 1.2rem',
              background: '#FFFFFF',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <ShieldCheck size={16} color="#10B981" />
              <span>Estadísticas verificadas de los últimos 90 días (Meta Business Insights)</span>
            </div>
          </div>

          {/* Right Column: High Resolution Official Brand Emblem Card */}
          <div style={{ position: 'relative' }}>
            
            <div className="glass-card" style={{
              padding: '2.5rem 2rem',
              borderRadius: '28px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-lg)',
              background: '#FFFFFF',
              position: 'relative',
              textAlign: 'center'
            }}>
              
              {/* High Resolution Official GGB Beats Circular Emblem (1080x1080) */}
              <div style={{
                width: '170px',
                height: '170px',
                margin: '0 auto 1.5rem auto',
                borderRadius: '50%',
                overflow: 'hidden',
                background: '#0F172A',
                border: '4px solid var(--ginger-primary)',
                boxShadow: 'var(--ginger-glow)',
                position: 'relative'
              }}>
                <img 
                  src="/images/ggbbeats-logo-circle.png" 
                  alt="GGB Beats & Ginger Boy Emblem" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{
                display: 'inline-block',
                background: 'rgba(224, 83, 40, 0.1)',
                color: 'var(--ginger-primary)',
                padding: '0.25rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: '800',
                letterSpacing: '0.08em',
                marginBottom: '0.6rem'
              }}>
                MYOOZ INC TALENT ROSTER
              </div>

              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                Ginger Boy
              </h2>

              <p style={{ fontSize: '0.95rem', color: '#D97706', fontWeight: '700', marginBottom: '1rem' }}>
                @gingerboyofficial • @gingerboybeats
              </p>

              <div style={{
                background: '#F8FAFC',
                borderRadius: '16px',
                padding: '1rem',
                border: '1px solid var(--border-light)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.8rem',
                textAlign: 'left',
                fontSize: '0.82rem'
              }}>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>Sello Discográfico:</span>
                  <a href="https://myoozinc.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: '700', color: 'var(--text-main)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    MYOOZ InC <ExternalLink size={11} />
                  </a>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>Audiencia Core:</span>
                  <strong style={{ color: 'var(--ginger-primary)' }}>69.4% Femenina</strong>
                </div>
              </div>

            </div>

            {/* Pill Badge 1: Followers */}
            <div style={{
              position: 'absolute',
              top: '-1.2rem',
              right: '-1.2rem',
              background: '#FFFFFF',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '0.75rem 1.1rem',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              zIndex: 2
            }}>
              <div style={{
                background: 'var(--ginger-light)',
                padding: '0.5rem',
                borderRadius: '50%',
                color: 'var(--ginger-primary)'
              }}>
                <Users size={18} />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-main)' }}>23.2K</div>
                <div style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: '700' }}>+6.3% Crecimiento</div>
              </div>
            </div>

            {/* Pill Badge 2: Total Impressions */}
            <div style={{
              position: 'absolute',
              bottom: '-1rem',
              left: '-1.2rem',
              background: '#FFFFFF',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '0.75rem 1.1rem',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              zIndex: 2
            }}>
              <div style={{
                background: 'rgba(217, 119, 6, 0.12)',
                padding: '0.5rem',
                borderRadius: '50%',
                color: 'var(--gold-accent)'
              }}>
                <Eye size={18} />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-main)' }}>658,848</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '600' }}>Vistas Totales</div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Stat Cards */}
        <div className="grid-4" style={{ marginTop: '4.5rem' }}>
          {content.badges.map((b, i) => {
            const IconComp = b.icon;
            return (
              <div key={i} className="glass-card" style={{
                padding: '1.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: '#FFFFFF'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: `${b.color}12`,
                  border: `1px solid ${b.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: b.color,
                  flexShrink: 0
                }}>
                  <IconComp size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: 1.1 }}>
                    {b.val}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {b.label}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: b.color, fontWeight: '700', marginTop: '0.1rem' }}>
                    {b.note}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
