import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import { StormhollowCrestTransparent } from '../../../images';

export default function StormhollowPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />

      <section className="relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
          <div className="mx-auto mb-6 w-full max-w-md">
            <Image
              src={StormhollowCrestTransparent}
              alt="Stormbreak crest"
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
                About Stormbreak
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Skills & Magic Specialty:</strong> Weathercalling & Stormbinding - masters
                of lightning, wind, and water magic, able to summon tempests or still the air before
                a hunt. Inspired by Southern storm folklore and river magic.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Head of house & House Narrative:</strong> Founded by Tobias “Toby”
                Stormbreak, a riverboat mage who could predict floods and ride tornadoes. His
                greatest feat was steering an entire town’s worth of people to safety during a
                lightning storm. Current head of house Professor Lark Beaumont claims to feel every
                shift in the air pressure.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Animal:</strong> Great blue heron - patient, graceful, and tied to
                stormy riverbanks.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Color:</strong> Slate blue - representing stormclouds and rolling
                water.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Sigil:</strong> A heron standing in rising waves, lightning splitting
                the sky above.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>House Element:</strong> Water & Air - the balance between calm streams and
                raging storms.
              </p>
              <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                Specialty Classes
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Windcaller</strong> - Windcallers of House Stormbreak specialize in
                  controlling airflow and wind patterns. Often highly in demand to regulate natural
                  disasters, windcallers can create or dissipate areas of high and low pressure to
                  break up - or create - some of nature’s most destructive weather patterns.
                </li>
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Sparkspeaker</strong> - Sparkspeakers have an affinity for electric
                  energy, both natural and artificial. Sparkspeakers can channel friction from the
                  atmosphere to wield lightning sparks, or they can work with House Ironstag
                  Artificers to bring electric life to their creations. Some sparkspeakers
                  specialize in electric manipulation to control non-magical devices.
                </li>
                <li className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Wavesinger</strong> - Wavesingers commune with and control water of all
                  kinds, bending it to their will. Wavesinger training looks to the outside eye much
                  like dance or performance training, with many of the physical bending forms taking
                  cues from martial arts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
