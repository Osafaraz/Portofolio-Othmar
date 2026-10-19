import React from 'react';

export const PersonalWorksSection: React.FC = () => {
  return (
    <section id="works" className="relative w-full lg:w-[1440px] min-h-0 lg:h-[1782px] pt-14 sm:pt-20 lg:pt-[60px] pb-12 lg:pb-0 select-none overflow-visible px-4 sm:px-8 lg:px-0">
      {/* Mobile-Only Atmospheric Gradient Blobs */}
      <div className="lg:hidden absolute -left-[70px] top-[180px] w-[220px] h-[220px] rounded-full pointer-events-none opacity-35 blur-[28px] bg-[radial-gradient(ellipse_at_center,rgba(8,47,186,0.45)_0%,transparent_70%)] z-0" aria-hidden="true" />
      <div className="lg:hidden absolute -right-[70px] top-[480px] w-[240px] h-[240px] rounded-full pointer-events-none opacity-35 blur-[28px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.45)_0%,transparent_70%)] z-0" aria-hidden="true" />

      {/* 3D Laughing Emoji (Figma node 51:340: mentok ke kanan, sebagian masuk, authentic depth-of-field blur) */}
      <div 
        className="absolute -right-[70px] sm:-right-[90px] lg:-right-[150px] top-[130px] sm:top-[160px] lg:top-[185px] z-10 w-[220px] sm:w-[300px] lg:w-[420px] aspect-square pointer-events-none select-none"
        title="3D Laughing Emoji"
      >
        <img
          src="/assets/figma/dc1f25b1ca5028e9551c5a11fc58f1b2fe487ab5.png"
          alt="3D Laughing Emoji"
          className="w-full h-full object-contain blur-[8px] sm:blur-[10px] lg:blur-[14px] drop-shadow-[0_16px_32px_rgba(0,0,0,0.18)]"
          style={{ filter: 'blur(14px) drop-shadow(0 16px 32px rgba(0,0,0,0.18))' }}
        />
      </div>

      {/* Title: Pers●nal W●rks with authentic badges replacing 'o's (Figma node 50:286) */}
      <div className="relative mb-8 sm:mb-12 lg:mb-[65px] text-center select-none">
        <h2 className="font-['Montserrat'] font-black text-[clamp(28px,7.5vw,96px)] text-[#1e1e1e] tracking-tight inline-flex items-baseline justify-center leading-none flex-wrap">
          <span>Pers</span>
          
          {/* Sticker 1 replacing first 'o': Always With New Ideas badge (node 51:299) */}
          <span className="inline-block relative h-[0.70em] aspect-[70/64] translate-y-[0.08em] mx-[0.02em] sticker-pop cursor-pointer">
            <img
              src="/assets/stickers/sticker-always-complete.svg?v=ideas2"
              alt="Always With New Ideas sticker"
              className="w-full h-full object-contain drop-shadow-[0_4px_10px_rgba(245,158,11,0.35)]"
            />
          </span>

          <span>nal</span>
          <span className="inline-block w-[0.28em]" />
          <span>W</span>  

          {/* Sticker 2 replacing second 'o': Smile red sticker (node 51:294) */}
          <span className="inline-block relative h-[0.70em] aspect-[68/62] translate-y-[0.08em] -ml-[0.03em] mr-[0.02em] sticker-pop cursor-pointer">
            <img
              src="/assets/stickers/badge-smile-complete.svg?v=red2"
              alt="Smile red sticker"
              className="w-full h-full object-contain"
            />
          </span>

          <span>rks</span>
        </h2>
      </div>

      {/* Dashed Timeline Line: Left on mobile (20px/24px), centered on desktop (720px) */}
      <div 
        className="absolute left-[20px] sm:left-[24px] lg:left-[720px] -translate-x-1/2 top-[140px] sm:top-[160px] lg:top-[215px] bottom-12 lg:bottom-auto lg:h-[1140px] w-[6px] pointer-events-none z-0"
      >
        <svg className="w-full h-full" preserveAspectRatio="none">
          <line
            x1="3"
            y1="0"
            x2="3"
            y2="100%"
            stroke="#1e1e1e"
            strokeWidth="4"
            strokeDasharray="10 8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Timeline Categories Container */}
      <div className="relative w-full max-w-xl lg:max-w-none mx-auto flex flex-col gap-8 sm:gap-12 lg:gap-[75px] z-10">

        {/* ITEM 1: Street Photography */}
        <div className="relative w-full">
          {/* Category Header */}
          <div className="relative w-full h-[36px] sm:h-[44px] flex items-center mb-3 sm:mb-[16px]">
            {/* Bullet Dot: perfectly centered on top of the dashed line (z-10) */}
            <div className="absolute left-[20px] sm:left-[24px] lg:left-[720px] -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-[22px] sm:h-[22px] lg:w-[26px] lg:h-[26px] rounded-full bg-[#1e1e1e] shrink-0 z-10 ring-4 ring-[#f4f7f4]" />
            <span className="font-['Montserrat'] font-medium text-[clamp(18px,4.5vw,36px)] text-[#1e1e1e] pl-[38px] sm:pl-[44px] lg:pl-0 lg:absolute lg:right-[746px] lg:top-1/2 lg:-translate-y-1/2 whitespace-nowrap">
              Street Photography
            </span>
          </div>

          {/* 2 Photos */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 pl-[38px] sm:pl-[44px] lg:pl-[89px] lg:flex lg:items-center lg:gap-[24px]">
            <div className="w-full lg:w-[337px] aspect-[337/190] shrink-0 rounded-[10px] overflow-hidden shadow-[0px_8px_21.6px_rgba(0,0,0,0.22)] hover:scale-105 active:scale-95 transition-transform duration-300 bg-white cursor-pointer">
              <img
                src="/assets/figma/b8c39abc79587ace90f99d8f002006044d0a6ac7.png"
                alt="Street Photography 1"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-full lg:w-[337px] aspect-[337/190] shrink-0 rounded-[10px] overflow-hidden shadow-[0px_8px_21.6px_rgba(0,0,0,0.22)] hover:scale-105 active:scale-95 transition-transform duration-300 bg-white cursor-pointer">
              <img
                src="/assets/figma/223ec3219556656b41f9986b205734b704330a58.png"
                alt="Street Photography 2"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* ITEM 2: Wedding Photography */}
        <div className="relative w-full">
          {/* Category Header */}
          <div className="relative w-full h-[36px] sm:h-[44px] flex items-center mb-3 sm:mb-[16px]">
            {/* Bullet Dot: perfectly centered on top of the dashed line (z-10) */}
            <div className="absolute left-[20px] sm:left-[24px] lg:left-[720px] -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-[22px] sm:h-[22px] lg:w-[26px] lg:h-[26px] rounded-full bg-[#1e1e1e] shrink-0 z-10 ring-4 ring-[#f4f7f4]" />
            <span className="font-['Montserrat'] font-medium text-[clamp(18px,4.5vw,36px)] text-[#1e1e1e] pl-[38px] sm:pl-[44px] lg:pl-0 lg:absolute lg:left-[746px] lg:top-1/2 lg:-translate-y-1/2 whitespace-nowrap">
              Wedding Photography
            </span>
          </div>

          {/* 2 Photos */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 pl-[38px] sm:pl-[44px] lg:pl-[662px] lg:flex lg:items-center lg:gap-[24px]">
            <div className="w-full lg:w-[337px] aspect-[337/190] shrink-0 rounded-[10px] overflow-hidden shadow-[0px_8px_21.6px_rgba(0,0,0,0.22)] hover:scale-105 active:scale-95 transition-transform duration-300 bg-white cursor-pointer">
              <img
                src="/assets/figma/wedding_1_cropped.png"
                alt="Wedding Photography 1"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-full lg:w-[337px] aspect-[337/190] shrink-0 rounded-[10px] overflow-hidden shadow-[0px_8px_21.6px_rgba(0,0,0,0.22)] hover:scale-105 active:scale-95 transition-transform duration-300 bg-white cursor-pointer">
              <img
                src="/assets/figma/wedding_2_cropped.png"
                alt="Wedding Photography 2"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* ITEM 3: Sketching & Drawing */}
        <div className="relative w-full">
          {/* Category Header */}
          <div className="relative w-full h-[36px] sm:h-[44px] flex items-center mb-3 sm:mb-[16px]">
            {/* Bullet Dot: perfectly centered on top of the dashed line (z-10) */}
            <div className="absolute left-[20px] sm:left-[24px] lg:left-[720px] -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-[22px] sm:h-[22px] lg:w-[26px] lg:h-[26px] rounded-full bg-[#1e1e1e] shrink-0 z-10 ring-4 ring-[#f4f7f4]" />
            <span className="font-['Montserrat'] font-medium text-[clamp(18px,4.5vw,36px)] text-[#1e1e1e] pl-[38px] sm:pl-[44px] lg:pl-0 lg:absolute lg:right-[746px] lg:top-1/2 lg:-translate-y-1/2 whitespace-nowrap">
              Sketching & Drawing
            </span>
          </div>

          {/* 2 Sketches */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 pl-[38px] sm:pl-[44px] lg:pl-[89px] lg:flex lg:items-center lg:gap-[24px]">
            <div className="w-full lg:w-[337px] aspect-[337/190] shrink-0 rounded-[10px] overflow-hidden shadow-[0px_8px_21.6px_rgba(0,0,0,0.22)] hover:scale-105 active:scale-95 transition-transform duration-300 bg-white cursor-pointer">
              <img
                src="/assets/figma/sketch_1_cropped.png"
                alt="Sketch 1 - Girl with glasses"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-full lg:w-[337px] aspect-[337/190] shrink-0 rounded-[10px] overflow-hidden shadow-[0px_8px_21.6px_rgba(0,0,0,0.22)] hover:scale-105 active:scale-95 transition-transform duration-300 bg-white cursor-pointer">
              <img
                src="/assets/figma/sketch_2_cropped.png"
                alt="Sketch 2"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* ITEM 4: 3D Animation Project */}
        <div className="relative w-full">
          {/* Category Header */}
          <div className="relative w-full h-[36px] sm:h-[44px] flex items-center mb-3 sm:mb-[16px]">
            {/* Bullet Dot: perfectly centered on top of the dashed line (z-10) */}
            <div className="absolute left-[20px] sm:left-[24px] lg:left-[720px] -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-[22px] sm:h-[22px] lg:w-[26px] lg:h-[26px] rounded-full bg-[#1e1e1e] shrink-0 z-10 ring-4 ring-[#f4f7f4]" />
            <span className="font-['Montserrat'] font-medium text-[clamp(18px,4.5vw,36px)] text-[#1e1e1e] pl-[38px] sm:pl-[44px] lg:pl-0 lg:absolute lg:left-[746px] lg:top-1/2 lg:-translate-y-1/2 whitespace-nowrap">
              3D Animation Project
            </span>
          </div>

          {/* 2 3D Renders */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 pl-[38px] sm:pl-[44px] lg:pl-[662px] lg:flex lg:items-center lg:gap-[24px]">
            <div className="w-full lg:w-[337px] aspect-[337/190] shrink-0 rounded-[10px] overflow-hidden shadow-[0px_8px_21.6px_rgba(0,0,0,0.22)] hover:scale-105 active:scale-95 transition-transform duration-300 bg-white cursor-pointer">
              <img
                src="/assets/figma/3d_garden_cropped.png"
                alt="3D Animation - Isometric Playground"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-full lg:w-[337px] aspect-[337/190] shrink-0 rounded-[10px] overflow-hidden shadow-[0px_8px_21.6px_rgba(0,0,0,0.22)] hover:scale-105 active:scale-95 transition-transform duration-300 bg-white cursor-pointer">
              <img
                src="/assets/figma/3d_room_cropped.png"
                alt="3D Animation - Room Render"
                className="w-full h-full object-cover"
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
