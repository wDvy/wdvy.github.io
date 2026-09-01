'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { FaFacebookF, FaLink, FaRedditAlien, FaShare, FaXTwitter } from 'react-icons/fa6';
import Navbar from '../../../components/Navbar';
import { getFactionResult } from '../factionResults';

export default function FactionQuizResultsPage() {
  return (
    <Suspense fallback={null}>
      <FactionQuizResult />
    </Suspense>
  );
}

function FactionQuizResult() {
  const searchParams = useSearchParams();
  const result = getFactionResult(searchParams.get('faction'));
  const [shareMessage, setShareMessage] = useState('');

  if (!result) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-(--color-parchment)">
        <Navbar />
        <main className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">No result found</h1>
          <Link
            href="/faction-quiz"
            className="mt-8 inline-flex rounded-lg bg-zinc-900 px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 dark:border dark:border-zinc-900 dark:bg-(--color-surface) dark:text-zinc-900"
          >
            Take the quiz
          </Link>
        </main>
      </div>
    );
  }

  const factionTitle = result.title;
  const shareUrl = window.location.href;
  const shareText = `I got ${factionTitle} in the Magical Midwinter Faction Quiz. Discover your faction:`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`;

  async function shareResult() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `My Magical Midwinter Faction: ${factionTitle}`,
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        setShareMessage('Unable to open sharing options.');
      }
      return;
    }

    await copyShareLink();
  }

  async function copyShareLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareMessage('Link copied to clipboard.');
    } catch {
      setShareMessage('Unable to copy the link.');
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-(--color-parchment)">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <section className="py-24 text-center" aria-live="polite">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">Your faction is</p>
          <h1 className="mt-3 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            {result.title}
          </h1>
          <Image
            src={result.image}
            alt={result.imageAlt}
            width={600}
            height={400}
            className="mx-auto mt-10 max-h-80 w-auto rounded-lg object-contain"
          />
          <ul className="mx-auto mt-10 max-w-xl space-y-2 text-left text-lg text-zinc-700 dark:text-zinc-300">
            {result.principles.map((principle) => (
              <li key={principle} className="flex gap-3">
                <span aria-hidden="true">•</span>
                <span>{principle}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-left text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            {result.description}
          </p>
          <section
            className="mx-auto mt-10 max-w-xl border-y border-zinc-200 py-6 dark:border-zinc-800"
            aria-labelledby="share-result-heading"
          >
            <h2
              id="share-result-heading"
              className="text-xl font-semibold text-zinc-900 dark:text-zinc-50"
            >
              Share your result
            </h2>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={shareResult}
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-zinc-900 px-4 font-semibold text-white transition-opacity hover:opacity-90 dark:border dark:border-zinc-900 dark:bg-(--color-surface) dark:text-zinc-900"
              >
                <FaShare aria-hidden="true" />
                Share
              </button>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                title="Share on Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-300 text-lg text-zinc-700 transition-colors hover:border-(--color-alchemy) hover:text-(--color-alchemy) dark:border-zinc-700 dark:text-zinc-300"
              >
                <FaFacebookF aria-hidden="true" />
              </a>
              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                title="Share on X"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-300 text-lg text-zinc-700 transition-colors hover:border-(--color-alchemy) hover:text-(--color-alchemy) dark:border-zinc-700 dark:text-zinc-300"
              >
                <FaXTwitter aria-hidden="true" />
              </a>
              <a
                href={redditUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Reddit"
                title="Share on Reddit"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-300 text-lg text-zinc-700 transition-colors hover:border-(--color-alchemy) hover:text-(--color-alchemy) dark:border-zinc-700 dark:text-zinc-300"
              >
                <FaRedditAlien aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={copyShareLink}
                aria-label="Copy result link"
                title="Copy result link"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-300 text-lg text-zinc-700 transition-colors hover:border-(--color-alchemy) hover:text-(--color-alchemy) dark:border-zinc-700 dark:text-zinc-300"
              >
                <FaLink aria-hidden="true" />
              </button>
            </div>
            <p className="mt-3 min-h-6 text-sm text-zinc-600 dark:text-zinc-400" aria-live="polite">
              {shareMessage}
            </p>
          </section>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/tickets" className="faction-quiz-link text-base font-semibold">
              <span>Tickets</span>
            </Link>
            <Link
              href="/faction-quiz"
              className="rounded-lg bg-zinc-900 px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 dark:border dark:border-zinc-900 dark:bg-(--color-surface) dark:text-zinc-900"
            >
              Take the quiz again
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
