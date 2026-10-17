import React from 'react';

export const JtiExpoSection: React.FC = () => {
  return (
    <section id="jti-expo" className="relative w-full lg:w-[1440px] min-h-0 lg:h-[950px] pt-14 sm:pt-20 lg:pt-[70px] px-4 sm:px-8 lg:px-[88px] isolate overflow-x-clip">
      {/* Mobile-Only Atmospheric Gradient Blob */}
      <div className="lg:hidden absolute -right-[80px] top-[100px] w-[240px] h-[240px] rounded-full pointer-events-none opacity-35 blur-[28px] bg-[radial-gradient(ellipse_at_center,rgba(8,47,186,0.5)_0%,transparent_70%)] z-0" aria-hidden="true" />

      {/* 1. Floating 3D Heart-Eyes Emoji at Top Right (partially cut off at right edge) */}
      <div className="absolute -right-[clamp(35px,8vw,90px)] -top-[clamp(20px,4vw,40px)] z-30 w-[clamp(120px,28vw,240px)] aspect-square rotate-[-38.02deg] pointer-events-none select-none">
        <img
          src="/assets/figma/f13d290a29579d7d0f26c057eb813be5e8b6b62d.png"
          alt="3D Heart-Eyes Emoji"
          className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
        />
      </div>

      {/* 2. Floating 3D Heart-Eyes Emoji at Bottom Left (partially cut off at left edge) */}
      <div className="absolute -left-[clamp(40px,9vw,100px)] -bottom-[clamp(30px,6vw,70px)] z-30 w-[clamp(130px,30vw,270px)] aspect-square rotate-[15deg] pointer-events-none select-none">
        <img
          src="/assets/figma/f13d290a29579d7d0f26c057eb813be5e8b6b62d.png"
          alt="3D Heart-Eyes Emoji"
          className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
        />
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-xl lg:max-w-none mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        
        {/* LEFT: Title, Instagram, Description */}
        <div className="w-full lg:w-[536px] flex flex-col gap-4 sm:gap-6 z-20">
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

          {/* Description: Left-aligned on mobile, justified on desktop */}
          <p className="font-['Helvetica_Neue',Helvetica,sans-serif] font-light text-[clamp(14px,3.6vw,24px)] text-[#1e1e1e] leading-[1.6] lg:leading-[1.55] text-left lg:text-justify w-full lg:w-[536px]">
            JTI EXPO 3 2025 is a departmental showcase and competition event that highlights the projects and achievements of students across majors within the JTI faculty, featuring various competitive categories.{' '}
            <span className="font-bold">As a member of the Documentation Division</span>
            , I was responsible for documenting the event, creating visual assets and design materials, and serving as a technical operator throughout the event.
          </p>
        </div>

        {/* RIGHT: Standee Signboard + Protruding 3D Logo + Smile Sticker */}
        <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none lg:w-[500px] lg:h-[720px] shrink-0 flex items-center justify-center z-10 lg:pr-6 my-4 lg:my-0">
          
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
            <div className="absolute -left-[10%] top-[32%] z-30 w-[24%] aspect-square sticker-pop cursor-pointer rotate-[-16.32deg]">
              <img
                src="/assets/stickers/sticker-smile-complete.svg"
                alt="Smile Sticker"
                className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(228,40,31,0.28)]"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 3D JTI Expo Logo protruding at bottom-left across the legs */}
            <div className="absolute -left-[18%] bottom-[4%] z-30 w-[78%] rotate-[4.81deg] hover:rotate-0 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
              <img
                src="/assets/figma/80ce3dad18d3dbb8d62b44049d35d49b8e04d98a.png"
                alt="3D JTI EXPO Logo"
                className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
