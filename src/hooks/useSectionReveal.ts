import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface UseSectionRevealProps {
  sectionId: string;
  activeSection: string;
  selector?: string;
  yOffset?: number;
  duration?: number;
  stagger?: number;
}

// Track revealed sections across the session so animations only run ONCE per section
const revealedSections = new Set<string>();

export const useSectionReveal = <T extends HTMLElement = HTMLElement>({
  sectionId,
  activeSection,
  selector = '.reveal-item',
  yOffset = 40,
  duration = 0.95,
  stagger = 0.08,
}: UseSectionRevealProps) => {
  const containerRef = useRef<T>(null);
  const isRevealedRef = useRef<boolean>(revealedSections.has(sectionId));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll(selector);
    if (!targets || targets.length === 0) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. If section was already revealed previously or user prefers reduced motion:
    // keep elements completely visible, do not re-animate (maximum performance & lightweight)
    if (isRevealedRef.current || revealedSections.has(sectionId) || prefersReducedMotion) {
      revealedSections.add(sectionId);
      isRevealedRef.current = true;
      gsap.set(targets, { opacity: 1, y: 0, force3D: true, clearProps: 'transform,opacity' });
      return;
    }

    // 2. Section NOT yet entered: make elements invisible immediately
    gsap.set(targets, { opacity: 0, y: yOffset, force3D: true });

    const revealOnce = () => {
      if (isRevealedRef.current || revealedSections.has(sectionId)) return;
      isRevealedRef.current = true;
      revealedSections.add(sectionId);

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out',
        force3D: true,
        clearProps: 'transform,opacity',
      });
    };

    // Trigger reveal if this section is currently active
    if (activeSection === sectionId) {
      revealOnce();
      return;
    }

    // Also observe via IntersectionObserver as backup for natural scrolling
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !isRevealedRef.current) {
              revealOnce();
              if (observer) observer.disconnect();
              break;
            }
          }
        },
        {
          rootMargin: '0px 0px -10% 0px',
          threshold: 0.05,
        }
      );

      observer.observe(container);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [activeSection, sectionId, selector, yOffset, duration, stagger]);

  return containerRef;
};

