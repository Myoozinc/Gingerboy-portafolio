import React from 'react';
import { Eye, Film, Sparkles, TrendingUp, Users, ArrowRight, ShieldCheck, MapPin, MousePointer, HeartHandshake, Disc3, ExternalLink } from 'lucide-react';

export default function Hero({ lang }) {
  const content = {
    es: {
      tag: 'PORTAFOLIO COMERCIAL OFICIAL & MEDIA KIT',
      title: 'Ginger Boy',
      role: 'Creador, Figura Pública & Tech Innovator',
      producerNote: 'Productor Musical & Beatmaker en MYOOZ InC (GGB Beats)',
      brandSubtitle: 'Portafolio comercial oficial de Ginger Boy (@gingerboyofficial): creador de contenido de viajes por Europa y estilo de vida urbano, desarrollador de proyectos tecnológicos con impacto humanitario (Centro de Acopio), e impulsor del sello y sistema musical GGB Beats (@gingerboybeats).',
      ctaPrimary: 'Explorar Métricas',
      ctaSecondary: 'GGB Beats Music Wing',
      badges: [
        { label: 'Visitas al Perfil', val: '42,302', icon: Users, color: '#38BDF8', note: 'Meta Insights Oficial' },
        { label: 'Toques en Bio Link', val: '1,114', icon: MousePointer, color: '#10B981', note: 'Tráfico web directo' },
        { label: 'Audiencia Femenina', val: '69.4%', icon: HeartHandshake, color: '#F43F5E', note: 'Moda, Lifestyle & Cultura' },
        { label: 'Reel Más Viral', val: '172,000+', icon: Film, color: '#F59E0B', note: 'Viral Discovery' }
      ]
    },
    en: {
      tag: 'OFFICIAL COMMERCIAL PORTFOLIO & MEDIA KIT',
      title: 'Ginger Boy',
      role: 'Creator, Public Figure & Tech Innovator',
      producerNote: 'Music Producer & Beatmaker at MYOOZ InC (GGB Beats)',
      brandSubtitle: 'Official commercial media kit for Ginger Boy (@gingerboyofficial): European travel & urban lifestyle creator, humanitarian tech developer, and beatmaker behind GGB Beats (@gingerboybeats) and MYOOZ InC.',
      ctaPrimary: 'Explore Metrics',
      ctaSecondary: 'GGB Beats Music Wing',
      badges: [
        { label: 'Profile Visits', val: '42,302', icon: Users, color: '#38BDF8', note: 'Official Meta Insights' },
        { label: 'Bio Link Clicks', val: '1,114', icon: MousePointer, color: '#10B981', note: 'Direct web traffic' },
        { label: 'Female Audience', val: '69.4%', icon: HeartHandshake, color: '#F43F5E', note: 'Fashion, Lifestyle & Culture' },
        { label: 'Top Viral Reel', val: '172,000+', icon: Film, color: '#F59E0B', note: 'Viral Discovery' }
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
      paddingBottom: '5rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(90deg, #090D16 0%, rgba(9, 13, 22, 0.95) 42%, rgba(9, 13, 22, 0.68) 72%, rgba(9, 13, 22, 0.35) 100%), url("/images/gingerboy_pyrenees_hd.jpg") right 18% center / cover no-repeat',
      color: '#FFFFFF'
    }}>

      {/* Arctic Mountain Spotlight Ambient Beam */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '15%',
        width: '650px',
        height: '650px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(30, 58, 138, 0.08) 50%, transparent 75%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      {/* Subtle Cold Grid Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
        opacity: 0.7
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '3.5rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }} className="hero-grid">

          {/* Left Column: Urban Streetwear & Media Kit Hierarchy */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1.1rem',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: 'var(--radius-full)',
              color: '#38BDF8',
              fontSize: '0.8rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1.2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <Sparkles size={14} />
              <span>{content.tag}</span>
            </div>

            <h1 style={{
              fontSize: '3.5rem',
              lineHeight: 1.08,
              fontWeight: 900,
              marginBottom: '0.5rem',
              letterSpacing: '-0.03em',
              color: '#FFFFFF'
            }}>
              Ginger Boy <br />
              <span style={{
                background: 'linear-gradient(135deg, #38BDF8 0%, #818CF8 50%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {content.role}
              </span>
            </h1>

            {/* Facets Badges */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', margin: '1rem 0 1.5rem 0' }}>
              <span style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#E2E8F0',
                padding: '0.38rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: '700',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <Users size={13} color="#38BDF8" />
                @gingerboyofficial • Figura Pública
              </span>
              <span style={{
                background: 'rgba(56, 189, 248, 0.12)',
                color: '#38BDF8',
                padding: '0.38rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: '700',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <MapPin size={13} />
                Pyrenees, Europa • Viajes & Lifestyle
              </span>
              <span style={{
                background: 'rgba(217, 119, 6, 0.15)',
                color: '#FBBF24',
                padding: '0.38rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: '700',
                border: '1px solid rgba(217, 119, 6, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <Disc3 size={13} />
                GGB Beats (@gingerboybeats) • Beatmaker
              </span>
            </div>

            <p style={{
              fontSize: '1.12rem',
              color: '#94A3B8',
              marginBottom: '2rem',
              maxWidth: '560px',
              fontWeight: '400',
              lineHeight: '1.65'
            }}>
              {content.brandSubtitle}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <button 
                onClick={() => scrollTo('metrics')} 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
                  color: '#FFFFFF',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.8rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(2, 132, 199, 0.35)',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <span>{content.ctaPrimary}</span>
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => scrollTo('ggb-beats')} 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: 'rgba(15, 23, 42, 0.8)',
                  color: '#FBBF24',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.8rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(251, 191, 36, 0.35)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <Disc3 size={16} />
                <span>{content.ctaSecondary}</span>
              </button>
            </div>

            {/* Trust Badge with Verified Meta Insights */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.65rem 1.3rem',
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.84rem',
              color: '#CBD5E1',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
            }}>
              <ShieldCheck size={16} color="#34D399" />
              <span>Estadísticas verificadas oficiales (Meta Insights) • 42,302 Visitas | 1,114 Toques en Enlace</span>
            </div>
          </div>

          {/* Right Column: High Resolution Urban & Travel Showcase (Pyrenees) */}
          <div style={{ position: 'relative' }}>
            
            <div style={{
              padding: '1.5rem',
              borderRadius: '28px',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65), 0 0 35px rgba(56, 189, 248, 0.1)',
              background: 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              textAlign: 'center',
              overflow: 'hidden'
            }}>
              
              {/* Urban Travel Photo Container */}
              <div style={{
                width: '100%',
                height: '380px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                background: '#0B1329',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)',
                marginBottom: '1.2rem'
              }}>
                <img 
                  src="/images/gingerboy_pyrenees_hd.jpg" 
                  alt="Ginger Boy • Travesía en los Pirineos" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                />

                {/* Overlaid Gradient for Contrast */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '130px',
                  background: 'linear-gradient(to top, rgba(9, 13, 22, 0.96) 0%, rgba(9, 13, 22, 0.4) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.2rem',
                  textAlign: 'left'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#38BDF8', fontSize: '0.72rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    <MapPin size={13} />
                    <span>PIRINEOS • LIFESTYLE & VIAJES OFICIAL</span>
                  </div>
                  <div style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: '800' }}>
                    Ginger Boy en los Pirineos
                  </div>
                  <div style={{ color: '#94A3B8', fontSize: '0.78rem', marginTop: '0.15rem' }}>
                    Fotografía original en alta definición • @gingerboyofficial
                  </div>
                </div>

                {/* Floating Location Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(9, 13, 22, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#38BDF8',
                  fontSize: '0.7rem',
                  fontWeight: '800',
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  <MapPin size={12} />
                  <span>Pyrenees, Europa</span>
                </div>

                {/* Verified Creator Badge Top Right */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(9, 13, 22, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  fontSize: '0.68rem',
                  fontWeight: '800',
                  padding: '0.3rem 0.7rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  VERIFIED CREATOR
                </div>
              </div>

              <div style={{
                display: 'inline-block',
                background: 'rgba(56, 189, 248, 0.12)',
                color: '#38BDF8',
                padding: '0.3rem 0.95rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.74rem',
                fontWeight: '800',
                letterSpacing: '0.08em',
                marginBottom: '0.4rem',
                border: '1px solid rgba(56, 189, 248, 0.25)'
              }}>
                FIGURA PÚBLICA & TECH INNOVATOR
              </div>

              <h2 style={{ fontSize: '1.65rem', color: '#FFFFFF', marginBottom: '0.2rem', fontWeight: '800' }}>
                Ginger Boy
              </h2>

              <p style={{ fontSize: '0.9rem', color: '#38BDF8', fontWeight: '700', marginBottom: '1rem' }}>
                @gingerboyofficial • Pyrenees
              </p>

              {/* Highlight Stats Row (Verified Insights) */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                margin: '0.6rem 0 1rem 0'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '0.8rem 0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  textAlign: 'left'
                }}>
                  <div style={{
                    background: 'rgba(56, 189, 248, 0.15)',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    color: '#38BDF8'
                  }}>
                    <Users size={17} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', lineHeight: 1.1 }}>42,302</div>
                    <div style={{ fontSize: '0.7rem', color: '#38BDF8', fontWeight: '700' }}>Visitas al Perfil</div>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '0.8rem 0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  textAlign: 'left'
                }}>
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.15)',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    color: '#34D399'
                  }}>
                    <MousePointer size={17} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', lineHeight: 1.1 }}>1,114</div>
                    <div style={{ fontSize: '0.7rem', color: '#34D399', fontWeight: '700' }}>Clics en Enlace</div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div style={{
                background: 'rgba(9, 13, 22, 0.75)',
                borderRadius: '16px',
                padding: '0.9rem 1rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.8rem',
                textAlign: 'left',
                fontSize: '0.82rem'
              }}>
                <div>
                  <span style={{ color: '#94A3B8', display: 'block' }}>Reel Más Viral:</span>
                  <strong style={{ color: '#F59E0B', fontWeight: '800' }}>172K+ Reproducciones</strong>
                </div>
                <div>
                  <span style={{ color: '#94A3B8', display: 'block' }}>Audiencia Core:</span>
                  <strong style={{ color: '#F43F5E', fontWeight: '800' }}>69.4% Femenina</strong>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Core Stat Cards with Dark Urban Aesthetic */}
        <div className="grid-4" style={{ marginTop: '4.5rem' }}>
          {content.badges.map((b, i) => {
            const IconComp = b.icon;
            return (
              <div key={i} style={{
                padding: '1.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'rgba(15, 23, 42, 0.82)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'var(--transition-smooth)'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: `${b.color}18`,
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
                  <div style={{ fontSize: '1.45rem', fontWeight: '900', color: '#FFFFFF', lineHeight: 1.1 }}>
                    {b.val}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '0.2rem' }}>
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
