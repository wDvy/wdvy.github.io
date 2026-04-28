import Image, { StaticImageData } from 'next/image';

type MarkieCardProps = {
  name: string;
  bio: string;
  image: StaticImageData | string;
  imageAlt?: string;
  instagramUrl?: string;
  instagramHandle?: string;
  reverse?: boolean;
};

export default function MarkieCard({
  name,
  bio,
  image,
  imageAlt = '',
  instagramUrl,
  instagramHandle,
  reverse = false,
}: MarkieCardProps) {
  const imageOrderClass = reverse ? 'order-1 md:order-2' : '';
  const bioOrderClass = reverse ? 'order-2 md:order-1' : '';

  const handle = instagramHandle ? instagramHandle.replace(/^@/, '').trim() : undefined;
  const igUrl = instagramUrl ? instagramUrl : handle ? `https://instagram.com/${handle}` : undefined;

  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className={`md:col-span-1 flex flex-col items-center justify-center ${imageOrderClass}`}>
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-md flex items-center justify-center">
            <Image src={image} alt={imageAlt || name} fill className="object-cover" />
          </div>

          {igUrl && (
            <div className="mt-4 flex items-center justify-center w-full">
              <a
                href={igUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={handle ? `${name} on Instagram (@${handle})` : `${name} on Instagram`}
                className="inline-flex items-center gap-2 text-sm text-zinc-700 hover:text-black dark:text-zinc-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM17.5 6.25a.75.75 0 110 1.5.75.75 0 010-1.5z" />
                </svg>
                {handle ? <span className="text-sm">@{handle}</span> : <span className="sr-only">Instagram</span>}
              </a>
            </div>
          )}
        </div>

        <div className={`md:col-span-2 ${bioOrderClass}`}>
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{name}</h3>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">{bio}</p>
        </div>
      </div>
    </section>
  );
}
