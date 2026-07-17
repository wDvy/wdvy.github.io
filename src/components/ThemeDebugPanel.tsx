'use client';

import { useEffect, useState } from 'react';
import { THEME_STORAGE_KEY } from '../lib/theme';

type ThemeDebugState = {
  className: string;
  dataTheme: string;
  localTheme: string;
  systemTheme: 'light' | 'dark';
  colorScheme: string;
  background: string;
  foreground: string;
  vellum: string;
  parchment: string;
};

function readThemeState(): ThemeDebugState {
  const root = document.documentElement;
  const computed = window.getComputedStyle(root);
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  return {
    className: root.className,
    dataTheme: root.dataset.theme ?? '(none)',
    localTheme: window.localStorage.getItem(THEME_STORAGE_KEY) ?? '(none)',
    systemTheme,
    colorScheme: root.style.getPropertyValue('color-scheme') || '(unset)',
    background: computed.getPropertyValue('--background').trim() || '(unset)',
    foreground: computed.getPropertyValue('--foreground').trim() || '(unset)',
    vellum: computed.getPropertyValue('--color-vellum').trim() || '(unset)',
    parchment: computed.getPropertyValue('--color-parchment').trim() || '(unset)',
  };
}

export default function ThemeDebugPanel() {
  const [state, setState] = useState<ThemeDebugState | null>(null);

  useEffect(() => {
    const update = () => setState(readThemeState());
    const root = document.documentElement;
    const darkMedia = window.matchMedia('(prefers-color-scheme: dark)');

    update();

    const observer = new MutationObserver(update);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ['class', 'data-theme', 'style'],
    });

    window.addEventListener('storage', update);
    darkMedia.addEventListener('change', update);

    return () => {
      observer.disconnect();
      window.removeEventListener('storage', update);
      darkMedia.removeEventListener('change', update);
    };
  }, []);

  if (!state) {
    return null;
  }

  return (
    <aside className="fixed bottom-3 right-3 z-[1000] max-w-xs rounded-md border border-zinc-400 bg-zinc-950/90 p-3 text-xs leading-5 text-zinc-100 shadow-lg">
      <p className="font-semibold text-zinc-50">Theme Debug (dev only)</p>
      <p>data-theme: {state.dataTheme}</p>
      <p>class: {state.className || '(none)'}</p>
      <p>localStorage: {state.localTheme}</p>
      <p>system: {state.systemTheme}</p>
      <p>style color-scheme: {state.colorScheme}</p>
      <p>--background: {state.background}</p>
      <p>--foreground: {state.foreground}</p>
      <p>--color-vellum: {state.vellum}</p>
      <p>--color-parchment: {state.parchment}</p>
    </aside>
  );
}
