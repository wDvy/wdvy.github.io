import Image from 'next/image';

export type FestivalSectionProps = {
  title: string;
  paragraphs: string[];
  reverse?: boolean;
  imageSrc?: string;
};

export default function FestivalSection({
  title,
  paragraphs,
  imageSrc = '',
  reverse = false,
}: FestivalSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className={reverse ? 'md:order-2' : 'md:order-1'}>
            <h2
              className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4"
              style={{ fontFamily: 'Game&Reality, serif' }}
            >
              {title}
            </h2>
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className={reverse ? 'md:order-1' : 'md:order-2'}>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-900/60 p-3 md:p-4">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={`${title} visual`}
                  width={900}
                  height={1200}
                  className="w-full h-auto rounded-lg object-contain"
                />
              ) : (
                <div className="w-full min-h-72 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center p-6 text-center text-zinc-600 dark:text-zinc-400">
                  Add a festival image for this section.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
