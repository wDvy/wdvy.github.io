'use client';

import Image from 'next/image';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import {
  GazetteOverlay,
  LorehollowTransparent,
  MarketMaster,
  Vesper,
  VictorCreo,
  magicDude,
} from '../../images';

const QUESTIONS = [
  {
    number: 1,
    question: 'Respected elders are expressing disapproval of something you did. Do you:',
    options: [
      {
        answer:
          "Reflect on the criticism and change your ways if you find it necessary; ignore it if you don't!",
        result: 'markie',
      },
      { answer: 'Seek to explain your reasons to them', result: 'Lorehollow' },
      {
        answer:
          'Ignore them and convince everyone around you that the ones criticizing you are ignorant',
        result: 'The Family Nightingale',
      },
      { answer: 'Silence them - at any cost.', result: 'Veilbreakers' },
      {
        answer: 'Objectively analyze the situation before making any decisions .',
        result: 'The Marketplace Gazette',
      },
      { answer: 'Apologize and mend the relationship', result: "Hecate's Torch" },
    ],
  },
  {
    number: 2,
    question: 'Do you respect your leaders?',
    options: [
      { answer: 'Their words guide my actions.', result: 'Lorehollow' },
      { answer: "They're role models for me.", result: "Hecate's Torch" },
      { answer: "They're often out of touch with my life.", result: 'The Family Nightingale' },
      { answer: "They're out of touch with reality. .", result: 'Veilbreakers' },
      { answer: 'Depends on the leader...', result: 'Markie' },
      {
        answer:
          'Leaders should not be trusted solely because of their power. Question Everything! .',
        result: 'The Marketplace Gazette',
      },
    ],
  },
  {
    number: 3,
    question: 'A powerful but corrupt mage offers you power if you betray a friend. Do you:',
    options: [
      {
        answer:
          "Condemn your friend and take the opportunity to better yourself - it's their fault for being gullible .",
        result: 'Veilbreakers',
      },
      {
        answer:
          "Agree, but drop hints to your friend that something's up - if they're worth anything they'll understand the message and save themselves",
        result: 'The Family Nightingale',
      },
      { answer: 'Refuse the offer and refuse to betray your friend', result: 'Lorehollow' },
      {
        answer:
          'Interview the mage on what exactly he means by “power” and ask around for more information on the guy .',
        result: 'The Marketplace Gazette',
      },
      {
        answer: 'Alert your friend and the authorities that someone is up to no good',
        result: "Hecate's Torch",
      },
      { answer: 'Agree, but betray the mage instead', result: 'Markie' },
    ],
  },
  {
    number: 4,
    question: 'Do you become close to friends, or hold most people at a safe distance?',
    options: [
      {
        answer: 'I have an abundance of close friends, family, and acquaintances.',
        result: 'Markie',
      },
      { answer: 'I have some close friends.', result: "Hecate's Torch" },
      { answer: 'I have my family.', result: 'The Family Nightingale' },
      { answer: 'I try to keep people at a distance. .', result: 'Veilbreakers' },
      { answer: 'I have a community of mentors, friends, and family.', result: 'Lorehollow' },
      {
        answer: 'I take a while to trust people, but when I do, I am loyal and expect the same. .',
        result: 'The Marketplace Gazette',
      },
    ],
  },
  {
    number: 5,
    question: 'Do you donate time and money to improve the local community?',
    options: [
      { answer: 'Yes, the needs of the community are my top priority.', result: "Hecate's Torch" },
      { answer: 'Yes, I donate as much as I can once my own needs are met.', result: 'Lorehollow' },
      {
        answer: "No, I don't have enough time or money to spare on people that are not my family.",
        result: 'The Family Nightingale',
      },
      {
        answer: 'No, my local community would be a waste of time and money. .',
        result: 'Veilbreakers',
      },
      {
        answer: 'Time is money and I help my community by sharing my knowledge and wisdom. .',
        result: 'The Marketplace Gazette',
      },
      { answer: 'Community is everything. We all pitch in to keep it running.', result: 'Markie' },
    ],
  },
  {
    number: 6,
    question: 'Your community is threatened with invasion. Do you:',
    options: [
      { answer: 'Help defend it to your last breath', result: "Hecate's Torch" },
      { answer: 'Defend the area with the rest of your community', result: 'Markie' },
      { answer: 'Flee as soon as things look grim.', result: 'Veilbreakers' },
      {
        answer: 'Cut a deal with the enemy to act as a spy and report back to your community .',
        result: 'The Marketplace Gazette',
      },
      {
        answer:
          'Take the mantle of leadership and crush the enemy, no matter the cost to your community',
        result: 'The Family Nightingale',
      },
      {
        answer:
          'Band together and use the wisdom of the elders to craft the best strategy to protect everyone',
        result: 'Lorehollow',
      },
    ],
  },
  {
    number: 8,
    question: 'A plague is sweeping across your country. Would you:',
    options: [
      { answer: 'Undertake a dangerous mission to find the cure', result: "Hecate's Torch" },
      {
        answer:
          'Heal the sick as best you can with wisdom from books, the elders, and professionals',
        result: 'Lorehollow',
      },
      { answer: 'Avoid contact with the sick', result: 'The Family Nightingale' },
      { answer: 'Flee the country.', result: 'Veilbreakers' },
      { answer: 'Set up makeshift hospitals and help nurse your community', result: 'Markie' },
      {
        answer:
          'Spread awareness about the plague, how it can be prevented, and how it can be treated.',
        result: 'The Marketplace Gazette',
      },
    ],
  },
  {
    number: 9,
    question: 'What is the best use of magic?',
    options: [
      { answer: 'To help the destitute and less fortunate.', result: "Hecate's Torch" },
      { answer: 'To provide for the needs of friends and family.', result: 'Markie' },
      { answer: 'To stay on top of the heap yourself. .', result: 'Veilbreakers' },
      {
        answer: 'To not only stay on top, but keep others from climbing to your level.',
        result: 'The Family Nightingale',
      },
      { answer: 'To educate and inform. .', result: 'The Marketplace Gazette' },
      { answer: 'To steward future generations and our earth.', result: 'Lorehollow' },
    ],
  },
  {
    number: 10,
    question:
      'By using your magic, you could fool village merchants into thinking trash was money. Do you?',
    options: [
      { answer: "Yes, and I'll spend as much as I can. .", result: 'Veilbreakers' },
      {
        answer: "Yes, but I'll only cheat the rich merchants or the ones that did me dirty.",
        result: 'The Family Nightingale',
      },
      { answer: "No, it's against ethical magical use.", result: "Hecate's Torch" },
      { answer: 'No, those merchants have families to feed.', result: 'Markie' },
      {
        answer: 'No, if it was that easy everyone would do it and our economy would crash.',
        result: 'Lorehollow',
      },
      {
        answer:
          'Research if the trash will stay permanently as money, because then it’s a different situation….',
        result: 'The Marketplace Gazette',
      },
    ],
  },
  {
    number: 11,
    question:
      'You have two job offers. One pays more, but the other is secure and steady. Which do you choose?',
    options: [
      {
        answer: 'Definitely the lucrative job; steady work sounds like drudgery. .',
        result: 'Veilbreakers',
      },
      {
        answer: "Probably the lucrative job, although I'd look into the secure job.",
        result: 'The Family Nightingale',
      },
      {
        answer: 'The secure job, unless the other job was outrageously lucrative.',
        result: 'Lorehollow',
      },
      {
        answer: 'Definitely the secure job, because I plan for the long term.',
        result: "Hecate's Torch",
      },
      { answer: 'I’m my own boss. I’m not going to work for anyone else.', result: 'Markie' },
      {
        answer:
          'How steady is steady? I’d do my research on both jobs and weigh the pros and cons on a written list. .',
        result: 'The Marketplace Gazette',
      },
    ],
  },
  {
    number: 12,
    question:
      'If you accepted a job or contract, would you try to finish the task even if it got much more dangerous?',
    options: [
      { answer: 'Yes, my word is my bond.', result: "Hecate's Torch" },
      {
        answer: "Yes, because it's good to have a reputation for dependability.",
        result: 'Lorehollow',
      },
      { answer: "You can bet I'd be renegotiating.", result: 'Markie' },
      {
        answer: "If it's no longer a good deal, then the deal is off.",
        result: 'The Marketplace Gazette',
      },
      {
        answer: 'If the job came from someone who mattered, yes. If not, I wouldn’t risk it.',
        result: 'The Family Nightingale',
      },
      {
        answer: 'Of course - and then I’d extort more money out of them when I succeeded.',
        result: 'Veilbreakers',
      },
    ],
  },
];

