'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function PrecisionCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isClickable, setIsClickable] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      const clickableTarget = target.closest('button, a, input, select, textarea, [role="button"]');

      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
        setIsClickable(true);
      } else if (clickableTarget) {
        setCursorText('');
        setIsClickable(true);
      } else {
        setCursorText('');
        setIsClickable(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Precision Center Pin-Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#12324E] -translate-x-1/2 -translate-y-1/2"
        style={{ x: mouseX, y: mouseY }}
      />

      {/* Trailing Accent Ring: Shrinks out of the way when hovering over buttons */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full -translate-x-1/2 -translate-y-1/2 border border-[#1D5382]/40 transition-all duration-200"
        animate={{
          scale: isClickable ? (cursorText ? 1.4 : 0.4) : 1,
          opacity: isClickable && !cursorText ? 0 : 0.6,
        }}
        style={{
          x: smoothX,
          y: smoothY,
          width: cursorText ? 56 : 24,
          height: cursorText ? 56 : 24,
        }}
      >
        {cursorText && (
          <span className="text-[7.5px] font-mono font-bold tracking-widest text-[#12324E] uppercase whitespace-nowrap bg-white/90 px-1 py-0.5 rounded-[1px] border border-[#D8E2EC]">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
