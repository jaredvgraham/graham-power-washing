export type AreaRegion = "south-shore" | "cape-cod" | "plymouth-county";

export type AreaSetting = "coastal" | "inland" | "regional";

export type ServiceAreaDefinition = {
  slug: string;
  name: string;
  /** Display label for regions that aren't a single town (e.g. "the South Shore") */
  label: string;
  state: "MA";
  region: AreaRegion;
  setting: AreaSetting;
  county: string;
  /** Neighboring area slugs for internal linking (must exist in SERVICE_AREAS) */
  nearby: string[];
  /** Unique 1–2 sentence intro for the area hub */
  intro: string;
  /** Housing stock / architecture notes used on area + combo pages */
  housingNote: string;
  /** Weather / growth conditions that affect washing frequency */
  climateNote: string;
  /** Short phrase for hero subheads */
  heroTagline: string;
  metaDescription: string;
};

const SITE = "https://www.grahampowerwashing.com";

export function areaCanonical(slug: string) {
  return `${SITE}/areas-served/${slug}`;
}

export function serviceAreaCanonical(serviceSlug: string, areaSlug: string) {
  return `${SITE}/services/${serviceSlug}/${areaSlug}`;
}

export function areaDisplayName(area: ServiceAreaDefinition) {
  return area.setting === "regional" ? area.label : `${area.name}, MA`;
}

