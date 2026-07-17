'use client';

import Image from 'next/image';
import {
  AshThornCrest,
  BriarfangCrest,
  EmberwyldCrest,
  IronstagCrest,
  Logo,
  LorehollowTransparent,
  LorehollowTan,
  StormhollowCrest,
  WraithpineCrest,
  Vesper,
  Evanora,
} from '../../images';
import Navbar from '../../components/Navbar';
import FlipCard from '../../components/FlipCard';
import MarkieCard from '../../components/MarkieCard';
import { useEffect, useState } from 'react';

export default function LorehollowPage() {
  const [revealVisibleOnScroll, setRevealVisibleOnScroll] = useState(false);

  useEffect(() => {
    const check = () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 120;
      setRevealVisibleOnScroll(nearBottom);
    };

    let rafId: number | null = null;
    const scheduleCheck = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(() => {
        check();
        rafId = null;
      });
    };

    scheduleCheck();
    window.addEventListener('scroll', check, { passive: true });

    const onResize = () => scheduleCheck();
    window.addEventListener('resize', onResize);
    window.addEventListener('load', scheduleCheck);

    const observer = new ResizeObserver(() => {
      scheduleCheck();
    });
    observer.observe(document.body);

    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', scheduleCheck);
      observer.disconnect();
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const cards = [
    {
      title: 'Ashthorn',
      text: 'House Ashthorn nurtures students with abundant connections to the natural world and empathetic magics. ',
      Img: AshThornCrest,
      glowColor: 'var(--color-ashthorn)',
      backLinkHref: '/lorehollow/ashthorn',
      backLinkLabel: 'Explore Ashthorn',
    },
    {
      title: 'Ironstag',
      text: 'House Ironstag forges some of the strongest magic users who channel their deep wells of power into useful protective artifacts and devastating magical weapons.',
      Img: IronstagCrest,
      glowColor: 'var(--color-ironstag)',
      backLinkHref: '/lorehollow/ironstag',
      backLinkLabel: 'Explore Ironstag',
    },
    {
      title: 'Wraithpine',
      text: 'House Wraithpine sequesters the secret seekers and keepers of the world, revealing hidden and sacred knowledge only to those they deem worthy.',
      Img: WraithpineCrest,
      glowColor: 'var(--color-wraithpine)',
      backLinkHref: '/lorehollow/wraithpine',
      backLinkLabel: 'Explore Wraithpine',
    },
    {
      title: 'Briarfang',
      text: 'House Briarfang corrals the students with a wild edge, who prefer to live on the edge of magical society in communion with beasts and cryptids.',
      Img: BriarfangCrest,
      glowColor: 'var(--color-briarfang)',
      backLinkHref: '/lorehollow/briarfang',
      backLinkLabel: 'Explore Briarfang',
    },
    {
      title: 'Stormbreak',
      text: 'House Stormbreak shields the most tempestuous students and shows them how to hone their devastating physical magic. ',
      Img: StormhollowCrest,
      glowColor: 'var(--color-stormhollow)',
      backLinkHref: '/lorehollow/stormhollow',
      backLinkLabel: 'Explore Stormbreak',
    },
    {
      title: 'Emberwyld',
      text: 'House Emberwyld ignites students with the potential for great storytelling and leadership, feeding the flames of intense creation. ',
      Img: EmberwyldCrest,
      glowColor: 'var(--color-emberwyld)',
      backLinkHref: '/lorehollow/emberwyld',
      backLinkLabel: 'Explore Emberwyld',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[var(--color-parchment)] font-sans">
      <Navbar />

      {/* Hero section with Lorehollow transparent logo */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="mx-auto mb-2 w-full max-w-2xl">
            <Image
              src={LorehollowTan}
              alt="Lorehollow logo"
              width={800}
              height={800}
              className="mx-auto w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 rounded-3xl border border-zinc-200 bg-(--color-vellum) p-4 sm:p-6 shadow-lg md:p-8 dark:border-zinc-800 dark:bg-(--color-vellum)">
            <div>
              <h2
                className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50"
                style={{ fontFamily: 'Game&Reality, serif' }}
              >
                A school for magic, mystery, and mastery
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                Lorehollow was founded as a sister magical school to the University of Louisville in
                1798, drawing its spirit from Hecate rather than Minerva. The institution was built
                to offer a higher education in magic for students moving beyond secondary school.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                Its six founders each established a house rooted in a distinct branch of magic, from
                plantcraft and spellforging to shadowwork and flamecraft. Each house helps students
                cultivate their own natural gifts while developing discipline and community.
              </p>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                Today, Lorehollow continues that tradition through its Magical Alignment Test,
                specialty academies, and after-school tutoring for younger magical learners.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src={LorehollowTan}
                alt="Lorehollow crest illustration"
                width={700}
                height={700}
                className="w-full max-w-md rounded-2xl object-contain"
                hidden
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of larger flippable cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h1 className="text-4xl font-semibold text-zinc-900 dark:text-zinc-50 text-center">
          The Houses
        </h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 align-center text-center mt-4">
          Click to learn more about each house's unique magical focus and traditions:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {cards.map((c, i) => (
            <div key={i}>
              <FlipCard
                image={c.Img}
                title={c.title}
                backText={c.text}
                glowColor={c.glowColor}
                backLinkHref={c.backLinkHref}
                backLinkLabel={c.backLinkLabel}
                className="h-112"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="gap-12 items-center">
            {/* Add Carosel here */}
            <div className="md:order-1">
              <h2
                className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4"
                style={{ fontFamily: 'Game&Reality, serif' }}
              >
                Magical alignment Tests (MATs)
              </h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                The Magical Alignment Test is given to a magical person when they decide to pursue
                magical education at the tertiary level to determine their magical potencies.
                Lorehollow Academy has a distinct MAT protocol that also aligns a magic user with
                the particular Lorehollow house where they will best thrive. The MAT is a deeply
                personal experience, a one-on-one guided encounter with a faculty member where they
                will guide you through a series of intuitive based tests to discover your true
                calling.
              </p>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                Schedule your MAT today at the Magical Midwinter Market - however due to the
                demanding, individualized attention and empathetic magic needed to perform spots are
                extremely limited and fill up within the first hour of opening. Spots can be
                reserved in advance to the market opening, and that is recommended for those who
                know they’d like to participate. You must have an observer, traveler, apprentice or
                true markie pass to enter the market in addition to your MAT add-on. The MAT is
                suitable for ages 10 and up but is most effective for those seeking deep magical
                introspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4"
          style={{ fontFamily: 'Game&Reality, serif' }}
        >
          Professors of Lorehollow
        </h2>
        <MarkieCard
          name="Vesper Nightingale"
          bio={
            'Current head of House Emberwyld at Lorehollow. A true Emberwyld protégé, Vesper graduated Lorehollow with achievements in both the storyspinner and firestoker class, a rare distinction, and how she earned acceptance into the family Nightingale. Now, Vesper leads students as one of the two guidance counselors available to conduct MATs. '
          }
          image={Vesper}
          instagramUrl="https://www.instagram.com/vesper_nightingale/"
          instagramHandle="@vesper_nightingale"
          imageAlt="Vesper Nightingale"
        />

        <MarkieCard
          name="Evanora Lace"
          bio={
            'Current head of House Ashthorn at Lorehollow. Evanora is a truly devoted soul, both to her craft and to her students. Evanora is a gifted sylvan and has a companion Soulgazer Lily, a plant that rarely chooses to bond with humans. With her Soulgazer Lily at her side, Evanora can see right into the heart of any being and sense their true intentions… or so she thinks. '
          }
          image={Evanora}
          instagramUrl="https://www.instagram.com/evanoralace/"
          instagramHandle="@evanoralace"
          imageAlt="Evanora Lace"
          reverse
        />
      </div>

      {/* Page-only reveal: appears above footer only on Lorehollow page */}
      <div className="group footer-reveal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-center">
          <a
            href="/lorehollow/veilbreaker"
            className={`inline-block opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 text-sm text-zinc-700 dark:text-zinc-300 wave ${revealVisibleOnScroll ? 'reveal-visible' : ''}`}
          >
            Lorehollow LIES - seek the truth...
          </a>
        </div>
      </div>
    </div>
  );
}
