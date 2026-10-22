import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useAudio } from '../context/AudioContext';

interface LogoIntroLoaderProps {
  onComplete: () => void;
}

interface SoftwareItem {
  id: string;
  name: string;
  src: string;
  angle: number; // Angle in radians for radial motion
}

const softwareList: SoftwareItem[] = [
  { id: 'figma', name: 'Figma', src: '/assets/icons/software-figma.svg', angle: -Math.PI * 0.7 },     // Top-Left
  { id: 'ai', name: 'Illustrator', src: '/assets/icons/software-illustrator.svg', angle: -Math.PI * 0.3 }, // Top-Right
  { id: 'ps', name: 'Photoshop', src: '/assets/icons/software-photoshop.svg', angle: Math.PI * 0.1 },     // Bottom-Right
  { id: 'blender', name: 'Blender', src: '/assets/icons/software-blender.svg', angle: Math.PI * 0.9 },     // Bottom-Left
  { id: 'capcut', name: 'CapCut', src: '/assets/icons/software-capcut.svg', angle: Math.PI * 0.5 },       // Bottom-Center
];

export const LogoIntroLoader: React.FC<LogoIntroLoaderProps> = ({ onComplete }) => {
  const { startAudio } = useAudio();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const centerBadgeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Attempt background audio playback
    startAudio().catch(() => {});

    // First user gesture global audio start fallback
    const handleFirstGesture = () => {
      startAudio().catch(() => {});
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
    window.addEventListener('pointerdown', handleFirstGesture, { once: true });
    window.addEventListener('keydown', handleFirstGesture, { once: true });

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      onComplete();
      return () => {
        window.removeEventListener('pointerdown', handleFirstGesture);
        window.removeEventListener('keydown', handleFirstGesture);
      };
    }

    const startDistance = isMobile ? 220 : 380;
    const burstDistance = isMobile ? 480 : 750;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { force3D: true },
        onComplete: () => {
          onComplete();
        },
      });
      timelineRef.current = tl;

      // Set initial positions: spread out radially away from center
      softwareList.forEach((item, index) => {
        const el = itemsRef.current[index];
        if (!el) return;
        const initialX = Math.cos(item.angle) * startDistance;
        const initialY = Math.sin(item.angle) * startDistance;
        const initialRotation = (index % 2 === 0 ? 1 : -1) * (20 + index * 8);

        gsap.set(el, {
          x: initialX,
          y: initialY,
          scale: 0.35,
          opacity: 0,
          rotate: initialRotation,
          force3D: true,
        });
      });

      if (centerBadgeRef.current) {
        gsap.set(centerBadgeRef.current, { scale: 0, opacity: 0, force3D: true });
      }
      if (textRef.current) {
        gsap.set(textRef.current, { opacity: 0, y: 15, force3D: true });
      }

      // 1. Move to Center ("bergerak ke tengah")
      tl.to(
        itemsRef.current,
        {
          x: (i) => Math.cos(softwareList[i].angle) * (isMobile ? 28 : 42),
          y: (i) => Math.sin(softwareList[i].angle) * (isMobile ? 28 : 42),
          scale: 1,
          opacity: 1,
          rotate: (i) => (i % 2 === 0 ? 6 : -6),
          duration: 0.9,
          stagger: 0.07,
          ease: 'power3.out',
        },
        '+=0.1'
      );

      // Center glowing badge & text reveal
      if (centerBadgeRef.current) {
        tl.to(
          centerBadgeRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(2)',
          },
          '-=0.6'
        );
      }

      if (textRef.current) {
        tl.to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
          },
          '-=0.4'
        );
      }

      // 2. Converge / Pulse moment in the center
      tl.to(itemsRef.current, {
        scale: 1.12,
        duration: 0.28,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: 1,
      });

      // 3. Move away / burst outward ("bergerak menjauh")
      tl.to(
        itemsRef.current,
        {
          x: (i) => Math.cos(softwareList[i].angle) * burstDistance,
          y: (i) => Math.sin(softwareList[i].angle) * burstDistance,
          scale: 1.4,
          opacity: 0,
          rotate: (i) => (i % 2 === 0 ? 45 : -45),
          duration: 0.65,
          stagger: 0.04,
          ease: 'power3.in',
        },
        '+=0.1'
      );

      if (centerBadgeRef.current) {
        tl.to(
          centerBadgeRef.current,
          {
            scale: 2.2,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in',
          },
          '-=0.6'
        );
      }

      if (textRef.current) {
        tl.to(
          textRef.current,
          {
            opacity: 0,
            y: -15,
            duration: 0.35,
            ease: 'power2.in',
          },
          '-=0.55'
        );
      }

      // 4. Fade out whole overlay
      if (containerRef.current) {
        tl.to(
          containerRef.current,
          {
            opacity: 0,
            duration: 0.45,
            ease: 'power2.out',
          },
          '-=0.2'
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, [onComplete, startAudio]);

  // Click to skip intro immediately
  const handleSkip = () => {
    if (timelineRef.current) {
      timelineRef.current.timeScale(3); // accelerate 3x on tap
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleSkip}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#f4f7f4] bg-grid-lines select-none overflow-hidden cursor-pointer"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(30, 30, 30, 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(30, 30, 30, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: '54.33px 77.84px',
      }}
      aria-label="Loading portfolio animation"
    >
      {/* Ambient background glow blooms */}
      <div className="absolute w-[320px] h-[320px] md:w-[550px] md:h-[550px] rounded-full bg-blue-500/15 blur-[60px] md:blur-[110px] pointer-events-none -left-20 -top-20" />
      <div className="absolute w-[320px] h-[320px] md:w-[550px] md:h-[550px] rounded-full bg-amber-500/15 blur-[60px] md:blur-[110px] pointer-events-none -right-20 -bottom-20" />

      {/* Central Hub Container */}
      <div className="relative flex items-center justify-center w-full h-full pointer-events-none">
        
        {/* Subtle center glowing core */}
        <div
          ref={centerBadgeRef}
          className="absolute z-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(228,40,31,0.25)_0%,rgba(247,185,40,0.15)_50%,transparent_75%)] blur-md flex items-center justify-center"
        >
          <div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgba(228,40,31,0.2)] border border-white/80 flex items-center justify-center">
            <span className="font-['Montserrat'] font-black text-sm text-[#e4281f] leading-none">
              O
            </span>
          </div>
        </div>

        {/* 5 Software Logos */}
        {softwareList.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="absolute z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center drop-shadow-[0_12px_28px_rgba(0,0,0,0.16)] will-change-transform"
            title={item.name}
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(228,40,31,0.22)]"
            />
          </div>
        ))}

        {/* Subtle Loading Text Below */}
        <div
          ref={textRef}
          className="absolute bottom-16 sm:bottom-20 z-20 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <span className="font-['Montserrat'] font-black text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#1e1e1e]/70">
            M. Othmar Safaraz
          </span>
          <span className="font-['Montserrat'] font-medium text-[10px] text-[#888] tracking-wider">
            Loading Creative Works...
          </span>
        </div>
      </div>
    </div>
  );
};
