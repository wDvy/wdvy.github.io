'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '../app/gallery/galleryImages';

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setActiveIndex((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [activeIndex, close, step]);

  const active = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            onClick={() => setActiveIndex(i)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg border border-[var(--color-zinc-200)] dark:border-[var(--color-zinc-800)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-alchemy)]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={900}
              className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
            />
            {image.caption && (
              <span className="block px-3 py-2 text-left text-sm text-zinc-600 dark:text-zinc-400">
                {image.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-md p-2 text-3xl leading-none text-white hover:text-[var(--color-bloom)]"
          >
            &times;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-2 rounded-md p-3 text-4xl leading-none text-white hover:text-[var(--color-bloom)] sm:left-6"
          >
            &lsaquo;
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={active.alt}
              width={1600}
              height={1200}
              className="mx-auto h-auto max-h-[80vh] w-auto rounded-md object-contain"
            />
            {active.caption && (
              <figcaption className="mt-3 text-center text-sm text-zinc-200">
                {active.caption}
              </figcaption>
            )}
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-2 rounded-md p-3 text-4xl leading-none text-white hover:text-[var(--color-bloom)] sm:right-6"
          >
            &rsaquo;
          </button>
        </div>
      )}
    </>
  );
}
