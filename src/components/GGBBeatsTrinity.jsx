import React, { useState } from 'react';
import { Disc3, Flame, Headphones, Play, ExternalLink, Sparkles, Youtube, CheckCircle, ArrowRight, Music, Radio, Instagram, Volume2 } from 'lucide-react';

export default function GGBBeatsTrinity({ activeFacet, setActiveFacet, lang }) {
  // 3 Facets Data
  const facets = {
    ggbbeats: {
      id: 'ggbbeats',
      handle: '@ggbbeats',
      igUrl: 'https://instagram.com/gingerboybeats',
      name: 'GGB Beats • Urban & Heavy Sounds',
      tagline: 'Trap, Hip-Hop, Rap, Drill, House & Techno Raptor',
      intensity: 'Alta Intensidad • 130 - 145 BPM',
      beamColor: '#E05328',
      beamGlow: '0 0 45px rgba(224, 83, 40, 0.6), 0 0 90px rgba(224, 83, 40, 0.3)',
      icon: Disc3,
      pulseSpeed: '1.2s',
      bio: 'La faceta de producción urbana pesada y underground de Ginger Boy. Caracterizada por bajos 808s distorsionados, cambios de ritmo dinámicos (switch beats), hi-hat rolls complejos y atmósferas oscuras diseñadas para raperos, freestylers y sesiones de club.',
      genres: ['Trap Underground', 'Drill Británico & Latino', 'Boom Bap / Rap 90s', 'Techno Raptor & Club House'],
      releases: [
        {
          id: '3uBheqK9yXc',
          title: '[FREE] Trap Reggaeton Switch Beat 2026',
          genre: 'Trap & Switch Beat',
          thumb: '/images/yt_beat_2.jpg',
          url: 'https://www.youtube.com/watch?v=3uBheqK9yXc'
        },
        {
          id: 'OAMM8ji9pr0',
          title: 'Urbano Pesado & Synth Wave',
          genre: 'Heavy Urban',
          thumb: '/images/yt_beat_1.jpg',
          url: 'https://www.youtube.com/watch?v=OAMM8ji9pr0'
        }
      ],
      spotifyEmbed: 'https://open.spotify.com/embed/artist/0QrrPjP73pfBddZBUHUjd0?utm_source=generator&theme=0',
      credits: 'Colaboraciones con raperos independientes, pistas para competencias y sincronizaciones urbanas.'
    },

    dance: {
      id: 'dance',
      handle: '@ggbbeats.dance',
      igUrl: 'https://instagram.com/ggbbeats.dance',
      name: 'GGB Beats Dance • Ritmos Tropicales & Club',
      tagline: 'Reggaeton, Dancehall, RKT, Funk Brasilero & Dembow',
      intensity: 'Ritmo Bailable • 94 - 105 BPM',
      beamColor: '#D97706',
      beamGlow: '0 0 50px rgba(217, 119, 6, 0.65), 0 0 100px rgba(217, 119, 6, 0.35)',
      icon: Flame,
      pulseSpeed: '0.85s',
      bio: 'El canal dedicado a los ritmos de pista, festivales y coreografías virales. Fusión de percusiones caribeñas, sintetizadores tropicales y baterías contagiosas de Reggaetón clásico y moderno, Dancehall jamaiquino y Funk favela brasilero.',
      genres: ['Reggaetón 2026 / Perreo', 'RKT & Turreo Latino', 'Dancehall Caribeño', 'Funk Brasilero / Favela'],
      releases: [
        {
          id: '57JNWfVP75M',
          title: 'MAMI CHULA | RKT Reggaeton',
          genre: 'RKT / Latin Dance Club',
          thumb: '/images/yt_beat_4.jpg',
          url: 'https://www.youtube.com/watch?v=57JNWfVP75M'
        },
        {
          id: 'OAMM8ji9pr0',
          title: 'Reggaeton Beat 2026 • Tropical Vibe',
          genre: 'Reggaeton Comercial',
          thumb: '/images/yt_beat_1.jpg',
          url: 'https://www.youtube.com/watch?v=OAMM8ji9pr0'
        }
      ],
      spotifyEmbed: 'https://open.spotify.com/embed/artist/0QrrPjP73pfBddZBUHUjd0?utm_source=generator&theme=0',
      credits: 'Producción de sencillos bailables, coreografías en TikTok/Reels y singles para pistas de baile.'
    },

    chill: {
      id: 'chill',
      handle: '@ggbbeats.chill',
      igUrl: 'https://instagram.com/ggbbeats.chill',
      name: 'GGB Beats Chill • Fusión Acústica & Lo-Fi',
      tagline: 'Chillhop, Lo-Fi, Jazz, Bolero Flamenco, Orquesta & Folk',
      intensity: 'Texturas Relajantes • 75 - 88 BPM',
      beamColor: '#059669',
      beamGlow: '0 0 45px rgba(5, 150, 105, 0.6), 0 0 95px rgba(5, 150, 105, 0.3)',
      icon: Headphones,
      pulseSpeed: '2.0s',
      bio: 'El espacio orgánico y experimental. Arreglos con guitarras flamencas, pianos eléctricos Rhodes, cuerdas acústicas y texturas de vinilo cálidas. Ideal para relajación, estudio, fondos cinematográficos y fusiones líricas de autor.',
      genres: ['Bolero Flamenco Acústico', 'Lo-Fi Study & Coffee Beats', 'Smooth Jazz Fusión', 'Orchestral & Folk Textures'],
      releases: [
        {
          id: '66iNvxEKZVg',
          title: 'REAL Bolero Flamenco Instrumental Acústico',
          genre: 'Bolero / Flamenco Acústico',
          thumb: '/images/yt_beat_3.jpg',
          url: 'https://www.youtube.com/watch?v=66iNvxEKZVg'
        },
        {
          id: '3uBheqK9yXc',
          title: 'Acoustic Guitar & Lo-Fi Fusion',
          genre: 'Chillhop Instrumental',
          thumb: '/images/yt_beat_2.jpg',
          url: 'https://www.youtube.com/watch?v=3uBheqK9yXc'
        }
      ],
      spotifyEmbed: 'https://open.spotify.com/embed/artist/0QrrPjP73pfBddZBUHUjd0?utm_source=generator&theme=0',
      credits: 'Música ambiental para vlogs, co-producciones con cantautoras como Rasta Mia (Francia).'
    }
  };

  const current = facets[activeFacet] || facets.ggbbeats;

  const content = {
    es: {
      tag: 'TRINIDAD SONORA • GGB BEATS SISTEMA MUSICAL',
      title: 'Tres Facetas, Una Sola Visión Sonora',
      subtitle: 'Tres logos idénticos con tres frecuencias de energía distintas. Haz clic en cada emblema para cambiar la atmósfera sonora, el haz de luz y acceder al catálogo exclusivo de esa faceta.',
      bioTitle: 'Manifiesto & Dirección Musical',
      genresTitle: 'Géneros de Especialidad',
      releasesTitle: 'Lanzamientos Destacados en YouTube',
      spotifyTitle: 'Streaming Oficial en Spotify',
      visitIg: 'Explorar Cuenta Oficial de Instagram',
      listenPrompt: 'La música ambiental se actualiza automáticamente con esta faceta.',
      licenceCta: 'Cotizar Beat en Este Estilo'
    },
    en: {
      tag: 'SONIC TRINITY • GGB BEATS MUSICAL SYSTEM',
      title: 'Three Facets, One Distinct Sonic Vision',
      subtitle: 'Three identical emblems powered by three unique energy light beams. Click any logo to shift the ambient frequency, light aura, and unlock the curated catalog for that facet.',
      bioTitle: 'Manifesto & Musical Direction',
      genresTitle: 'Specialty Genres',
      releasesTitle: 'Featured YouTube Releases',
      spotifyTitle: 'Official Spotify Streaming',
      visitIg: 'Explore Official Instagram Account',
      listenPrompt: 'Background music dynamically updates with this facet.',
      licenceCta: 'License a Beat in This Style'
    }
  }[lang];

  return (
    <section id="ggb-trinity" style={{
      padding: '7rem 0 6rem 0',
      background: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Infinite White Canvas Ambient Glow from Active Beam */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '450px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${current.beamColor}18 0%, rgba(255,255,255,0) 70%)`,
        filter: 'blur(80px)',
        pointerEvents: 'none',
        transition: 'all 0.8s ease'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <div className="section-tag" style={{
            background: `${current.beamColor}12`,
            color: current.beamColor,
            borderColor: `${current.beamColor}35`
          }}>
            <Disc3 size={14} />
            {content.tag}
          </div>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>

        {/* 1. THE 3 IDENTICAL LOGOS WITH DISTINCT LIGHT BEAMS (HACES DE LUZ) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2.5rem',
          maxWidth: '1080px',
          margin: '0 auto 5rem auto'
        }} className="trinity-logos-grid">
          
          {Object.values(facets).map((f) => {
            const isSelected = activeFacet === f.id;
            const IconComponent = f.icon;

            return (
              <div
                key={f.id}
                onClick={() => setActiveFacet(f.id)}
                style={{
                  cursor: 'pointer',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  padding: '1.5rem 1rem',
                  borderRadius: '28px',
                  background: isSelected ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                  border: isSelected ? `2px solid ${f.beamColor}40` : '1px solid transparent',
                  boxShadow: isSelected ? `0 20px 40px rgba(0,0,0,0.06), ${f.beamGlow}` : 'none',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isSelected ? 'scale(1.04)' : 'scale(1)'
                }}
              >
                {/* Vertical Light Beam (Haz de Luz que sube o emana del logo) */}
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: isSelected ? '8px' : '3px',
                  height: '50px',
                  background: `linear-gradient(to top, ${f.beamColor} 0%, rgba(255,255,255,0) 100%)`,
                  borderRadius: '4px',
                  boxShadow: `0 0 20px ${f.beamColor}`,
                  opacity: isSelected ? 1 : 0.4,
                  transition: 'all 0.4s ease'
                }} />

                {/* The Identical Circular Emblem with Distinct Aura */}
                <div style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: '#0F172A',
                  position: 'relative',
                  padding: '4px',
                  border: `3.5px solid ${isSelected ? f.beamColor : '#CBD5E1'}`,
                  boxShadow: isSelected ? f.beamGlow : '0 8px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  animation: isSelected ? `beamPulse ${f.pulseSpeed} infinite alternate` : 'none'
                }}>
                  <img
                    src="/images/ggbbeats-logo-circle.png"
                    alt={`GGB Beats ${f.handle}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  />
                  
                  {/* Subtle Color Shimmer Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${f.beamColor}25 0%, transparent 80%)`,
                    pointerEvents: 'none'
                  }} />
                </div>

                {/* Identity Handle & Tag */}
                <div style={{ marginTop: '1.4rem' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    color: f.beamColor,
                    background: `${f.beamColor}12`,
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.04em'
                  }}>
                    <IconComponent size={13} />
                    <span>{f.handle}</span>
                  </div>

                  <h3 style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-main)',
                    fontWeight: '800',
                    marginBottom: '0.3rem'
                  }}>
                    {f.id === 'ggbbeats' ? 'Heavy Urban & Trap' : f.id === 'dance' ? 'Tropical & Club' : 'Acoustic & Lo-Fi'}
                  </h3>

                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                    {f.intensity}
                  </div>
                </div>

                {/* Active Indicator Pin */}
                {isSelected && (
                  <div style={{
                    marginTop: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.74rem',
                    fontWeight: '800',
                    color: f.beamColor
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: f.beamColor }} />
                    <span>FACETA ACTIVA</span>
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* 2. DYNAMIC ECOSYSTEM SPACE FOR THE ACTIVE FACET */}
        <div className="glass-card" style={{
          background: '#FFFFFF',
          borderRadius: '32px',
          border: `1.5px solid ${current.beamColor}35`,
          boxShadow: `0 25px 60px rgba(0,0,0,0.06), 0 0 35px ${current.beamColor}15`,
          padding: '3rem 2.5rem',
          position: 'relative',
          transition: 'all 0.5s ease'
        }}>
          
          {/* Active Facet Header Banner */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--border-light)',
            marginBottom: '2.5rem'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem',
                fontWeight: '800',
                color: current.beamColor,
                background: `${current.beamColor}12`,
                padding: '0.35rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '0.6rem'
              }}>
                <Sparkles size={14} />
                <span>ECOSISTEMA EXCLUSIVO: {current.handle}</span>
              </div>

              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', margin: '0.2rem 0', fontWeight: '900' }}>
                {current.name}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0, fontWeight: '500' }}>
                {current.tagline}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <a
                href={current.igUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ borderColor: current.beamColor, color: current.beamColor, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Instagram size={16} />
                <span>{current.handle}</span>
                <ExternalLink size={14} />
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById('services-hub');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
                style={{ background: current.beamColor, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Music size={16} />
                <span>{content.licenceCta}</span>
              </button>
            </div>
          </div>

          {/* Active Facet Details Grid */}
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'start', marginBottom: '3rem' }}>
            
            {/* Left: Bio, Philosophy & Genres */}
            <div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Disc3 size={20} color={current.beamColor} />
                {content.bioTitle}
              </h3>
              
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
                {current.bio}
              </p>

              <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.8rem', fontWeight: '800' }}>
                {content.genresTitle}
              </h4>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                {current.genres.map((g, i) => (
                  <span key={i} style={{
                    background: '#F8FAFC',
                    border: '1px solid var(--border-light)',
                    padding: '0.45rem 0.9rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    <CheckCircle size={13} color={current.beamColor} />
                    <span>{g}</span>
                  </span>
                ))}
              </div>

              <div style={{
                background: `${current.beamColor}08`,
                borderLeft: `4px solid ${current.beamColor}`,
                padding: '1rem 1.2rem',
                borderRadius: '0 14px 14px 0',
                fontSize: '0.88rem',
                color: 'var(--text-main)'
              }}>
                <strong>Créditos & Proyectos:</strong> {current.credits}
              </div>
            </div>

            {/* Right: Curated Releases for this Facet */}
            <div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Youtube size={20} color="#FF0000" />
                {content.releasesTitle}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                {current.releases.map((rel) => (
                  <div key={rel.id} style={{
                    display: 'flex',
                    gap: '1.2rem',
                    background: '#F8FAFC',
                    border: '1px solid var(--border-light)',
                    borderRadius: '16px',
                    padding: '0.8rem',
                    alignItems: 'center',
                    transition: 'var(--transition-smooth)'
                  }}>
                    <div style={{
                      width: '120px',
                      height: '75px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      position: 'relative',
                      background: '#0F172A',
                      flexShrink: 0
                    }}>
                      <img src={rel.thumb} alt={rel.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <a 
                        href={rel.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'rgba(0,0,0,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFF'
                        }}
                      >
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FF0000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Play size={12} fill="#FFF" color="#FFF" style={{ marginLeft: '1px' }} />
                        </div>
                      </a>
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.72rem', color: current.beamColor, fontWeight: '800', textTransform: 'uppercase' }}>
                        {rel.genre}
                      </div>
                      <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: '0.2rem 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {rel.title}
                      </h4>
                      <a 
                        href={rel.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                      >
                        Escuchar en YouTube <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Spotify Player Embed */}
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <iframe
                  src={current.spotifyEmbed}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`${current.name} Spotify Player`}
                />
              </div>

            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes beamPulse {
          0% { box-shadow: 0 0 25px rgba(224, 83, 40, 0.4); }
          100% { box-shadow: 0 0 55px rgba(224, 83, 40, 0.85), 0 0 100px rgba(224, 83, 40, 0.4); }
        }
        @media (max-width: 860px) {
          .trinity-logos-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
