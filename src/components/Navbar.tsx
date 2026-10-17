import React, { useState, useEffect } from 'react';
import { useAudio } from '../context/AudioContext';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'pcr-cup', label: 'PCR Cup' },
  { id: 'jti-expo', label: 'JTI Expo' },
  { id: '4c', label: '4C' },
  { id: 'works', label: 'Works' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const { isMuted, toggleMute, isPlaying } = useAudio();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none transition-all duration-300"
        style={{
          paddingTop: 'max(16px, env(safe-area-inset-top, 16px))',
          paddingLeft: 'max(16px, env(safe-area-inset-left, 16px))',
          paddingRight: 'max(16px, env(safe-area-inset-right, 16px))',
        }}
      >
        {/* DESKTOP NAVBAR (>= 768px): Full 7-item glassmorphism pill */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex pointer-events-auto glass-nav px-3 py-2 rounded-full items-center gap-1 md:gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/60 transition-all duration-300"
        >
          {/* Brand Dot / Logo Icon */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1.5 pl-2 pr-1.5 py-1 text-left focus:outline-none focus:ring-2 focus:ring-[#e4281f] rounded-full min-h-[44px]"
            aria-label="Go to top"
          >
            <div className="w-5 h-5 rounded-full bg-[#e4281f] flex items-center justify-center shadow-xs">
              <span className="text-[10px] font-black text-white leading-none">O</span>
            </div>
            <span className="font-['Montserrat'] font-black text-xs text-[#1e1e1e] tracking-tight">
              OTHMAR
            </span>
          </button>

          <div className="h-4 w-[1px] bg-black/10 mx-1" />

          {/* Navigation Items */}
          <div className="flex items-center gap-0.5 md:gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3 py-2 rounded-full font-['Montserrat'] text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center ${
                    isActive
                      ? 'text-white bg-[#e4281f] shadow-[0_2px_10px_rgba(228,40,31,0.35)]'
                      : 'text-[#444] hover:text-[#1e1e1e] hover:bg-black/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="h-4 w-[1px] bg-black/10 mx-1" />

          {/* BGM Toggle Button (>=44px touch target) */}
          <button
            id="btn-bgm-toggle"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
            className={`flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e4281f] ${
              isMuted
                ? 'bg-black/5 text-[#888] hover:bg-black/10'
                : 'bg-[#e4281f]/10 text-[#e4281f] hover:bg-[#e4281f]/20'
            }`}
            title={isMuted ? 'Unmute BGM' : 'Mute BGM'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <div className="flex items-center gap-0.5">
                <Volume2 className="w-4 h-4 animate-pulse" />
                {isPlaying && (
                  <span className="flex items-end gap-0.5 h-3 ml-0.5">
                    <span className="w-0.5 h-1.5 bg-[#e4281f] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-0.5 h-3 bg-[#e4281f] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-0.5 h-2 bg-[#e4281f] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                )}
              </div>
            )}
          </button>
        </nav>

        {/* MOBILE COMPACT BAR (< 768px): Logo Left, BGM + Hamburger Right */}
        <div className="flex md:hidden w-full max-w-[440px] pointer-events-auto glass-nav px-3.5 py-1.5 rounded-full items-center justify-between shadow-[0_8px_25px_rgb(0,0,0,0.08)] border border-white/60">
          {/* Logo OTHMAR */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-left focus:outline-none focus:ring-2 focus:ring-[#e4281f] rounded-full min-h-[44px] pr-2"
            aria-label="Go to top"
          >
            <div className="w-6 h-6 rounded-full bg-[#e4281f] flex items-center justify-center shadow-xs">
              <span className="text-[11px] font-black text-white leading-none">O</span>
            </div>
            <span className="font-['Montserrat'] font-black text-sm text-[#1e1e1e] tracking-tight">
              OTHMAR
            </span>
          </button>

          <div className="flex items-center gap-1.5">
            {/* Mobile BGM Button (>=44x44px target) */}
            <button
              id="btn-bgm-toggle-mobile"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
              className={`flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e4281f] ${
                isMuted
                  ? 'bg-black/5 text-[#888]'
                  : 'bg-[#e4281f]/10 text-[#e4281f]'
              }`}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <div className="flex items-center gap-0.5">
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  {isPlaying && (
                    <span className="flex items-end gap-0.5 h-3 ml-0.5">
                      <span className="w-0.5 h-1.5 bg-[#e4281f] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-0.5 h-3 bg-[#e4281f] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-0.5 h-2 bg-[#e4281f] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                  )}
                </div>
              )}
            </button>

            {/* Hamburger Button (>=44x44px target) */}
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label="Open navigation menu"
              className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full bg-black/5 text-[#1e1e1e] hover:bg-black/10 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#e4281f]"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* FULLSCREEN MOBILE THEMED DRAWER (< 768px) */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#f4f7f4] bg-grid-lines text-[#1e1e1e] p-6 overflow-y-auto"
          style={{
            paddingTop: 'max(24px, env(safe-area-inset-top, 24px))',
            paddingBottom: 'max(24px, env(safe-area-inset-bottom, 24px))',
            paddingLeft: 'max(24px, env(safe-area-inset-left, 24px))',
            paddingRight: 'max(24px, env(safe-area-inset-right, 24px))',
          }}
        >
          {/* Ambient blurred theme blob */}
          <div className="absolute top-10 right-4 w-64 h-64 rounded-full bg-red-400/15 blur-[70px] pointer-events-none" />
          <div className="absolute bottom-10 left-4 w-72 h-72 rounded-full bg-blue-500/15 blur-[80px] pointer-events-none" />

          {/* Drawer Top Header */}
          <div className="relative z-10 flex items-center justify-between pb-6 border-b border-black/10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#e4281f] flex items-center justify-center shadow-xs">
                <span className="text-xs font-black text-white leading-none">O</span>
              </div>
              <span className="font-['Montserrat'] font-black text-base text-[#1e1e1e] tracking-tight">
                OTHMAR
              </span>
            </div>

            <button
              id="btn-mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full bg-black/5 text-[#1e1e1e] hover:bg-[#e4281f] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="relative z-10 flex flex-col gap-2 my-auto py-8">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleMobileNavClick(item.id)}
                  className={`group flex items-center justify-between text-left py-3 px-4 rounded-2xl min-h-[52px] font-['Montserrat'] text-2xl font-black transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#e4281f] bg-[#e4281f]/10'
                      : 'text-[#1e1e1e] hover:text-[#e4281f] hover:bg-black/5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-medium text-black/30">
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#e4281f] shadow-[0_0_8px_#e4281f]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Drawer Footer info */}
          <div className="relative z-10 pt-4 border-t border-black/10 flex items-center justify-between text-xs text-black/50 font-['Montserrat']">
            <span>Portofolio 2026</span>
            <span>M. Othmar Safaraz</span>
          </div>
        </div>
      )}
    </>
  );
};
