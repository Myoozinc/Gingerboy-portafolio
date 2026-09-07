import React, { useState, useEffect } from 'react';
import { Camera, Upload, Check, Maximize2, Disc3, Sparkles, Filter, ShieldCheck } from 'lucide-react';

const HIGH_RES_GALLERY = [
  {
    id: 1,
    title: 'GGB Beats • Emblema Oficial (1080x1080)',
    category: 'GGB Beats & Studio',
    tag: 'Sonic Identity',
    url: '/images/ggbbeats-logo-circle.png',
    badge: 'MYOOZ InC Roster',
    fit: 'contain',
    bg: '#0F172A'
  },
  {
    id: 2,
    title: 'GGB Beats x Adidas • Gorra Oficial',
    category: 'Streetwear & Merch',
    tag: 'Brand Collaboration',
    url: '/images/merch/ggbbeats-adidas-blackhat.png',
    badge: 'Streetwear Drop',
    fit: 'contain',
    bg: '#F8FAFC'
  },
  {
    id: 3,
    title: 'Centro de Acopio • Mapeo Solidario (1376x768)',
    category: 'Apps & Ayuda Humanitaria',
    tag: 'Impacto Social & Tech',
    url: '/images/acopio_banner.jpg',
    badge: 'Humanitarian App',
    fit: 'cover',
    bg: '#0F172A'
  },
  {
    id: 4,
    title: 'GGB Beats Last Urban X • Hoodie Negro',
    category: 'Streetwear & Merch',
    tag: 'Colección Urbana',
    url: '/images/merch/ggbbeatslasturbanx-blackhoodie-front.png',
    badge: 'Heavyweight Hoodie',
    fit: 'contain',
    bg: '#F8FAFC'
  },
  {
    id: 5,
    title: 'MYOOZ InC Record Label • Jersey Oficial',
    category: 'Streetwear & Merch',
    tag: 'Sello Discográfico',
    url: '/images/merch/myoozinc-blackjersey.png',
    badge: 'Label Uniform',
    fit: 'contain',
    bg: '#F8FAFC'
  },
  {
    id: 6,
    title: 'GGB Beats • Studio Production Suite',
    category: 'GGB Beats & Studio',
    tag: 'Music Production',
    url: '/images/ggb_studio.jpg',
    badge: 'Beatmaking Suite',
    fit: 'cover',
    bg: '#0F172A'
  },
  {
    id: 7,
    title: 'GGB Beats Premium • Hoodie Beige',
    category: 'Streetwear & Merch',
    tag: 'Signature Apparel',
    url: '/images/merch/ggbbeats-beigehoodie.png',
    badge: 'Premium Edition',
    fit: 'contain',
    bg: '#F8FAFC'
  },
  {
    id: 8,
    title: 'GGB Beats GG-Pad • Sudadera Urbana',
    category: 'Streetwear & Merch',
    tag: 'Producer Wear',
    url: '/images/merch/ggbbeatsggpad-blacksweatshirt.png',
    badge: 'GG-Pad Series',
    fit: 'contain',
    bg: '#F8FAFC'
  },
  {
    id: 9,
    title: 'Sound Design & Live Session Setup',
    category: 'GGB Beats & Studio',
    tag: 'Live Hardware',
    url: '/images/ggb_beats_gear.jpg',
    badge: 'Live Gear',
    fit: 'cover',
    bg: '#0F172A'
  }
];

export default function PhotoGallery({ lang }) {
  const [photos, setPhotos] = useState(() => {
    const saved = localStorage.getItem('ginger_gallery_photos_v3');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return HIGH_RES_GALLERY; }
    }
    return HIGH_RES_GALLERY;
  });

  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  useEffect(() => {
    localStorage.setItem('ginger_gallery_photos_v3', JSON.stringify(photos));
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
          badge: 'Foto Personalizada',
          fit: 'cover'
        };
        setPhotos(updated);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setPhotos(HIGH_RES_GALLERY);
    localStorage.removeItem('ginger_gallery_photos_v3');
  };

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

  const content = {
    es: {
      tag: 'LOOKBOOK FOTOGRÁFICO DE ALTA RESOLUCIÓN',
      title: 'Catálogo Visual Oficial: GGB Beats, Streetwear & Apps',
      subtitle: 'Imágenes nítidas y elementos de branding de alta fidelidad que representan el sistema completo de Ginger Boy: producciones de audio, moda urbana y plataformas humanitarias.',
      filterAll: 'Todas las Imágenes',
      filterStudio: 'GGB Beats & Studio',
      filterMerch: 'Streetwear & Merch',
      filterApps: 'Apps & Ayuda Humanitaria',
      uploadBtn: 'Subir Foto',
      changeBtn: 'Reemplazar Foto',
      resetBtn: 'Restablecer Galería Original'
    },
    en: {
      tag: 'HIGH-RESOLUTION VISUAL LOOKBOOK',
      title: 'Official Visual Catalog: GGB Beats, Streetwear & Apps',
      subtitle: 'Crisp, high-fidelity branding assets showcasing the complete Ginger Boy system: music studio productions, streetwear apparel drops, and humanitarian platforms.',
      filterAll: 'All Images',
      filterStudio: 'GGB Beats & Studio',
      filterMerch: 'Streetwear & Merch',
      filterApps: 'Apps & Humanitarian Tech',
      uploadBtn: 'Upload Photo',
      changeBtn: 'Replace Photo',
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
            { id: 'Streetwear & Merch', label: content.filterMerch },
            { id: 'Apps & Ayuda Humanitaria', label: content.filterApps }
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
              borderRadius: '24px',
              border: '1px solid var(--border-light)',
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-md)'
            }}>
              
              {/* Photo Container */}
              <div style={{
                height: '320px',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                background: item.bg || '#0F172A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: item.fit === 'contain' ? '1.5rem' : '0'
              }}>
                <img 
                  src={item.url} 
                  alt={item.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: item.fit === 'cover' ? '100%' : 'auto',
                    height: item.fit === 'cover' ? '100%' : 'auto',
                    objectFit: item.fit || 'cover',
                    filter: item.fit === 'contain' ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' : 'none'
                  }} 
                />

                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.9rem',
                  left: '0.9rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: 'var(--text-main)',
                  padding: '0.35rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: '800',
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
                    top: '0.9rem',
                    right: '0.9rem',
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
                  
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginTop: '0.2rem', fontWeight: '700' }}>
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
            background: 'rgba(15, 23, 42, 0.94)',
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
