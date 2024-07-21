"use client";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center w-full thinBox py-4 px-8 sticky top-0 z-30 bg-zinc-300 ${
        isScrolling ? " h-12" : ""
      } transition-all duration-300`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <a className="navbar-item" href="/">
            <Image
              className=" whiteBox rounded-full"
              src="/logo.webp"
              alt="Logo"
              width={40}
              height={40}
              onClick={() => (window.location.href = "/")}
            />
          </a>
        </div>
        <div className="flex space-x-6">
          <a className="navbar-item text-gray-600 hover:text-blue-500" href="/">
            Home
          </a>
          <a
            className="navbar-item text-gray-600 hover:text-blue-500"
            href="/#about"
          >
            About
          </a>
          <a
            className="navbar-item text-gray-600 hover:text-blue-500"
            href="/pricing"
          >
            Pricing
          </a>
          <a
            className="navbar-item text-gray-600 hover:text-blue-500"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
