"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  Phone,
  X,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import { phoneDisplay, phoneTelHref } from "@/lib/phone";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/areas-served", label: "Areas Served" },
  { href: "/contact", label: "Contact" },
] as const;

const PAINTING_LINKS = [
  { href: "/quote", label: "Exterior Painting" },
  { href: "/quote", label: "Interior Painting" },
] as const;

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const quoteHref = isHomePage ? "#quote-form" : "/quote";
  const solidNav = !isHomePage || scrolled || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const linkClass = solidNav
    ? "text-slate-700 hover:text-slate-950"
    : "text-white/90 hover:text-white";

  return (
    <header
      className={`inset-x-0 z-50 w-full transition-all duration-300 ${
        isHomePage ? "fixed top-0" : "sticky top-0"
      } ${
        solidNav
          ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            className="rounded-full shadow-sm ring-1 ring-black/5"
            src="/logo.webp"
            alt="Graham Power Washing"
            width={40}
            height={40}
            priority
          />
          <span
            className={`hidden min-[420px]:block truncate text-sm font-bold leading-tight sm:text-[15px] ${
              solidNav ? "text-slate-950" : "text-white"
            }`}
          >
            Graham Painting
            <span
              className={`block text-[11px] font-semibold sm:text-xs ${
                solidNav ? "text-slate-500" : "text-white/70"
              }`}
            >
              &amp; Power Washing
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${linkClass}`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>

            <div
              className={`absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-2 transition ${
                servicesOpen
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
                <div className="grid grid-cols-2 gap-1 p-3">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.href}
                      className="rounded-xl px-3 py-2.5 text-left transition hover:bg-slate-50"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="block text-sm font-semibold text-slate-950">
                        {service.shortName}
                      </span>
                      <span className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-slate-500">
                        {service.cardDescription}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-slate-100 bg-slate-50 px-3 py-3">
                  <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Painting
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {PAINTING_LINKS.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
                        onClick={() => setServicesOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800"
                      onClick={() => setServicesOpen(false)}
                    >
                      All services
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${linkClass}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={phoneTelHref}
            className={`hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition xl:inline-flex ${
              solidNav
                ? "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                : "text-white/90 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Phone className="h-4 w-4" aria-hidden />
            {phoneDisplay}
          </a>
          <Link
            href={quoteHref}
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-500 sm:min-h-11 sm:px-5"
          >
            Free Quote
          </Link>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition lg:hidden ${
              solidNav
                ? "border-slate-200 bg-white text-slate-950"
                : "border-white/25 bg-white/10 text-white"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 top-16 bg-slate-950/40 transition sm:top-[4.25rem] ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
        <div
          className={`absolute inset-x-0 top-full origin-top border-b border-slate-200 bg-white shadow-xl transition ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto max-h-[min(78vh,40rem)] max-w-7xl overflow-y-auto px-4 py-4 sm:px-6">
            <div className="space-y-1">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-semibold text-slate-950 transition hover:bg-slate-50"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((open) => !open)}
              >
                Services
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 transition ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>

              {mobileServicesOpen && (
                <div className="mb-2 space-y-1 border-l-2 border-red-100 pl-3">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.href}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                      onClick={() => setMobileOpen(false)}
                    >
                      {service.shortName}
                    </Link>
                  ))}
                  {PAINTING_LINKS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold text-red-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    View all services
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              )}

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-slate-950 transition hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid gap-2 border-t border-slate-100 pt-4">
              <a
                href={phoneTelHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 text-base font-bold text-slate-950 transition hover:bg-white"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {phoneDisplay}
              </a>
              <Link
                href={quoteHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-5 text-base font-bold text-white transition hover:bg-red-500"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
