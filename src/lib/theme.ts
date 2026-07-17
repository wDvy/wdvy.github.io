export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'mmf-theme';

export function isTheme(value: string | null | undefined): value is Theme {
  return value === 'light' || value === 'dark';
}

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function resolvePreferredTheme(): Theme {
  if (typeof document !== 'undefined') {
    const attrTheme = document.documentElement.dataset.theme;
    if (isTheme(attrTheme)) {
      return attrTheme;
    }
  }

  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isTheme(stored)) {
      return stored;
    }
  }

  return getSystemTheme();
}

export function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') {
    return;
  }

  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  root.style.setProperty('color-scheme', theme);
  root.dataset.theme = theme;
}

export function persistTheme(theme: Theme): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export const THEME_INIT_SCRIPT = `(function(){try{var storageKey='${THEME_STORAGE_KEY}';var root=document.documentElement;var stored=localStorage.getItem(storageKey);var theme=(stored==='light'||stored==='dark')?stored:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');root.classList.remove('light','dark');root.classList.add(theme);root.style.setProperty('color-scheme',theme);root.setAttribute('data-theme',theme);}catch(e){}})();`;
