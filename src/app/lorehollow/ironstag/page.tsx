import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import { IronstagCrestTransparent } from '../../../images';

export default function IronstagPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />

      <section className="relative">
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <div className="mx-auto mb-6 w-full max-w-md">
            <Image
              src={IronstagCrestTransparent}
              alt="Ironstag crest"
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
                About Ironstag
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Skills & Magic Specialty:</strong> Protective Warding & Metalcraft - masters
                of enchantments placed on gates, tools, and weapons. Draws on blacksmithing
                traditions from rural Kentucky, blending iron and magic to ward off evil.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Head of house & House Narrative:</strong> Founded by Ezekiel “Zeke”
                Ironstag, a blacksmith who once forged a bell to drive away a plague of
                shadow-spirits in the hollers. Current head professor Master Clive Harkness wears a
                silver stag pin rumored to alert him to danger.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Animal:</strong> White stag - a rare guardian spirit seen as a herald
                of protection.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Color:</strong> Iron gray - strength, endurance, and unyielding
                defense.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Sigil:</strong> A stag’s head framed by crossed hammers.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Element:</strong> Metal - resilience, fortification, and sharp
                precision.
              </p>
              <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                Specialty Classes
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Artificer</strong> - Artificers specialize in making complex items of
                  power, specifically magical tools and weapons. Artificers may also specialize in
                  making siphons for magical users, items of power that channel innate magical
                  energy into directed, concentrated paths.
                </li>
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Arcane Engineer</strong> - Arcane engineers focus on physical defensive
                  crafting. While artificers focus on offensive items and ward makers focus on
                  ephemeral magical shields, shield masters create items like walls, buildings, and
                  handheld shields that physically deflect, protect, and shelter, often on large
                  scales.
                </li>
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Ward Weaver</strong> - A specialist in the area of intricate ward
                  crafting. The ward weavers of house Ironstag create and maintain many of the wards
                  holding the Veil in place, working in tandem with House Wraithpine Veilkeepers to
                  maintain balance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
