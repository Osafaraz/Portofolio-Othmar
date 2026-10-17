import React from 'react';

export const PersonalWorksSection: React.FC = () => {
  return (
    <section id="works" className="relative w-full lg:w-[1440px] min-h-0 lg:h-[1782px] pt-14 sm:pt-20 lg:pt-[60px] pb-12 lg:pb-0 select-none overflow-x-clip px-4 sm:px-8 lg:px-0">
      {/* Mobile-Only Atmospheric Gradient Blobs */}
      <div className="lg:hidden absolute -left-[70px] top-[180px] w-[220px] h-[220px] rounded-full pointer-events-none opacity-35 blur-[28px] bg-[radial-gradient(ellipse_at_center,rgba(8,47,186,0.45)_0%,transparent_70%)] z-0" aria-hidden="true" />
      <div className="lg:hidden absolute -right-[70px] top-[480px] w-[240px] h-[240px] rounded-full pointer-events-none opacity-35 blur-[28px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.45)_0%,transparent_70%)] z-0" aria-hidden="true" />

      {/* 3D Laughing Emoji (node 51:340, partially cut off at right edge) */}
      <div 
        className="absolute -right-[clamp(20px,5vw,50px)] lg:left-[1158px] lg:right-auto top-[10px] lg:top-[20px] z-20 w-[clamp(110px,26vw,320px)] aspect-square pointer-events-none select-none"
        title="3D Laughing Emoji"
      >
        <img
          src="/assets/figma/dc1f25b1ca5028e9551c5a11fc58f1b2fe487ab5.png"
          alt="3D Laughing Emoji"
          className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
        />
      </div>

      {/* Title: Pers●nal W●rks with authentic badges replacing 'o's (Figma node 50:286) */}
      <div className="relative mb-8 sm:mb-12 lg:mb-[65px] text-center select-none">
        <h2 className="font-['Montserrat'] font-black text-[clamp(28px,7.5vw,96px)] text-[#1e1e1e] tracking-tight inline-flex items-center justify-center leading-none flex-wrap">
          <span>Pers</span>
          
          {/* Sticker 1 replacing first 'o': Always With New Ideas badge (node 51:299) */}
          <span className="inline-flex items-center justify-center mx-1 sm:mx-2 w-[clamp(24px,6.2vw,70px)] aspect-[70/64] relative sticker-pop cursor-pointer align-middle">
            <img
              src="/assets/stickers/sticker-always-complete.svg?v=ideas2"
              alt="Always With New Ideas sticker"
              className="w-full h-full object-contain drop-shadow-[0_4px_10px_rgba(245,158,11,0.35)]"
            />
          </span>

          <span>nal</span>
          <span className="w-2 sm:w-5" />
          <span>W</span>

          {/* Sticker 2 replacing second 'o': Smile red sticker (node 51:294, Solid Red + concentric cream face as in Figma) */}
          <span className="inline-flex items-center justify-center mx-1 sm:mx-2 w-[clamp(24px,6.2vw,70px)] aspect-[70/68] relative sticker-pop cursor-pointer align-middle">
            <img
              src="/assets/stickers/badge-smile-complete.svg"
              alt="Smile red sticker"
              className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(228,40,31,0.35)]"
            />
          </span>

          <span>rks</span>
        </h2>
      </div>

      {/* Dashed Timeline Line: Left on mobile (±24px), centered on desktop (x: 720px) */}
      <div 
        className="absolute left-[20px] sm:left-[24px] lg:left-[720px] top-[140px] sm:top-[160px] lg:top-[222px] w-0 bottom-12 lg:bottom-auto lg:h-[1137px] border-l-[2px] sm:border-l-[3px] border-dashed border-[#1e1e1e]/60 pointer-events-none z-0" 
      />

      {/* Timeline Categories Container */}
      <div className="relative w-full max-w-xl lg:max-w-none mx-auto flex flex-col gap-8 sm:gap-12 lg:gap-[75px] z-10">

        {/* ITEM 1: Street Photography */}
        <div className="relative w-full">
          {/* Category Header */}
          <div className="flex items-center lg:justify-end pl-[38px] sm:pl-[44px] lg:pl-0 lg:pr-[733px] gap-3 sm:gap-[18px] mb-3 sm:mb-[13px] relative">
            {/* Dot on mobile is positioned on left line; on desktop it translates x */}
            <div className="absolute left-[20px] sm:left-[24px] -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-[13px] w-4 h-4 sm:w-[22px] sm:h-[22px] lg:w-[26px] lg:h-[26px] rounded-full bg-black shrink-0 order-first lg:order-last" />
            <span className="font-['Montserrat'] font-medium text-[clamp(18px,4.5vw,36px)] text-black">
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
          <div className="flex items-center justify-start pl-[38px] sm:pl-[44px] lg:pl-[707px] gap-3 sm:gap-[18px] mb-3 sm:mb-[13px] relative">
            <div className="absolute left-[20px] sm:left-[24px] -translate-x-1/2 lg:relative lg:left-auto lg:-translate-x-[13px] w-4 h-4 sm:w-[22px] sm:h-[22px] lg:w-[26px] lg:h-[26px] rounded-full bg-black shrink-0" />
            <span className="font-['Montserrat'] font-medium text-[clamp(18px,4.5vw,36px)] text-black">
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
          <div className="flex items-center lg:justify-end pl-[38px] sm:pl-[44px] lg:pl-0 lg:pr-[733px] gap-3 sm:gap-[18px] mb-3 sm:mb-[13px] relative">
            <div className="absolute left-[20px] sm:left-[24px] -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-[13px] w-4 h-4 sm:w-[22px] sm:h-[22px] lg:w-[26px] lg:h-[26px] rounded-full bg-black shrink-0 order-first lg:order-last" />
            <span className="font-['Montserrat'] font-medium text-[clamp(18px,4.5vw,36px)] text-black">
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
          <div className="flex items-center justify-start pl-[38px] sm:pl-[44px] lg:pl-[707px] gap-3 sm:gap-[18px] mb-3 sm:mb-[13px] relative">
            <div className="absolute left-[20px] sm:left-[24px] -translate-x-1/2 lg:relative lg:left-auto lg:-translate-x-[13px] w-4 h-4 sm:w-[22px] sm:h-[22px] lg:w-[26px] lg:h-[26px] rounded-full bg-black shrink-0" />
            <span className="font-['Montserrat'] font-medium text-[clamp(18px,4.5vw,36px)] text-black">
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
