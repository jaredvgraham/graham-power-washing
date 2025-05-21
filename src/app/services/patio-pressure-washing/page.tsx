// pages/patio-pressure-washing.tsx
"use client";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PatioPressureWashing() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <Head>
        <title>Patio Pressure Washing | Graham Power Washing</title>
        <meta
          name="description"
          content="Professional patio pressure washing services by Graham Power Washing. Restore stone, paver, and concrete patios with expert care."
        />
        <meta
          name="keywords"
          content="patio pressure washing, paver patio cleaning, stone patio cleaning, concrete patio wash, exterior surface cleaning, Graham Power Washing"
        />
        <link
          rel="canonical"
          href="https://grahampowerwashing.com/patio-pressure-washing"
        />
        <meta
          property="og:title"
          content="Patio Pressure Washing | Graham Power Washing"
        />
        <meta
          property="og:description"
          content="Revive your outdoor living space with Graham Power Washing's patio pressure washing services. Safe for stone, paver, and concrete surfaces."
        />
        <meta
          property="og:url"
          content="https://grahampowerwashing.com/patio-pressure-washing"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://grahampowerwashing.com/images/patio-wash.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Patio Pressure Washing",
            description:
              "Graham Power Washing provides expert pressure washing for patios, including stone, concrete, and paver surfaces. Remove buildup, stains, and organic growth effectively.",
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
          transition={{ duration: 1 }}
          className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-xl mb-16"
        >
          <Image
            src="/patio-pressure-wash.png"
            alt="Patio Pressure Washing"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
          <div className="absolute bottom-10 left-10 z-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
              Patio Pressure Washing
            </h1>
          </div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto mb-16 text-center"
        >
          Make your patio a place to enjoy again. Our pressure washing service
          removes dirt, moss, algae, and weather stains from all patio
          materials—reviving the beauty and safety of your outdoor space.
        </motion.p>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
            Benefits of Patio Pressure Washing
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg text-gray-700 max-w-4xl mx-auto">
            {[
              "Eliminates slippery moss, mildew, and algae",
              "Restores natural color and texture",
              "Enhances outdoor appeal and usability",
              "Safe for pavers, concrete, and stone materials",
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
            Our Patio Cleaning Process
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 text-lg space-y-6">
            <p>
              <strong>1. Inspection:</strong> We assess the patio surface type
              and identify buildup or damage.
            </p>
            <p>
              <strong>2. Pretreatment:</strong> Specialized cleaners break down
              organic growth and stains.
            </p>
            <p>
              <strong>3. Pressure Wash:</strong> We adjust pressure and
              technique based on your material for a safe clean.
            </p>
            <p>
              <strong>4. Final Rinse:</strong> A clean, uniform surface is left
              behind, ready for use or sealing.
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
            Patio Surfaces We Clean
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            Whether your patio is made from stamped concrete, brick pavers, blue
            stone, or poured slabs, we customize our approach to protect the
            material and bring back its best appearance.
          </p>
        </motion.section>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="bg-gradient-to-tr from-blue-700 to-blue-500 text-white p-12 rounded-3xl shadow-2xl text-center mb-5"
        >
          <h3 className="text-3xl font-bold mb-4">Request a Quote</h3>
          <p className="mb-6 text-lg opacity-90">
            {`Let's refresh your patio. Contact us today for a quote or to
            schedule service.`}
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Get a Quote
          </Link>
        </motion.div>

        {/* FAQ Section for SEO */}
        <section className="mb-24" id="faq">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
            Patio Pressure Washing FAQs
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 text-lg space-y-6">
            <div>
              <h3 className="font-bold">
                How often should I have my patio pressure washed?
              </h3>
              <p>
                Most patios benefit from professional pressure washing once a
                year, but high-traffic or shaded areas may need more frequent
                cleaning to prevent moss and algae buildup.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                Is pressure washing safe for all patio materials?
              </h3>
              <p>
                Yes! We adjust our pressure and cleaning solutions to safely
                clean concrete, pavers, stone, and more—without causing damage.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                Will pressure washing remove stains and algae?
              </h3>
              <p>
                Absolutely. Our process removes dirt, stains, moss, algae, and
                other organic growth, restoring your patio's appearance and
                safety.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                How soon can I use my patio after cleaning?
              </h3>
              <p>
                Your patio is ready for use as soon as it's dry—usually within a
                few hours after we finish.
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
                  name: "How often should I have my patio pressure washed?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most patios benefit from professional pressure washing once a year, but high-traffic or shaded areas may need more frequent cleaning to prevent moss and algae buildup.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is pressure washing safe for all patio materials?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We adjust our pressure and cleaning solutions to safely clean concrete, pavers, stone, and more—without causing damage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will pressure washing remove stains and algae?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. Our process removes dirt, stains, moss, algae, and other organic growth, restoring your patio's appearance and safety.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How soon can I use my patio after cleaning?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your patio is ready for use as soon as it's dry—usually within a few hours after we finish.",
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
