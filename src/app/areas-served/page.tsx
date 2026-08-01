import React from "react";
import Link from "next/link";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import { ArrowRight, MapPin } from "lucide-react";
import { getRegionalAreas, getTownAreas } from "@/data/serviceAreas";
import { SERVICES } from "@/data/services";
import {
  getCoreAreas,
  getIndexableServiceAreaPairs,
} from "@/lib/seo/localSeo";

export const metadata = {
  title: "Areas Served | Graham Power Washing",
  description:
    "Graham Power Washing provides professional power washing, soft washing, and window cleaning throughout Plymouth, Kingston, Duxbury, Marshfield, Scituate, Hingham, Wareham, Bourne, Falmouth, and towns across the South Shore and Cape Cod.",
  alternates: {
    canonical: "https://www.grahampowerwashing.com/areas-served",
  },
};

export default function AreasServedPage() {
  const towns = getTownAreas();
  const regions = getRegionalAreas();
  const core = getCoreAreas();

  const popularCombos = [
    ["vinyl-siding-soft-washing", "plymouth"],
    ["deck-pressure-washing", "duxbury"],
    ["window-cleaning", "scituate"],
    ["cedar-shake-soft-washing", "falmouth"],
    ["concrete-pressure-washing", "wareham"],
    ["patio-pressure-washing", "hingham"],
    ["vinyl-siding-soft-washing", "marshfield"],
    ["window-cleaning", "bourne"],
  ] as const;

  const indexedCount = getIndexableServiceAreaPairs().length;

  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 px-4 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600">
            <MapPin className="h-7 w-7" aria-hidden />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            South Shore &amp; Cape Cod
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
            <span className="text-red-400">Local power washing</span>{" "}
            <span className="text-blue-300">where you need it.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Choose your town for a local homepage with services, reviews, and a
            free quote — or jump into a dedicated service page for our core
            markets.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-red-700"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-3.5 text-base font-bold text-white transition hover:bg-white/15"
            >
              See Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="mb-12">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-950">
            Towns we serve
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Every town has a dedicated page. Core markets also have{" "}
            {SERVICES.length} service-specific pages ({indexedCount} total).
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {towns.map((area) => {
              const isCore = core.some((c) => c.slug === area.slug);
              return (
                <li key={area.slug}>
                  <Link
                    href={`/areas-served/${area.slug}`}
                    className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-800"
                  >
                    <MapPin
                      className="h-4 w-4 shrink-0 text-blue-600"
                      aria-hidden
                    />
                    <span>
                      {area.name}
                      {isCore ? (
                        <span className="mt-0.5 block text-[11px] font-normal text-slate-500">
                          Full service pages
                        </span>
                      ) : null}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="mt-4 flex flex-wrap justify-center gap-3">
            {regions.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/areas-served/${area.slug}`}
                  className="inline-flex items-center gap-2 bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {area.name} coverage
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-12 border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Popular service + town pages
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-600">
            High-intent pages for core South Shore and Cape Cod towns.
          </p>
          <ul className="mx-auto mt-6 grid max-w-2xl gap-2 text-left sm:grid-cols-2">
            {popularCombos.map(([service, town]) => {
              const serviceDef = SERVICES.find((s) => s.slug === service);
              const townName =
                town.charAt(0).toUpperCase() + town.slice(1).replace(/-/g, " ");
              return (
                <li key={`${service}-${town}`}>
                  <Link
                    href={`/services/${service}/${town}`}
                    className="text-blue-700 hover:underline"
                  >
                    {serviceDef?.shortName ?? service} in {townName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mx-auto mb-10 max-w-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-lg leading-8 text-slate-600">
            If you don&apos;t see your area listed,{" "}
            <Link
              href="/contact"
              className="font-semibold text-blue-700 underline"
            >
              contact us
            </Link>
            . We may still be able to help.
          </p>
        </div>
        <ServiceAreaMap
          heading=""
          subheading=""
          showCta={false}
          showTowns
          className="py-0"
        />
      </section>
    </main>
  );
}
