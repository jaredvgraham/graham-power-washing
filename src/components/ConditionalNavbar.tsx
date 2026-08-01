"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const HIDDEN_PREFIXES = ["/qr", "/get-quote", "/login", "/admin"];

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const hideNavbar = HIDDEN_PREFIXES.some((prefix) =>
    pathname?.startsWith(prefix),
  );

  if (hideNavbar) return null;

  return (
    <nav aria-label="Main Navigation" className="relative">
      <Navbar />
    </nav>
  );
}
