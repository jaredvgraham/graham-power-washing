import type { Metadata } from "next";
import MetaAdsLanding from "@/components/MetaAdsLanding";
import { getGoogleReviews } from "@/lib/googleReviews";
import type { GoogleReviewCardData } from "@/components/google/GoogleReviewCard";

export const metadata: Metadata = {
  title: "Free Soft Wash Quote | Graham Power Washing",
  description:
    "Get a free, no-obligation soft wash & power washing quote for your Plymouth County or Cape Cod home. Licensed & insured. Fast local response.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.grahampowerwashing.com/get-quote",
  },
  openGraph: {
    title: "Free Soft Wash Quote | Graham Power Washing",
    description:
      "Request your free exterior cleaning quote — house wash, decks, patios, concrete & more. Serving Plymouth, South Shore & Cape Cod.",
    url: "https://www.grahampowerwashing.com/get-quote",
    type: "website",
  },
};

const FALLBACK_REVIEWS: GoogleReviewCardData[] = [
  {
    review:
      "Graham power washed our house, decks, driveway, & camper and it all came out beautifully. You don't realize how badly it needs to be done until it's all clean! Thank you Jared & Justin",
    author: "C.S",
    rating: 5,
  },
  {
    review:
      "Unbelievable job at my house!! They did my house, deck, pool deck, and pool fence today. I was like a kid on Christmas morning when I came today! Highly recommend them to anyone. Very reasonable price and more importantly EXCEPTIONAL work!",
    author: "C.J",
    rating: 5,
  },
  {
    review:
      "Justin pressure washed my house a few days ago and I saw it dry today for the first time. I'm not surprised but it looks awesome. Meticulous in every way, from the first callback within the hour, on schedule for the estimate visit, excellent price, great job and fantastic customer service. Thank you Justin. Highly recommended.",
    author: "K.G",
    rating: 5,
  },
];

export default async function GetQuoteAdsPage() {
  const googleData = await getGoogleReviews();
  const fromGoogle = !!googleData && googleData.reviews.length > 0;

  return (
    <MetaAdsLanding
      reviews={fromGoogle ? googleData.reviews : FALLBACK_REVIEWS}
      rating={googleData?.rating ?? null}
      total={googleData?.total ?? null}
      fromGoogle={fromGoogle}
    />
  );
}
