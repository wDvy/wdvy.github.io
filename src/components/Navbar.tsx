"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, []);

  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center shrink-0">
              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-zinc-200 dark:bg-zinc-700 rounded-md flex items-center justify-center text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-50">
                L
              </div>
              <span className="ml-3 hidden sm:inline text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Brand
              </span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <Link href="#" className="text-sm sm:text-base text-zinc-700 hover:text-black dark:text-zinc-300">
                Home
              </Link>

              <Link href="#" className="text-sm sm:text-base text-zinc-700 hover:text-black dark:text-zinc-300">
                About
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen((s) => !s)}
                  aria-expanded={open}
                  aria-controls="festivals-menu"
                  className="flex items-center text-sm sm:text-base text-zinc-700 hover:text-black dark:text-zinc-300"
                >
                  Festivals
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 011.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  id="festivals-menu"
                  className={`absolute z-20 mt-2 w-48 bg-white dark:bg-zinc-900 rounded-md shadow-lg py-1 ${open ? "block" : "hidden"}`}
                >
                  <Link href="#" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800">
                    Festival A
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800">
                    Festival B
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800">
                    Festival C
                  </Link>
                </div>
              </div>

              <Link href="#" className="text-sm sm:text-base text-zinc-700 hover:text-black dark:text-zinc-300">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <Link href="#" className="ml-4 px-3 py-2 rounded-md bg-emerald-600 text-white text-sm sm:text-base">
              Tickets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
