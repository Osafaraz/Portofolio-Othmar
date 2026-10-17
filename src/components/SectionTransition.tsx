import React from 'react';

interface SectionTransitionProps {
  isActive: boolean;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between overflow-hidden">
      {/* Sweeping layers */}
      <div className="absolute inset-0 bg-[#f4f7f4]/95 backdrop-blur-xl transition-all duration-500 ease-in-out flex items-center justify-center animate-[fadeInOut_0.8s_ease-in-out_forwards]">
        {/* Decorative sweeping blobs & grid */}
        <div className="absolute inset-0 bg-grid-lines opacity-60" />
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-500/30 via-orange-400/30 to-yellow-300/30 blur-[80px] animate-pulse" />
        
        {/* Center brand mark */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-[#e4281f] flex items-center justify-center shadow-lg animate-bounce">
            <img src="/assets/stickers/sticker-smile-face.svg" alt="Smile" className="w-9 h-9" />
          </div>
          <p className="font-['Montserrat'] font-black text-xl text-[#1e1e1e] tracking-wider uppercase">
            M. Othmar Safaraz
          </p>
        </div>
      </div>
    </div>
  );
};
