import type { ServiceDefinition, ServiceFaq } from "@/data/services";
import {
  areaDisplayName,
  type ServiceAreaDefinition,
} from "@/data/serviceAreas";

export type LocalizedServiceContent = {
  h1: string;
  eyebrow: string;
  heroSubhead: string;
  intro: string;
  localTitle: string;
  localBody: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  keywords: string[];
  faqs: ServiceFaq[];
};

export function placePhrase(area: ServiceAreaDefinition) {
  if (area.setting === "regional") {
    return area.slug === "south-shore" ? "on the South Shore" : "on Cape Cod";
  }
  return `in ${area.name}`;
}

export function placePossessive(area: ServiceAreaDefinition) {
  if (area.setting === "regional") {
    return area.slug === "south-shore" ? "South Shore" : "Cape Cod";
  }
  return `${area.name}`;
}

export function areaLocationLabel(area: ServiceAreaDefinition) {
  if (area.slug === "south-shore") return "Serving the South Shore";
  if (area.slug === "cape-cod") return "Serving Cape Cod";
  return `Serving ${area.name}, MA`;
}

export function areaKeywordH1(area: ServiceAreaDefinition) {
  if (area.slug === "south-shore") return "Power Washing on the South Shore";
  if (area.slug === "cape-cod") return "Power Washing on Cape Cod";
  return `Power Washing in ${area.name}, MA`;
}

export function areaHeroHeadline(area: ServiceAreaDefinition) {
  if (area.slug === "south-shore") {
    return "Soft wash that brings South Shore homes back.";
  }
  if (area.slug === "cape-cod") {
    return "Soft wash built for Cape Cod weather.";
  }
  return `Soft wash that brings ${area.name} homes back.`;
}

export function areaHeroSupport(area: ServiceAreaDefinition) {
  return `Algae, mildew, and salt haze do not stand a chance ${placePhrase(area)}. House washing, decks, concrete, windows, and paint — one local crew, free quote.`;
}

export function quoteOptionsForService(serviceSlug: string): string[] {
  switch (serviceSlug) {
    case "vinyl-siding-soft-washing":
    case "cedar-shake-soft-washing":
      return ["House Wash"];
    case "patio-pressure-washing":
      return ["Patio Cleaning"];
    case "concrete-pressure-washing":
      return ["Walkway Cleaning"];
    case "deck-pressure-washing":
      return ["Deck Cleaning"];
    case "window-cleaning":
      return ["Window Cleaning"];
    default:
      return ["House Wash"];
  }
}

/** Service-specific local angle using area notes — not just coastal vs inland */
function serviceLocalAngle(
  service: ServiceDefinition,
  area: ServiceAreaDefinition,
): string {
  const place = placePhrase(area);
  const coastal = area.setting === "coastal";
  const regional = area.setting === "regional";

  switch (service.slug) {
    case "vinyl-siding-soft-washing":
      if (coastal || regional) {
        return `Vinyl ${place} picks up oxidation from salt air and green algae where shade holds moisture. Soft washing lifts both without scarring the siding — the right approach for ${placePossessive(area)} homes that see coastal humidity.`;
      }
      return `In ${placePossessive(area)}, tree cover and humid summers push algae onto north-facing vinyl. Our low-pressure soft wash removes the streaks and film that high-pressure blasting can drive deeper into the surface.`;

    case "cedar-shake-soft-washing":
      if (coastal || regional) {
        return `Cedar shake ${place} grays out faster when fog and salt keep the wood damp. We use a gentle soft wash that cleans mildew and organic growth while protecting the grain — never a harsh blast that raises fibers.`;
      }
      return `Shaded cedar ${place} holds mildew in the grooves of the shake. Soft washing reaches those pockets safely so ${placePossessive(area)} homeowners can keep natural or painted cedar looking maintained.`;

    case "patio-pressure-washing":
      if (coastal || regional) {
        return `Patios ${place} collect pollen, grill grease, and that slick green film coastal humidity encourages. Controlled pressure washing restores traction and color on pavers and concrete without chewing up joints.`;
      }
      return `${placePossessive(area)} patios under trees stain from leaves and mildew. We clean pavers and poured concrete so outdoor dining spaces are bright and safe underfoot again.`;

    case "concrete-pressure-washing":
      if (coastal || regional) {
        return `Driveways, walks, and garage aprons ${place} show tire film, salt residue, and organic stains. Professional concrete cleaning brightens the approach to your home and cuts down on tracked-in grit.`;
      }
      return `Inland ${placePossessive(area)} concrete picks up leaf tannins, mildew in shade, and driveway oxidation. Pressure washing resets the surface so walks and pads look cared for again.`;

    case "deck-pressure-washing":
      if (coastal || regional) {
        return `Decks ${place} work hard through summer — salt air, furniture marks, and mildew in shaded corners. We clean wood and composite carefully so you can stain, seal, or simply enjoy a fresh surface.`;
      }
      return `${placePossessive(area)} decks under tree cover grow mildew fast. Our deck cleaning removes the gray-green film and prepares the boards for sealing when you are ready.`;

    case "window-cleaning":
      if (coastal || regional) {
        return `Windows ${place} haze over with salt spray, pollen, and coastal film that household cleaners rarely fully remove. Professional interior and exterior washing brings the view back — especially valuable near the water.`;
      }
      return `${placePossessive(area)} windows collect spring pollen and summer dust on both sides of the glass. Streak-free professional cleaning makes a noticeable difference from the curb and from inside.`;

    default:
      return `${service.name} ${place} from Graham Power Washing — careful work, clear communication, and results you can see.`;
  }
}