const RESULTS = {
  markie: {
    title: 'Markies',
    principles: [
      'Live and let live',
      'Protect your found family',
      'Snitches get stitches',
      'Follow your heart',
      'Passionate, independent, crafty',
    ],
    image: MarketMaster,
    imageAlt: 'Markies',
    description:
      'Markies are the family at the heart of the marketplace composed of vendors and longtime frequent guests. True Markies are distinguished by the golden key pin, allowing them access into all parts of the marketplace. Markies owe allegiance to no one individual or cause except the marketplace and the Market Master. The Market Master has complete control and authority over doings in the marketplace, so all Markies are subject to his whim. Since the marketplace travels all over the world, Markies tend to remain aloof from individual city drama. For example, you won’t find many markies pledging allegiance or fidelity to either Lorehollow or the Veilbreakers, though many will be interested in the drama. Markies prize their found family and protect their own, no matter what.',
  },
  'The Marketplace Gazette': {
    title: 'The Marketplace Gazette',
    principles: [
      'The truth at any cost',
      'The public deserves to know',
      'The good, the bad, the ugly, all deserve to be printed, no matter the consequence',
      'Eagle-eyed, wary, truthful',
    ],
    image: GazetteOverlay,
    imageAlt: 'The Marketplace Gazette',
    description:
      'The Marketplace Gazette, founded by Evelyn Stokes, editor-in-chief, with the mandate to investigate the various mysteries of the Marketplace, is the only traveling magical printing house of its kind. Led by their fearless leader, Evelyn, reporters of the Gazette hunt down new leads by interviewing Markies and guests alike. This year, they’re focusing on uncovering the reason behind the string of unexplained disappearances at the marketplace which has gone unexamined since they began… The members of the Marketplace Gazette seek truth above all… and will stop at nothing to get it.',
  },
  "Hecate's Torch": {
    title: "Hecate's Torch",
    principles: [
      'The strong will protect the weak',
      'A life of service',
      'Authority and law keep us safe',
      'The world is black and white, wrong or right',
      'Loyal, dedicated, steadfast',
    ],
    image: magicDude,
    imageAlt: "Hecate's Torch",
    description:
      'An international coalition of talented magic users dedicated to upholding magical law. Hecate’s Hand is the ultimate expression of justice - judge, jury and executioner. Lorehollow is one of the recruiting houses that sends prospective members for this elite society’s training. Commonly referred to as “The Torch.” Members of Hecate’s Torch will stop at nothing to uncover the Veilbreaker’s insidious plot to steal and misuse the magic of the dead. They are also highly suspicious of the tactics and power hoarded by the Family Nightingale.',
  },
  Lorehollow: {
    title: 'Lorehollow',
    principles: [
      'Appreciates education and training',
      'Think there should be ethical bounds around power and magic',
      'Respect professors, the dead, and our ancestors',
      'Respectful, careful, compassionate',
    ],
    image: LorehollowTransparent,
    imageAlt: 'Lorehollow colored crest',
    description:
      'Louisville’s magical school for higher education in the arcane arts. Lorehollow presents itself as a bastion of peace and ethical magic use, in balance with the non-magical world. Along with other magical schools, keepers of the Veil between the living world and the world of the dead as well as magical laws and enforcement violating the law of secrecy. Lorehollow professors and students vow to uphold magical society and protect magic users and non-magical folk alike from improper and dangerous magical interference.',
  },
  'The Family Nightingale': {
    title: 'The Family Nightingale',
    principles: [
      'Great power should be reserved for a careful few',
      'You should have to constantly prove yourself to be worthy',
      'Those who are unworthy don’t matter',
      'Measured, reserved, effective',
    ],
    image: Vesper,
    imageAlt: 'Nightingale Crest',
    description:
      'A highly respected magical ‘made’ family who select new members by an individual’s potential for magical achievement. The Nightingale name opens doors, literally and metaphorically. Nightingale family members gain wealth, status, and a highly secret new power that helps them excel beyond any normal magic user. In exchange for these perks, the family demands strict loyalty and obedience. Family members are paired for optimal breeding of the most powerful lines, though offspring are not always guaranteed a spot in the family. New family members undergo an intense initiation ritual and emerge ‘changed.’ The family Nightingale values power and loyalty to the name.',
  },
  Veilbreakers: {
    title: 'Veilbreakers',
    principles: [
      'No bounds to power or individual achievement',
      'Rebel against preconceived notions',
      'Down with authority',
      'Do what you can get away with',
      'Defiant, bold, cunning',
    ],
    image: VictorCreo,
    imageAlt: 'Veilbreakers',
    description:
      'Magic users who defy Lorehollow’s (and larger magical society’s) tenets of ethical magical use in balance with the non-magical world. Veilbreakers want to use the wealth of magical power held behind the veil in the form of the souls of the dead to create a society of powerful magical users. Unspoken is their intent to establish this society as dominant to non-magical society. Also unspoken is the vast sacrifice necessary in order to completely ‘break’ the veil. Who is paying the ultimate cost? The Veilbreakers say they want magical equality - liberation from elitist schools and families like the Nightingale, but what are they willing to do to get it?',
  },
} as const;

