import React from 'react';
import { Disc3, ExternalLink, ShieldCheck, Sparkles, Users, Award, Music, ArrowRight } from 'lucide-react';

export default function MYOOZRecordLabelSection({ lang }) {
  const labelArtists = [
    {
      name: 'Rasta Mia',
      role: 'Cantautora • Norte de Francia',
      collab: 'Colaboración en sencillos oficiales: "Folie à Deux", "Mille et une nuits", "Sous emprise", "Danse"',
      youtube: 'https://www.youtube.com/watch?v=g1-wY1SpyuM',
      tag: 'Cantautora Internacional',
      color: '#E05328'
    },
    {
      name: 'JOSS',
      role: 'Cantante & Compositor • Venezuela',
      collab: 'Producción de sencillos y remixes de estudio: "Fantasma Remix", "Volveré" (R&B & Rock fusión)',
      youtube: 'https://www.youtube.com/watch?v=L1XWW9W8fkw',
      tag: 'R&B / Rock / Latin',
      color: '#D97706'
    },
    {
      name: 'Prodbycarrot',
      role: 'Productor & Beatmaker • MYOOZ Roster',
      collab: 'Co-producción de ritmos urbanos, diseño de sonido y librerías de sampleo exclusivas para el sello',
      youtube: 'https://www.youtube.com/watch?v=yq7OlFjQ9JM',
      tag: 'Beatmaking & Audio Design',
      color: '#7C3AED'
    },
    {
      name: 'Mnimal Beats & Pata Negra',
      role: 'Productores de Sello • Fusión Flamenca & Electrónica',
      collab: 'Desarrollo de texturas acústicas de guitarra flamenca y minimal techno para sincronizaciones comerciales',
      youtube: 'https://www.youtube.com/watch?v=RTt6GhVK7qA',
      tag: 'Acoustic & Minimalist Sync',
      color: '#059669'
    }
  ];

  const merchItems = [
    {
      name: 'GGB Beats x Adidas Hat',
      type: 'Gorra Oficial Sportswear',
      img: '/images/merch/ggbbeats-adidas-blackhat.png',
      tag: 'Colaboración de Marca'
    },
    {
      name: 'Last Urban X Heavyweight Hoodie',
      type: 'Hoodie Urbano Premium',
      img: '/images/merch/ggbbeatslasturbanx-blackhoodie-front.png',
      tag: 'Línea de Artista'
    },
    {
      name: 'MYOOZ InC Signature Jersey',
      type: 'Jersey Oficial del Sello',
      img: '/images/merch/myoozinc-blackjersey.png',
      tag: 'Sello Discográfico'
    },
    {
      name: 'GG-Pad Urban Sweatshirt',
      type: 'Sudadera Beatmaker Edition',
      img: '/images/merch/ggbbeatsggpad-blacksweatshirt.png',
      tag: 'Studio Wear'
    }
  ];

  const content = {
    es: {
      tag: 'SELLO DISCOGRÁFICO OFICIAL',
      title: 'MYOOZ InC • La Casa Discográfica de GGB Beats',
      subtitle: 'Ginger Boy opera como productor insignia dentro de MYOOZ InC, coordinando composiciones, lanzamientos con artistas internacionales y sincronizaciones audiovisuales.',
      rosterTitle: 'Colaboraciones Oficiales con Artistas del Sello',
      rosterSub: 'Proyectos discográficos y coproducciones lanzadas bajo el sello MYOOZ InC.',
      merchTitle: 'Línea Oficial de Streetwear & Merch del Sello',
      merchSub: 'Prendas de alta confección urbana diseñadas en concordancia con los lanzamientos musicales.',
      visitLabel: 'Visitar Plataforma de MYOOZ InC',
      labelNote: 'Sello discográfico independiente con distribución global en plataformas digitales.'
    },
    en: {
      tag: 'OFFICIAL RECORD LABEL',
      title: 'MYOOZ InC • The Record Label Behind GGB Beats',
      subtitle: 'Ginger Boy acts as the flagship producer at MYOOZ InC, driving original compositions, cross-artist releases, and audiovisual sync licensing.',
      rosterTitle: 'Official Collaborations with Label Artists',
      rosterSub: 'Record releases and studio co-productions released under MYOOZ InC.',
      merchTitle: 'Official Label Streetwear & Merch Apparel',
      merchSub: 'Heavyweight streetwear collections crafted in direct connection with sonic drops.',
      visitLabel: 'Visit MYOOZ InC Official Platform',
      labelNote: 'Independent record label with global digital streaming distribution.'
    }
  }[lang];

  return (
    <section id="record-label" style={{
      padding: '7rem 0',
      background: 'linear-gradient(180deg, #0F172A 0%, #070B14 100%)',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background Architectural Grid Lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(224, 83, 40, 0.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.5,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Label Introduction Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: '4.5rem'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.78rem',
              fontWeight: '800',
              color: '#F59E0B',
              background: 'rgba(245, 158, 11, 0.1)',
              padding: '0.35rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem',
              letterSpacing: '0.08em'
            }}>
              <Disc3 size={14} />
              <span>{content.tag}</span>
            </div>

            <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-0.02em', margin: '0.2rem 0' }}>
              MYOOZ InC <span style={{ color: '#E05328' }}>Record Label</span>
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '680px', lineHeight: '1.6', margin: '0.5rem 0 0 0' }}>
              {content.subtitle}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            <a
              href="https://myoozinc.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'linear-gradient(135deg, #E05328 0%, #D97706 100%)',
                color: '#FFFFFF',
                padding: '0.85rem 1.8rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: '800',
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(224, 83, 40, 0.4)',
                transition: 'var(--transition-smooth)'
              }}
            >
              <span>{content.visitLabel}</span>
              <ExternalLink size={16} />
            </a>

            <span style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.5)' }}>
              myoozinc.com • Catálogo & Roster
            </span>
          </div>
        </div>

        {/* Artist Collaborations Roster Grid */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', fontWeight: '800', marginBottom: '0.4rem' }}>
              {content.rosterTitle}
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem' }}>
              {content.rosterSub}
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {labelArtists.map((artist, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      color: artist.color,
                      background: `${artist.color}15`,
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.05em'
                    }}>
                      {artist.tag}
                    </span>

                    <a
                      href={artist.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'rgba(255, 255, 255, 0.6)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', textDecoration: 'none' }}
                    >
                      <span>Ver en YouTube</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <h4 style={{ fontSize: '1.5rem', color: '#FFFFFF', fontWeight: '800', marginBottom: '0.3rem' }}>
                    {artist.name}
                  </h4>
                  
                  <div style={{ fontSize: '0.88rem', color: '#F59E0B', fontWeight: '700', marginBottom: '1rem' }}>
                    {artist.role}
                  </div>

                  <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.6' }}>
                    {artist.collab}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                  <ShieldCheck size={14} color="#10B981" />
                  <span>Producción Registrada en MYOOZ InC</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Streetwear & Merch Showcase */}
        <div>
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', fontWeight: '800', marginBottom: '0.4rem' }}>
              {content.merchTitle}
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem' }}>
              {content.merchSub}
            </p>
          </div>

          <div className="grid-4" style={{ gap: '1.8rem' }}>
            {merchItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <div style={{
                  height: '240px',
                  background: '#0B132B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  position: 'relative'
                }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.4))'
                    }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '0.8rem',
                    left: '0.8rem',
                    background: 'rgba(15, 23, 42, 0.85)',
                    color: '#FFF',
                    fontSize: '0.68rem',
                    fontWeight: '800',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    {item.tag}
                  </span>
                </div>

                <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <h5 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: '800', marginBottom: '0.2rem' }}>
                      {item.name}
                    </h5>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', margin: 0 }}>
                      {item.type}
                    </p>
                  </div>

                  <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a
                      href="https://myoozinc.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.78rem', color: '#E05328', fontWeight: '800', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                    >
                      <span>Ver en myoozinc.com</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
