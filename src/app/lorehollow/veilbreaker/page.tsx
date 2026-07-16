import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import { LorehollowTan, VictorCreo } from '../../../images';

export default function VeilbreakerPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />

      <section className="relative">
        {/* <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <div className="mx-auto mb-6 w-full max-w-md">
            <Image
              src={VictorCreo}
              alt="Veilbreaker"
              width={600}
              height={600}
              className="mx-auto w-full h-auto object-contain rounded-4xl"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            The Veilbreakers
          </h1>
        </div> */}
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 rounded-3xl border border-zinc-200 bg-(--color-vellum) p-4 sm:p-6 shadow-lg md:grid-cols-2 md:p-10 dark:border-zinc-800 dark:bg-(--color-vellum)">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                The Veilbreakers
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                I’m Victor Creo and I want you to seize your magic… Lorehollow is keeping us weak.
                Under the guise of education, ethics, elitism, the professors hide a massive power
                source available to all without specialty training. They call it taboo… I call it
                gatekeeping. Join the Veilbreakers at the marketplace and uncover the conspiracy.
                Help me break the Veil. Come find me at the marketplace and learn more, or join us
                during our tavern takeover and learn the truth about our founder, my beloved
                Viviane.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src={VictorCreo}
                alt="Veilbreaker crest"
                width={400}
                height={400}
                className="w-full max-w-sm rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
