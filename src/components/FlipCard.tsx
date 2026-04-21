"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

type FlipCardProps = {
  image: StaticImageData | string;
  title: string;
  backText: string;
};

export default function FlipCard({ image, title, backText }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="min-w-[14rem] sm:min-w-[16rem] h-72" style={{ perspective: '1000px' }}>
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setFlipped((s) => !s);
        }}
        onClick={() => setFlipped((s) => !s)}
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4"
          style={{ backfaceVisibility: 'hidden' as const }}
        >
          <div className="w-full h-40 relative rounded-md overflow-hidden">
            <Image src={image} alt={title} fill sizes="(max-width: 640px) 80vw, 320px" className="object-cover" />
          </div>
          <h3 className="mt-3 text-lg font-semibold text-zinc-900">{title}</h3>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-zinc-50 rounded-lg shadow-md p-4 flex items-center justify-center text-zinc-700"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' as const }}
        >
          <p className="text-sm text-center">{backText}</p>
        </div>
      </div>
    </div>
  );
}
