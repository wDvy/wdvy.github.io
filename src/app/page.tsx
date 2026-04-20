import Link from "next/link";

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
            <h2 className="text-3xl md:text-5xl font-extrabold">Hero Video</h2>
            <p className="mt-2 max-w-2xl mx-auto text-sm md:text-lg">
              A short placeholder tagline goes here.
            </p>
          </div>
        </div>
      </section>

      {/* Navbar below the video (logo on left, links left-aligned, responsive) */}
      <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start py-4 gap-4">
            {/* Logo placeholder (left) */}
            <a
              href="#"
              aria-label="Homepage"
              className="flex items-center shrink-0"
            >
              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-zinc-200 dark:bg-zinc-700 rounded-md flex items-center justify-center text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-50">
                L
              </div>
              <span className="ml-3 hidden sm:inline text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Brand
              </span>
            </a>

            {/* Links (wrap on small screens) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <Link href="#" className="text-sm sm:text-base text-zinc-700 hover:text-black dark:text-zinc-300">
                Link 1
              </Link>
              <Link href="#" className="text-sm sm:text-base text-zinc-700 hover:text-black dark:text-zinc-300">
                Link 2
              </Link>
              <Link href="#" className="text-sm sm:text-base text-zinc-700 hover:text-black dark:text-zinc-300">
                Link 3
              </Link>
              <Link href="#" className="text-sm sm:text-base text-zinc-700 hover:text-black dark:text-zinc-300">
                Link 4
              </Link>
              <Link href="#" className="text-sm sm:text-base text-zinc-700 hover:text-black dark:text-zinc-300">
                Link 5
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Placeholder heading and text */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 text-center">
          Placeholder Heading
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 text-center">
          This is placeholder body text for the home page. Replace with your own
          content when ready.
        </p>
      </main>
    </div>
  );
}
