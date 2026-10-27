'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check if user prefers reduced motion or is on a mobile touch device
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    // On mobile touch devices or reduced motion, rely on native momentum scrolling for 0ms TBT
    if (prefersReducedMotion || isTouchDevice) {
      const handleAnchorClick = (e: MouseEvent) => {
        const target = (e.target as HTMLElement).closest('a[href^="#"]');
        if (!target) return;
        const href = target.getAttribute('href');
        if (!href || href === '#' || href.length < 2) return;
        
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };

      document.addEventListener('click', handleAnchorClick);
      return () => {
        document.removeEventListener('click', handleAnchorClick);
      };
    }

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      prevent: (node) => {
        return (
          node.classList.contains('lenis-prevent') ||
          node.hasAttribute('data-lenis-prevent') ||
          Boolean(node.closest('[data-lenis-prevent]'))
        );
      },
    });

    // Expose lenis globally for programmatic scrolls
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 1.3 });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
