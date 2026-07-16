import Navbar from '../../../components/Navbar';
import FestivalSection from '../../../components/FestivalSection';
import { Otho } from '../../../images';

type Section = {
  title: string;
  paragraphs: string[];
  imageSrc?: string;
};

export default function Home() {
  const sections: Section[] = [
    {
      title: 'The Marketplace Appears',
      paragraphs: [
        'The Magical Midwinter Marketplace is a fully transportable magical realm created and operated by the Market Master (known only to a select few as Marcus Nightingale).',
        'The realm manifests as a temperate wooded glade after passing through a doorway known as “the portal.”',
        'The portal is the key to the marketplace. It travels around the world, appearing in magical pockets of different cities to welcome magical folk to peruse the wares of the market.',
      ],
    },
    {
      title: 'Markies and True Markies',
      imageSrc: Otho,
      paragraphs: [
        'Only by passing through the portal are you able to reach the marketplace.',
        'The vendors and tradespeople who make their living at the marketplace are called “Markies” and often make their home with the marketplace for decades.',
        'Some families, like the Pikes, have been with the marketplace for several generations.',
        'The Markies welcome newcomers who serve the marketplace by completing enough quests and errands as “True Markies” and distinguish these attendees with a gold key pin.',
        'True Markies have their names recorded in the Tome of True Markies and get access to secret parts of the marketplace.',
      ],
    },
    {
      title: 'Louisville and Lorehollow',
      paragraphs: [
        'Last year, the portal manifested in Louisville, KY for the first time and partnered with Louisville’s magical school Lorehollow to invite the magical folk of the south to explore the marketplace.',
        'Lorehollow was founded in 1798 as the region’s premiere institution for magical higher education.',
        'Lorehollow consists of six distinct magical houses, all specializing in different areas of magical practice.',
      ],
    },
    {
      title: 'Victor Creo and the Veilbreakers',
      paragraphs: [
        'Two professors, Evanora Lace and Vesper Nightingale, were on site during the stay of the marketplace to meet prospective students and to administer MATs (Magical Alignment Tests) to determine a student’s magical aptitude and best house fit.',
        'Victor Creo, a former Lorehollow student, made the rounds of the marketplace, charming attendees and Markies alike with his musical talents and whispers of a new, unrestricted source of magic.',
        'The Lorehollow professors, especially Vesper Nightingale, were vehemently opposed to his spreading this information around the marketplace and tried to stop him by performing silencing hexes and teaching these “defensive spells” to market attendees.',
        'Followers of Victor received a VB temporary tattoo and information about a new group called the Veilbreakers.',
        'Followers of Lorehollow and Vesper Nightingale dispelled Victor on sight. Who did you side with?',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* Hero video (top) */}
      <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden bg-black">
        <video
          className="w-full h-full object-cover"
          src="/assets/video/HeroVid.mp4"
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

      <main className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 text-center">
          Louisville 2025
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 text-center max-w-3xl mx-auto"></p>
      </main>

      {sections.map((section, index) => (
        <FestivalSection
          key={section.title}
          title={section.title}
          paragraphs={section.paragraphs}
          imageSrc={section.imageSrc}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}
