import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Graham Power-Washing",
  description:
    "Graham Power-Washing offers premium residential and commercial power washing services across the South Shore. Our expert team ensures your property looks its best with efficient, thorough, and environmentally-friendly cleaning solutions. Trusted by the community, we deliver exceptional results for homes, decks, driveways, and more.",
  keywords:
    "power washing, pressure washing, residential power washing, commercial power washing, South Shore, house cleaning, deck cleaning, driveway cleaning, exterior cleaning, mildew removal, Graham Power-Washing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
