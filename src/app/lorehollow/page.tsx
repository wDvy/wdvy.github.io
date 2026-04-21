import Image from 'next/image';
import Logo from '../../../assets/Copy of Logo.webp';
import Navbar from '../../components/Navbar';
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
      <Navbar />

      {/* Hero with background image */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <Image src={Logo} alt="Lorehollow hero" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="max-w-4xl mx-auto text-center py-24 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-50">Lorehollow</h1>
          <p className="mt-4 text-zinc-100/90">
            A short hero blurb about Lorehollow. Replace with the real hero copy
            describing the place, dates, and quick call-to-action.
          </p>
        </div>
      </section>

      {/* Centered image */}
      <div className="max-w-3xl mx-auto py-6 flex items-center justify-center">
        <div className="w-full max-w-lg rounded-md overflow-hidden shadow-lg">
          <Image src={Logo} alt="Lorehollow" width={1200} height={800} className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Grid of larger flippable cards */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 text-center">Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {cards.map((c, i) => (
            <div key={i}>
              <FlipCard image={Logo} title={c.title} backText={c.text} className="h-[28rem]" />
            </div>
          ))}
        </div>
      </section>
      
        {/* Two-column section below cards: image left (1/3), text right (2/3) */}
        <section className="max-w-6xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex items-center justify-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-md flex items-center justify-center">
                <Image src={Logo} alt="Lorehollow detail" fill className="object-cover" />
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">About Lorehollow</h3>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                This section contains header and explanatory text on the right. Replace
                this placeholder with the actual content you want to display about
                Lorehollow — details, schedule, and any important information.
              </p>
            </div>
          </div>
        </section>
    </div>
  );
}
