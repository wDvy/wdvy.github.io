import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import { BriarfangCrestTransparent } from '../../../images';

export default function BriarfangPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[var(--color-parchment)] font-sans">
      <Navbar />

      <section className="relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
          <div className="mx-auto mb-6 w-full max-w-md">
            <Image
              src={BriarfangCrestTransparent}
              alt="Briarfang crest"
              width={600}
              height={600}
              className="mx-auto w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 rounded-3xl border border-zinc-200 bg-(--color-vellum) p-4 sm:p-6 shadow-lg md:p-10 dark:border-zinc-800 dark:bg-(--color-vellum)">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                About Briarfang
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Skills & Magic Specialty:</strong> Beastkeeping & Cryptid Tracking - experts
                in the care, control, and negotiation with magical creatures of the South (from
                thunderbirds to the Pope Lick Monster).
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Head of house & House Narrative:</strong> Founded by Hunter “Huck”
                Briarfang, a trapper who refused to harm magical beasts and instead learned to live
                alongside them. He tamed the fearsome Ridgeback Panther, a creature now bound to the
                house. Current head of house Captain June “Junebug” Carter still leads midnight
                cryptid patrols.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Animal:</strong> Black panther - strong, stealthy, and fiercely
                protective of its own.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Color:</strong> Burnt umber - earthy and primal, tied to fur and claw.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Sigil:</strong> A panther’s eye emerging from a bed of briars.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Element:</strong> Wood - life intertwined with wilderness and
                instinct.
              </p>
              <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                Specialty Classes
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Wrangler</strong> - Wranglers keep track of known magical beast locations,
                  keeping thorough records and maintaining the divide between cryptids and
                  humankind. If any cryptid escapes its habitat or territory and causes destruction
                  in magical or non-magical society, wranglers are responsible for its capture, or
                  in worst-case scenarios, for putting the cryptid down.
                </li>
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Wildtongue</strong> - A wildtongue, like a House Ashthorn Sylvan, has
                  developed intricate methods of communication with beasts of all kinds. Wildtongues
                  often form deep connections with an individual beast and gain wisdom and magical
                  aid from their animal companions.
                </li>
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Beasttender</strong> - Beasttenders have the critical role of ensuring the
                  longevity of magical beasts and cryptids. While many magical beasts were hunted to
                  near extinction by non-magical people, the magic users who specialize as
                  beasttenders nurture, raise, and tend endangered beasts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
