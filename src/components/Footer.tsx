import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Graham Power-Washing</h2>
            <p className="text-gray-400">
              Providing top-quality power washing services for over a decade.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/p/GRAHAM-PAINTING-POWERWASHING-100063725705465/"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2024 Graham Power-Washing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
