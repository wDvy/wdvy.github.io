import Navbar from '../../components/Navbar';
import FAQDropdown from '../../components/FAQDropdown';
import EventbriteCheckoutEmbed from '../../components/EventbriteCheckoutEmbed';

export default function TicketsPage() {
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
    <div className="min-h-screen bg-zinc-50 dark:bg-[var(--color-parchment)] font-sans">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1
          className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 text-center"
          style={{ fontFamily: 'Game&Reality, serif' }}
        >
          Tickets
        </h1>

        <EventbriteCheckoutEmbed
          eventId="1990290234669"
          iframeContainerHeight={625}
          brandColor="#785780"
        />
      </main>

      <FAQDropdown title="Louisville 2026 FAQ" items={faqItems} />
    </div>
  );
}
