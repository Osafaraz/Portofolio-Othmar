import React from 'react';
import { useSectionReveal } from '../hooks/useSectionReveal';

interface ContactSectionProps {
  activeSection?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ activeSection = '' }) => {
  const containerRef = useSectionReveal<HTMLElement>({
    sectionId: 'contact',
    activeSection,
    stagger: 0.1,
    yOffset: 40,
  });

  return (
    <footer
      id="contact"
      ref={containerRef}
      className="relative w-full lg:w-[1440px] min-h-0 lg:h-[853px] flex flex-col items-center text-center pt-20 sm:pt-28 lg:pt-[100px] pb-24 sm:pb-32 lg:pb-0 px-4 sm:px-6 overflow-x-clip scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28"
    >
      {/* Mobile-Only Atmospheric Gradient Blobs */}
      <div className="lg:hidden absolute -right-[80px] top-[40px] w-[240px] h-[240px] rounded-full pointer-events-none opacity-35 blur-[28px] bg-[radial-gradient(ellipse_at_center,rgba(8,47,186,0.45)_0%,transparent_70%)] z-0" aria-hidden="true" />
      <div className="lg:hidden absolute -left-[80px] bottom-[40px] w-[260px] h-[260px] rounded-full pointer-events-none opacity-40 blur-[28px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.45)_0%,transparent_70%)] z-0" aria-hidden="true" />

      {/* "Thanks!" in Italic (Figma node 51:380) */}
      <p className="reveal-item font-['Montserrat'] font-normal italic text-[clamp(28px,6vw,48px)] text-black leading-none mb-6 sm:mb-8 lg:mb-[36px]">
        Thanks!
      </p>

      {/* Vertical Divider Line (Figma connecting line) */}
      <div className="reveal-item w-[1.5px] h-16 sm:h-24 lg:h-[140px] bg-black mb-6 sm:mb-8 lg:mb-[44px]" />

      {/* "Let’s Work Together" (Figma node 51:383, clamp prevents awkward wraps on small screens) */}
      <h2 className="reveal-item font-['Montserrat'] font-bold text-[clamp(32px,8vw,84px)] text-black leading-[1.05] tracking-tight mb-4 sm:mb-6 lg:mb-[30px] px-2 max-w-full">
        Let’s Work Together
      </h2>

      {/* "Don’t hesitate to reach me" (Figma node 51:384) */}
      <p className="reveal-item font-['Montserrat'] font-light text-[clamp(18px,4.5vw,48px)] text-black leading-snug mb-8 sm:mb-12 lg:mb-[74px] px-2">
        Don’t hesitate to reach me
      </p>

      {/* Phone & Email Contact Row on Desktop, Stacked Vertically with >=44px touch targets on Mobile */}
      <div className="reveal-item flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-[48px] text-[clamp(15px,3.8vw,24px)] w-full max-w-md lg:max-w-none mx-auto">
        {/* Phone */}
        <a
          href="tel:081809744254"
          className="flex items-center justify-center gap-3 sm:gap-[16px] text-[#1e1e1e] hover:text-[#e4281f] transition-all group font-['Montserrat'] font-medium min-h-[48px] px-5 py-2.5 rounded-full bg-black/5 hover:bg-black/10 active:scale-95 w-full sm:w-auto"
        >
          <div className="w-6 h-6 sm:w-[32px] sm:h-[32px] shrink-0 group-hover:scale-110 transition-transform">
            <img
              src="/assets/figma/adaa2a59672b52861a0dc1376f138943c3783b3a.svg"
              alt="Phone"
              className="w-full h-full object-contain"
            />
          </div>
          <span>0818-0974-4254</span>
        </a>

        {/* Email */}
        <a
          href="mailto:othmar23ti@mahasiswa.pcr.ac.id"
          className="flex items-center justify-center gap-3 sm:gap-[16px] text-[#1e1e1e] hover:text-[#e4281f] transition-all group font-['Montserrat'] font-medium min-h-[48px] px-5 py-2.5 rounded-full bg-black/5 hover:bg-black/10 active:scale-95 w-full sm:w-auto truncate"
        >
          <div className="w-6 h-6 sm:w-[32px] sm:h-[32px] shrink-0 group-hover:scale-110 transition-transform">
            <img
              src="/assets/figma/c688044e8f70f23dfa20c39825e0cbf25a0f3f1c.svg"
              alt="Email"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="truncate">othmar23ti@mahasiswa.pcr.ac.id</span>
        </a>
      </div>
    </footer>
  );
};
