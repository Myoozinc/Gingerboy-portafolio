import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Upload, Plus, Trash2, Maximize2, Sparkles, Camera, Check } from 'lucide-react';

const DEFAULT_PHOTOS = [
  {
    id: 1,
    title: 'París Travel Lifestyle',
    category: 'Travel & Lifestyle',
    url: '/images/travel.jpg',
    isSample: true
  },
  {
    id: 2,
    title: 'Urban Fashion Portrait',
    category: 'Fashion & Outfits',
    url: '/images/avatar.jpg',
    isSample: true
  },
  {
    id: 3,
    title: 'European City Exploration',
    category: 'City Escapes',
    url: '/images/travel.jpg',
    isSample: true
  },
  {
    id: 4,
    title: 'Commercial Brand Collaboration',
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
          title: file.name.replace(/\.[^/.]+$/, "") || updated[index].title
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
      title: 'Galería Fotográfica Comercial',
      subtitle: 'Espacio preparado para integrar las 4 fotos adicionales de tu campaña o sesión de contenido.',
      uploadBtn: 'Subir Foto',
      changeBtn: 'Cambiar Imagen',
      resetBtn: 'Restablecer Galería Original',
      dropNotice: 'Haz clic en cualquier tarjeta para cargar tus propias fotos.',
      customBadge: 'Foto Personalizada'
    },
    en: {
      tag: 'PHOTO GALLERY & CAMPAIGN LOOKBOOK',
      title: 'Commercial Photo Gallery',
      subtitle: 'Slot ready to display the 4 upcoming campaign photos of Ginger Boy.',
      uploadBtn: 'Upload Photo',
      changeBtn: 'Replace Image',
      resetBtn: 'Reset Gallery',
      dropNotice: 'Click any slot to upload your custom photos.',
      customBadge: 'Custom Upload'
    }
  }[lang];

  return (
    <section id="gallery" style={{ padding: '6rem 0', background: 'rgba(9, 11, 16, 0.8)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Camera size={14} style={{ display: 'inline', marginRight: '0.4rem' }} />
            {content.tag}
          </div>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
          <p style={{ fontSize: '0.88rem', color: 'var(--ginger-primary)', marginTop: '0.6rem', fontWeight: '600' }}>
            ✨ {content.dropNotice}
          </p>
        </div>

        {/* Gallery Grid of 4 Photos */}
        <div className="grid-4">
          {photos.map((item, idx) => (
            <div key={item.id} className="glass-card" style={{
              padding: '0',
              overflow: 'hidden',
              borderRadius: '22px',
              border: item.isSample ? '1px solid var(--border-light)' : '1px solid var(--ginger-primary)',
              boxShadow: item.isSample ? 'none' : 'var(--ginger-glow)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}>
              
              {/* Photo Image Container */}
              <div style={{
                height: '320px',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                background: '#151821'
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
                  background: item.isSample ? 'rgba(9, 11, 16, 0.75)' : 'var(--ginger-gradient)',
                  color: '#FFF',
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  {item.isSample ? <Camera size={12} /> : <Check size={12} />}
                  <span>{item.isSample ? `Slot #${idx + 1}` : content.customBadge}</span>
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
                    background: 'rgba(9, 11, 16, 0.7)',
                    border: '1px solid var(--border-light)',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(8px)'
                  }}
                  title="Ampliar Imagen"
                >
                  <Maximize2 size={14} />
                </button>
              </div>

              {/* Card Controls & Info */}
              <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold-accent)', fontWeight: '700', textTransform: 'uppercase' }}>
                  {item.category}
                </div>
                
                <h4 style={{ fontSize: '1rem', color: '#FFF' }}>
                  {item.title}
                </h4>

                {/* File Upload Button Input */}
                <label style={{
                  marginTop: '0.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px dashed var(--border-ginger)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-main)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}>
                  <Upload size={14} color="#FF5E36" />
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

        {/* Reset button if custom photos added */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button 
            onClick={handleReset}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-dim)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              textDecoration: 'underline'
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
            background: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(20px)',
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
              boxShadow: '0 25px 50px rgba(0,0,0,0.8)'
            }} 
          />
        </div>
      )}
    </section>
  );
}
