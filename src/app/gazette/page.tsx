import GazetteFeed from '../../components/GazetteFeed';
import { GazetteHeader, GazetteBackground, GazetteDivider, GazetteFooter } from '../../images';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { gazetteEntries } from './gazetteEntries';

export default function GazettePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EAD8C1' }}>
      <Navbar />

      <main className="mx-auto max-w-5xl px-0 pt-0 sm:px-6 sm:pb-20 sm:pt-0 m-0">
        <header className="text-center">
          <h1 className="sr-only">Market Gazette</h1>
          <div className="mx-auto w-full max-w-5xl">
            <Image
              src={GazetteHeader}
              alt="Market Gazette"
              width={2124}
              height={640}
              className="mx-auto h-auto w-full object-contain"
              priority
            />
          </div>
        </header>

        <section
          style={{
            backgroundImage: `url(${GazetteBackground})`,
            backgroundPosition: 'top center',
            backgroundRepeat: 'repeat-y',
            backgroundSize: '100% auto',
          }}
        >
          <div className="lg:pl-8 lg:pr-8 sm:p-4 pt-0 mt-0 px-2">
            <GazetteFeed entries={gazetteEntries} />
          </div>
          <Image
            src={GazetteFooter}
            alt="Market Gazette Divider"
            width={2124}
            height={640}
            className="mx-auto h-auto w-full object-contain"
            priority
          />
        </section>
      </main>
    </div>
  );
}
