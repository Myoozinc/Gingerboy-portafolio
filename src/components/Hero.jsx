import React from 'react';
import { Eye, Film, Sparkles, TrendingUp, Users, ArrowRight, ShieldCheck, MapPin, MousePointer, HeartHandshake } from 'lucide-react';

export default function Hero({ lang }) {
  const content = {
    es: {
      tag: 'PORTAFOLIO COMERCIAL & MEDIA KIT OFICIAL',
      title: 'Conecta tu Marca con una Audiencia Joven, Activa y Comprometida',
      subtitle: 'Creador de contenido enfocado en Estilo de Vida, Viajes y Experiencias. 23.2K+ Seguidores con 69.4% audiencia femenina y más de 658K visualizaciones totales.',
      ctaPrimary: 'Explorar Métricas',
      ctaSecondary: 'Solicitar Propuesta',
      badges: [
        { label: 'Seguidores Totales', val: '23,250', icon: Users, color: '#E05328', note: '+6.3% en 90 días' },
        { label: 'Visualizaciones Totales', val: '658,848', icon: Eye, color: '#D97706', note: '90 días de alcance' },
        { label: 'Audiencia Femenina', val: '69.4%', icon: HeartHandshake, color: '#E11D48', note: 'Ideal Moda/Lifestyle' },
        { label: 'Visitas al Perfil', val: '54,770', icon: MousePointer, color: '#7C3AED', note: '1,169 Clics en Link' }
      ]
    },
    en: {
      tag: 'OFFICIAL COMMERCIAL MEDIA KIT',
      title: 'Connect Your Brand with a Young, Active & Engaged Audience',
      subtitle: 'Content Creator specializing in Lifestyle, Travel, and Urban Experiences. 23.2K+ Followers with 69.4% female audience and over 658K total views.',
      ctaPrimary: 'Explore Metrics',
      ctaSecondary: 'Request Proposal',
      badges: [
        { label: 'Total Followers', val: '23,250', icon: Users, color: '#E05328', note: '+6.3% in 90 days' },
        { label: 'Total Impressions', val: '658,848', icon: Eye, color: '#D97706', note: '90-day reach' },
        { label: 'Female Audience', val: '69.4%', icon: HeartHandshake, color: '#E11D48', note: 'Ideal Fashion/Lifestyle' },
        { label: 'Profile Visits', val: '54,770', icon: MousePointer, color: '#7C3AED', note: '1,169 Bio Clicks' }
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

          {/* Left Column Text */}
          <div>
            <div className="section-tag">
              <Sparkles size={14} />
              {content.tag}
            </div>

            <h1 style={{
              fontSize: '3.2rem',
              lineHeight: 1.12,
              fontWeight: 800,
              marginBottom: '1.2rem',
              letterSpacing: '-0.03em',
              color: 'var(--text-main)'
            }}>
              Ginger Boy <br />
              <span className="gradient-text">Creator Commercial Hub</span>
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              maxWidth: '560px',
              fontWeight: '400',
              lineHeight: '1.6'
            }}>
              {content.subtitle}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <button onClick={() => scrollTo('metrics')} className="btn-primary">
                <span>{content.ctaPrimary}</span>
                <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-secondary">
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
              <span>Estadísticas verificadas directamente del Panel Profesional (Meta Insights)</span>
            </div>
          </div>

          {/* Right Column Profile Card */}
          <div style={{ position: 'relative' }}>
            
            <div className="glass-card" style={{
              padding: '1rem',
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
                position: 'relative'
              }}>
                <img 
                  src="/images/avatar.jpg" 
                  alt="Ginger Boy Creator"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }} 
                />
                
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 55%)'
                }} />

                <div style={{
                  position: 'absolute',
                  bottom: '1.2rem',
                  left: '1.2rem',
                  right: '1.2rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', color: '#FFF' }}>Ginger Boy</h3>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: '500' }}>
                        @gingerboy • 23.2K Followers
                      </p>
                    </div>
                    <span style={{
                      background: 'rgba(220, 38, 38, 0.2)',
                      color: '#FFF',
                      padding: '0.3rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}>
                      OPEN FOR COLLABS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pill Badge 1 */}
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
              gap: '0.75rem'
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
              gap: '0.75rem'
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

        {/* 4 Core Stat Cards Banner */}
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
