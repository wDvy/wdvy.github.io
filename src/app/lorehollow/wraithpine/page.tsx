import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import { WraithpineCrestTransparent } from '../../../images';

export default function WraithpinePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[var(--color-parchment)] font-sans">
      <Navbar />

      <section className="relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
          <div className="mx-auto mb-6 w-full max-w-md">
            <Image
              src={WraithpineCrestTransparent}
              alt="Wraithpine crest"
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
                About Wraithpine
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Skills & Magic Specialty:</strong> Spirit Speaking & Ancestral Magic -
                keepers of the veil who commune with spirits, preserve ghost lore, and guide the
                dead.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Head of house & House Narrative:</strong> Founded by Coraline Wraithpine, a
                widow who could hear the voices of those buried beneath the old pine grove. She used
                her gift to bring messages to the living, ensuring peace between worlds. Current
                head of house Mistress Elmira Blackwood is rumored to never sleep, wandering the
                school at night whispering to unseen companions.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Animal:</strong> Barn owl - silent, mysterious, and a night guide
                through the unseen.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Color:</strong> Midnight blue - depth, mystery, and the calm of the
                after-dark world.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Sigil:</strong> A pine tree with a ghostly silhouette woven into its
                branches.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Element:</strong> Aether - the spirit element, bridging the living and
                the dead.
              </p>
              <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                Specialty Classes
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Whisper</strong> - The Whisper specialty class has much in common with the
                  non-magical concept of a medium, or one who communes directly with spirits of the
                  dead. House Wraithpine students who specialize in this class undergo rigorous
                  training in order to control the onslaught of recently dead souls clamoring for
                  their attention.
                </li>
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Archivist</strong> - Archivists, the rarest specialty class of House
                  Wraithpine, are tasked with keeping and maintaining the library and archive of
                  magical history and ancestral lore, especially histories which have been passed
                  down in oral or non-written traditions. Through their magic, Archivists address
                  gaps in non-magical written archives and give voice to the experiences of the dead
                  who were often silenced in systems of oppression.
                </li>
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Veilkeeper</strong> - Veilkeepers focus on training to uphold and maintain
                  the magical veil that separates the land of the living from the souls and magic of
                  the dead. Veilkeepers learn a variety of rituals and barrier magics, and also work
                  closely with Ward Weavers from House Ironstag to achieve their goals.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
