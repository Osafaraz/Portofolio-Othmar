import React from 'react';

export const Competition4CSection: React.FC = () => {
  const arvanaScreens = [
    { src: '/assets/figma/6ee24a76cf9721a90e784c702b5cb34444d1a928.png', title: 'Landing Page', width: '228px' },
    { src: '/assets/figma/6b7fbc013f755d1e05c1163db2853b59d45151f6.png', title: 'Home', width: '229px' },
    { src: '/assets/figma/134e9799ee90609abd65132e173bc81bec84b95b.png', title: 'Product', width: '228px' },
    { src: '/assets/figma/652ce21d28a779402f8a047a5f9574a3addb7aed.png', title: 'Payment', width: '234px' },
    { src: '/assets/figma/cadbf4d332667eb88de713270512e2176d75abd0.png', title: 'Payment Done', width: '228px' },
  ];

  return (
    <section id="4c" className="relative w-full lg:w-[1440px] min-h-0 lg:h-[1405px] pt-14 sm:pt-20 lg:pt-[70px] px-4 sm:px-8 lg:px-[84.5px] select-none overflow-x-clip">
      {/* Mobile-Only Atmospheric Gradient Blob */}
      <div className="lg:hidden absolute -left-[80px] top-[120px] w-[240px] h-[240px] rounded-full pointer-events-none opacity-40 blur-[28px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.45)_0%,transparent_70%)] z-0" aria-hidden="true" />

      {/* Main Content */}
      <div className="relative w-full max-w-xl lg:max-w-none mx-auto">
        
        {/* Top: Two Phones Mockup + Title & Description */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 mb-8 lg:mb-[80px]">
          
          {/* TEXT & INFO (Mobile Order 1, Desktop Right) */}
          <div className="order-1 lg:order-2 w-full lg:w-[608px] flex flex-col justify-center">
            <div className="mb-4 sm:mb-[24px]">
              <h2 className="font-['Montserrat'] font-black text-[clamp(44px,9vw,96px)] text-[#1e1e1e] leading-[1.05] tracking-tight">
                4C National
              </h2>
              <p className="font-['Montserrat'] font-light text-[clamp(28px,6vw,64px)] text-[#1e1e1e] leading-[1.05] tracking-normal">
                Competition
              </p>
            </div>

            <p className="font-['Helvetica',sans-serif] font-light text-[clamp(14px,3.6vw,24px)] text-[#1e1e1e] leading-[1.6] lg:leading-[1.5] text-left lg:text-justify w-full lg:w-[602px]">
              4C National Competition is a national-level ICT business competition open to university students across Indonesia.{' '}
              <span className="font-bold">As a team member</span>
              , I contributed to developing the competition concept and business idea, designing a high-fidelity UI/UX prototype of a mobile application called ARVANA a virtual optical store platform that allows users to try and purchase eyewear online. I was also responsible for building the interactive prototype to demonstrate the product's core features and user flow.
            </p>
          </div>

          {/* TWO PHONES MOCKUP CLUSTER (Mobile Order 2, Desktop Left) */}
          <div className="order-2 lg:order-1 relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none lg:w-[650px] aspect-[650/550] lg:h-[550px] shrink-0 mx-auto my-4 lg:my-0 select-none">
            {/* Shadow Ellipse 28 (Left Phone) */}
            <div className="absolute left-[12.3%] top-[81.8%] w-[30.8%] h-[13.6%] -rotate-[14.77deg] pointer-events-none opacity-80">
              <img src="/assets/figma/087d57adbfb713ffa5e6a92f13ff3519f014407a.svg" alt="" className="w-full h-full" />
            </div>

            {/* Shadow Ellipse 27 (Right Phone) */}
            <div className="absolute left-[40%] top-[85.5%] w-[40%] h-[16.9%] rotate-[12.44deg] pointer-events-none opacity-80">
              <img src="/assets/figma/bad087c1cf618adab1950b838c123d3edd6d1d0f.svg" alt="" className="w-full h-full" />
            </div>

            {/* Left Phone (tilted -11.03deg, node 46:54) */}
            <div 
              className="absolute left-[4.6%] top-[5.5%] z-10 w-[66.3%] aspect-square -rotate-[11.03deg] drop-shadow-[-8px_5px_4px_rgba(0,0,0,0.25)] hover:-rotate-[8deg] transition-transform duration-500 cursor-pointer"
              title="ARVANA Store UI"
            >
              <img
                src="/assets/figma/27bb988a2711fdae9ab371f7804e12396838d6b3.png"
                alt="ARVANA App UI Preview Left"
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right Phone (tilted +8.73deg, node 46:53) */}
            <div 
              className="absolute left-[30%] top-[1.8%] z-20 w-[80%] aspect-square rotate-[8.73deg] drop-shadow-[1px_5px_4px_rgba(0,0,0,0.25)] hover:rotate-[6deg] transition-transform duration-500 cursor-pointer"
              title="ARVANA Virtual Optic Experience"
            >
              <img
                src="/assets/figma/f98519eb5eaab048759d3348e24ef60562f9a688.png"
                alt="ARVANA App UI Preview Right"
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

        </div>

        {/* Bottom: Row of 5 ARVANA App Screens (Desktop exact 1271px, Mobile horizontal snap carousel with peek) */}
        <div className="w-full lg:w-[1271px] mx-auto mt-4 sm:mt-6 overflow-x-auto lg:overflow-x-visible pb-4 pt-1 snap-x snap-mandatory scrollbar-none">
          <div className="flex items-start lg:justify-between gap-4 lg:gap-[31px] w-max lg:w-full px-2 lg:px-0">
            {arvanaScreens.map((screen, idx) => (
              <div
                key={idx}
                className="w-[185px] sm:w-[215px] lg:w-[228px] h-[390px] sm:h-[460px] lg:h-[494px] shrink-0 snap-start rounded-[10px] overflow-hidden shadow-[0px_7px_13.3px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:shadow-[0px_16px_28px_rgba(0,0,0,0.3)] transition-all duration-300 group cursor-pointer bg-white"
                title={screen.title}
              >
                <img
                  src={screen.src}
                  alt={screen.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-[10px]"
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
