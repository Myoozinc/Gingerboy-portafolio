import React, { useState } from 'react';
import { Briefcase, Calculator, Check, ArrowRight, Disc3, Music2, Sparkles } from 'lucide-react';

export default function ServicesRates({ lang, onSelectPackage }) {
  const [selectedDeliverables, setSelectedDeliverables] = useState({
    reels: 1,
    stories: 3,
    feedPosts: 1,
    customBeat: false,
    rights: false
  });

  const content = {
    es: {
      tag: 'OPCIONES COMERCIALES DE COLABORACIÓN',
      title: 'Paquetes de Patrocinio, Tarifas & GGB Beats',
      subtitle: 'Formatos diseñados para maximizar el retorno de inversión, engagement y posicionamiento de marca con audio e imagen.',
      packages: [
        {
          id: 'reel_pack',
          title: 'Reel Patrocinado HD',
          tag: 'MÁS POPULAR',
          desc: 'Creación de video cinemático enfocado en experiencia de producto o servicio.',
          price: '$350 - $600 USD',
          features: [
            '1x Reel cinemático 4K (30-60 seg)',
            'Mención directa en audio & caption',
            'Tag de marca en primera línea + Link Bio',
            'Copia de estadísticas a las 48h y 7 días',
            'Alcance estimado: +10K a +320K vistas'
          ],
          highlight: true
        },
        {
          id: 'ggb_audio_pack',
          title: 'GGB Beats Audio Sync + Reel',
          tag: 'SONIDO & IMAGEN',
          desc: 'Composición de un beat original exclusivo para tu marca + producción de Reel viral.',
          price: '$500 - $850 USD',
          features: [
            'Beat original exclusivo compuesto por GGB Beats',
            '1x Reel viral utilizando el audio de tu marca',
            'Licencia de uso comercial perpetua para tus redes',
            'Audio disponible en Instagram/TikTok con nombre de marca',
            'Máxima retención y recordación auditiva'
          ],
          highlight: false
        },
        {
          id: 'story_pack',
          title: 'Pack Historias Interactivas',
          tag: 'ALTA CONVERSIÓN',
          desc: 'Secuencia persuasiva de 3 historias con enlaces directos y stickers.',
          price: '$200 - $350 USD',
          features: [
            '3x Historias consecutivas en 24h',
            'Sticker de enlace directo / Código promo',
            'Muestra real de uso/experiencia',
            'Sticker de encuesta o pregunta interactiva',
            'Alcance estimado: +200K impresiones'
          ],
          highlight: false
        }
      ],
      calcTitle: 'Calculadora Personalizada de Inversión',
      calcSub: 'Selecciona entregables y opciones de audio branding para estimar el alcance total y presupuesto sugerido.',
      reelsLabel: 'Número de Reels:',
      storiesLabel: 'Número de Historias:',
      feedLabel: 'Publicaciones en Feed:',
      beatLabel: 'Incluir Beat Original Exclusivo de GGB Beats (+ $200 USD)',
      rightsLabel: 'Incluir Derechos de Uso en Publicidad Meta Ads (+ 25%)',
      estViews: 'Alcance Estimado Total:',
      estBudget: 'Inversión Sugerida:',
      selectCta: 'Solicitar este Paquete'
    },
    en: {
      tag: 'COMMERCIAL COLLABORATION OPTIONS',
      title: 'Sponsorship Packages, Rates & GGB Beats',
      subtitle: 'Custom formats tailored for maximum ROI, conversion and sonic brand recall.',
      packages: [
        {
          id: 'reel_pack',
          title: 'HD Sponsored Reel',
          tag: 'MOST POPULAR',
          desc: 'Cinematic video production showcasing your product or service.',
          price: '$350 - $600 USD',
          features: [
            '1x Cinematic 4K Reel (30-60s)',
            'Direct brand mention in voiceover & text',
            'Brand tag + Link in Bio inclusion',
            'Full analytics delivery at 48h & 7 days',
            'Est. Reach: +10K to +320K views'
          ],
          highlight: true
        },
        {
          id: 'ggb_audio_pack',
          title: 'GGB Beats Audio Sync + Reel',
          tag: 'AUDIO & VISUAL',
          desc: 'Original bespoke beat composed for your campaign + viral Reel production.',
          price: '$500 - $850 USD',
          features: [
            'Bespoke original beat produced by GGB Beats',
            '1x Viral Reel showcasing the custom brand track',
            'Perpetual commercial sync license for brand channels',
            'Audio whitelisted on Instagram/TikTok with brand title',
            'Unmatched sonic recall and audience retention'
          ],
          highlight: false
        },
        {
          id: 'story_pack',
          title: 'Interactive Stories Pack',
          tag: 'HIGH CONVERSION',
          desc: 'Sequenced 3-story campaign with link stickers and promo codes.',
          price: '$200 - $350 USD',
          features: [
            '3x Consecutive Stories within 24h',
            'Direct link sticker / Promo code',
            'Authentic product unboxing or review',
            'Interactive poll/question sticker',
            'Est. Reach: +200K impressions'
          ],
          highlight: false
        }
      ],
      calcTitle: 'Custom Collaboration Estimator',
      calcSub: 'Select deliverables and sonic branding options to estimate total reach and commercial budget.',
      reelsLabel: 'Number of Reels:',
      storiesLabel: 'Number of Stories:',
      feedLabel: 'Feed Carousel Posts:',
      beatLabel: 'Include Custom Original GGB Beat (+ $200 USD)',
      rightsLabel: 'Include Paid Meta Ads Usage Rights (+ 25%)',
      estViews: 'Est. Total Reach:',
      estBudget: 'Suggested Investment:',
      selectCta: 'Request This Package'
    }
  }[lang];

  // Dynamic Calculation
  const estimatedReach = (selectedDeliverables.reels * 45000) + (selectedDeliverables.stories * 25000) + (selectedDeliverables.feedPosts * 18000);
  let baseBudget = (selectedDeliverables.reels * 300) + (selectedDeliverables.stories * 90) + (selectedDeliverables.feedPosts * 120);
  if (selectedDeliverables.customBeat) {
    baseBudget += 200;
  }
  const finalBudget = selectedDeliverables.rights ? Math.round(baseBudget * 1.25) : baseBudget;

  return (
    <section id="services" style={{ padding: '6rem 0', background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            {content.tag}
          </div>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>

        {/* Packages Grid (3 Columns) */}
        <div className="grid-3" style={{ marginBottom: '4rem' }}>
          {content.packages.map((pkg) => (
            <div key={pkg.id} className="glass-card" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              borderColor: pkg.highlight ? 'var(--ginger-primary)' : 'var(--border-light)',
              boxShadow: pkg.highlight ? 'var(--ginger-glow)' : 'var(--shadow-md)',
              background: '#FFFFFF'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#D97706', fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {pkg.id === 'ggb_audio_pack' && <Disc3 size={14} />}
                  {pkg.highlight ? (
                    <span style={{
                      background: 'var(--ginger-gradient)',
                      color: '#FFF',
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      padding: '0.25rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      boxShadow: 'var(--ginger-glow)'
                    }}>
                      {pkg.tag}
                    </span>
                  ) : (
                    <span>{pkg.tag}</span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', margin: '0 0 0.4rem 0', lineHeight: 1.3 }}>
                  {pkg.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem', minHeight: '44px' }}>
                  {pkg.desc}
                </p>

                <div style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: pkg.highlight ? 'var(--ginger-primary)' : 'var(--text-main)',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-light)'
                }}>
                  {pkg.price}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                  {pkg.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                      <Check size={16} color="var(--ginger-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPackage(pkg)}
                className={pkg.highlight ? "btn-primary" : "btn-secondary"}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>{content.selectCta}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Custom Calculator */}
        <div className="glass-card" style={{
          padding: '2.5rem',
          background: '#F8FAFC',
          borderColor: 'var(--border-light)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <Calculator color="var(--ginger-primary)" size={24} />
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)' }}>{content.calcTitle}</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
            {content.calcSub}
          </p>

          <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'center' }}>
            
            {/* Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.95rem', fontWeight: '600' }}>
                  <span>{content.reelsLabel}</span>
                  <span style={{ fontWeight: '800', color: 'var(--ginger-primary)' }}>{selectedDeliverables.reels} Reels</span>
                </div>
                <input 
                  type="range" min="0" max="5" 
                  value={selectedDeliverables.reels} 
                  onChange={(e) => setSelectedDeliverables({ ...selectedDeliverables, reels: parseInt(e.target.value) })}
                  style={sliderStyle}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.95rem', fontWeight: '600' }}>
                  <span>{content.storiesLabel}</span>
                  <span style={{ fontWeight: '800', color: 'var(--gold-accent)' }}>{selectedDeliverables.stories} Historias</span>
                </div>
                <input 
                  type="range" min="0" max="10" 
                  value={selectedDeliverables.stories} 
                  onChange={(e) => setSelectedDeliverables({ ...selectedDeliverables, stories: parseInt(e.target.value) })}
                  style={sliderStyle}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.95rem', fontWeight: '600' }}>
                  <span>{content.feedLabel}</span>
                  <span style={{ fontWeight: '800', color: '#7C3AED' }}>{selectedDeliverables.feedPosts} Posts</span>
                </div>
                <input 
                  type="range" min="0" max="5" 
                  value={selectedDeliverables.feedPosts} 
                  onChange={(e) => setSelectedDeliverables({ ...selectedDeliverables, feedPosts: parseInt(e.target.value) })}
                  style={sliderStyle}
                />
              </div>

              {/* Custom GGB Beat Checkbox */}
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                background: '#FFFFFF',
                padding: '0.8rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                fontSize: '0.9rem',
                color: 'var(--text-main)',
                fontWeight: '600'
              }}>
                <input 
                  type="checkbox" 
                  checked={selectedDeliverables.customBeat} 
                  onChange={(e) => setSelectedDeliverables({ ...selectedDeliverables, customBeat: e.target.checked })}
                  style={{ width: '18px', height: '18px', accentColor: '#D97706' }}
                />
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Disc3 size={15} color="#D97706" />
                  {content.beatLabel}
                </span>
              </label>

              {/* Meta Ad Rights Checkbox */}
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                background: '#FFFFFF',
                padding: '0.8rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                fontSize: '0.9rem',
                color: 'var(--text-main)',
                fontWeight: '500'
              }}>
                <input 
                  type="checkbox" 
                  checked={selectedDeliverables.rights} 
                  onChange={(e) => setSelectedDeliverables({ ...selectedDeliverables, rights: e.target.checked })}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--ginger-primary)' }}
                />
                <span>{content.rightsLabel}</span>
              </label>

            </div>

            {/* Live Calculation Output Display */}
            <div style={{
              background: '#FFFFFF',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid var(--border-light)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '1.2rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700' }}>
                  {content.estViews}
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-main)' }}>
                  ~{estimatedReach.toLocaleString()} vistas
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.2rem' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700' }}>
                  {content.estBudget}
                </div>
                <div style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--ginger-primary)' }}>
                  ${finalBudget} USD
                </div>
                {selectedDeliverables.customBeat && (
                  <div style={{ fontSize: '0.75rem', color: '#D97706', fontWeight: '700', marginTop: '0.2rem' }}>
                    ✓ Incluye Licencia de Audio GGB Beats
                  </div>
                )}
              </div>

              <button 
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Solicitar Esta Cotización</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

const sliderStyle = {
  width: '100%',
  accentColor: '#E05328',
  cursor: 'pointer'
};
