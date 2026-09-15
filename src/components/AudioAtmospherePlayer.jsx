import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Disc3, ChevronDown, ChevronUp, Music2 } from 'lucide-react';
import { useAudio } from '../context/AudioContext.jsx';

export default function AudioAtmospherePlayer({ lang }) {
  const {
    currentTrack,
    isPlaying,
    isMuted,
    volume,
    play,
    pause,
    togglePlay,
    setVolume,
    toggleMute
  } = useAudio();

  const [isMinimized, setIsMinimized] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const t = {
    es: {
      masterBadge: 'MASTER OFICIAL',
      playing: 'REPRODUCIENDO BEAT',
      paused: 'EN PAUSA',
      mute: 'Silenciar',
      unmute: 'Activar sonido',
      volumeLabel: 'Volumen',
      minimize: 'Minimizar reproductor',
      expand: 'Expandir reproductor'
    },
    en: {
      masterBadge: 'OFFICIAL MASTER',
      playing: 'PLAYING BEAT',
      paused: 'PAUSED',
      mute: 'Mute audio',
      unmute: 'Unmute audio',
      volumeLabel: 'Volume',
      minimize: 'Minimize player',
      expand: 'Expand player'
    }
  }[lang || 'es'];

  return (
    <aside
      aria-label="GGB Beats Master Audio Player"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        maxWidth: isMinimized ? '260px' : '420px',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        fontFamily: 'var(--font-main, Outfit, sans-serif)'
      }}
    >
      <div
        style={{
          background: 'rgba(9, 9, 11, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${currentTrack.color ? `${currentTrack.color}40` : 'rgba(255, 255, 255, 0.12)'}`,
          borderRadius: isMinimized ? '30px' : '18px',
          boxShadow: isPlaying
            ? `0 14px 40px rgba(0, 0, 0, 0.65), 0 0 25px ${currentTrack.color}25`
            : '0 10px 30px rgba(0, 0, 0, 0.5)',
          padding: isMinimized ? '0.55rem 1rem' : '0.85rem 1.15rem',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: isMinimized ? 'row' : 'column',
          alignItems: isMinimized ? 'center' : 'stretch',
          gap: isMinimized ? '0.75rem' : '0.65rem'
        }}
      >
        {/* Minimized Compact View */}
        {isMinimized ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '0.6rem' }}>
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? t.paused : t.playing}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: currentTrack.color || 'var(--ginger-primary)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#FFFFFF',
                flexShrink: 0,
                boxShadow: `0 0 12px ${currentTrack.color}60`
              }}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} style={{ marginLeft: '1.5px' }} />}
            </button>

            <div
              onClick={() => setIsMinimized(false)}
              style={{
                flex: 1,
                minWidth: 0,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{
                fontSize: '0.78rem',
                fontWeight: '700',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: '#FFFFFF'
              }}>
                {currentTrack.title}
              </div>
              <div style={{
                fontSize: '0.65rem',
                color: '#94A3B8',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {currentTrack.album}
              </div>
            </div>

            {/* Micro EQ Visualizer */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '14px', flexShrink: 0 }}>
              {[8, 14, 10, 16, 9].map((h, i) => (
                <span
                  key={i}
                  style={{
                    width: '2px',
                    height: isPlaying ? `${h}px` : '3px',
                    borderRadius: '1px',
                    background: currentTrack.color || '#FF5722',
                    transition: 'height 0.2s ease',
                    animation: isPlaying ? `miniEq ${0.45 + (i % 3) * 0.15}s ease-in-out infinite alternate` : 'none',
                    animationDelay: `${i * 0.08}s`
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setIsMinimized(false)}
              title={t.expand}
              aria-label={t.expand}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94A3B8',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '2px',
                flexShrink: 0
              }}
            >
              <ChevronUp size={16} />
            </button>
          </div>
        ) : (
          /* Full Discreet Player */
          <>
            {/* Top Bar: Artist, Master Badge, Minimize Button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: isPlaying ? '#10B981' : '#64748B',
                    boxShadow: isPlaying ? '0 0 8px #10B981' : 'none'
                  }}
                />
                <span style={{
                  fontSize: '0.65rem',
                  fontWeight: '800',
                  letterSpacing: '0.12em',
                  color: currentTrack.color || '#FF6D00',
                  textTransform: 'uppercase'
                }}>
                  {t.masterBadge}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem' }}>•</span>
                <span style={{ fontSize: '0.65rem', color: '#94A3B8', fontWeight: '600' }}>
                  {currentTrack.bpm} BPM
                </span>
              </div>

              <button
                onClick={() => setIsMinimized(true)}
                title={t.minimize}
                aria-label={t.minimize}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: 'none',
                  borderRadius: '6px',
                  color: '#94A3B8',
                  width: '22px',
                  height: '22px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s ease'
                }}
              >
                <ChevronDown size={14} />
              </button>
            </div>

            {/* Middle: Vinyl / Album Artwork Icon + Track Information */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Rotating Disc / Visual Icon */}
              <div
                onClick={togglePlay}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: '#18181B',
                  border: `2px solid ${currentTrack.color || '#FF6D00'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  animation: isPlaying ? 'spinSlow 6s linear infinite' : 'none',
                  boxShadow: `0 0 16px ${currentTrack.color}40`
                }}
              >
                <Disc3 size={24} color={currentTrack.color || '#FF6D00'} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: '0.9rem',
                  fontWeight: '800',
                  color: '#FFFFFF',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {currentTrack.title}
                </div>
                <div style={{
                  fontSize: '0.72rem',
                  color: '#94A3B8',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginTop: '1px'
                }}>
                  <span>{currentTrack.album}</span>
                  <span>•</span>
                  <span style={{ color: currentTrack.color || '#E05328' }}>{currentTrack.genre}</span>
                </div>
              </div>
            </div>

            {/* Bottom Controls: Play/Pause, Volume Slider, Mute, EQ Wave */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.8rem',
              paddingTop: '0.35rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              {/* Main Play / Pause Button */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? t.paused : t.playing}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: currentTrack.color || 'var(--ginger-primary)',
                  border: 'none',
                  borderRadius: '24px',
                  padding: '0.38rem 0.85rem',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  boxShadow: `0 4px 14px ${currentTrack.color}50`,
                  transition: 'transform 0.15s ease'
                }}
              >
                {isPlaying ? <Pause size={13} /> : <Play size={13} style={{ marginLeft: '1px' }} />}
                <span>{isPlaying ? t.playing : t.paused}</span>
              </button>

              {/* Dynamic Real-Time Animated EQ Wave */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px',
                  height: '18px',
                  padding: '0 6px'
                }}
              >
                {[9, 16, 12, 20, 14, 8, 17, 11].map((h, i) => (
                  <span
                    key={i}
                    style={{
                      width: '2.5px',
                      height: isPlaying ? `${h}px` : '3px',
                      borderRadius: '2px',
                      background: currentTrack.color || '#FF5722',
                      transition: 'height 0.25s ease',
                      animation: isPlaying ? `miniEq ${0.4 + (i % 4) * 0.14}s ease-in-out infinite alternate` : 'none',
                      animationDelay: `${i * 0.06}s`
                    }}
                  />
                ))}
              </div>

              {/* Volume & Mute Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', position: 'relative' }}>
                <button
                  onClick={toggleMute}
                  title={isMuted ? t.unmute : t.mute}
                  aria-label={isMuted ? t.unmute : t.mute}
                  style={{
                    background: isMuted ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: isMuted ? '#EF4444' : '#E2E8F0',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {isMuted || volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>

                {/* Inline Minimalist Volume Slider */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.02"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  title={`${t.volumeLabel}: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
                  aria-label={t.volumeLabel}
                  style={{
                    width: '65px',
                    height: '4px',
                    accentColor: currentTrack.color || '#FF6D00',
                    cursor: 'pointer',
                    borderRadius: '2px'
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes miniEq {
          0% { transform: scaleY(0.25); opacity: 0.5; }
          100% { transform: scaleY(1.15); opacity: 1; }
        }
      `}</style>
    </aside>
  );
}
