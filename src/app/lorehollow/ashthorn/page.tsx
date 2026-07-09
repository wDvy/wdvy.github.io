import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import { AshThornCrestTransparent, LorehollowTan } from '../../../images';

export default function AshthornPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />

      <section className="relative">
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <div className="mx-auto mb-6 w-full max-w-md">
            <Image
              src={AshThornCrestTransparent}
              alt="Ashthorn crest"
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
                About Ashthorn
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Skills & Magic Specialty:</strong> Hedgecraft & Herbomancy — masters of
                plant-based magic, healing salves, poisons, and charms woven from Appalachian wilds.
                Known for "rootwork" and coaxing plants to grow in impossible conditions.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Head of house & House Narrative:</strong> Founded by Magnolia “Mags”
                Ashthorn, a traveling herbalist who could make the forest bloom in winter. She
                wandered the mountains teaching healing spells to isolated families. The current
                headmaster of Lorehollow is of house Ashthorn, Elder Rowan Pike, and he is said to
                keep a living herb garden inside his cloak. Current head of
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Head of house & House Narrative:</strong> Founded by Magnolia “Mags”
                Ashthorn, a traveling herbalist who could make the forest bloom in winter. She
                wandered the mountains teaching healing spells to isolated families. The current
                headmaster of Lorehollow is of house Ashthorn, Elder Rowan Pike, and he is said to
                keep a living herb garden inside his cloak. Current head of house Ashthorn is
                Evanora Lace.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Animal</strong> Red fox — clever, quick, and elusive, often spotted
                darting between cornfields at dusk.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Color</strong> Deep green — symbolizing growth, life, and the hidden
                power in the earth.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Sigil:</strong> A fox curled around a sprouting seedling.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Element:</strong> Earth — grounding, fertility, and the patient work
                of growth.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                  Specialty Classes
                </h2>
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Earth Healer</strong> - earth healers specialize in healing practices
                  which utilize herbal remedies (tea, poultices, salves, balms, compounded
                  medicines) as well as the natural world (water flow, earth grounding, mud baths,
                  etc.) to treat wounds, sicknesses, and magical ailments.
                </li>
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Charm Master</strong> - charm masters create objects of power out of
                  natural fibers and materials to channel a magic user's innate ability, or to
                  provide a specific function (warding, protection, enhancement, etc.).
                </li>
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Sylvan</strong> - After years of training, sylvans hone an Ashthorn’s
                  natural affinity for plantlife into specific and effective communication. While
                  plants rarely ‘speak,’ Sylvans have mastered the art of understanding and
                  communicating with plants.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