function localizedFaqs(
  service: ServiceDefinition,
  area: ServiceAreaDefinition,
): ServiceFaq[] {
  const place = placePhrase(area);
  const name = placePossessive(area);

  return [
    {
      question:
        area.setting === "regional"
          ? `Do you offer ${service.shortName.toLowerCase()} ${place}?`
          : `Do you provide ${service.shortName.toLowerCase()} in ${area.name}, MA?`,
      answer:
        area.setting === "regional"
          ? `Yes. Graham Power Washing regularly schedules ${service.shortName.toLowerCase()} jobs ${place}. ${area.climateNote}`
          : `Yes — we serve ${area.name} and nearby ${area.county} towns. ${area.climateNote} Request a free quote and we will confirm timing for your street.`,
    },
    {
      question: `How often should ${name} homes schedule ${service.shortName.toLowerCase()}?`,
      answer:
        area.setting === "coastal" || area.setting === "regional"
          ? `Coastal moisture means many ${name} homes benefit from ${service.shortName.toLowerCase()} every 12–18 months. Shaded or waterfront elevations may need attention sooner — we will recommend a cadence after seeing the property.`
          : `Most ${name} homes do well with ${service.shortName.toLowerCase()} every 1–2 years. Heavy tree cover or north-facing surfaces can shorten that interval; we will tell you what we see on site.`,
    },
    {
      question: `What makes ${service.shortName.toLowerCase()} different ${place}?`,
      answer: `${area.housingNote} That is why we match method to the surface — soft wash for siding and cedar, controlled pressure for hard surfaces — instead of one blast setting for every job.`,
    },
    {
      question: `Can I bundle ${service.shortName.toLowerCase()} with other services ${place}?`,
      answer: `Yes. Many ${name} homeowners combine ${service.shortName.toLowerCase()} with house washing, decks, concrete, or windows in one visit. Bundling is usually the most cost-effective way to refresh the whole exterior.`,
    },
  ];
}

export function buildLocalizedServiceContent(
  service: ServiceDefinition,
  area: ServiceAreaDefinition,
): LocalizedServiceContent {
  const place = placePhrase(area);
  const display = areaDisplayName(area);
  const localAngle = serviceLocalAngle(service, area);

  const h1 =
    area.slug === "south-shore"
      ? `${service.name} on the South Shore`
      : area.slug === "cape-cod"
        ? `${service.name} on Cape Cod`
        : `${service.name} in ${area.name}, MA`;

  const intro = `${localAngle} ${service.intro}`;

  const localBody = [
    area.housingNote,
    area.climateNote,
    `Whether you need ${service.shortName.toLowerCase()} alone or bundled with other exterior work, we quote clearly and treat ${display} properties with the same care we bring to every Graham Power Washing job.`,
  ].join(" ");

  const metaTitle =
    area.setting === "regional"
      ? `${service.shortName} ${area.slug === "south-shore" ? "South Shore MA" : "Cape Cod"} | Graham Power Washing`
      : `${service.shortName} ${area.name} MA | Graham Power Washing`;

  const metaDescription =
    area.setting === "regional"
      ? `Professional ${service.shortName.toLowerCase()} ${place}. ${area.heroTagline}. Free quotes from Graham Power Washing.`
      : `${service.shortName} in ${area.name}, MA. ${area.heroTagline}. Safe cleaning, clear pricing, free quotes.`;

  const keywords = [
    `${service.shortName.toLowerCase()} ${area.name.toLowerCase()}${area.setting === "regional" ? "" : " ma"}`,
    `${service.name.toLowerCase()} ${area.name.toLowerCase()}`,
    "graham power washing",
    area.region === "cape-cod"
      ? "cape cod power washing"
      : "south shore power washing",
  ];

  return {
    h1,
    eyebrow: "Graham Power Washing",
    heroSubhead: area.heroTagline,
    intro,
    localTitle: `Why ${service.shortName.toLowerCase()} matters ${place}`,
    localBody,
    metaTitle,
    metaDescription: metaDescription.slice(0, 155),
    ogTitle: h1,
    keywords,
    faqs: localizedFaqs(service, area),
  };
}

export function buildAreaMetaTitle(area: ServiceAreaDefinition) {
  if (area.setting === "regional") {
    return area.slug === "south-shore"
      ? "Power Washing on the South Shore MA | Graham Power Washing"
      : "Power Washing on Cape Cod | Graham Power Washing";
  }
  return `Power Washing ${area.name} MA | Graham Power Washing`;
}
