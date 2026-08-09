'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExtraExtra as ExtraExtraImage, StoryRedacted as StoryRedactedImage } from '../images';

function redactParagraph(text: string) {
  return text
    .split('')
    .map((character) => (character.trim() ? '█' : character))
    .join('');
}

export type GazetteFeedEntry = {
  ExtraExtra?: boolean;
  StoryRedacted?: boolean;
  headline: string;
  date?: string;
  dek?: string;
  paragraphs: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageWidth?: number;
  imageHeight?: number;
};

type GazetteFeedProps = {
  entries: GazetteFeedEntry[];
};

export default function GazetteFeed({ entries }: GazetteFeedProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>(entries.length > 0 ? [0] : []);

  return (
    <section aria-label="Market Gazette feed" className="">
      <div className="space-y-5">
        {entries.map((entry, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <article
              key={`${entry.headline}-${index}`}
              className="overflow-hidden rounded-[28px] border border-[#b99b73] bg-[#f7ecd9] shadow-[0_18px_40px_rgba(84,52,24,0.12)]"
            >
              <button
                type="button"
                className="relative flex w-full items-center justify-between gap-4 overflow-hidden px-5 py-5 text-left sm:px-7"
                aria-expanded={isOpen}
                aria-controls={`gazette-entry-panel-${index}`}
                onClick={() =>
                  setOpenIndexes((current) =>
                    current.includes(index)
                      ? current.filter((openIndex) => openIndex !== index)
                      : [...current, index]
                  )
                }
              >
                <div className="pointer-events-none absolute right-4 top-4 z-10 flex flex-col items-end gap-2 sm:right-6 sm:top-5">
                  {entry.ExtraExtra ? (
                    <div className="rotate-10 rounded-md border border-[#8e5f31]/40 bg-[#f3e1be] px-2 py-1 shadow-[0_8px_20px_rgba(84,52,24,0.18)]">
                      <Image
                        src={ExtraExtraImage}
                        alt=""
                        aria-hidden="true"
                        width={1396}
                        height={158}
                        className="h-auto w-28 sm:w-40"
                      />
                    </div>
                  ) : null}

                  {entry.StoryRedacted ? (
                    <div className="rotate-[-10deg] rounded-md border border-[#8e5f31]/40 bg-[#f3e1be] px-2 py-1 shadow-[0_8px_20px_rgba(84,52,24,0.18)]">
                      <Image
                        src={StoryRedactedImage}
                        alt=""
                        aria-hidden="true"
                        width={1396}
                        height={158}
                        className="h-auto w-28 sm:w-40"
                      />
                    </div>
                  ) : null}
                </div>

                <div className="min-w-0">
                  {entry.date ? (
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8e5f31]">
                      {entry.date}
                    </p>
                  ) : null}
                  <h2 className="text-2xl font-semibold text-[#3f2818] sm:text-3xl">
                    {entry.headline}
                  </h2>
                  {entry.dek ? (
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#6c4a32] sm:text-base">
                      {entry.dek}
                    </p>
                  ) : null}
                </div>

                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b99b73] bg-[#efe0c6] text-[#6b4723] transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 011.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              <div
                id={`gazette-entry-panel-${index}`}
                aria-hidden={!isOpen}
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="border-t border-[#d5bb94] px-5 pb-6 pt-2 sm:px-7 sm:pb-7">
                    {entry.imageSrc && entry.imageAlt && entry.imageWidth && entry.imageHeight ? (
                      <div className="mb-5 overflow-hidden rounded-[22px] border border-[#ccb089] bg-[#ead8c1]">
                        <div className="flex justify-center">
                          <Image
                            src={entry.imageSrc}
                            alt={entry.imageAlt}
                            width={entry.imageWidth}
                            height={entry.imageHeight}
                            style={{ borderRadius: '22px', padding: '4px' }}
                            className="mx-auto h-auto w-2/3 object-cover sm:w-1/2"
                          />
                        </div>
                        {entry.imageCaption ? (
                          <p className="border-t border-[#ccb089] px-4 py-3 text-center text-sm italic leading-relaxed text-[#6c4a32] sm:px-6">
                            {entry.imageCaption}
                          </p>
                        ) : null}
                      </div>
                    ) : null}

                    <div className="space-y-4 text-base leading-8 text-[#4c3527] sm:text-lg">
                      {entry.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className={entry.StoryRedacted ? 'whitespace-pre-line' : ''}
                        >
                          {entry.StoryRedacted ? redactParagraph(paragraph) : paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
