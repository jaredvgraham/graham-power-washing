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
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [position, setPosition] = React.useState(undefined);
  const Router = useRouter();
  return (
    <nav
      className={`flex items-center w-full thinBox py-4 px-8 sticky top-0 z-30 bg-zinc-300 `}
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
        <div className="flex space-x-6 ml-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-gray-600 hover:text-blue-500">
                Services
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-zinc-300 ">
              <DropdownMenuLabel>Services</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position || undefined}
                onValueChange={setPosition as () => React.SetStateAction<any>}
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
          <Link
            className="navbar-item text-gray-600 hover:text-blue-500"
            href="/#about"
          >
            About
          </Link>
          <Link
            className="navbar-item text-gray-600 hover:text-blue-500"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="navbar-item text-gray-600 hover:text-blue-500"
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
