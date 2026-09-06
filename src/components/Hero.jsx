import React, { useState } from 'react';
import { Eye, Film, Sparkles, TrendingUp, Users, ArrowRight, ShieldCheck, MapPin, MousePointer, HeartHandshake, Disc3, Headphones } from 'lucide-react';

export default function Hero({ lang }) {
  const [activePersona, setActivePersona] = useState('creator'); // 'creator' | 'producer'

  const content = {
    es: {
      tag: 'PORTAFOLIO OFICIAL & MEDIA KIT COMERCIAL',
      title: 'Ginger Boy',
      role: 'Content Creator & Music Producer',
      brandSubtitle: 'Creador de contenido urbano y de estilo de vida, complementado con la producción musical de GGB Beats. Formatos dinámicos, alta retención y 658K+ visualizaciones.',
      ctaPrimary: 'Explorar Métricas',
      ctaSecondary: 'GGB Beats Audio Sync',
      personaCreator: 'Lifestyle & Urban Creator',
      personaProducer: 'GGB Beats Studio Producer',
      badges: [
        { label: 'Seguidores Activos', val: '23,250', icon: Users, color: '#E05328', note: '+6.3% en 90 días' },
        { label: 'Visualizaciones Totales', val: '658,848', icon: Eye, color: '#D97706', note: '52.2% no seguidores (viral)' },
        { label: 'Audiencia Femenina', val: '69.4%', icon: HeartHandshake, color: '#E11D48', note: 'Moda, Estilo & Cultura' },
        { label: 'Visitas al Perfil', val: '54,770', icon: MousePointer, color: '#7C3AED', note: '1,169 clics en web/link' }
      ]
    },
    en: {
      tag: 'OFFICIAL COMMERCIAL PORTFOLIO & MEDIA KIT',
      title: 'Ginger Boy',
      role: 'Content Creator & Music Producer',
      brandSubtitle: 'Urban lifestyle content creator and music producer behind GGB Beats. Dynamic formats, high engagement, and 658K+ total impressions.',
      ctaPrimary: 'Explore Metrics',
      ctaSecondary: 'GGB Beats Audio Sync',
      personaCreator: 'Lifestyle & Urban Creator',
      personaProducer: 'GGB Beats Studio Producer',
      badges: [
        { label: 'Total Followers', val: '23,250', icon: Users, color: '#E05328', note: '+6.3% in 90 days' },
        { label: 'Total Impressions', val: '658,848', icon: Eye, color: '#D97706', note: '52.2% viral discovery' },
        { label: 'Female Audience', val: '69.4%', icon: HeartHandshake, color: '#E11D48', note: 'Fashion, Lifestyle & Arts' },
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
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Column */}
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

            {/* Dual Brand Tags */}
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
                📸 Urban & Travel Creator
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
                GGB Beats Music Studio
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
                <Headphones size={16} />
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

          {/* Right Column: Interactive Persona Card Switcher */}
          <div style={{ position: 'relative' }}>
            
            {/* Persona Toggle Bar */}
            <div style={{
              display: 'flex',
              background: '#F1F5F9',
              padding: '0.35rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem',
              border: '1px solid var(--border-light)'
            }}>
              <button
                onClick={() => setActivePersona('creator')}
                style={{
                  flex: 1,
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: 'var(--radius-full)',
                  background: activePersona === 'creator' ? '#FFFFFF' : 'transparent',
                  color: activePersona === 'creator' ? 'var(--ginger-primary)' : 'var(--text-muted)',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  boxShadow: activePersona === 'creator' ? 'var(--shadow-sm)' : 'none',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {content.personaCreator}
              </button>
              <button
                onClick={() => setActivePersona('producer')}
                style={{
                  flex: 1,
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: 'var(--radius-full)',
                  background: activePersona === 'producer' ? '#FFFFFF' : 'transparent',
                  color: activePersona === 'producer' ? '#D97706' : 'var(--text-muted)',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  boxShadow: activePersona === 'producer' ? 'var(--shadow-sm)' : 'none',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {content.personaProducer}
              </button>
            </div>

            {/* Profile Card */}
            <div className="glass-card" style={{
              padding: '0.9rem',
              borderRadius: '24px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-lg)',
              background: '#FFFFFF',
              position: 'relative'
            }}>
              <div style={{
                width: '100%',
                height: '420px',
                borderRadius: '18px',
                overflow: 'hidden',
                position: 'relative',
                background: '#0F172A'
              }}>
                <img 
                  src={activePersona === 'creator' ? '/images/ggb_streetwear.jpg' : '/images/ggb_studio.jpg'} 
                  alt="Ginger Boy & GGB Beats"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transition: 'all 0.5s ease'
                  }} 
                />
                
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 60%)'
                }} />

                <div style={{
                  position: 'absolute',
                  bottom: '1.2rem',
                  left: '1.2rem',
                  right: '1.2rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.35rem', color: '#FFF' }}>
                        {activePersona === 'creator' ? 'Ginger Boy' : 'GGB Beats'}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: activePersona === 'creator' ? 'var(--ginger-primary)' : '#F59E0B', fontWeight: '600' }}>
                        {activePersona === 'creator' ? '@gingerboy • 23.2K Followers' : 'Studio Music Producer • Sound Design'}
                      </p>
                    </div>
                    <span style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      color: '#FFF',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}>
                      OPEN FOR BRANDS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pill Badge 1 */}
            <div style={{
              position: 'absolute',
              top: '3.5rem',
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

            {/* Pill Badge 2 */}
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
                <Disc3 size={18} />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-main)' }}>GGB Beats</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '600' }}>Music & Beatmaker</div>
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
