'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './FlipCard.module.css';

type FlipCardProps = {
  image: StaticImageData | string;
  title: string;
  backText: string;
  className?: string;
  glowColor?: string;
  backLinkHref?: string;
  backLinkLabel?: string;
};

export default function FlipCard({
  image,
  title,
  backText,
  className = '',
  glowColor = 'rgba(120, 87, 128, 0.35)',
  backLinkHref,
  backLinkLabel = 'Learn more',
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${styles.flipCardRoot} w-full ${className}`}
      style={{ '--glow-color': glowColor } as React.CSSProperties}
    >
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setFlipped((s) => !s);
        }}
        onClick={() => setFlipped((s) => !s)}
        className={`${styles.flipCardInner} ${flipped ? styles.flipped : ''}`}
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* Front */}
        <div className={`${styles.flipCardFace} ${styles.front}`}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 80vw, 320px"
            className="object-cover"
          />
        </div>

        {/* Back */}
        <div
          className={`${styles.flipCardFace} ${styles.back}`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-base text-zinc-900 dark:text-zinc-100">{backText}</p>
            {backLinkHref ? (
              <Link
                href={backLinkHref}
                className="inline-flex items-center justify-center rounded-md bg-[var(--color-alchemy)] px-5 py-3 text-sm font-normal text-white shadow-md transition hover:bg-[var(--color-bloom)]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {backLinkLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
