import React from 'react';
import { Play, Flame, MapPin, Eye, Sparkles, ExternalLink } from 'lucide-react';

export default function FeaturedContent({ lang }) {
  const content = {
    es: {
      tag: 'CONTENIDO DESTACADO SEGÚN VISUALIZACIONES',
      title: 'Top Reels & Casos de Éxito',
      subtitle: 'Contenido travel & lifestyle con mayor número de reproducciones e interacción de la cuenta.',
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
          img: '/images/travel.jpg',
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
          img: '/images/travel.jpg',
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
    <section id="featured" style={{ padding: '6rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ borderColor: 'rgba(255,94,54,0.3)' }}>
            <Flame size={14} style={{ display: 'inline', marginRight: '0.4rem', color: '#FF5E36' }} />
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
              position: 'relative'
            }}>
              {/* Media Thumbnail Container */}
              <div style={{
                position: 'relative',
                height: '280px',
                width: '100%',
                overflow: 'hidden'
              }}>
                <img 
                  src={reel.img} 
                  alt={reel.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="reel-img"
                />
                
                {/* Dark Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(9, 11, 16, 0.95) 0%, transparent 60%)'
                }} />

                {/* View Counter Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(9, 11, 16, 0.85)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-ginger)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: '#FFF'
                }}>
                  <Eye size={14} color="#FF5E36" />
                  <span>{reel.views} vistas</span>
                </div>

                {/* Play Button Icon Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'var(--ginger-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--ginger-glow)',
                  cursor: 'pointer'
                }}>
                  <Play size={20} fill="#FFF" color="#FFF" style={{ marginLeft: '3px' }} />
                </div>

                {/* Bottom Location Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)'
                }}>
                  <MapPin size={14} color="#FF9E2C" />
                  <span>{reel.location}</span>
                </div>
              </div>

              {/* Reel Info */}
              <div style={{ padding: '1.2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--ginger-primary)',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.3rem'
                  }}>
                    {reel.tag}
                  </div>

                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#FFF' }}>
                    {reel.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                    {reel.desc}
                  </p>
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: '#10B981', fontWeight: '600' }}>Alto Engagement</span>
                  <ExternalLink size={14} color="var(--text-dim)" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .reel-img:hover {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
}
