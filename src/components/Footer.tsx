import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8" aria-label="Footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Graham Power-Washing</h2>
            <p className="text-gray-400">
              Providing top-quality power washing and interior &amp; exterior
              painting services for over a decade.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4 md:space-y-0 md:space-x-8 md:flex-row">
            <nav aria-label="Quick Links" className="mb-2 md:mb-0">
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-gray-300 text-sm">
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
              </ul>
            </nav>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/p/GRAHAM-PAINTING-POWERWASHING-100063725705465/"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page for Graham Power Washing"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2025 Graham Power-Washing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
