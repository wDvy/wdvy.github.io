'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { submitNewsletterEmail } from '../../lib/newsletter';
import {
  arrowTexture,
  cellTexture,
  crossTexture,
  dioriteTexture,
  swirlingTexture,
  weaveTexture,
  gazettePicture,
} from '../../images';

const TIEBREAKER_QUESTION_NUMBERS = [12, 13];

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
      { answer: 'Silence them - at any cost', result: 'Veilbreakers' },
      {
        answer: 'Objectively analyze the situation before making any decisions',
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
      { answer: 'Depends on the leader…', result: 'markie' },
      {
        answer: 'Leaders should not be trusted solely because of their power. Question Everything!',
        result: 'The Marketplace Gazette',
      },
    ],
  },
  {
    number: 3,
    question: 'What location most calls to you?',
    options: [
      {
        answer: 'A quiet library, filled with wisdom from the ages, and crackling fire',
        result: 'Lorehollow',
      },
      {
        answer:
          'A night under the stars with my friends and family around the campfire, telling stories',
        result: 'markie',
      },
      {
        answer: 'A private dinner with someone important at the most expensive restaurant in town',
        result: 'The Family Nightingale',
      },
      { answer: 'A training ring or a sparring gym with my squad', result: "Hecate's Torch" },
      { answer: 'A raging concert, a moshpit, and ringing ears', result: 'Veilbreakers' },
      {
        answer: 'A hidden alcove with a book, my notebook, and a good drink - people watching',
        result: 'The Marketplace Gazette',
      },
    ],
  },
  {
    number: 4,
    question: 'A powerful but corrupt mage offers you power if you betray a friend. Do you:',
    options: [
      {
        answer: 'Condemn your friend and take the opportunity to better yourself',
        result: 'Veilbreakers',
      },
      {
        answer: "Agree, but drop hints to your friend that something's up",
        result: 'The Family Nightingale',
      },
      { answer: 'Refuse the offer and refuse to betray your friend', result: 'Lorehollow' },
      {
        answer: 'Interview the mage on what exactly he means by "power"...',
        result: 'The Marketplace Gazette',
      },
      {
        answer: 'Alert your friend and the authorities that someone is up to no good',
        result: "Hecate's Torch",
      },
      { answer: 'Agree, but betray the mage instead', result: 'markie' },
    ],
  },
  {
    number: 5,
    question: 'Do you become close to friends, or hold most people at a safe distance?',
    options: [
      {
        answer: 'I have an abundance of close friends, family, and acquaintances.',
        result: 'markie',
      },
      { answer: 'I have some close friends.', result: "Hecate's Torch" },
      { answer: 'I have my family.', result: 'The Family Nightingale' },
      { answer: 'I try to keep people at a distance.', result: 'Veilbreakers' },
      { answer: 'I have a community of mentors, friends, and family.', result: 'Lorehollow' },
      {
        answer: 'I take a while to trust people, but when I do, I am loyal and expect the same.',
        result: 'The Marketplace Gazette',
      },
    ],
  },
  {
    number: 6,
    question: 'Do you donate time and resources to improve the local community?',
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
      { answer: 'Community is everything. We all pitch in to keep it running.', result: 'markie' },
    ],
  },
  {
    number: 7,
    question: 'Your community is threatened with invasion. Do you:',
    options: [
      { answer: 'Help defend it to your last breath', result: "Hecate's Torch" },
      { answer: 'Defend the area with the rest of your community', result: 'markie' },
      { answer: 'Flee as soon as things look grim', result: 'Veilbreakers' },
      {
        answer: 'Cut a deal with the enemy to act as a spy and report back to your community',
        result: 'The Marketplace Gazette',
      },
      {
        answer: 'Take the mantle of leadership and crush the enemy, no matter the cost',
        result: 'The Family Nightingale',
      },
      {
        answer: 'Band together and use the wisdom of the elders to craft the best strategy',
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
      { answer: 'Flee the country', result: 'Veilbreakers' },
      { answer: 'Set up makeshift hospitals and help nurse your community', result: 'markie' },
      {
        answer: 'Spread awareness about the plague, how it can be prevented and treated',
        result: 'The Marketplace Gazette',
      },
    ],
  },
  {
    number: 9,
    question: 'Which of the following textures most resonates with you?',
    options: [
      {
        answer: 'Swirling white curves on black background',
        image: swirlingTexture,
        result: 'markie',
      },
      {
        answer: 'Cross and square pattern',
        image: crossTexture,
        result: 'The Family Nightingale',
      },
      {
        answer: 'Weave-like texture of cross hatch',
        image: weaveTexture,
        result: 'Lorehollow',
      },
      {
        answer: 'A series of concentric circles',
        image: cellTexture,
        result: 'Veilbreakers',
      },
      {
        answer: 'Interlocking, rigid polygons',
        image: arrowTexture,
        result: "Hecate's Torch",
      },
      {
        answer: 'Mostly white background with a few flecks of solid grey and black',
        image: dioriteTexture,
        result: 'The Marketplace Gazette',
      },
    ],
  },
  {
    number: 10,
    question: 'What is the best use of magic?',
    options: [
      { answer: 'To help the destitute and less fortunate.', result: "Hecate's Torch" },
      { answer: 'To provide for the needs of friends and family.', result: 'markie' },
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
    number: 11,
    question:
      'By using your magic, you could fool village merchants into thinking trash was money. Do you?',
    options: [
      { answer: "Yes, and I'll spend as much as I can.", result: 'Veilbreakers' },
      {
        answer: "Yes, but I'll only cheat the rich merchants or the ones that did me dirty.",
        result: 'The Family Nightingale',
      },
      { answer: "No, it's against ethical magical use.", result: "Hecate's Torch" },
      { answer: 'No, those merchants have families to feed.', result: 'markie' },
      {
        answer: 'No, if it was that easy everyone would do it and our economy would crash.',
        result: 'Lorehollow',
      },
      {
        answer: 'Research if the trash will stay permanently as money...',
        result: 'The Marketplace Gazette',
      },
    ],
  },
  {
    number: 12,
    question:
      '(Extra Tiebreaker Question!): You have two job offers. One pays more, but the other is secure and steady. Which do you choose?',
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
      { answer: "I'm my own boss. I'm not going to work for anyone else.", result: 'markie' },
      {
        answer:
          "How steady is steady? I'd research both and weigh pros and cons on a written list.",
        result: 'The Marketplace Gazette',
      },
    ],
  },
  {
    number: 13,
    question:
      '(Extra Tiebreaker Question!): If you accepted a job or contract, would you try to finish the task even if it got much more dangerous?',
    options: [
      { answer: 'Yes, my word is my bond.', result: "Hecate's Torch" },
      {
        answer: "Yes, because it's good to have a reputation for dependability.",
        result: 'Lorehollow',
      },
      { answer: "You can bet I'd be renegotiating.", result: 'markie' },
      {
        answer: "If it's no longer a good deal, then the deal is off.",
        result: 'The Marketplace Gazette',
      },
      {
        answer: "If the job came from someone who mattered, yes. If not, I wouldn't risk it.",
        result: 'The Family Nightingale',
      },
      {
        answer: "Of course - and then I'd extort more money out of them when I succeeded.",
        result: 'Veilbreakers',
      },
    ],
  },
];

