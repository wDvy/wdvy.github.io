'use client';
import Image from 'next/image';
import { Logo, Banner, SantaMagic } from '../images';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import IntroOverlay from '../components/IntroOverlay';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const INTRO_STORAGE_KEY = 'intro-seen';

export default function Home() {
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
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 font-sans">
      {!entered && <IntroOverlay onEnter={handleEnter} />}
      {/* Hero banner (top) */}
      <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
        <Image
          src={Banner}
          alt="Magical Midwinter Market Logo"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-100"
          priority
          quality={100}
        />
      </section>

      {/* Navbar (client) */}
      <Navbar />

      {/* Introduction section */}
      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6"
            style={{ fontFamily: 'Game&Reality, serif' }}
          >
            What is Magical Midwinter?
          </h2>
          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            Combining your favorite parts of a renaissance festival, a mysterious night market, and
            a live Dungeons and Dragons campaign, Magical Midwinter invites you to leave mundanity
            behind and embrace your magical self.
          </p>
        </div>
      </main>

      {/* Feature section: Portal */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 w-full flex items-center justify-center">
              <Image
                src={SantaMagic}
                alt="Magical Midwinter Market Logo"
                width={400}
                height={400}
                className="w-full h-auto max-w-sm object-contain"
                priority
              />
            </div>
            <div className="md:order-1">
              <h2
                className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4"
                style={{ fontFamily: 'Game&Reality, serif' }}
              >
                Step Through the Portal
              </h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Emerge into the Magical Midwinter Marketplace where quests, shopping, mysteries and
                more await you. Learn more about furthering your magical education by visiting the
                professors of Lorehollow Academy at their popup bookstore.
              </p>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Will you choose to specialize in plant-speaking as a Sylvan from House Ashthorn, or
                will you learn the ancient art-craft of forging spells into metal as an Artificer in
                House Ironstag?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature section: Marketplace & Tavern */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full flex items-center justify-center">
              <Image
                src={Logo}
                alt="Magical Midwinter Market Logo"
                width={400}
                height={400}
                className="w-full h-auto max-w-sm object-contain"
                priority
              />
            </div>

            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4"
                style={{ fontFamily: 'Game&Reality, serif' }}
              >
                Experience the Marketplace
              </h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                After working up a thirst, stop by the tavern to grab a drink and gossip with the
                barkeep – who knows what rumors you might uncover!
              </p>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Do your holiday shopping for your magical friends and family. The marketplace is the
                perfect place to pick up magical necessaries like specialty potions, enchanting
                artifacts, books of magic, and much more!
              </p>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-semibold text-amber-700 dark:text-amber-400">
                Most importantly – the marketplace won't be in your city for long and entrance is
                limited. Don't miss your chance to visit and purchase your entrance time today!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* social media section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-12">
              Explore more of the world of Magical Midwinter here on our website and our social
              media pages.
            </h3>
            <div className="flex justify-center items-center gap-8">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-zinc-900 dark:text-zinc-50 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-zinc-900 dark:text-zinc-50 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
