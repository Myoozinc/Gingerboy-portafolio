import React from 'react';
import { Instagram, Youtube, ExternalLink, Disc3, Headphones } from 'lucide-react';

export default function Footer({ lang }) {
  return (
    <footer style={{
      padding: '4rem 0 2.5rem 0',
      borderTop: '1px solid var(--border-light)',
      background: '#FFFFFF',
      color: 'var(--text-muted)',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid var(--border-light)'
        }} className="footer-grid">
          
          {/* Column 1: Brand & Record Label */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                overflow: 'hidden',
                background: '#0F172A',
                border: '2px solid var(--ginger-primary)'
              }}>
                <img 
                  src="/images/ggbbeats-logo-circle.png" 
                  alt="GGB Beats" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--text-main)' }}>
                  Ginger Boy • GGB Beats
                </div>
                <div style={{ fontSize: '0.75rem', color: '#D97706', fontWeight: '700', textTransform: 'uppercase' }}>
                  MYOOZ InC Record Label Artist
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '380px' }}>
              Portafolio comercial oficial para marcas, sincronización de audio, producción de beats y colaboraciones digitales bajo el sello discográfico MYOOZ InC.
            </p>

            <div style={{ marginTop: '1.2rem' }}>
              <a 
                href="https://myoozinc.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: 'var(--ginger-primary)',
                  fontWeight: '700',
                  textDecoration: 'none'
                }}
              >
                <span>Visitar sello oficial: myoozinc.com</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: 4 Official Instagram Accounts */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1.2rem', fontWeight: '800' }}>
              Red Oficial de Instagram
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a 
                href="https://instagram.com/gingerboyofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                style={footerLinkStyle}
              >
                <Instagram size={16} color="var(--ginger-primary)" />
                <span>@gingerboyofficial</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginLeft: 'auto' }}>Principal</span>
              </a>

              <a 
                href="https://instagram.com/gingerboybeats" 
                target="_blank" 
                rel="noopener noreferrer"
                style={footerLinkStyle}
              >
                <Instagram size={16} color="#D97706" />
                <span>@gingerboybeats</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginLeft: 'auto' }}>Beats / Studio</span>
              </a>

              <a 
                href="https://instagram.com/ggbbeats.dance" 
                target="_blank" 
                rel="noopener noreferrer"
                style={footerLinkStyle}
              >
                <Instagram size={16} color="#7C3AED" />
                <span>@ggbbeats.dance</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginLeft: 'auto' }}>Dance / Club</span>
              </a>

              <a 
                href="https://instagram.com/ggbbeatschill" 
                target="_blank" 
                rel="noopener noreferrer"
                style={footerLinkStyle}
              >
                <Instagram size={16} color="#059669" />
                <span>@ggbbeatschill</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginLeft: 'auto' }}>Lo-Fi / Chill</span>
              </a>
            </div>
          </div>

          {/* Column 3: Streaming & Licensing */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1.2rem', fontWeight: '800' }}>
              Música & Licencias
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a 
                href="https://open.spotify.com/artist/0QrrPjP73pfBddZBUHUjd0" 
                target="_blank" 
                rel="noopener noreferrer"
                style={footerLinkStyle}
              >
                <Headphones size={16} color="#1DB954" />
                <span>Spotify Oficial (GGB Beats)</span>
              </a>

              <a 
                href="https://youtube.com/@ggbbeats" 
                target="_blank" 
                rel="noopener noreferrer"
                style={footerLinkStyle}
              >
                <Youtube size={16} color="#FF0000" />
                <span>YouTube (@ggbbeats)</span>
              </a>

              <a 
                href="https://myoozinc.com/ggbbeats/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={footerLinkStyle}
              >
                <Disc3 size={16} color="#D97706" />
                <span>Licencias de Beats en MYOOZ InC</span>
              </a>

              <a 
                href="#services" 
                style={footerLinkStyle}
              >
                <span style={{ color: 'var(--ginger-primary)' }}>•</span>
                <span>Tarifario Comercial para Marcas</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
          <div>
            © {new Date().getFullYear()} Ginger Boy & GGB Beats. Publicado bajo licencia de <strong style={{ color: 'var(--text-main)' }}>MYOOZ InC</strong>.
          </div>

          <div>
            Estadísticas verificadas vía Meta Business Insights (Últimos 90 días).
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}

const footerLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: '500',
  transition: 'var(--transition-smooth)'
};