function tallyFactions(results: string[]): Record<string, number> {
  return results.reduce<Record<string, number>>((counts, faction) => {
    counts[faction] = (counts[faction] ?? 0) + 1;
    return counts;
  }, {});
}

function getLeadingFactions(tally: Record<string, number>): string[] {
  const maxCount = Math.max(0, ...Object.values(tally));
  if (maxCount === 0) return [];
  return Object.keys(tally).filter((faction) => tally[faction] === maxCount);
}

const MAIN_QUESTIONS = QUESTIONS.filter(
  (item) => !TIEBREAKER_QUESTION_NUMBERS.includes(item.number)
);
const TIEBREAKER_QUESTIONS = QUESTIONS.filter((item) =>
  TIEBREAKER_QUESTION_NUMBERS.includes(item.number)
);

export default function FactionQuizPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [stage, setStage] = useState<'quiz' | 'email'>('quiz');
  const [email, setEmail] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const router = useRouter();
  const questionCardRef = useRef<HTMLDivElement>(null);

  function scrollToQuestionCard() {
    const card = questionCardRef.current;
    if (!card) return;

    const scrollOffset = 96; // clears the sticky navbar
    const top = card.getBoundingClientRect().top + window.scrollY - scrollOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  // Tiebreaker questions only appear if the main questions (and prior tiebreakers) end in a tie.
  const visibleQuestions = useMemo(() => {
    const mainAnswers = MAIN_QUESTIONS.map((item) => answers[item.number]);
    const visible = [...MAIN_QUESTIONS];

    if (mainAnswers.every(Boolean)) {
      let runningResults = mainAnswers as string[];

      for (const tiebreaker of TIEBREAKER_QUESTIONS) {
        const leaders = getLeadingFactions(tallyFactions(runningResults));
        if (leaders.length <= 1) break;

        visible.push(tiebreaker);
        const tiebreakerAnswer = answers[tiebreaker.number];
        if (!tiebreakerAnswer) break;

        runningResults = [...runningResults, tiebreakerAnswer];
      }
    }

    return visible;
  }, [answers]);

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, visibleQuestions.length - 1));
  }, [visibleQuestions.length]);

  const currentQuestion = visibleQuestions[currentIndex];
  const isLastQuestion = currentIndex === visibleQuestions.length - 1;
  const currentAnswer = answers[currentQuestion.number];
  const allQuestionsAnswered = visibleQuestions.every((item) => answers[item.number]);

  function getResults() {
    const results = visibleQuestions
      .map((item) => answers[item.number])
      .filter((result): result is string => Boolean(result));

    return getLeadingFactions(tallyFactions(results))[0];
  }

  function goToNext() {
    setDirection('forward');
    setCurrentIndex((index) => Math.min(index + 1, visibleQuestions.length - 1));
    scrollToQuestionCard();
  }

  function goToPrevious() {
    setDirection('back');
    setCurrentIndex((index) => Math.max(index - 1, 0));
    scrollToQuestionCard();
  }

  function selectAnswer(result: string) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.number]: result,
    }));
  }

  function handleSubmit() {
    if (allQuestionsAnswered) {
      setStage('email');
      scrollToQuestionCard();
    }
  }

  async function handleEmailSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consentChecked) return;

    setEmailStatus('submitting');
    try {
      await submitNewsletterEmail(email);
      scrollToQuestionCard();
      router.push(`/faction-quiz/results?faction=${encodeURIComponent(getResults())}`);
    } catch {
      setEmailStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-(--color-parchment)">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Conflicting forces clash at Magical Midwinter - where do your loyalties lie?
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Learn more about the stories, characters, and mysteries colliding at the marketplace and
            discover where you fit in! Who are your people? Take this quiz to find out!
          </p>
        </div>

        <div className="mt-12">
          <div className="mb-2 flex items-center justify-between text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <span>
              {stage === 'email'
                ? 'Almost there!'
                : `Question ${currentIndex + 1} of ${visibleQuestions.length}`}
            </span>
            <span>
              {stage === 'email'
                ? '100%'
                : `${Math.round(((currentIndex + 1) / visibleQuestions.length) * 100)}%`}
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
            <div
              className="h-full rounded-full bg-(--color-alchemy) transition-all duration-300"
              style={{
                width:
                  stage === 'email'
                    ? '100%'
                    : `${((currentIndex + 1) / visibleQuestions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {stage === 'email' ? (
          <div
            ref={questionCardRef}
            className="mt-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-(--color-vellum) p-5 animate-quiz-in-forward"
          >
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Enter your email to reveal your results
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              We&apos;ll use this to send you festival announcements and lore drops. You can
              unsubscribe anytime.
            </p>

            <form onSubmit={handleEmailSubmit} className="mt-4 flex flex-col gap-3">
              <label htmlFor="quiz-email" className="sr-only">
                Email address
              </label>
              <input
                id="quiz-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-(--color-parchment) px-4 py-2.5 text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100"
              />

              <label className="flex cursor-pointer items-start gap-3 text-sm leading-snug text-zinc-700 dark:text-zinc-300">
                <input
                  type="checkbox"
                  required
                  checked={consentChecked}
                  onChange={(event) => setConsentChecked(event.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-(--color-alchemy)"
                />
                <span>
                  I consent to receive emails from Magical Midwinter and agree to the{' '}
                  <a href="/policies" className="underline hover:text-(--color-lantern)">
                    privacy policy
                  </a>
                  .
                </span>
              </label>

              {emailStatus === 'error' ? (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again.
                </p>
              ) : null}

              <div className="mt-2 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStage('quiz')}
                  className="rounded-lg border border-zinc-300 px-4 py-2.5 font-semibold text-zinc-700 transition-opacity hover:opacity-90 dark:border-zinc-700 dark:text-zinc-300"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!consentChecked || emailStatus === 'submitting'}
                  className="flex-1 rounded-lg bg-zinc-900 px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 dark:border dark:border-zinc-900 dark:bg-(--color-surface) dark:text-zinc-900"
                >
                  {emailStatus === 'submitting' ? 'Revealing…' : 'Reveal My Results'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            <div
              ref={questionCardRef}
              key={currentQuestion.number}
              role="radiogroup"
              aria-labelledby={`question-${currentQuestion.number}`}
              className={`mt-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-(--color-vellum) p-5 ${
                direction === 'forward' ? 'animate-quiz-in-forward' : 'animate-quiz-in-back'
              }`}
            >
              <h2
                id={`question-${currentQuestion.number}`}
                className="text-lg font-semibold text-zinc-900 dark:text-zinc-50"
              >
                {currentQuestion.number}. {currentQuestion.question}
              </h2>
              <div className="mt-3 space-y-2">
                {currentQuestion.options.map((option) => (
                  <label
                    key={option.answer}
                    className="flex cursor-pointer items-center gap-3 rounded-md border border-zinc-200 p-3 text-zinc-700 transition-colors hover:border-(--color-lantern) hover:bg-(--color-parchment) focus-within:border-(--color-lantern) focus-within:ring-2 focus-within:ring-(--color-lantern)/30 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestion.number}`}
                      value={option.result}
                      checked={currentAnswer === option.result}
                      onChange={() => selectAnswer(option.result)}
                      className="h-4 w-4 accent-(--color-alchemy)"
                    />
                    {'image' in option && option.image ? (
                      // eslint-disable-next-line @next/next/no-img-element -- placeholder texture asset, not yet optimized
                      <img
                        src={option.image}
                        alt={option.answer}
                        className="h-16 w-16 shrink-0 rounded-md object-cover"
                      />
                    ) : null}
                    {option.answer}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="rounded-lg border border-zinc-300 px-4 py-2.5 font-semibold text-zinc-700 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-300"
              >
                Back
              </button>

              {isLastQuestion ? (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!allQuestionsAnswered}
                  className="flex-1 rounded-lg bg-zinc-900 px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 dark:border dark:border-zinc-900 dark:bg-(--color-surface) dark:text-zinc-900"
                >
                  See Results
                </button>
              ) : (
                <button
                  type="button"
                  onClick={goToNext}
                  disabled={!currentAnswer}
                  className="flex-1 rounded-lg bg-zinc-900 px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 dark:border dark:border-zinc-900 dark:bg-(--color-surface) dark:text-zinc-900"
                >
                  Next
                </button>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
