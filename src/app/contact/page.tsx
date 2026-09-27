import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export const metadata = {
  title: 'Contact - Magical Midwinter',
  description: 'Get in touch with Magical Midwinter.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[var(--color-parchment)] flex flex-col">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-16 flex-1">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Contact Us
        </h1>

        <div className="mt-8 space-y-8 text-zinc-600 dark:text-zinc-400">
          <section>
            <p>
              Have a question, comment, or just want to say hello? We&apos;d love to hear from you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Email</h2>
            <p className="mt-2">
              <a
                href="mailto:info@magicalmidwinter.com"
                className="text-[var(--color-alchemy)] hover:text-[var(--color-bloom)] underline"
              >
                admin@magicalmidwinter.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Follow Along</h2>
            <p className="mt-2">
              Stay up to date with announcements, sales and event dates by following{' '}
              <span className="text-zinc-900 dark:text-zinc-50">@magicalmidwinter</span> on social
              media.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
