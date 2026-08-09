'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { smallLogo } from '../images';
import ThemeToggle from './ThemeToggle';

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
    <nav className="relative sticky top-0 z-40 bg-[var(--color-vellum)] dark:bg-[var(--color-vellum)] border-b border-[var(--color-zinc-200)] dark:border-[var(--color-zinc-800)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[var(--color-alchemy)] via-[rgba(184,43,159,0.4)] to-transparent opacity-80 blur-xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            {/* Mobile home button */}
            <Link
              href="/"
              className="md:hidden flex items-center rounded-md p-2 hover:bg-[var(--color-zinc-200)] dark:hover:bg-[var(--color-zinc-800)]"
            >
              <Image
                src={smallLogo}
                alt="Home"
                width={100}
                height={100}
                className="h-10 w-20 object-contain"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm sm:text-base text-[var(--color-comfort)] hover:text-[var(--color-alchemy)] dark:text-[var(--color-comfort)] dark:hover:text-[var(--color-bloom)]"
              >
                Home
              </Link>
              <Link
                href="/markies"
                className="text-sm sm:text-base text-[var(--color-comfort)] hover:text-[var(--color-alchemy)] dark:text-[var(--color-comfort)] dark:hover:text-[var(--color-bloom)]"
              >
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
                  className="flex items-center text-sm sm:text-base text-[var(--color-comfort)] hover:text-[var(--color-alchemy)] dark:text-[var(--color-comfort)] dark:hover:text-[var(--color-bloom)]"
                >
                  Cities
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
                  className={`absolute z-20 mt-2 w-48 bg-[var(--color-vellum)] dark:bg-[var(--color-vellum)] rounded-md shadow-lg py-1 border border-[var(--color-zinc-200)] dark:border-[var(--color-zinc-800)] ${open ? 'block' : 'hidden'}`}
                  onMouseEnter={() => {
                    if (closeTimeoutRef.current) {
                      clearTimeout(closeTimeoutRef.current);
                      closeTimeoutRef.current = null;
                    }
                  }}
                >
                  <Link
                    href="/festivals/louisville-2025"
                    className="block px-4 py-2 text-sm text-[var(--color-comfort)] hover:bg-[var(--color-parchment)] dark:hover:bg-[var(--color-zinc-800)]"
                  >
                    Louisville 2025
                  </Link>
                  <Link
                    href="/festivals/louisville-2026"
                    className="block px-4 py-2 text-sm text-[var(--color-comfort)] hover:bg-[var(--color-parchment)] dark:hover:bg-[var(--color-zinc-800)]"
                  >
                    Louisville 2026
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-[var(--color-comfort)] hover:bg-[var(--color-parchment)] dark:hover:bg-[var(--color-zinc-800)]"
                  >
                    TBD
                  </Link>
                </div>
              </div>

              <Link
                href="/lorehollow"
                className="text-sm sm:text-base text-[var(--color-comfort)] hover:text-[var(--color-alchemy)] dark:text-[var(--color-comfort)] dark:hover:text-[var(--color-bloom)]"
              >
                Lorehollow
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 mr-2 rounded-md hover:bg-[var(--color-zinc-200)] dark:hover:bg-[var(--color-zinc-800)]"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[var(--color-enchanted)] dark:text-[var(--color-enchanted)]"
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
                  className="h-6 w-6 text-[var(--color-enchanted)] dark:text-[var(--color-enchanted)]"
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
              href="/tickets"
              className="ml-4 px-3 py-2 rounded-md bg-[var(--color-alchemy)] hover:bg-[var(--color-bloom)] text-white text-sm sm:text-base transition-colors"
            >
              <span>Tickets</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu content */}
      <div
        className={`md:hidden ${mobileOpen ? 'block' : 'hidden'} bg-[var(--color-vellum)] dark:bg-[var(--color-vellum)] border-t border-[var(--color-zinc-200)] dark:border-[var(--color-zinc-800)]`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link
            href="/"
            className="block px-2 py-2 rounded text-[var(--color-comfort)] hover:bg-[var(--color-parchment)] dark:hover:bg-[var(--color-zinc-800)]"
          >
            Home
          </Link>
          <Link
            href="/markies"
            className="block px-2 py-2 rounded text-[var(--color-comfort)] hover:bg-[var(--color-parchment)] dark:hover:bg-[var(--color-zinc-800)]"
          >
            Markies
          </Link>

          <button
            className="w-full flex justify-between items-center px-2 py-2 text-[var(--color-comfort)]"
            onClick={() => setMobileFestOpen((s) => !s)}
            aria-expanded={mobileFestOpen}
          >
            <span>Cities</span>
            <svg
              className={`h-4 w-4 transform ${mobileFestOpen ? 'rotate-180' : 'rotate-0'}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 011.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z" />
            </svg>
          </button>

          <div className={`${mobileFestOpen ? 'block' : 'hidden'} pl-4`}>
            <Link
              href="/festivals/louisville-2025"
              className="block px-2 py-2 text-[var(--color-comfort)]"
            >
              Louisville 2025
            </Link>
            <Link
              href="/festivals/louisville-2026"
              className="block px-2 py-2 text-[var(--color-comfort)]"
            >
              Louisville 2026
            </Link>
          </div>

          <Link
            href="/lorehollow"
            className="block px-2 py-2 rounded text-[var(--color-comfort)] hover:bg-[var(--color-parchment)] dark:hover:bg-[var(--color-zinc-800)]"
          >
            Lorehollow
          </Link>
        </div>
      </div>
    </nav>
  );
}
