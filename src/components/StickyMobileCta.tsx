"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquareText, Phone } from "lucide-react";
import { phoneTelHref } from "@/lib/phone";

const HIDDEN_PREFIXES = [
  "/admin",
  "/avatar",
  "/contact",
  "/get-quote",
  "/qr",
  "/quote",
  "/signin",
  "/thank-you",
] as const;

export default function StickyMobileCta() {
  const pathname = usePathname();
  const [quoteFormActive, setQuoteFormActive] = useState(false);
  const hidden = HIDDEN_PREFIXES.some((prefix) => pathname?.startsWith(prefix));
  const quoteHref = pathname === "/" ? "#quote-form" : "/quote";

  useEffect(() => {
    if (pathname !== "/") {
      setQuoteFormActive(false);
      return;
    }

    const quoteForm = document.getElementById("quote-form");
    if (!quoteForm) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setQuoteFormActive(entry.isIntersecting);
      },
      {
        rootMargin: "-10% 0px -20% 0px",
        threshold: 0.05,
      },
    );

    const handleFocusIn = () => setQuoteFormActive(true);
    const handleFocusOut = () => {
      window.setTimeout(() => {
        if (!quoteForm.contains(document.activeElement)) {
          const rect = quoteForm.getBoundingClientRect();
          setQuoteFormActive(rect.top < window.innerHeight && rect.bottom > 0);
        }
      }, 0);
    };

    observer.observe(quoteForm);
    quoteForm.addEventListener("focusin", handleFocusIn);
    quoteForm.addEventListener("focusout", handleFocusOut);

    return () => {
      observer.disconnect();
      quoteForm.removeEventListener("focusin", handleFocusIn);
      quoteForm.removeEventListener("focusout", handleFocusOut);
    };
  }, [pathname]);

  if (hidden || quoteFormActive) return null;

  return (
    <>
      <div className="h-24 md:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-14px_30px_rgba(15,23,42,0.16)] backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-[1fr_0.82fr] gap-2">
          <Link
            href={quoteHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-red-700"
          >
            <MessageSquareText className="h-4 w-4" aria-hidden />
            Free Quote
          </Link>
          <a
            href={phoneTelHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700 transition hover:bg-white"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call
          </a>
        </div>
      </div>
    </>
  );
}
