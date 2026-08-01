"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const HIDDEN_EXACT = ["/"];
const HIDDEN_PREFIXES = ["/qr", "/get-quote", "/thank-you"];

export default function BackHomeButton() {
  const pathname = usePathname();

  const hide =
    !pathname ||
    HIDDEN_EXACT.includes(pathname) ||
    HIDDEN_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (hide) return null;

  return (
    <div className="container mx-auto px-4 pt-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back home
      </Link>
    </div>
  );
}
