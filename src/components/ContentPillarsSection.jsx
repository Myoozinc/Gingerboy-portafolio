import React from 'react';
import { Compass, HeartHandshake, Laptop, Sparkles, MapPin, Layers, ExternalLink, CheckCircle } from 'lucide-react';

export default function ContentPillarsSection({ lang }) {
  const pillars = [
    {
      id: 'lifestyle',
      title: 'Figura Pública & Lifestyle',
      tag: 'MARCA PERSONAL',
      icon: Sparkles,
      color: '#E05328',
      desc: 'Presencia personal auténtica, moda urbana, estilo de vida y conexión directa con una comunidad activa de más de 23.2K seguidores.',
      highlights: ['69.4% Audiencia femenina', '85.9% Entre 18 y 44 años', 'Alta retención en historias']
    },
    {
      id: 'travel',
      title: 'Viajes & Experiencias Internacionales',
      tag: 'TRAVEL & CULTURE',
      icon: Compass,
      color: '#D97706',
      desc: 'Contenido cinematográfico recorriendo destinos emblemáticos como París y Europa, mostrando gastronomía, cultura urbana y descubrimientos locales.',
      highlights: ['Reels con +11K reproducciones', 'Contenido estético en alta definición', 'Guías urbanas de viaje']
    },
    {
      id: 'tech_humanitarian',
      title: 'Apps & Ayuda Humanitaria',
      tag: 'IMPACTO SOCIAL & TECH',
      icon: Laptop,
      color: '#059669',
      desc: 'Faceta como desarrollador de aplicaciones de impacto comunitario como "Centro de Acopio", creando mapas interactivos y herramientas digitales solidarias.',
      image: '/images/acopio_donaciones.jpg',
      highlights: ['App solidaria "Centro de Acopio"', 'Mapas interactivos comunitarios', 'Tecnología con propósito real']
    },
    {
      id: 'commercial',
      title: 'Publicidad & Alianzas de Marca',
      tag: 'COLABORACIONES COMERCIALES',
      icon: HeartHandshake,
      color: '#7C3AED',
      desc: 'Integración orgánica de productos, servicios y campañas comerciales en formatos de alto impacto (Reels, Historias, Enlaces en Bio).',
      highlights: ['54.7K+ Visitas al perfil', '1,169 Clics en enlaces de bio', '52.2% Alcance a no seguidores']
    }
  ];

  const content = {
    es: {
      tag: 'DIVERSIDAD DE CONTENIDO CON PROPÓSITO',
      title: 'Los Pilares de Contenido de Ginger Boy',
      subtitle: 'Más allá de un creador convencional: una combinación de figura pública, viajes internacionales, innovación tecnológica solidaria y alianzas comerciales.',
      humanitarianNote: 'Proyecto de Innovación Solidaria: Centro de Acopio'
    },
    en: {
      tag: 'PURPOSE-DRIVEN CONTENT DIVERSITY',
      title: 'Ginger Boy\'s Core Content Pillars',
      subtitle: 'Beyond a conventional creator: a unique blend of public figure, international travel, humanitarian tech innovation, and brand partnerships.',
      humanitarianNote: 'Humanitarian Tech Innovation: Centro de Acopio'
    }
  }[lang];

  return (
    <section id="pillars" style={{ padding: '6rem 0', background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ background: 'rgba(224, 83, 40, 0.08)', color: 'var(--ginger-primary)' }}>
            <Layers size={14} />
            {content.tag}
          </div>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid-2" style={{ gap: '2rem' }}>
          {pillars.map((p) => {
            const IconComp = p.icon;
            return (
              <div
                key={p.id}
                className="glass-card"
                style={{
                  padding: '2.2rem',
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Top Category Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: `${p.color}15`,
                      color: p.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComp size={24} />
                    </div>

                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      color: p.color,
                      background: `${p.color}10`,
                      padding: '0.3rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.05em'
                    }}>
                      {p.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.6rem' }}>
                    {p.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {p.desc}
                  </p>

                  {/* If humanitarian tech pillar, show real app graphic */}
                  {p.image && (
                    <div style={{
                      marginBottom: '1.5rem',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-light)',
                      background: '#0F172A',
                      position: 'relative'
                    }}>
                      <img 
                        src={p.image} 
                        alt="Centro de Acopio App" 
                        style={{ width: '100%', height: '160px', objectFit: 'cover' }} 
                      />
                      <div style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                        padding: '0.8rem 1rem',
                        fontSize: '0.78rem',
                        color: '#FFF',
                        fontWeight: '700'
                      }}>
                        {content.humanitarianNote}
                      </div>
                    </div>
                  )}
                </div>

                {/* Highlights List */}
                <div style={{
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {p.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                      <CheckCircle size={15} color={p.color} style={{ flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
