'use client';

import { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme class before React hydrates to prevent flash
  useEffect(() => {
    const stored = localStorage.getItem('mmf-theme');
    const theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
    document.documentElement.style.setProperty('color-scheme', theme);
  }, []);

  return <>{children}</>;
}