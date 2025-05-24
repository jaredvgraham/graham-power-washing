import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
//
export const metadata: Metadata = {
  title:
    "Graham Power Washing | Top-Rated Power Washing Services in Plymouth, MA | Free Quotes",
  description:
    "✓ Top-Rated Power Washing in Plymouth, MA, South Shore, Cape Cod, and surrounding areas ✓ Same-Day Service Available ✓ Licensed & Insured ✓ 5-Star Reviews ✓ Free Quotes ✓ Serving Plymouth, Scituate, Hingham & Surrounding Areas",
  keywords: [
    "power washing plymouth ma",
    "power washing near me",
    "power washing services",
    "power washing services near me",
    "power washing services in plymouth",
    "power washing services in south shore",
    "power washing services in cape cod",
    "power washing kingston ma",
    "power washing duxbury ma",
    "power washing carver ma",
    "power washing marshfield ma",
    "power washing pembroke ma",
    "power washing hanson ma",
    "power washing wareham ma",
    "power washing hanover ma",
    "power washing norwell ma",
    "power washing bourne ma",
    "power washing east bridgewater ma",
    "power washing bridgewater ma",
    "power washing whitman ma",
    "power washing lakeville ma",
    "power washing sandwich ma",
    "pressure washing plymouth ma",
    "pressure washing near me",
    "pressure washing services",
    "pressure washing services near me",
    "pressure washing services in plymouth",
    "pressure washing services in south shore",
    "pressure washing services in cape cod",
    "pressure washing kingston ma",
    "pressure washing duxbury ma",
    "pressure washing carver ma",
    "pressure washing marshfield ma",
    "pressure washing pembroke ma",
    "pressure washing hanson ma",
    "pressure washing wareham ma",
    "pressure washing hanover ma",
    "pressure washing norwell ma",
    "pressure washing bourne ma",
    "pressure washing east bridgewater ma",
    "pressure washing bridgewater ma",
    "pressure washing whitman ma",
    "pressure washing lakeville ma",
    "pressure washing sandwich ma",
    "soft washing plymouth",
    "soft washing",
    "soft washing near me",
    "soft washing services",
    "soft washing services near me",
    "soft washing services in plymouth",
    "soft washing services in south shore",
    "soft washing services in cape cod",
    "soft washing services in massachusetts",
    "vinyl siding cleaning plymouth",
    "vinyl siding power washing plymouth",
    "vinyl siding soft washing plymouth",
    "vinyl siding soft washing",
    "cedar siding cleaning plymouth",
    "cedar siding power washing plymouth",
    "cedar siding soft washing plymouth",
    "cedar siding soft washing",
    "deck cleaning plymouth",
    "patio cleaning plymouth",
    "driveway cleaning plymouth",
    "roof cleaning plymouth",
    "exterior painting plymouth",
    "power washing near me",
    "pressure washing near me",
    "house washing near me",
    "deck cleaning near me",
    "patio cleaning near me",
    "driveway cleaning near me",
    "roof cleaning near me",
    "exterior painting near me",
    "power washing scituate",
    "power washing hingham",
    "power washing falmouth",
    "power washing buzzards bay",
    "power washing middleboro",
    "power washing mashpee",
    "power washing osterville",
    "power washing hyannis",
    "power washing barnstable",
    "power washing cape cod",
    "power washing south shore",
    "power washing south coast",
    "power washing massachusetts",
    "power washing ma",
    "power washing services",
    "pressure washing services",
    "house washing services",
    "deck cleaning services",
    "patio cleaning services",
    "driveway cleaning services",
    "roof cleaning services",
    "exterior painting services",
    "residential power washing",
    "commercial power washing",
    "home maintenance",
    "exterior cleaning",
    "graham power washing",
    "graham power washing",
    "graham painting",
    "graham power washing services",
    "graham power washing near me",
    "graham power washing scituate",
    "graham power washing hingham",
    "graham power washing falmouth",
    "graham power washing buzzards bay",
  ],
  openGraph: {
    title:
      "Graham Power Washing | Top-Rated Power Washing Services in Plymouth, MA | Free Quotes",
    description:
      "✓ Top-Rated Power Washing in Plymouth, MA ✓ Same-Day Service Available ✓ Licensed & Insured ✓ 5-Star Reviews ✓ Free Quotes ✓ Serving Plymouth, Scituate, Hingham & Surrounding Areas",
    url: "https://www.grahampowerwashing.com",
    siteName: "Graham Power Washing",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
        alt: "Graham Power Washing - Professional Power Washing Services in Plymouth, Kingston, Duxbury, Carver, Marshfield, Pembroke, Hanson, Wareham, Hanover, Norwell, Bourne, East Bridgewater, Bridgewater, Whitman, Lakeville, Sandwich, and South Shore MA",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.grahampowerwashing.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-53X7DZN3');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7FS20SMXY8"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7FS20SMXY8');
            `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17110273983"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17110273983');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              name: "Graham Power-Washing",
              description:
                "Graham Power-Washing offers top-quality power washing and painting services in Plymouth, MA and surrounding areas.",
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
                "Middleboro",
                "Scituate",
                "Hingham",
                "Falmouth",
                "Centerville",
                "Hanover",
                "Duxbury",
                "Buzzards Bay",
                "Marshfield",
                "Lakeville",
                "Bridgewater",
                "Rockland",
                "Chatham",
                "Norwell",
                "South Chatham",
                "Truro",
                "Minot",
                "Sagamore Beach",
                "East Orleans",
                "Monument Beach",
                "North Easton",
                "Cohasset",
                "Hyannis Port",
                "North Weymouth",
                "Wellfleet",
                "Bryantville",
                "East Sandwich",
                "West Harwich",
                "Mattapoisett",
                "Rochester",
                "Forestdale",
                "South Dennis",
                "Brant Rock",
                "Humarock",
                "Monponsett",
                "West Bridgewater",
                "Abington",
                "Hyannis",
                "Manomet",
                "Kingston",
                "West Barnstable",
                "Woods Hole",
                "North Chatham",
                "Sagamore",
                "Harwich Port",
                "Mashpee",
                "East Falmouth",
                "Eastham",
                "Hull",
                "Hanson",
                "Sandwich",
                "Whitman",
                "East Wareham",
                "Onset",
                "Pocasset",
                "East Taunton",
                "Avon",
                "Pembroke",
                "South Orleans",
                "Yarmouth Port",
                "Green Harbor",
                "Dennis Port",
                "North Carver",
                "South Carver",
                "Dennis",
                "South Wellfleet",
                "East Weymouth",
                "Fairhaven",
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
                "Ocean Bluff",
                "Orleans",
                "West Dennis",
                "Greenbush",
                "Cotuit",
                "West Yarmouth",
                "Marion",
                "Elmwood",
                "North Falmouth",
                "Brewster",
                "Taunton",
                "West Wareham",
                "Wareham",
                "South Weymouth",
                "Cummaquid",
                "Harwich",
                "South Harwich",
                "Marshfield Hills",
              ],
              sameAs: [
                "https://www.facebook.com/profile.php?id=100063725705465",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-100`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-53X7DZN3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <nav aria-label="Main Navigation" className="relative">
          <Navbar />
        </nav>
        {children}
      </body>
    </html>
  );
}
