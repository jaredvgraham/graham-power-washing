"use client";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [position, setPosition] = React.useState<string | undefined>(undefined);
  const Router = useRouter();
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = React.useState(false);

  useEffect(() => {
    setIsHomePage(pathname === "/");
  }, [pathname]);

  const textColor = isHomePage ? "text-white" : "text-black";
  const hoverColor = isHomePage ? "hover:text-teal-400" : "hover:text-blue-600";

  return (
    <nav className="flex items-center w-full py-4 p-2 md:px-8 z-30 absolute top-0 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center">
          <a className="navbar-item" href="/">
            <Image
              className="whiteBox rounded-full"
              src="/logo.webp"
              alt="Logo"
              width={40}
              height={40}
              onClick={() => (window.location.href = "/")}
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 ml-1">
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`${textColor} ${hoverColor} transition-colors`}
              >
                Services
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-300">
              <DropdownMenuLabel>Services</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={(value) => setPosition(value)}
              >
                <DropdownMenuRadioItem
                  value="vinyl-siding-soft-washing"
                  onClick={() =>
                    Router.push("/services/vinyl-siding-soft-washing")
                  }
                >
                  Vinyl Siding Soft Washing
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="cedar-shake-soft-washing"
                  onClick={() =>
                    Router.push("/services/cedar-shake-soft-washing")
                  }
                >
                  Cedar Shake Soft Washing
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="deck-pressure-washing"
                  onClick={() => Router.push("/services/deck-pressure-washing")}
                >
                  Deck Pressure Washing
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="concrete-pressure-washing"
                  onClick={() =>
                    Router.push("/services/concrete-pressure-washing")
                  }
                >
                  Concrete Pressure Washing
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="patio-pressure-washing"
                  onClick={() =>
                    Router.push("/services/patio-pressure-washing")
                  }
                >
                  Patio Pressure Washing
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Static Links */}
          <Link
            className={`navbar-item ${textColor} ${hoverColor} transition-colors`}
            href="/#about"
          >
            About
          </Link>
          <Link
            className={`navbar-item ${textColor} ${hoverColor} transition-colors`}
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className={`navbar-item ${textColor} ${hoverColor} transition-colors`}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
