import React from "react";
import { FaFacebook } from "react-icons/fa";
import { clientData } from "@/../config";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-10" aria-label="Footer">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              Graham Power Washing
            </p>
            <h2 className="mt-3 text-2xl font-bold">Ready for a cleaner home?</h2>
            <p className="mt-3 text-slate-400">
              Providing top-quality power washing and interior &amp; exterior
              painting services for over a decade.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="/quote"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Get a Free Quote
              </a>
              <a
                href={`tel:${clientData.phone}`}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Call {clientData.phone}
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 md:items-end">
            <nav aria-label="Quick Links" className="mb-2 md:mb-0">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-300 sm:grid-cols-3">
                <li>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/areas-served" className="hover:text-white">
                    Areas Served
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/reviews" className="hover:text-white">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/p/GRAHAM-PAINTING-POWERWASHING-100063725705465/"
                className="text-slate-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page for Graham Power Washing"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">
              &copy; 2025 Graham Power-Washing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
