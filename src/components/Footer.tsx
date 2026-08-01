import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { phoneDisplay, phoneTelHref } from "@/lib/phone";
import { SERVICES } from "@/data/services";
import { getTownAreas, getRegionalAreas } from "@/data/serviceAreas";

const Footer = () => {
  const towns = getTownAreas();
  const regions = getRegionalAreas();

  return (
    <footer className="bg-slate-950 text-white py-12" aria-label="Footer">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              Graham Power Washing
            </p>
            <h2 className="mt-3 text-2xl font-bold">Ready for a cleaner home?</h2>
            <p className="mt-3 text-slate-400">
              Soft washing, pressure washing, and window cleaning across
              Plymouth, the South Shore, and Cape Cod.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Get a Free Quote
              </Link>
              <a
                href={phoneTelHref}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Call {phoneDisplay}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href} className="hover:text-white">
                    {service.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="hover:text-white">
                  All services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
              Areas
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-300">
              {towns.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas-served/${area.slug}`}
                    className="hover:text-white"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              {regions.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas-served/${area.slug}`}
                    className="hover:text-white"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li className="col-span-2">
                <Link
                  href="/areas-served"
                  className="font-medium text-white hover:text-red-300"
                >
                  All areas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <a
              href="https://www.facebook.com/p/GRAHAM-PAINTING-POWERWASHING-100063725705465/"
              className="mt-5 inline-flex text-slate-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page for Graham Power Washing"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Graham Power-Washing. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
