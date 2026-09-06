import React, { useState, useEffect } from 'react';
import { Camera, Upload, Check, Maximize2, Sparkles } from 'lucide-react';

const REAL_DEFAULT_PHOTOS = [
  {
    id: 1,
    title: 'Ginger Boy en Arco del Triunfo (París)',
    category: 'Travel & Fashion',
    url: '/images/reel_1.jpg',
    isSample: false
  },
  {
    id: 2,
    title: 'Ginger Boy frente a la Torre Eiffel',
    category: 'Lifestyle & Travel',
    url: '/images/reel_4.jpg',
    isSample: false
  },
  {
    id: 3,
    title: 'Rutas & Guía de Viaje Interactivo',
    category: 'Guías de Viaje',
    url: '/images/reel_2.jpg',
    isSample: false
  },
  {
    id: 4,
    title: 'Cultura & Experiencias Urbanas',
    category: 'Entretenimiento & Cultura',
    url: '/images/reel_3.jpg',
    isSample: false
  }
];

export default function PhotoGallery({ lang }) {
  const [photos, setPhotos] = useState(() => {
    const saved = localStorage.getItem('ginger_gallery_photos');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return REAL_DEFAULT_PHOTOS; }
    }
    return REAL_DEFAULT_PHOTOS;
  });

  const [activeLightbox, setActiveLightbox] = useState(null);

  useEffect(() => {
    localStorage.setItem('ginger_gallery_photos', JSON.stringify(photos));
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
          isSample: false,
          title: file.name.replace(/\.[^/.]+$/, "") || `Foto de Campaña ${index + 1}`
        };
        setPhotos(updated);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setPhotos(REAL_DEFAULT_PHOTOS);
    localStorage.removeItem('ginger_gallery_photos');
  };

  const content = {
    es: {
      tag: 'GALERÍA DE FOTOS REALES DE GINGER BOY',
      title: 'Galería Fotográfica Oficial',
      subtitle: 'Fotos reales extraídas directamente de las publicaciones e historias de Ginger Boy.',
      uploadBtn: 'Subir Nueva Foto',
      changeBtn: 'Cambiar Foto',
      resetBtn: 'Restablecer Fotos de Instagram',
      dropNotice: 'Fotos extraídas de Instagram. Puedes cambiarlas por cualquier foto de tu equipo.',
      customBadge: 'Instagram Real'
    },
    en: {
      tag: 'GINGER BOY REAL PHOTO GALLERY',
      title: 'Official Photo Gallery',
      subtitle: 'Real photos extracted directly from Ginger Boy\'s Instagram posts and stories.',
      uploadBtn: 'Upload New Photo',
      changeBtn: 'Replace Photo',
      resetBtn: 'Reset Instagram Photos',
      dropNotice: 'Real Instagram photos. You can replace them anytime with your own files.',
      customBadge: 'Real Instagram'
    }
  }[lang];

  return (
    <section id="gallery" style={{ padding: '5.5rem 0', background: '#F8FAFC' }}>
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
          <p style={{ fontSize: '0.88rem', color: 'var(--ginger-primary)', marginTop: '0.6rem', fontWeight: '700' }}>
            ✨ {content.dropNotice}
          </p>
        </div>

        {/* Gallery Grid of 4 Photos */}
        <div className="grid-4">
          {photos.map((item, idx) => (
            <div key={item.id} className="glass-card" style={{
              padding: '0',
              overflow: 'hidden',
              borderRadius: '20px',
              border: '1px solid var(--border-light)',
              background: '#FFFFFF',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-md)'
            }}>
              
              {/* Photo Image Container */}
              <div style={{
                height: '310px',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                background: '#F1F5F9'
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

                {/* Overlaid Badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.8rem',
                  left: '0.8rem',
                  background: 'var(--ginger-gradient)',
                  color: '#FFF',
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  <Check size={12} />
                  <span>{content.customBadge}</span>
                </div>

                {/* Lightbox Expand Button */}
                <button
                  onClick={() => setActiveLightbox(item.url)}
                  style={{
                    position: 'absolute',
                    top: '0.8rem',
                    right: '0.8rem',
                    width: '34px',
                    height: '34px',
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
                  <Maximize2 size={14} />
                </button>
              </div>

              {/* Card Controls & Info */}
              <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--gold-accent)', fontWeight: '800', textTransform: 'uppercase' }}>
                  {item.category}
                </div>
                
                <h4 style={{ fontSize: '1rem', color: 'var(--text-main)' }}>
                  {item.title}
                </h4>

                {/* File Upload Button */}
                <label style={{
                  marginTop: '0.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1rem',
                  background: '#F8FAFC',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--ginger-primary)',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}>
                  <Upload size={14} color="var(--ginger-primary)" />
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
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
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
            background: 'rgba(15, 23, 42, 0.9)',
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
