import React from 'react';
import { useSectionReveal } from '../hooks/useSectionReveal';

interface JtiExpoSectionProps {
  activeSection?: string;
}

export const JtiExpoSection: React.FC<JtiExpoSectionProps> = ({ activeSection = '' }) => {
  const containerRef = useSectionReveal<HTMLElement>({
    sectionId: 'jti-expo',
    activeSection,
    stagger: 0.1,
    yOffset: 40,
  });

  return (
    <section
      id="jti-expo"
      ref={containerRef}
      className="relative z-20 w-full lg:w-[1440px] min-h-0 lg:h-[960px] pt-20 sm:pt-28 lg:pt-[95px] pb-20 sm:pb-28 lg:pb-0 px-4 sm:px-8 lg:px-[88px] overflow-visible scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28"
    >
      {/* Mobile-Only Atmospheric Gradient Blob */}
      <div className="lg:hidden absolute -right-[80px] top-[100px] w-[240px] h-[240px] rounded-full pointer-events-none opacity-35 blur-[28px] bg-[radial-gradient(ellipse_at_center,rgba(8,47,186,0.5)_0%,transparent_70%)] z-0" aria-hidden="true" />

      {/* 1. Large Blurred 3D Heart-Eyes Emoji filling gap between JTI & 4C (Positioned BEHIND mockup at z-0, Figma Node 46:65) */}
      <div className="reveal-item gpu-blur absolute -left-[40px] sm:-left-[60px] lg:-left-[80px] top-[670px] sm:top-[700px] lg:top-[725px] z-0 w-[270px] sm:w-[325px] lg:w-[375px] aspect-square rotate-[31.61deg] pointer-events-none select-none">
        <img
          src="/assets/figma/f13d290a29579d7d0f26c057eb813be5e8b6b62d.png"
          alt="3D Heart-Eyes Emoji"
          className="w-full h-full object-contain blur-[14px] drop-shadow-[0_16px_32px_rgba(0,0,0,0.18)]"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-xl lg:max-w-none mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-10">
        
        {/* LEFT: Title, Instagram, Description */}
        <div className="reveal-item w-full lg:w-[536px] flex flex-col gap-4 sm:gap-6 z-20">
          <div>
            <h2 className="font-['Montserrat'] font-black text-[clamp(44px,9vw,96px)] text-[#1e1e1e] leading-[0.95] tracking-tight">
              JTI EXPO
            </h2>
            <p className="font-['Montserrat'] font-light text-[clamp(28px,5.5vw,56px)] text-[#1e1e1e] leading-[1.05] tracking-normal -mt-1 sm:-mt-2">
              III 2025
            </p>
          </div>

          {/* Instagram link */}
          <a
            href="https://www.instagram.com/jtievents_"
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
              @jtievents_
            </span>
          </a>

          {/* Description */}
          <p className="font-['Helvetica_Neue',Helvetica,sans-serif] font-light text-[clamp(14px,3.6vw,24px)] text-[#1e1e1e] leading-[1.6] lg:leading-[1.65] text-left select-text cursor-text w-full lg:w-[536px]">
            JTI EXPO III 2025 is a departmental showcase and competition event that highlights the projects and achievements of students across majors within the JTI faculty, featuring various competitive categories.{' '}
            <span className="font-bold">As a member of the Documentation Division,</span>{' '}
            I was responsible for documenting the event, creating visual assets and design materials, and serving as a technical operator throughout the event.
          </p>
        </div>

        {/* RIGHT: Standee Signboard (Prominently sized as in Figma) + Protruding 3D Logo + Smile Sticker + Top-Right Emoji */}
        <div className="reveal-item relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none lg:w-[410px] shrink-0 flex items-center justify-center z-20 lg:mr-16 my-4 lg:my-0">
          
          {/* Standee Board */}
          <div className="relative w-full aspect-[449/734] drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]">
            <img
              src="/assets/mockups/jti-signboard.png"
              alt="JTI EXPO Standee Sign Board"
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />

            {/* Red Smile Sticker on Left Frame of Board (Solid Red + concentric cream face as in Figma) */}
            <div className="absolute -left-[11%] top-[31%] z-30 w-[24%] aspect-square sticker-pop cursor-pointer rotate-[-16.32deg]">
              <img
                src="/assets/stickers/sticker-smile-complete.svg"
                alt="Smile Sticker"
                className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(228,40,31,0.28)]"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 3D JTI Expo Logo protruding at bottom-left across legs (Cropped tightly without transparent margin, 100% matching Figma) */}
            <div className="absolute -left-[15%] sm:-left-[16%] bottom-[7%] sm:bottom-[8%] z-30 w-[86%] sm:w-[88%] rotate-[4.81deg] hover:rotate-0 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
              <img
                src="/assets/images/jti-expo-3d-logo-cropped.png"
                alt="3D JTI EXPO Logo"
                className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.24)]"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Floating 3D Heart-Eyes Emoji at Top Right (Outside the frame to the right, fully visible, not cut off as in Figma) */}
            <div className="absolute -right-[70px] sm:-right-[80px] lg:-right-[90px] -top-[20px] sm:-top-[30px] z-30 w-[140px] sm:w-[160px] lg:w-[175px] aspect-square rotate-[-38.02deg] pointer-events-none select-none">
              <img
                src="/assets/figma/f13d290a29579d7d0f26c057eb813be5e8b6b62d.png"
                alt="3D Heart-Eyes Emoji"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
