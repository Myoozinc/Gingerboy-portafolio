import React from 'react';
import { Instagram, ArrowUpRight, Music2, Sparkles, Flame, Headphones, Disc3 } from 'lucide-react';

export default function InstagramAccountsSection({ lang }) {
  const accounts = [
    {
      handle: '@gingerboyofficial',
      name: 'Ginger Boy Official',
      role: 'Perfil Principal & Creador',
      tag: 'OFICIAL / LIFESTYLE',
      desc: 'Cuenta principal de Ginger Boy enfocada en estilo de vida, viajes internacionales, moda urbana y colaboraciones de marca.',
      url: 'https://instagram.com/gingerboyofficial',
      color: '#E05328',
      icon: Sparkles,
      stats: '23.2K+ Seguidores • 658K+ Impresiones'
    },
    {
      handle: '@gingerboybeats',
      name: 'Ginger Boy Beats',
      role: 'Producción Musical & Beats',
      tag: 'BEATMAKER / STUDIO',
      desc: 'Canal oficial de producción de beats, sesiones en el estudio de MYOOZ InC, lanzamientos de instrumentales y colaboraciones con artistas.',
      url: 'https://instagram.com/gingerboybeats',
      color: '#D97706',
      icon: Disc3,
      stats: 'Beatmaker • MYOOZ InC Producer'
    },
    {
      handle: '@ggbbeats.dance',
      name: 'GGB Beats Dance',
      role: 'Ritmos Club, Dance & House',
      tag: 'DANCE / CLUB VIBES',
      desc: 'Sub-marca y perfil especializado en beats enérgicos para discotecas, tracks de baile, remixes electrónicos y coreografías virales.',
      url: 'https://instagram.com/ggbbeats.dance',
      color: '#7C3AED',
      icon: Flame,
      stats: 'Club & Electronic Beats • Sync Ready'
    },
    {
      handle: '@ggbbeatschill',
      name: 'GGB Beats Chill',
      role: 'Lo-Fi, Chillhop & Ambient',
      tag: 'CHILL / LO-FI',
      desc: 'Espacio dedicado a instrumentales relajantes, texturas sonoras lo-fi, beats para estudiar/concentrarse y fondos sonoros para vlogs.',
      url: 'https://instagram.com/ggbbeatschill',
      color: '#059669',
      icon: Headphones,
      stats: 'Lo-Fi Beats • Relax & Study Sync'
    }
  ];

  const content = {
    es: {
      tag: 'ECOSISTEMA OFICIAL DE REDES SOCIALES',
      title: 'Perfiles Oficiales de Ginger Boy & GGB Beats',
      subtitle: 'Una red coordinada de 4 cuentas de Instagram dirigidas a diferentes audiencias y estilos musicales bajo el sello MYOOZ InC.',
      visitProfile: 'Visitar Perfil'
    },
    en: {
      tag: 'OFFICIAL SOCIAL MEDIA ECOSYSTEM',
      title: 'Official Profiles of Ginger Boy & GGB Beats',
      subtitle: 'A coordinated network of 4 Instagram accounts tailored to specific audiences and sonic niches under the MYOOZ InC label.',
      visitProfile: 'Visit Profile'
    }
  }[lang];

  return (
    <section id="ecosystem" style={{ padding: '5.5rem 0', background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ background: 'rgba(224, 83, 40, 0.08)', color: 'var(--ginger-primary)' }}>
            <Instagram size={14} />
            {content.tag}
          </div>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>

        {/* 4 Instagram Cards Grid */}
        <div className="grid-4" style={{ gap: '1.5rem' }}>
          {accounts.map((acc, idx) => {
            const IconComp = acc.icon;
            return (
              <a
                key={idx}
                href={acc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '1.8rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)',
                  position: 'relative',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: `${acc.color}15`,
                      color: acc.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComp size={22} />
                    </div>

                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: '800',
                      color: acc.color,
                      background: `${acc.color}10`,
                      padding: '0.25rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.05em'
                    }}>
                      {acc.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    {acc.name}
                  </h3>

                  <div style={{ fontSize: '0.92rem', color: acc.color, fontWeight: '700', marginBottom: '0.8rem' }}>
                    {acc.handle}
                  </div>

                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1.2rem' }}>
                    {acc.desc}
                  </p>
                </div>

                <div>
                  <div style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)',
                    fontWeight: '600',
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '0.8rem',
                    marginBottom: '0.8rem'
                  }}>
                    {acc.stats}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: acc.color
                  }}>
                    <span>{content.visitProfile}</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
