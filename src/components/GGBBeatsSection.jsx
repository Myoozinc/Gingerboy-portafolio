import React, { useState } from 'react';
import { Play, Pause, Disc3, Sparkles, ExternalLink, Headphones, Youtube, Radio, CheckCircle, ArrowRight } from 'lucide-react';

export default function GGBBeatsSection({ lang }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const officialReleases = [
    {
      id: 'OAMM8ji9pr0',
      title: 'Reggaeton Beat 2026',
      genre: 'Urban / Reggaeton',
      thumb: '/images/yt_beat_1.jpg',
      url: 'https://www.youtube.com/watch?v=OAMM8ji9pr0'
    },
    {
      id: '3uBheqK9yXc',
      title: '[FREE] Trap Reggaeton Switch Beat 2026',
      genre: 'Trap & Reggaeton Switch',
      thumb: '/images/yt_beat_2.jpg',
      url: 'https://www.youtube.com/watch?v=3uBheqK9yXc'
    },
    {
      id: '66iNvxEKZVg',
      title: 'REAL Bolero Flamenco Instrumental Acústico',
      genre: 'Acoustic / Flamenco Fusion',
      thumb: '/images/yt_beat_3.jpg',
      url: 'https://www.youtube.com/watch?v=66iNvxEKZVg'
    },
    {
      id: '57JNWfVP75M',
      title: 'MAMI CHULA | RKT Reggaeton',
      genre: 'RKT / Latin Club',
      thumb: '/images/yt_beat_4.jpg',
      url: 'https://www.youtube.com/watch?v=57JNWfVP75M'
    }
  ];

  const content = {
    es: {
      tag: 'GGB BEATS • SELLO MYOOZ INC RECORD LABEL',
      title: 'Catálogo Musical Oficial & Licencias de Beats',
      subtitle: 'Ginger Boy es el productor musical detrás de GGB Beats en el sello discográfico MYOOZ InC. Escucha sus lanzamientos en Spotify, YouTube y adquiere licencias oficiales.',
      spotifyTitle: 'Spotify Oficial • GGB Beats',
      releasesTitle: 'Últimos Lanzamientos en YouTube',
      labelBacking: 'Artista & Productor Oficial de MYOOZ InC',
      labelDesc: 'Composiciones con derechos de autor protegidos y disponibilidad para sincronización en campañas publicitarias, cine, streaming y lanzamientos artísticos.',
      licencesTitle: 'Tarifas Oficiales de Licenciamiento (myoozinc.com)',
      licencesSub: 'Precios estandarizados del sello discográfico para artistas y marcas.'
    },
    en: {
      tag: 'GGB BEATS • MYOOZ INC RECORD LABEL',
      title: 'Official Music Catalog & Beat Licensing',
      subtitle: 'Ginger Boy is the official music producer behind GGB Beats under MYOOZ InC Record Label. Stream his releases on Spotify, YouTube and license tracks directly.',
      spotifyTitle: 'Official Spotify • GGB Beats',
      releasesTitle: 'Latest YouTube Releases',
      labelBacking: 'Official Producer & Artist of MYOOZ InC',
      labelDesc: 'Copyright-protected original compositions ready for brand commercial sync, streaming platforms, and film scoring.',
      licencesTitle: 'Official Beat Licensing Tiers (myoozinc.com)',
      licencesSub: 'Standardized record label rates for artists and commercial brands.'
    }
  }[lang];

  return (
    <section id="ggb-beats" style={{ padding: '6rem 0', background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ background: 'rgba(217, 119, 6, 0.1)', color: '#D97706', borderColor: 'rgba(217, 119, 6, 0.25)' }}>
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

        {/* Record Label Banner */}
        <div className="glass-card" style={{
          padding: '1.8rem 2.2rem',
          background: '#FFFFFF',
          marginBottom: '3.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          border: '1px solid var(--border-light)',
          borderRadius: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              overflow: 'hidden',
              background: '#0F172A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-md)',
              flexShrink: 0
            }}>
              <img 
                src="/images/ggbbeats-logo-circle.png" 
                alt="GGB Beats" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', margin: 0 }}>
                  GGB Beats en MYOOZ InC
                </h3>
                <span style={{
                  background: 'rgba(217, 119, 6, 0.12)',
                  color: '#D97706',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  RECORD LABEL ROSTER
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.3rem', maxWidth: '650px' }}>
                {content.labelDesc}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <a
              href="https://myoozinc.com/ggbbeats/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <span>Ver en myoozinc.com</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="https://open.spotify.com/artist/0QrrPjP73pfBddZBUHUjd0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem', background: '#1DB954', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Headphones size={15} />
              <span>Spotify Oficial</span>
            </a>
          </div>
        </div>

        {/* Music Catalog Grid: Spotify Embed + YouTube Releases */}
        <div className="grid-2" style={{ alignItems: 'start', gap: '2.5rem', marginBottom: '4rem' }}>
          
          {/* Left: Spotify Artist Embed Player */}
          <div className="glass-card" style={{ padding: '1.8rem', background: '#FFFFFF' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#1DB954' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', margin: 0 }}>
                  {content.spotifyTitle}
                </h3>
              </div>
              <a 
                href="https://open.spotify.com/artist/0QrrPjP73pfBddZBUHUjd0" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '0.8rem', color: '#1DB954', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
              >
                Abrir en App <ExternalLink size={12} />
              </a>
            </div>

            {/* Official Spotify Embed */}
            <div style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <iframe 
                src="https://open.spotify.com/embed/artist/0QrrPjP73pfBddZBUHUjd0?utm_source=generator&theme=0" 
                width="100%" 
                height="380" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="GGB Beats Spotify Player"
              />
            </div>
          </div>

          {/* Right: Official YouTube Releases from myoozinc.com */}
          <div className="glass-card" style={{ padding: '1.8rem', background: '#FFFFFF' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Youtube size={20} color="#FF0000" />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', margin: 0 }}>
                  {content.releasesTitle}
                </h3>
              </div>
              <a 
                href="https://youtube.com/@ggbbeats" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '0.8rem', color: '#FF0000', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
              >
                @ggbbeats <ExternalLink size={12} />
              </a>
            </div>

            {/* YouTube Releases Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {officialReleases.map((rel) => (
                <div 
                  key={rel.id} 
                  style={{
                    borderRadius: '14px',
                    overflow: 'hidden',
                    background: '#F8FAFC',
                    border: '1px solid var(--border-light)',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <div style={{ position: 'relative', height: '110px', background: '#0F172A' }}>
                    <img 
                      src={rel.thumb} 
                      alt={rel.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <a
                      href={rel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFF',
                        textDecoration: 'none'
                      }}
                    >
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#FF0000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(255,0,0,0.4)'
                      }}>
                        <Play size={16} fill="#FFF" color="#FFF" style={{ marginLeft: '2px' }} />
                      </div>
                    </a>
                  </div>

                  <div style={{ padding: '0.8rem' }}>
                    <div style={{ fontSize: '0.68rem', color: '#D97706', fontWeight: '800', textTransform: 'uppercase' }}>
                      {rel.genre}
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)', marginTop: '0.2rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {rel.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Official Beat Licences directly from myoozinc.com/ggbbeats/ */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
              {content.licencesTitle}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {content.licencesSub}
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            
            {/* WAV LEASE ($100) */}
            <div className="glass-card" style={{ padding: '2rem', background: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  LICENCIA BÁSICA
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: '900', color: 'var(--text-main)', margin: '0.3rem 0' }}>
                  $100 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '500' }}>USD</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#D97706', fontWeight: '700', marginBottom: '1.5rem' }}>
                  WAV Lease • MP3 + WAV
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#10B981" />
                    <span>Grabación musical comercial</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#10B981" />
                    <span>Distribución hasta 10.000 copias</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#10B981" />
                    <span>200.000 streams online</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#10B981" />
                    <span>1 videoclip oficial</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#10B981" />
                    <span>Emisión en 2 emisoras de radio</span>
                  </div>
                </div>
              </div>

              <a
                href="https://myoozinc.com/ggbbeats/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '2rem' }}
              >
                <span>Solicitar en MYOOZ InC</span>
              </a>
            </div>

            {/* EXCLUSIVE BEAT ($200+) */}
            <div className="glass-card" style={{
              padding: '2rem',
              background: '#FFFFFF',
              border: '2px solid #D97706',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#D97706',
                color: '#FFF',
                padding: '0.2rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.72rem',
                fontWeight: '800'
              }}>
                MÁS SOLICITADA
              </div>

              <div>
                <div style={{ fontSize: '0.78rem', color: '#D97706', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  LICENCIA EXCLUSIVA
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: '900', color: 'var(--text-main)', margin: '0.3rem 0' }}>
                  A partir de $200 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '500' }}>USD</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#D97706', fontWeight: '700', marginBottom: '1.5rem' }}>
                  Beat Personalizado • Stems + MP3 + WAV
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#D97706" />
                    <span>Composición y arreglos (máx 8 pistas)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#D97706" />
                    <span>Distribución ilimitada de copias</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#D97706" />
                    <span>500.000 streams online</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#D97706" />
                    <span>Actuaciones en directo con fines de lucro</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#D97706" />
                    <span>Entrega completa de Stems (Pistas separadas)</span>
                  </div>
                </div>
              </div>

              <a
                href="https://myoozinc.com/ggbbeats/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '2rem', background: 'linear-gradient(135deg, #D97706 0%, #E05328 100%)' }}
              >
                <span>Adquirir Licencia Exclusiva</span>
              </a>
            </div>

            {/* COMMERCIAL BRAND SYNC & CAMPAIGN */}
            <div className="glass-card" style={{ padding: '2rem', background: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  SINCRONIZACIÓN COMERCIAL
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: '900', color: 'var(--ginger-primary)', margin: '0.3rem 0' }}>
                  Audio + Reel <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '500' }}>Pack</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--ginger-primary)', fontWeight: '700', marginBottom: '1.5rem' }}>
                  Campañas de Marca & Social Media
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="var(--ginger-primary)" />
                    <span>Beat original creado para el video de tu marca</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="var(--ginger-primary)" />
                    <span>1x Reel viral publicado en @gingerboyofficial</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="var(--ginger-primary)" />
                    <span>Uso publicitario en Meta Ads y TikTok</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="var(--ginger-primary)" />
                    <span>Licencia perpetua de sincronización comercial</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="var(--ginger-primary)" />
                    <span>Alta recordación sonora de marca</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '2rem' }}
              >
                <span>Cotizar Sincronización</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
