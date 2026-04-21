'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false); // desktop festivals dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu
  const [mobileFestOpen, setMobileFestOpen] = useState(false); // mobile festivals submenu
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        // close immediately on outside click and clear any pending timer
        setOpen(false);
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
      }
    }
    document.addEventListener('mousedown', handleDocClick);
    return () => {
      document.removeEventListener('mousedown', handleDocClick);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center shrink-0">
              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-zinc-200 dark:bg-zinc-700 rounded-md flex items-center justify-center text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-50">
                MMF
              </div>
              <span className="ml-3 hidden sm:inline text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-50">
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm sm:text-base text-zinc-700 hover:text-black dark:text-zinc-300">
                Home
              </Link>
              <Link href="/markies" className="text-sm sm:text-base text-zinc-700 hover:text-black dark:text-zinc-300">
                Markies
              </Link>


              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => {
                  if (closeTimeoutRef.current) {
                    clearTimeout(closeTimeoutRef.current);
                    closeTimeoutRef.current = null;
                  }
                  setOpen(true);
                }}
                onMouseLeave={() => {
                  if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = window.setTimeout(() => {
                    setOpen(false);
                    closeTimeoutRef.current = null;
                  }, 250) as unknown as number;
                }}
              >
                <button
                  onClick={() => setOpen((s) => !s)}
                  aria-expanded={open}
                  aria-controls="festivals-menu"
                  className="flex items-center text-sm sm:text-base text-zinc-700 hover:text-black dark:text-zinc-300"
                >
                  Festivals
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 011.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  id="festivals-menu"
                  className={`absolute z-20 mt-2 w-48 bg-white dark:bg-zinc-900 rounded-md shadow-lg py-1 ${open ? 'block' : 'hidden'}`}
                  onMouseEnter={() => {
                    if (closeTimeoutRef.current) {
                      clearTimeout(closeTimeoutRef.current);
                      closeTimeoutRef.current = null;
                    }
                  }}
                >
                  <Link
                    href="/festivals/louisville-2025"
                    className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  >
                    Louisville 2025
                  </Link>
                  <Link
                    href="/festivals/louisville-2026"
                    className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  >
                    Louisville 2026
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  >
                    TBD
                  </Link>
                </div>
              </div>

              <Link
                href="/lorehollow"
                className="text-sm sm:text-base text-zinc-700 hover:text-black dark:text-zinc-300"
              >
                Lorehollow
              </Link>
              <Link
                href="/gazette"
                className="text-sm sm:text-base text-zinc-700 hover:text-black dark:text-zinc-300"
              >
                Gazette
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 mr-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-zinc-900 dark:text-zinc-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-zinc-900 dark:text-zinc-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            <Link
              href="#"
              className="ml-4 px-3 py-2 rounded-md bg-emerald-600 text-white text-sm sm:text-base"
            >
              Tickets
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu content */}
      <div className={`md:hidden ${mobileOpen ? 'block' : 'hidden'} bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800`}>
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link href="/markies" className="block px-2 py-2 rounded text-zinc-700 dark:text-zinc-300">
            Markies
          </Link>

          <button
            className="w-full flex justify-between items-center px-2 py-2 text-zinc-700 dark:text-zinc-300"
            onClick={() => setMobileFestOpen((s) => !s)}
            aria-expanded={mobileFestOpen}
          >
            <span>Festivals</span>
            <svg className={`h-4 w-4 transform ${mobileFestOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 011.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z" />
            </svg>
          </button>

          <div className={`${mobileFestOpen ? 'block' : 'hidden'} pl-4`}>
            <Link href="/festivals/louisville-2025" className="block px-2 py-2 text-zinc-700 dark:text-zinc-300">
              Louisville 2025
            </Link>
            <Link href="/festivals/louisville-2026" className="block px-2 py-2 text-zinc-700 dark:text-zinc-300">
              Louisville 2026
            </Link>
          </div>

          <Link href="/lorehollow" className="block px-2 py-2 rounded text-zinc-700 dark:text-zinc-300">
            Lorehollow
          </Link>

          <Link href="/gazette" className="block px-2 py-2 rounded text-zinc-700 dark:text-zinc-300">
            Gazette
          </Link>
        </div>
      </div>
    </nav>
  );
}
