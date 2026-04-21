import Image from 'next/image';
import Logo from '../../../assets/Copy of Logo.webp';
import Carousel from '../../components/Carousel';
import FlipCard from '../../components/FlipCard';

export default function LorehollowPage() {
  const cards = [
    { title: 'Tale of the Hollow', text: 'Short description for card 1.' },
    { title: 'The Old Grove', text: 'Short description for card 2.' },
    { title: 'Fae Market', text: 'Short description for card 3.' },
    { title: 'Midnight Parade', text: 'Short description for card 4.' },
    { title: 'Moonlight Crafts', text: 'Short description for card 5.' },
    { title: 'Lantern Procession', text: 'Short description for card 6.' },
  ];

  return (
    <div className="px-6">
      {/* Hero text */}
      <section className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Lorehollow</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          A short hero blurb about Lorehollow. Replace with the real hero copy
          describing the place, dates, and quick call-to-action.
        </p>
      </section>

      {/* Centered image */}
      <div className="max-w-3xl mx-auto py-6 flex items-center justify-center">
        <div className="w-full max-w-lg rounded-md overflow-hidden shadow-lg">
          <Image src={Logo} alt="Lorehollow" width={1200} height={800} className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Carousel of flippable cards */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 text-center">Highlights</h2>
        <Carousel>
          {cards.map((c, i) => (
            <div key={i} className="snap-start">
              <FlipCard image={Logo} title={c.title} backText={c.text} />
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
}
