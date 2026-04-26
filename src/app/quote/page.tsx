import type { Metadata } from "next";
import GetAiQuote from "@/components/AiQuote";

export const metadata: Metadata = {
  title:
    "Free Soft Wash Quote | Plymouth County & Cape Cod | Graham Power Washing",
  description:
    "Request a free, no-obligation exterior cleaning quote for your Plymouth County or Cape Cod home. Siding, decks, patios, walkways, and more.",
};

export default function QuotePage() {
  return <GetAiQuote />;
}
