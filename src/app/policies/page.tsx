import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export const metadata = {
  title: 'Policies - MMF',
  description: 'MMF policies, terms, and conditions.',
};

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Policies</h1>

        <div className="mt-8 space-y-8 text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Terms of Use</h2>
            <p className="mt-2">
              By accessing this website, you agree to be bound by these terms of use. If you do not
              agree to any part of these terms, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Privacy Policy
            </h2>
            <p className="mt-2">
              MMF respects your privacy. We do not collect personal information beyond what you
              voluntarily provide (e.g., when purchasing tickets or signing up for newsletters). We
              do not sell or share your data with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Refund Policy</h2>
            <p className="mt-2">
              All ticket sales are final. We do not offer refunds unless an event is cancelled. In
              the case of cancellation, refunds will be issued through the original point of
              purchase within 14 business days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Code of Conduct
            </h2>
            <p className="mt-2">
              All attendees, artists, and staff are expected to treat others with respect and
              courtesy. Harassment, discrimination, or violent behavior will not be tolerated.
              Violations may result in removal from the event without refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Contact</h2>
            <p className="mt-2">
              For policy questions or concerns, please contact us at{' '}
              <a href="mailto:info@mmf.com" className="text-emerald-600 hover:underline">
                info@mmf.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
