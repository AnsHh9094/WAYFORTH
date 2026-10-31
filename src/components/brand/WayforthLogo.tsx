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
  variant = 'compact',
  theme = 'dark',
  className = '',
  sublineText = '',
}: WayforthLogoProps) {
  // Theme color tokens - Dark for light backgrounds, Light for dark backgrounds (Default Dark Navy site)
  const isLight = theme === 'light';
  const logoSrc = isLight
    ? '/brand/wayforth-wordmark-stars-light.png'
    : '/brand/wayforth-wordmark-stars.png';

  const sublineColor = isLight ? 'text-[#CBD5E1]' : 'text-[#4A607A]';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <div className="flex flex-col">
        <Image
          src={logoSrc}
          alt="Wayforth"
          width={160}
          height={66}
          priority
          className="h-11 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
        />
        {variant === 'full' && sublineText && (
          <span
            className={`text-[7.5px] sm:text-[8px] uppercase font-sans font-medium tracking-[0.22em] ${sublineColor} -mt-0.5`}
          >
            {sublineText}
          </span>
        )}
      </div>
    </div>
  );
}
