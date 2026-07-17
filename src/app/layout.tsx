import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Footer from '../components/Footer';

const THEME_INIT_SCRIPT = `(function(){try{var storageKey='mmf-theme';var root=document.documentElement;var stored=localStorage.getItem(storageKey);var theme=(stored==='light'||stored==='dark')?stored:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');root.classList.remove('light','dark');root.classList.add(theme);root.style.setProperty('color-scheme',theme);root.setAttribute('data-theme',theme);}catch(e){}})();`;

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const gameReality = localFont({
  src: [
    {
      path: '../../public/assets/fonts/game-reality-regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-game-reality',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Magical Midwinter',
  description: 'Magical Midwinter Home Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${gameReality.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
