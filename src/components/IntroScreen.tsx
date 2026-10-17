import React, { useEffect, useState } from 'react';
import { useAudio } from '../context/AudioContext';

interface IntroScreenProps {
  onEnter: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  const { startAudio } = useAudio();
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = async () => {
    if (isExiting) return;
    setIsExiting(true);
    await startAudio();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = prefersReducedMotion ? 0 : (isMobile ? 320 : 600);
    setTimeout(() => {
      onEnter();
    }, delay);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      onClick={(e) => {
        // Tap outside modal to skip/enter
        if (e.target === e.currentTarget) handleEnter();
      }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#f4f7f4] min-h-[100dvh] transition-all duration-500 md:duration-700 cursor-pointer ${
        isExiting ? 'opacity-0 pointer-events-none scale-102 md:scale-105' : 'opacity-100'
      }`}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(30, 30, 30, 0.055) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(30, 30, 30, 0.055) 1px, transparent 1px)
        `,
        backgroundSize: '54.33px 77.84px',
      }}
    >
      {/* Background ambient blobs - lighter and smaller on mobile */}
      <div className="absolute top-[-10%] left-[-10%] w-[260px] h-[260px] md:w-[500px] md:h-[500px] rounded-full bg-blue-500/20 blur-[50px] md:blur-[100px] pointer-events-none md:animate-pulse-glow" />
      <div className="absolute top-[10%] right-[-10%] w-[280px] h-[280px] md:w-[550px] md:h-[550px] rounded-full bg-amber-500/20 blur-[50px] md:blur-[110px] pointer-events-none md:animate-float-slow" />
      <div className="absolute bottom-[-15%] left-[30%] w-[300px] h-[200px] md:w-[600px] md:h-[400px] rounded-full bg-orange-400/15 blur-[45px] md:blur-[90px] pointer-events-none md:animate-float-reverse" />

      {/* Intro Modal Card */}
      <div className="relative z-10 max-w-lg w-[92%] sm:w-[90%] mx-auto bg-white/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 text-center shadow-[0px_20px_50px_rgba(0,0,0,0.12)] border border-white/60 flex flex-col items-center cursor-default">
        {/* Playful Stickers on top */}
        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md animate-bounce hover:rotate-12 transition-transform">
            <img src="/assets/stickers/sticker-smile-complete.svg" alt="Smiley" className="w-full h-full object-contain" />
          </div>
          <span className="font-['Montserrat'] font-black text-[10px] sm:text-xs uppercase tracking-widest bg-[#e4281f] text-white px-3 py-1 rounded-full shadow-sm">
            Portofolio 2026
          </span>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md animate-pulse">
            <img src="/assets/stickers/sticker-always-circle.svg" alt="Always With New Ideas" className="w-full h-full object-contain" />
          </div>
        </div>

        <p className="font-['Montserrat'] font-normal text-lg md:text-xl text-[#1e1e1e] mb-1">
          Welcome To
        </p>
        <h1 className="font-['Montserrat'] font-black text-3xl md:text-4xl text-[#1e1e1e] tracking-tight mb-3">
          M. OTHMAR SAFARAZ
        </h1>
        <p className="font-['Helvetica Neue',Helvetica,sans-serif] text-sm md:text-base text-[#666] max-w-sm mb-8 leading-relaxed">
          Explore interactive design, high-fidelity UI/UX, documentation, photography, and creative works.
        </p>

        {/* Enter Button */}
        <button
          id="btn-enter-portfolio"
          onClick={handleEnter}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1e1e1e] text-white font-['Montserrat'] font-bold text-base md:text-lg tracking-wide shadow-[0px_10px_25px_rgba(0,0,0,0.2)] hover:bg-[#e4281f] hover:shadow-[0px_15px_30px_rgba(228,40,31,0.35)] active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <span>Enter Portfolio</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        <p className="mt-5 text-xs text-[#999] font-['Montserrat'] flex items-center gap-1.5">
          <span>♫ Plays background music on entry (muteable anytime)</span>
        </p>
      </div>
    </div>
  );
};
