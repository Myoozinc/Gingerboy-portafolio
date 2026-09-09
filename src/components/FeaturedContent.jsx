import React, { useState } from 'react';
import { Play, Flame, MapPin, Eye, ExternalLink, ChevronLeft, ChevronRight, Layers, Sparkles, Heart, MessageCircle, Send, Bookmark, Disc3, ShieldCheck } from 'lucide-react';

export default function FeaturedContent({ lang }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      id: 1,
      badge: 'SONIC BRANDING & EMBLEMA',
      title: 'GGB Beats • Emblema Oficial & Identidad Sonora',
      subtitle: 'Imagen compartida transversalmente entre @gingerboyofficial y @gingerboybeats bajo el sello MYOOZ InC.',
      image: '/images/ggbbeats-logo-circle.png',
      imageFit: 'contain',
      tag: 'GGB Beats Roster',
      accountTag: '@gingerboybeats • MYOOZ InC',
      likes: '16.5K',
      comments: '842',
      isMusic: true
    },
    {
      id: 2,
      badge: 'IMPACTO SOCIAL & TECH',
      title: 'Centro de Acopio • Mapeo Solidario & Ayuda Humanitaria',
      subtitle: 'Iniciativa y aplicación comunitaria creada por Ginger Boy para coordinar donaciones y suministros en emergencias.',
      image: '/images/acopio_donaciones.jpg',
      imageFit: 'contain',
      tag: 'Humanitarian Tech',
      accountTag: '@gingerboyofficial • Tech for Good',
      likes: '9.1K',
      comments: '630',
      isMusic: false
    },
    {
      id: 3,
      badge: 'STREETWEAR & MERCH',
      title: 'Colaboración GGB Beats x Adidas & Urban X',
      subtitle: 'Línea de moda urbana oficial: gorras conmemorativas, hoodies pesados y jerseys distribuidos por MYOOZ InC.',
      image: '/images/merch/ggbbeats-adidas-blackhat.png',
      imageFit: 'contain',
      tag: 'Fashion Drop',
      accountTag: '@gingerboyofficial • Streetwear',
      likes: '12.8K',
      comments: '415',
      isMusic: false
    },
    {
      id: 4,
      badge: 'STUDIO & BEATS RELEASES',
      title: 'Sesiones de Producción & Lanzamientos Oficiales',
      subtitle: 'Instrumentales urbanas, trap, reggaetón y bolero flamenco disponibles en Spotify, YouTube y myoozinc.com.',
      image: '/images/yt_beat_1.jpg',
      imageFit: 'cover',
      tag: 'Music Production',
      accountTag: '@gingerboybeats • Catálogo Oficial',
      likes: '14.2K',
      comments: '512',
      isMusic: true
    },
    {
      id: 5,
      badge: 'LIFESTYLE & TRAVEL',
      title: 'Experiencias Internacionales en Europa',
      subtitle: 'Bitácora cinematográfica por París, monumentos emblemáticos y gastronomía con alta retención de audiencia.',
      image: '/images/travel.jpg',
      imageFit: 'cover',
      tag: 'Travel & Culture',
      accountTag: '@gingerboyofficial • Paris Series',
      likes: '11.0K',
      comments: '789',
      isMusic: false
    }
  ];

  const topReels = [
    {
      title: 'Arco del Triunfo • París',
      views: '11,000',
      category: 'Travel & Culture',
      location: 'París, Francia',
      badge: 'Travel Reel',
      image: '/images/travel.jpg',
      desc: 'Contenido cinematográfico en monumentos europeos con alta tasa de guardados y retención.'
    },
    {
      title: 'Lanzamiento: App Centro de Acopio',
      views: '9,100',
      category: 'Tech & Ayuda Humanitaria',
      location: 'Impacto Comunitario',
      badge: 'Social Impact',
      image: '/images/acopio_donaciones.jpg',
      desc: 'Video presentando la plataforma de mapas solidarios y centros de distribución humanitaria.'
    },
    {
      title: 'GGB Beats • Beat Session & Drop',
      views: '16,500',
      category: 'Música & Beatmaking',
      location: 'MYOOZ InC Studio',
      badge: 'Music Production',
      image: '/images/yt_beat_2.jpg',
      desc: 'Sesión de creación instrumental urbana compartida entre los canales oficiales del ecosistema.'
    },
    {
      title: 'Torre Eiffel Golden Hour',
      views: '7,600',
      category: 'Aesthetic / Lifestyle',
      location: 'París, Francia',
      badge: 'Lifestyle Series',
      image: '/images/travel.jpg',
      desc: 'Estilo de vida urbano y fotografía al atardecer en París con fuerte interacción de audiencia femenina.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const content = {
    es: {
      tag: 'FORMATOS DE ALTO IMPACTO EN REDES',
      title: 'Carruseles de Marca & Contenido Viral Destacado',
      subtitle: 'Descubre cómo se articulan visualmente las diferentes facetas del ecosistema: la figura pública, la tecnología humanitaria, la moda urbana y los beats de estudio.',
      carouselHeader: 'Simulador Interactivo de Carrusel de Instagram',
      carouselNote: 'Publicaciones multi-slide compartidas entre @gingerboyofficial y @gingerboybeats',
      slideOf: 'de',
      verifiedProof: 'Métricas Reales Extraídas de Meta Business Insights',
      reelsTitle: 'Top Publicaciones & Alcance Cinemático',
      reelsSub: 'Visualizaciones certificadas de los últimos 90 días en Instagram Reels.'
    },
    en: {
      tag: 'HIGH-IMPACT SOCIAL MEDIA FORMATS',
      title: 'Brand Carousels & Top Viral Content',
      subtitle: 'Explore how each pillar of the ecosystem integrates: public figure, humanitarian tech, streetwear fashion, and studio music production.',
      carouselHeader: 'Interactive Instagram Carousel Simulator',
      carouselNote: 'Cross-shared multi-slide posts across @gingerboyofficial and @gingerboybeats',
      slideOf: 'of',
      verifiedProof: 'Real Metrics Certified by Meta Business Insights',
      reelsTitle: 'Top Performing Content & Cinematic Reach',
      reelsSub: 'Verified video view metrics from the last 90 days on Instagram Reels.'
    }
  }[lang];

  const currentPost = carouselSlides[currentSlide];

  return (
    <section id="featured" style={{ padding: '6rem 0', background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Flame size={14} />
            {content.tag}
          </div>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>

        {/* 1. INTERACTIVE INSTAGRAM CAROUSEL SIMULATOR */}
        <div style={{ maxWidth: '780px', margin: '0 auto 5.5rem auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: '800',
              color: 'var(--ginger-primary)',
              background: 'rgba(224, 83, 40, 0.08)',
              padding: '0.35rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              letterSpacing: '0.05em'
            }}>
              {content.carouselNote}
            </span>
          </div>

          <div className="glass-card" style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-lg)',
            overflow: 'hidden',
            padding: 0
          }}>
            
            {/* Instagram Post Header */}
            <div style={{
              padding: '1.1rem 1.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--border-light)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: '#0F172A',
                  border: '2px solid var(--ginger-primary)',
                  padding: '2px'
                }}>
                  <img 
                    src="/images/ggbbeats-logo-circle.png" 
                    alt="Emblema" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.92rem', fontWeight: '800', color: 'var(--text-main)' }}>
                    <span>gingerboyofficial</span>
                    <span style={{ color: 'var(--text-dim)', fontWeight: '400' }}>con</span>
                    <span style={{ color: '#D97706' }}>gingerboybeats</span>
                    <ShieldCheck size={14} color="#10B981" />
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {currentPost.accountTag}
                  </div>
                </div>
              </div>

              {/* Slide Counter Badge */}
              <div style={{
                background: 'rgba(15, 23, 42, 0.06)',
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: '700',
                color: 'var(--text-main)'
              }}>
                {currentSlide + 1} {content.slideOf} {carouselSlides.length}
              </div>
            </div>

            {/* Carousel Visual Display Container */}
            <div style={{
              position: 'relative',
              height: '420px',
              background: '#0B132B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img 
                src={currentPost.image} 
                alt={currentPost.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: currentPost.imageFit === 'cover' ? '100%' : 'auto',
                  height: currentPost.imageFit === 'cover' ? '100%' : 'auto',
                  objectFit: currentPost.imageFit,
                  filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.5))'
                }}
              />

              {/* Prev / Next Controls */}
              <button
                onClick={prevSlide}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  transition: 'var(--transition-smooth)'
                }}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={22} color="#0F172A" />
              </button>

              <button
                onClick={nextSlide}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  transition: 'var(--transition-smooth)'
                }}
                aria-label="Next Slide"
              >
                <ChevronRight size={22} color="#0F172A" />
              </button>

              {/* Floating Slide Tag */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(8px)',
                color: '#FFF',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.72rem',
                fontWeight: '800',
                letterSpacing: '0.06em',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                {currentPost.badge}
              </div>
            </div>

            {/* Post Interaction Bar */}
            <div style={{ padding: '1.2rem 1.4rem' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-main)' }}>
                  <Heart size={22} fill="#E05328" color="#E05328" style={{ cursor: 'pointer' }} />
                  <MessageCircle size={22} style={{ cursor: 'pointer' }} />
                  <Send size={22} style={{ cursor: 'pointer' }} />
                </div>

                {/* Dots indicator */}
                <div style={{ display: 'flex', gap: '5px' }}>
                  {carouselSlides.map((_, i) => (
                    <div 
                      key={i} 
                      onClick={() => setCurrentSlide(i)}
                      style={{
                        width: i === currentSlide ? '22px' : '7px',
                        height: '7px',
                        borderRadius: '4px',
                        background: i === currentSlide ? 'var(--ginger-primary)' : '#CBD5E1',
                        cursor: 'pointer',
                        transition: 'var(--transition-smooth)'
                      }}
                    />
                  ))}
                </div>

                <Bookmark size={22} color="var(--text-main)" style={{ cursor: 'pointer' }} />
              </div>

              {/* Likes counter */}
              <div style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                {currentPost.likes} Me gusta • {currentPost.comments} comentarios
              </div>

              {/* Caption */}
              <div style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
                <strong style={{ marginRight: '0.5rem' }}>gingerboyofficial</strong>
                <span>{currentPost.title} — {currentPost.subtitle}</span>
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.6rem' }}>
                #GingerBoy #GGBBeats #MYOOZInC #MusicProduction #HumanitarianTech #UrbanStyle
              </div>

            </div>

          </div>
        </div>

        {/* 2. TOP PERFORMING REELS & MEDIA PROOF */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
              {content.reelsTitle}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {content.reelsSub}
            </p>
          </div>

          <div className="grid-4" style={{ gap: '1.8rem' }}>
            {topReels.map((reel, idx) => (
              <div key={idx} className="glass-card" style={{
                padding: '0',
                overflow: 'hidden',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                background: '#FFFFFF',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-light)'
              }}>
                
                {/* Visual Thumbnail Frame */}
                <div style={{
                  position: 'relative',
                  height: '240px',
                  width: '100%',
                  overflow: 'hidden',
                  background: '#0B132B'
                }}>
                  <img 
                    src={reel.image} 
                    alt={reel.title} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(11, 19, 43, 0.85) 0%, rgba(11, 19, 43, 0.2) 60%, transparent 100%)'
                  }} />

                  {/* View Metric Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '0.8rem',
                    left: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.82rem',
                    fontWeight: '800',
                    color: 'var(--text-main)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                  }}>
                    <Eye size={14} color="var(--ginger-primary)" />
                    <span>{reel.views} vistas</span>
                  </div>

                  {/* Play Icon */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'var(--ginger-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--ginger-glow)',
                    cursor: 'pointer'
                  }}>
                    <Play size={18} fill="#FFF" color="#FFF" style={{ marginLeft: '3px' }} />
                  </div>

                  {/* Location / Origin */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0.8rem',
                    left: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.78rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: '600'
                  }}>
                    <MapPin size={13} color="#F59E0B" />
                    <span>{reel.location}</span>
                  </div>
                </div>

                {/* Reel Details */}
                <div style={{ padding: '1.2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{
                      fontSize: '0.72rem',
                      color: 'var(--ginger-primary)',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.3rem'
                    }}>
                      {reel.category}
                    </div>

                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem', color: 'var(--text-main)', fontWeight: '700' }}>
                      {reel.title}
                    </h4>

                    <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
                      {reel.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.76rem', color: '#10B981', fontWeight: '700' }}>Meta Insights Verified</span>
                    <ExternalLink size={14} color="var(--text-dim)" />
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
