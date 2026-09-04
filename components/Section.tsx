import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
  bgWhite?: boolean;
};

export default function Section({ children, className = '', bgWhite = true }: SectionProps) {
  return (
    <section className={`py-16 sm:py-24 ${bgWhite ? 'bg-white' : 'bg-gray-50'} ${className}`}>
      <div className="mx-auto max-w-7xl 2xl:max-w-[90%] px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
