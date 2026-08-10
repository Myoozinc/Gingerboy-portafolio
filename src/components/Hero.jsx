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
        { label: 'Seguidores Totales', val: '23,250', icon: Users, color: '#FF5E36', note: '+6.3% en 90 días' },
        { label: 'Visualizaciones Totales', val: '658,848', icon: Eye, color: '#FF9E2C', note: '90 días de alcance' },
        { label: 'Audiencia Femenina', val: '69.4%', icon: HeartHandshake, color: '#EC4899', note: 'Ideal Moda/Lifestyle' },
        { label: 'Visitas al Perfil', val: '54,770', icon: MousePointer, color: '#8B5CF6', note: '1,169 Clics en Link' }
      ]
    },
    en: {
      tag: 'COMMERCIAL MEDIA KIT & OFFICIAL PORTFOLIO',
      title: 'Connect Your Brand with a Young, Active & Engaged Audience',
      subtitle: 'Content Creator specializing in Lifestyle, Travel, and Urban Experiences. 23.2K+ Followers with 69.4% female audience and over 658K total views.',
      ctaPrimary: 'Explore Metrics',
      ctaSecondary: 'Request Proposal',
      badges: [
        { label: 'Total Followers', val: '23,250', icon: Users, color: '#FF5E36', note: '+6.3% in 90 days' },
        { label: 'Total Impressions', val: '658,848', icon: Eye, color: '#FF9E2C', note: '90-day reach' },
        { label: 'Female Audience', val: '69.4%', icon: HeartHandshake, color: '#EC4899', note: 'Ideal Fashion/Lifestyle' },
        { label: 'Profile Visits', val: '54,770', icon: MousePointer, color: '#8B5CF6', note: '1,169 Bio Clicks' }
      ]
    }
  }[lang];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{
      paddingTop: '9rem',
      paddingBottom: '5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow Orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(255,94,54,0.2) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Column Text */}
          <div>
            <div className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={14} />
              {content.tag}
            </div>

            <h1 style={{
              fontSize: '3.2rem',
              lineHeight: 1.1,
              fontWeight: 800,
              marginBottom: '1.2rem',
              letterSpacing: '-0.03em'
            }}>
              Ginger Boy <br />
              <span className="gradient-text">Creator Commercial Hub</span>
            </h1>

            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              maxWidth: '560px',
              fontWeight: '400'
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

            {/* Verification Trust Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.6rem 1.2rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.88rem',
              color: 'var(--text-muted)'
            }}>
              <ShieldCheck size={16} color="#10B981" />
              <span>Estadísticas actualizadas de los últimos 90 días (Meta Business Insights)</span>
            </div>
          </div>

          {/* Right Column Profile Card & Floating Stat Badges */}
          <div style={{ position: 'relative' }}>
            
            {/* Main Avatar Card */}
            <div className="glass-card" style={{
              padding: '1.2rem',
              borderRadius: '28px',
              border: '1px solid var(--border-ginger)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '100%',
                height: '420px',
                borderRadius: '20px',
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
                
                {/* Image Overlay Gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(9, 11, 16, 0.95) 0%, transparent 60%)'
                }} />

                {/* Overlaid Info */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', color: '#FFF' }}>Ginger Boy</h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--ginger-primary)', fontWeight: '600' }}>
                        @gingerboy • 23.2K Seguidores
                      </p>
                    </div>
                    <span style={{
                      background: 'rgba(255, 94, 54, 0.2)',
                      color: 'var(--ginger-primary)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      border: '1px solid var(--border-ginger)'
                    }}>
                      OPEN FOR BRANDS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Pill Badge 1: Followers */}
            <div style={{
              position: 'absolute',
              top: '-1.5rem',
              right: '-1.5rem',
              background: 'rgba(18, 22, 31, 0.95)',
              border: '1px solid var(--border-ginger)',
              borderRadius: 'var(--radius-md)',
              padding: '0.8rem 1.2rem',
              backdropFilter: 'blur(12px)',
              boxShadow: 'var(--ginger-glow)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                background: 'rgba(255,94,54,0.15)',
                padding: '0.5rem',
                borderRadius: '50%',
                color: 'var(--ginger-primary)'
              }}>
                <Users size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFF' }}>23.2K</div>
                <div style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: '600' }}>+6.3% Crecimiento</div>
              </div>
            </div>

            {/* Stat Pill Badge 2: Total Views */}
            <div style={{
              position: 'absolute',
              bottom: '-1rem',
              left: '-1.5rem',
              background: 'rgba(18, 22, 31, 0.95)',
              border: '1px solid rgba(229, 178, 93, 0.4)',
              borderRadius: 'var(--radius-md)',
              padding: '0.8rem 1.2rem',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                background: 'rgba(229, 178, 93, 0.15)',
                padding: '0.5rem',
                borderRadius: '50%',
                color: 'var(--gold-accent)'
              }}>
                <Eye size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFF' }}>658,848</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Visualizaciones Totales</div>
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
                borderColor: i === 0 ? 'var(--border-ginger)' : 'var(--border-light)'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: `${b.color}15`,
                  border: `1px solid ${b.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: b.color,
                  flexShrink: 0
                }}>
                  <IconComp size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFF', lineHeight: 1.1 }}>
                    {b.val}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {b.label}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: b.color, fontWeight: '600', marginTop: '0.1rem' }}>
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
