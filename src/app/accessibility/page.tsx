import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export const metadata = {
  title: 'Accessibility - MMF',
  description: 'MMF accessibility information and commitment.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Accessibility
        </h1>

        <div className="mt-8 space-y-8 text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Our Commitment
            </h2>
            <p className="mt-2">
              MMF is committed to providing an inclusive and accessible experience for all
              attendees, regardless of ability. We strive to ensure that our events and this website
              are accessible to everyone.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Website Accessibility
            </h2>
            <p className="mt-2">
              This website is designed to meet WCAG 2.1 AA standards. We work to ensure:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>All images have descriptive alt text</li>
              <li>Color contrast meets accessible ratios</li>
              <li>Navigation is possible using a keyboard</li>
              <li>Forms have clear labels and error messaging</li>
              <li>Text is resizable without loss of content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Event Accessibility
            </h2>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Service Animals
            </h2>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Request Accommodations
            </h2>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Feedback</h2>
            <p className="mt-2">
              We welcome your feedback on accessibility. If you encounter barriers or have
              suggestions for improvement, please let us know.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
