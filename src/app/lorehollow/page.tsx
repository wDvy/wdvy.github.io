import Image from 'next/image';
import {
  AshThornCrest,
  BriarfangCrest,
  EmberwyldCrest,
  IronstagCrest,
  Logo,
  LorehollowTransparent,
  LorehollowGreen,
  StormhollowCrest,
  WraithpineCrest,
  Vesper,
  Evanora,
} from '../../images';
import Navbar from '../../components/Navbar';
import FlipCard from '../../components/FlipCard';
import MarkieCard from '../../components/MarkieCard';

export default function LorehollowPage() {
  const cards = [
    {
      title: 'Ashthorn',
      text: 'Short description for card 1.',
      Img: AshThornCrest,
      glowColor: 'var(--color-ashthorn)',
      backLinkHref: '/lorehollow',
      backLinkLabel: 'Explore Ashthorn',
    },
    {
      title: 'Ironstag',
      text: 'Short description for card 2.',
      Img: IronstagCrest,
      glowColor: 'var(--color-ironstag)',
      backLinkHref: '/lorehollow',
      backLinkLabel: 'Explore Ironstag',
    },
    {
      title: 'Wraithpine',
      text: 'Short description for card 3.',
      Img: WraithpineCrest,
      glowColor: 'var(--color-wraithpine)',
      backLinkHref: '/lorehollow',
      backLinkLabel: 'Explore Wraithpine',
    },
    {
      title: 'Briarfang',
      text: 'Short description for card 4.',
      Img: BriarfangCrest,
      glowColor: 'var(--color-briarfang)',
      backLinkHref: '/lorehollow',
      backLinkLabel: 'Explore Briarfang',
    },
    {
      title: 'Stormhollow',
      text: 'Short description for card 5.',
      Img: StormhollowCrest,
      glowColor: 'var(--color-stormhollow)',
      backLinkHref: '/lorehollow',
      backLinkLabel: 'Explore Stormhollow',
    },
    {
      title: 'Emberwyld',
      text: 'Short description for card 6.',
      Img: EmberwyldCrest,
      glowColor: 'var(--color-emberwyld)',
      backLinkHref: '/lorehollow',
      backLinkLabel: 'Explore Emberwyld',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />

      {/* Hero section with Lorehollow transparent logo */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="mx-auto mb-8 w-full max-w-md">
            <Image
              src={LorehollowGreen}
              alt="Lorehollow logo"
              width={800}
              height={800}
              className="mx-auto w-full h-auto object-contain"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-zinc-50">Lorehollow</h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 rounded-3xl border border-[var(--color-zinc-200)] bg-[var(--color-vellum)] p-8 shadow-lg md:grid-cols-2 md:p-10 dark:border-[var(--color-zinc-800)] dark:bg-[var(--color-vellum)]">
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
                src={LorehollowGreen}
                alt="Lorehollow crest illustration"
                width={700}
                height={700}
                className="w-full max-w-md rounded-2xl object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of larger flippable cards */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold text-zinc-900 dark:text-zinc-50 text-center">
          The Houses
        </h1>
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
                className="h-[28rem]"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <MarkieCard
          name="Vesper Nightingale"
          bio={
            'Current head of House Emberwyld at Lorehollow. A true Emberwyld protégé, Vesper graduated Lorehollow with achievements in both the storyspinner and firestoker class, a rare distinction, and how she earned acceptance into the family Nightingale. Now, Vesper leads students as one of the two guidance counselors available to conduct MATs. '
          }
          image={Vesper}
          instagramUrl="https://instagram.com/"
          instagramHandle="Test Handle"
          imageAlt="Vesper Nightingale"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <MarkieCard
          name="Evanora Lace"
          bio={
            'Current head of House Ashthorn at Lorehollow. Evanora is a truly devoted soul, both to her craft and to her students. Evanora is a gifted sylvan and has a companion Soulgazer Lily, a plant that rarely chooses to bond with humans. With her Soulgazer Lily at her side, Evanora can see right into the heart of any being and sense their true intentions… or so she thinks. '
          }
          image={Evanora}
          instagramUrl="https://instagram.com/"
          instagramHandle="Test Handle"
          imageAlt="Evanora Lace"
          reverse
        />
      </section>
    </div>
  );
}
