import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import { audioConfig } from '../config/audio';

interface AudioContextType {
  isMuted: boolean;
  isPlaying: boolean;
  hasStarted: boolean;
  startAudio: () => Promise<void>;
  toggleMute: () => void;
}

const AudioContext = createContext<AudioContextType>({
  isMuted: false,
  isPlaying: false,
  hasStarted: false,
  startAudio: async () => {},
  toggleMute: () => {},
});

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(audioConfig.storageKey);
      return saved === 'true';
    } catch {
      return false;
    }
  });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<number | null>(null);

  // Initialize Audio element
  useEffect(() => {
    const audio = new Audio();
    audio.src = audioConfig.bgmPath;
    audio.loop = true;
    audio.volume = isMuted ? 0 : audioConfig.defaultVolume;
    audioRef.current = audio;

    // Handle audio error gracefully (e.g. file not yet provided by user)
    audio.addEventListener('error', (e) => {
      console.info('BGM audio file not found or could not be played, proceeding silently.', e);
      setIsPlaying(false);
    });

    const handleVisibilityChange = () => {
      if (!audioRef.current || !hasStarted) return;
      if (document.hidden) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        if (!isMuted) {
          audioRef.current.play().catch(() => {});
          setIsPlaying(true);
        }
      }
    };

    const handlePageHide = () => {
      if (!audioRef.current || !hasStarted) return;
      audioRef.current.pause();
      setIsPlaying(false);
    };

    const handlePageShow = () => {
      if (!audioRef.current || !hasStarted) return;
      if (!isMuted && !document.hidden) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('pageshow', handlePageShow);
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const fadeIn = useCallback((targetVolume: number, durationSec: number) => {
    if (!audioRef.current) return;
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

    const audio = audioRef.current;
    audio.volume = 0;
    const steps = 30;
    const stepTime = (durationSec * 1000) / steps;
    const volumeStep = targetVolume / steps;

    fadeIntervalRef.current = window.setInterval(() => {
      if (!audio) {
        if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        return;
      }
      if (audio.volume + volumeStep >= targetVolume) {
        audio.volume = targetVolume;
        if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      } else {
        audio.volume = Math.min(targetVolume, audio.volume + volumeStep);
      }
    }, stepTime);
  }, []);

  const fadeOut = useCallback((durationSec: number, onComplete?: () => void) => {
    if (!audioRef.current) return;
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

    const audio = audioRef.current;
    const initialVolume = audio.volume;
    const steps = 20;
    const stepTime = (durationSec * 1000) / steps;
    const volumeStep = initialVolume / steps;

    fadeIntervalRef.current = window.setInterval(() => {
      if (!audio) {
        if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        return;
      }
      if (audio.volume - volumeStep <= 0.02) {
        audio.volume = 0;
        if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        if (onComplete) onComplete();
      } else {
        audio.volume = Math.max(0, audio.volume - volumeStep);
      }
    }, stepTime);
  }, []);

  const startAudio = useCallback(async () => {
    setHasStarted(true);
    if (!audioRef.current) return;

    if (!isMuted) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        fadeIn(audioConfig.defaultVolume, audioConfig.fadeInDuration);
      } catch (err) {
        console.info('Auto-play playback prevented or file missing:', err);
      }
    }
  }, [isMuted, fadeIn]);

  const toggleMute = useCallback(() => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    try {
      localStorage.setItem(audioConfig.storageKey, String(nextMuted));
    } catch {}

    if (!audioRef.current) return;

    if (nextMuted) {
      fadeOut(audioConfig.fadeOutDuration, () => {
        if (audioRef.current) audioRef.current.pause();
        setIsPlaying(false);
      });
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        fadeIn(audioConfig.defaultVolume, 0.6);
      }).catch(() => {});
    }
  }, [isMuted, fadeIn, fadeOut]);

  return (
    <AudioContext.Provider value={{ isMuted, isPlaying, hasStarted, startAudio, toggleMute }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
