'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import { getFactionResult } from '../factionResults';

export default function FactionQuizResultsPage() {
  const searchParams = useSearchParams();
  const result = getFactionResult(searchParams.get('faction'));

  if (!result) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-(--color-parchment)">
        <Navbar />
        <main className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">No result found</h1>
          <Link href="/faction-quiz" className="mt-8 inline-flex rounded-lg bg-zinc-900 px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 dark:border dark:border-zinc-900 dark:bg-(--color-surface) dark:text-zinc-900">
            Take the quiz
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-(--color-parchment)">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <section className="py-24 text-center" aria-live="polite">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">Your faction is</p>
          <h1 className="mt-3 text-4xl font-bold text-zinc-900 dark:text-zinc-50">{result.title}</h1>
          <Image src={result.image} alt={result.imageAlt} width={600} height={400} className="mx-auto mt-10 max-h-80 w-auto rounded-lg object-contain" />
          <ul className="mx-auto mt-10 max-w-xl space-y-2 text-left text-lg text-zinc-700 dark:text-zinc-300">
            {result.principles.map((principle) => (
              <li key={principle} className="flex gap-3"><span aria-hidden="true">•</span><span>{principle}</span></li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-left text-lg leading-8 text-zinc-700 dark:text-zinc-300">{result.description}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/tickets" className="faction-quiz-link text-base font-semibold"><span>Tickets</span></Link>
            <Link href="/faction-quiz" className="rounded-lg bg-zinc-900 px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 dark:border dark:border-zinc-900 dark:bg-(--color-surface) dark:text-zinc-900">Take the quiz again</Link>
          </div>
        </section>
      </main>
    </div>
  );
}