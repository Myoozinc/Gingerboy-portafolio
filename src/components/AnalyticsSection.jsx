import React, { useState } from 'react';
import { BarChart3, PieChart, Globe2, Sparkles, TrendingUp, Users, Smartphone, Eye, CheckCircle2, Heart, MousePointer, ExternalLink, Activity } from 'lucide-react';

export default function AnalyticsSection({ lang }) {
  const [activeTab, setActiveTab] = useState('overview');

  const content = {
    es: {
      tag: 'PANEL ANALÍTICO VERIFICADO (META INSIGHTS 90 DÍAS)',
      title: 'Métricas Reales de Audiencia, Alcance y Conversión',
      subtitle: 'Datos extraídos directamente de las estadísticas profesionales de Instagram de Ginger Boy.',
      tabs: [
        { id: 'overview', label: 'Resumen General & Audiencia' },
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
        { type: 'Reels', views: '321,000', pct: 100, color: '#FF5E36', desc: 'Formato de mayor viralidad y descubrimiento de marca' },
        { type: 'Historias', views: '204,000', pct: 63.5, color: '#FF9E2C', desc: 'Alta conversión e interacción directa mediante links & encuestas' },
        { type: 'Publicaciones (Feed)', views: '125,000', pct: 38.9, color: '#E5B25D', desc: 'Posicionamiento visual permanente en el perfil' },
      ],
      interactions: [
        { type: 'Reels Interacciones', val: '8.4K', color: '#FF5E36', desc: 'Me gustas, comentarios y compartidos en Reels' },
        { type: 'Historias Interacciones', val: '4.9K', color: '#FF9E2C', desc: 'Respuestas y clics en stickers de Historia' },
        { type: 'Publicaciones Interacciones', val: '3.3K', color: '#E5B25D', desc: 'Guardados y me gustas en carruseles del Feed' }
      ],
      conversionMetrics: [
        { title: 'Visitas al Perfil', val: '54,770', note: 'Alto interés en la marca personal', icon: Users, color: '#8B5CF6' },
        { title: 'Toques en Link de Bio', val: '1,169', note: 'Tráfico directo derivado a la web/tienda', icon: MousePointer, color: '#FF5E36' },
        { title: 'Alcance No Seguidores', val: '52.2%', note: 'Viralidad constante a nuevos usuarios', icon: TrendingUp, color: '#10B981' },
        { title: 'Seguidores Netos', val: '+1,371', note: 'Crecimiento orgánico continuo (+6.3%)', icon: Sparkles, color: '#FF9E2C' }
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
        { id: 'overview', label: 'Overview & Growth' },
        { id: 'genderAge', label: 'Gender & Age' },
        { id: 'engagement', label: 'Interactions & Traffic' },
        { id: 'geography', label: 'Top Geographic Markets' }
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
        { type: 'Reels', views: '321,000', pct: 100, color: '#FF5E36', desc: 'Highest virality & brand discovery format' },
        { type: 'Stories', views: '204,000', pct: 63.5, color: '#FF9E2C', desc: 'High direct conversion & interactive stickers' },
        { type: 'Feed Posts', views: '125,000', pct: 38.9, color: '#E5B25D', desc: 'Permanent visual positioning on feed grid' },
      ],
      interactions: [
        { type: 'Reels Engagement', val: '8.4K', color: '#FF5E36', desc: 'Likes, comments & shares on Reels' },
        { type: 'Stories Engagement', val: '4.9K', color: '#FF9E2C', desc: 'Replies & sticker taps' },
        { type: 'Posts Engagement', val: '3.3K', color: '#E5B25D', desc: 'Saves & likes on Feed carousels' }
      ],
      conversionMetrics: [
        { title: 'Profile Visits', val: '54,770', note: 'High brand interest', icon: Users, color: '#8B5CF6' },
        { title: 'Link in Bio Clicks', val: '1,169', note: 'Direct web traffic to brand links', icon: MousePointer, color: '#FF5E36' },
        { title: 'Non-Follower Reach', val: '52.2%', note: 'Viral reach to new prospective clients', icon: TrendingUp, color: '#10B981' },
        { title: 'Net New Followers', val: '+1,371', note: 'Continuous organic growth (+6.3%)', icon: Sparkles, color: '#FF9E2C' }
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
    <section id="metrics" style={{ padding: '6rem 0', background: 'rgba(11, 14, 20, 0.6)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BarChart3 size={14} style={{ display: 'inline', marginRight: '0.4rem' }} />
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
          background: 'linear-gradient(135deg, rgba(255,94,54,0.12) 0%, rgba(236,72,153,0.08) 50%, rgba(229,178,93,0.06) 100%)',
          borderColor: 'var(--border-ginger)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          textAlign: 'center'
        }}>
          <div style={{ padding: '0.8rem' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Seguidores Activos
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: '900', color: '#FFF', marginTop: '0.2rem' }}>
              23,250
            </div>
            <div style={{ fontSize: '0.78rem', color: '#10B981', fontWeight: '700' }}>
              ▲ +6.3% Crecimiento Reciente
            </div>
          </div>

          <div style={{ padding: '0.8rem', borderLeft: '1px solid var(--border-light)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Visualizaciones Totales
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: '900', color: 'var(--ginger-primary)', marginTop: '0.2rem' }}>
              658,848
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              52.2% No Seguidores (Viral)
            </div>
          </div>

          <div style={{ padding: '0.8rem', borderLeft: '1px solid var(--border-light)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Audiencia Femenina
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: '900', color: '#EC4899', marginTop: '0.2rem' }}>
              69.4%
            </div>
            <div style={{ fontSize: '0.78rem', color: '#EC4899', fontWeight: '600' }}>
              Moda, Lifestyle & Belleza
            </div>
          </div>

          <div style={{ padding: '0.8rem', borderLeft: '1px solid var(--border-light)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                background: activeTab === tab.id ? 'var(--ginger-gradient)' : 'rgba(255, 255, 255, 0.04)',
                color: '#FFF',
                fontWeight: activeTab === tab.id ? '700' : '500',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                boxShadow: activeTab === tab.id ? 'var(--ginger-glow)' : 'none'
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
                  <div key={idx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>
                        {m.title}
                      </span>
                      <div style={{ background: `${m.color}20`, padding: '0.4rem', borderRadius: '10px', color: m.color }}>
                        <IconComp size={20} />
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#FFF' }}>
                        {m.val}
                      </div>
                      <p style={{ fontSize: '0.8rem', color: m.color, marginTop: '0.3rem', fontWeight: '600' }}>
                        {m.note}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Reach & Impression Virality Summary */}
            <div className="glass-card" style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: 'var(--border-ginger)' }}>
              <div>
                <div className="section-tag" style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981', borderColor: 'rgba(16,185,129,0.3)' }}>
                  VIRAL DISCOVERY ALGORITHM
                </div>
                <h3 style={{ fontSize: '2rem', margin: '0.8rem 0', color: '#FFF' }}>
                  658K+ Visualizaciones Totales
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  El <strong style={{ color: '#FFF' }}>52.2%</strong> de las visualizaciones proviene de usuarios que aún no siguen la cuenta. Esto garantiza que cualquier marca que colabore con Ginger Boy no solo impacte a su comunidad fiel, sino que capture <strong style={{ color: 'var(--ginger-primary)' }}>nuevos clientes prospecto de forma orgánicamente masiva</strong>.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.2rem', borderRadius: '16px', border: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFF' }}>47.8%</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Seguidores Fieles</div>
                </div>
                <div style={{ borderLeft: '1px solid var(--border-light)' }} />
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--ginger-primary)' }}>52.2%</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Nuevos Espectadores</div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Gender & Age Demographics */}
        {activeTab === 'genderAge' && (
          <div className="grid-2" style={{ alignItems: 'start' }}>
            
            {/* Gender Distribution Card */}
            <div className="glass-card" style={{ borderColor: 'rgba(236, 72, 153, 0.4)' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Heart color="#EC4899" />
                <span>Distribución por Sexo / Género</span>
              </h3>

              {/* Visual Split Bar */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '1.1rem', fontWeight: '700' }}>
                  <span style={{ color: '#EC4899', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span>Mujeres</span> (69.4%)
                  </span>
                  <span style={{ color: '#8B5CF6', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span>Hombres</span> (30.6%)
                  </span>
                </div>

                <div style={{ width: '100%', height: '24px', borderRadius: '12px', overflow: 'hidden', display: 'flex', background: 'rgba(255,255,255,0.05)' }}>
                  <div style={{ width: '69.4%', height: '100%', background: 'linear-gradient(90deg, #F43F5E 0%, #EC4899 100%)' }} />
                  <div style={{ width: '30.6%', height: '100%', background: 'linear-gradient(90deg, #8B5CF6 0%, #6366F1 100%)' }} />
                </div>
              </div>

              <div style={{ background: 'rgba(236, 72, 153, 0.08)', padding: '1.2rem', borderRadius: '16px', border: '1px solid rgba(236,72,153,0.2)' }}>
                <h4 style={{ fontSize: '1.05rem', color: '#FFF', marginBottom: '0.4rem' }}>
                  ✨ Gran Atractivo para Marcas Femeninas y Lifestyle
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  Casi el 70% de la audiencia son mujeres jóvenes con decisiones de compra activas en Moda, Cosmética, Viajes, Gastronomía, Tecnología y Experiencias.
                </p>
              </div>
            </div>

            {/* Age Breakdown Card */}
            <div className="glass-card">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Users color="#FF5E36" />
                <span>Rangos de Edad</span>
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {content.ageData.map((item, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.95rem' }}>
                      <span style={{ fontWeight: item.highlight ? '700' : '400', color: item.highlight ? '#FFF' : 'var(--text-muted)' }}>
                        {item.range} {item.note && <span style={{ fontSize: '0.75rem', background: 'rgba(255,94,54,0.2)', color: 'var(--ginger-primary)', padding: '0.15rem 0.5rem', borderRadius: '4px', marginLeft: '0.5rem' }}>{item.note}</span>}
                      </span>
                      <span style={{ fontWeight: '700', color: item.highlight ? 'var(--ginger-primary)' : '#FFF' }}>
                        {item.pct}%
                      </span>
                    </div>

                    <div style={{
                      width: '100%',
                      height: item.highlight ? '12px' : '8px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      borderRadius: '10px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${item.pct}%`,
                        height: '100%',
                        background: item.highlight 
                          ? 'var(--ginger-gradient)' 
                          : 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
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
                position: 'relative'
              }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: `${item.color}20`,
                  border: `1px solid ${item.color}50`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem auto',
                  color: item.color
                }}>
                  <Activity size={26} />
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {item.type}
                </div>

                <div style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFF', margin: '0.3rem 0' }}>
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

        {/* Tab 4: Top Countries / Geography */}
        {activeTab === 'geography' && (
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="glass-card">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Globe2 color="#FF5E36" />
                <span>Principales Países de Audiencia</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {content.geoData.map((g, idx) => (
                  <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '14px', border: '1px solid var(--border-light)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ fontSize: '1.3rem' }}>{g.flag}</span>
                        {g.country}
                      </span>
                      <span style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--ginger-primary)' }}>
                        {g.pct}%
                      </span>
                    </div>

                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '10px', overflow: 'hidden' }}>
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

            <div className="glass-card" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, rgba(18, 22, 31, 0.95) 0%, rgba(30, 20, 15, 0.95) 100%)' }}>
              <div className="section-tag" style={{ background: 'rgba(229,178,93,0.15)', color: 'var(--gold-accent)', borderColor: 'rgba(229,178,93,0.3)' }}>
                CROSS-BORDER REACH
              </div>
              <h3 style={{ fontSize: '2rem', margin: '1rem 0', lineHeight: 1.2 }}>
                Posicionamiento en Venezuela, México y Estados Unidos
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Con presencia firme en LATAM y una penetración del 10.3% en Estados Unidos (Comunidad Hispana con alto poder adquisitivo en dólares), la audiencia de Ginger Boy permite potenciar campañas transnacionales.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                <div>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFF' }}>5+ Países Clave</div>
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
