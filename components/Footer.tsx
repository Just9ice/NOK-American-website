import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-transparent text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/NOK-Inc-Company-LogoFinal-02-2.png"
              alt="NOK Inc Logo"
              width={150}
              height={35}
              className="mb-6"
            />
            <p className="text-gray-400">
              Visit our{" "}
              <a
                href="https://nok-website.vercel.app/"
                className="text-green-900 hover:text-green-600"
              >
                NOK Africa Website
              </a>
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#17365d] bg-white inline-block rounded">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/product/" className="hover:text-green-900">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services/" className="hover:text-green-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/financing/" className="hover:text-green-900">
                  Financing
                </Link>
              </li>
              <li>
                <Link href="/about-us/" className="hover:text-green-900">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#17365d] bg-white inline-block rounded">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>9017 Amelung St, Frederick, MD 21704 USA</li>
              <li>+1-240-394-6641</li>
              <li>+234-903-893-8856</li>
              <li>
                <a
                  href="mailto:info@nokinc.com"
                  className="hover:text-green-900"
                >
                  info@nokinc.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#17365d] bg-white inline-block rounded">
              Hours
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>Mon – Fri: 7.00 – 22.00</li>
              <li>Sat – Sun: 9.00 – 20.00</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 flex items-center justify-between">
          <p>&copy; {new Date().getFullYear()} NOK Inc. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://nokinc.com"
              className="text-gray-400 hover:text-green-900"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a
              href="https://nokinc.com"
              className="text-gray-400 hover:text-green-900"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://nokinc.com"
              className="text-gray-400 hover:text-green-900"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
