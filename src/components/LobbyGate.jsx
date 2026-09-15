import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Disc3, Briefcase, Compass, ArrowRight, Layers, ExternalLink } from 'lucide-react';

export default function LobbyGate({ onSelectUniverse, lang }) {
  const [isUnfolded, setIsUnfolded] = useState(false);
  const [isAwake, setIsAwake] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const emblemRef = useRef(null);
  const sleepTimerRef = useRef(null);

  useEffect(() => {
    let blinkTimer;

    const handleMouseMove = (e) => {
      // Wake up on mouse interaction
      setIsAwake(true);

      // Auto-sleep if no mouse movement for 4.8 seconds
      if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
      sleepTimerRef.current = setTimeout(() => {
        setIsAwake(false);
      }, 4800);

      // Eye tracking calculation relative to emblem center
      if (emblemRef.current) {
        const rect = emblemRef.current.getBoundingClientRect();
        const emblemCenterX = rect.left + rect.width / 2;
        const emblemCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - emblemCenterX;
        const deltaY = e.clientY - emblemCenterY;

        // In 1080x1080 coordinate space:
        // Eye socket rx=58, iris r=23 -> max pupil travel X is ~26px
        // Eye socket ry=26, iris r=23 -> max pupil travel Y is ~10px
        const maxDistX = Math.max(window.innerWidth / 2, 300);
        const maxDistY = Math.max(window.innerHeight / 2, 300);

        const clampedX = Math.min(Math.max((deltaX / maxDistX) * 26, -24), 24);
        const clampedY = Math.min(Math.max((deltaY / maxDistY) * 11, -9), 9);

        setPupilOffset({ x: clampedX, y: clampedY });
      }
    };

    // Natural micro-blinks every 3.8s when awake
    blinkTimer = setInterval(() => {
      setIsAwake((awake) => {
        if (awake) {
          setIsBlinking(true);
          setTimeout(() => setIsBlinking(false), 140);
        }
        return awake;
      });
    }, 3800);

    window.addEventListener('mousemove', handleMouseMove);
    
    const handleTouch = (e) => {
      if (e.touches && e.touches.length > 0) {
        handleMouseMove(e.touches[0]);
      }
    };
    window.addEventListener('touchmove', handleTouch);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouch);
      clearInterval(blinkTimer);
      if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
    };
  }, []);

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
      unfoldedHeader: 'UNIVERSOS DISPONIBLES',
      viewAll: 'Explorar Todo el Ecosistema Completo'
    },
    en: {
      brand: 'GINGER BOY • GGB BEATS',
      unfoldedHeader: 'AVAILABLE UNIVERSES',
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
      justifyContent: 'space-between',
      position: 'relative',
      overflowX: 'hidden',
      overflowY: isUnfolded ? 'auto' : 'hidden',
      padding: isUnfolded ? '2.5rem 1.5rem' : '2.5rem 1.5rem',
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

      {/* Top Minimal Brand Stamp (In Natural Document Flow with Margin) */}
      <header style={{
        textAlign: 'center',
        zIndex: 10,
        marginBottom: isUnfolded ? '1.5rem' : '1rem',
        flexShrink: 0
      }}>
        <div style={{
          fontSize: '0.85rem',
          fontWeight: '900',
          letterSpacing: '0.28em',
          color: '#FFFFFF',
          textTransform: 'uppercase',
          textShadow: '0 2px 14px rgba(0,0,0,0.6)'
        }}>
          {content.brand}
        </div>
      </header>

      {/* Centerpiece: Animated Logo that wakes up, tracks gaze, and unfolds */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
        margin: isUnfolded ? '0.5rem 0' : 'auto 0',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>

        {/* Concentric Sonic Bass Ripples (Urban & Audio-Reactive) */}
        {!isUnfolded && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '175px',
            height: '175px',
            pointerEvents: 'none',
            zIndex: 1
          }}>
            <div className="sonic-ring sonic-ring-1" />
            <div className="sonic-ring sonic-ring-2" />
            <div className="sonic-ring sonic-ring-3" />
          </div>
        )}

        {/* The Animated Emblem with Awake Eye Tracking */}
        <div
          ref={emblemRef}
          onClick={handleLogoClick}
          onMouseEnter={() => {
            setIsAwake(true);
            if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
          }}
          style={{
            width: isUnfolded ? '105px' : '175px',
            height: isUnfolded ? '105px' : '175px',
            borderRadius: '50%',
            overflow: 'hidden',
            background: '#0F172A',
            position: 'relative',
            cursor: 'pointer',
            padding: '3px',
            border: isAwake ? '3.5px solid #FF6D00' : '3px solid var(--ginger-primary)',
            boxShadow: isUnfolded 
              ? '0 0 35px rgba(224, 83, 40, 0.4)' 
              : isAwake 
                ? '0 15px 50px rgba(0, 0, 0, 0.5), 0 0 60px rgba(255, 109, 0, 0.65)' 
                : '0 15px 45px rgba(0, 0, 0, 0.35), 0 0 35px rgba(224, 83, 40, 0.35)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            animation: !isUnfolded ? 'lobbyFloat 4.2s ease-in-out infinite' : 'none',
            transform: isUnfolded ? 'scale(0.9)' : 'scale(1)',
            zIndex: 3
          }}
          title={isUnfolded ? '' : 'GGB Beats'}
        >
          {/* Base Logo with original artwork */}
          <img
            src="/images/ggbbeats-logo-circle.png"
            alt="Ginger Boy & GGB Beats Official Emblem"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', display: 'block' }}
          />

          {/* Interactive Awake Eyes SVG Layer — original cartoon style from logo */}
          <svg
            viewBox="0 0 1080 1080"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              borderRadius: '50%',
              zIndex: 2
            }}
          >
            <defs>
              {/* Almond clip paths matching the actual logo eye shape */}
              <clipPath id="leftEyeClip">
                <path d="M 293 618 C 307 600 336 594 352 594 C 368 594 397 600 411 618 C 397 633 368 638 352 638 C 336 638 307 633 293 618 Z" />
              </clipPath>
              <clipPath id="rightEyeClip">
                <path d="M 670 618 C 684 600 713 594 729 594 C 745 594 774 600 788 618 C 774 633 745 638 729 638 C 713 638 684 633 670 618 Z" />
              </clipPath>
              {/* Dark reddish-brown iris — authentic to the original illustration */}
              <radialGradient id="irisGrad" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#B03A1A" />
                <stop offset="50%" stopColor="#6B1C08" />
                <stop offset="100%" stopColor="#350802" />
              </radialGradient>
              {/* Warm orange ambient glow around eyes when awake */}
              <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,109,0,0.22)" />
                <stop offset="100%" stopColor="rgba(255,109,0,0)" />
              </radialGradient>
            </defs>

            {/* ─── LEFT EYE ─── */}
            <g style={{
              transformOrigin: '352px 616px',
              transform: `scaleY(${isAwake && !isBlinking ? 1 : 0})`,
              opacity: isAwake && !isBlinking ? 1 : 0,
              transition: 'transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.22s ease'
            }}>
              {/* Eye white — warm off-white sliver, visible below heavy lid */}
              <path
                d="M 293 618 C 307 600 336 594 352 594 C 368 594 397 600 411 618 C 397 633 368 638 352 638 C 336 638 307 633 293 618 Z"
                fill="#EFE8DE"
              />

              {/* Iris + Pupil with cursor tracking */}
              <g clipPath="url(#leftEyeClip)">
                <g style={{
                  transform: `translate(${pupilOffset.x}px, ${pupilOffset.y * 0.55}px)`,
                  transition: 'transform 0.1s ease-out'
                }}>
                  {/* Iris */}
                  <circle cx="352" cy="616" r="20" fill="url(#irisGrad)" />
                  {/* Pupil */}
                  <circle cx="352" cy="616" r="10.5" fill="#1C0604" />
                  {/* Specular highlight — signature white dot top-left */}
                  <ellipse cx="345" cy="608" rx="4.5" ry="3.2" fill="#FFFFFF" opacity="0.95" />
                  {/* Micro secondary glint */}
                  <circle cx="357" cy="623" r="1.8" fill="rgba(255,255,255,0.65)" />
                </g>
              </g>

              {/* Heavy droopy upper eyelid — the main character of the original eye */}
              <path
                d="M 291 617 C 306 592 337 587 352 587 C 367 587 398 592 413 617"
                fill="none"
                stroke="#5C1D08"
                strokeWidth="8"
                strokeLinecap="round"
              />
              {/* Upper lid inner shadow for depth */}
              <path
                d="M 296 617 C 310 596 337 591 352 591 C 367 591 394 596 408 617"
                fill="none"
                stroke="#2E0A02"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.5"
              />
              {/* Lower lid — gentle natural curve */}
              <path
                d="M 295 620 C 310 635 337 640 352 640 C 367 640 394 635 409 620"
                fill="none"
                stroke="#5C1D08"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Orange warm glow halo when awake */}
              <ellipse cx="352" cy="616" rx="34" ry="18" fill="url(#eyeGlow)" />
            </g>

            {/* ─── RIGHT EYE ─── */}
            <g style={{
              transformOrigin: '729px 616px',
              transform: `scaleY(${isAwake && !isBlinking ? 1 : 0})`,
              opacity: isAwake && !isBlinking ? 1 : 0,
              transition: 'transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.22s ease'
            }}>
              {/* Eye white */}
              <path
                d="M 670 618 C 684 600 713 594 729 594 C 745 594 774 600 788 618 C 774 633 745 638 729 638 C 713 638 684 633 670 618 Z"
                fill="#EFE8DE"
              />

              {/* Iris + Pupil with cursor tracking */}
              <g clipPath="url(#rightEyeClip)">
                <g style={{
                  transform: `translate(${pupilOffset.x}px, ${pupilOffset.y * 0.55}px)`,
                  transition: 'transform 0.1s ease-out'
                }}>
                  <circle cx="729" cy="616" r="20" fill="url(#irisGrad)" />
                  <circle cx="729" cy="616" r="10.5" fill="#1C0604" />
                  {/* Specular highlight */}
                  <ellipse cx="722" cy="608" rx="4.5" ry="3.2" fill="#FFFFFF" opacity="0.95" />
                  <circle cx="734" cy="623" r="1.8" fill="rgba(255,255,255,0.65)" />
                </g>
              </g>

              {/* Heavy droopy upper eyelid */}
              <path
                d="M 668 617 C 683 592 714 587 729 587 C 744 587 775 592 790 617"
                fill="none"
                stroke="#5C1D08"
                strokeWidth="8"
                strokeLinecap="round"
              />
              {/* Upper lid inner shadow */}
              <path
                d="M 673 617 C 687 596 714 591 729 591 C 744 591 771 596 785 617"
                fill="none"
                stroke="#2E0A02"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.5"
              />
              {/* Lower lid */}
              <path
                d="M 672 620 C 687 635 714 640 729 640 C 744 640 771 635 786 620"
                fill="none"
                stroke="#5C1D08"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Orange warm glow halo */}
              <ellipse cx="729" cy="616" rx="34" ry="18" fill="url(#eyeGlow)" />
            </g>
          </svg>

          {/* Interactive Aura Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(224, 83, 40, 0.15) 0%, transparent 75%)',
            pointerEvents: 'none'
          }} />
        </div>

        {/* Dynamic Urban Audio Rhythm Visualizer (Replaces bulky text button) */}
        {!isUnfolded ? (
          <div
            onClick={handleLogoClick}
            title="Beatmaking Sonic Pulse"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              height: '24px',
              marginTop: '1.8rem',
              cursor: 'pointer',
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(0, 0, 0, 0.35)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease'
            }}
            className="urban-eq-visualizer"
          >
            {[10, 18, 12, 22, 14, 8, 16, 20, 11].map((h, i) => (
              <span
                key={i}
                style={{
                  width: '3.5px',
                  height: `${h}px`,
                  borderRadius: '3px',
                  background: 'linear-gradient(to top, #FF5722, #FFB300)',
                  animation: `eqBarBounce ${0.5 + (i % 4) * 0.18}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.08}s`
                }}
              />
            ))}
          </div>
        ) : (
          <div style={{
            marginTop: '1.2rem',
            fontSize: '0.78rem',
            letterSpacing: '0.18em',
            fontWeight: '800',
            color: '#FFB300',
            textTransform: 'uppercase',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}>
            {content.unfoldedHeader}
          </div>
        )}

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

      {/* Bottom Minimal Info (In Natural Flow, Never Overlapping) */}
      <footer style={{
        textAlign: 'center',
        zIndex: 10,
        fontSize: '0.72rem',
        color: 'rgba(255, 255, 255, 0.45)',
        letterSpacing: '0.06em',
        marginTop: isUnfolded ? '3rem' : '1.5rem',
        flexShrink: 0
      }}>
        MYOOZ INC • TALENT & PRODUCTION NETWORK • 2026
      </footer>

      <style>{`
        @keyframes lobbyFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes sonicRingPulse {
          0% {
            transform: scale(0.96);
            opacity: 0.85;
            border-color: rgba(255, 109, 0, 0.65);
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: scale(1.68);
            opacity: 0;
            border-color: rgba(255, 183, 77, 0);
          }
        }
        .sonic-ring {
          position: absolute;
          inset: -14px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 109, 0, 0.5);
          animation: sonicRingPulse 3.2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
          pointer-events: none;
        }
        .sonic-ring-2 {
          animation-delay: 1.05s;
        }
        .sonic-ring-3 {
          animation-delay: 2.1s;
        }
        @keyframes eqBarBounce {
          0% { transform: scaleY(0.3); opacity: 0.5; }
          100% { transform: scaleY(1.2); opacity: 1; }
        }
        .urban-eq-visualizer:hover {
          background: rgba(230, 81, 0, 0.45) !important;
          border-color: rgba(255, 109, 0, 0.8) !important;
          transform: scale(1.08);
          box-shadow: 0 0 25px rgba(255, 109, 0, 0.5) !important;
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
