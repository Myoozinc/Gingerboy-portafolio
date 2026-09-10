import React, { useState } from 'react';
import { Sparkles, Calculator, Check, ArrowRight, ShieldCheck, Mail, Send, TrendingUp, Users, Eye, FileText, Download, HeartHandshake } from 'lucide-react';

export default function BrandAdvertisingServicesSection({ lang, onOpenMediaKit }) {
  const [calculator, setCalculator] = useState({
    reels: 1,
    stories: 3,
    feedPosts: 1,
    rights: false
  });

  const [formStatus, setFormStatus] = useState({ submitted: false, loading: false });
  const [formData, setFormData] = useState({
    brandName: '',
    contactName: '',
    email: '',
    packageType: 'Reel Patrocinado 4K HD ($350 - $600 USD)',
    campaignObjective: 'Conversión y Ventas',
    timeline: 'En las próximas 2-4 semanas',
    budget: '$500 - $1,000 USD',
    message: ''
  });

  // Calculate live reach & budget
  const estimatedReach = (calculator.reels * 45000) + (calculator.stories * 25000) + (calculator.feedPosts * 18000);
  let baseBudget = (calculator.reels * 350) + (calculator.stories * 90) + (calculator.feedPosts * 140);
  const finalBudget = calculator.rights ? Math.round(baseBudget * 1.25) : baseBudget;

  const content = {
    es: {
      tag: 'GINGER BOY • PUBLICIDAD & ALIANZAS DE MARCA',
      title: 'Servicios de Publicidad, Patrocinios & Medios',
      subtitle: 'Formatos de alto impacto comercial, integración orgánica de marcas, creación de contenido cinematográfico y campañas virales con Ginger Boy.',
      metricsTag: 'AUDIENCIA REAL Y VERIFICABLE EN INSTAGRAM (@gingerboyofficial)',
      metrics: [
        { label: 'Seguidores Orgánicos', value: '+23.2K', desc: 'Comunidad activa y fiel' },
        { label: 'Público Femenino', value: '69.4%', desc: 'Decisión de compra elevada' },
        { label: 'Rango Clave (18-44 años)', value: '85.9%', desc: 'Poder adquisitivo consolidado' },
        { label: 'Visitas al Perfil', value: '+54.7K', desc: 'Tráfico e interés continuo' }
      ],
      packagesTitle: 'Paquetes Oficiales de Publicidad & Patrocinio',
      packages: [
        {
          id: 'reel_hd',
          name: 'Reel Patrocinado 4K HD',
          tag: 'MÁS SOLICITADO POR MARCAS',
          price: '$350 - $600 USD',
          desc: 'Creación de video cinematográfico en alta definición con integración natural de producto o experiencia de marca.',
          features: [
            '1x Reel cinemático 4K (30 a 60 seg) grabado con óptica profesional',
            'Locución con mención directa y natural de marca',
            'Etiqueta de colaboración en primera línea + Enlace en Biografía por 7 días',
            'Reporte analítico verificado a las 48h y 7 días posteriores al drop',
            'Alcance estimado: entre +15K y +320K impresiones orgánicas'
          ],
          highlight: true,
          cta: 'Seleccionar Reel 4K'
        },
        {
          id: 'stories_pack',
          name: 'Pack Historias Interactivas',
          tag: 'ALTA CONVERSIÓN & CLICS',
          price: '$200 - $350 USD',
          desc: 'Secuencia persuasiva de historias en 24h para generar tráfico inmediato y conversiones a tu web.',
          features: [
            '3x Historias consecutivas con narrativa dinámica en 24 horas',
            'Sticker de enlace directo a tu tienda / código de descuento exclusivo',
            'Experiencia real en primera persona o unboxing del producto',
            'Stickers interactivos (encuestas, preguntas o cuenta regresiva)',
            'Alcance promedio: +200K impresiones mensuales en historias'
          ],
          highlight: false,
          cta: 'Seleccionar Pack Historias'
        },
        {
          id: 'ambassador_360',
          name: 'Campaña 360° / Brand Ambassador',
          tag: 'MÁXIMO IMPACTO & RECORDACIÓN',
          price: '$800 - $1,500+ USD',
          desc: 'Alianza estratégica integral para lanzamientos de productos, posicionamiento continuo o presencia en eventos.',
          features: [
            '2x Reels cinemáticos 4K + 5x Historias interactivas',
            'Story Highlight (Destacada fijada) en el perfil oficial por 30 días',
            'Mención prioritaria en bio e historias mensuales',
            'Derechos de uso del contenido para pauta publicitaria Meta Ads por 30 días',
            'Reunión estratégica de guión y pre-producción'
          ],
          highlight: false,
          cta: 'Cotizar Alianza 360°'
        }
      ],
      calcTitle: 'Calculadora de Inversión & Estimación de Alcance',
      calcSub: 'Modifica los entregables para proyectar el alcance estimado y presupuesto sugerido para tu próxima activación:',
      reelsLabel: 'Cantidad de Reels Cinemáticos 4K:',
      storiesLabel: 'Cantidad de Historias en 24h:',
      feedLabel: 'Publicaciones en Feed:',
      rightsLabel: 'Incluir Derechos de Pauta para Anuncios Digitales Meta Ads (+25%)',
      estReach: 'Alcance Estimado Total:',
      estBudget: 'Inversión Publicitaria Sugerida:',
      mediaKitNote: '¿Necesitas la ficha técnica completa con todas las capturas de analíticas?',
      mediaKitBtn: 'Ver / Descargar Media Kit Oficial en PDF',
      formTitle: 'Propuesta Comercial & Contacto de Marcas',
      formSub: 'Si representas a una marca o agencia, cuéntanos tu objetivo para coordinar fechas y propuesta formal en menos de 24h.',
      labels: {
        brandName: 'Nombre de la Marca o Empresa:',
        contactName: 'Nombre del Representante / Agencia:',
        email: 'Correo Electrónico Corporativo:',
        packageType: 'Formato o Paquete Deseado:',
        campaignObjective: 'Objetivo Principal de la Campaña:',
        timeline: 'Fechas Estimadas de Publicación:',
        budget: 'Rango de Presupuesto Disponible:',
        message: 'Detalles del Producto / Requisitos de la Campaña:',
        submit: 'Enviar Propuesta de Marca',
        submitting: 'Enviando Propuesta...',
        successTitle: '¡Propuesta Comercial Enviada!',
        successMsg: 'Ginger Boy y el equipo de coordinación comercial de MYOOZ InC se pondrán en contacto contigo vía email en menos de 24 horas.'
      }
    },
    en: {
      tag: 'GINGER BOY • ADVERTISING & BRAND PARTNERSHIPS',
      title: 'Advertising, Sponsorship & Media Services',
      subtitle: 'High-impact commercial formats, organic brand storytelling, cinematic content creation, and verified viral campaigns with Ginger Boy.',
      metricsTag: 'VERIFIED ORGANIC REACH & DEMOGRAPHICS (@gingerboyofficial)',
      metrics: [
        { label: 'Organic Followers', value: '+23.2K', desc: 'Loyal and active community' },
        { label: 'Female Audience', value: '69.4%', desc: 'High purchasing power decision' },
        { label: 'Core Age (18-44 y/o)', value: '85.9%', desc: 'Primary consumer demographic' },
        { label: 'Monthly Profile Visits', value: '+54.7K', desc: 'Consistent viral curiosity' }
      ],
      packagesTitle: 'Official Advertising & Sponsorship Packages',
      packages: [
        {
          id: 'reel_hd',
          name: 'HD 4K Sponsored Reel',
          tag: 'MOST POPULAR WITH BRANDS',
          price: '$350 - $600 USD',
          desc: 'High-definition cinematic video with natural brand integration and verified organic reach.',
          features: [
            '1x 4K Cinematic Reel (30 to 60s) shot on professional glass',
            'Direct organic brand endorsement in voiceover and caption',
            'Collaboration tag in first line + Bio Link placement for 7 days',
            'Verified analytical report delivered at 48h and 7 days post-drop',
            'Est. reach: between +15K and +320K organic impressions'
          ],
          highlight: true,
          cta: 'Select 4K Reel'
        },
        {
          id: 'stories_pack',
          name: 'Interactive Stories Pack',
          tag: 'HIGH CONVERSION & CLICKS',
          price: '$200 - $350 USD',
          desc: 'Persuasive sequenced story narrative within 24h driving immediate direct traffic to your store.',
          features: [
            '3x Sequenced stories with dynamic storytelling within 24 hours',
            'Direct website link sticker + unique promo voucher code',
            'Authentic first-person experience or product review',
            'Interactive poll / quiz stickers for direct audience retention',
            'Average reach: +200K monthly story impressions'
          ],
          highlight: false,
          cta: 'Select Stories Pack'
        },
        {
          id: 'ambassador_360',
          name: '360° Brand Ambassador Campaign',
          tag: 'MAXIMUM VISIBILITY & RECALL',
          price: '$800 - $1,500+ USD',
          desc: 'Strategic long-term partnership designed for product launches, ongoing brand alignment, or live events.',
          features: [
            '2x 4K Cinematic Reels + 5x Interactive sequenced Stories',
            'Dedicated Story Highlight saved permanently on official profile',
            'Priority inclusion across bio link and monthly story roundups',
            'Meta Ads paid usage whitelisting rights included for 30 days',
            'Pre-production creative scripting session'
          ],
          highlight: false,
          cta: 'Request 360° Quote'
        }
      ],
      calcTitle: 'Campaign Investment & Reach Calculator',
      calcSub: 'Adjust deliverables to calculate estimated organic reach and suggested investment budget:',
      reelsLabel: 'Number of 4K Cinematic Reels:',
      storiesLabel: 'Number of 24h Stories:',
      feedLabel: 'Feed Carousel / Photo Posts:',
      rightsLabel: 'Include Meta Ads Whitelisting Rights (+25%)',
      estReach: 'Total Estimated Reach:',
      estBudget: 'Suggested Investment:',
      mediaKitNote: 'Need the complete technical brand dossier with all verified analytics screenshots?',
      mediaKitBtn: 'View / Download Official Media Kit PDF',
      formTitle: 'Commercial Proposal & Brand Booking',
      formSub: 'If you represent a brand or agency, let us know your campaign objectives to schedule dates within 24h.',
      labels: {
        brandName: 'Brand or Company Name:',
        contactName: 'Contact Representative / Agency:',
        email: 'Corporate Email Address:',
        packageType: 'Desired Format or Package:',
        campaignObjective: 'Primary Campaign Objective:',
        timeline: 'Estimated Campaign Launch Window:',
        budget: 'Allocated Budget Range:',
        message: 'Product Details / Creative Requirements:',
        submit: 'Submit Brand Proposal',
        submitting: 'Submitting Proposal...',
        successTitle: 'Proposal Successfully Submitted!',
        successMsg: 'Ginger Boy and the MYOOZ InC brand management team will reply with scheduling availability and confirmation in less than 24 hours.'
      }
    }
  }[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, submitted: false });
    setTimeout(() => {
      setFormStatus({ loading: false, submitted: true });
    }, 600);
  };

  const handleSelectPackage = (pkgName, price) => {
    setFormData(prev => ({
      ...prev,
      packageType: `${pkgName} (${price})`
    }));
    const el = document.getElementById('brand-inquiry-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="brand-advertising-services" style={{
      padding: '6.5rem 0',
      background: 'radial-gradient(ellipse at 85% 15%, rgba(255, 109, 0, 0.14) 0%, rgba(230, 81, 0, 0.05) 35%, #F8FAFC 70%)',
      color: 'var(--text-main)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(224, 83, 40, 0.08)',
            border: '1px solid rgba(224, 83, 40, 0.25)',
            color: 'var(--ginger-primary)',
            padding: '0.4rem 1.1rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.78rem',
            fontWeight: '800',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <Sparkles size={15} />
            <span>{content.tag}</span>
          </div>

          <h2 style={{ fontSize: '2.4rem', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            {content.title}
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '780px', margin: '0 auto', lineHeight: '1.6' }}>
            {content.subtitle}
          </p>
        </div>

        {/* Verified Demographics Ribbon */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid var(--border-light)',
          borderRadius: '24px',
          padding: '2rem 2.5rem',
          marginBottom: '4.5rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{
            fontSize: '0.76rem',
            fontWeight: '800',
            color: 'var(--ginger-primary)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <TrendingUp size={16} />
            <span>{content.metricsTag}</span>
          </div>

          <div className="grid-4" style={{ gap: '1.5rem' }}>
            {content.metrics.map((m, idx) => (
              <div 
                key={idx}
                style={{
                  borderLeft: '3px solid var(--ginger-primary)',
                  paddingLeft: '1.2rem'
                }}
              >
                <div style={{ fontSize: '2.1rem', fontWeight: '900', color: 'var(--text-main)', lineHeight: '1.1' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-main)', marginTop: '0.3rem' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Packages Grid */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              {content.packagesTitle}
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              Formatos prediseñados con alta tasa de conversión y retención probada.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {content.packages.map((pkg) => (
              <div
                key={pkg.id}
                className="glass-card"
                style={{
                  background: '#FFFFFF',
                  border: pkg.highlight ? '2px solid var(--ginger-primary)' : '1px solid var(--border-light)',
                  borderRadius: '24px',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: pkg.highlight ? 'var(--ginger-glow)' : 'var(--shadow-md)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div>
                  {pkg.highlight ? (
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      background: 'var(--ginger-gradient)',
                      color: '#FFF',
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      padding: '0.35rem 1.1rem',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.05em',
                      boxShadow: '0 4px 15px rgba(224, 83, 40, 0.35)',
                      marginBottom: '0.9rem'
                    }}>
                      {pkg.tag}
                    </div>
                  ) : (
                    <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: '800', color: 'var(--ginger-primary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
                      {pkg.tag}
                    </span>
                  )}
                  <h4 style={{ fontSize: '1.45rem', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 0.4rem 0', lineHeight: 1.3 }}>
                    {pkg.name}
                  </h4>
                  <div style={{ fontSize: '2.1rem', fontWeight: '900', color: 'var(--text-main)', margin: '0.6rem 0 1rem 0' }}>
                    {pkg.price}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1.8rem' }}>
                    {pkg.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.2rem' }}>
                    {pkg.features.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.86rem', color: 'var(--text-main)', lineHeight: '1.4' }}>
                        <Check size={16} color="var(--ginger-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleSelectPackage(pkg.name, pkg.price)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.2rem',
                      borderRadius: '12px',
                      fontWeight: '800',
                      fontSize: '0.92rem',
                      cursor: 'pointer',
                      border: 'none',
                      background: pkg.highlight ? 'var(--ginger-gradient)' : '#0F172A',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      boxShadow: pkg.highlight ? '0 6px 20px rgba(224, 83, 40, 0.3)' : 'var(--shadow-sm)'
                    }}
                  >
                    <span>{pkg.cta}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Campaign Calculator */}
        <div style={{
          background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
          color: '#FFFFFF',
          borderRadius: '28px',
          padding: '3rem 2.5rem',
          marginBottom: '5rem',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#FCD34D', fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              <Calculator size={15} />
              <span>SIMULADOR DE ALCANCE E INVERSIÓN PUBLICITARIA</span>
            </div>
            <h3 style={{ fontSize: '1.9rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.6rem' }}>
              {content.calcTitle}
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#94A3B8', maxWidth: '640px', margin: '0 auto' }}>
              {content.calcSub}
            </p>
          </div>

          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
              
              {/* Reels Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  <span>{content.reelsLabel}</span>
                  <span style={{ color: 'var(--ginger-primary)', fontWeight: '900', fontSize: '1.05rem' }}>{calculator.reels}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  value={calculator.reels}
                  onChange={(e) => setCalculator({ ...calculator, reels: parseInt(e.target.value) || 0 })}
                  style={{ width: '100%', accentColor: 'var(--ginger-primary)', cursor: 'pointer' }}
                />
              </div>

              {/* Stories Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  <span>{content.storiesLabel}</span>
                  <span style={{ color: 'var(--ginger-primary)', fontWeight: '900', fontSize: '1.05rem' }}>{calculator.stories}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={calculator.stories}
                  onChange={(e) => setCalculator({ ...calculator, stories: parseInt(e.target.value) || 0 })}
                  style={{ width: '100%', accentColor: 'var(--ginger-primary)', cursor: 'pointer' }}
                />
              </div>

              {/* Feed Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  <span>{content.feedLabel}</span>
                  <span style={{ color: 'var(--ginger-primary)', fontWeight: '900', fontSize: '1.05rem' }}>{calculator.feedPosts}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  value={calculator.feedPosts}
                  onChange={(e) => setCalculator({ ...calculator, feedPosts: parseInt(e.target.value) || 0 })}
                  style={{ width: '100%', accentColor: 'var(--ginger-primary)', cursor: 'pointer' }}
                />
              </div>

              {/* Meta Ads Rights Toggle */}
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', fontSize: '0.88rem', color: '#E2E8F0', marginTop: '0.5rem' }}>
                <input
                  type="checkbox"
                  checked={calculator.rights}
                  onChange={(e) => setCalculator({ ...calculator, rights: e.target.checked })}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--ginger-primary)' }}
                />
                <span>{content.rightsLabel}</span>
              </label>
            </div>

            {/* Projection Summary Box */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#94A3B8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {content.estReach}
              </div>
              <div style={{ fontSize: '2.6rem', fontWeight: '900', color: '#38BDF8', margin: '0.3rem 0 1.5rem 0' }}>
                +{estimatedReach.toLocaleString()} vistas
              </div>

              <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#94A3B8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {content.estBudget}
              </div>
              <div style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FCD34D', margin: '0.3rem 0 1.5rem 0' }}>
                ${finalBudget} USD
              </div>

              <button
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    packageType: `Campaña Personalizada (${calculator.reels} Reels, ${calculator.stories} Stories)`,
                    budget: `$${finalBudget} USD`
                  }));
                  const el = document.getElementById('brand-inquiry-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  width: '100%',
                  background: 'var(--ginger-gradient)',
                  border: 'none',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.4rem',
                  borderRadius: '12px',
                  fontWeight: '800',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(224, 83, 40, 0.35)'
                }}
              >
                Cotizar con esta Simulación
              </button>
            </div>
          </div>
        </div>

        {/* Media Kit PDF Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(224, 83, 40, 0.08) 0%, rgba(217, 119, 6, 0.04) 100%)',
          border: '1px solid rgba(224, 83, 40, 0.25)',
          borderRadius: '20px',
          padding: '2rem 2.5rem',
          marginBottom: '5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '14px',
              background: 'var(--ginger-gradient)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <FileText size={24} />
            </div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '1.15rem', color: 'var(--text-main)' }}>
                Ficha Técnica & Media Kit Oficial de Ginger Boy
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {content.mediaKitNote}
              </div>
            </div>
          </div>

          <button
            onClick={onOpenMediaKit}
            style={{
              background: '#0F172A',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
              padding: '0.8rem 1.6rem',
              fontWeight: '800',
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Download size={16} />
            <span>{content.mediaKitBtn}</span>
          </button>
        </div>

        {/* Dedicated Brand Inquiry Form */}
        <div 
          id="brand-inquiry-form"
          style={{
            background: '#FFFFFF',
            border: '1px solid var(--border-light)',
            borderRadius: '28px',
            padding: '3.5rem 2.5rem',
            maxWidth: '860px',
            margin: '0 auto',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0 auto 1.2rem auto',
              border: '3px solid #E05328',
              boxShadow: '0 8px 25px rgba(224, 83, 40, 0.35)',
              background: '#E05328'
            }}>
              <img 
                src="/images/ggb_orange_look_1.jpg" 
                alt="Ginger Boy Brand Ambassador" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--ginger-primary)', fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              <HeartHandshake size={15} />
              <span>GINGER BOY BRAND MANAGEMENT</span>
            </div>
            <h3 style={{ fontSize: '1.9rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.6rem' }}>
              {content.formTitle}
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto' }}>
              {content.formSub}
            </p>
          </div>

          {formStatus.submitted ? (
            <div style={{
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid #10B981',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center'
            }}>
              <ShieldCheck size={48} color="#10B981" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                {content.labels.successTitle}
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 1.5rem auto' }}>
                {content.labels.successMsg}
              </p>
              <button
                onClick={() => setFormStatus({ submitted: false, loading: false })}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-main)',
                  padding: '0.5rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                Enviar otra consulta comercial
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              <div className="grid-2" style={{ gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    {content.labels.brandName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Marca / Empresa / Startup"
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: '#F8FAFC',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    {content.labels.contactName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Director de Marketing / Brand Manager"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: '#F8FAFC',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div className="grid-3" style={{ gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    {content.labels.email}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marketing@tumarca.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: '#F8FAFC',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    {content.labels.packageType}
                  </label>
                  <select
                    value={formData.packageType}
                    onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: '#F8FAFC',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    <option value="Reel Patrocinado 4K HD ($350 - $600 USD)">Reel Patrocinado 4K HD ($350 - $600 USD)</option>
                    <option value="Pack Historias Interactivas ($200 - $350 USD)">Pack Historias Interactivas ($200 - $350 USD)</option>
                    <option value="Campaña 360° / Brand Ambassador ($800 - $1,500+ USD)">Campaña 360° / Brand Ambassador ($800 - $1,500+ USD)</option>
                    <option value="Activación Presencial / Evento">Activación Presencial / Evento</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    {content.labels.budget}
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: '#F8FAFC',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    <option value="$200 - $400 USD">$200 - $400 USD</option>
                    <option value="$500 - $1,000 USD">$500 - $1,000 USD</option>
                    <option value="$1,000 - $2,500 USD">$1,000 - $2,500 USD</option>
                    <option value="Más de $2,500 USD">Más de $2,500 USD</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  {content.labels.message}
                </label>
                <textarea
                  rows="3"
                  placeholder="Detalles sobre el producto, enlace a la web de la marca o enfoque creativo..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    background: '#F8FAFC',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  disabled={formStatus.loading}
                  style={{
                    background: 'var(--ginger-gradient)',
                    color: '#FFF',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.9rem 2.2rem',
                    fontSize: '0.95rem',
                    fontWeight: '800',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    boxShadow: '0 8px 25px rgba(224, 83, 40, 0.35)'
                  }}
                >
                  <Send size={16} />
                  <span>{formStatus.loading ? content.labels.submitting : content.labels.submit}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
