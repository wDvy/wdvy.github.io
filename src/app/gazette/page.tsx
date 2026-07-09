import { GazetteOverlay } from '../../images';
import Navbar from '../../components/Navbar';

export default function GazettePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#EAD8C1' }}>
      <Navbar />

      <section className="px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative mx-auto w-full aspect-3/4 md:aspect-4/5">
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url(${GazetteOverlay})`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />

            {/* Adjust inset values to move/resize the content region inside the paper art. */}
            <div
              className="absolute overflow-y-auto"
              style={{
                top: '25%',
                left: '11%',
                right: '11%',
                bottom: '11%',
              }}
            >
              <article className="h-full px-3 py-2 md:px-6 md:py-4" style={{ color: '#3B2A1F' }}>
                <h1 className="text-2xl md:text-3xl font-semibold text-center">
                  The Market Gazette
                </h1>
                <p className="mt-4 text-sm md:text-base leading-relaxed">
                  Contiainer information... unfortunately this doesnt work well on mobile scaling.
                  Gonna have to chop this image up and make a bunch of vertical containers I
                  think...
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
