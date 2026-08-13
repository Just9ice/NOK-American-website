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
    <article className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100">
      <div className="relative h-64 w-full bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-[#17365d] mb-4">{title}</h3>
        <ul className="space-y-2 mb-6 flex-grow">
          {bullets.map((item, index) => (
            <li key={index} className="flex items-start text-gray-600">
              <svg className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="inline-flex justify-center items-center px-4 py-2 border border-[#17365d] text-base font-medium rounded-md text-[#17365d] bg-white hover:bg-[#17365d] hover:text-white transition-colors mt-auto"
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}
