import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
import LocalLandingHero from "@/components/LocalLandingHero";
import GetAiQuote from "@/components/AiQuote";
import {
  areaCanonical,
  areaDisplayName,
  getNearbyAreas,
  type ServiceAreaDefinition,
} from "@/data/serviceAreas";
import { SERVICES } from "@/data/services";
import { phoneDisplay, phoneTelHref } from "@/lib/phone";
import {
  areaHeroSupport,
  areaKeywordH1,
  areaLocationLabel,
  placePhrase,
} from "@/lib/seo/serviceAreaContent";
import {
  getAreaHero,
  getAreaTier,
  LOCAL_BUSINESS_ID,
  shouldIndexServiceArea,
  SITE_URL,
} from "@/lib/seo/localSeo";

type Props = {
  area: ServiceAreaDefinition;
};

const REVIEW_URL = "https://g.page/r/Ce-IiV_Ozzm3EAI/review";

/**
 * Town hub built for indexation: unique local copy first, shared conversion
 * blocks second, and no repeated LocalBusiness / identical review dump.
 */
export default function AreaDetailPage({ area }: Props) {
  const nearby = getNearbyAreas(area, 6);
  const display = areaDisplayName(area);
  const url = areaCanonical(area.slug);
  const place = placePhrase(area);
  const quoteTown = area.setting === "regional" ? "" : area.name;
  const hero = getAreaHero(area);
  const tier = getAreaTier(area);
  const keywordH1 = areaKeywordH1(area);
  const placeLabel =
    area.setting === "regional" ? area.label : area.name;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: keywordH1,
        description: area.metaDescription,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": LOCAL_BUSINESS_ID },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}${hero.src}`,
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${SITE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Areas Served",
              item: `${SITE_URL}/areas-served`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: area.name,
              item: url,
            },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Power washing and soft washing ${place}`,
        serviceType: "Power Washing",
        provider: { "@id": LOCAL_BUSINESS_ID },
        areaServed: {
          "@type":
            area.setting === "regional" ? "AdministrativeArea" : "City",
          name: display,
        },
        url,
      },
    ],
  };

  return (
    <main className="bg-white">
      <LocalLandingHero
        locationLabel={areaLocationLabel(area)}
        headline={keywordH1}
        support={areaHeroSupport(area)}
        imageSrc={hero.src}
        imageAlt={`Exterior cleaning work serving ${display}`}
        imagePosition={hero.objectPosition}
        trustLine={`Licensed & insured · Serving ${display}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Areas Served", href: "/areas-served" },
          { label: area.name },
        ]}
      />

      {/* Unique local content first — this is what separates town pages */}
      <section
        className="bg-white py-16 sm:py-20"
        aria-label={`Power washing ${place}`}
      >
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            {area.county}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Exterior cleaning built for {placeLabel}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            {area.intro}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            {area.housingNote}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            {area.climateNote}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Graham Power Washing is based in Buzzards Bay and regularly serves{" "}
            {display}. {area.heroTagline}. Request a free quote for soft
            washing, pressure washing, decks, concrete, or windows — we&apos;ll
            confirm timing for your street.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote-form"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-base font-bold text-white transition hover:bg-red-500"
            >
              Get a Free {placeLabel} Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={phoneTelHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 px-8 py-3.5 text-base font-bold text-slate-900 transition hover:bg-slate-50"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section
        id="services"
        aria-label={`Services ${place}`}
        className="bg-slate-950 py-20 text-white sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              Services {place}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What we clean in {placeLabel}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              {tier === "core"
                ? `Open a dedicated ${area.name} service page for local details, or jump to a free quote below.`
                : `Learn about each service, then request a free quote for work ${place}.`}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const href = shouldIndexServiceArea(service, area)
                ? `/services/${service.slug}/${area.slug}`
                : service.href;
              return (
                <Link
                  key={service.slug}
                  href={href}
                  className="group relative block aspect-[4/5] overflow-hidden bg-slate-900"
                >
                  <Image
                    src={service.heroImage}
                    alt={`${service.name} ${place}`}
                    fill
                    className={`object-cover transition duration-700 group-hover:scale-105 ${service.heroObjectPosition ?? "object-center"}`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {service.shortName} {place}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80">
                      {service.cardDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-300">
                      {shouldIndexServiceArea(service, area)
                        ? `View ${area.name} details`
                        : `Learn more`}
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="contact"
        aria-label={`Free quote ${place}`}
        className="bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-xl px-4">
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Free quote
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Request service {place}
            </h2>
            <p className="mt-3 text-slate-600">
              Town is prefilled for {placeLabel}. Tell us what needs cleaning —
              no pressure.
            </p>
          </div>
          <GetAiQuote
            formOnly
            defaultTown={quoteTown}
            areaLabel={placeLabel}
          />
        </div>
      </section>

      {/* Trust without repeating the same review text on every town page */}
      <section className="border-y border-slate-200 bg-white py-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-1 text-amber-500" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-slate-950">
              Top-rated local crew serving {placeLabel}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              See recent Google reviews from homeowners across the South Shore
              and Cape Cod.
            </p>
          </div>
          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Read Google reviews
          </a>
        </div>
      </section>

      {nearby.length > 0 && (
        <section
          className="bg-slate-50 py-14"
          aria-label="Nearby areas"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-950">
              Nearby towns we also serve
            </h2>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {nearby.map((near) => (
                <li key={near.slug}>
                  <Link
                    href={`/areas-served/${near.slug}`}
                    className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-blue-300 hover:text-blue-800"
                  >
                    <MapPin className="h-4 w-4 text-blue-600" aria-hidden />
                    Power washing in {near.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate-600">
              <Link
                href="/areas-served"
                className="font-semibold text-blue-700 underline"
              >
                See all areas we serve
              </Link>
            </p>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
