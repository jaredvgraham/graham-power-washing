import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Graham Power-Washing",
  description:
    "Graham Power-Washing offers top-quality power washing, painting, and cabinet refinishing services in Buzzards Bay, MA and surrounding areas. Serving residential and commercial clients across Middleboro, Scituate, Hingham, Plymouth, Falmouth, and more.",
  keywords: [
    "power washing",
    "painting",
    "cabinet refinishing",
    "popcorn ceiling removal",
    "drywall patching",
    "Buzzards Bay power washing",
    "Massachusetts power washing",
    "Graham Power-Washing",
    "exterior cleaning",
    "home maintenance",
    "residential power washing",
    "commercial power washing",
    "Buzzards Bay",
    "Middleboro",
    "Scituate",
    "Hingham",
    "Plymouth",
    "Falmouth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              name: "Graham Power-Washing",
              description:
                "Graham Power-Washing offers top-quality power washing, painting, and cabinet refinishing services in Buzzards Bay, MA and surrounding areas.",
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
                "Middleboro",
                "Scituate",
                "Hingham",
                "Plymouth",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
