import GalleryGrid from '../../components/GalleryGrid';
import Navbar from '../../components/Navbar';
import { galleryImages } from './galleryImages';

export const metadata = {
  title: 'Gallery - Magical Midwinter',
  description: 'Photos from Magical Midwinter festivals.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[var(--color-parchment)] flex flex-col">
      <Navbar />

      <main className="max-w-6xl w-full mx-auto px-6 py-16 flex-1">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Gallery</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          A look back at the magic from past Midwinter festivals.
        </p>

        <div className="mt-10">
          <GalleryGrid images={galleryImages} />
        </div>
      </main>
    </div>
  );
}
