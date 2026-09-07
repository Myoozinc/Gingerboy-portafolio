import React from 'react';
import { X, Printer, MapPin, Users, Heart } from 'lucide-react';

export default function MediaKitPDFModal({ isOpen, onClose, lang }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      overflowY: 'auto'
    }}>
      <div style={{
        background: '#FFFFFF',
        border: '1px solid var(--border-light)',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '880px',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2)',
        color: 'var(--text-main)'
      }} className="printable-mediakit">

        {/* Modal Controls Bar */}
        <div style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          padding: '1.2rem 2rem',
          borderBottom: '1px solid var(--border-light)',
          background: '#F8FAFC'
        }} className="no-print">
          <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--ginger-primary)' }}>
            DIGITAL MEDIA KIT ONE-PAGER (META INSIGHTS VERIFIED)
          </div>
          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <button 
              onClick={handlePrint}
              className="btn-primary" 
              style={{ padding: '0.45rem 1.2rem', fontSize: '0.85rem' }}
            >
              <Printer size={14} />
              <span>Imprimir / Exportar PDF</span>
            </button>
            <button 
              onClick={onClose}
              style={{
                background: '#E2E8F0',
                border: 'none',
                color: 'var(--text-main)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Content Area */}
        <div style={{ padding: '2.5rem' }}>
          
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', pb: '1.5rem', borderBottom: '1px solid var(--border-light)' }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--ginger-primary)', fontWeight: '800', letterSpacing: '0.1em' }}>
                OFFICIAL INFLUENCER MEDIA KIT
              </div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: '900', margin: '0.2rem 0', color: 'var(--text-main)' }}>
                Ginger Boy
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Creador, Figura Pública & Tech Innovator • @gingerboyofficial | GGB Beats (@gingerboybeats) en MYOOZ InC
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{
                background: 'var(--ginger-light)',
                color: 'var(--ginger-primary)',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: '800',
                fontSize: '0.82rem',
                display: 'inline-block'
              }}>
                ABIERTO A MARCAS Y SPONSORS
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.4rem', fontWeight: '500' }}>
                Datos de 90 Días
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginBottom: '2rem',
            background: '#F8FAFC',
            padding: '1.4rem',
            borderRadius: '16px',
            border: '1px solid var(--border-light)'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>SEGUIDORES TOTALES</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--text-main)' }}>23,250</div>
              <div style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: '700' }}>+6.3% Crecimiento</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>VISUALIZACIONES TOTALES</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--ginger-primary)' }}>658,848</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '600' }}>52.2% No Seguidores</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>AUDIENCIA FEMENINA</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#E11D48' }}>69.4%</div>
              <div style={{ fontSize: '0.72rem', color: '#E11D48', fontWeight: '700' }}>Moda / Lifestyle</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>VISITAS AL PERFIL</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--gold-accent)' }}>54,770</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '600' }}>Conversión al perfil</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>CLICS EN LINK DE BIO</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#7C3AED' }}>1,169</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '600' }}>Tráfico directo</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>RANGO EDAD CORE</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--text-main)' }}>25 - 34 (43.8%)</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '600' }}>Poder Adquisitivo</div>
            </div>
          </div>

          {/* Demographics & Geography side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            
            <div style={{ background: '#FFFFFF', padding: '1.2rem', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.8rem', color: '#E11D48', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Heart size={16} /> Demografía & Género
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Mujeres</span>
                  <span style={{ fontWeight: '700', color: '#E11D48' }}>69.4%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Hombres</span>
                  <span style={{ fontWeight: '700', color: '#7C3AED' }}>30.6%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '0.4rem', marginTop: '0.2rem' }}>
                  <span>Edad 25 - 34 (Core)</span>
                  <span style={{ fontWeight: '700' }}>43.8%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Edad 35 - 44</span>
                  <span style={{ fontWeight: '700' }}>25.6%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Edad 18 - 24</span>
                  <span style={{ fontWeight: '700' }}>16.5%</span>
                </div>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '1.2rem', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.8rem', color: 'var(--gold-accent)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} /> Top Países de Audiencia
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>🇻🇪 Venezuela</span>
                  <span style={{ fontWeight: '700' }}>19.7%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>🇲🇽 México</span>
                  <span style={{ fontWeight: '700' }}>11.2%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>🇺🇸 Estados Unidos</span>
                  <span style={{ fontWeight: '700' }}>10.3%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>🇦🇷 Argentina</span>
                  <span style={{ fontWeight: '700' }}>9.4%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>🇨🇴 Colombia</span>
                  <span style={{ fontWeight: '700' }}>7.7%</span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Footer */}
          <div style={{
            background: 'var(--ginger-gradient)',
            padding: '1.2rem 1.8rem',
            borderRadius: '16px',
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            color: '#FFF'
          }}>
            <div>
              <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>¿Interesado en patrocinar o colaborar?</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Contacto directo para propuestas de marca</div>
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: '700' }}>
              myooz.inc@gmail.com
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #FFF !important; color: #000 !important; }
          .printable-mediakit {
            background: #FFF !important;
            color: #000 !important;
            border: none !important;
            box-shadow: none !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
