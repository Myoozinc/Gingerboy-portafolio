import React, { useState } from 'react';
import { Briefcase, Calculator, Check, Sparkles, Zap, ShieldAlert, ArrowRight } from 'lucide-react';

export default function ServicesRates({ lang, onSelectPackage }) {
  const [selectedDeliverables, setSelectedDeliverables] = useState({
    reels: 1,
    stories: 3,
    feedPosts: 1,
    rights: false
  });

  const content = {
    es: {
      tag: 'OPCIONES COMERCIALES DE COLABORACIÓN',
      title: 'Paquetes de Patrocinio & Tarifas',
      subtitle: 'Formatos diseñados para maximizar el retorno de inversión y el engagement orgánico.',
      packages: [
        {
          id: 'reel_pack',
          title: 'Reel Patrocinado HD',
          tag: 'MÁS POPULAR',
          desc: 'Creación de video cinemático enfocado en experiencia de producto/servicio.',
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
        },
        {
          id: 'ambassador',
          title: 'Embajaduría Mensual',
          tag: 'MAXIMO IMPACTO',
          desc: 'Alianza continua de marca con presencia constante y exclusividad.',
          price: 'Personalizado',
          features: [
            '2x Reels dedicados por mes',
            '6x Historias estratégicas al mes',
            'Derechos de uso publicitario en Meta Ads',
            'Asistencia a eventos de marca o lanzamientos',
            'Exclusividad en tu categoría de producto'
          ],
          highlight: false
        }
      ],
      calcTitle: 'Calculadora Personalizada de Inversión',
      calcSub: 'Selecciona las entregas deseadas para estimar el alcance total y costo aproximado.',
      reelsLabel: 'Número de Reels:',
      storiesLabel: 'Número de Historias:',
      feedLabel: 'Publicaciones en Feed:',
      rightsLabel: 'Incluir Derechos de Uso en Publicidad Meta Ads (+25%)',
      estViews: 'Alcance Estimado Total:',
      estBudget: 'Inversión Sugerida:',
      selectCta: 'Solicitar este Paquete'
    },
    en: {
      tag: 'COMMERCIAL COLLABORATION OPTIONS',
      title: 'Sponsorship Packages & Rates',
      subtitle: 'Custom formats tailored for maximum ROI, conversion and organic reach.',
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
        },
        {
          id: 'ambassador',
          title: 'Monthly Ambassador',
          tag: 'MAXIMUM IMPACT',
          desc: 'Ongoing monthly brand partnership with category exclusivity.',
          price: 'Custom Quote',
          features: [
            '2x Dedicated monthly Reels',
            '6x Strategic monthly Stories',
            'Ad usage rights for Meta Ads',
            'Brand event attendance & coverage',
            'Niche category exclusivity'
          ],
          highlight: false
        }
      ],
      calcTitle: 'Custom Collaboration Estimator',
      calcSub: 'Select deliverables to estimate total campaign reach and commercial budget.',
      reelsLabel: 'Number of Reels:',
      storiesLabel: 'Number of Stories:',
      feedLabel: 'Feed Carousel Posts:',
      rightsLabel: 'Include Paid Meta Ads Usage Rights (+25%)',
      estViews: 'Est. Total Reach:',
      estBudget: 'Suggested Investment:',
      selectCta: 'Request This Package'
    }
  }[lang];

  // Dynamic Calculation
  const estimatedReach = (selectedDeliverables.reels * 45000) + (selectedDeliverables.stories * 25000) + (selectedDeliverables.feedPosts * 18000);
  const baseBudget = (selectedDeliverables.reels * 300) + (selectedDeliverables.stories * 90) + (selectedDeliverables.feedPosts * 120);
  const finalBudget = selectedDeliverables.rights ? Math.round(baseBudget * 1.25) : baseBudget;

  return (
    <section id="services" style={{ padding: '6rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} style={{ display: 'inline', marginRight: '0.4rem' }} />
            {content.tag}
          </div>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid-3" style={{ marginBottom: '4.5rem' }}>
          {content.packages.map((pkg) => (
            <div key={pkg.id} className="glass-card" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              borderColor: pkg.highlight ? 'var(--ginger-primary)' : 'var(--border-light)',
              boxShadow: pkg.highlight ? 'var(--ginger-glow)' : 'none',
              background: pkg.highlight ? 'linear-gradient(180deg, rgba(255,94,54,0.08) 0%, rgba(18,22,31,0.85) 100%)' : 'var(--bg-card)'
            }}>
              {pkg.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--ginger-gradient)',
                  color: '#FFF',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  padding: '0.25rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: 'var(--ginger-glow)'
                }}>
                  {pkg.tag}
                </div>
              )}

              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#FFF', marginBottom: '0.4rem', marginTop: pkg.highlight ? '0.5rem' : '0' }}>
                  {pkg.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem', minHeight: '40px' }}>
                  {pkg.desc}
                </p>

                <div style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: pkg.highlight ? 'var(--ginger-primary)' : 'var(--gold-accent)',
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
          background: 'linear-gradient(135deg, rgba(18, 22, 31, 0.95) 0%, rgba(28, 20, 15, 0.95) 100%)',
          borderColor: 'var(--border-ginger)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <Calculator color="#FF9E2C" size={24} />
            <h3 style={{ fontSize: '1.6rem', color: '#FFF' }}>{content.calcTitle}</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
            {content.calcSub}
          </p>

          <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'center' }}>
            
            {/* Deliverables Sliders & Switches */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Reels Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
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

              {/* Stories Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
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

              {/* Feed Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                  <span>{content.feedLabel}</span>
                  <span style={{ fontWeight: '800', color: '#8B5CF6' }}>{selectedDeliverables.feedPosts} Posts</span>
                </div>
                <input 
                  type="range" min="0" max="5" 
                  value={selectedDeliverables.feedPosts} 
                  onChange={(e) => setSelectedDeliverables({ ...selectedDeliverables, feedPosts: parseInt(e.target.value) })}
                  style={sliderStyle}
                />
              </div>

              {/* Paid Ad Rights Checkbox */}
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.04)',
                padding: '0.8rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                fontSize: '0.9rem'
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
              background: 'rgba(9, 11, 16, 0.8)',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid var(--border-ginger)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '1.2rem'
            }}>
              <div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {content.estViews}
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFF' }}>
                  ~{estimatedReach.toLocaleString()} visualizaciones
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.2rem' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {content.estBudget}
                </div>
                <div style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--ginger-primary)' }}>
                  ${finalBudget} USD
                </div>
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
  accentColor: '#FF5E36',
  cursor: 'pointer'
};
