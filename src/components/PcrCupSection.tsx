import React from 'react';
import { useSectionReveal } from '../hooks/useSectionReveal';

interface PcrCupSectionProps {
  activeSection?: string;
}

export const PcrCupSection: React.FC<PcrCupSectionProps> = ({ activeSection = '' }) => {
  const containerRef = useSectionReveal<HTMLElement>({
    sectionId: 'pcr-cup',
    activeSection,
    stagger: 0.1,
    yOffset: 40,
  });

  const matchPosters = [
    { src: '/assets/figma/5255b2593fe368934785928b8cd87abc89a46105.png', alt: 'Full Time Match 5', w: 234, h: 292 },
    { src: '/assets/figma/4de823950b42a34629bc52cae2671ff36e83a660.png', alt: 'Half Time Match 5', w: 234, h: 292 },
    { src: '/assets/figma/d00448eccef7cce5b26368a181fd05985b5eb190.png', alt: 'POTG Match 2', w: 233, h: 291 },
    { src: '/assets/figma/60c482697a6cad5133797eed2325a77e806e4aee.png', alt: 'Calling Crowd', w: 233, h: 291 },
    { src: '/assets/figma/494e1a602bfa79956d737a3a403e4ee3258356a0.png', alt: 'Final Match', w: 234, h: 292 },
  ];

  return (
    <section
      id="pcr-cup"
      ref={containerRef}
      className="relative w-full lg:w-[1440px] min-h-0 lg:h-[1350px] pt-24 sm:pt-32 lg:pt-[120px] pb-24 sm:pb-32 lg:pb-[100px] px-4 sm:px-8 lg:px-[88px] isolate overflow-x-clip scroll-mt-0"
    >
      {/* Mobile-Only Atmospheric Gradient Blob */}
      <div className="lg:hidden absolute -right-[90px] top-[40px] w-[240px] h-[240px] rounded-full pointer-events-none opacity-40 blur-[28px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.5)_0%,transparent_70%)] z-0" aria-hidden="true" />

      {/* Main Container */}
      <div className="relative w-full max-w-xl lg:max-w-none mx-auto">
        
        {/* Top Split: Asset Composition + Text & Info */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 mb-8">
          
          {/* TEXT & INFO (Mobile Order 1, Desktop Right) */}
          <div className="reveal-item order-1 lg:order-2 w-full lg:w-[536px] flex flex-col gap-4 sm:gap-6">
            <div>
              <h2 className="font-['Montserrat'] font-black text-[clamp(44px,9vw,96px)] text-[#1e1e1e] leading-[0.95] tracking-tight">
                PCR CUP
              </h2>
              <p className="font-['Montserrat'] font-light text-[clamp(28px,5.5vw,56px)] text-[#1e1e1e] leading-[1.05] tracking-normal -mt-1 sm:-mt-2">
                Basket 2025
              </p>
            </div>

            {/* Instagram link */}
            <a
              href="https://www.instagram.com/basketballpcr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#1e1e1e] hover:text-[#e4281f] transition-colors group w-fit min-h-[44px]"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0">
                <img
                  src="/assets/icons/icon-ig-square.svg"
                  alt="Instagram"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-['Helvetica_Neue',Helvetica,sans-serif] font-light text-[clamp(16px,4vw,24px)]">
                @basketballpcr
              </span>
            </a>

            {/* Description */}
            <p className="font-['Helvetica_Neue',Helvetica,sans-serif] font-light text-[clamp(14px,3.6vw,24px)] text-[#1e1e1e] leading-[1.6] lg:leading-[1.65] text-left select-text cursor-text w-full lg:w-[536px]">
              PCR Cup Basketball 2025 is an inter-departmental basketball competition held on campus, bringing together student associations to compete in an exciting tournament.{' '}
              <span className="font-bold">As the Documentation Division Coordinator,</span>{' '}
              I was responsible for managing the event's social media presence, designing visual assets and promotional materials, and capturing photos throughout the matches to document every moment of the competition.
            </p>
          </div>

          {/* ASSET CLUSTER: Phone, Flyer, T-Shirt, Photo Card, Emoji (Mobile Order 2, Desktop Left) */}
          <div className="reveal-item order-2 lg:order-1 relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-none lg:w-[650px] aspect-[650/600] lg:h-[600px] shrink-0 mx-auto select-none">
            
            {/* 1. 3D Heart-Eyes Emoji (Blurred foreground bokeh, shifted to the far left as in Figma) */}
            <div className="gpu-blur absolute -left-[14%] sm:-left-[16%] lg:-left-[18%] -top-[4%] sm:-top-[5%] z-30 w-[28%] sm:w-[30%] lg:w-[30.8%] aspect-square rotate-[20.95deg] pointer-events-none select-none">
              <img
                src="/assets/figma/f13d290a29579d7d0f26c057eb813be5e8b6b62d.png"
                alt="3D Heart-Eyes Emoji"
                className="w-full h-full object-contain blur-[3.3px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
              />
            </div>

            {/* 2. iPhone Mockup in Center-Left */}
            <div className="absolute left-[16.9%] top-[2.5%] z-10 w-[43.7%] h-[95.8%] bg-[#121212] rounded-[32px] sm:rounded-[48px] p-[6px] sm:p-[10px] shadow-[0_25px_50px_rgba(0,0,0,0.32)] border-[2px] sm:border-[3px] border-[#2a2a2a] overflow-hidden">
              <div className="relative w-full h-full rounded-[26px] sm:rounded-[40px] overflow-hidden bg-gradient-to-b from-[#1b623a] via-[#165330] to-[#0f3821] flex flex-col items-center justify-between p-2 sm:p-4">
                {/* Speaker Notch */}
                <div className="w-[45%] h-[12px] sm:h-[20px] bg-[#181818] rounded-full shrink-0 z-20 shadow-inner" />

                {/* Centered PCR Cup Logo */}
                <div className="my-auto w-[65%] aspect-square flex items-center justify-center">
                  <img
                    src="/assets/mockups/pcr-cup-logo.png"
                    alt="PCR Cup Logo"
                    className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Bottom decorative bar / home indicator */}
                <div className="w-[40%] h-[3px] sm:h-[4px] bg-white/40 rounded-full shrink-0 mt-auto" />
              </div>
            </div>

            {/* 3. Tournament Flyer pinned on Left of Phone */}
            <div className="absolute left-0 top-[36.6%] z-20 w-[32.6%] aspect-[212/289] rotate-[3.42deg] drop-shadow-[4px_10px_25px_rgba(0,0,0,0.3)] hover:rotate-0 transition-transform duration-300">
              {/* Red pushpin on top of flyer */}
              <div className="absolute -top-[8%] sm:-top-[9%] left-[38%] -translate-x-1/2 z-30 w-[19%] aspect-[73/88] -scale-x-100 drop-shadow-[5px_6px_10px_rgba(0,0,0,0.22)]">
                <img
                  src="/assets/images/red-pushpin-single.png"
                  alt="Red Pushpin"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <img
                src="/assets/figma/1a98e1a59854fae29d5f9e410d62d9e94866fb2c.png"
                alt="PCR Cup Basket Flyer"
                className="w-full h-full object-cover rounded-[6px]"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 4. Full Time Match Photo Card on Upper Right of Phone */}
            <div className="absolute left-[44.6%] top-[5%] z-20 w-[31%] aspect-[202/241] rotate-[-6.96deg] drop-shadow-[6px_10px_22px_rgba(0,0,0,0.26)] rounded-[6px] overflow-hidden hover:rotate-0 transition-transform duration-300">
              <img
                src="/assets/figma/e44ab13748b2c2dc47a6de834d99b5a24cf15ab2.png"
                alt="Full Time Match Photo Card"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 5. Green T-Shirt Mockup on Lower Right (Behind Phone) */}
            <div className="absolute left-[25%] top-[32%] z-0 w-[88%] aspect-[25/16] rotate-[9.11deg] hover:rotate-[6deg] transition-transform duration-300">
              <img
                src="/assets/figma/8b3575b938c967ad1e35efefa8061a8eb1a8183d.png"
                alt="PCR Cup T-Shirt Mockup"
                className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.28)]"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 6. Basketball wireframe icon sticker between Phone and T-Shirt */}
            <div className="absolute left-[47.6%] top-[78.3%] z-30 w-[14.6%] aspect-square rotate-[14.86deg] sticker-pop cursor-pointer">
              <img
                src="/assets/icons/pcr-ball-sticker.svg"
                alt="Basketball Icon Sticker"
                className="w-full h-full object-contain drop-shadow-md"
                loading="lazy"
                decoding="async"
              />
            </div>

          </div>

        </div>

        {/* Bottom Row of 5 Match Posters (Desktop exact 1264px, Mobile horizontal snap carousel with peek) */}
        <div className="w-full lg:w-[1264px] mx-auto mt-4 sm:mt-6 overflow-x-auto lg:overflow-x-visible pb-4 pt-1 snap-x snap-mandatory scrollbar-none">
          <div className="flex items-center lg:justify-between gap-4 lg:gap-[24px] w-max lg:w-full px-2 lg:px-0">
            {matchPosters.map((poster, idx) => (
              <div
                key={idx}
                className="reveal-item w-[185px] sm:w-[220px] lg:w-[234px] aspect-[234/292] shrink-0 snap-start rounded-[10px] overflow-hidden shadow-[0px_6px_16px_rgba(0,0,0,0.18)] hover:-translate-y-2 hover:shadow-[0px_14px_28px_rgba(0,0,0,0.26)] transition-all duration-300 cursor-pointer bg-white"
              >
                <img
                  src={poster.src}
                  alt={poster.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
