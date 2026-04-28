import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">MMF</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              A regional festival celebrating music, arts, and community in Louisville and the surrounding area.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/markies" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
                  Markies
                </Link>
              </li>
              <li>
                <Link href="/lorehollow" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
                  Lorehollow
                </Link>
              </li>
              <li>
                <Link href="/gazette" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
                  Gazette
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Accessibility */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/policies" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
                  Policies
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-center text-xs text-zinc-500 dark:text-zinc-500">
            © {currentYear} MMF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}