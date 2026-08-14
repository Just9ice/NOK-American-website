"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Products", href: "/product/" },
  { name: "Services", href: "/services/" },

  { name: "Financing", href: "/financing/" },
  { name: "About Us", href: "/about-us/" },
  { name: "Contact", href: "/contact/" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed w-full top-0 z-50 pt-4">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-3xl border border-white/10 bg-black/45 backdrop-blur-xl shadow-[0_8ox_rgba(0,0,0,0.15)]"
        aria-label="Top"
      >
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/">
              <Image
                className="h-10 w-auto"
                src="/images/NOK-Inc-Company-LogoFinal-02-1.webp"
                alt="NOK Inc"
                width={150}
                height={40}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/next.svg";
                }}
              />
            </Link>
          </div>
          <div className="hidden space-x-8 md:flex">
            {navigation.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname === link.href.slice(0, -1) ||
                pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium ${
                    isActive
                      ? "text-green-400"
                      : "text-white hover:text-green-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="hidden md:flex">
            <Link
              href="/contact/"
              className="group inline-flex items-center justify-center rounded-md bg-white px-5 py-2 text-base font-semibold text-[#17365d] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_90px_rgba(22,169,74,0.35)]"
            >
              Get in Touch
              <span className="ml-3 font-black transition-transform duration-300 ease-out group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 md:hidden">
          {navigation.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname === link.href.slice(0, -1) ||
              pathname?.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium ${
                  isActive
                    ? "text-[#17365d] font-bold"
                    : "text-gray-700 hover:text-[#17365d]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
