import AboutUs from "@/components/AboutUs";
import GetAiQuote from "@/components/AiQuote";
import BeforeAfter from "@/components/BeforeAfter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurWork from "@/components/OurWork";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import React from "react";

export const metadata = {
  title:
    "Graham Power Washing | Top-Rated Power Washing Services in Plymouth, MA, South Shore MA, Cape Cod MA, and surrounding areas | Free Quotes",
  description:
    "✓ Top-Rated Power Washing in Plymouth, MA, South Shore MA, Cape Cod MA, and surrounding areas ✓ Same-Day Service Available ✓ Licensed & Insured ✓ 5-Star Reviews ✓ Free Quotes ✓ Serving Plymouth, Scituate, Hingham, Duxbury, Carver, Marshfield, Pembroke, Hanson, Wareham, Hanover, Norwell, Bourne, East Bridgewater, Bridgewater, Whitman, Lakeville, Sandwich, South Shore MA, and Cape Cod MA ✓ Power Washing Near Me ✓ Pressure Washing Near Me",
  alternates: {
    canonical: "https://www.grahampowerwashing.com",
  },
};

const Page = () => {
  return (
    <main itemScope itemType="https://schema.org/Service">
      <meta itemProp="name" content="Graham Power Washing" />
      <meta
        itemProp="description"
        content="Professional power washing services in Plymouth, MA and surrounding areas."
      />
      <meta
        itemProp="areaServed"
        content="Plymouth, MA and surrounding areas"
      />

      <section
        id="home"
        aria-label="Home"
        itemProp="offers"
        itemScope
        itemType="https://schema.org/Offer"
      >
        <Hero />
      </section>

      <section
        id="reviews"
        aria-label="Customer Reviews"
        itemProp="aggregateRating"
        itemScope
        itemType="https://schema.org/AggregateRating"
      >
        <meta itemProp="ratingValue" content="5" />
        <meta itemProp="reviewCount" content="100+" />
        <Reviews />
      </section>

      <section id="our-work" aria-label="Our Work Portfolio">
        <OurWork />
      </section>

      <section id="before-after" aria-label="Before and After Gallery">
        <BeforeAfter />
      </section>

      <section
        id="services"
        aria-label="Our Services"
        itemProp="hasOfferCatalog"
        itemScope
        itemType="https://schema.org/OfferCatalog"
      >
        <Services />
      </section>

      <section
        id="about"
        aria-label="About Us"
        itemProp="provider"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <AboutUs />
      </section>

      <section
        id="contact"
        aria-label="Contact Us"
        itemProp="contactPoint"
        itemScope
        itemType="https://schema.org/ContactPoint"
      >
        <GetAiQuote />
        <Contact />
      </section>

      <Footer />
    </main>
  );
};

export default Page;
