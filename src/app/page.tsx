import AboutUs from "@/components/AboutUs";
import GetAiQuote from "@/components/AiQuote";
import BeforeAfter from "@/components/BeforeAfter";
import Hero from "@/components/Hero";
import OurWork from "@/components/OurWork";
import Reviews from "@/components/Reviews";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import Services from "@/components/Services";
import GReviews from "@/components/GReviews";
import { SERVICE_AREAS } from "@/data/serviceAreas";
import { localBusinessJsonLd, SITE_URL } from "@/lib/seo/localSeo";

export const metadata = {
  title:
    "Graham Power Washing | Power Washing South Shore & Cape Cod | Free Quotes",
  description:
    "Top-rated soft washing, pressure washing, window cleaning, and painting for Plymouth, the South Shore, and Cape Cod. Licensed & insured. Free quotes.",
  alternates: {
    canonical: "https://www.grahampowerwashing.com",
  },
};

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Graham Power Washing",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    localBusinessJsonLd({
      description:
        "Graham Power Washing offers soft washing, pressure washing, window cleaning, and interior & exterior painting across Plymouth County, the South Shore, and Cape Cod.",
      areaServed: SERVICE_AREAS.filter((a) => a.setting !== "regional").map(
        (area) => ({
          "@type": "City",
          name: `${area.name}, Massachusetts`,
        }),
      ),
    }),
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <main className="bg-gray-50">
        <section id="home" aria-label="Home">
          <Hero />
        </section>

        <section id="contact" aria-label="Get a Free Quote" className="bg-slate-50">
          <GetAiQuote />
        </section>

        <section id="reviews" aria-label="Customer Reviews">
          <Reviews />
        </section>

        <section id="our-work" aria-label="Our Work Portfolio">
          <OurWork />
        </section>

        <section id="before-after" aria-label="Before and After Gallery">
          <BeforeAfter />
        </section>

        <section id="services" aria-label="Our Services">
          <Services />
        </section>

        <section id="about" aria-label="About Us">
          <AboutUs />
        </section>

        <section id="areas-served" aria-label="Areas We Serve">
          <ServiceAreaMap showTowns />
        </section>

        <GReviews />
      </main>
    </>
  );
};

export default Page;
