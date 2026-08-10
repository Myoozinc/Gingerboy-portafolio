import React, { useState } from 'react';
import { BarChart3, PieChart, Globe2, Sparkles, TrendingUp, Users, Smartphone, Eye, CheckCircle2, Heart, MousePointer, ExternalLink, Activity } from 'lucide-react';

export default function AnalyticsSection({ lang }) {
  const [activeTab, setActiveTab] = useState('overview');

  const content = {
    es: {
      tag: 'PANEL ANALÍTICO VERIFICADO (META INSIGHTS 90 DÍAS)',
      title: 'Métricas Reales de Audiencia, Alcance y Conversión',
      subtitle: 'Datos extraídos directamente de las estadísticas profesionales de la cuenta de Instagram de Ginger Boy.',
      tabs: [
        { id: 'overview', label: 'Resumen General & Alcance' },
        { id: 'genderAge', label: 'Género & Edad' },
        { id: 'engagement', label: 'Interacciones & Conversión' },
        { id: 'geography', label: 'Top Países (Mercados)' }
      ],
      ageData: [
        { range: '25-34 años', pct: 43.8, highlight: true, note: 'Núcleo Comercial Principal' },
        { range: '35-44 años', pct: 25.6, highlight: false },
        { range: '18-24 años', pct: 16.5, highlight: false },
        { range: '45-54 años', pct: 8.9, highlight: false },
        { range: '55-64 años', pct: 3.1, highlight: false },
        { range: '65+ años', pct: 1.2, highlight: false },
        { range: '13-17 años', pct: 1.0, highlight: false },
      ],
      genderData: {
        women: 69.4,
        men: 30.6
      },
      contentViews: [
        { type: 'Reels', views: '321,000', pct: 100, color: '#E05328', desc: 'Formato de mayor viralidad y descubrimiento de marca' },
        { type: 'Historias', views: '204,000', pct: 63.5, color: '#D97706', desc: 'Alta conversión e interacción directa mediante links & encuestas' },
        { type: 'Publicaciones (Feed)', views: '125,000', pct: 38.9, color: '#7C3AED', desc: 'Posicionamiento visual permanente en el perfil' },
      ],
      interactions: [
        { type: 'Reels Interacciones', val: '8.4K', color: '#E05328', desc: 'Me gustas, comentarios y compartidos en Reels' },
        { type: 'Historias Interacciones', val: '4.9K', color: '#D97706', desc: 'Respuestas y clics en stickers de Historia' },
        { type: 'Publicaciones Interacciones', val: '3.3K', color: '#7C3AED', desc: 'Guardados y me gustas en carruseles del Feed' }
      ],
      conversionMetrics: [
        { title: 'Visitas al Perfil', val: '54,770', note: 'Alto interés en la marca personal', icon: Users, color: '#7C3AED' },
        { title: 'Toques en Link de Bio', val: '1,169', note: 'Tráfico directo derivado a la web/tienda', icon: MousePointer, color: '#E05328' },
        { title: 'Alcance No Seguidores', val: '52.2%', note: 'Viralidad constante a nuevos usuarios', icon: TrendingUp, color: '#10B981' },
        { title: 'Seguidores Netos', val: '+1,371', note: 'Crecimiento orgánico continuo (+6.3%)', icon: Sparkles, color: '#D97706' }
      ],
      geoData: [
        { country: 'Venezuela', pct: 19.7, flag: '🇻🇪' },
        { country: 'México', pct: 11.2, flag: '🇲🇽' },
        { country: 'Estados Unidos', pct: 10.3, flag: '🇺🇸' },
        { country: 'Argentina', pct: 9.4, flag: '🇦🇷' },
        { country: 'Colombia', pct: 7.7, flag: '🇨🇴' },
        { country: 'Otros (España & LATAM)', pct: 41.7, flag: '🌎' },
      ]
    },
    en: {
      tag: 'VERIFIED ANALYTICS DASHBOARD (90-DAY META INSIGHTS)',
      title: 'Real Audience, Reach & Conversion Metrics',
      subtitle: 'Data extracted directly from Ginger Boy\'s professional Instagram account insights.',
      tabs: [
        { id: 'overview', label: 'Overview & Reach' },
        { id: 'genderAge', label: 'Gender & Age' },
        { id: 'engagement', label: 'Interactions & Conversion' },
        { id: 'geography', label: 'Top Markets' }
      ],
      ageData: [
        { range: '25-34 yrs', pct: 43.8, highlight: true, note: 'Primary Commercial Target' },
        { range: '35-44 yrs', pct: 25.6, highlight: false },
        { range: '18-24 yrs', pct: 16.5, highlight: false },
        { range: '45-54 yrs', pct: 8.9, highlight: false },
        { range: '55-64 yrs', pct: 3.1, highlight: false },
        { range: '65+ yrs', pct: 1.2, highlight: false },
        { range: '13-17 yrs', pct: 1.0, highlight: false },
      ],
      genderData: {
        women: 69.4,
        men: 30.6
      },
      contentViews: [
        { type: 'Reels', views: '321,000', pct: 100, color: '#E05328', desc: 'Highest virality & brand discovery format' },
        { type: 'Stories', views: '204,000', pct: 63.5, color: '#D97706', desc: 'High direct conversion & interactive stickers' },
        { type: 'Feed Posts', views: '125,000', pct: 38.9, color: '#7C3AED', desc: 'Permanent visual positioning on feed grid' },
      ],
      interactions: [
        { type: 'Reels Engagement', val: '8.4K', color: '#E05328', desc: 'Likes, comments & shares on Reels' },
        { type: 'Stories Engagement', val: '4.9K', color: '#D97706', desc: 'Replies & sticker taps' },
        { type: 'Posts Engagement', val: '3.3K', color: '#7C3AED', desc: 'Saves & likes on Feed carousels' }
      ],
      conversionMetrics: [
        { title: 'Profile Visits', val: '54,770', note: 'High brand interest', icon: Users, color: '#7C3AED' },
        { title: 'Link in Bio Clicks', val: '1,169', note: 'Direct web traffic to brand links', icon: MousePointer, color: '#E05328' },
        { title: 'Non-Follower Reach', val: '52.2%', note: 'Viral reach to new prospective clients', icon: TrendingUp, color: '#10B981' },
        { title: 'Net New Followers', val: '+1,371', note: 'Continuous organic growth (+6.3%)', icon: Sparkles, color: '#D97706' }
      ],
      geoData: [
        { country: 'Venezuela', pct: 19.7, flag: '🇻🇪' },
        { country: 'Mexico', pct: 11.2, flag: '🇲🇽' },
        { country: 'United States', pct: 10.3, flag: '🇺🇸' },
        { country: 'Argentina', pct: 9.4, flag: '🇦🇷' },
        { country: 'Colombia', pct: 7.7, flag: '🇨🇴' },
        { country: 'Others (Spain & Rest of LATAM)', pct: 41.7, flag: '🌎' },
      ]
    }
  }[lang];

  return (
    <section id="metrics" style={{ padding: '5.5rem 0', background: '#F8FAFC' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BarChart3 size={14} />
            {content.tag}
          </div>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>

        {/* Total Reach Highlights Ribbon */}
        <div className="glass-card reach-ribbon" style={{
          marginBottom: '3rem',
          background: '#FFFFFF',
          borderColor: 'var(--border-light)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          textAlign: 'center',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ padding: '0.8rem' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>
              Seguidores Activos
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: '900', color: 'var(--text-main)', marginTop: '0.2rem' }}>
              23,250
            </div>
            <div style={{ fontSize: '0.78rem', color: '#10B981', fontWeight: '700' }}>
              ▲ +6.3% Crecimiento Reciente
            </div>
          </div>

          <div style={{ padding: '0.8rem', borderLeft: '1px solid var(--border-light)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>
              Visualizaciones Totales
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: '900', color: 'var(--ginger-primary)', marginTop: '0.2rem' }}>
              658,848
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600' }}>
              52.2% No Seguidores (Viral)
            </div>
          </div>

          <div style={{ padding: '0.8rem', borderLeft: '1px solid var(--border-light)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>
              Audiencia Femenina
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: '900', color: '#E11D48', marginTop: '0.2rem' }}>
              69.4%
            </div>
            <div style={{ fontSize: '0.78rem', color: '#E11D48', fontWeight: '700' }}>
              Moda, Lifestyle & Belleza
            </div>
          </div>

          <div style={{ padding: '0.8rem', borderLeft: '1px solid var(--border-light)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>
              Visitas al Perfil
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: '900', color: 'var(--gold-accent)', marginTop: '0.2rem' }}>
              54,770
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--ginger-primary)', fontWeight: '700' }}>
              1,169 Clics en Link de Bio
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {content.tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.75rem 1.6rem',
                borderRadius: 'var(--radius-full)',
                border: activeTab === tab.id ? '1px solid var(--ginger-primary)' : '1px solid var(--border-light)',
                background: activeTab === tab.id ? 'var(--ginger-gradient)' : '#FFFFFF',
                color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-main)',
                fontWeight: activeTab === tab.id ? '700' : '600',
                fontSize: '0.92rem',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                boxShadow: activeTab === tab.id ? 'var(--ginger-glow)' : 'var(--shadow-sm)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview & Conversion Metrics */}
        {activeTab === 'overview' && (
          <div className="grid-2" style={{ alignItems: 'stretch' }}>
            
            {/* Conversion Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
              {content.conversionMetrics.map((m, idx) => {
                const IconComp = m.icon;
                return (
                  <div key={idx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#FFFFFF' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>
                        {m.title}
                      </span>
                      <div style={{ background: `${m.color}15`, padding: '0.4rem', borderRadius: '10px', color: m.color }}>
                        <IconComp size={20} />
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--text-main)' }}>
                        {m.val}
                      </div>
                      <p style={{ fontSize: '0.8rem', color: m.color, marginTop: '0.3rem', fontWeight: '700' }}>
                        {m.note}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Virality Summary */}
            <div className="glass-card" style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#FFFFFF' }}>
              <div>
                <div className="section-tag" style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', borderColor: 'rgba(16,185,129,0.2)' }}>
                  VIRAL DISCOVERY ALGORITHM
                </div>
                <h3 style={{ fontSize: '1.9rem', margin: '0.8rem 0', color: 'var(--text-main)' }}>
                  658K+ Visualizaciones Totales
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  El <strong style={{ color: 'var(--text-main)' }}>52.2%</strong> de las visualizaciones proviene de usuarios no seguidores. Esto garantiza un <strong style={{ color: 'var(--ginger-primary)' }}>descubrimiento orgánico masivo para cualquier marca patrocinadora</strong>.
                </p>
              </div>

              <div style={{ background: '#F8FAFC', padding: '1.2rem', borderRadius: '16px', border: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)' }}>47.8%</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600' }}>Seguidores Fieles</div>
                </div>
                <div style={{ borderLeft: '1px solid var(--border-light)' }} />
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--ginger-primary)' }}>52.2%</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600' }}>Nuevos Espectadores</div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Gender & Age Demographics */}
        {activeTab === 'genderAge' && (
          <div className="grid-2" style={{ alignItems: 'start' }}>
            
            {/* Gender Distribution Card */}
            <div className="glass-card" style={{ background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Heart color="#E11D48" />
                <span>Distribución por Sexo / Género</span>
              </h3>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '1.05rem', fontWeight: '700' }}>
                  <span style={{ color: '#E11D48' }}>
                    Mujeres (69.4%)
                  </span>
                  <span style={{ color: '#7C3AED' }}>
                    Hombres (30.6%)
                  </span>
                </div>

                <div style={{ width: '100%', height: '24px', borderRadius: '12px', overflow: 'hidden', display: 'flex', background: '#F1F5F9' }}>
                  <div style={{ width: '69.4%', height: '100%', background: 'linear-gradient(90deg, #F43F5E 0%, #E11D48 100%)' }} />
                  <div style={{ width: '30.6%', height: '100%', background: 'linear-gradient(90deg, #8B5CF6 0%, #6366F1 100%)' }} />
                </div>
              </div>

              <div style={{ background: 'rgba(225, 29, 72, 0.06)', padding: '1.2rem', borderRadius: '16px', border: '1px solid rgba(225, 29, 72, 0.15)' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  ✨ Excelente Perfil para Marcas Femeninas y Lifestyle
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  El 69.4% de la audiencia son mujeres jóvenes con alto poder de decisión de compra en Moda, Cosmética, Viajes, Gastronomía y Estilo de Vida.
                </p>
              </div>
            </div>

            {/* Age Breakdown Card */}
            <div className="glass-card" style={{ background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Users color="var(--ginger-primary)" />
                <span>Rangos de Edad</span>
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {content.ageData.map((item, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.95rem' }}>
                      <span style={{ fontWeight: item.highlight ? '700' : '500', color: item.highlight ? 'var(--text-main)' : 'var(--text-muted)' }}>
                        {item.range} {item.note && <span style={{ fontSize: '0.75rem', background: 'var(--ginger-light)', color: 'var(--ginger-primary)', padding: '0.15rem 0.5rem', borderRadius: '4px', marginLeft: '0.5rem', fontWeight: '700' }}>{item.note}</span>}
                      </span>
                      <span style={{ fontWeight: '700', color: item.highlight ? 'var(--ginger-primary)' : 'var(--text-main)' }}>
                        {item.pct}%
                      </span>
                    </div>

                    <div style={{
                      width: '100%',
                      height: item.highlight ? '12px' : '8px',
                      background: '#F1F5F9',
                      borderRadius: '10px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${item.pct}%`,
                        height: '100%',
                        background: item.highlight 
                          ? 'var(--ginger-gradient)' 
                          : 'linear-gradient(90deg, #7C3AED 0%, #E11D48 100%)',
                        borderRadius: '10px'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Engagement & Interactions */}
        {activeTab === 'engagement' && (
          <div className="grid-3">
            {content.interactions.map((item, i) => (
              <div key={i} className="glass-card" style={{
                padding: '2.2rem 1.8rem',
                textAlign: 'center',
                background: '#FFFFFF'
              }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: `${item.color}12`,
                  border: `1px solid ${item.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem auto',
                  color: item.color
                }}>
                  <Activity size={26} />
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>
                  {item.type}
                </div>

                <div style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--text-main)', margin: '0.3rem 0' }}>
                  {item.val}
                </div>

                <div style={{ fontSize: '0.85rem', color: item.color, fontWeight: '700', marginBottom: '1rem' }}>
                  Interacciones Totales
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Top Countries */}
        {activeTab === 'geography' && (
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="glass-card" style={{ background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Globe2 color="var(--ginger-primary)" />
                <span>Principales Países de Audiencia</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {content.geoData.map((g, idx) => (
                  <div key={idx} style={{ background: '#F8FAFC', padding: '0.85rem 1rem', borderRadius: '14px', border: '1px solid var(--border-light)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)' }}>
                        <span style={{ fontSize: '1.3rem' }}>{g.flag}</span>
                        {g.country}
                      </span>
                      <span style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--ginger-primary)' }}>
                        {g.pct}%
                      </span>
                    </div>

                    <div style={{ width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '10px', overflow: 'hidden' }}>
                      <div style={{
                        width: `${g.pct}%`,
                        height: '100%',
                        background: 'var(--ginger-gradient)'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2.5rem', background: '#FFFFFF' }}>
              <div className="section-tag">
                CROSS-BORDER REACH
              </div>
              <h3 style={{ fontSize: '1.9rem', margin: '1rem 0', lineHeight: 1.2, color: 'var(--text-main)' }}>
                Posicionamiento en Venezuela, México y Estados Unidos
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Con presencia firme en LATAM y una penetración del 10.3% en Estados Unidos (Comunidad Hispana con alto poder adquisitivo en dólares), Ginger Boy conecta con marcas nacionales e internacionales.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                <div>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-main)' }}>5+ Países Clave</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Top Audiencia</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--ginger-primary)' }}>100% Orgánico</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Fidelidad Garantizada</div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
