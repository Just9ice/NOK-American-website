"use client";
import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 pt-4 px-4 sm:px-6">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-3xl border border-white/10 bg-black/45 backdrop-blur-xl shadow-lg relative"
        aria-label="Top"
      >
        <div className="flex w-full items-center justify-between py-4 md:py-6">
          <div className="flex items-center">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
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
          <div className="hidden space-x-6 lg:space-x-8 lg:flex">
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
          <div className="hidden lg:flex">
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

          {/* Hamburger Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400 rounded-md p-2"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[110%] left-0 w-full bg-black/85 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-lg overflow-hidden py-4 px-4 space-y-4">
            {navigation.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname === link.href.slice(0, -1) ||
                pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-green-500/20 text-green-400"
                      : "text-white hover:bg-white/10 hover:text-green-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact/"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center mt-4 rounded-md bg-white px-5 py-3 text-base font-semibold text-[#17365d] hover:bg-gray-100"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
