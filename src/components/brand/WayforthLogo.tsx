'use client';

import React from 'react';
import Image from 'next/image';

interface WayforthLogoProps {
  variant?: 'full' | 'mark' | 'compact';
  theme?: 'dark' | 'light' | 'gold';
  className?: string;
  sublineText?: string;
  use3DMark?: boolean;
}

export function WayforthLogo({
  variant = 'full',
  theme = 'dark',
  className = '',
  sublineText = 'ACADEMIC & RESEARCH ADVISORY',
}: WayforthLogoProps) {
  const isLight = theme === 'light'; // Light for dark backgrounds (Footer)

  const logoSrc = isLight
    ? '/brand/wayforth-wordmark-stars-light.png'
    : '/brand/wayforth-wordmark-stars.png';

  const sublineColor = isLight ? 'text-[#CBD5E1]' : 'text-[#4A607A]';

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <div className="relative h-9 sm:h-11 w-auto flex items-center">
        <Image
          src={logoSrc}
          alt="Wayforth"
          width={180}
          height={68}
          className="h-9 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          priority
        />
      </div>
      {variant === 'full' && (
        <span
          className={`text-[8px] sm:text-[8.5px] uppercase font-sans font-semibold tracking-[0.22em] ${sublineColor} mt-1`}
        >
          {sublineText}
        </span>
      )}
    </div>
  );
}