export const SERVICE_AREAS: ServiceAreaDefinition[] = [
  {
    slug: "plymouth",
    name: "Plymouth",
    label: "Plymouth",
    state: "MA",
    region: "plymouth-county",
    setting: "coastal",
    county: "Plymouth County",
    nearby: ["kingston", "duxbury", "carver", "wareham", "bourne"],
    intro:
      "Plymouth is our home base. From downtown neighborhoods to waterfront streets and inland subdivisions, we clean vinyl, cedar, decks, concrete, and windows for homeowners who want a local crew that shows up on time.",
    housingNote:
      "Plymouth homes range from historic Colonials near the waterfront to vinyl-sided Capes and ranches inland. Many exteriors sit under mature oaks and maples that drop organic debris and encourage algae on north-facing walls.",
    climateNote:
      "Ocean humidity, fog, and shaded lots mean algae and mildew return faster here than in drier inland towns — especially on siding that faces trees or stays damp after rain.",
    heroTagline: "Local crew · Plymouth County home base",
    metaDescription:
      "Power washing, soft washing, and window cleaning in Plymouth, MA. Graham Power Washing serves homeowners across Plymouth with free quotes and careful exterior cleaning.",
  },
  {
    slug: "kingston",
    name: "Kingston",
    label: "Kingston",
    state: "MA",
    region: "south-shore",
    setting: "coastal",
    county: "Plymouth County",
    nearby: ["plymouth", "duxbury", "pembroke", "carver"],
    intro:
      "Kingston sits between Plymouth and the upper South Shore, with a mix of neighborhood streets, wooded lots, and homes that catch coastal moisture. We regularly soft wash siding and refresh decks, patios, and windows here.",
    housingNote:
      "Kingston properties often sit on wooded lots with cedar or vinyl exteriors. Shaded sidewalls and rear decks pick up mildew quickly when air circulation is limited under mature trees.",
    climateNote:
      "Proximity to Kingston Bay and the Jones River keeps humidity elevated. Green film on siding and slippery patio pavers are common by late summer.",
    heroTagline: "Serving Kingston & nearby South Shore towns",
    metaDescription:
      "Soft washing, pressure washing, and window cleaning in Kingston, MA. Trusted exterior cleaning for South Shore homes — free quotes from Graham Power Washing.",
  },
  {
    slug: "duxbury",
    name: "Duxbury",
    label: "Duxbury",
    state: "MA",
    region: "south-shore",
    setting: "coastal",
    county: "Plymouth County",
    nearby: ["kingston", "marshfield", "plymouth", "pembroke"],
    intro:
      "Duxbury homeowners care about curb appeal — waterfront views, classic New England architecture, and outdoor living spaces that take a beating from salt air. We clean carefully so your home looks sharp without harsh high-pressure damage.",
    housingNote:
      "Duxbury has a high share of shingle-style homes, cedar accents, and vinyl Capes near the bay. Outdoor showers, decks, and stone walks are part of many properties and need salt-aware cleaning.",
    climateNote:
      "Salt spray and sea mist accelerate oxidation on vinyl and leave a film on glass and outdoor surfaces. Homes closer to Duxbury Beach and the harbor usually need more frequent washing.",
    heroTagline: "Careful cleaning for Duxbury homes",
    metaDescription:
      "Professional soft washing and pressure washing in Duxbury, MA. Salt-aware exterior cleaning for South Shore homes. Free quotes from Graham Power Washing.",
  },
  {
    slug: "carver",
    name: "Carver",
    label: "Carver",
    state: "MA",
    region: "plymouth-county",
    setting: "inland",
    county: "Plymouth County",
    nearby: ["plymouth", "kingston", "wareham", "lakeville"],
    intro:
      "Carver’s wooded neighborhoods and cranberry-country setting mean plenty of shade, pollen, and organic buildup on homes. We help Carver homeowners keep siding, decks, and driveways looking clean year-round.",
    housingNote:
      "Many Carver homes sit on larger lots with tree cover. Vinyl and wood exteriors often show black streaks where gutters overflow and algae where sunlight rarely reaches.",
    climateNote:
      "Inland humidity plus heavy leaf cover creates stubborn mildew on north walls and slippery green growth on patio concrete after wet springs.",
    heroTagline: "Exterior cleaning across Carver",
    metaDescription:
      "Power washing and soft washing in Carver, MA. Remove algae, mildew, and stains from siding, decks, and concrete. Free quotes — Graham Power Washing.",
  },
  {
    slug: "marshfield",
    name: "Marshfield",
    label: "Marshfield",
    state: "MA",
    region: "south-shore",
    setting: "coastal",
    county: "Plymouth County",
    nearby: ["duxbury", "scituate", "pembroke", "norwell"],
    intro:
      "Marshfield’s ocean exposure is hard on exteriors. Salt, wind-driven rain, and busy beach seasons leave siding dull and outdoor living spaces stained. Our soft wash and pressure washing services are built for coastal Marshfield homes.",
    housingNote:
      "From beach cottages to larger family homes inland from Route 139, Marshfield exteriors include vinyl, cedar shake, and lots of decks facing the ocean breeze.",
    climateNote:
      "Salt haze on windows and oxidation on vinyl show up faster near Brant Rock and Fieldston. Even homes a few miles inland see heavier organic growth after damp summers.",
    heroTagline: "Coastal cleaning for Marshfield",
    metaDescription:
      "Soft washing, pressure washing, and window cleaning in Marshfield, MA. Coastal-ready exterior cleaning for South Shore homeowners. Free quotes.",
  },
  {
    slug: "pembroke",
    name: "Pembroke",
    label: "Pembroke",
    state: "MA",
    region: "south-shore",
    setting: "inland",
    county: "Plymouth County",
    nearby: ["hanson", "hanover", "kingston", "duxbury", "marshfield"],
    intro:
      "Pembroke is a busy South Shore suburb where curb appeal matters. We clean house siding, fences, patios, and windows for neighborhoods throughout town — including areas around the ponds and wooded side streets.",
    housingNote:
      "Pembroke’s housing stock is mostly vinyl-sided Colonials, Capes, and split-levels with decks and poured or paver patios. Fence lines and garage aprons collect pollen and tire film.",
    climateNote:
      "Pond humidity and tree pollen are the usual culprits here. North-facing siding and shaded decks often need washing every 12–18 months.",
    heroTagline: "South Shore service in Pembroke",
    metaDescription:
      "House washing, deck cleaning, and window cleaning in Pembroke, MA. Professional soft washing and pressure washing — free quotes from Graham Power Washing.",
  },
  {
    slug: "hanson",
    name: "Hanson",
    label: "Hanson",
    state: "MA",
    region: "south-shore",
    setting: "inland",
    county: "Plymouth County",
    nearby: ["pembroke", "whitman", "hanover", "east-bridgewater"],
    intro:
      "Hanson homeowners get the same careful soft washing and pressure washing we bring to the rest of the South Shore. Shaded lots and quieter streets mean algae often goes unnoticed until neighbors start washing — we help you stay ahead of it.",
    housingNote:
      "Hanson has many wooded residential streets with vinyl and wood exteriors. Driveways, walkways, and rear decks are common add-ons that stain from leaves and mildew.",
    climateNote:
      "Less ocean salt than coastal towns, but more leaf tannins and persistent shade. Black streaks under eaves and green patio growth are frequent spring requests.",
    heroTagline: "Reliable washing in Hanson",
    metaDescription:
      "Power washing and soft washing in Hanson, MA. Clear algae and stains from siding, decks, and concrete. Free local quotes — Graham Power Washing.",
  },
  {
    slug: "wareham",
    name: "Wareham",
    label: "Wareham",
    state: "MA",
    region: "cape-cod",
    setting: "coastal",
    county: "Plymouth County",
    nearby: ["buzzards-bay", "bourne", "plymouth", "carver", "sandwich"],
    intro:
      "Wareham bridges the South Shore and Cape Cod — with Onset, summer visitors, and plenty of homes that see humidity from Buzzards Bay. We soft wash siding and clean decks, concrete, and windows throughout Wareham.",
    housingNote:
      "Wareham includes year-round homes and seasonal places near Onset and the bay. Vinyl Capes, cedar accents, and outdoor living spaces take a beating from moisture and vacation-season traffic.",
    climateNote:
      "Bay humidity keeps exteriors damp longer. Mold on shaded shake, slippery dock-area concrete, and salt film on glass are common near the water.",
    heroTagline: "Wareham & Onset exterior cleaning",
    metaDescription:
      "Soft washing and pressure washing in Wareham, MA including Onset. Coastal exterior cleaning for homes near Buzzards Bay. Free quotes.",
  },
  {
    slug: "hanover",
    name: "Hanover",
    label: "Hanover",
    state: "MA",
    region: "south-shore",
    setting: "inland",
    county: "Plymouth County",
    nearby: ["norwell", "pembroke", "hanson", "whitman"],
    intro:
      "Hanover’s established neighborhoods sit just inland from the coast. We provide house soft washing, concrete cleaning, deck washing, and window cleaning for Hanover homeowners who want a polished look without DIY risk.",
    housingNote:
      "Hanover homes are typically well-kept Colonials and Capes with vinyl or painted wood, attached garages, and patio spaces used through the warmer months.",
    climateNote:
      "Tree pollen in spring and humid summers leave a dull film on siding and glass. Shaded north walls often show the first signs of green algae.",
    heroTagline: "Exterior cleaning in Hanover",
    metaDescription:
      "Professional power washing and soft washing in Hanover, MA. Siding, decks, concrete, and windows — free quotes from Graham Power Washing.",
  },
  {
    slug: "norwell",
    name: "Norwell",
    label: "Norwell",
    state: "MA",
    region: "south-shore",
    setting: "inland",
    county: "Plymouth County",
    nearby: ["hanover", "scituate", "hingham", "pembroke", "marshfield"],
    intro:
      "Norwell is known for larger lots, mature trees, and classic New England homes. Organic growth thrives in that shade — our soft washing approach cleans thoroughly while protecting siding, cedar, and landscaping.",
    housingNote:
      "Many Norwell properties feature cedar, clapboard, or premium vinyl on spacious lots. Long driveways and rear decks often need attention along with the main house wash.",
    climateNote:
      "Heavy canopy cover keeps moisture on surfaces. Mildew on cedar and slippery walkways after rain are frequent reasons Norwell homeowners call.",
    heroTagline: "Careful cleaning for Norwell homes",
    metaDescription:
      "Soft washing and pressure washing in Norwell, MA. Gentle, thorough exterior cleaning for wooded South Shore properties. Free quotes.",
  },
  {
    slug: "bourne",
    name: "Bourne",
    label: "Bourne",
    state: "MA",
    region: "cape-cod",
    setting: "coastal",
    county: "Barnstable County",
    nearby: ["buzzards-bay", "sandwich", "wareham", "falmouth"],
    intro:
      "Bourne is the gateway to Cape Cod, with canal views, village neighborhoods, and homes that deal with wind, salt, and summer traffic. Graham Power Washing cleans exteriors across Bourne with methods suited to coastal conditions.",
    housingNote:
      "Bourne housing includes canal-area homes, village Capes, and properties near Otis. Cedar, vinyl, and outdoor showers are all common.",
    climateNote:
      "Canal winds push salt and moisture inland. Windows haze over, vinyl chalks, and decks near the water grow mildew in shaded corners.",
    heroTagline: "Cape Cod gateway — Bourne service",
    metaDescription:
      "Power washing and soft washing in Bourne, MA. Coastal exterior cleaning near the Cape Cod Canal. Free quotes from Graham Power Washing.",
  },
  {
    slug: "east-bridgewater",
    name: "East Bridgewater",
    label: "East Bridgewater",
    state: "MA",
    region: "plymouth-county",
    setting: "inland",
    county: "Plymouth County",
    nearby: ["bridgewater", "whitman", "hanson", "lakeville"],
    intro:
      "East Bridgewater homeowners call us for house washing, driveway and concrete cleaning, and deck refreshes. We know the inland South Shore pattern: pollen in spring, mildew in shade, and stains that build quietly until they don’t.",
    housingNote:
      "East Bridgewater’s neighborhoods feature vinyl Colonials, ranches, and raised ranches with asphalt drives and rear decks. Fence cleaning and garage-apron stains are common add-ons.",
    climateNote:
      "Without ocean salt, the main issues are organic: algae on siding, leaf stains on concrete, and green film on patio pavers under trees.",
    heroTagline: "Local washing in East Bridgewater",
    metaDescription:
      "House washing and pressure washing in East Bridgewater, MA. Soft wash siding, clean decks and concrete. Free quotes — Graham Power Washing.",
  },
  {
    slug: "bridgewater",
    name: "Bridgewater",
    label: "Bridgewater",
    state: "MA",
    region: "plymouth-county",
    setting: "inland",
    county: "Plymouth County",
    nearby: ["east-bridgewater", "lakeville", "whitman", "hanson"],
    intro:
      "Bridgewater’s mix of college-town district and residential neighborhoods means plenty of homes that need seasonal exterior care. We soft wash siding and pressure wash concrete, patios, and decks throughout Bridgewater.",
    housingNote:
      "Bridgewater homes include suburban subdivisions and older streets near the town center. Vinyl siding dominates, with wood decks and poured patios that stain from furniture and grill runoff.",
    climateNote:
      "Inland summers are humid. North walls and shaded entryways grow algae; driveways show tire marks and oxidation that brighten dramatically after a proper wash.",
    heroTagline: "Bridgewater exterior cleaning",
    metaDescription:
      "Soft washing and pressure washing in Bridgewater, MA. Professional house, deck, and concrete cleaning. Free quotes from Graham Power Washing.",
  },
  {
    slug: "whitman",
    name: "Whitman",
    label: "Whitman",
    state: "MA",
    region: "south-shore",
    setting: "inland",
    county: "Plymouth County",
    nearby: ["hanson", "east-bridgewater", "bridgewater", "pembroke"],
    intro:
      "Whitman is a compact South Shore town with close-knit neighborhoods and homes that show every streak from the street. Soft washing and concrete cleaning make a visible difference here — we help Whitman homeowners keep exteriors looking maintained.",
    housingNote:
      "Whitman’s denser lots mean neighbors notice curb appeal. Vinyl Capes and Colonials with front walks and small decks are typical, and gutters often leave tiger-stripe stains.",
    climateNote:
      "Shade from neighboring houses and street trees keeps moisture on siding. Spring pollen coats windows and trim until a professional clean resets the look.",
    heroTagline: "Curb appeal cleaning in Whitman",
    metaDescription:
      "Power washing and soft washing in Whitman, MA. Brighten siding, walks, and decks with professional exterior cleaning. Free quotes.",
  },
  {
    slug: "lakeville",
    name: "Lakeville",
    label: "Lakeville",
    state: "MA",
    region: "plymouth-county",
    setting: "inland",
    county: "Plymouth County",
    nearby: ["bridgewater", "carver", "wareham", "east-bridgewater"],
    intro:
      "Lakeville’s lakes, woods, and larger properties create ideal conditions for algae and mildew. We serve Lakeville homeowners with soft washing for siding and cedar, plus pressure washing for patios and concrete.",
    housingNote:
      "Lakeville includes lakefront places and wooded inland homes. Cedar and vinyl both appear frequently; many properties have long walks and expansive decks.",
    climateNote:
      "Lake humidity and tree cover mean organic growth is aggressive. Surfaces near the water often need washing more often than open sunny lots.",
    heroTagline: "Lakeville home exterior cleaning",
    metaDescription:
      "Soft washing and pressure washing in Lakeville, MA. Clean algae from siding, decks, and concrete near the lakes. Free quotes.",
  },
  {
    slug: "sandwich",
    name: "Sandwich",
    label: "Sandwich",
    state: "MA",
    region: "cape-cod",
    setting: "coastal",
    county: "Barnstable County",
    nearby: ["bourne", "falmouth", "wareham", "buzzards-bay"],
    intro:
      "Sandwich is Cape Cod’s oldest town — historic streets, beach access, and homes that face wind off Cape Cod Bay. We bring soft washing and pressure washing suited to Sandwich’s mix of classic architecture and coastal weather.",
    housingNote:
      "Expect cedar shake, painted clapboard, and vinyl Capes — often with outdoor showers and decks. Historic-district care matters: we use low-pressure methods on delicate surfaces.",
    climateNote:
      "Bay-side salt and fog dull siding and etch glass over time. Homes near Town Neck and along the canal corridor typically need more frequent exterior care.",
    heroTagline: "Historic Sandwich, modern cleaning",
    metaDescription:
      "Soft washing and pressure washing in Sandwich, MA. Gentle coastal exterior cleaning for Cape Cod homes. Free quotes from Graham Power Washing.",
  },
  {
    slug: "scituate",
    name: "Scituate",
    label: "Scituate",
    state: "MA",
    region: "south-shore",
    setting: "coastal",
    county: "Plymouth County",
    nearby: ["marshfield", "norwell", "hingham", "duxbury"],
    intro:
      "Scituate’s harbor, cliffs, and seaside neighborhoods put serious stress on exteriors. Salt spray, nor’easters, and humid summers leave siding and glass looking tired — we restore the clean look Scituate homes deserve.",
    housingNote:
      "Scituate ranges from harbor Colonials to Minot and North Scituate Capes. Cedar shingles, vinyl, and ocean-facing decks are common, and many homes need salt-aware window cleaning too.",
    climateNote:
      "Direct ocean exposure accelerates oxidation and leaves a sticky salt film on glass and outdoor furniture zones. Even inland Scituate streets see heavy mildew in tree shade.",
    heroTagline: "Seaside cleaning for Scituate",
    metaDescription:
      "Power washing, soft washing, and window cleaning in Scituate, MA. Coastal exterior cleaning for South Shore homes. Free quotes.",
  },
  {
    slug: "hingham",
    name: "Hingham",
    label: "Hingham",
    state: "MA",
    region: "south-shore",
    setting: "coastal",
    county: "Plymouth County",
    nearby: ["norwell", "scituate", "hanover", "marshfield"],
    intro:
      "Hingham homeowners expect a polished result. From harbor-area streets to neighborhoods farther inland, we soft wash siding, clean decks and stone, and wash windows with the care a Hingham property deserves.",
    housingNote:
      "Hingham’s housing includes historic homes near the harbor, shingle-style residences, and newer construction. Premium materials reward gentle soft washing over aggressive pressure.",
    climateNote:
      "Harbor humidity and shaded lots around tree-lined streets encourage mildew. Window film from pollen and coastal air is a frequent spring request.",
    heroTagline: "Detail-minded cleaning in Hingham",
    metaDescription:
      "Professional soft washing and window cleaning in Hingham, MA. Careful exterior cleaning for South Shore homes. Free quotes — Graham Power Washing.",
  },
  {
    slug: "falmouth",
    name: "Falmouth",
    label: "Falmouth",
    state: "MA",
    region: "cape-cod",
    setting: "coastal",
    county: "Barnstable County",
    nearby: ["bourne", "sandwich", "wareham", "buzzards-bay"],
    intro:
      "Falmouth summers are busy, and exteriors show it — salt air, guest traffic, and outdoor living spaces that work hard from Memorial Day to Columbus Day. We clean Falmouth homes before season, after storms, or whenever curb appeal needs a reset.",
    housingNote:
      "Falmouth includes year-round houses and seasonal places from Woods Hole to East Falmouth. Cedar, vinyl, outdoor showers, and large decks are part of the Cape Cod lifestyle we clean around carefully.",
    climateNote:
      "Buzzards Bay and Vineyard Sound keep air moist. Mold on shaded shake, slippery pool decks, and salt-hazed windows are the usual Cape Cod cleaning pattern here.",
    heroTagline: "Falmouth & Upper Cape cleaning",
    metaDescription:
      "Soft washing and pressure washing in Falmouth, MA. Cape Cod exterior cleaning for siding, decks, and windows. Free quotes from Graham Power Washing.",
  },
  {
    slug: "buzzards-bay",
    name: "Buzzards Bay",
    label: "Buzzards Bay",
    state: "MA",
    region: "cape-cod",
    setting: "coastal",
    county: "Barnstable County",
    nearby: ["bourne", "wareham", "sandwich", "plymouth"],
    intro:
      "Buzzards Bay is where we’re based — 4 Winchester Avenue — so response times are excellent for local homes. Canal-area weather is tough on siding and outdoor surfaces; we clean them the right way for this microclimate.",
    housingNote:
      "Buzzards Bay homes sit close to the canal and rail corridor, with a mix of Capes, ranches, and cottages. Vinyl and cedar both need coastal-aware washing, and many properties have compact outdoor spaces that stain easily.",
    climateNote:
      "Constant bay moisture and wind-driven salt mean exteriors rarely stay pristine for long. Soft washing beats blasting — especially on older siding common in the village.",
    heroTagline: "Based in Buzzards Bay",
    metaDescription:
      "Local power washing in Buzzards Bay, MA from our Winchester Avenue shop. Soft washing, pressure washing, and windows — free quotes.",
  },
  {
    slug: "south-shore",
    name: "South Shore",
    label: "the South Shore",
    state: "MA",
    region: "south-shore",
    setting: "regional",
    county: "Plymouth County & surrounding",
    nearby: [
      "plymouth",
      "duxbury",
      "marshfield",
      "scituate",
      "hingham",
      "norwell",
    ],
    intro:
      "Graham Power Washing serves the Massachusetts South Shore — from Plymouth and Kingston up through Duxbury, Marshfield, Scituate, Hingham, and inland towns like Pembroke, Hanover, and Norwell. One local crew for house washing across the region.",
    housingNote:
      "South Shore architecture runs from coastal Capes and shingle-style homes to inland Colonials and ranches. We match method to material: soft wash for siding and cedar, controlled pressure for concrete and decks.",
    climateNote:
      "The South Shore’s mix of ocean air and wooded suburbs creates two problems at once: salt film near the water and aggressive algae inland under trees. Seasonal washing keeps both in check.",
    heroTagline: "Across the Massachusetts South Shore",
    metaDescription:
      "Power washing and soft washing across the Massachusetts South Shore. Plymouth to Hingham and inland towns — free quotes from Graham Power Washing.",
  },
  {
    slug: "cape-cod",
    name: "Cape Cod",
    label: "Cape Cod",
    state: "MA",
    region: "cape-cod",
    setting: "regional",
    county: "Barnstable County",
    nearby: ["bourne", "sandwich", "falmouth", "wareham", "buzzards-bay"],
    intro:
      "We serve Upper Cape communities including Bourne, Sandwich, Falmouth, Wareham, and Buzzards Bay. Cape Cod homes deal with salt, fog, and humid summers — our soft washing and pressure washing are built for those conditions.",
    housingNote:
      "Cape Cod homes favor cedar shake, white Capes, outdoor showers, and decks meant for summer living. Gentle soft washing protects finishes while removing the gray-green film the Cape climate leaves behind.",
    climateNote:
      "Salt spray, fog, and damp nights are the Cape Cod cleaning cycle. Many homeowners schedule a wash before summer guests arrive and again after peak season.",
    heroTagline: "Upper Cape Cod exterior cleaning",
    metaDescription:
      "Soft washing and pressure washing on Cape Cod — Bourne, Sandwich, Falmouth, Wareham, and Buzzards Bay. Free quotes from Graham Power Washing.",
  },
];

/** Plain name list for components that only need display strings */
export const SERVICE_AREA_NAMES = SERVICE_AREAS.map((a) => a.name);

export function getAreaBySlug(slug: string) {
  return SERVICE_AREAS.find((a) => a.slug === slug);
}

export function getNearbyAreas(area: ServiceAreaDefinition, limit = 4) {
  return area.nearby
    .map((slug) => getAreaBySlug(slug))
    .filter((a): a is ServiceAreaDefinition => Boolean(a))
    .slice(0, limit);
}

export function getTownAreas() {
  return SERVICE_AREAS.filter((a) => a.setting !== "regional");
}

export function getRegionalAreas() {
  return SERVICE_AREAS.filter((a) => a.setting === "regional");
}
