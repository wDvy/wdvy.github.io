import Image from 'next/image';
import {
  AshThornCrest,
  BriarfangCrest,
  EmberwyldCrest,
  IronstagCrest,
  Logo,
  LorehollowTransparent,
  StormhollowCrest,
  WraithpineCrest,
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
              src={LorehollowTransparent}
              alt="Lorehollow logo"
              width={800}
              height={800}
              className="mx-auto w-full h-auto object-contain"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-zinc-50">Lorehollow</h1>
          <p className="mt-4 max-w-3xl mx-auto">
            A short hero blurb about Lorehollow. Replace with the real hero copy describing the
            place, dates, and quick call-to-action.
          </p>
        </div>
      </section>

      {/* Grid of larger flippable cards */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 text-center">
          Highlights
        </h2>
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
          name="Lorehollow Prof"
          bio={
            'This section will contain bio information for the Lorehollow prof. It sits on the right for desktop and below the image on mobile. Replace with details, bios, or other relevant info.'
          }
          image={Logo}
          instagramUrl="https://instagram.com/"
          instagramHandle="Test Handle"
          imageAlt="Lorehollow detail"
        />
      </section>
    </div>
  );
}
