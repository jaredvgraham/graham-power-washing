// pages/deck-pressure-washing.tsx
"use client";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DeckPressureWashing() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.35,
        ease: "easeOut",
      },
    }),
  };
  return (
    <>
      <Head>
        <title>Deck Pressure Washing | Graham Power Washing</title>
        <meta
          name="description"
          content="Professional deck pressure washing by Graham Power Washing. Restore wood and composite decking with safe, effective cleaning."
        />
        <meta
          name="keywords"
          content="deck pressure washing, deck cleaning, power wash deck, wood deck cleaning, composite deck washing, Graham Power Washing"
        />
        <link
          rel="canonical"
          href="https://grahampowerwashing.com/deck-pressure-washing"
        />
        <meta
          property="og:title"
          content="Deck Pressure Washing | Graham Power Washing"
        />
        <meta
          property="og:description"
          content="Deck pressure washing for wood and composite decks. Restore your outdoor space with Graham Power Washing's expert cleaning services."
        />
        <meta
          property="og:url"
          content="https://grahampowerwashing.com/deck-pressure-washing"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://grahampowerwashing.com/images/deck-wash.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Deck Pressure Washing",
            description:
              "Graham Power Washing provides expert pressure washing for wood and composite decks, using safe and effective methods to restore appearance and durability.",
            provider: {
              "@type": "Organization",
              name: "Graham Power Washing",
              url: "https://grahampowerwashing.com",
            },
            areaServed: {
              "@type": "Place",
              name: "South Shore, Massachusetts",
            },
            serviceType: "Pressure Washing",
          })}
        </script>
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-xl mb-16"
        >
          <Image
            src="/deck-pressure-wash.png"
            alt="Deck Pressure Washing"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
          <div className="absolute bottom-10 left-10 z-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
              Deck Pressure Washing
            </h1>
          </div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto mb-16 text-center"
        >
          {`Restore your deck's appearance and safety with Graham Power Washing.
          Our pressure washing service removes embedded dirt, algae, and stains
          from both natural wood and composite decking—without damaging the
          surface.`}
        </motion.p>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
            Benefits of Deck Pressure Washing
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg text-gray-700 max-w-4xl mx-auto">
            {[
              "Improves safety by removing slippery buildup",
              "Restores natural beauty and color",
              "Extends the life of your deck's material",
              "Prepares surfaces for staining or sealing",
            ].map((item, i) => (
              <motion.li
                key={i}
                className="relative pl-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring" }}
              >
                <span className="absolute left-0 top-1 text-blue-600 text-xl">
                  ✓
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
            Our Deck Cleaning Process
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 text-lg space-y-6">
            <p>
              <strong>1. Surface Inspection:</strong> We check for soft spots,
              grime, and any needed pre-treatment.
            </p>
            <p>
              <strong>2. Pre-treatment:</strong> A deck-safe cleaner is applied
              to break down mold, mildew, and stains.
            </p>
            <p>
              <strong>3. Pressure Wash:</strong> We use the correct pressure and
              nozzle for your deck material to safely clean the surface.
            </p>
            <p>
              <strong>4. Final Rinse:</strong> A final rinse ensures the deck is
              ready for use or sealing.
            </p>
          </div>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mb-24"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
            Your Deck, Restored
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            {`Whether it's natural cedar, pressure-treated lumber, or composite
            material, we tailor our approach to deliver excellent results
            without risk of damage. Let us help bring your deck back to life.`}
          </p>
        </motion.section>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="bg-gradient-to-tr from-blue-700 to-blue-500 text-white p-12 rounded-3xl shadow-2xl text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Request a Quote</h3>
          <p className="mb-6 text-lg opacity-90">
            Get in touch today to schedule your deck cleaning or request a free
            estimate. Our team is here to help.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Get a Quote
          </Link>
        </motion.div>

        {/* FAQ Section for SEO */}
        <section className="mb-24 mt-5" id="faq">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
            Deck Pressure Washing FAQs
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 text-lg space-y-6">
            <div>
              <h3 className="font-bold">
                How often should I have my deck pressure washed?
              </h3>
              <p>
                Most decks benefit from professional cleaning once a year, but
                shaded or high-traffic decks may need more frequent service to
                prevent mold and algae.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                Will pressure washing damage my wood or composite deck?
              </h3>
              <p>
                No. We use the correct pressure and nozzles for your deck
                material, ensuring a safe and effective clean without causing
                splintering or surface damage.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                Can you remove old stains, paint, or sealant?
              </h3>
              <p>
                Pressure washing can remove some old finishes, but for complete
                removal, additional stripping or sanding may be required. We can
                advise on the best approach for your deck.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                How soon can I use my deck after cleaning?
              </h3>
              <p>
                {`Your deck is ready for use as soon as it's dry—usually within a
            few hours after we finish.`}
              </p>
            </div>
          </div>
        </section>

        {/* FAQPage Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How often should I have my deck pressure washed?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most decks benefit from professional cleaning once a year, but shaded or high-traffic decks may need more frequent service to prevent mold and algae.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will pressure washing damage my wood or composite deck?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. We use the correct pressure and nozzles for your deck material, ensuring a safe and effective clean without causing splintering or surface damage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you remove old stains, paint, or sealant?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pressure washing can remove some old finishes, but for complete removal, additional stripping or sanding may be required. We can advise on the best approach for your deck.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How soon can I use my deck after cleaning?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your deck is ready for use as soon as it's dry—usually within a few hours after we finish.",
                  },
                },
              ],
            }),
          }}
        />
      </main>
    </>
  );
}
