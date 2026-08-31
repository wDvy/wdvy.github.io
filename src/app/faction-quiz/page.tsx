import Navbar from '../../components/Navbar';

export const metadata = {
  title: 'Faction Quiz - MMF',
  description: 'Discover which Magical Midwinter faction you belong to.',
};

const PLACEHOLDER_QUESTIONS = Array.from({ length: 12 }, (_, i) => ({
  question: `Placeholder question ${i + 1}?`,
  options: [
    'Placeholder answer A',
    'Placeholder answer B',
    'Placeholder answer C',
    'Placeholder answer D',
  ],
}));

export default function FactionQuizPage() {
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

        <form className="mt-16 space-y-10">
          {PLACEHOLDER_QUESTIONS.map((item, index) => (
            <fieldset
              key={item.question}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-(--color-vellum) p-5"
            >
              <legend className="px-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {index + 1}. {item.question}
              </legend>
              <div className="mt-3 space-y-2">
                {item.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300"
                  >
                    <input type="radio" name={`question-${index}`} disabled className="h-4 w-4" />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}

          <button
            type="submit"
            className="w-full rounded-lg bg-zinc-900 dark:bg-(--color-surface)  dark:border dark:border-(--color-zinc-900) px-4 py-2.5 font-semibold text-white dark:text-zinc-900 hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
