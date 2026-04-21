"use client";

import React, { useRef } from 'react';

export default function Carousel({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  function scroll(dir: 'left' | 'right') {
    const el = containerRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const gap = 16; // approx gap in px matching Tailwind gap-4
    const amount = (first?.offsetWidth ?? el.clientWidth) + gap;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  }

  return (
    <div className="relative">
      <button
        aria-label="Previous"
        onClick={() => scroll('left')}
        className="hidden md:inline-flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 dark:bg-zinc-800/80 rounded-full shadow"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-900 dark:text-zinc-50" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 010 1.06L9.06 10l3.73 3.71a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0z" clipRule="evenodd" />
        </svg>
      </button>

      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {children}
      </div>

      <button
        aria-label="Next"
        onClick={() => scroll('right')}
        className="hidden md:inline-flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 dark:bg-zinc-800/80 rounded-full shadow"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-900 dark:text-zinc-50" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 010-1.06L10.94 10 7.21 6.29a.75.75 0 011.06-1.06l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
