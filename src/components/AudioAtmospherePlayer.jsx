import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Disc3, Radio, Sparkles, Flame, Headphones, Music2 } from 'lucide-react';

export default function AudioAtmospherePlayer({ activeFacet, lang }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [isExpanded, setIsExpanded] = useState(true);

  const audioCtxRef = useRef(null);
  const isPlayingRef = useRef(false);
  const intervalRef = useRef(null);
  const masterGainRef = useRef(null);

  const facetTracks = {
    ggbbeats: {
      name: 'Drill & Trap Switch Session',
      bpm: 135,
      genre: 'Trap / Drill / Heavy Rap',
      color: '#E05328',
      handle: '@ggbbeats',
      icon: Disc3,
      desc: 'Beat urbano pesado con 808s profundos y ritmos agresivos.'
    },
    dance: {
      name: 'Mami Chula • RKT & Reggaeton Club',
      bpm: 98,
      genre: 'Reggaeton / RKT / Dancehall',
      color: '#D97706',
      handle: '@ggbbeats.dance',
      icon: Flame,
      desc: 'Ritmo bailable tropical con dembow latino y texturas de club.'
    },
    chill: {
      name: 'Bolero Flamenco & Lo-Fi Lounge',
      bpm: 82,
      genre: 'Lo-Fi / Chillhop / Bolero',
      color: '#059669',
      handle: '@ggbbeats.chill',
      icon: Headphones,
      desc: 'Guitarras acústicas cálidas, piano Rhodes y frecuencias relajantes.'
    }
  };

  const currentInfo = facetTracks[activeFacet] || facetTracks.ggbbeats;

  // Initialize Web Audio Context
  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
      masterGainRef.current = audioCtxRef.current.createGain();
      masterGainRef.current.gain.value = volume;
      masterGainRef.current.connect(audioCtxRef.current.destination);
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  // Sound generator matching each facet's intensity
  const playStep = (step, facet) => {
    if (!audioCtxRef.current || !isPlayingRef.current) return;
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;
    const master = masterGainRef.current;

    // FACET 1: GGBBEATS (Trap / Drill - 135 BPM)
    if (facet === 'ggbbeats') {
      // 808 Kick on beats 0, 6, 10
      if (step === 0 || step === 6 || step === 10) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.exponentialRampToValueAtTime(38, now + 0.28);
        gain.gain.setValueAtTime(0.7, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(master);
        osc.start(now);
        osc.stop(now + 0.36);
      }
      // Sharp Snare on beats 4 and 12
      if (step === 4 || step === 12) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(240, now);
        osc.frequency.exponentialRampToValueAtTime(90, now + 0.12);
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
        osc.connect(gain);
        gain.connect(master);
        osc.start(now);
        osc.stop(now + 0.15);
      }
      // Hi-Hats on every even step
      if (step % 2 === 0) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'highpass';
        osc.frequency.setValueAtTime(6000 + (step * 200), now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(master);
        osc.start(now);
        osc.stop(now + 0.05);
      }
      // Melodic synth note on steps 0, 3, 8, 11
      if (step === 0 || step === 3 || step === 8 || step === 11) {
        const notes = [220, 261.6, 329.6, 293.6];
        const note = notes[Math.floor(step / 3) % notes.length];
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(note, now);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(gain);
        gain.connect(master);
        osc.start(now);
        osc.stop(now + 0.23);
      }
    }

    // FACET 2: DANCE (Reggaeton / RKT - 98 BPM dembow rhythm)
    else if (facet === 'dance') {
      // Classic Dembow: Kick on 0, 4, 8, 12. Snare on 3, 6, 11, 14
      if (step % 4 === 0) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.18);
        gain.gain.setValueAtTime(0.75, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(gain);
        gain.connect(master);
        osc.start(now);
        osc.stop(now + 0.23);
      }
      if (step === 3 || step === 6 || step === 11 || step === 14) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.12);
        gain.gain.setValueAtTime(0.45, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.connect(gain);
        gain.connect(master);
        osc.start(now);
        osc.stop(now + 0.16);
      }
      // Latin Synth Chord on steps 0, 6, 12
      if (step === 0 || step === 6 || step === 12) {
        const chords = [[349.2, 440], [392, 493.8], [440, 523.2]];
        const chord = chords[Math.floor(step / 5) % chords.length];
        chord.forEach(freq => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
          osc.connect(gain);
          gain.connect(master);
          osc.start(now);
          osc.stop(now + 0.3);
        });
      }
    }

    // FACET 3: CHILL (Lo-Fi / Bolero Flamenco - 82 BPM)
    else if (facet === 'chill') {
      // Soft gentle kick on 0, 8
      if (step === 0 || step === 8) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(80, now);
        osc.frequency.exponentialRampToValueAtTime(35, now + 0.2);
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(gain);
        gain.connect(master);
        osc.start(now);
        osc.stop(now + 0.23);
      }
      // Soft brush rim on 4, 12
      if (step === 4 || step === 12) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(180, now);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.connect(gain);
        gain.connect(master);
        osc.start(now);
        osc.stop(now + 0.11);
      }
      // Warm Rhodes / Nylon Guitar Chord progression on 0, 4, 8, 12
      if (step % 4 === 0) {
        const progression = [
          [261.6, 329.6, 392], // C maj
          [220, 261.6, 329.6], // A min
          [174.6, 220, 261.6], // F maj
          [196, 246.9, 293.6]  // G maj
        ];
        const triad = progression[(step / 4) % progression.length];
        triad.forEach((f, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now + (i * 0.03));
          gain.gain.setValueAtTime(0.06, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
          osc.connect(gain);
          gain.connect(master);
          osc.start(now);
          osc.stop(now + 0.75);
        });
      }
    }
  };

  // Loop manager
  useEffect(() => {
    if (isPlaying) {
      initAudio();
      isPlayingRef.current = true;
      let step = 0;
      const bpm = currentInfo.bpm;
      const stepDuration = (60 / bpm / 4) * 1000;

      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        playStep(step, activeFacet);
        step = (step + 1) % 16;
      }, stepDuration);
    } else {
      isPlayingRef.current = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, activeFacet]);

  // Volume & Mute handling
  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(isMuted ? 0 : volume, audioCtxRef.current.currentTime);
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!isPlaying) {
      initAudio();
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const IconComp = currentInfo.icon;

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      right: '1.5rem',
      zIndex: 9998,
      fontFamily: 'var(--font-main)'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '24px',
        border: `1.5px solid ${currentInfo.color}35`,
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12), 0 0 20px ' + currentInfo.color + '20',
        padding: isExpanded ? '1rem 1.4rem' : '0.6rem 0.8rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>

        {/* Vinyl / Beat Icon with Dynamic Glow */}
        <div 
          onClick={togglePlay}
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${currentInfo.color} 0%, #0F172A 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF',
            cursor: 'pointer',
            boxShadow: isPlaying ? `0 0 16px ${currentInfo.color}` : 'none',
            flexShrink: 0,
            position: 'relative',
            animation: isPlaying ? 'spinSlow 6s linear infinite' : 'none'
          }}
          title={isPlaying ? "Pausar Música de Fondo" : "Reproducir Música de GGB Beats"}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }} />}
        </div>

        {/* Expanded Info and Controls */}
        {isExpanded && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            
            {/* Track & Facet Details */}
            <div style={{ minWidth: '170px', maxWidth: '240px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                <span style={{
                  fontSize: '0.68rem',
                  fontWeight: '800',
                  color: currentInfo.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  background: `${currentInfo.color}15`,
                  padding: '0.15rem 0.5rem',
                  borderRadius: '10px'
                }}>
                  {currentInfo.handle}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: '600' }}>
                  {currentInfo.bpm} BPM
                </span>
              </div>

              <div style={{
                fontSize: '0.88rem',
                fontWeight: '800',
                color: 'var(--text-main)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {currentInfo.name}
              </div>

              {/* Animated Equalizer Bars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginTop: '0.35rem', height: '12px' }}>
                {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
                  <div
                    key={bar}
                    style={{
                      width: '3px',
                      background: isPlaying ? currentInfo.color : '#CBD5E1',
                      borderRadius: '2px',
                      height: isPlaying ? `${Math.sin(bar * 1.5) * 6 + 7}px` : '3px',
                      transition: 'height 0.15s ease'
                    }}
                  />
                ))}
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginLeft: '4px', fontWeight: '500' }}>
                  {isPlaying ? 'Sonando en vivo' : 'Audio en pausa'}
                </span>
              </div>
            </div>

            {/* Volume Mute Toggle */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              style={{
                background: 'none',
                border: 'none',
                color: isMuted ? '#EF4444' : 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '0.4rem',
                borderRadius: '50%',
                transition: 'var(--transition-smooth)'
              }}
              title={isMuted ? "Activar Sonido" : "Silenciar"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* Collapse button */}
            <button
              onClick={() => setIsExpanded(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-dim)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                padding: '0.2rem 0.4rem'
              }}
              title="Minimizar reproductor"
            >
              ✕
            </button>

          </div>
        )}

        {/* Minimized Pill */}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            style={{
              background: 'none',
              border: 'none',
              color: currentInfo.color,
              fontSize: '0.78rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <Music2 size={15} />
            <span>{currentInfo.handle}</span>
          </button>
        )}

      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