export default function FactionQuizPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<string | null>(null);
  const resultPage = result ? RESULTS[result as keyof typeof RESULTS] : null;

  const allQuestionsAnswered = QUESTIONS.every((item) => answers[item.number]);

  function getResults() {
    const results = Object.values(answers);
    const resultCounts = results.reduce<Record<string, number>>((counts, faction) => {
      counts[faction] = (counts[faction] ?? 0) + 1;
      return counts;
    }, {});

    return results.reduce((leadingFaction, faction) =>
      resultCounts[faction] > resultCounts[leadingFaction] ? faction : leadingFaction
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (allQuestionsAnswered) {
      setResult(getResults());
    }
  }

  function restartQuiz() {
    setAnswers({});
    setResult(null);
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-(--color-parchment)">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-24">
        {resultPage ? (
          <section className="py-24 text-center" aria-live="polite">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">Your faction is</p>
            <h1 className="mt-3 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
              {resultPage.title}
            </h1>
            <Image
              src={resultPage.image}
              alt={resultPage.imageAlt}
              width={600}
              height={400}
              className="mx-auto mt-10 max-h-80 w-auto object-contain rounded-lg"
            />
            <ul className="mx-auto mt-10 max-w-xl space-y-2 text-left text-lg text-zinc-700 dark:text-zinc-300">
              {resultPage.principles.map((principle) => (
                <li key={principle} className="flex gap-3">
                  <span aria-hidden="true">•</span>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-10 max-w-2xl text-left text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              {resultPage.description}
            </p>

            <button
              type="button"
              onClick={restartQuiz}
              className="mt-10 rounded-lg bg-zinc-900 px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 dark:border dark:border-zinc-900 dark:bg-(--color-surface) dark:text-zinc-900"
            >
              Take the quiz again
            </button>
          </section>
        ) : (
          <>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                Conflicting forces clash at Magical Midwinter - where do your loyalties lie?
              </h1>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Learn more about the stories, characters, and mysteries colliding at the marketplace
                and discover where you fit in! Who are your people? Take this quiz to find out!
              </p>
            </div>

            <form className="mt-16 space-y-10" onSubmit={handleSubmit}>
              {QUESTIONS.map((item) => (
                <fieldset
                  key={item.question}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-(--color-vellum) p-5"
                >
                  <legend className="px-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.number}. {item.question}
                  </legend>
                  <div className="mt-3 space-y-2">
                    {item.options.map((option) => (
                      <label
                        key={option.answer}
                        className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300"
                      >
                        <input
                          type="radio"
                          name={`question-${item.number}`}
                          value={option.result}
                          checked={answers[item.number] === option.result}
                          onChange={() =>
                            setAnswers((currentAnswers) => ({
                              ...currentAnswers,
                              [item.number]: option.result,
                            }))
                          }
                          className="h-4 w-4"
                        />
                        {option.answer}
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}

              <button
                type="submit"
                disabled={!allQuestionsAnswered}
                className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 dark:border dark:border-zinc-900 dark:bg-(--color-surface) dark:text-zinc-900"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </main>
    </div>
  );
}
