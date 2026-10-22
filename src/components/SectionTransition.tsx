import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SectionTransitionProps {
  isActive: boolean;
}

interface SoftwareItem {
  id: string;
  name: string;
  src: string;
  angle: number;
}

const softwareList: SoftwareItem[] = [
  { id: 'figma', name: 'Figma', src: '/assets/icons/software-figma.svg', angle: -Math.PI * 0.7 },     // Top-Left
  { id: 'ai', name: 'Illustrator', src: '/assets/icons/software-illustrator.svg', angle: -Math.PI * 0.3 }, // Top-Right
  { id: 'ps', name: 'Photoshop', src: '/assets/icons/software-photoshop.svg', angle: Math.PI * 0.1 },     // Bottom-Right
  { id: 'blender', name: 'Blender', src: '/assets/icons/software-blender.svg', angle: Math.PI * 0.9 },     // Bottom-Left
  { id: 'capcut', name: 'CapCut', src: '/assets/icons/software-capcut.svg', angle: Math.PI * 0.5 },       // Bottom-Center
];

export const SectionTransition: React.FC<SectionTransitionProps> = ({ isActive }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const centerBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const startDistance = isMobile ? 200 : 340;
    const burstDistance = isMobile ? 450 : 700;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { force3D: true } });

      // Initial state of overlay & elements
      if (overlayRef.current) {
        gsap.set(overlayRef.current, { opacity: 0 });
      }

      softwareList.forEach((item, index) => {
        const el = itemsRef.current[index];
        if (!el) return;
        const initialX = Math.cos(item.angle) * startDistance;
        const initialY = Math.sin(item.angle) * startDistance;
        const initialRotation = (index % 2 === 0 ? 1 : -1) * 20;

        gsap.set(el, {
          x: initialX,
          y: initialY,
          scale: 0.4,
          opacity: 0,
          rotate: initialRotation,
          force3D: true,
        });
      });

      if (centerBadgeRef.current) {
        gsap.set(centerBadgeRef.current, { scale: 0, opacity: 0, force3D: true });
      }

      // 1. Fade in overlay and move logos to center ("bergerak ke tengah")
      if (overlayRef.current) {
        tl.to(overlayRef.current, {
          opacity: 1,
          duration: 0.32,
          ease: 'power2.out',
        }, 0);
      }

      tl.to(
        itemsRef.current,
        {
          x: (i) => Math.cos(softwareList[i].angle) * (isMobile ? 22 : 36),
          y: (i) => Math.sin(softwareList[i].angle) * (isMobile ? 22 : 36),
          scale: 1,
          opacity: 1,
          rotate: (i) => (i % 2 === 0 ? 8 : -8),
          duration: 0.52,
          stagger: 0.04,
          ease: 'power3.out',
        },
        0.06
      );

      if (centerBadgeRef.current) {
        tl.to(
          centerBadgeRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.38,
            ease: 'back.out(1.6)',
          },
          0.2
        );
      }

      // Brief gather pulse at center (~520ms mark, exact moment when page scrolls)
      tl.to(
        itemsRef.current,
        {
          scale: 1.12,
          duration: 0.18,
          yoyo: true,
          repeat: 1,
          ease: 'power1.inOut',
        },
        0.52
      );

      // 2. Move away / burst outward ("bergerak menjauh")
      tl.to(
        itemsRef.current,
        {
          x: (i) => Math.cos(softwareList[i].angle) * burstDistance,
          y: (i) => Math.sin(softwareList[i].angle) * burstDistance,
          scale: 1.45,
          opacity: 0,
          rotate: (i) => (i % 2 === 0 ? 40 : -40),
          duration: 0.55,
          stagger: 0.03,
          ease: 'power3.inOut',
        },
        0.68
      );

      if (centerBadgeRef.current) {
        tl.to(
          centerBadgeRef.current,
          {
            scale: 2,
            opacity: 0,
            duration: 0.45,
            ease: 'power2.in',
          },
          0.68
        );
      }

      // 3. Fade out overlay
      if (overlayRef.current) {
        tl.to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.42,
            ease: 'power2.out',
          },
          0.85
        );
      }
    }, overlayRef);

    return () => ctx.revert();
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-[#f4f7f4] select-none overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(30, 30, 30, 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(30, 30, 30, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: '54.33px 77.84px',
      }}
      aria-hidden="true"
    >
      {/* Ambient background glow blooms */}
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-blue-500/15 blur-[60px] md:blur-[100px] pointer-events-none -left-20 -top-20" />
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-amber-500/15 blur-[60px] md:blur-[100px] pointer-events-none -right-20 -bottom-20" />

      {/* Central Hub Container */}
      <div className="relative flex items-center justify-center w-full h-full pointer-events-none">
        {/* Subtle center glowing core */}
        <div
          ref={centerBadgeRef}
          className="absolute z-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(228,40,31,0.25)_0%,rgba(247,185,40,0.15)_50%,transparent_75%)] blur-md flex items-center justify-center"
        >
          <div className="w-10 h-10 rounded-full bg-white/75 backdrop-blur-md shadow-[0_4px_16px_rgba(228,40,31,0.2)] border border-white/80 flex items-center justify-center">
            <span className="font-['Montserrat'] font-black text-xs text-[#e4281f] leading-none">
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
            className="absolute z-10 w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 flex items-center justify-center drop-shadow-[0_8px_20px_rgba(0,0,0,0.14)] will-change-transform"
            title={item.name}
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(228,40,31,0.2)]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
