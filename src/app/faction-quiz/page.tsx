'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';

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
        answer: 'Objectively analyze the situation before making any decisions.',
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
      { answer: "They're out of touch with reality.", result: 'Veilbreakers' },
      { answer: 'Depends on the leader...', result: 'Markie' },
      {
        answer: 'Leaders should not be trusted solely because of their power. Question Everything!',
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
          "Condemn your friend and take the opportunity to better yourself - it's their fault for being gullible.",
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
          'Interview the mage on what exactly he means by “power” and ask around for more information on the guy.',
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
        answer: 'I take a while to trust people, but when I do, I am loyal and expect the same.',
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
        answer: 'No, my local community would be a waste of time and money.',
        result: 'Veilbreakers',
      },
      {
        answer: 'Time is money and I help my community by sharing my knowledge and wisdom.',
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
        answer: 'Cut a deal with the enemy to act as a spy and report back to your community.',
        result: 'The Marketplace Gazette',
      },
      {
        answer:
          'Take the mantle of leadership and crush the enemy, no matter the cost to your community.',
        result: 'The Family Nightingale',
      },
      {
        answer:
          'Band together and use the wisdom of the elders to craft the best strategy to protect everyone.',
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
      { answer: 'To stay on top of the heap yourself.', result: 'Veilbreakers' },
      {
        answer: 'To not only stay on top, but keep others from climbing to your level.',
        result: 'The Family Nightingale',
      },
      { answer: 'To educate and inform.', result: 'The Marketplace Gazette' },
      { answer: 'To steward future generations and our earth.', result: 'Lorehollow' },
    ],
  },
  {
    number: 10,
    question:
      'By using your magic, you could fool village merchants into thinking trash was money. Do you?',
    options: [
      { answer: "Yes, and I'll spend as much as I can.", result: 'Veilbreakers' },
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
        answer: 'Definitely the lucrative job; steady work sounds like drudgery.',
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
          'How steady is steady? I’d do my research on both jobs and weigh the pros and cons on a written list.',
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

export default function FactionQuizPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const router = useRouter();

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
      router.push(`/faction-quiz/results?faction=${encodeURIComponent(getResults())}`);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-(--color-parchment)">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-24">
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
                <div
                  key={item.question}
                  role="radiogroup"
                  aria-labelledby={`question-${item.number}`}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-(--color-vellum) p-5"
                >
                  <h2
                    id={`question-${item.number}`}
                    className="text-lg font-semibold text-zinc-900 dark:text-zinc-50"
                  >
                    {item.number}. {item.question}
                  </h2>
                  <div className="mt-3 space-y-2">
                    {item.options.map((option) => (
                      <label
                        key={option.answer}
                        className="flex cursor-pointer items-center gap-3 rounded-md border border-zinc-200 p-3 text-zinc-700 transition-colors hover:border-(--color-lantern) hover:bg-(--color-parchment) focus-within:border-(--color-lantern) focus-within:ring-2 focus-within:ring-(--color-lantern)/30 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
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
                          className="h-4 w-4 accent-(--color-alchemy)"
                        />
                        {option.answer}
                      </label>
                    ))}
                  </div>
                </div>
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
      </main>
    </div>
  );
}
