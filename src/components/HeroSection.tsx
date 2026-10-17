import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroSectionProps {
  isEntered: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isEntered }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLParagraphElement>(null);
  const titleBlockRef = useRef<HTMLDivElement>(null);
  const sticker2026Ref = useRef<HTMLDivElement>(null);
  const stickerAlwaysRef = useRef<HTMLDivElement>(null);
  const stickerSmileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isEntered) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Welcome text fades up
      tl.fromTo(
        welcomeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
      );

      // 2. Giant Typography drops in
      tl.fromTo(
        titleBlockRef.current,
        { y: -50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' },
        '-=0.4'
      );

      // 3. Stamped stickers spring effect
      tl.fromTo(
        sticker2026Ref.current,
        { scale: 2.2, opacity: 0, rotate: 25 },
        { scale: 1, opacity: 1, rotate: 6.69, duration: 0.6, ease: 'elastic.out(1.2, 0.4)' },
        '-=0.3'
      );

      tl.fromTo(
        stickerAlwaysRef.current,
        { scale: 2.2, opacity: 0, rotate: -30 },
        { scale: 1, opacity: 1, rotate: -9.88, duration: 0.6, ease: 'elastic.out(1.2, 0.4)' },
        '-=0.4'
      );

      tl.fromTo(
        stickerSmileRef.current,
        { scale: 2.2, opacity: 0, rotate: 15 },
        { scale: 1, opacity: 1, rotate: -15, duration: 0.6, ease: 'elastic.out(1.2, 0.4)' },
        '-=0.4'
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isEntered]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full lg:w-[1440px] min-h-[80svh] lg:min-h-0 lg:h-[730px] flex flex-col items-center justify-center lg:justify-start pt-24 sm:pt-32 lg:pt-[242.5px] overflow-x-clip px-3 sm:px-4"
    >
      {/* Mobile-Only Atmospheric Gradient Blobs (C1, E: lightweight radial gradients, won't cover title) */}
      <div className="lg:hidden absolute -left-[140px] top-[120px] w-[280px] h-[280px] rounded-full pointer-events-none opacity-40 blur-[28px] bg-[radial-gradient(ellipse_at_center,rgba(8,47,186,0.65)_0%,rgba(162,89,255,0.3)_60%,transparent_75%)] z-0" aria-hidden="true" />
      <div className="lg:hidden absolute -right-[100px] -top-[30px] w-[240px] h-[240px] rounded-full pointer-events-none opacity-45 blur-[28px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.55)_0%,rgba(247,185,40,0.3)_60%,transparent_75%)] z-0" aria-hidden="true" />

      {/* Hero Section Container (851px wide baseline from Figma node 3:9, scales to ±90% on mobile) */}
      <div className="relative z-10 w-[92vw] sm:w-[86vw] max-w-[851px] mx-auto select-none @container">
        
        {/* Whole Hero Composition (Aspect ratio locked to 851 / 445 = 1.912) */}
        <div className="relative w-full aspect-[851/445] select-none">
          
          {/* Subtitle "Welcome To Othmar's" (Figma node 3:8, x: 0, y: 0, w: 851, h: 39) */}
          <p
            ref={welcomeRef}
            className="absolute left-0 top-0 w-full font-['Montserrat'] text-[clamp(13px,3.76cqi,32px)] text-center text-[#1e1e1e] select-none m-0 leading-normal"
          >
            <span className="font-normal">Welcome To </span>
            <span className="font-bold">Othmar’s</span>
          </p>

          {/* Giant Title Typography (Figma node 3:6, x: 29, y: 57, w: 793, h: 388) */}
          <div
            ref={titleBlockRef}
            className="absolute left-[3.41%] top-[12.81%] w-[93.18%] font-['Montserrat'] font-black text-[#1e1e1e] whitespace-nowrap drop-shadow-[0px_0px_15.35px_rgba(0,0,0,0.25)] select-none text-left"
          >
            {/* Line 1: PORT (text-250px, tracking-15px, leading-0.79) */}
            <p
              className="m-0 font-['Montserrat'] font-black"
              style={{
                fontSize: 'clamp(28px, 29.38cqi, 250px)',
                lineHeight: 0.79,
                letterSpacing: 'clamp(2px, 1.76cqi, 15px)',
              }}
            >
              PORT
            </p>

            {/* Line 2: FOLIO with transparent O slot (text-240px, leading-0.79) */}
            <p
              className="m-0 font-['Montserrat'] font-black"
              style={{
                fontSize: 'clamp(26px, 28.2cqi, 240px)',
                lineHeight: 0.79,
              }}
            >
              <span>F</span>
              <span className="text-transparent select-none pointer-events-none">O</span>
              <span>LIO</span>
            </p>
          </div>

          {/* Sticker 1: 2026 Oval Sticker (Figma node 4:106, between P and O of PORT) */}
          <div
            ref={sticker2026Ref}
            className="absolute left-[17.27%] top-[26.52%] w-[17.61%] aspect-[149.85/98.3] z-20 pointer-events-auto sticker-pop cursor-pointer"
            style={{ transform: 'rotate(6.69deg)' }}
            title="2026 Edition"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/assets/stickers/sticker-2026-base.svg"
                alt="2026 Base"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src="/assets/stickers/sticker-2026-dash.svg"
                alt="2026 Dash"
                className="absolute inset-0 w-full h-full object-contain scale-[0.88]"
              />
              <p className="relative z-10 font-['Montserrat'] italic text-[#e4281f] text-[clamp(9px,3.76cqi,32px)] whitespace-nowrap m-0 leading-none">
                <span className="font-medium">20</span>
                <span className="font-black">26</span>
              </p>
            </div>
          </div>

          {/* Sticker 2: "Always With New Ideas" Badge (Figma node 5:127, perfectly centered in transparent O slot) */}
          <div
            ref={stickerAlwaysRef}
            className="absolute left-[21.86%] top-[58.88%] w-[23.27%] aspect-[198/186] z-20 pointer-events-auto sticker-pop cursor-pointer"
            title="Always With New Ideas"
          >
            <div className="relative w-full h-full">
              <img
                src="/assets/stickers/sticker-always-complete.svg?v=ideas2"
                alt="Always With New Ideas"
                className="w-full h-full object-contain pointer-events-none select-none"
              />
            </div>
          </div>

          {/* Sticker 3: Red Smiley Sticker (Figma node 5:133, on upper-right shoulder of FOLIO's last O) */}
          <div
            ref={stickerSmileRef}
            className="absolute left-[87.90%] top-[50.83%] w-[15.11%] aspect-square z-30 pointer-events-auto sticker-pop cursor-pointer"
            title="Smiley Face"
          >
            <div className="relative w-full h-full">
              <img
                src="/assets/stickers/sticker-smile-complete.svg"
                alt="Smile Sticker"
                className="w-full h-full object-contain pointer-events-none select-none"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
