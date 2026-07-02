'use client';

import { useEffect } from 'react';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  root.style.setProperty('color-scheme', theme);
  root.dataset.theme = theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme class before React hydrates to prevent flash
  useEffect(() => {
    const stored = window.localStorage.getItem('mmf-theme');
    const theme =
      stored === 'light' || stored === 'dark'
        ? stored
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';

    applyTheme(theme);
  }, []);

  return <>{children}</>;
}
