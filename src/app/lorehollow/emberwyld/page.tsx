import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import { EmberwyldCrestTransparent } from '../../../images';

export default function EmberwyldPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />

      <section className="relative">
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <div className="mx-auto mb-6 w-full max-w-md">
            <Image
              src={EmberwyldCrestTransparent}
              alt="Emberwyld crest"
              width={600}
              height={600}
              className="mx-auto w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 rounded-3xl border border-zinc-200 bg-(--color-vellum) p-8 shadow-lg md:p-10 dark:border-zinc-800 dark:bg-(--color-vellum)">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                About Emberwyld
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Skills & Magic Specialty:</strong> Firecraft & Festival Magic - keepers of
                bonfire rites, storytelling enchantments, and protective flame magic. They embody
                joy, courage, and the preservation of folk traditions through magical celebrations.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Head of House & House Narrative:</strong> Founded by Delilah Emberwyld, a
                traveling performer who could light fires that told stories in their flames. She
                united rival magical clans with her midsummer festival. Current head of house,
                Vesper Nightingale is known for fire-dancing during winter solstice and for
                completing mastery of two Emberwyld specializations.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Animal:</strong> Red-tailed hawk - fiery, sharp-eyed, and a symbol of
                vision.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Color:</strong> Ember red - passion, courage, and the warmth of
                community.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Sigil:</strong> A hawk soaring above a burning hearth.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Element:</strong> Fire - transformation, warmth, and bold action.
              </p>
              <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                Specialty Classes
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Storyspinner</strong> - Storyspinners undergo intensive performance
                  training to hone their innate storytelling skills as magical bards. Some may sing,
                  some may dance, some may perform in dramas, but all storyspinners wield the power
                  to weave worlds, tales, and characters to delight, educate, or frighten.
                </li>
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Firestoker</strong> - Firestokers specialize in controlling the physical
                  element of flame from their house, training with the goal of wielding flame so
                  well it becomes an extension of their own limbs and will.
                </li>
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Festival Charger</strong> - Festival chargers are the leaders of House
                  Emberwyld, specializing in organizing and implementing large ritualistic festivals
                  which bring together great groups of magical users for an intent or purpose.
                  Festival Chargers are the only magical users capable of negotiating a magical
                  intent that large.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
