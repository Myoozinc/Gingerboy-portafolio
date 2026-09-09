import React, { useState } from 'react';
import { Disc3, Check, ArrowRight, Music2, Sliders, ShieldCheck, Mail, Send, Radio, Headphones, FileAudio, ExternalLink } from 'lucide-react';

export default function MusicProductionServicesSection({ lang }) {
  const [selectedTier, setSelectedTier] = useState('WAV Lease');
  const [formStatus, setFormStatus] = useState({ submitted: false, loading: false });
  const [formData, setFormData] = useState({
    artistName: '',
    email: '',
    genre: 'Trap / Drill',
    bpm: '135',
    licenseType: 'WAV Lease ($100 USD)',
    referenceTrack: '',
    budget: '$100 - $300 USD',
    notes: ''
  });

  const content = {
    es: {
      tag: 'GGB BEATS • MYOOZ INC RECORD LABEL',
      title: 'Servicios de Producción Musical & Beat Licensing',
      subtitle: 'Composición de instrumentales, diseño sonoro, licencias discográficas oficiales y mezcla profesional para artistas independientes, sellos y sincronización audiovisual.',
      facetsNote: 'Producción en nuestras 3 facetas sonoras:',
      facets: [
        { name: '@ggbbeats', desc: 'Trap, Hip-Hop, Drill, Raptor House, Dark Electronic', bpm: '125-145 BPM' },
        { name: '@ggbbeats.dance', desc: 'Reggaetón Clásico y Moderno, RKT, Dancehall, Funk Brasilero', bpm: '90-105 BPM' },
        { name: '@ggbbeats.chill', desc: 'Lo-Fi Hip-Hop, Smooth Pop, Bossa Nova, Texturas Acústicas', bpm: '75-88 BPM' }
      ],
      pricingTitle: 'Catálogo de Licencias & Tarifas Oficiales',
      tiers: [
        {
          id: 'wav_lease',
          name: 'WAV Lease',
          tag: 'LICENCIA BÁSICA DISCOGRÁFICA',
          price: '$100 USD',
          desc: 'Ideal para cantantes y creadores que lanzarán sencillos oficiales en plataformas de streaming.',
          features: [
            'Archivos masterizados MP3 (320 kbps) + WAV (24-bit)',
            'Distribución comercial de hasta 10.000 copias',
            'Hasta 200.000 reproducciones digitales en Spotify / Apple Music',
            '1 videoclip oficial monetizado en YouTube',
            'Emisión autorizada en hasta 2 emisoras de radio',
            'Contrato de cesión de derechos no exclusivos en PDF'
          ],
          highlight: false,
          cta: 'Solicitar WAV Lease'
        },
        {
          id: 'exclusive_beat',
          name: 'Licencia Exclusiva & Beat Personalizado',
          tag: 'MÁS SOLICITADA • DERECHOS EXCLUSIVOS',
          price: 'A partir de $200 USD',
          desc: 'Composición a medida desde cero adaptada a tu flow, registro vocal y visión conceptual.',
          features: [
            'Entrega de Stems multipista (pistas separadas) + WAV + MP3',
            'Composición, arreglos y estructura exclusiva para tu proyecto',
            'Distribución física y digital 100% ilimitada sin tope de copias',
            'Streams y reproducciones ilimitadas en todas las plataformas',
            'Actuaciones en vivo monetizadas y videoclips ilimitados',
            'Mezcla y balance sonoro en el estudio de MYOOZ InC',
            'Contrato formal de cesión de exclusividad comercial'
          ],
          highlight: true,
          cta: 'Adquirir Licencia Exclusiva'
        },
        {
          id: 'sync_audio',
          name: 'Licencia de Sincronización (Sync Media)',
          tag: 'CINE, SERIES & VIDEOJUEGOS',
          price: 'A partir de $350 USD',
          desc: 'Ambientación sonora y bandas sonoras originales para cortometrajes, videojuegos y spots publicitarios.',
          features: [
            'Música original sincronizada al corte de video / escena',
            'Versiones instrumentales, loops y cortes para trailers (15s, 30s, 60s)',
            'Derechos de sincronización comercial perpetua o por temporada',
            'Mastering optimizado para estándares de broadcast y streaming',
            'Garantía de audio 100% libre de claims o Content ID de terceros'
          ],
          highlight: false,
          cta: 'Cotizar Sincronización'
        }
      ],
      formSectionTitle: 'Solicitud de Producción Musical / Cotización de Beat',
      formSectionSub: 'Completa la información técnica de tu proyecto para recibir presupuesto, stems o demos preliminares en menos de 24 horas.',
      labels: {
        artistName: 'Nombre del Artista / Sello / Productora:',
        email: 'Correo Electrónico de Contacto:',
        genre: 'Género Musical:',
        bpm: 'BPM / Tempo Aproximado:',
        licenseType: 'Tipo de Licencia Requerida:',
        referenceTrack: 'Enlace de Referencia (Spotify, YouTube, SoundCloud):',
        budget: 'Rango de Presupuesto Estimado:',
        notes: 'Detalles del Proyecto / Idea Conceptual:',
        submit: 'Enviar Solicitud de Producción',
        submitting: 'Procesando...',
        successTitle: '¡Solicitud Recibida con Éxito!',
        successMsg: 'El equipo de GGB Beats y MYOOZ InC revisará tu propuesta técnica y te responderá por email con la cotización y opciones de audio en menos de 24h.'
      }
    },
    en: {
      tag: 'GGB BEATS • MYOOZ INC RECORD LABEL',
      title: 'Music Production Services & Beat Licensing',
      subtitle: 'Original instrumental composition, bespoke sound design, official label licensing, and professional audio mixing for independent artists, labels, and audiovisual synchronization.',
      facetsNote: 'Production across our 3 distinct sonic facets:',
      facets: [
        { name: '@ggbbeats', desc: 'Trap, Hip-Hop, Drill, Raptor House, Dark Electronic', bpm: '125-145 BPM' },
        { name: '@ggbbeats.dance', desc: 'Modern & Classic Reggaeton, RKT, Dancehall, Brazilian Funk', bpm: '90-105 BPM' },
        { name: '@ggbbeats.chill', desc: 'Lo-Fi Hip-Hop, Smooth Pop, Bossa Nova, Acoustic Textures', bpm: '75-88 BPM' }
      ],
      pricingTitle: 'Official Licensing Catalog & Rates',
      tiers: [
        {
          id: 'wav_lease',
          name: 'WAV Lease',
          tag: 'BASIC RECORDING LICENSE',
          price: '$100 USD',
          desc: 'For recording artists releasing commercial singles across global streaming platforms.',
          features: [
            'Mastered MP3 (320 kbps) + WAV (24-bit) files',
            'Commercial distribution up to 10,000 copies',
            'Up to 200,000 digital streams on Spotify / Apple Music',
            '1 official monetized music video on YouTube',
            'Radio broadcasting rights on up to 2 stations',
            'Signed non-exclusive PDF licensing agreement'
          ],
          highlight: false,
          cta: 'Request WAV Lease'
        },
        {
          id: 'exclusive_beat',
          name: 'Exclusive License & Custom Beat',
          tag: 'MOST POPULAR • EXCLUSIVE RIGHTS',
          price: 'Starting at $200 USD',
          desc: 'Bespoke from-scratch production tailored to your flow, vocal range, and sonic vision.',
          features: [
            'Full multitrack stems + WAV + MP3 delivery',
            'Bespoke composition, arrangement and structural design',
            '100% unlimited physical & digital distribution copies',
            'Unlimited digital streams & paid live performances',
            'Unlimited official music videos and sync use',
            'Studio mix balance by MYOOZ InC audio engineers',
            'Formal exclusive commercial rights assignment contract'
          ],
          highlight: true,
          cta: 'Acquire Exclusive License'
        },
        {
          id: 'sync_audio',
          name: 'Audiovisual Sync License',
          tag: 'FILM, TV & VIDEO GAMES',
          price: 'Starting at $350 USD',
          desc: 'Original soundtrack composition and sound design for short films, gaming, and commercial promos.',
          features: [
            'Original music timed precisely to picture / edit cut',
            'Instrumental versions, loops, and trailer cutdowns (15s, 30s, 60s)',
            'Perpetual or seasonal commercial sync clearance',
            'Mastering compliant with streaming & broadcast loudness standards',
            '100% clean rights guaranteed without Content ID copyright claims'
          ],
          highlight: false,
          cta: 'Get Sync Quote'
        }
      ],
      formSectionTitle: 'Music Production Inquiry / Beat Quote',
      formSectionSub: 'Provide your technical project specs to receive pricing, stems availability, or preliminary demos within 24 hours.',
      labels: {
        artistName: 'Artist / Label / Production Co Name:',
        email: 'Contact Email Address:',
        genre: 'Musical Genre:',
        bpm: 'Target BPM / Tempo:',
        licenseType: 'Requested License Type:',
        referenceTrack: 'Reference Link (Spotify, YouTube, SoundCloud):',
        budget: 'Estimated Budget Range:',
        notes: 'Project Brief / Conceptual Direction:',
        submit: 'Submit Production Request',
        submitting: 'Processing...',
        successTitle: 'Inquiry Successfully Received!',
        successMsg: 'The GGB Beats and MYOOZ InC audio team will review your specifications and contact you by email within 24 hours.'
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

  const handleSelectTier = (tierName, price) => {
    setSelectedTier(tierName);
    setFormData(prev => ({
      ...prev,
      licenseType: `${tierName} (${price})`
    }));
    const el = document.getElementById('music-inquiry-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="music-production-services" style={{ padding: '6.5rem 0', background: 'radial-gradient(ellipse at 50% 12%, rgba(255, 109, 0, 0.22) 0%, rgba(230, 81, 0, 0.12) 36%, #0B0604 75%, #060302 100%)', color: '#F8FAFC', position: 'relative', overflow: 'hidden' }}>
      
      {/* Studio Spotlight Lights Falloff Beam */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '950px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at 50% 30%, rgba(255, 109, 0, 0.28) 0%, rgba(230, 81, 0, 0.15) 40%, transparent 75%)',
        filter: 'blur(85px)',
        pointerEvents: 'none'
      }} />

      {/* Static Background Model: Ginger Boy Standing in Studio Look */}
      <div style={{
        position: 'absolute',
        right: '3%',
        bottom: '5%',
        height: '680px',
        opacity: 0.18,
        pointerEvents: 'none',
        zIndex: 1,
        filter: 'drop-shadow(0 0 40px rgba(230, 81, 0, 0.35))',
        display: 'flex',
        alignItems: 'flex-end'
      }}>
        <img 
          src="/images/gingerboy_model_standing.png" 
          alt="Ginger Boy Music Producer Model" 
          style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(230, 81, 0, 0.18)',
            border: '1px solid rgba(230, 81, 0, 0.4)',
            color: '#F59E0B',
            padding: '0.4rem 1.1rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.78rem',
            fontWeight: '800',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <Disc3 size={15} />
            <span>{content.tag}</span>
          </div>

          <h2 style={{ fontSize: '2.4rem', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            {content.title}
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94A3B8', maxWidth: '780px', margin: '0 auto', lineHeight: '1.6' }}>
            {content.subtitle}
          </p>
        </div>

        {/* 3 Sonics Facets Bar */}
        <div style={{
          background: 'rgba(22, 12, 7, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '1.6rem 2rem',
          marginBottom: '4rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.45)',
          backdropFilter: 'blur(14px)'
        }}>
          <div style={{
            fontSize: '0.82rem',
            fontWeight: '800',
            color: '#CBD5E1',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Sliders size={16} color="#D97706" />
            <span>{content.facetsNote}</span>
          </div>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {content.facets.map((facet, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '14px',
                  padding: '1.2rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontWeight: '800', color: '#F59E0B', fontSize: '0.95rem' }}>
                    {facet.name}
                  </span>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(217, 119, 6, 0.2)', color: '#FCD34D', padding: '0.15rem 0.5rem', borderRadius: '6px', fontWeight: '700' }}>
                    {facet.bpm}
                  </span>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#94A3B8', margin: 0, lineHeight: '1.4' }}>
                  {facet.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & License Tiers */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {content.pricingTitle}
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#94A3B8' }}>
              Catálogo oficial disponible también en <a href="https://myoozinc.com/ggbbeats/" target="_blank" rel="noopener noreferrer" style={{ color: '#F59E0B', textDecoration: 'underline' }}>myoozinc.com/ggbbeats/</a>
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {content.tiers.map((tier) => (
              <div
                key={tier.id}
                style={{
                  background: tier.highlight ? 'linear-gradient(145deg, rgba(38, 18, 9, 0.95) 0%, rgba(22, 11, 6, 0.95) 100%)' : 'rgba(20, 10, 6, 0.8)',
                  border: tier.highlight ? '2px solid #FF6D00' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: tier.highlight ? '0 20px 45px rgba(230, 81, 0, 0.35)' : '0 10px 25px rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(12px)',
                  transition: 'transform 0.3s ease'
                }}
              >
                {tier.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #FF6D00 0%, #E65100 100%)',
                    color: '#FFF',
                    fontSize: '0.72rem',
                    fontWeight: '800',
                    padding: '0.3rem 1.1rem',
                    borderRadius: 'var(--radius-full)',
                    letterSpacing: '0.05em',
                    boxShadow: '0 4px 15px rgba(255, 109, 0, 0.4)'
                  }}>
                    {tier.tag}
                  </div>
                )}

                <div>
                  {!tier.highlight && (
                    <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#F59E0B', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {tier.tag}
                    </span>
                  )}
                  <h4 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#FFFFFF', margin: '0.4rem 0 0.2rem 0' }}>
                    {tier.name}
                  </h4>
                  <div style={{ fontSize: '2.1rem', fontWeight: '900', color: '#FCD34D', margin: '0.6rem 0 1rem 0' }}>
                    {tier.price}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: '1.5', marginBottom: '1.8rem' }}>
                    {tier.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.2rem' }}>
                    {tier.features.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.86rem', color: '#E2E8F0', lineHeight: '1.4' }}>
                        <Check size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleSelectTier(tier.name, tier.price)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.2rem',
                      borderRadius: '12px',
                      fontWeight: '800',
                      fontSize: '0.92rem',
                      cursor: 'pointer',
                      border: tier.highlight ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                      background: tier.highlight ? 'linear-gradient(135deg, #FF6D00 0%, #E65100 100%)' : 'rgba(255, 255, 255, 0.05)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      boxShadow: tier.highlight ? '0 8px 25px rgba(255, 109, 0, 0.4)' : 'none'
                    }}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Beatmaking & Inquiry Form */}
        <div 
          id="music-inquiry-form"
          style={{
            background: 'rgba(20, 10, 6, 0.94)',
            border: '1px solid rgba(230, 81, 0, 0.4)',
            borderRadius: '28px',
            padding: '3rem 2.5rem',
            maxWidth: '860px',
            margin: '0 auto',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(230, 81, 0, 0.15)',
            backdropFilter: 'blur(16px)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0 auto 1.2rem auto',
              border: '3px solid #E65100',
              boxShadow: '0 8px 25px rgba(230, 81, 0, 0.45)',
              background: '#D84315'
            }}>
              <img 
                src="/images/ggb_orange_closeup.jpg" 
                alt="GGB Beats Producer" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#F59E0B', fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              <Headphones size={15} />
              <span>GGB BEATS STUDIO BOOKING</span>
            </div>
            <h3 style={{ fontSize: '1.9rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.6rem' }}>
              {content.formSectionTitle}
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#94A3B8', maxWidth: '640px', margin: '0 auto' }}>
              {content.formSectionSub}
            </p>
          </div>

          {formStatus.submitted ? (
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid #10B981',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center'
            }}>
              <ShieldCheck size={48} color="#10B981" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                {content.labels.successTitle}
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#CBD5E1', maxWidth: '540px', margin: '0 auto 1.5rem auto' }}>
                {content.labels.successMsg}
              </p>
              <button
                onClick={() => setFormStatus({ submitted: false, loading: false })}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  padding: '0.5rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                Enviar otra consulta de producción
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              <div className="grid-2" style={{ gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#CBD5E1', marginBottom: '0.4rem' }}>
                    {content.labels.artistName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Artista / Sello Discográfico"
                    value={formData.artistName}
                    onChange={(e) => setFormData({ ...formData, artistName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#CBD5E1', marginBottom: '0.4rem' }}>
                    {content.labels.email}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contacto@tusello.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div className="grid-3" style={{ gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#CBD5E1', marginBottom: '0.4rem' }}>
                    {content.labels.genre}
                  </label>
                  <select
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: '#0F172A',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    <option value="Trap / Drill">Trap / Drill (@ggbbeats)</option>
                    <option value="Reggaetón / RKT">Reggaetón / RKT (@ggbbeats.dance)</option>
                    <option value="Dancehall / Funk">Dancehall / Funk Brasilero (@ggbbeats.dance)</option>
                    <option value="Lo-Fi / Chill Pop">Lo-Fi / Chill Pop (@ggbbeats.chill)</option>
                    <option value="Banda Sonora / Sync">Banda Sonora / Sync Audiovisual</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#CBD5E1', marginBottom: '0.4rem' }}>
                    {content.labels.bpm}
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: 135 BPM / 98 BPM"
                    value={formData.bpm}
                    onChange={(e) => setFormData({ ...formData, bpm: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#CBD5E1', marginBottom: '0.4rem' }}>
                    {content.labels.licenseType}
                  </label>
                  <select
                    value={formData.licenseType}
                    onChange={(e) => setFormData({ ...formData, licenseType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: '#0F172A',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    <option value="WAV Lease ($100 USD)">WAV Lease ($100 USD)</option>
                    <option value="Licencia Exclusiva ($200+ USD)">Licencia Exclusiva ($200+ USD)</option>
                    <option value="Sync Audiovisual ($350+ USD)">Sync Audiovisual ($350+ USD)</option>
                    <option value="Producción Completa de Álbum">Producción Completa de Álbum / EP</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#CBD5E1', marginBottom: '0.4rem' }}>
                  {content.labels.referenceTrack}
                </label>
                <input
                  type="url"
                  placeholder="https://open.spotify.com/track/... o enlace de YouTube"
                  value={formData.referenceTrack}
                  onChange={(e) => setFormData({ ...formData, referenceTrack: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#FFF',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#CBD5E1', marginBottom: '0.4rem' }}>
                  {content.labels.notes}
                </label>
                <textarea
                  rows="3"
                  placeholder="Cuéntanos el concepto, arreglos deseados o fecha prevista de lanzamiento..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#FFF',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <a
                  href="https://myoozinc.com/ggbbeats/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#94A3B8',
                    fontSize: '0.84rem',
                    textDecoration: 'none'
                  }}
                >
                  <ExternalLink size={14} />
                  <span>Explorar catálogo digital en myoozinc.com</span>
                </a>

                <button
                  type="submit"
                  disabled={formStatus.loading}
                  style={{
                    background: 'linear-gradient(135deg, #D97706 0%, #E05328 100%)',
                    color: '#FFF',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.9rem 2rem',
                    fontSize: '0.95rem',
                    fontWeight: '800',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    boxShadow: '0 8px 25px rgba(217, 119, 6, 0.35)'
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
