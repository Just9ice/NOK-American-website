import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  href: string;
  image: string;
  bullets: string[];
};

export function ProductCard({ title, href, image, bullets }: Props) {
  return (
    <Link href={href} className="group block h-full">
      <article className="flex flex-col bg-white rounded-3xl p-5 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
        <h3 className="text-lg font-medium text-center text-gray-900 mb-4">{title}</h3>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-5">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <ul className="space-y-2 flex-grow">
          {bullets.map((item, index) => (
            <li key={index} className="flex items-center text-xs xl:text-sm text-gray-600 border border-gray-100 rounded-full px-3 py-2 bg-white">
              <svg className="h-4 w-4 text-[#2b593f] mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="truncate">{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </Link>
  );
}
