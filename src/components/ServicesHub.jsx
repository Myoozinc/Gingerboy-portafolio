import React, { useState } from 'react';
import { Briefcase, Calculator, Disc3, Check, ArrowRight, ShieldCheck, Mail, Send, Sparkles, Music2, HeartHandshake } from 'lucide-react';

export default function ServicesHub({ lang, preselectedPkg }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'beats', 'sponsor', 'calculator'
  
  const [calculator, setCalculator] = useState({
    reels: 1,
    stories: 3,
    feedPosts: 1,
    customBeat: false,
    rights: false
  });

  const [formStatus, setFormStatus] = useState({ submitted: false, loading: false });
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    serviceType: preselectedPkg ? preselectedPkg.title : 'Reel Patrocinado HD',
    budget: '$350 - $600 USD',
    message: ''
  });

  // Calculate live reach & budget
  const estimatedReach = (calculator.reels * 45000) + (calculator.stories * 25000) + (calculator.feedPosts * 18000);
  let baseBudget = (calculator.reels * 300) + (calculator.stories * 90) + (calculator.feedPosts * 120);
  if (calculator.customBeat) baseBudget += 200;
  const finalBudget = calculator.rights ? Math.round(baseBudget * 1.25) : baseBudget;

  const content = {
    es: {
      tag: 'ZONA DE CONTRATACIÓN & SERVICIOS',
      title: '¿Quieres trabajar conmigo? / ¿Necesitas un servicio?',
      subtitle: 'Espacio reservado para propuestas de marca, licencias de instrumentales, composición de audio original y activaciones comerciales con Ginger Boy y GGB Beats.',
      tabs: {
        all: 'Todos los Servicios',
        beats: 'Licencias de Beats (GGB Beats)',
        sponsor: 'Publicidad & Marcas (Ginger Boy)',
        calc: 'Calculadora de Inversión'
      },
      beatTiers: [
        {
          name: 'WAV Lease',
          tag: 'LICENCIA BÁSICA',
          price: '$100 USD',
          desc: 'Para artistas que desean lanzar sencillos en plataformas de streaming.',
          features: [
            'Archivos MP3 + WAV de alta fidelidad',
            'Grabación musical comercial',
            'Distribución de hasta 10.000 copias',
            'Hasta 200.000 reproducciones online',
            '1 videoclip oficial permitido',
            'Emisión en 2 emisoras de radio'
          ],
          cta: 'Solicitar WAV Lease',
          highlight: false
        },
        {
          name: 'Beat Personalizado (Exclusiva)',
          tag: 'LICENCIA EXCLUSIVA',
          price: 'A partir de $200 USD',
          desc: 'Composición a medida y cesión de derechos comerciales exclusivos.',
          features: [
            'Pistas separadas (Stems) + MP3 + WAV',
            'Composición y arreglos a tu medida',
            'Distribución ilimitada de copias',
            '500.000+ streams online y actuaciones en vivo',
            'Uso comercial exclusivo garantizado',
            'Soporte directo de mezcla en MYOOZ InC'
          ],
          cta: 'Adquirir Licencia Exclusiva',
          highlight: true
        }
      ],
      creatorPackages: [
        {
          name: 'Reel Patrocinado HD',
          tag: 'MÁS POPULAR',
          price: '$350 - $600 USD',
          desc: 'Video cinemático enfocado en tu marca con alta retención de audiencia.',
          features: [
            '1x Reel cinemático 4K (30-60 seg)',
            'Mención directa en audio y descripción',
            'Tag de marca en primera línea + Link en Bio',
            'Reporte de analíticas a las 48h y 7 días',
            'Alcance estimado: +10K a +320K vistas'
          ],
          highlight: true
        },
        {
          name: 'GGB Beats Audio Sync + Reel',
          tag: 'AUDIO & VIDEO COMERCIAL',
          price: '$500 - $850 USD',
          desc: 'Beat original exclusivo compuesto para tu marca + producción de Reel viral.',
          features: [
            'Beat original compuesto por GGB Beats',
            '1x Reel viral utilizando el audio de tu marca',
            'Licencia perpetua de sincronización comercial',
            'Audio disponible en Instagram/TikTok con nombre de marca',
            'Máxima retención y recordación auditiva'
          ],
          highlight: false
        },
        {
          name: 'Pack Historias Interactivas',
          tag: 'ALTA CONVERSIÓN',
          price: '$200 - $350 USD',
          desc: 'Secuencia de 3 historias persuasivas con enlaces directos y stickers.',
          features: [
            '3x Historias consecutivas en 24h',
            'Sticker de enlace directo / Código promo',
            'Muestra real de uso/experiencia del producto',
            'Sticker de encuesta o pregunta interactiva',
            'Alcance estimado: +200K impresiones'
          ],
          highlight: false
        }
      ],
      formTitle: 'Envía tu Propuesta o Cotización',
      formSub: 'Recibirás respuesta directa de Ginger Boy y el equipo comercial de MYOOZ InC en menos de 24 horas.'
    },
    en: {
      tag: 'COMMERCIAL BOOKING & SERVICES HUB',
      title: 'Want to work together? / Need a service?',
      subtitle: 'Reserved area for brand proposals, beat licensing, bespoke audio composition, and viral campaigns with Ginger Boy and GGB Beats.',
      tabs: {
        all: 'All Services',
        beats: 'Beat Licensing (GGB Beats)',
        sponsor: 'Brand Sponsorships (Ginger Boy)',
        calc: 'Investment Calculator'
      },
      beatTiers: [
        {
          name: 'WAV Lease',
          tag: 'BASIC LICENSE',
          price: '$100 USD',
          desc: 'For recording artists releasing singles across digital platforms.',
          features: [
            'High fidelity MP3 + WAV files',
            'Commercial recording rights',
            'Up to 10,000 distribution copies',
            'Up to 200,000 digital streams',
            '1 official music video permitted',
            'Radio broadcast rights on 2 stations'
          ],
          cta: 'Request WAV Lease',
          highlight: false
        },
        {
          name: 'Custom Exclusive Beat',
          tag: 'EXCLUSIVE LICENSE',
          price: 'Starting at $200 USD',
          desc: 'Bespoke composition with exclusive commercial usage rights.',
          features: [
            'Full Stems + MP3 + WAV delivery',
            'Bespoke composition tailored to your flow',
            'Unlimited physical and digital copies',
            '500,000+ streams & live performances',
            'Guaranteed exclusive ownership',
            'Mixing support from MYOOZ InC team'
          ],
          cta: 'Acquire Exclusive License',
          highlight: true
        }
      ],
      creatorPackages: [
        {
          name: 'HD Sponsored Reel',
          tag: 'MOST POPULAR',
          price: '$350 - $600 USD',
          desc: 'Cinematic brand integration video with verified viral reach.',
          features: [
            '1x 4K Cinematic Reel (30-60s)',
            'Direct brand mention in voiceover & caption',
            'First-line brand tag + Bio link inclusion',
            'Analytics delivery at 48h & 7 days',
            'Est. reach: +10K to +320K views'
          ],
          highlight: true
        },
        {
          name: 'GGB Beats Audio Sync + Reel',
          tag: 'COMMERCIAL AUDIO & VIDEO',
          price: '$500 - $850 USD',
          desc: 'Original bespoke track produced for your brand + viral Reel production.',
          features: [
            'Bespoke original track by GGB Beats',
            '1x Viral Reel showcasing your brand audio',
            'Perpetual commercial sync license',
            'Whitelisted audio on IG/TikTok with your title',
            'Maximum sonic recall & audience retention'
          ],
          highlight: false
        },
        {
          name: 'Interactive Stories Pack',
          tag: 'HIGH CONVERSION',
          price: '$200 - $350 USD',
          desc: 'Sequenced 3-story campaign with link stickers and coupon codes.',
          features: [
            '3x Consecutive Stories within 24h',
            'Direct link sticker / Promo code',
            'Authentic product unboxing or review',
            'Interactive poll/question sticker',
            'Est. reach: +200K impressions'
          ],
          highlight: false
        }
      ],
      formTitle: 'Submit Your Proposal or Inquiry',
      formSub: 'Direct response from Ginger Boy and MYOOZ InC commercial team within 24 hours.'
    }
  }[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, loading: false });
  };

  return (
    <section id="services-hub" style={{ padding: '7rem 0', background: '#F8FAFC' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ background: 'rgba(224, 83, 40, 0.08)', color: 'var(--ginger-primary)' }}>
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

        {/* Tab Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: content.tabs.all },
            { id: 'beats', label: content.tabs.beats },
            { id: 'sponsor', label: content.tabs.sponsor },
            { id: 'calculator', label: content.tabs.calc }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: activeTab === t.id ? '1px solid var(--ginger-primary)' : '1px solid var(--border-light)',
                background: activeTab === t.id ? 'var(--ginger-gradient)' : '#FFFFFF',
                color: activeTab === t.id ? '#FFFFFF' : 'var(--text-main)',
                fontWeight: activeTab === t.id ? '800' : '600',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                boxShadow: activeTab === t.id ? 'var(--ginger-glow)' : 'var(--shadow-sm)'
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* 1. BEAT LICENSING TIERS (GGB Beats & MYOOZ InC) */}
        {(activeTab === 'all' || activeTab === 'beats') && (
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: '800', color: '#D97706', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                <Disc3 size={15} />
                <span>GGB BEATS • LICENCIAS DISCOGRÁFICAS OFICIALES</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>
                Tarifas de Producción & Beat Store (myoozinc.com)
              </h3>
            </div>

            <div className="grid-2" style={{ gap: '2rem', maxWidth: '980px', margin: '0 auto' }}>
              {content.beatTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '2.5rem',
                    border: tier.highlight ? '2px solid #D97706' : '1px solid var(--border-light)',
                    boxShadow: tier.highlight ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                >
                  {tier.highlight && (
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#D97706',
                      color: '#FFF',
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      padding: '0.2rem 1rem',
                      borderRadius: 'var(--radius-full)'
                    }}>
                      MÁS SOLICITADA
                    </div>
                  )}

                  <div>
                    <span style={{ fontSize: '0.74rem', fontWeight: '800', color: '#D97706', letterSpacing: '0.05em' }}>
                      {tier.tag}
                    </span>
                    <h4 style={{ fontSize: '1.5rem', color: 'var(--text-main)', margin: '0.3rem 0' }}>
                      {tier.name}
                    </h4>
                    <div style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--text-main)', margin: '0.5rem 0 1rem 0' }}>
                      {tier.price}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1.8rem' }}>
                      {tier.desc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                      {tier.features.map((f, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                          <Check size={16} color="#10B981" style={{ flexShrink: 0 }} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="https://myoozinc.com/ggbbeats/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={tier.highlight ? "btn-primary" : "btn-secondary"}
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      background: tier.highlight ? 'linear-gradient(135deg, #D97706 0%, #E05328 100%)' : undefined
                    }}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. CREATOR BRAND SPONSORSHIP PACKAGES (Ginger Boy) */}
        {(activeTab === 'all' || activeTab === 'sponsor') && (
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: '800', color: 'var(--ginger-primary)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                <Sparkles size={15} />
                <span>GINGER BOY • CAMPAÑAS COMERCIALES & MARCAS</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>
                Paquetes de Integración en Redes Sociales
              </h3>
            </div>

            <div className="grid-3" style={{ gap: '2rem' }}>
              {content.creatorPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '2.2rem',
                    border: pkg.highlight ? '2px solid var(--ginger-primary)' : '1px solid var(--border-light)',
                    boxShadow: pkg.highlight ? 'var(--ginger-glow)' : 'var(--shadow-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                >
                  {pkg.highlight && (
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--ginger-gradient)',
                      color: '#FFF',
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      padding: '0.2rem 1rem',
                      borderRadius: 'var(--radius-full)'
                    }}>
                      MÁS POPULAR
                    </div>
                  )}

                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--ginger-primary)', letterSpacing: '0.05em' }}>
                      {pkg.tag}
                    </span>
                    <h4 style={{ fontSize: '1.35rem', color: 'var(--text-main)', margin: '0.3rem 0' }}>
                      {pkg.name}
                    </h4>
                    <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--text-main)', margin: '0.4rem 0 1rem 0' }}>
                      {pkg.price}
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                      {pkg.desc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                      {pkg.features.map((f, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                          <Check size={16} color="var(--ginger-primary)" style={{ flexShrink: 0 }} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setFormData({ ...formData, serviceType: pkg.name, budget: pkg.price });
                      const el = document.getElementById('inquiry-form');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={pkg.highlight ? "btn-primary" : "btn-secondary"}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>Seleccionar Paquete</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. INTERACTIVE INVESTMENT CALCULATOR */}
        {(activeTab === 'all' || activeTab === 'calculator') && (
          <div style={{
            background: '#FFFFFF',
            borderRadius: '28px',
            border: '1px solid var(--border-light)',
            padding: '3rem 2.5rem',
            boxShadow: 'var(--shadow-lg)',
            marginBottom: '4rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <Calculator size={24} color="var(--ginger-primary)" />
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', margin: 0 }}>
                Calculadora Personalizada de Presupuesto & Alcance
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
              Ajusta los entregables para calcular al instante el impacto estimado y el presupuesto total sugerido.
            </p>

            <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
              
              {/* Sliders */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontWeight: '700' }}>
                    <span>Número de Reels Patrocinados:</span>
                    <span style={{ color: 'var(--ginger-primary)' }}>{calculator.reels} Reels</span>
                  </div>
                  <input
                    type="range" min="0" max="5"
                    value={calculator.reels}
                    onChange={(e) => setCalculator({ ...calculator, reels: parseInt(e.target.value) })}
                    style={{ width: '100%', accentColor: '#E05328', cursor: 'pointer' }}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontWeight: '700' }}>
                    <span>Número de Historias de 24h:</span>
                    <span style={{ color: '#D97706' }}>{calculator.stories} Historias</span>
                  </div>
                  <input
                    type="range" min="0" max="10"
                    value={calculator.stories}
                    onChange={(e) => setCalculator({ ...calculator, stories: parseInt(e.target.value) })}
                    style={{ width: '100%', accentColor: '#D97706', cursor: 'pointer' }}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontWeight: '700' }}>
                    <span>Posts de Carrusel en Feed:</span>
                    <span style={{ color: '#7C3AED' }}>{calculator.feedPosts} Posts</span>
                  </div>
                  <input
                    type="range" min="0" max="4"
                    value={calculator.feedPosts}
                    onChange={(e) => setCalculator({ ...calculator, feedPosts: parseInt(e.target.value) })}
                    style={{ width: '100%', accentColor: '#7C3AED', cursor: 'pointer' }}
                  />
                </div>

                {/* GGB Beat Audio Checkbox */}
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.8rem 1rem', background: '#F8FAFC', borderRadius: '14px', border: '1px solid var(--border-light)', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={calculator.customBeat}
                    onChange={(e) => setCalculator({ ...calculator, customBeat: e.target.checked })}
                    style={{ width: '18px', height: '18px', accentColor: '#D97706' }}
                  />
                  <span style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-main)' }}>
                    Incluir Beat Original Exclusivo de GGB Beats (+ $200 USD)
                  </span>
                </label>

                {/* Rights Checkbox */}
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.8rem 1rem', background: '#F8FAFC', borderRadius: '14px', border: '1px solid var(--border-light)', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={calculator.rights}
                    onChange={(e) => setCalculator({ ...calculator, rights: e.target.checked })}
                    style={{ width: '18px', height: '18px', accentColor: 'var(--ginger-primary)' }}
                  />
                  <span style={{ fontSize: '0.88rem', fontWeight: '500', color: 'var(--text-main)' }}>
                    Derechos de Uso Comercial en Meta Ads y TikTok (+ 25%)
                  </span>
                </label>
              </div>

              {/* Result Box */}
              <div style={{
                background: '#F8FAFC',
                border: '1px solid var(--border-light)',
                borderRadius: '24px',
                padding: '2.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: '700' }}>
                    ALCANCE ESTIMADO TOTAL
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-main)' }}>
                    ~{estimatedReach.toLocaleString()} vistas
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.2rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: '700' }}>
                    INVERSIÓN ESTIMADA TOTAL
                  </div>
                  <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--ginger-primary)' }}>
                    ${finalBudget} USD
                  </div>
                </div>

                <button
                  onClick={() => {
                    setFormData({
                      ...formData,
                      serviceType: 'Cotización Calculadora Personalizada',
                      budget: `$${finalBudget} USD (~${estimatedReach.toLocaleString()} vistas)`
                    });
                    const el = document.getElementById('inquiry-form');
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
        )}

        {/* 4. DIRECT INQUIRY & CONTACT FORM */}
        <div id="inquiry-form" style={{
          maxWidth: '820px',
          margin: '0 auto',
          background: '#FFFFFF',
          borderRadius: '28px',
          border: '1px solid var(--border-light)',
          padding: '3rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: '800', color: 'var(--ginger-primary)', background: 'rgba(224, 83, 40, 0.08)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)', marginBottom: '0.6rem' }}>
              <Mail size={13} />
              <span>CONTACTO COMERCIAL DIRECTO</span>
            </div>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '0.3rem' }}>
              {content.formTitle}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {content.formSub}
            </p>
          </div>

          {formStatus.submitted ? (
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid #10B981',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <ShieldCheck size={48} color="#10B981" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.4rem', color: '#10B981', fontWeight: '800', marginBottom: '0.5rem' }}>
                ¡Propuesta Recibida Exitosamente!
              </h4>
              <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto' }}>
                Nos pondremos en contacto contigo a la brevedad a través de tu correo electrónico para coordinar los detalles.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              <div className="grid-2" style={{ gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Nombre / Contacto *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Carlos Mendoza"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Marca / Empresa / Artista *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    placeholder="Ej. Urban Apparel Co."
                    style={inputStyle}
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contacto@tuempresa.com"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Tipo de Servicio / Colaboración *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  Detalles de la Campaña, Proyecto o Beat Requerido *
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntanos brevemente sobre tu proyecto, objetivos de fechas y requerimientos específicos..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem' }}
              >
                <Send size={18} />
                <span>Enviar Solicitud de Colaboración</span>
              </button>
            </form>
          )}

          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Canal directo oficial: <strong>myooz.inc@gmail.com</strong> • Representación discográfica de MYOOZ InC
          </div>
        </div>

      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1.1rem',
  background: '#F8FAFC',
  border: '1px solid var(--border-light)',
  borderRadius: '12px',
  fontSize: '0.92rem',
  color: 'var(--text-main)',
  outline: 'none',
  transition: 'var(--transition-smooth)'
};
