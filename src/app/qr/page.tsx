import type { Metadata } from "next";
import QrLanding from "@/components/QrLanding";

export const metadata: Metadata = {
  title: "Graham Power Washing | Call or Get a Free Quote",
  description:
    "Thanks for scanning! Call Graham Power Washing for power washing, soft washing, and interior & exterior painting in Plymouth County and Cape Cod. Free quotes, licensed & insured.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.grahampowerwashing.com/qr",
  },
};

export default function QrPage() {
  return <QrLanding />;
}
