export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceProcessStep = {
  title: string;
  body: string;
};

export type ServiceDefinition = {
  slug: string;
  name: string;
  shortName: string;
  href: string;
  cardDescription: string;
  intro: string;
  highlightTitle: string;
  highlightBody: string;
  heroImage: string;
  heroAlt: string;
  /** Tailwind object-position class for tall card crops */
  heroObjectPosition?: string;
  gallery: { src: string; alt: string }[];
  benefitsTitle: string;
  benefits: string[];
  processTitle: string;
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  serviceType: string;
};

const SITE = "https://www.grahampowerwashing.com";

export function serviceCanonical(slug: string) {
  return `${SITE}/services/${slug}`;
}

export function serviceOgImage(heroImage: string) {
  return `${SITE}${heroImage}`;
}

export const SERVICES: ServiceDefinition[] = [
  {
    slug: "vinyl-siding-soft-washing",
    name: "Vinyl Siding Soft Washing",
    shortName: "House Soft Washing",
    href: "/services/vinyl-siding-soft-washing",
    cardDescription:
      "Low-pressure soft washing that lifts algae, mildew, and black streaks from vinyl siding — without damaging the surface.",
    intro:
      "Our soft washing method is a safe, low-pressure clean built for vinyl. We remove algae, mildew, and organic buildup so your siding looks bright again and lasts longer.",
    highlightTitle: "Commitment to Quality",
    highlightBody:
      "Graham Power Washing treats every home like our own — careful coverage, eco-conscious detergents, and results you can see from the curb.",
    heroImage: "/IMG_7699.jpeg",
    heroAlt:
      "Clean vinyl siding after soft washing by Graham Power Washing in Plymouth MA",
    gallery: [
      {
        src: "/IMG_7696.jpeg",
        alt: "Vinyl siding before soft washing — algae and mildew buildup",
      },
      {
        src: "/IMG_7699.jpeg",
        alt: "Vinyl siding after soft washing — clean bright exterior",
      },
      {
        src: "/hero1.jpeg",
        alt: "Graham Power Washing crew soft washing a home",
      },
    ],
    benefitsTitle: "Why Choose Soft Washing?",
    benefits: [
      "Low-pressure, surface-safe application",
      "Removes algae, mildew, and organic buildup",
      "Biodegradable cleaning agents",
      "Helps extend the life of your siding",
    ],
    processTitle: "Our Soft Wash Process",
    process: [
      {
        title: "Evaluation",
        body: "We inspect your siding for buildup, stains, and wear so the clean matches the house.",
      },
      {
        title: "Pre-treatment",
        body: "Eco-safe detergents break down algae, mildew, and organic matter.",
      },
      {
        title: "Soft Wash",
        body: "A low-pressure rinse lifts dirt gently — no high-pressure scarring.",
      },
      {
        title: "Final Check",
        body: "We walk the job for even coverage before we pack up.",
      },
    ],
    faqs: [
      {
        question: "How often should vinyl siding be soft washed?",
        answer:
          "Most homes benefit from soft washing every 1–2 years, but shaded or damp areas may need more frequent cleaning to prevent algae and mildew.",
      },
      {
        question: "Is soft washing safe for all types of vinyl siding?",
        answer:
          "Yes. Our low-pressure process is safe for all vinyl siding types and colors, and will not cause warping or damage.",
      },
      {
        question: "Will soft washing remove green algae and black streaks?",
        answer:
          "Absolutely. Our biodegradable detergents and soft wash technique remove algae, mildew, and stains for a like-new appearance.",
      },
      {
        question:
          "How soon can I paint or touch up my siding after soft washing?",
        answer:
          "We recommend waiting until the siding is fully dry—usually 24–48 hours—before painting or making repairs after a soft wash.",
      },
    ],
    keywords: [
      "vinyl siding soft washing",
      "house washing plymouth ma",
      "siding cleaning",
      "soft washing service",
      "low pressure washing",
      "graham power washing",
    ],
    metaTitle:
      "Vinyl Siding Soft Washing | South Shore & Cape Cod | Graham Power Washing",
    metaDescription:
      "Professional vinyl siding soft washing across the South Shore and Cape Cod. Safe low-pressure cleaning that removes algae and mildew. Free quotes.",
    ogTitle: "Vinyl Siding Soft Washing | South Shore & Cape Cod",
    serviceType: "Soft Washing",
  },
  {
    slug: "cedar-shake-soft-washing",
    name: "Cedar Shake Soft Washing",
    shortName: "Cedar Soft Washing",
    href: "/services/cedar-shake-soft-washing",
    cardDescription:
      "Gentle soft washing for natural and painted cedar shake — lifts mold and mildew while protecting the wood.",
    intro:
      "Cedar shake needs a delicate touch. We use low-pressure soft washing and biodegradable solutions to clean natural and painted cedar without harming the grain or finish.",
    highlightTitle: "Built on Quality and Care",
    highlightBody:
      "Our crew is trained for natural and painted wood. We use industry-standard soft wash techniques so your cedar stays strong, clean, and protected.",
    heroImage: "/IMG_7750.jpeg",
    heroAlt:
      "Cedar shake home after soft washing by Graham Power Washing on the South Shore",
    gallery: [
      {
        src: "/before1.jpeg",
        alt: "Cedar shake home before soft washing",
      },
      {
        src: "/after1.jpeg",
        alt: "Cedar shake home after soft washing",
      },
      {
        src: "/IMG_7743.jpeg",
        alt: "Freshly cleaned cedar shake siding",
      },
      {
        src: "/IMG_7465.jpeg",
        alt: "Cedar shake home after exterior cleaning",
      },
      {
        src: "/IMG_7555.jpeg",
        alt: "Coastal cedar home with deck after soft washing",
      },
      {
        src: "/IMG_7567.jpeg",
        alt: "Cedar soft wash job site with hoses on the lawn",
      },
      {
        src: "/IMG_7768.jpeg",
        alt: "Estate soft wash in progress on a coastal home",
      },
    ],
    benefitsTitle: "Benefits of Cedar Shake Soft Washing",
    benefits: [
      "Preserves the wood's natural or painted appearance",
      "Removes mold, mildew, and lichen growth",
      "Minimizes moisture retention and wood decay",
      "Gentle cleaning for untreated and painted cedar",
    ],
    processTitle: "Our Cedar Soft Wash Process",
    process: [
      {
        title: "Inspection",
        body: "We assess natural and painted cedar for problem spots and moisture issues.",
      },
      {
        title: "Pre-treatment",
        body: "A tailored solution loosens dirt and organic buildup.",
      },
      {
        title: "Soft Wash",
        body: "Low-pressure rinse safe for natural and painted cedar shake.",
      },
      {
        title: "Final Rinse",
        body: "A clean, even result with no residue left behind.",
      },
    ],
    faqs: [
      {
        question: "How often should cedar shake siding be soft washed?",
        answer:
          "Most cedar shake siding benefits from soft washing every 1–2 years, depending on exposure to shade, moisture, and organic buildup.",
      },
      {
        question: "Is soft washing safe for painted cedar shake?",
        answer:
          "Yes. Our process is gentle and designed to protect both natural and painted cedar surfaces, removing buildup without damaging the finish.",
      },
      {
        question: "Will soft washing remove mold and mildew?",
        answer:
          "Absolutely. Our biodegradable solutions and low-pressure rinse effectively remove mold, mildew, and lichen from cedar siding.",
      },
      {
        question: "How soon can I paint or seal my cedar after soft washing?",
        answer:
          "We recommend waiting until the wood is fully dry—usually 24–48 hours—before painting or sealing after a soft wash.",
      },
    ],
    keywords: [
      "cedar shake soft washing",
      "cedar siding cleaning plymouth ma",
      "soft wash cedar",
      "mold on cedar siding",
      "graham power washing",
    ],
    metaTitle:
      "Cedar Shake Soft Washing | South Shore & Cape Cod | Graham Power Washing",
    metaDescription:
      "Professional cedar shake soft washing across the South Shore and Cape Cod. Safe cleaning for natural and painted cedar. Free quotes.",
    ogTitle: "Cedar Shake Soft Washing | South Shore & Cape Cod",
    serviceType: "Cedar Soft Washing",
  },
  {
    slug: "patio-pressure-washing",
    name: "Patio Pressure Washing",
    shortName: "Patio Cleaning",
    href: "/services/patio-pressure-washing",
    cardDescription:
      "Restore stone, paver, and concrete patios — remove moss, algae, and stains so outdoor spaces are clean and safe again.",
    intro:
      "Make your patio a place to enjoy again. We remove dirt, moss, algae, and weather stains from stone, pavers, and concrete — restoring look and traction.",
    highlightTitle: "Patio Surfaces We Clean",
    highlightBody:
      "Stamped concrete, brick pavers, bluestone, or poured slabs — we match pressure and chemistry to the material so it cleans up without damage.",
    heroImage: "/patio-after.jpeg",
    heroAlt:
      "Clean stone patio steps after professional pressure washing",
    gallery: [
      {
        src: "/patio-after.jpeg",
        alt: "Stone patio after pressure washing",
      },
      {
        src: "/IMG_7523.jpeg",
        alt: "Paver pool deck pressure washing in progress",
      },
      {
        src: "/IMG_7768.jpeg",
        alt: "Outdoor living space soft wash and hard surface cleaning",
      },
    ],
    benefitsTitle: "Benefits of Patio Pressure Washing",
    benefits: [
      "Eliminates slippery moss, mildew, and algae",
      "Restores natural color and texture",
      "Enhances outdoor appeal and usability",
      "Safe for pavers, concrete, and stone",
    ],
    processTitle: "Our Patio Cleaning Process",
    process: [
      {
        title: "Inspection",
        body: "We identify surface type, buildup, and any sensitive areas.",
      },
      {
        title: "Pretreatment",
        body: "Specialized cleaners break down organic growth and stains.",
      },
      {
        title: "Pressure Wash",
        body: "Pressure and technique are dialed in for your material.",
      },
      {
        title: "Final Rinse",
        body: "A clean, uniform surface ready for use or sealing.",
      },
    ],
    faqs: [
      {
        question: "How often should I have my patio pressure washed?",
        answer:
          "Most patios benefit from professional pressure washing once a year, but high-traffic or shaded areas may need more frequent cleaning to prevent moss and algae buildup.",
      },
      {
        question: "Is pressure washing safe for all patio materials?",
        answer:
          "Yes. We adjust our pressure and cleaning solutions to safely clean concrete, pavers, stone, and more—without causing damage.",
      },
      {
        question: "Will pressure washing remove stains and algae?",
        answer:
          "Absolutely. Our process removes dirt, stains, moss, algae, and other organic growth, restoring your patio's appearance and safety.",
      },
      {
        question: "How soon can I use my patio after cleaning?",
        answer:
          "Your patio is ready for use as soon as it's dry—usually within a few hours after we finish.",
      },
    ],
    keywords: [
      "patio pressure washing",
      "patio cleaning plymouth ma",
      "paver cleaning",
      "stone patio washing",
      "graham power washing",
    ],
    metaTitle:
      "Patio Pressure Washing | South Shore & Cape Cod | Graham Power Washing",
    metaDescription:
      "Professional patio pressure washing across the South Shore and Cape Cod. Safe cleaning for stone, pavers, and concrete. Free quotes.",
    ogTitle: "Patio Pressure Washing | South Shore & Cape Cod",
    serviceType: "Patio Pressure Washing",
  },
  {
    slug: "concrete-pressure-washing",
    name: "Concrete Pressure Washing",
    shortName: "Concrete Cleaning",
    href: "/services/concrete-pressure-washing",
    cardDescription:
      "Deep cleaning for driveways, walkways, and hard surfaces — lift stains, grime, and algae for real curb appeal.",
    intro:
      "Dirty concrete drags down curb appeal. We restore driveways, walkways, and hard surfaces safely and effectively so they look bright again.",
    highlightTitle: "Clean Surfaces, Lasting Results",
    highlightBody:
      "Whether you're prepping for a sale, sealing concrete, or refreshing the property, our crew delivers results you can see from the street.",
    heroImage: "/IMG_7523.jpeg",
    heroAlt:
      "Graham Power Washing crew pressure washing a paver pool deck and hard surface",
    gallery: [
      {
        src: "/IMG_7523.jpeg",
        alt: "Surface cleaner pressure washing pavers around a pool",
      },
      {
        src: "/patio-after.jpeg",
        alt: "Hard surface pressure washing results on stone",
      },
      {
        src: "/IMG_7628.jpeg",
        alt: "Graham Power Washing truck set up for a concrete and exterior clean",
      },
    ],
    benefitsTitle: "Benefits of Concrete Pressure Washing",
    benefits: [
      "Eliminates years of built-up grime and stains",
      "Improves curb appeal and property value",
      "Removes slippery algae and mildew",
      "Prepares surface for sealing or treatment",
    ],
    processTitle: "Our Cleaning Process",
    process: [
      {
        title: "Evaluation",
        body: "We assess stains, buildup, and sensitive areas on the concrete.",
      },
      {
        title: "Pretreatment",
        body: "Degreasers and stain removers penetrate porous surfaces.",
      },
      {
        title: "Pressure Wash",
        body: "High-powered cleaning lifts embedded contaminants.",
      },
      {
        title: "Rinse & Finish",
        body: "A final rinse clears residue and preps for sealing if desired.",
      },
    ],
    faqs: [
      {
        question:
          "How often should I have my concrete surfaces pressure washed?",
        answer:
          "Most driveways, walkways, and patios benefit from annual cleaning, but high-traffic or heavily stained areas may need more frequent service.",
      },
      {
        question: "Will pressure washing remove oil stains from my driveway?",
        answer:
          "Pressure washing can remove many surface stains, but deep oil stains may require special treatment. We use degreasers and stain removers for best results.",
      },
      {
        question: "Is pressure washing safe for all types of concrete?",
        answer:
          "Yes. We adjust our equipment and cleaning solutions to safely clean all types of concrete, including stamped, colored, and exposed aggregate.",
      },
      {
        question: "How soon can I use my concrete after cleaning?",
        answer:
          "Your concrete is ready for use as soon as it's dry—usually within a few hours after we finish.",
      },
    ],
    keywords: [
      "concrete pressure washing",
      "driveway cleaning plymouth ma",
      "walkway pressure washing",
      "concrete cleaning near me",
      "graham power washing",
    ],
    metaTitle:
      "Concrete Pressure Washing | South Shore & Cape Cod | Graham Power Washing",
    metaDescription:
      "Professional concrete pressure washing across the South Shore and Cape Cod. Driveways, walkways, and hard surfaces cleaned right. Free quotes.",
    ogTitle: "Concrete Pressure Washing | South Shore & Cape Cod",
    serviceType: "Concrete Pressure Washing",
  },
  {
    slug: "deck-pressure-washing",
    name: "Deck Pressure Washing",
    shortName: "Deck Cleaning",
    href: "/services/deck-pressure-washing",
    cardDescription:
      "Safe cleaning for wood and composite decks — remove dirt, algae, and stains and prep for stain or seal.",
    intro:
      "Restore your deck's look and safety. We remove embedded dirt, algae, and stains from wood and composite decking without damaging the surface.",
    highlightTitle: "Your Deck, Restored",
    highlightBody:
      "Cedar, pressure-treated lumber, or composite — we match the approach to the material so you get a clean deck without splinters or scarring.",
    heroImage: "/deck-after.jpeg",
    heroAlt:
      "Wooden deck after professional pressure washing",
    gallery: [
      {
        src: "/deck-after.jpeg",
        alt: "Deck after pressure washing",
      },
      {
        src: "/deck-before.jpeg",
        alt: "Deck before pressure washing",
      },
      {
        src: "/img16.jpeg",
        alt: "Deck after pressure washing",
      },
    ],
    benefitsTitle: "Benefits of Deck Pressure Washing",
    benefits: [
      "Improves safety by removing slippery buildup",
      "Restores natural beauty and color",
      "Extends the life of your deck's material",
      "Prepares surfaces for staining or sealing",
    ],
    processTitle: "Our Deck Cleaning Process",
    process: [
      {
        title: "Surface Inspection",
        body: "We check for soft spots, grime, and any needed pre-treatment.",
      },
      {
        title: "Pre-treatment",
        body: "A deck-safe cleaner breaks down mold, mildew, and stains.",
      },
      {
        title: "Pressure Wash",
        body: "Correct pressure and nozzle for your deck material.",
      },
      {
        title: "Final Rinse",
        body: "Ready for use or sealing once dry.",
      },
    ],
    faqs: [
      {
        question: "How often should I have my deck pressure washed?",
        answer:
          "Most decks benefit from professional cleaning once a year, but shaded or high-traffic decks may need more frequent service to prevent mold and algae.",
      },
      {
        question: "Will pressure washing damage my wood or composite deck?",
        answer:
          "No. We use the correct pressure and nozzles for your deck material, ensuring a safe and effective clean without causing splintering or surface damage.",
      },
      {
        question: "Can you remove old stains, paint, or sealant?",
        answer:
          "Pressure washing can remove some old finishes, but for complete removal, additional stripping or sanding may be required. We can advise on the best approach for your deck.",
      },
      {
        question: "How soon can I use my deck after cleaning?",
        answer:
          "Your deck is ready for use as soon as it's dry—usually within a few hours after we finish.",
      },
    ],
    keywords: [
      "deck pressure washing",
      "deck cleaning plymouth ma",
      "composite deck washing",
      "wood deck cleaning",
      "graham power washing",
    ],
    metaTitle:
      "Deck Pressure Washing | South Shore & Cape Cod | Graham Power Washing",
    metaDescription:
      "Professional deck pressure washing across the South Shore and Cape Cod. Safe for wood and composite. Free quotes.",
    ogTitle: "Deck Pressure Washing | South Shore & Cape Cod",
    serviceType: "Deck Pressure Washing",
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    shortName: "Window Cleaning",
    href: "/services/window-cleaning",
    cardDescription:
      "Streak-free interior and exterior window cleaning for homes and businesses.",
    intro:
      "Crystal-clear, streak-free windows for homes and businesses in Plymouth, the South Shore, and Cape Cod. We remove dirt, pollen, hard water spots, and coastal salt haze.",
    highlightTitle: "The Perfect Finish to a House Wash",
    highlightBody:
      "Window cleaning pairs perfectly with soft washing and pressure washing. Bundle them in one visit and your whole exterior — siding, surfaces, and glass — looks brand new.",
    heroImage: "/windowclean.jpeg",
    heroAlt:
      "Professional window cleaning service in Plymouth MA with Graham Power Washing crew",
    heroObjectPosition: "object-[18%_center]",
    gallery: [
      {
        src: "/windowclean.jpeg",
        alt: "Graham Power Washing technician cleaning second-story windows",
      },
      {
        src: "/IMG_7628.jpeg",
        alt: "Graham Power Washing service truck on site",
      },
    ],
    benefitsTitle: "Benefits of Professional Window Cleaning",
    benefits: [
      "Streak-free glass, inside and out",
      "Interior and exterior service available",
      "Removes hard water spots, pollen, and salt haze",
      "Brightens your home and boosts curb appeal",
    ],
    processTitle: "Our Window Cleaning Process",
    process: [
      {
        title: "Inspection",
        body: "We assess your windows and frames, and note hard water or problem areas.",
      },
      {
        title: "Prep",
        body: "We clear the work area and set up safely for each elevation.",
      },
      {
        title: "Wash & Squeegee",
        body: "Each pane is hand-washed and squeegeed for a streak-free finish.",
      },
      {
        title: "Detail & Final Check",
        body: "Edges detailed and every window checked before we leave.",
      },
    ],
    faqs: [
      {
        question: "How often should I have my windows professionally cleaned?",
        answer:
          "Most homes benefit from professional window cleaning twice a year — typically spring and fall. Coastal homes on the South Shore and Cape Cod may need more frequent cleaning due to salt spray and pollen buildup.",
      },
      {
        question: "Do you clean both the inside and outside of windows?",
        answer:
          "Yes. We offer exterior-only cleaning as well as full interior and exterior service. Choose whichever fits your needs and budget.",
      },
      {
        question: "Can you remove hard water stains and salt residue from glass?",
        answer:
          "In most cases, yes. Light mineral deposits and coastal salt haze come off with our standard process. Heavily etched glass may require specialty restoration, which we can evaluate during your free quote.",
      },
      {
        question: "Can window cleaning be combined with a house wash?",
        answer:
          "Absolutely — window cleaning pairs perfectly with our soft washing and power washing services. Bundling services in one visit is the most cost-effective way to refresh your home's entire exterior.",
      },
    ],
    keywords: [
      "window cleaning plymouth ma",
      "window washing near me",
      "residential window cleaning",
      "streak free window cleaning",
      "graham power washing window cleaning",
    ],
    metaTitle:
      "Window Cleaning | South Shore & Cape Cod | Graham Power Washing",
    metaDescription:
      "Professional window cleaning across the South Shore and Cape Cod. Streak-free interior and exterior washing. Free quotes.",
    ogTitle: "Window Cleaning | South Shore & Cape Cod",
    serviceType: "Window Cleaning",
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
