'use client';
import Image from 'next/image';
import Logo from '../../assets/Copy of Logo.webp';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import IntroOverlay from '../components/IntroOverlay';

const INTRO_STORAGE_KEY = 'intro-seen';

export default function Home() {

  //intro overlay state and handler
  // Start as "entered" to avoid flash, then check storage on mount
  const [entered, setEntered] = useState<boolean>(true);

  useEffect(() => {
    const seen = sessionStorage.getItem(INTRO_STORAGE_KEY);
    if (!seen) setEntered(false);
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem(INTRO_STORAGE_KEY, '1');
    setEntered(true);
  };



  return (

    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {!entered && <IntroOverlay onEnter={handleEnter} />}
      {/* Hero video (top) */}
      <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden bg-black">
        <video
          className="w-full h-full object-cover"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Hero video"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold"></h2>
            <p className="mt-2 max-w-2xl mx-auto text-sm md:text-lg"></p>
          </div>
        </div>
      </section>

      {/* Navbar (client) */}
      <Navbar />

      {/* Placeholder heading and text */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 text-center">
          What is the Magical Midwinter Festival?
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 text-center">
          This is placeholder body text for the home page. Replace with your own content when ready.
        </p>
      </main>

      {/* Two-column section: text (left) + image (right) */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
              Placeholder Left Heading
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              This is some placeholder text on the left column. Replace this with
              the real copy describing the image on the right. It will be
              responsive and stack on small screens.
            </p>
          </div>

          <div className="w-full flex items-center justify-center">
            <Image
              src={Logo}
              alt="Magical Midwinter Market Logo"
              width={600}
              height={600}
              className="w-full h-auto max-w-sm object-contain rounded-md shadow-lg"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
