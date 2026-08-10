import React from 'react';
import { Heart, Instagram, Sparkles } from 'lucide-react';

export default function Footer({ lang }) {
  return (
    <footer style={{
      padding: '3rem 0',
      borderTop: '1px solid var(--border-light)',
      background: '#07090D',
      color: 'var(--text-dim)',
      fontSize: '0.88rem'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--ginger-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            fontSize: '0.9rem',
            color: '#FFF'
          }}>
            GB
          </div>
          <div>
            <span style={{ color: '#FFF', fontWeight: '700' }}>Ginger Boy</span> — Commercial Media Kit & Creator Hub
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Instagram size={16} />
            <span>@gingerboy</span>
          </a>
          <span>•</span>
          <span>Stats Verified via Professional Dashboard</span>
        </div>

        <div style={{ color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} Ginger Boy. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
