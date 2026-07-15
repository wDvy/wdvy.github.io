import Navbar from '../../../components/Navbar';
import FAQDropdown from '../../../components/FAQDropdown';
import FestivalSection from '../../../components/FestivalSection';
import { HeroVideo, Otho } from '../../../images';

type Section = {
  title: string;
  paragraphs: string[];
  imageSrc?: string;
};

export default function Home() {
  const sections: Section[] = [
    {
      title: 'New for 2026!',
      imageSrc: Otho,
      paragraphs: [
        'Three new factions deepening the lore and conflict in the magical world including:',
        'The Family Nightingale - an illusive wealthy family who handpicks their kin',
        'The Portal Gazette - a group of hard-hitting reporters eager to publish the truth of the Marketplace and its mysterious inhabitants',
        'Lorehollow, the Veilbreakers, and Markies are all returning for 2026 to further their goals. Who will you join?',
        'A new after-hours experience for dark wizards and witches 21+ - learn more about the dark history of the Veilbreakers and, perhaps, make contact beyond the grave with the notorious Viviane Blackthorn. Look for the Tavern Takeover ticket to participate in this special event.',
        'Themed Weekends - The Marketplace now has a calendar of events! Expect different musical guests, fortune tellers, and specific themed narrative content and quests for each of the weekends the Marketplace is in Louisville. For those travelers who come back each week and complete all special quests in addition to the standard quests, a special cumulative completion prize is available!',
        "New Vendors - Joining us this year are new vendors with enchanting new offerings such as grimoires, alchemical concoctions, and sweets and snacks. Don't worry - your favorite faces from last year will still be there, too!",
        'More Narrative Content - you asked and we delivered! The Marketplace now has three times as many quests to complete, allowing you to dive deeper into the stories at the heart of the marketplace.',
        'Advancing Story - based on the decisions of the questees and interactions with guests, the story will advance each week. YOU decide the fate of the marketplace.',
        'Calendar',
      ],
    },
    {
      title: 'Fae, Beasts, and Spirits Weekend',
      paragraphs: [
        'November 27th-29th | Calling all shapeshifters, faeries, and woodland spirits – the portal to the Magical Midwinter Marketplace is open! Join us in homecoming to Louisville, KY and celebrate the spirits of winter and the forest. A special-edition pin available for fae, beasts, and spirits who tell their tale of origin to the market master!',
      ],
    },
    {
      title: 'Rogues and Wanderers Weekend',
      paragraphs: [
        'December 4th - 6th | The Marketplace welcomes spies, con artists, rogues, and thieves from all corners, as well as merchants, travelers and wanderers of all dimensions and planes, to step through the portal and share in the magic of the marketplace (thieves and rogues are welcome to trade their own trinkets with willing participants, but remember the marketplace is guarded against roguery – any attempt to steal from the marketplace will result in immediate banishment through the portal!).',
      ],
    },
    {
      title: 'Lorehollow Weekend',
      paragraphs: [
        'December 11th-13th | Show your Lorehollow house pride and come dressed in the colors of your house. Meet other students and discover your specialty and class in a quest designed for those who have completed their MATs, only available this weekend.',
      ],
    },
    {
      title: 'Veilbreakers Weekend',
      paragraphs: [
        'December 18th-20th | Celebrate Victor Creo and his faction of Veilbreakers – maybe even join them! Learn more about death magic and your untapped potential as the Veilbreakers take over the Marketplace. Or – fight back against their encroaching storm with the Lorehollow professors by infiltrating their ranks! The final weekend of the Marketplace will determine the power of the Veilbreakers faction - make your voice heard!',
      ],
    },
    {
      title: 'Veilbreakers Tavern Takeover (21+ only)',
      paragraphs: [
        'The Tavern Takeover is a 21+ only event which will run Fridays and Saturdays 9-11p (one additional hour after the Marketplace place closes to the public). The Veilbreakers make a special appearance and attempt to communicate with their mysterious leader beyond the grave. This event is on the darker side and is meant for adults only. Tavern Takeover tickets do not include access to any quests (unless you have also purchased a Traveler Pass for the day, or a True Markie Pass for the season).',
        'Rotating musical guests and fortune tellers, schedule TBA soon!',
      ],
    },
  ];

  const faqItems = [
    {
      question: 'When will Louisville 2026 dates be announced?',
      answer:
        'Dates are still being finalized. Check this page and social channels for the first official announcement.',
    },
    {
      question: 'Will there be returning storylines from 2025?',
      answer:
        'Yes. Louisville 2026 continues world and character threads while still being welcoming to new attendees.',
    },
    {
      question: 'How do I participate in Veilbreakers Tavern Takeover?',
      answer:
        'Look for the Tavern Takeover ticket. This is a 21+ event and does not include quest access unless you also have a Traveler Pass for the day or a True Markie Pass for the season.',
    },
    {
      question: 'Are there different themes each weekend?',
      answer:
        'Yes. Each weekend has its own themed narrative content, special guests, and quests, with a cumulative completion prize for travelers who complete all special weekend quests and standard quests.',
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
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 text-center">
          Louisville 2026
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 text-center max-w-3xl mx-auto">
          The Louisville 2026 chapter is now broken into readable story blocks below, using the same
          visual rhythm as the Louisville 2025 festival page.
        </p>
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

      <FAQDropdown title="Louisville 2026 FAQ" items={faqItems} />
    </div>
  );
}
