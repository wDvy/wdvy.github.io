import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';
import Footer from '../components/Footer';
import ThemeDebugPanel from '../components/ThemeDebugPanel';
import { THEME_INIT_SCRIPT } from '../lib/theme';

const GA_MEASUREMENT_ID = 'G-63PFBBNT7R';

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
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        {process.env.NODE_ENV === 'development' ? <ThemeDebugPanel /> : null}
        {children}
        <Footer />
      </body>
    </html>
  );
}
