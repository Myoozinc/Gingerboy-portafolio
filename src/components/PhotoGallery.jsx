import React, { useState, useEffect } from 'react';
import { Camera, Upload, Check, Maximize2, Sparkles } from 'lucide-react';

const DEFAULT_PHOTOS = [
  {
    id: 1,
    title: 'Campana / Sesión #1',
    category: 'Travel & Lifestyle',
    url: '/images/travel.jpg',
    isSample: true
  },
  {
    id: 2,
    title: 'Campana / Sesión #2',
    category: 'Fashion & Outfits',
    url: '/images/avatar.jpg',
    isSample: true
  },
  {
    id: 3,
    title: 'Campana / Sesión #3',
    category: 'Urban Discovery',
    url: '/images/travel.jpg',
    isSample: true
  },
  {
    id: 4,
    title: 'Campana / Sesión #4',
    category: 'Brand Showcase',
    url: '/images/avatar.jpg',
    isSample: true
  }
];

export default function PhotoGallery({ lang }) {
  const [photos, setPhotos] = useState(() => {
    const saved = localStorage.getItem('ginger_gallery_photos');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return DEFAULT_PHOTOS; }
    }
    return DEFAULT_PHOTOS;
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
    setPhotos(DEFAULT_PHOTOS);
    localStorage.removeItem('ginger_gallery_photos');
  };

  const content = {
    es: {
      tag: 'GALERÍA DE FOTOS & CAMPANAS',
      title: 'Galería Fotográfica Profesional',
      subtitle: 'Espacio preparado para integrar las 4 fotos reales de tu campaña o sesión de contenido.',
      uploadBtn: 'Subir Foto Real',
      changeBtn: 'Reemplazar Foto',
      resetBtn: 'Restablecer Muestra',
      dropNotice: 'Haz clic en cualquier casilla para subir tus 4 fotos.',
      customBadge: 'Foto de Campaña'
    },
    en: {
      tag: 'PHOTO GALLERY & LOOKBOOK',
      title: 'Commercial Photo Gallery',
      subtitle: 'Slots ready to display the 4 campaign photos of Ginger Boy.',
      uploadBtn: 'Upload Real Photo',
      changeBtn: 'Replace Photo',
      resetBtn: 'Reset Sample',
      dropNotice: 'Click any slot to upload your custom 4 photos.',
      customBadge: 'Campaign Photo'
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
              border: item.isSample ? '1px solid var(--border-light)' : '2px solid var(--ginger-primary)',
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
                  background: item.isSample ? 'rgba(15, 23, 42, 0.8)' : 'var(--ginger-gradient)',
                  color: '#FFF',
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  {item.isSample ? <Camera size={12} /> : <Check size={12} />}
                  <span>{item.isSample ? `Casilla #${idx + 1}` : content.customBadge}</span>
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
                  background: item.isSample ? 'var(--ginger-light)' : '#F8FAFC',
                  border: item.isSample ? '1px dashed var(--ginger-primary)' : '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--ginger-primary)',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}>
                  <Upload size={14} color="var(--ginger-primary)" />
                  <span>{item.isSample ? content.uploadBtn : content.changeBtn}</span>
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
