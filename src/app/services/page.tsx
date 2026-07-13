import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Paintbrush, PaintRoller } from "lucide-react";
import { SERVICES } from "@/data/services";

const PAINTING_SERVICES = [
  {
    name: "Exterior Painting",
    description:
      "Professional exterior painting for siding, trim, decks, fences, and more — proper prep for a long-lasting finish.",
    icon: PaintRoller,
  },
  {
    name: "Interior Painting",
    description:
      "Interior painting for walls, ceilings, trim, and doors. Clean lines, careful prep, and a flawless finish.",
    icon: Paintbrush,
  },
];

export const metadata = {
  title: "Our Services | Graham Power Washing",
  description:
    "Explore professional power washing, soft washing, window cleaning, and interior & exterior painting services from Graham Power Washing in Plymouth, MA and the South Shore.",
  alternates: {
    canonical: "https://www.grahampowerwashing.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:py-28">
        <Image
          src="/new1.jpeg"
          alt="Graham Power Washing truck at a coastal home soft wash job"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-slate-950/70 to-slate-950" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Graham Services
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
            Soft washing, pressure washing, windows, and paint.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Real crew photos from jobs across Plymouth, the South Shore, and
            Cape Cod — not stock art.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-base font-bold text-white transition hover:bg-red-500"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative block aspect-[4/5] overflow-hidden bg-slate-100"
            >
              <Image
                src={service.heroImage}
                alt={service.heroAlt}
                fill
                className={`object-cover transition duration-700 group-hover:scale-105 ${service.heroObjectPosition ?? "object-center"}`}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h2 className="text-2xl font-bold text-white">{service.name}</h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/80">
                  {service.cardDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-semibold text-red-300">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-slate-950">
            Painting Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            Professional interior and exterior painting for Plymouth, South
            Shore, and Cape Cod homes.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {PAINTING_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className="flex gap-4 border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-red-50 text-red-600">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">
                      {service.name}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <Link
                      href="/quote"
                      className="mt-4 inline-flex items-center gap-2 font-semibold text-blue-700"
                    >
                      Get a Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
