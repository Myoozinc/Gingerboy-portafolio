import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

export const TRACK_CATALOG = {
  lobby: {
    id: 'lobby',
    title: 'Por Andromeda',
    album: 'Rustytape (Vol. 12)',
    artist: 'GGB Beats',
    audioSrc: '/audio/lobby_andromeda.m4a',
    genre: 'Space Hip-Hop / Ambient',
    bpm: 88,
    color: '#FF6D00'
  },
  gingerboy: {
    id: 'gingerboy',
    title: 'First Day',
    album: 'Lunar Week (Vol. 24)',
    artist: 'GGB Beats',
    audioSrc: '/audio/gingerboy_firstday.m4a',
    genre: 'Urban Chill Guitar & Trap',
    bpm: 70,
    color: '#38BDF8'
  },
  ggbbeats: {
    id: 'ggbbeats',
    title: 'The End',
    album: 'Urban X The Last (Vol. 23)',
    artist: 'GGB Beats',
    audioSrc: '/audio/ggbbeats_the_end.m4a',
    genre: 'Heavy Rap & Drill 808',
    bpm: 135,
    color: '#E05328'
  },
  dance: {
    id: 'dance',
    title: 'Mami Chula',
    album: 'Suda (Vol. 27)',
    artist: 'GGB Beats',
    audioSrc: '/audio/dance_mami_chula.m4a',
    genre: 'RKT & Reggaeton Club',
    bpm: 98,
    color: '#F59E0B'
  },
  chill: {
    id: 'chill',
    title: 'Sun Lighting',
    album: 'Lunar Week (Vol. 24)',
    artist: 'GGB Beats',
    audioSrc: '/audio/chill_sun_lighting.m4a',
    genre: 'Bolero Flamenco & Lo-Fi',
    bpm: 75,
    color: '#059669'
  },
  label: {
    id: 'label',
    title: 'Persian Night',
    album: 'Potions (Vol. 29)',
    artist: 'GGB Beats x MYOOZ InC',
    audioSrc: '/audio/myoozinc_persian_night.m4a',
    genre: 'Mystic Trap & Label Master',
    bpm: 79,
    color: '#8B3FCC'
  },
  services: {
    id: 'services',
    title: 'Cabrestero (Joropo Trap)',
    album: 'Potions II (Vol. 30)',
    artist: 'GGB Beats',
    audioSrc: '/audio/services_cabrestero.m4a',
    genre: 'Joropo Trap Llanero Venezolano',
    bpm: 58,
    color: '#D97706'
  }
};

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const [activeKey, setActiveKey] = useState('lobby');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolumeState] = useState(() => {
    const saved = localStorage.getItem('ggb_audio_volume');
    return saved !== null ? parseFloat(saved) : 0.65;
  });
  const [isPlayerVisible, setIsPlayerVisible] = useState(true);

  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const targetKeyRef = useRef('lobby');
  const isPlayingRef = useRef(true);

  // Initialize HTML5 Audio instance with autoplay by default
  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = isMuted ? 0 : volume;
    audio.src = TRACK_CATALOG.lobby.audioSrc;
    audioRef.current = audio;

    const startPlayback = () => {
      if (audio.paused && isPlayingRef.current) {
        audio.play().then(() => {
          setIsPlaying(true);
          isPlayingRef.current = true;
        }).catch(() => {
          // Autoplay policy prevented immediate unmuted playback; wait for first interaction
        });
      }
    };

    // Immediate attempt on mount
    startPlayback();

    // Global unlocker on first user gesture anywhere in document
    const unlockAutoplay = () => {
      if (isPlayingRef.current && audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
          isPlayingRef.current = true;
        }).catch(() => {});
      }
      window.removeEventListener('click', unlockAutoplay);
      window.removeEventListener('touchstart', unlockAutoplay);
      window.removeEventListener('keydown', unlockAutoplay);
    };

    window.addEventListener('click', unlockAutoplay, { passive: true });
    window.addEventListener('touchstart', unlockAutoplay, { passive: true });
    window.addEventListener('keydown', unlockAutoplay, { passive: true });

    const onEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };
    audio.addEventListener('ended', onEnded);

    return () => {
      window.removeEventListener('click', unlockAutoplay);
      window.removeEventListener('touchstart', unlockAutoplay);
      window.removeEventListener('keydown', unlockAutoplay);
      audio.removeEventListener('ended', onEnded);
      audio.pause();
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, []);

  // Update volume and mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const switchTrack = (key, autoStart = true) => {
    if (!TRACK_CATALOG[key]) return;
    targetKeyRef.current = key;
    setActiveKey(key);

    const audio = audioRef.current;
    if (!audio) return;

    const newTrack = TRACK_CATALOG[key];
    const shouldPlay = isPlayingRef.current || autoStart;

    if (audio.src.endsWith(newTrack.audioSrc)) {
      if (shouldPlay && audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
          isPlayingRef.current = true;
        }).catch(() => {});
      }
      return;
    }

    // Quick smooth crossfade
    if (isPlayingRef.current) {
      let currentVol = audio.volume;
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = setInterval(() => {
        currentVol = Math.max(0, currentVol - 0.15);
        audio.volume = isMuted ? 0 : currentVol;
        if (currentVol <= 0.05) {
          clearInterval(fadeIntervalRef.current);
          audio.src = newTrack.audioSrc;
          audio.currentTime = 0;
          audio.play().then(() => {
            audio.volume = isMuted ? 0 : volume;
            setIsPlaying(true);
            isPlayingRef.current = true;
          }).catch(() => {});
        }
      }, 30);
    } else {
      audio.src = newTrack.audioSrc;
      audio.currentTime = 0;
      if (shouldPlay) {
        audio.play().then(() => {
          audio.volume = isMuted ? 0 : volume;
          setIsPlaying(true);
          isPlayingRef.current = true;
        }).catch(() => {});
      }
    }
  };

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = isMuted ? 0 : volume;
    audio.play().then(() => {
      setIsPlaying(true);
      isPlayingRef.current = true;
    }).catch((err) => {
      console.warn('Audio playback requires user interaction:', err);
    });
  };

  const pause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
    isPlayingRef.current = false;
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const setVolume = (newVol) => {
    const clamped = Math.min(Math.max(newVol, 0), 1);
    setVolumeState(clamped);
    localStorage.setItem('ggb_audio_volume', clamped.toString());
    if (clamped > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // Sync universe or facet selection
  const syncUniverse = (universeId, facetId = 'ggbbeats', autoPlayIfSilent = false) => {
    let key = 'lobby';
    if (universeId === 'lobby') {
      key = 'lobby';
    } else if (universeId === 'gingerboy') {
      key = 'gingerboy';
    } else if (universeId === 'ggbbeats') {
      key = facetId === 'dance' ? 'dance' : facetId === 'chill' ? 'chill' : 'ggbbeats';
    } else if (universeId === 'label') {
      key = 'label';
    } else if (universeId === 'prod_services' || universeId === 'brand_services' || universeId === 'services') {
      key = 'services';
    } else if (universeId === 'all') {
      key = 'ggbbeats';
    }

    if (key !== targetKeyRef.current) {
      switchTrack(key, autoPlayIfSilent);
    }
  };

  const currentTrack = TRACK_CATALOG[activeKey] || TRACK_CATALOG.lobby;

  return (
    <AudioContext.Provider value={{
      currentTrack,
      activeKey,
      isPlaying,
      isMuted,
      volume,
      isPlayerVisible,
      setIsPlayerVisible,
      play,
      pause,
      togglePlay,
      setVolume,
      toggleMute,
      switchTrack,
      syncUniverse
    }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
