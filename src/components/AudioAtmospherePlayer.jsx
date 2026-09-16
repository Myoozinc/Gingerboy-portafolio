import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Disc3, X, Music2 } from 'lucide-react';
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

  // Hidden / collapsed by default as an infinitesimal discreet corner button
  const [isExpanded, setIsExpanded] = useState(false);
  const playerRef = useRef(null);

  // Close when clicking outside the expanded card
  useEffect(() => {
    if (!isExpanded) return;
    const handleClickOutside = (e) => {
      if (playerRef.current && !playerRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isExpanded]);

  const t = {
    es: {
      masterBadge: 'MASTER OFICIAL',
      playing: 'REPRODUCIENDO BEAT',
      paused: 'EN PAUSA',
      mute: 'Silenciar',
      unmute: 'Activar sonido',
      volumeLabel: 'Volumen',
      expandTooltip: 'Audio Master GGB Beats • Clic para abrir controles',
      close: 'Ocultar controles'
    },
    en: {
      masterBadge: 'OFFICIAL MASTER',
      playing: 'PLAYING BEAT',
      paused: 'PAUSED',
      mute: 'Mute audio',
      unmute: 'Unmute audio',
      volumeLabel: 'Volume',
      expandTooltip: 'GGB Beats Master Audio • Click to open controls',
      close: 'Hide controls'
    }
  }[lang || 'es'];

  return (
    <aside
      ref={playerRef}
      aria-label="GGB Beats Master Audio Player"
      style={{
        position: 'fixed',
        bottom: '18px',
        right: '18px',
        zIndex: 9999,
        fontFamily: 'var(--font-main, Outfit, sans-serif)'
      }}
    >
      {/* ─── INFIMA & TRANSPARENT CORNER BUTTON (DEFAULT STATE) ─── */}
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          title={t.expandTooltip}
          aria-label={t.expandTooltip}
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
            opacity: 0.42,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            outline: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.14)';
            e.currentTarget.style.borderColor = currentTrack.color || 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = `0 6px 20px rgba(0, 0, 0, 0.4), 0 0 14px ${currentTrack.color || '#FF6D00'}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.42';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.25)';
          }}
        >
          {isPlaying && !isMuted ? (
            /* 3 Tiny animated EQ bars */
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '12px' }}>
              <span style={{
                width: '2px',
                height: '7px',
                borderRadius: '1px',
                background: currentTrack.color || '#FF5722',
                animation: 'ghostEq 0.6s ease-in-out infinite alternate'
              }} />
              <span style={{
                width: '2px',
                height: '12px',
                borderRadius: '1px',
                background: currentTrack.color || '#FFB300',
                animation: 'ghostEq 0.45s ease-in-out infinite alternate',
                animationDelay: '0.15s'
              }} />
              <span style={{
                width: '2px',
                height: '9px',
                borderRadius: '1px',
                background: currentTrack.color || '#FF5722',
                animation: 'ghostEq 0.55s ease-in-out infinite alternate',
                animationDelay: '0.08s'
              }} />
            </div>
          ) : isMuted ? (
            <VolumeX size={13} color="#EF4444" />
          ) : (
            <Play size={11} color="#FFFFFF" style={{ marginLeft: '1px' }} />
          )}
        </button>
      ) : (
        /* ─── EXPANDED CONTROLS CARD (WHEN CLICKED) ─── */
        <div
          style={{
            width: '320px',
            maxWidth: 'calc(100vw - 36px)',
            background: 'rgba(9, 9, 12, 0.94)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: `1px solid ${currentTrack.color ? `${currentTrack.color}50` : 'rgba(255, 255, 255, 0.16)'}`,
            borderRadius: '20px',
            boxShadow: isPlaying
              ? `0 18px 45px rgba(0, 0, 0, 0.75), 0 0 30px ${currentTrack.color}30`
              : '0 14px 40px rgba(0, 0, 0, 0.6)',
            padding: '0.9rem 1.15rem',
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            animation: 'expandFadeUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) both'
          }}
        >
          {/* Header Bar: Badge, BPM, Close Button */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
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
              onClick={() => setIsExpanded(false)}
              title={t.close}
              aria-label={t.close}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                borderRadius: '50%',
                color: '#CBD5E1',
                width: '24px',
                height: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
            >
              <X size={13} />
            </button>
          </div>

          {/* Track Info & Artwork */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              onClick={togglePlay}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#18181B',
                border: `2px solid ${currentTrack.color || '#FF6D00'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                position: 'relative',
                animation: isPlaying ? 'spinSlow 6s linear infinite' : 'none',
                boxShadow: `0 0 16px ${currentTrack.color}40`
              }}
            >
              <Disc3 size={22} color={currentTrack.color || '#FF6D00'} />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: '0.88rem',
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
                fontSize: '0.7rem',
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

          {/* Controls: Play/Pause, EQ Wave, Volume & Mute */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.6rem',
            paddingTop: '0.4rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {/* Play / Pause Toggle Button */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? t.paused : t.playing}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                background: currentTrack.color || 'var(--ginger-primary)',
                border: 'none',
                borderRadius: '24px',
                padding: '0.35rem 0.8rem',
                color: '#FFFFFF',
                fontSize: '0.7rem',
                fontWeight: '800',
                cursor: 'pointer',
                boxShadow: `0 4px 12px ${currentTrack.color}50`,
                transition: 'transform 0.15s ease'
              }}
            >
              {isPlaying ? <Pause size={12} /> : <Play size={12} style={{ marginLeft: '1px' }} />}
              <span>{isPlaying ? 'PAUSA' : 'PLAY'}</span>
            </button>

            {/* EQ Animation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2.5px', height: '16px' }}>
              {[8, 15, 11, 18, 13, 7, 16, 10].map((h, i) => (
                <span
                  key={i}
                  style={{
                    width: '2px',
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

            {/* Mute & Slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <button
                onClick={toggleMute}
                title={isMuted ? t.unmute : t.mute}
                aria-label={isMuted ? t.unmute : t.mute}
                style={{
                  background: isMuted ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '26px',
                  height: '26px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: isMuted ? '#EF4444' : '#E2E8F0',
                  transition: 'all 0.2s ease'
                }}
              >
                {isMuted || volume === 0 ? <VolumeX size={13} /> : <Volume2 size={13} />}
              </button>

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
                  width: '55px',
                  height: '4px',
                  accentColor: currentTrack.color || '#FF6D00',
                  cursor: 'pointer',
                  borderRadius: '2px'
                }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes ghostEq {
          0% { transform: scaleY(0.3); opacity: 0.4; }
          100% { transform: scaleY(1.1); opacity: 1; }
        }
        @keyframes miniEq {
          0% { transform: scaleY(0.25); opacity: 0.5; }
          100% { transform: scaleY(1.15); opacity: 1; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes expandFadeUp {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </aside>
  );
}
