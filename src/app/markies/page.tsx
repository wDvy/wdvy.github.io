import Navbar from '../../components/Navbar';
import MarkieCard from '../../components/MarkieCard';
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

        <MarkieCard
          name="Markie 1"
          bio={"This section will contain bio information for Markie 1. It sits on the right for desktop and below the image on mobile. Replace with details, bios, or other relevant info."}
          image={Logo}
          imageAlt="Markies detail"
          instagramUrl="https://instagram.com"
          instagramHandle='Example Handle'
        />

        <MarkieCard
          name="Markie 2"
          bio={"This section will contain bio information for Markie 2. It sits on the right for desktop and below the image on mobile. Replace with details, bios, or other relevant info."}
          image={Logo}
          imageAlt="Markies detail"
          instagramUrl="https://instagram.com"
          instagramHandle='Example Handle'
          reverse
        />


    </div>
  );
}
