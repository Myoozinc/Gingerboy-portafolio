import React, { useState } from 'react';
import { Sparkles, Disc3, Briefcase, Compass, ArrowRight, Layers, ExternalLink } from 'lucide-react';

export default function LobbyGate({ onSelectUniverse, lang }) {
  const [isUnfolded, setIsUnfolded] = useState(false);

  const universes = [
    {
      id: 'gingerboy',
      title: 'Ginger Boy',
      handle: '@gingerboyofficial',
      tag: 'FIGURA PÚBLICA & TECH',
      color: '#E05328',
      icon: Compass,
      desc: 'Marca personal, estilo de vida, viajes internacionales por Europa y desarrollo de aplicaciones de impacto humanitario (Centro de Acopio).'
    },
    {
      id: 'ggbbeats',
      title: 'GGB Beats',
      handle: '@gingerboybeats',
      tag: 'TRINIDAD SONORA',
      color: '#D97706',
      icon: Disc3,
      desc: 'El sistema de producción musical en 3 facetas: ritmos pesados urbanos (@ggbbeats), tropicales y club (@ggbbeats.dance) y texturas acústicas/lo-fi (@ggbbeats.chill).'
    },
    {
      id: 'label',
      title: 'MYOOZ InC',
      handle: 'myoozinc.com',
      tag: 'SELLO DISCOGRÁFICO',
      color: '#0F172A',
      icon: Layers,
      desc: 'La casa discográfica oficial: colaboraciones con Rasta Mia, JOSS, co-producciones de estudio y catálogo oficial de indumentaria streetwear.'
    },
    {
      id: 'prod_services',
      title: 'Producción Musical',
      handle: 'GGB Beats Studio',
      tag: 'BEATS & MEZCLA',
      color: '#D97706',
      icon: Disc3,
      desc: 'Licencias oficiales ($100 WAV Lease / $200+ Exclusiva), composición a medida, sound design y sync licensing para audiovisuales.'
    },
    {
      id: 'brand_services',
      title: 'Publicidad & Marcas',
      handle: 'Ginger Boy Media',
      tag: 'PATROCINIOS & REELS',
      color: '#E05328',
      icon: Sparkles,
      desc: 'Reels cinemáticos 4K, packs de historias interactivas, simulador de alcance e inversión y descarga del Media Kit oficial en PDF.'
    }
  ];

  const content = {
    es: {
      brand: 'GINGER BOY • GGB BEATS',
      labelSub: 'SELLO DISCOGRÁFICO MYOOZ INC',
      instruction: 'TOCA EL EMBLEMA PARA EXPLORAR',
      instructionUnfolded: 'SELECCIONA UN UNIVERSO CREATIVO',
      viewAll: 'Explorar Todo el Ecosistema Completo'
    },
    en: {
      brand: 'GINGER BOY • GGB BEATS',
      labelSub: 'MYOOZ INC RECORD LABEL',
      instruction: 'TOUCH EMBLEM TO ENTER',
      instructionUnfolded: 'CHOOSE A CREATIVE UNIVERSE',
      viewAll: 'Explore The Full Continuous Ecosystem'
    }
  }[lang];

  const handleLogoClick = () => {
    setIsUnfolded(true);
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'radial-gradient(ellipse at 50% 30%, #FF5722 0%, #E65100 28%, #BF360C 60%, #150502 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '2rem 1.5rem',
      fontFamily: 'var(--font-main)',
      color: '#FFFFFF'
    }}>
      
      {/* Studio Spotlight Lights Falloff Beam */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1000px',
        height: '600px',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 109, 0, 0.25) 45%, transparent 75%)',
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }} />

      {/* Top Minimal Brand Stamp */}
      <div style={{
        position: 'absolute',
        top: '2.5rem',
        textAlign: 'center',
        zIndex: 10
      }}>
        <div style={{
          fontSize: '0.8rem',
          fontWeight: '900',
          letterSpacing: '0.24em',
          color: '#FFFFFF',
          textTransform: 'uppercase',
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}>
          {content.brand}
        </div>
        <div style={{
          fontSize: '0.7rem',
          fontWeight: '700',
          letterSpacing: '0.14em',
          color: '#FCD34D',
          marginTop: '0.25rem',
          textTransform: 'uppercase'
        }}>
          {content.labelSub}
        </div>
      </div>

      {/* Centerpiece: Animated Logo that unfolds */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
        marginTop: isUnfolded ? '-1rem' : '0',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>

        {/* The Animated Emblem Button */}
        <div
          onClick={handleLogoClick}
          style={{
            width: isUnfolded ? '100px' : '170px',
            height: isUnfolded ? '100px' : '170px',
            borderRadius: '50%',
            overflow: 'hidden',
            background: '#0F172A',
            position: 'relative',
            cursor: 'pointer',
            padding: '3px',
            border: '3px solid var(--ginger-primary)',
            boxShadow: isUnfolded 
              ? '0 0 35px rgba(224, 83, 40, 0.4)' 
              : '0 15px 45px rgba(0, 0, 0, 0.1), 0 0 35px rgba(224, 83, 40, 0.35)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            animation: !isUnfolded ? 'lobbyFloat 4s ease-in-out infinite, lobbyGlow 3s ease-in-out infinite alternate' : 'none',
            transform: isUnfolded ? 'scale(0.9)' : 'scale(1)'
          }}
          title={content.instruction}
        >
          <img
            src="/images/ggbbeats-logo-circle.png"
            alt="Ginger Boy & GGB Beats Official Emblem"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
          />

          {/* Interactive Aura Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(224, 83, 40, 0.25) 0%, transparent 75%)',
            pointerEvents: 'none'
          }} />
        </div>

        {/* Pulse Hint Below Logo */}
        <div style={{
          marginTop: isUnfolded ? '0.8rem' : '1.8rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.74rem',
          fontWeight: '800',
          letterSpacing: '0.14em',
          color: isUnfolded ? '#FCD34D' : '#FFFFFF',
          background: 'rgba(0, 0, 0, 0.35)',
          padding: '0.35rem 0.9rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          transition: 'all 0.4s ease'
        }} onClick={handleLogoClick}>
          <div style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#FF6D00',
            boxShadow: '0 0 10px #FF6D00',
            animation: 'pulseDot 1.5s infinite'
          }} />
          <span>{isUnfolded ? content.instructionUnfolded : content.instruction}</span>
        </div>

      </div>

      {/* Unfolded 4 Universes Grid */}
      {isUnfolded && (
        <div style={{
          width: '100%',
          maxWidth: '1040px',
          marginTop: '2.5rem',
          zIndex: 5,
          animation: 'fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(215px, 1fr))',
            gap: '1.2rem'
          }} className="universes-grid">
            
            {universes.map((u) => {
              const IconComp = u.icon;
              return (
                <div
                  key={u.id}
                  onClick={() => onSelectUniverse(u.id)}
                  style={{
                    background: 'rgba(14, 8, 4, 0.88)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    padding: '2rem 1.4rem',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = u.color;
                    e.currentTarget.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px ${u.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.5)';
                  }}
                >
                  {/* Top Category Tag */}
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.2rem'
                    }}>
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: `${u.color}25`,
                        color: u.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <IconComp size={20} />
                      </div>

                      <span style={{
                        fontSize: '0.64rem',
                        fontWeight: '800',
                        color: u.color,
                        background: `${u.color}20`,
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        letterSpacing: '0.04em',
                        border: `1px solid ${u.color}40`
                      }}>
                        {u.tag}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.3rem' }}>
                      {u.title}
                    </h3>

                    <div style={{ fontSize: '0.8rem', color: u.color, fontWeight: '700', marginBottom: '0.9rem' }}>
                      {u.handle}
                    </div>

                    <p style={{ fontSize: '0.84rem', color: '#CBD5E1', lineHeight: '1.5', margin: 0 }}>
                      {u.desc}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div style={{
                    marginTop: '1.6rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.82rem',
                    fontWeight: '800',
                    color: '#FCD34D'
                  }}>
                    <span>Ingresar</span>
                    <ArrowRight size={15} />
                  </div>

                </div>
              );
            })}

          </div>

          {/* Option: View Full Continuous Ecosystem */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => onSelectUniverse('all')}
              style={{
                background: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                fontSize: '0.88rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(230, 81, 0, 0.4)';
                e.currentTarget.style.borderColor = '#FF6D00';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.45)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              }}
            >
              <span>{content.viewAll}</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      )}

      {/* Bottom Minimal Info */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        textAlign: 'center',
        zIndex: 10,
        fontSize: '0.72rem',
        color: 'var(--text-dim)',
        letterSpacing: '0.06em'
      }}>
        MYOOZ INC • TALENT & PRODUCTION NETWORK • 2026
      </div>

      <style>{`
        @keyframes lobbyFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes lobbyGlow {
          0% { box-shadow: 0 15px 45px rgba(0, 0, 0, 0.08), 0 0 25px rgba(224, 83, 40, 0.2); }
          100% { box-shadow: 0 20px 55px rgba(0, 0, 0, 0.12), 0 0 50px rgba(224, 83, 40, 0.5); }
        }
        @keyframes pulseDot {
          0% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.3; transform: scale(0.9); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 960px) {
          .universes-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 580px) {
          .universes-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
