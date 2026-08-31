'use client';

import { useEffect, useState, type FormEvent } from 'react';

const STORAGE_KEY = 'mm-newsletter-dismissed-at';
const SHOW_AFTER_MS = 5000;
const SUPPRESS_FOR_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

type Status = 'idle' | 'submitting' | 'success' | 'error';

function shouldShowPopup(): boolean {
  const dismissedAt = window.localStorage.getItem(STORAGE_KEY);
  if (!dismissedAt) return true;
  return Date.now() - Number(dismissedAt) > SUPPRESS_FOR_MS;
}

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (!shouldShowPopup()) return;
    const timer = setTimeout(() => setVisible(true), SHOW_AFTER_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setVisible(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    try {
      // TODO: wire this up to a real email service (Mailchimp/ConvertKit/Formspree, etc.)
      await new Promise((resolve) => setTimeout(resolve, 500));
      setStatus('success');
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      setStatus('error');
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-popup-title"
    >
      <div className="relative w-full max-w-md rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-(--color-vellum) p-6 shadow-2xl">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close newsletter signup"
          className="absolute right-3 top-3 rounded-full p-1.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-4">
            <h2
              id="newsletter-popup-title"
              className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2"
              style={{ fontFamily: 'Game&Reality, serif' }}
            >
              You&apos;re on the list!
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              Thanks for signing up — keep an eye on your inbox.
            </p>
          </div>
        ) : (
          <>
            <h2
              id="newsletter-popup-title"
              className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2"
              style={{ fontFamily: 'Game&Reality, serif' }}
            >
              Join the Newsletter
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Get festival announcements, ticket alerts, and Lorehollow lore straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-(--color-parchment) px-4 py-2.5 text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-lg bg-zinc-900 dark:bg-(--color-parchment) px-4 py-2.5 font-semibold text-white dark:text-zinc-900 hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {status === 'submitting' ? 'Signing up…' : 'Sign Up'}
              </button>
              {status === 'error' ? (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again.
                </p>
              ) : null}
              <button
                type="button"
                onClick={dismiss}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:underline"
              >
                No thanks
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
