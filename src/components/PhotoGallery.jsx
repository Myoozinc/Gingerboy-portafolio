import React, { useState, useEffect } from 'react';
import { Camera, Upload, Check, Maximize2, Disc3, Sparkles, Filter } from 'lucide-react';

const HIGH_RES_GALLERY = [
  {
    id: 1,
    title: 'GGB Beats • Studio Production Suite',
    category: 'GGB Beats & Studio',
    tag: 'Music Production',
    url: '/images/ggb_studio.jpg',
    badge: 'GGB Beats Studio'
  },
  {
    id: 2,
    title: 'Urban Streetwear & Rooftop Editorial',
    category: 'Urban Streetwear',
    tag: 'Fashion & Outfits',
    url: '/images/ggb_streetwear.jpg',
    badge: 'Streetwear Lookbook'
  },
  {
    id: 3,
    title: 'Live DJ Set & Sound Design Session',
    category: 'GGB Beats & Studio',
    tag: 'Sound Design',
    url: '/images/ggb_beats_gear.jpg',
    badge: 'Live Gear'
  },
  {
    id: 4,
    title: 'Ginger Boy • Arco del Triunfo (París)',
    category: 'Travel & París',
    tag: 'Travel Lifestyle',
    url: '/images/reel_1.jpg',
    badge: 'Travel Official'
  },
  {
    id: 5,
    title: 'Ginger Boy • Torre Eiffel Golden Hour',
    category: 'Travel & París',
    tag: 'Travel & Aesthetic',
    url: '/images/reel_4.jpg',
    badge: 'Travel Official'
  },
  {
    id: 6,
    title: 'Guía de Viajes & Ruta Urbana',
    category: 'Travel & París',
    tag: 'Interactive Guides',
    url: '/images/reel_2.jpg',
    badge: 'Editorial Guide'
  }
];

export default function PhotoGallery({ lang }) {
  const [photos, setPhotos] = useState(() => {
    const saved = localStorage.getItem('ginger_gallery_photos_v2');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return HIGH_RES_GALLERY; }
    }
    return HIGH_RES_GALLERY;
  });

  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  useEffect(() => {
    localStorage.setItem('ginger_gallery_photos_v2', JSON.stringify(photos));
  }, [photos]);

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updated = [...photos];
        updated[index] = {
          ...updated[index],
          url: reader.result,
          title: file.name.replace(/\.[^/.]+$/, "") || `Foto Personalizada ${index + 1}`,
          badge: 'Foto Personalizada'
        };
        setPhotos(updated);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setPhotos(HIGH_RES_GALLERY);
    localStorage.removeItem('ginger_gallery_photos_v2');
  };

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

  const content = {
    es: {
      tag: 'LOOKBOOK FOTOGRÁFICO & BRANDING OFICIAL',
      title: 'Galería de Estudio, Streetwear & GGB Beats',
      subtitle: 'Contenido visual de alta resolución que refleja la versatilidad de Ginger Boy: sesiones de estudio musical, moda urbana y experiencias de viaje.',
      filterAll: 'Todas las Fotos',
      filterStudio: 'GGB Beats & Studio',
      filterUrban: 'Urban Streetwear',
      filterTravel: 'Travel & París',
      uploadBtn: 'Subir Foto',
      changeBtn: 'Cambiar',
      resetBtn: 'Restablecer Galería Original'
    },
    en: {
      tag: 'OFFICIAL LOOKBOOK & BRANDING GALLERY',
      title: 'Studio, Streetwear & GGB Beats Gallery',
      subtitle: 'High-resolution visual catalog highlighting Ginger Boy\'s creative depth: music studio sessions, streetwear lookbooks, and travel storytelling.',
      filterAll: 'All Content',
      filterStudio: 'GGB Beats & Studio',
      filterUrban: 'Urban Streetwear',
      filterTravel: 'Travel & Paris',
      uploadBtn: 'Upload Photo',
      changeBtn: 'Replace',
      resetBtn: 'Reset to Original'
    }
  }[lang];

  return (
    <section id="gallery" style={{ padding: '6rem 0', background: '#F8FAFC' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Camera size={14} />
            {content.tag}
          </div>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>

        {/* Filter Categories */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {[
            { id: 'All', label: content.filterAll },
            { id: 'GGB Beats & Studio', label: content.filterStudio },
            { id: 'Urban Streetwear', label: content.filterUrban },
            { id: 'Travel & París', label: content.filterTravel }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: activeCategory === cat.id ? '1px solid var(--ginger-primary)' : '1px solid var(--border-light)',
                background: activeCategory === cat.id ? 'var(--ginger-gradient)' : '#FFFFFF',
                color: activeCategory === cat.id ? '#FFFFFF' : 'var(--text-main)',
                fontWeight: activeCategory === cat.id ? '700' : '600',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                boxShadow: activeCategory === cat.id ? 'var(--ginger-glow)' : 'var(--shadow-sm)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (3 Columns) */}
        <div className="grid-3" style={{ gap: '2rem' }}>
          {filteredPhotos.map((item, idx) => (
            <div key={item.id} className="glass-card" style={{
              padding: '0',
              overflow: 'hidden',
              borderRadius: '20px',
              border: '1px solid var(--border-light)',
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-md)'
            }}>
              
              {/* Photo Container */}
              <div style={{
                height: '340px',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                background: '#0F172A'
              }}>
                <img 
                  src={item.url} 
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }} 
                />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.75) 0%, transparent 60%)'
                }} />

                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.8rem',
                  left: '0.8rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: 'var(--text-main)',
                  padding: '0.35rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <Sparkles size={12} color="var(--ginger-primary)" />
                  <span>{item.badge}</span>
                </div>

                {/* Lightbox Expand */}
                <button
                  onClick={() => setActiveLightbox(item.url)}
                  style={{
                    position: 'absolute',
                    top: '0.8rem',
                    right: '0.8rem',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  title="Ampliar Imagen"
                >
                  <Maximize2 size={15} />
                </button>
              </div>

              {/* Info & Upload Button */}
              <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#D97706', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.tag}
                  </div>
                  
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                    {item.title}
                  </h4>
                </div>

                {/* Upload action */}
                <label style={{
                  marginTop: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '0.6rem 1rem',
                  background: '#F8FAFC',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--ginger-primary)',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}>
                  <Upload size={13} color="var(--ginger-primary)" />
                  <span>{content.changeBtn}</span>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, idx)} 
                    style={{ display: 'none' }}
                  />
                </label>
              </div>

            </div>
          ))}
        </div>

        {/* Reset button */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button 
            onClick={handleReset}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontWeight: '500'
            }}
          >
            {content.resetBtn}
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div 
          onClick={() => setActiveLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.92)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
        >
          <img 
            src={activeLightbox} 
            alt="Expanded view" 
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: '16px',
              objectFit: 'contain',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
            }} 
          />
        </div>
      )}
    </section>
  );
}
