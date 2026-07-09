import Navbar from '../../components/Navbar';
import MarkieCard from '../../components/MarkieCard';
import { Amaryllis, LexiQuill, Logo, MarketMaster, Otho, Sable } from '../../images';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* Hero video (top) */}

      {/*
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
      */}

      {/* Navbar (client) */}
      <Navbar />

      {/* Placeholder heading and text */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 text-center">
          The Markies
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 text-center">
          {' '}
          The Markies are the group of folk that travel around the world with the Marketplace,
          selling their wares and services. A found family, the Markies are deeply loyal to each
          other and the Market Master.
        </p>
      </main>

      <MarkieCard
        name="The Market Master"
        bio={[
          'An ageless being over a millenia old, the Market Master is truly a mystery. Not much is known about him except that he must be incredibly powerful to maintain the pocket dimension of space time in which the marketplace is housed, as well as the movement and operation of the portal which allows visitors in and out.',
          'Usually a friendly, welcoming face, it is often whispered among Markies that one should never get on the Market Master’s bad side. People that do… are never seen again.',
          'Last year, to a select few loyal Veilbreakers, the Market Master revealed his true name… What is the Market Master’s true relationship to the Veilbreakers and the family Nightingale? How has he managed to live and stay so powerful for so long? And why do people keep going missing at the marketplace?',
        ]}
        image={MarketMaster}
        imageAlt="Markies detail"
        instagramUrl="https://instagram.com"
        instagramHandle="Example Handle"
      />

      <MarkieCard
        name="Lexi Quill"
        bio={[
          'Lexi Quill ran away to join the circus - or rather, the marketplace. Raised by non-magical parents, when Lexi’s gift for written magic began to make itself clear - words and ideas coming to life at the end of her quill - they reacted in fear.',
          'Lexi, never one for confrontation, found a home with the marketplace, where her talents were put to use instead of feared. She became the hub for errands, adventures and quests. Markies would bring tasks to her, and with a stroke of her quill, they would find the perfect person to complete them.',
          'As the resident market Quest Master, Lexi helped patrons at the market become True Markies - a status awarded to those guests, visitors, and travellers who showed true devotion to the marketplace by completing all quests posted.',
        ]}
        image={LexiQuill}
        imageAlt="Markies detail"
        instagramUrl="https://instagram.com"
        instagramHandle="Example Handle"
        reverse
      />

      <MarkieCard
        name="Otho Pike"
        bio={[
          'Of the long line of Pikes who have worked and lived at the marketplace as the resident herbomancers, Otho Pike is the newest to take up the mantle of the Pike family shop.',
          'Selling teas, herbal candles, various botanicals and the best catnip a witch can buy - Otho takes great pride in bringing his own personal flair to his family’s traditional store.',
          'An inventor and experimenter at heart, Otho loves combining rare herbs and tinctures for new effects - see and possibly purchase some of his tamer discoveries in his bespelled candles.',
          'Last year, Otho confessed his growing feelings for Evanora Lace, with the help of many a market guest, and the invaluable advice of his sister, Amaryllis. Did the Otho and Evanora’s fledgling romance survive the year apart?',
        ]}
        image={Otho}
        imageAlt="Markies detail"
        instagramUrl="https://instagram.com"
        instagramHandle="Example Handle"
      />

      <MarkieCard
        name="Amaryllis Pike"
        bio={[
          'Sister to Otho and the heir to the Pike family store, Amaryllis was more than happy to let her brother take the lead. He has the mind for business and invention that will help the store succeed for years to come, while Amaryllis’ skills are far less… marketable.',
          'Despite being a Pike, famed for their plant magic as a family and being named after a flower, Amaryllis has a black thumb and cares little (and has even less aptitude for) plant magic.',
          'She begrudgingly sells flowers at the marketplace (because cut flowers are already dead, plus they’re pretty) but spends most of her time eavesdropping and listening to the tales and secrets of travelers as they come through the portal.',
          'Last year, she tried her hand at fashion, one of her many loves, but through a combination of lack of attention to inventory and pricing, as well as questionable taste, her store failed. What will she try next?',
        ]}
        image={Amaryllis}
        imageAlt="Markies detail"
        instagramUrl="https://instagram.com"
        instagramHandle="Example Handle"
        reverse
      />

      <MarkieCard
        name="Sable Stonebrew"
        bio={[
          'One of the three sisters of the Three Sisters Tavern in the Marketplace, Sable Stonebrew trades in secrets and gossip to always keep her upper hand.',
          'A follower of Victor Creo, rumors have it she harbors a one-sided crush, forever doomed because of Victor’s obsession with his dead fiance. Victor is more than happy to make use of Sable and her network of connections for the Veilbreakers purposes, however.',
          'Though her loyalty should belong to the market and the Market Master, will Sable sell out the Markies to further Victor’s cause?',
        ]}
        image={Sable}
        imageAlt="Markies detail"
        instagramUrl="https://instagram.com"
        instagramHandle="Example Handle"
      />
    </div>
  );
}
