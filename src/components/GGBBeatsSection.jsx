import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Disc3, Volume2, Sparkles, Sliders, Radio, Music2, Headphones, Download, ExternalLink } from 'lucide-react';

export default function GGBBeatsSection({ lang }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioContextRef = useRef(null);
  const intervalRef = useRef(null);

  const tracks = [
    {
      id: 1,
      title: 'Velvet Sunset',
      genre: 'Chillhop / Urban Lo-Fi',
      bpm: '88 BPM',
      mood: 'Fashion, Luxury & Travel Vlogs',
      duration: '2:14',
      baseFreq: 220
    },
    {
      id: 2,
      title: 'Neon Skyline',
      genre: 'Commercial Trap & Electronic',
      bpm: '124 BPM',
      mood: 'Sportswear, Tech & High-Energy Reels',
      duration: '2:45',
      baseFreq: 293.66
    },
    {
      id: 3,
      title: 'Parisian Nights',
      genre: 'Deep Groove / House Beats',
      bpm: '120 BPM',
      mood: 'Streetwear Campaigns & Automotive',
      duration: '3:02',
      baseFreq: 261.63
    }
  ];

  // Web Audio Synth for interactive beat preview without external files
  const togglePlay = (index = activeTrack) => {
    if (isPlaying && activeTrack === index) {
      stopAudio();
      setIsPlaying(false);
    } else {
      stopAudio();
      setActiveTrack(index);
      startBeatSynth(tracks[index].baseFreq);
      setIsPlaying(true);
    }
  };

  const stopAudio = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioContextRef.current) {
      try {
        audioContextRef.current.close();
      } catch (e) {}
      audioContextRef.current = null;
    }
  };

  const startBeatSynth = (baseFreq) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      let step = 0;
      const chords = [baseFreq, baseFreq * 1.25, baseFreq * 1.5, baseFreq * 1.33];

      intervalRef.current = setInterval(() => {
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') return;
        
        const now = ctx.currentTime;
        
        // Melodic synth note
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(chords[step % chords.length], now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.12 * volume, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.4);

        // Soft sub-bass kick on 1 and 3
        if (step % 2 === 0) {
          const kick = ctx.createOscillator();
          const kickGain = ctx.createGain();
          kick.frequency.setValueAtTime(110, now);
          kick.frequency.exponentialRampToValueAtTime(40, now + 0.15);
          kickGain.gain.setValueAtTime(0.2 * volume, now);
          kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
          kick.connect(kickGain);
          kickGain.connect(ctx.destination);
          kick.start(now);
          kick.stop(now + 0.25);
        }

        step++;
      }, 350);
    } catch (e) {
      console.log('Audio Context error', e);
    }
  };

  useEffect(() => {
    return () => stopAudio();
  }, []);

  const content = {
    es: {
      tag: 'GGB BEATS • PRODUCCIÓN MUSICAL & SOUND DESIGN',
      title: 'Identidad Sonora & Producción de Beats para Marcas',
      subtitle: 'Ginger Boy une creación de contenido visual con producción musical exclusiva (GGB Beats). Música original con derechos listos para sincronización en campañas.',
      listenSample: 'Escuchar Muestra Sonora Interactiva',
      nowPlaying: 'Reproduciendo Beat Original',
      features: [
        { title: 'Audio Branding Exclusivo', desc: 'Composición de bandas sonoras y ritmos a medida para comerciales y videos publicitarios.' },
        { title: '100% Libre de Copyright / Reclamaciones', desc: 'Licenciamiento directo sin bloqueos en Meta, YouTube o TikTok.' },
        { title: 'Sincronización con Reels Virales', desc: 'Potencia el alcance de tu producto con beats originales creados para retención de audiencia.' }
      ]
    },
    en: {
      tag: 'GGB BEATS • MUSIC PRODUCTION & SOUND DESIGN',
      title: 'Sonic Identity & Commercial Beat Licensing',
      subtitle: 'Ginger Boy merges high-end visual storytelling with original music production (GGB Beats). Custom music with full sync licensing for brand campaigns.',
      listenSample: 'Interactive Beat Preview',
      nowPlaying: 'Now Playing Original Beat',
      features: [
        { title: 'Custom Audio Branding', desc: 'Tailored sonic branding and soundtracks for commercials and branded video assets.' },
        { title: '100% Royalty-Free / Whitelisted', desc: 'Direct sync licensing with zero copyright strikes across Meta, YouTube, and TikTok.' },
        { title: 'Viral Reel Audio Sync', desc: 'Elevate product recall with bespoke beats engineered for maximum audio retention.' }
      ]
    }
  }[lang];

  return (
    <section id="ggb-beats" style={{ padding: '6rem 0', background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ background: 'rgba(217, 119, 6, 0.1)', color: '#D97706', borderColor: 'rgba(217, 119, 6, 0.25)' }}>
            <Disc3 size={14} className={isPlaying ? 'spin-animation' : ''} />
            {content.tag}
          </div>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>

        {/* Dynamic Studio Showcase Grid */}
        <div className="grid-2" style={{ alignItems: 'center', gap: '3rem', marginBottom: '3.5rem' }}>
          
          {/* Left: Studio Photography Card */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{
              padding: '0.8rem',
              borderRadius: '24px',
              overflow: 'hidden',
              background: '#FFFFFF',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ position: 'relative', height: '420px', borderRadius: '18px', overflow: 'hidden' }}>
                <img 
                  src="/images/ggb_studio.jpg" 
                  alt="Ginger Boy GGB Beats Studio Session"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 60%)'
                }} />

                {/* Overlaid Studio Info */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.2rem',
                  left: '1.2rem',
                  right: '1.2rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end'
                }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#F59E0B', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      IN THE STUDIO
                    </div>
                    <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFF' }}>
                      GGB Beats Production Suite
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)' }}>
                      Analog Synths • MPC • Sound Design
                    </div>
                  </div>

                  <div style={{
                    background: 'rgba(217, 119, 6, 0.25)',
                    border: '1px solid rgba(245, 158, 11, 0.5)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    color: '#FFF',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <Headphones size={13} />
                    <span>AUDIO SYNC READY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Vinyl Tag */}
            <div style={{
              position: 'absolute',
              top: '-1.2rem',
              left: '-1.2rem',
              background: '#FFFFFF',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '0.6rem 1rem',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <Disc3 size={20} color="#D97706" className={isPlaying ? 'spin-animation' : ''} />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--text-main)' }}>GGB Beats</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Signature Sound</div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Audio Player Widget */}
          <div className="glass-card" style={{ background: '#FFFFFF', padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Music2 color="var(--ginger-primary)" size={22} />
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>
                  {content.listenSample}
                </h3>
              </div>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                background: isPlaying ? 'rgba(16, 185, 129, 0.12)' : '#F1F5F9',
                color: isPlaying ? '#10B981' : 'var(--text-muted)',
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: isPlaying ? '#10B981' : '#94A3B8' }} />
                {isPlaying ? 'ON AIR' : 'PREVIEW'}
              </span>
            </div>

            {/* Animated Equalizer Waveform */}
            <div style={{
              background: '#0F172A',
              borderRadius: '16px',
              padding: '1.5rem',
              marginBottom: '1.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              color: '#FFF'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#F59E0B', fontWeight: '700', textTransform: 'uppercase' }}>
                    {tracks[activeTrack].genre}
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '800' }}>
                    {tracks[activeTrack].title}
                  </div>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94A3B8', fontWeight: '600' }}>
                  {tracks[activeTrack].bpm}
                </div>
              </div>

              {/* Waveform Bars */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '48px',
                gap: '4px',
                padding: '0 0.5rem'
              }}>
                {[30, 60, 40, 80, 95, 50, 70, 85, 45, 90, 65, 75, 55, 80, 40, 60, 90, 50, 70, 85, 40, 65, 80, 55].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: isPlaying ? `${Math.max(15, (h * (0.5 + Math.random() * 0.7)))}%` : '20%',
                      background: isPlaying ? 'linear-gradient(180deg, #F59E0B 0%, #E05328 100%)' : '#334155',
                      borderRadius: '4px',
                      transition: 'height 0.15s ease'
                    }}
                  />
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', color: '#94A3B8' }}>
                <span>{tracks[activeTrack].mood}</span>
                <span style={{ color: '#F59E0B', fontWeight: '700' }}>Exclusive Sync</span>
              </div>
            </div>

            {/* Track Selector List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.8rem' }}>
              {tracks.map((t, idx) => (
                <div
                  key={t.id}
                  onClick={() => togglePlay(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    background: activeTrack === idx ? 'var(--ginger-light)' : '#F8FAFC',
                    border: activeTrack === idx ? '1px solid var(--ginger-primary)' : '1px solid var(--border-light)',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: activeTrack === idx && isPlaying ? 'var(--ginger-primary)' : '#E2E8F0',
                      color: activeTrack === idx && isPlaying ? '#FFF' : 'var(--text-main)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {activeTrack === idx && isPlaying ? <Pause size={14} /> : <Play size={14} style={{ marginLeft: '2px' }} />}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--text-main)' }}>{t.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.genre} • {t.bpm}</div>
                    </div>
                  </div>

                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '600' }}>{t.duration}</span>
                </div>
              ))}
            </div>

            {/* Direct Sync Licensing Button */}
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Solicitar Beat Exclusivo para mi Marca</span>
            </button>
          </div>

        </div>

        {/* 3 Pillars of GGB Audio Collaboration */}
        <div className="grid-3">
          {content.features.map((f, i) => (
            <div key={i} className="glass-card" style={{ padding: '1.8rem', background: '#FFFFFF' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(217, 119, 6, 0.1)',
                color: '#D97706',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Sparkles size={20} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                {f.title}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-animation {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
