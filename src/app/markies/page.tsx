import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Logo from '../../../assets/Copy of Logo.webp';


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* Hero video (top) */}
      <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden bg-black">
        <video
          className="w-full h-full object-cover"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Hero video"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold"></h2>
            <p className="mt-2 max-w-2xl mx-auto text-sm md:text-lg"></p>
          </div>
        </div>
      </section>

      {/* Navbar (client) */}
      <Navbar />

      {/* Placeholder heading and text */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 text-center">
          Meet the Markies
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 text-center">
          This is placeholder body text for the home page. Replace with your own content when ready.
        </p>
      </main>

        {/* Two-column section below cards: image left (1/3), text right (2/3) */}
        <section className="max-w-6xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex items-center justify-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-md flex items-center justify-center">
                <Image src={Logo} alt="Markies detail" fill className="object-cover" />
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">About Markies</h3>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                This section contains header and explanatory text on the right. Replace
                this placeholder with the actual content you want to display about
                the Markies — details, schedule, and any important information.
              </p>
            </div>
          </div>
        </section>

        {/* Two-column section below cards: image left (1/3), text right (2/3) */}
        <section className="max-w-6xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">More About Markies</h3>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Another block of text that sits on the left for desktop and above the
                image on mobile. Replace with details, bios, or other relevant info.
              </p>
            </div>

            <div className="md:col-span-1 flex items-center justify-center order-1 md:order-2">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-md flex items-center justify-center">
                <Image src={Logo} alt="Markies detail" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>


    </div>
  );
}
