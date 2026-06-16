import React from "react";
import { getGoogleReviews } from "@/lib/googleReviews";
import ReviewsClient, { type DisplayReview } from "./ReviewsClient";

const REVIEW_URL = "https://g.page/r/Ce-IiV_Ozzm3EAI/review";

// Shown when the Google Places integration is not configured or unavailable.
const FALLBACK_REVIEWS: DisplayReview[] = [
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

const Reviews = async () => {
  const googleData = await getGoogleReviews();
  const hasGoogleReviews = !!googleData && googleData.reviews.length > 0;

  const reviews: DisplayReview[] = hasGoogleReviews
    ? googleData.reviews
    : FALLBACK_REVIEWS;

  return (
    <ReviewsClient
      reviews={reviews}
      rating={googleData?.rating ?? null}
      total={googleData?.total ?? null}
      reviewUrl={REVIEW_URL}
      fromGoogle={hasGoogleReviews}
    />
  );
};

export default Reviews;
