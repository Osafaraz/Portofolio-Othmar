import React from 'react';

export const AboutSection: React.FC = () => {
  const experiences = [
    {
      title: 'Intrenship', // Exact typo from Figma
      period: 'Sep - Aug 2026',
      role: 'PT Digital Indonesia Hebat As Software Enginere', // Exact typo from Figma
    },
    {
      title: 'Freelance',
      period: '2025 - Present',
      role: 'Wedding Photographer',
    },
    {
      title: 'PCR Cup Basket 2025',
      period: 'June - July 2025',
      role: 'Coordinator of Documentation Division',
    },
    {
      title: 'JTI EXPO III 2025',
      period: '20 January 2025',
      role: 'Member of Documentation Division',
    },
    {
      title: 'Basketball Club Executive',
      period: 'Sep - Nov 2024',
      role: 'Head Of Creative Division',
    },
    {
      title: '4C National Competition',
      period: 'Sep - Nov 2024',
      role: 'Participants in the ICT Business Sector',
    },
  ];

  return (
    <section id="about" className="relative w-full lg:w-[1440px] min-h-0 lg:h-[1340px] pt-14 sm:pt-20 lg:pt-[60px] px-4 sm:px-8 lg:px-[100px] isolate overflow-x-clip">
      <div className="w-full flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-8 items-start relative z-10 max-w-xl lg:max-w-none mx-auto">
        
        {/* LEFT COLUMN in Desktop, promotes children as direct flex items in mobile via contents */}
        <div className="contents lg:col-span-7 lg:flex lg:flex-col lg:gap-9 lg:w-[675px]">
          {/* 1. Header intro: sapaan + nama + deskripsi (Mobile Order 1) */}
          <div className="order-1 lg:order-none flex flex-col gap-2 sm:gap-3 w-full">
            <p className="font-['Helvetica_Neue',Helvetica,sans-serif] text-[clamp(18px,4.5vw,32px)] text-[#1e1e1e] leading-snug">
              <span className="font-light">Hello, Everyone</span>{' '}
              <span className="font-bold">I’m</span>
            </p>
            <h2 className="font-['Montserrat'] font-extrabold text-[clamp(26px,6vw,48px)] text-[#1e1e1e] tracking-tight leading-none my-1">
              M.OTHMAR SAFARAZ
            </h2>
            <p className="font-['Helvetica_Neue',Helvetica,sans-serif] font-light text-[clamp(14px,3.5vw,24px)] text-[#1e1e1e] mb-2">
              Information Technology student in Politeknik Caltex Riau
            </p>
            {/* Bio paragraph: text-left on mobile for comfort, justified on desktop */}
            <p className="font-['Helvetica_Neue',Helvetica,sans-serif] font-light text-[clamp(14px,3.5vw,24px)] text-[#1e1e1e] leading-[1.6] lg:leading-[1.5] text-left lg:text-justify w-full lg:w-[675px]">
              I am an active Information Technology student with a genuine passion for the creative arts. Alongside my technical studies, I enjoy exploring design, illustration, and photography always looking for ways to blend technology with creativity to bring ideas to life.
            </p>
          </div>

          {/* 3. Experience list (Mobile Order 3) */}
          <div className="order-3 lg:order-none flex flex-col w-full mt-2 lg:mt-0">
            <h3 className="font-['Helvetica_Neue',Helvetica,sans-serif] font-bold text-[clamp(26px,6vw,42px)] text-[#1e1e1e] mb-4 lg:mb-6">
              Experience
            </h3>
            <div className="flex flex-col gap-4 lg:gap-5">
              {experiences.map((exp, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center justify-between sm:justify-start sm:gap-10 text-[clamp(15px,3.8vw,24px)]">
                    <span className="font-['Helvetica_Neue',Helvetica,sans-serif] font-bold text-[#1e1e1e]">
                      {exp.title}
                    </span>
                    <span className="font-['Helvetica_Neue',Helvetica,sans-serif] font-light text-[#a0a0a0]">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-[14px] h-[14px] sm:w-[17px] sm:h-[17px] shrink-0">
                      <img src="/assets/figma/03648964dd283f5e59580dcb78749bcc51878174.svg" alt="" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-['Helvetica_Neue',Helvetica,sans-serif] font-light text-[clamp(13px,3.4vw,24px)] text-[#1e1e1e]">
                      {exp.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Software Icons (Mobile Order 6) */}
          <div className="order-6 lg:order-none flex flex-col w-full mt-2 lg:mt-0">
            <h3 className="font-['Helvetica_Neue',Helvetica,sans-serif] font-bold text-[clamp(26px,6vw,42px)] text-[#1e1e1e] mb-4 lg:mb-5">
              Software
            </h3>
            <div className="grid grid-cols-6 gap-2 sm:gap-3 lg:flex lg:items-center lg:gap-[18px]">
              {/* 1. Adobe Photoshop */}
              <div className="relative shrink-0 w-11 h-11 sm:w-14 sm:h-14 lg:w-[78px] lg:h-[78px] min-w-[44px] min-h-[44px] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer" title="Adobe Photoshop">
                <img alt="Adobe Photoshop" className="w-full h-full object-contain" src="/assets/icons/software-photoshop.svg" />
              </div>

              {/* 2. Adobe Illustrator */}
              <div className="relative shrink-0 w-11 h-11 sm:w-14 sm:h-14 lg:w-[78px] lg:h-[78px] min-w-[44px] min-h-[44px] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer" title="Adobe Illustrator">
                <img alt="Adobe Illustrator" className="w-full h-full object-contain" src="/assets/icons/software-illustrator.svg" />
              </div>

              {/* 3. CapCut / Premiere */}
              <div className="relative shrink-0 w-11 h-11 sm:w-14 sm:h-14 lg:w-[76px] lg:h-[76px] min-w-[44px] min-h-[44px] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer" title="CapCut">
                <img alt="CapCut" className="w-full h-full object-contain" src="/assets/icons/software-capcut.svg" />
              </div>

              {/* 4. Blender 3D */}
              <div className="relative shrink-0 w-11 h-11 sm:w-14 sm:h-14 lg:w-[78px] lg:h-[78px] min-w-[44px] min-h-[44px] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer" title="Blender 3D">
                <img alt="Blender 3D" className="w-full h-full object-contain" src="/assets/icons/software-blender.svg" />
              </div>

              {/* 5. Clip Studio Paint */}
              <div className="relative shrink-0 w-11 h-11 sm:w-14 sm:h-14 lg:w-[78px] lg:h-[78px] min-w-[44px] min-h-[44px] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer" title="Clip Studio Paint">
                <img alt="Clip Studio Paint" className="w-full h-full object-contain" src="/assets/icons/software-clipstudio.svg" />
              </div>

              {/* 6. Figma */}
              <div className="relative shrink-0 w-11 h-11 sm:w-14 sm:h-14 lg:w-[78px] lg:h-[78px] min-w-[44px] min-h-[44px] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer" title="Figma">
                <img alt="Figma" className="w-full h-full object-contain" src="/assets/icons/software-figma.svg" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN in Desktop, promotes children as direct flex items in mobile via contents */}
        <div className="contents lg:col-span-5 lg:flex lg:flex-col lg:items-end lg:pr-4 lg:gap-10">
          
          {/* 2. Polaroid Photo Frame with stickers (Mobile Order 2) */}
          <div className="order-2 lg:order-none relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[530px] mx-auto lg:mx-0 pt-10 sm:pt-14 pb-4">
            {/* Main White Polaroid Card */}
            <div className="relative bg-white p-4 sm:p-6 pb-7 sm:pb-9 shadow-[1px_6px_20.2px_rgba(0,0,0,0.25)] rotate-[-1.32deg] rounded-sm transition-transform duration-500 hover:rotate-0">
              
              {/* Bulldog Paper Clip gripping top edge faithfully to Figma (Node 10:36, x: 1049px relative to card at 855px = 36.6%) */}
              <div className="absolute -top-[clamp(55px,13vw,95px)] left-[36%] z-10 w-[clamp(110px,28vw,172px)] h-[clamp(110px,28vw,172px)] rotate-[5.63deg] drop-shadow-[-2px_2px_4px_rgba(0,0,0,0.25)] pointer-events-none select-none">
                <img
                  src="/assets/figma/0fb8f0c74540c0e2bf0e75f929b576cc892c6314.png"
                  alt="Paper Clip"
                  className="w-full h-full object-contain select-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Handwritten Date - fully visible to the right of the paper clip */}
              <div className="relative z-20 text-right pr-4 sm:pr-6 mb-2">
                <span className="font-['Allura'] text-[clamp(24px,5.5vw,36px)] text-[#1e1e1e] select-none inline-block">
                  29 mei 2005
                </span>
              </div>

              {/* Orange Circle Sticker top-left */}
              <div className="absolute top-[25px] sm:top-[35px] -left-[20px] sm:-left-[30px] z-20 w-[clamp(45px,11vw,70px)] h-[clamp(45px,11vw,70px)] mix-blend-multiply opacity-90 hover:scale-110 active:scale-95 transition-transform cursor-pointer">
                <img
                  src="/assets/figma/20a239825c372a8dbb75911f60b9c5030e08c0f7.svg"
                  alt="Orange Sticker"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Portrait Photo */}
              <div className="relative w-full aspect-[505/422] overflow-hidden bg-gray-100 shadow-inner">
                <img
                  src="/assets/figma/556700fc98dea2bd839500640d1946f3698fd247.png"
                  alt="M. Othmar Safaraz"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Red Smile Sticker overlapping right edge (Solid Red + concentric cream face as in Figma) */}
              <div className="absolute -right-[clamp(20px,5vw,48px)] top-[46%] -translate-y-1/2 z-20 w-[clamp(65px,17vw,105px)] h-[clamp(65px,17vw,105px)] hover:scale-110 active:scale-95 transition-transform cursor-pointer">
                <img
                  src="/assets/stickers/sticker-smile-complete.svg"
                  alt="Smile sticker"
                  className="w-full h-full object-contain -rotate-15 drop-shadow-[0_4px_12px_rgba(228,40,31,0.28)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Name Tag Sticker (Clean transparent PNG from Figma node 11:37) */}
              <div className="absolute -bottom-[clamp(20px,5vw,32px)] -left-[clamp(16px,4vw,35px)] z-20 w-[clamp(170px,46vw,273px)] hover:scale-105 active:scale-95 transition-transform cursor-pointer">
                <img
                  src="/assets/figma/name_tag_sticker.png?v=clean2"
                  alt="Hello, My name is: Othmar"
                  className="w-full h-auto object-contain drop-shadow-[2px_6px_15px_rgba(0,0,0,0.2)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Green Sticker "05' Kid" (Clean transparent PNG from Figma node 11:38) */}
              <div className="absolute -bottom-[clamp(22px,5.5vw,36px)] -right-[clamp(12px,3vw,24px)] z-20 w-[clamp(75px,20vw,122px)] hover:scale-105 active:scale-95 transition-transform cursor-pointer">
                <img
                  src="/assets/figma/green_kid_sticker.png?v=clean2"
                  alt="05' Kid"
                  className="w-full h-auto object-contain drop-shadow-[-2px_4px_10px_rgba(0,0,0,0.25)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* 4. Education (Mobile Order 4) */}
          <div className="order-4 lg:order-none w-full lg:w-[472px] flex flex-col gap-1.5 mt-2 lg:mt-2">
            <h3 className="font-['Helvetica_Neue',Helvetica,sans-serif] font-bold text-[clamp(26px,6vw,42px)] text-[#1e1e1e] mb-2 sm:mb-3">
              Education
            </h3>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between sm:justify-start sm:gap-10 text-[clamp(15px,3.8vw,24px)]">
                <span className="font-['Helvetica_Neue',Helvetica,sans-serif] font-bold text-[#1e1e1e]">
                  Politeknik Caltex Riau
                </span>
                <span className="font-['Helvetica_Neue',Helvetica,sans-serif] font-light text-[#a0a0a0]">
                  2023 - Present
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-[14px] h-[14px] sm:w-[17px] sm:h-[17px] shrink-0">
                  <img src="/assets/figma/03648964dd283f5e59580dcb78749bcc51878174.svg" alt="" className="w-full h-full object-contain" />
                </div>
                <span className="font-['Helvetica_Neue',Helvetica,sans-serif] font-light text-[clamp(14px,3.5vw,24px)] text-[#1e1e1e]">
                  Information Technology
                </span>
              </div>
            </div>
          </div>

          {/* 5. Contact (Mobile Order 5) */}
          <div className="order-5 lg:order-none relative w-full lg:w-[472px] flex flex-col gap-3 sm:gap-4 mt-2">
            <h3 className="font-['Helvetica_Neue',Helvetica,sans-serif] font-bold text-[clamp(26px,6vw,42px)] text-[#1e1e1e] mb-2 sm:mb-3">
              Contact
            </h3>
            <div className="flex flex-col gap-2.5 sm:gap-4 text-[clamp(14px,3.5vw,24px)]">
              <a
                href="mailto:othmar23ti@mahasiswa.pcr.ac.id"
                className="flex items-center gap-3 sm:gap-4 text-[#1e1e1e] hover:text-[#e4281f] transition-colors group min-h-[44px]"
              >
                <div className="w-7 h-7 sm:w-[32px] sm:h-[32px] shrink-0">
                  <img src="/assets/figma/c688044e8f70f23dfa20c39825e0cbf25a0f3f1c.svg" alt="" className="w-full h-full object-contain" />
                </div>
                <span className="font-['Helvetica_Neue',Helvetica,sans-serif] font-light truncate">
                  othmar23ti@mahasiswa.pcr.ac.id
                </span>
              </a>

              <a
                href="tel:081809744254"
                className="flex items-center gap-3 sm:gap-4 text-[#1e1e1e] hover:text-[#e4281f] transition-colors group min-h-[44px]"
              >
                <div className="w-7 h-7 sm:w-[32px] sm:h-[32px] shrink-0">
                  <img src="/assets/figma/adaa2a59672b52861a0dc1376f138943c3783b3a.svg" alt="" className="w-full h-full object-contain" />
                </div>
                <span className="font-['Helvetica_Neue',Helvetica,sans-serif] font-light">
                  0818-0974-4254
                </span>
              </a>

              <a
                href="https://www.tiktok.com/@norce.xon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 text-[#1e1e1e] hover:text-[#e4281f] transition-colors group min-h-[44px]"
              >
                <div className="w-7 h-7 sm:w-[32px] sm:h-[32px] shrink-0">
                  <img src="/assets/figma/e13887d62f635e6c984858ba3574e2e7fda4d001.svg" alt="" className="w-full h-full object-contain" />
                </div>
                <span className="font-['Helvetica_Neue',Helvetica,sans-serif] font-light">
                  @norce.xon
                </span>
              </a>
            </div>

            {/* "Contact Me!" Sticker Badge */}
            <div className="self-end sm:absolute right-0 sm:bottom-[-5px] w-[130px] sm:w-[150px] lg:w-[160px] sticker-pop cursor-pointer rotate-[6.53deg] mt-1 sm:mt-0">
              <img
                src="/assets/figma/839d019b372fe9138d45785c9009c693369f37d7.svg"
                alt="Contact Me!"
                className="w-full h-auto object-contain drop-shadow-[0_4px_8px_rgba(228,40,31,0.25)]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
