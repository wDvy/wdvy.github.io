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

          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            House Ashthorn
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 rounded-3xl border border-zinc-200 bg-(--color-vellum) p-8 shadow-lg md:grid-cols-2 md:p-10 dark:border-zinc-800 dark:bg-(--color-vellum)">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                About Ashthorn
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                (Content coming soon.)
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src={LorehollowTan}
                alt="Lorehollow crest"
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
