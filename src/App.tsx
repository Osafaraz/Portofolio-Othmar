import React, { useState, useEffect } from 'react';
import { AudioProvider } from './context/AudioContext';
import { LogoIntroLoader } from './components/LogoIntroLoader';
import { Navbar } from './components/Navbar';
import { SectionTransition } from './components/SectionTransition';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PcrCupSection } from './components/PcrCupSection';
import { JtiExpoSection } from './components/JtiExpoSection';
import { Competition4CSection } from './components/Competition4CSection';
import { PersonalWorksSection } from './components/PersonalWorksSection';
import { ContactSection } from './components/ContactSection';

export const AppContent: React.FC = () => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );

  // Responsive viewport tracking
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;
  const isScaleDesktop = isDesktop && windowWidth < 1440;
  // B1: >=1440px scale is locked to 1 (centered, no enlargement at 1920px); 1024-1439px scaled proportionally; <1024px fluid mobile
  const scale = isScaleDesktop ? windowWidth / 1440 : 1;

  // Track active section while scrolling with optimal viewport threshold
  useEffect(() => {
    const sectionIds = ['home', 'about', 'pcr-cup', 'jti-expo', '4c', 'works', 'contact'];
    const handleScroll = () => {
      if (isTransitioning) return;
      // 0.52 threshold triggers reveal animation precisely when the section enters the viewer's focal area
      const scrollPosition = window.scrollY + window.innerHeight * 0.52;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTransitioning]);

  // Navigate with gradient sweep transition (Section 5.2)
  const handleNavigate = (sectionId: string) => {
    if (activeSection === sectionId && !isTransitioning) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setIsTransitioning(true);

    // After 520ms (logos have converged at center and screen is covered), jump/scroll to target section
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
        setActiveSection(sectionId);
      }
    }, 520);

    // End transition after logos burst outward and screen reveals target section
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1280);
  };

  return (
    <div
      className="relative w-full bg-[#f4f7f4] bg-grid-lines text-[#1e1e1e] selection:bg-[#e4281f] selection:text-white overflow-x-clip"
      style={{
        minHeight: isDesktop
          ? (isScaleDesktop ? `${8210 * scale}px` : '8210px')
          : '100svh',
      }}
    >
      {/* Dynamic Software Logo Intro Loader */}
      {!hasEntered && (
        <LogoIntroLoader onComplete={() => setHasEntered(true)} />
      )}

      {/* Fixed Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Screen Sweep Transition */}
      <SectionTransition isActive={isTransitioning} />

      {isDesktop ? (
        /* Scaled 1440px Figma Canvas (Desktop >=1024px) */
        <div
          id="figma-canvas"
          className="absolute left-1/2 top-0 pointer-events-auto"
          style={{
            width: '1440px',
            height: '8210px',
            transform: isScaleDesktop ? `translateX(-50%) scale(${scale})` : 'translateX(-50%)',
            transformOrigin: 'top center',
          }}
        >
          {/* Unified Continuous Full-Height Background Layer (Figma A2 Grid & A3 Blobs) */}
          <div
            className="absolute inset-0 w-[1440px] h-[8210px] pointer-events-none z-0 overflow-visible"
            aria-hidden="true"
          >
            {/* 1. Hero Left Royal Blue (Figma 5:132) - Seamless Radial Gradient without bounding box cutoff */}
            <div
              className="absolute left-[-450px] top-[150px] w-[1100px] h-[650px] rounded-full pointer-events-none opacity-85"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(8, 47, 186, 0.6) 0%, rgba(8, 47, 188, 0.38) 35%, rgba(162, 89, 255, 0.2) 58%, transparent 75%)',
                filter: 'blur(35px)',
              }}
            />

            {/* 2. Hero Right Warm Peach-Orange (Figma 5:135) */}
            <div className="absolute left-[920.5px] top-[-87.5px] w-[785.9px] h-[548px] -scale-y-100 rotate-180">
              <img src="/assets/figma/f9831515d5712b3465ce77ffba111d2d1ba697dc.svg" alt="" className="w-full h-full object-contain" />
            </div>

            {/* 3. PCR Cup Right Warm Orange (Figma 40:172) */}
            <div className="absolute left-[880px] top-[2070px] w-[838.9px] h-[585px]">
              <img src="/assets/figma/51650e12432bf9c9091322ea9b2a77c14fc67f37.svg" alt="" className="w-full h-full object-contain" />
            </div>

            {/* 4. PCR Gallery Left Royal Blue (Figma 51:356) */}
            <div className="absolute left-[-150px] top-[2850px] w-[370.1px] h-[448px]">
              <img src="/assets/figma/2916968902335ff882f14e86d44f058a619f0245.svg" alt="" className="w-full h-full object-contain" />
            </div>

            {/* 5. JTI Expo Right Royal Blue (Figma 51:355) */}
            <div className="absolute left-[1050px] top-[3325px] w-[518px] h-[566px]">
              <img src="/assets/figma/7b85e89bcf23dbfdf297f07a010b3578f06d5f2a.svg" alt="" className="w-full h-full object-contain" />
            </div>

            {/* 6. 4C Center-Left Warm Orange (Figma 46:69) */}
            <div className="absolute left-[-50px] top-[4340px] w-[889px] h-[620px]">
              <img src="/assets/figma/ccd6d4e6a49370d031a8967c2623ebf954bb1476.svg" alt="" className="w-full h-full object-contain" />
            </div>

            {/* 7. 4C ARVANA Right Royal Blue (Figma 51:357) */}
            <div className="absolute left-[1050px] top-[4850px] w-[518px] h-[566px]">
              <img src="/assets/figma/26ea40880866eb8ed3c621b98bec53a330e08ca5.svg" alt="" className="w-full h-full object-contain" />
            </div>

            {/* 8. Personal Works Left Royal Blue (Figma 51:358) */}
            <div className="absolute left-[-100px] top-[5642px] w-[518px] h-[566px]">
              <img src="/assets/figma/9aaa3518eebb968bfbc44bef4b12c98eb96a482c.svg" alt="" className="w-full h-full object-contain" />
            </div>

            {/* 9. Personal Works Right Warm Orange (Figma 51:316) */}
            <div className="absolute left-[850px] top-[5788px] w-[1119.8px] h-[815.2px]">
              <img src="/assets/figma/6619d3aa88e06b5df4fd2c294c35bdb316cb613e.svg" alt="" className="w-full h-full object-contain" />
            </div>

            {/* 10. Thanks Right Royal Blue (Figma 85:67) */}
            <div className="absolute left-[1135.5px] top-[7156.5px] w-[495px] h-[431.5px] -scale-y-100 rotate-180">
              <img src="/assets/figma/d05db03fbfbb1e9cc20706181e41a6ee04368ebb.svg" alt="" className="w-full h-full object-contain" />
            </div>

            {/* 11. Thanks Left Warm Orange (Figma 85:68) */}
            <div className="absolute left-[-200px] top-[7300px] w-[1099px] h-[1071px]">
              <img src="/assets/figma/cac39b97b17fd9571806bac16a7264aa07539f09.svg" alt="" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Main Single-Page Portfolio Content (Exact 1440px Dimensions) */}
          <main className="w-[1440px] relative z-10">
            <HeroSection isEntered={hasEntered} />
            <AboutSection activeSection={activeSection} />
            <PcrCupSection activeSection={activeSection} />
            <JtiExpoSection activeSection={activeSection} />
            <Competition4CSection activeSection={activeSection} />
            <PersonalWorksSection activeSection={activeSection} />
            <ContactSection activeSection={activeSection} />
          </main>
        </div>
      ) : (
        /* Native Fluid Responsive Mobile & Tablet Layout (<1024px) */
        <div className="relative w-full overflow-x-clip z-10 flex flex-col items-center">
          <main className="w-full max-w-[100vw] relative z-10 flex flex-col">
            <HeroSection isEntered={hasEntered} />
            <AboutSection activeSection={activeSection} />
            <PcrCupSection activeSection={activeSection} />
            <JtiExpoSection activeSection={activeSection} />
            <Competition4CSection activeSection={activeSection} />
            <PersonalWorksSection activeSection={activeSection} />
            <ContactSection activeSection={activeSection} />
          </main>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  );
}
