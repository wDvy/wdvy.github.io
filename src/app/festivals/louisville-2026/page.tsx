import Navbar from '../../../components/Navbar';
import FAQDropdown from '../../../components/FAQDropdown';
import FestivalSection from '../../../components/FestivalSection';
import {
  HeroVideo,
  VictorCreo,
  Sable,
  LorehollowTan,
  LexiQuill,
  Lorehollow2025,
} from '../../../images';

export default function Home() {
  const faqItems = [
    {
      question: 'How does timed entry work?',
      answer:
        'Please purchase your pass for the time you wish to enter the marketplace. The portal will open on the hour every hour and your pass grants you entry to the marketplace at the time listed through the close of the marketplace that day.',
    },
    {
      question: 'How long can I stay after my entry time?',
      answer:
        'Your pass grants you entry to the marketplace at the time listed for your timed entry through the close of the marketplace that day.',
    },
    {
      question: 'Where is the market?',
      answer:
        'Magical Midwinter is found through a portal behind the main building of Logan Street Market in Louisville, KY. You will enter through double doors off Logan Street and into the office of the Portal Gazette to begin your journey. Look for the Magical Midwinter logo!',
    },
    {
      question: 'Is the market ADA accessible?',
      answer:
        'The Marketplace does its best to be inclusive of all our guests, including those needing ADA accommodations, however there may be some tight spaces, uneven flooring, and stairs at different points in the Marketplace. All quests will have ADA accessible methods for completion.',
    },
    {
      question: 'Why do I need to sign a waiver?',
      answer:
        'The marketplace is a magical world full of mystery which includes tight spaces, uneven flooring, stairs, low clearances, live performers, and atmospheric effects like lighting, sound, and fog. We ask guests to sign a waiver to acknowledge their consent in engaging with these elements.',
    },
    {
      question: 'Are there any discounts?',
      answer:
        'Yes. We have a family of four discount and are offering buy four get one free on select ticket types. You should also follow our social media pages, as there are often discount codes posted to our followers.',
    },
    {
      question: 'Why are tickets so limited?',
      answer:
        'To keep the marketplace comfortable for all guests, we limit entry to a certain number of guests per hour. If you want to ensure your spot, we encourage you to buy your ticket early.',
    },
    {
      question: 'Can I dress up?',
      answer:
        'We highly encourage you to come to the market in your magical best, but it is certainly not required. We do ask that no real weapons are worn or brandished in the market.',
    },
    {
      question: 'Is this event suitable for children?',
      answer:
        'We have a specific ticket for those ages 7-15. Guests under seven are welcome for free. We ask that all young adventurers are supervised by an adult 18+ at all times. Some elements of the storyline, specific quests, and events like the Tavern Takeover (21+) are not recommended or available for children.',
    },
    {
      question: 'Where do I park?',
      answer:
        'Free parking is available at the lot at the corner of Logan and Kentucky Street. There will be a QR code in the Portal Gazette office upon your entry to Magical Midwinter that you can scan for free parking validation.',
    },
    {
      question: 'Who puts this on?',
      answer:
        'Immersio, the creators of Magical Midwinter, are a local Louisville production group founded to bring immersive entertainment to the Louisville community. We are a small startup and Magical Midwinter is our flagship event.',
    },
    {
      question: "What's the difference between the passes?",
      answer:
        'This year, the marketplace is offering four tiers of pass, depending on how you plan to experience the market. Make sure to read the description of each pass to select the one that best fits your needs.',
    },
    {
      question: "What happens if I'm late?",
      answer:
        'If you miss your entry time, you will have to wait for the next hourly entry time, permitting there is space for you. Late entry cannot be guaranteed.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* Hero video (top) */}
      <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden bg-black">
        <video
          className="w-full h-full object-cover"
          src={HeroVideo}
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
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 text-center">
          New for 2026!
        </h2>
      </main>

      <section className="max-w-5xl mx-auto px-6 pb-8">
        <div className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-4">
          <p>Three new factions deepening the lore and conflict in the magical world including:</p>
          <p>The Family Nightingale - an illusive wealthy family who handpicks their kin</p>
          <p>
            The Portal Gazette - a group of hard-hitting reporters eager to publish the truth of the
            Marketplace and its mysterious inhabitants
          </p>
          <p>
            Lorehollow, the Veilbreakers, and Markies are all returning for 2026 to further their
            goals. Who will you join?
          </p>
          <p>
            A new after-hours experience for dark wizards and witches 21+ - learn more about the
            dark history of the Veilbreakers and, perhaps, make contact beyond the grave with the
            notorious Viviane Blackthorn. Look for the Tavern Takeover ticket to participate in this
            special event.
          </p>
          <p>
            Themed Weekends - The Marketplace now has a calendar of events! Expect different musical
            guests, fortune tellers, and specific themed narrative content and quests for each of
            the weekends the Marketplace is in Louisville. For those travelers who come back each
            week and complete all special quests in addition to the standard quests, a special
            cumulative completion prize is available!
          </p>
          <p>
            New Vendors - Joining us this year are new vendors with enchanting new offerings such as
            grimoires, alchemical concoctions, and sweets and snacks. Don't worry - your favorite
            faces from last year will still be there, too!
          </p>
          <p>
            More Narrative Content - you asked and we delivered! The Marketplace now has three times
            as many quests to complete, allowing you to dive deeper into the stories at the heart of
            the marketplace.
          </p>
          <p>
            Advancing Story - based on the decisions of the questees and interactions with guests,
            the story will advance each week. YOU decide the fate of the marketplace.
          </p>
          <p>Calendar</p>
        </div>
      </section>

      <FestivalSection
        title="Fae, Beasts, and Spirits Weekend"
        imageSrc={Lorehollow2025}
        paragraphs={[
          'November 27th-29th | Calling all shapeshifters, faeries, and woodland spirits – the portal to the Magical Midwinter Marketplace is open! Join us in homecoming to Louisville, KY and celebrate the spirits of winter and the forest. A special-edition pin available for fae, beasts, and spirits who tell their tale of origin to the market master!',
        ]}
        reverse
      />

      <FestivalSection
        title="Rogues and Wanderers Weekend"
        imageSrc={LexiQuill}
        paragraphs={[
          'December 4th - 6th | The Marketplace welcomes spies, con artists, rogues, and thieves from all corners, as well as merchants, travelers and wanderers of all dimensions and planes, to step through the portal and share in the magic of the marketplace (thieves and rogues are welcome to trade their own trinkets with willing participants, but remember the marketplace is guarded against roguery – any attempt to steal from the marketplace will result in immediate banishment through the portal!).',
        ]}
      />

      <FestivalSection
        title="Lorehollow Weekend"
        imageSrc={LorehollowTan}
        paragraphs={[
          'December 11th-13th | Show your Lorehollow house pride and come dressed in the colors of your house. Meet other students and discover your specialty and class in a quest designed for those who have completed their MATs, only available this weekend.',
        ]}
        reverse
      />

      <FestivalSection
        title="Veilbreakers Weekend"
        imageSrc={VictorCreo}
        paragraphs={[
          'December 18th-20th | Celebrate Victor Creo and his faction of Veilbreakers – maybe even join them! Learn more about death magic and your untapped potential as the Veilbreakers take over the Marketplace. Or – fight back against their encroaching storm with the Lorehollow professors by infiltrating their ranks! The final weekend of the Marketplace will determine the power of the Veilbreakers faction - make your voice heard!',
        ]}
      />

      <FestivalSection
        title="Veilbreakers Tavern Takeover (21+ only)"
        imageSrc={Sable}
        paragraphs={[
          'The Tavern Takeover is a 21+ only event which will run Fridays and Saturdays 9-11p (one additional hour after the Marketplace place closes to the public). The Veilbreakers make a special appearance and attempt to communicate with their mysterious leader beyond the grave. This event is on the darker side and is meant for adults only. Tavern Takeover tickets do not include access to any quests (unless you have also purchased a Traveler Pass for the day, or a True Markie Pass for the season).',
          'Rotating musical guests and fortune tellers, schedule TBA soon!',
        ]}
        reverse
      />

      <FAQDropdown title="Louisville 2026 FAQ" items={faqItems} />
    </div>
  );
}
