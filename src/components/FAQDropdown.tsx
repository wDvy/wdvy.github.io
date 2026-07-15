'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQDropdownProps = {
  title?: string;
  items: FAQItem[];
};

export default function FAQDropdown({ title = 'Festival FAQ', items }: FAQDropdownProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-8"
          style={{ fontFamily: 'Game&Reality, serif' }}
        >
          {title}
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div
                key={item.question}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-900/60 overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-zinc-900 dark:text-zinc-50"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() =>
                    setOpenIndexes((current) =>
                      current.includes(index)
                        ? current.filter((openIndex) => openIndex !== index)
                        : [...current, index]
                    )
                  }
                >
                  <span className="text-base md:text-lg font-semibold">{item.question}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 011.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${index}`}
                    className="px-5 pb-5 text-zinc-700 dark:text-zinc-300 leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
