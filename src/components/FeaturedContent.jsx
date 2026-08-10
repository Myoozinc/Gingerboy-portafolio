import React from 'react';
import { Play, Flame, MapPin, Eye, ExternalLink } from 'lucide-react';

export default function FeaturedContent({ lang }) {
  const content = {
    es: {
      tag: 'CONTENIDO DESTACADO SEGÚN VISUALIZACIONES',
      title: 'Top Reels & Casos de Éxito',
      subtitle: 'Videos de viajes y estilo de vida con mayor alcance e interacción de la cuenta.',
      reels: [
        {
          title: 'Arco del Triunfo • París',
          views: '11,000',
          tag: 'Travel Lifestyle',
          location: 'París, Francia',
          img: '/images/travel.jpg',
          desc: 'Reel cinemático recorriendo la zona del Arco del Triunfo con alta tasa de guardados.'
        },
        {
          title: 'Ruta & Mapa de Recorrido',
          views: '9,100',
          tag: 'Guía de Viaje',
          location: 'Europa UI/Map',
          img: '/images/analytics_proof.png',
          desc: 'Formato dinámico interactivo mostrando puntos clave de interés urbano.'
        },
        {
          title: 'Máquina de Monedas Antiguas',
          views: '8,400',
          tag: 'Curiosidades & Cultura',
          location: 'Experiencia',
          img: '/images/avatar.jpg',
          desc: 'Video de entretenimiento mostrando hallazgos y experiencias únicas.'
        },
        {
          title: 'Torre Eiffel Sunset View',
          views: '7,600',
          tag: 'Aesthetic / Lifestyle',
          location: 'París, Francia',
          img: '/images/travel.jpg',
          desc: 'Toma icónica durante el atardecer parisino con alta retención de audiencia.'
        }
      ]
    },
    en: {
      tag: 'FEATURED CONTENT BY VIEWS',
      title: 'Top Reels & Showcase',
      subtitle: 'Travel & lifestyle video content with top audience playback and engagement rates.',
      reels: [
        {
          title: 'Arc de Triomphe • Paris',
          views: '11,000',
          tag: 'Travel Lifestyle',
          location: 'Paris, France',
          img: '/images/travel.jpg',
          desc: 'Cinematic reel around Arc de Triomphe with high save & share rate.'
        },
        {
          title: 'Travel Map & Route Guide',
          views: '9,100',
          tag: 'Travel Guide',
          location: 'Europe Map',
          img: '/images/analytics_proof.png',
          desc: 'Interactive map format highlighting key urban discovery spots.'
        },
        {
          title: 'Vintage Coin Arcade Machine',
          views: '8,400',
          tag: 'Culture & Spotlights',
          location: 'Experience',
          img: '/images/avatar.jpg',
          desc: 'Entertainment clip showcasing unique cultural discoveries.'
        },
        {
          title: 'Eiffel Tower Sunset Experience',
          views: '7,600',
          tag: 'Aesthetic / Lifestyle',
          location: 'Paris, France',
          img: '/images/travel.jpg',
          desc: 'Iconic golden hour shot in Paris with strong viewer retention.'
        }
      ]
    }
  }[lang];

  return (
    <section id="featured" style={{ padding: '5.5rem 0', background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Flame size={14} />
            {content.tag}
          </div>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid-4">
          {content.reels.map((reel, idx) => (
            <div key={idx} className="glass-card" style={{
              padding: '0',
              overflow: 'hidden',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              background: '#FFFFFF',
              boxShadow: 'var(--shadow-md)'
            }}>
              {/* Thumbnail */}
              <div style={{
                position: 'relative',
                height: '270px',
                width: '100%',
                overflow: 'hidden',
                background: '#0F172A'
              }}>
                <img 
                  src={reel.img} 
                  alt={reel.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 60%)'
                }} />

                {/* View Badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.8rem',
                  left: '0.8rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  color: 'var(--text-main)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}>
                  <Eye size={14} color="var(--ginger-primary)" />
                  <span>{reel.views} vistas</span>
                </div>

                {/* Play Icon */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--ginger-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--ginger-glow)',
                  cursor: 'pointer'
                }}>
                  <Play size={18} fill="#FFF" color="#FFF" style={{ marginLeft: '3px' }} />
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '0.8rem',
                  left: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.78rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: '500'
                }}>
                  <MapPin size={13} color="#F59E0B" />
                  <span>{reel.location}</span>
                </div>
              </div>

              {/* Reel Info */}
              <div style={{ padding: '1.2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{
                    fontSize: '0.72rem',
                    color: 'var(--ginger-primary)',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.3rem'
                  }}>
                    {reel.tag}
                  </div>

                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    {reel.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                    {reel.desc}
                  </p>
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: '#10B981', fontWeight: '700' }}>Alto Engagement</span>
                  <ExternalLink size={14} color="var(--text-dim)" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
