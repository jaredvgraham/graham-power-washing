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
import Head from "next/head";

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
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              name: "Graham Painting & Power Washing",
              image: "https://www.grahampowerwashing.com/img1.jpeg",
              priceRange: "$$",
              description:
                "Graham Painting & Power Washing offers top-quality power washing in Plymouth, MA, South Shore MA, Cape Cod MA, and surrounding areas.",
              url: "https://www.grahampowerwashing.com",
              telephone: "7744877616",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4 Winchester Avenue",
                addressLocality: "Buzzards Bay",
                addressRegion: "MA",
                postalCode: "02532",
                addressCountry: "US",
              },
              openingHours: ["Mo-Su 08:00-18:00"],
              areaServed: [
                "Plymouth",
                "Duxbury",
                "Buzzards Bay",
                "Marshfield",
                "Middleboro",
                "Scituate",
                "Hingham",
                "Falmouth",
                "Centerville",
                "Hanover",
                "Lakeville",
                "Bridgewater",
                "Rockland",
                "Chatham",
                "Norwell",
                "Sagamore Beach",
                "Monument Beach",
                "Wellfleet",
                "East Sandwich",
                "West Harwich",
                "Mattapoisett",
                "Rochester",
                "Forestdale",
                "Humarock",
                "Monponsett",
                "West Bridgewater",
                "Hyannis",
                "Manomet",
                "Kingston",
                "West Barnstable",
                "Sagamore",
                "Mashpee",
                "East Falmouth",
                "Eastham",
                "Hanson",
                "Sandwich",
                "Whitman",
                "East Wareham",
                "Onset",
                "Pembroke",
                "North Carver",
                "South Carver",
                "East Weymouth",
                "Carver",
                "East Bridgewater",
                "North Scituate",
                "South Yarmouth",
                "White Horse Beach",
                "North Eastham",
                "North Truro",
                "West Chatham",
                "West Hyannisport",
                "Plympton",
                "Osterville",
                "North Marshfield",
                "North Pembroke",
                "West Yarmouth",
                "Marion",
                "North Falmouth",
                "West Wareham",
                "Wareham",
                "South Weymouth",
                "Marshfield Hills",
              ],
              sameAs: [
                "https://www.facebook.com/profile.php?id=100063725705465",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "7744877616",
                contactType: "customer service",
                areaServed: "US",
              },
            }),
          }}
        />
      </Head>
      <main itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="Graham Power Washing" />
        <meta
          itemProp="description"
          content="Professional power washing services in Plymouth, MA, South Shore MA, Cape Cod MA, and surrounding areas."
        />
        <meta
          itemProp="areaServed"
          content="Plymouth, MA, South Shore MA, Cape Cod MA, and surrounding areas"
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

        <section id="reviews" aria-label="Customer Reviews">
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

        <section id="about" aria-label="About Us">
          <AboutUs />
        </section>

        <section
          id="contact"
          aria-label="Contact Us"
          itemProp="contactPoint"
          itemScope
          itemType="https://schema.org/ContactPoint"
        >
          <div id="quote-form">
            <GetAiQuote />
          </div>
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Page;
