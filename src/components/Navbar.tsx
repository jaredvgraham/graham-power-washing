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
import { Phone } from "lucide-react";
import { phoneTelHref } from "@/lib/phone";

const Navbar = () => {
  const [position, setPosition] = React.useState<string | undefined>(undefined);
  const Router = useRouter();
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = React.useState(false);

  useEffect(() => {
    setIsHomePage(pathname === "/");
  }, [pathname]);

  const textColor = isHomePage ? "text-white" : "text-black";
  const hoverColor = isHomePage ? "hover:text-blue-200" : "hover:text-blue-600";
  const quoteHref = isHomePage ? "#quote-form" : "/quote";

  return (
    <div
      className={`inset-x-0 z-30 w-full px-3 py-3 sm:px-6 lg:px-8 ${
        isHomePage
          ? "absolute top-0"
          : "sticky top-0 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Link className="navbar-item" href="/">
            <Image
              className="whiteBox rounded-full"
              src="/logo.webp"
              alt="Graham Power Washing Logo - Home"
              width={44}
              height={44}
              priority
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`${textColor} ${hoverColor} transition-colors`}
              >
                Services
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-lg ">
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
                <DropdownMenuRadioItem
                  value="window-cleaning"
                  onClick={() => Router.push("/services/window-cleaning")}
                >
                  Window Cleaning
                </DropdownMenuRadioItem>
                <DropdownMenuSeparator />
                <DropdownMenuRadioItem
                  value="exterior-painting"
                  onClick={() => Router.push("/quote")}
                >
                  Exterior Painting
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="interior-painting"
                  onClick={() => Router.push("/quote")}
                >
                  Interior Painting
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
        <div className="ml-auto flex items-center gap-2">
          <a
            href={phoneTelHref}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold transition md:hidden ${
              isHomePage
                ? "border-blue-400/40 bg-blue-600 text-white hover:bg-blue-500"
                : "border-blue-200 bg-blue-50 text-blue-700 hover:bg-white"
            }`}
            aria-label="Call Graham Power Washing"
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>
          <Link
            href={quoteHref}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-red-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-red-700 sm:px-5"
          >
            Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
