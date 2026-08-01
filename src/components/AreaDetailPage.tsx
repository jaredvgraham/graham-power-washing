import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import LocalLandingHero from "@/components/LocalLandingHero";
import GetAiQuote from "@/components/AiQuote";
import Reviews from "@/components/Reviews";
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
  localBusinessJsonLd,
  shouldIndexServiceArea,
  SITE_URL,
} from "@/lib/seo/localSeo";

type Props = {
  area: ServiceAreaDefinition;
};

export default function AreaDetailPage({ area }: Props) {
  const nearby = getNearbyAreas(area, 6);
  const display = areaDisplayName(area);
  const url = areaCanonical(area.slug);
  const place = placePhrase(area);
  const quoteTown = area.setting === "regional" ? "" : area.name;
  const hero = getAreaHero(area);
  const tier = getAreaTier(area);
  const keywordH1 = areaKeywordH1(area);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: keywordH1,
        description: area.metaDescription,
        about: { "@id": LOCAL_BUSINESS_ID },
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
      localBusinessJsonLd({
        areaServed: {
          "@type":
            area.setting === "regional" ? "AdministrativeArea" : "City",
          name: display,
        },
      }),
    ],
  };

  return (
    <main className="bg-gray-50">
      <LocalLandingHero
        locationLabel={areaLocationLabel(area)}
        headline={keywordH1}
        support={areaHeroSupport(area)}
        imageSrc={hero.src}
        imageAlt={`Graham Power Washing job photo for ${display}`}
        imagePosition={hero.objectPosition}
        trustLine={`Licensed & insured · Serving ${display}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Areas Served", href: "/areas-served" },
          { label: area.name },
        ]}
      />

      <section id="contact" aria-label="Get a Free Quote" className="bg-slate-50">
        <GetAiQuote
          defaultTown={quoteTown}
          areaLabel={area.setting === "regional" ? area.label : area.name}
        />
      </section>

      <section id="reviews" aria-label="Customer Reviews">
        <Reviews />
      </section>

      <section
        id="services"
        aria-label={`Services ${place}`}
        className="bg-slate-950 py-20 text-white sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              What We Do {place}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Services for{" "}
              {area.setting === "regional" ? area.label : area.name}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              {tier === "core"
                ? `Each service below has a dedicated ${area.name} page with local details — or request a free quote above.`
                : `Request a free quote above, or learn more about each service we offer ${place}.`}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                      {service.shortName}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80">
                      {service.cardDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-300">
                      {shouldIndexServiceArea(service, area)
                        ? `${service.shortName} ${place}`
                        : `Learn about ${service.shortName.toLowerCase()}`}
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
        className="bg-white py-20 sm:py-24"
        aria-label={`About cleaning ${place}`}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Local to {area.name}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Why homes {place} need regular washing
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
            Based in Buzzards Bay, we serve {display} with the same careful soft
            washing and pressure washing homeowners trust across Plymouth County
            and the Upper Cape.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#quote-form"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-base font-bold text-white transition hover:bg-red-500"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={phoneTelHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-base font-bold text-slate-900 transition hover:bg-slate-50"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {nearby.length > 0 && (
        <section
          className="border-t border-slate-200 bg-slate-50 py-16"
          aria-label="Nearby areas"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-950">
              Also serving nearby
            </h2>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {nearby.map((near) => (
                <li key={near.slug}>
                  <Link
                    href={`/areas-served/${near.slug}`}
                    className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-blue-300 hover:text-blue-800"
                  >
                    <MapPin className="h-4 w-4 text-blue-600" aria-hidden />
                    {near.name}
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
