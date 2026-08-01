import { SERVICES, type ServiceDefinition } from "@/data/services";
import {
  SERVICE_AREAS,
  type ServiceAreaDefinition,
} from "@/data/serviceAreas";

export const SITE_URL = "https://www.grahampowerwashing.com";
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#business`;

/** High-demand towns that get indexed service×area pages */
export const CORE_AREA_SLUGS = new Set([
  "plymouth",
  "kingston",
  "duxbury",
  "marshfield",
  "scituate",
  "hingham",
  "norwell",
  "wareham",
  "bourne",
  "sandwich",
  "falmouth",
  "buzzards-bay",
]);

export type AreaTier = "core" | "secondary" | "regional";

export function getAreaTier(area: ServiceAreaDefinition): AreaTier {
  if (area.setting === "regional") return "regional";
  if (CORE_AREA_SLUGS.has(area.slug)) return "core";
  return "secondary";
}

/**
 * Only core towns get indexed service×area pages.
 * Regional hubs and secondary towns stay as area landings only —
 * avoids thin doorway duplication across 132 URLs.
 */
export function shouldIndexServiceArea(
  _service: ServiceDefinition | string,
  area: ServiceAreaDefinition | string,
): boolean {
  const areaSlug = typeof area === "string" ? area : area.slug;
  return CORE_AREA_SLUGS.has(areaSlug);
}

export function getIndexableServiceAreaPairs(): {
  service: string;
  area: string;
}[] {
  return SERVICES.flatMap((service) =>
    SERVICE_AREAS.filter((area) => shouldIndexServiceArea(service, area)).map(
      (area) => ({ service: service.slug, area: area.slug }),
    ),
  );
}

export function getCoreAreas() {
  return SERVICE_AREAS.filter((a) => getAreaTier(a) === "core");
}

export function getSecondaryAreas() {
  return SERVICE_AREAS.filter((a) => getAreaTier(a) === "secondary");
}

/** Distinct hero photos per area so hubs don’t share one fingerprint */
const AREA_HEROES: Record<
  string,
  { src: string; objectPosition?: string }
> = {
  plymouth: { src: "/hero1.jpeg", objectPosition: "object-[58%_42%] sm:object-[62%_40%] lg:object-[center_38%]" },
  kingston: { src: "/IMG_7699.jpeg", objectPosition: "object-center" },
  duxbury: { src: "/IMG_7567.jpeg", objectPosition: "object-center" },
  carver: { src: "/IMG_7730.jpeg", objectPosition: "object-center" },
  marshfield: { src: "/IMG_7750.jpeg", objectPosition: "object-center" },
  pembroke: { src: "/deck-after.jpeg", objectPosition: "object-center" },
  hanson: { src: "/patio-after.jpeg", objectPosition: "object-center" },
  wareham: { src: "/new1.jpeg", objectPosition: "object-center" },
  hanover: { src: "/IMG_7523.jpeg", objectPosition: "object-center" },
  norwell: { src: "/IMG_7768.jpeg", objectPosition: "object-center" },
  bourne: { src: "/IMG_7555.jpeg", objectPosition: "object-[center_40%]" },
  "east-bridgewater": { src: "/IMG_7628.jpeg", objectPosition: "object-center" },
  bridgewater: { src: "/IMG_7779.jpeg", objectPosition: "object-center" },
  whitman: { src: "/IMG_7465.jpeg", objectPosition: "object-center" },
  lakeville: { src: "/IMG_7514.jpeg", objectPosition: "object-center" },
  sandwich: { src: "/IMG_7743.jpeg", objectPosition: "object-center" },
  scituate: { src: "/after1.jpeg", objectPosition: "object-center" },
  hingham: { src: "/IMG_7729.jpeg", objectPosition: "object-center" },
  falmouth: { src: "/windowclean.jpeg", objectPosition: "object-center" },
  "buzzards-bay": { src: "/IMG_7696.jpeg", objectPosition: "object-center" },
  "south-shore": { src: "/hero1.jpeg", objectPosition: "object-[center_38%]" },
  "cape-cod": { src: "/IMG_7567.jpeg", objectPosition: "object-center" },
};

export function getAreaHero(area: ServiceAreaDefinition) {
  return (
    AREA_HEROES[area.slug] ?? {
      src: "/hero1.jpeg",
      objectPosition: "object-center",
    }
  );
}

export function localBusinessJsonLd(extra?: Record<string, unknown>) {
  return {
    "@type": "LocalBusiness",
    "@id": LOCAL_BUSINESS_ID,
    name: "Graham Power Washing",
    url: SITE_URL,
    telephone: "+1-774-487-7616",
    image: `${SITE_URL}/hero1.jpeg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4 Winchester Avenue",
      addressLocality: "Buzzards Bay",
      addressRegion: "MA",
      postalCode: "02532",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.7454,
      longitude: -70.5981,
    },
    openingHours: ["Mo-Su 08:00-18:00"],
    sameAs: [
      "https://www.facebook.com/p/GRAHAM-PAINTING-POWERWASHING-100063725705465/",
    ],
    ...extra,
  };
}
