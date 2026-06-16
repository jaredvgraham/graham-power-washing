import { getGoogleReviews, type GoogleReview } from "@/lib/googleReviews";
import GoogleReviewCard, {
  type GoogleReviewCardData,
} from "@/components/google/GoogleReviewCard";
import GoogleRatingSummary from "@/components/google/GoogleRatingSummary";

const REVIEW_URL = "https://g.page/r/Ce-IiV_Ozzm3EAI/review";

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
  {
    review:
      "I recently moved to MA and needed my vinyl sided house and fence powerwashed. Justin returned my call immediately and was at my house on time for the estimate. The price was very fair and the work was great — the house is clean and mildew free and the fence looks new. He even told me I could save money by skipping the deck since it had been done recently. He cleaned up and put everything back. I would recommend Justin to anyone looking for powerwashing.",
    author: "P.D",
    rating: 5,
  },
  {
    review:
      "We were very pleased with our powerwashing. Our interactions were quick and very easy to work with. They actually care that their customers are satisfied. We have and will continue to recommend them.",
    author: "S.L",
    rating: 5,
  },
  {
    review:
      "Justin was on time, perfectly professional and courteous. He wasted no time in completing a spectacular power washing of my very dirty home. I could not be happier with Justin's work, and the great price. THANK YOU!",
    author: "J.S",
    rating: 5,
  },
];

const ReviewsPage = async () => {
  const googleData = await getGoogleReviews();
  const fromGoogle = !!googleData && googleData.reviews.length > 0;

  const reviews: GoogleReviewCardData[] = fromGoogle
    ? googleData.reviews.map((r: GoogleReview) => ({
        review: r.review,
        author: r.author,
        rating: r.rating,
        relativeTime: r.relativeTime,
        profilePhotoUrl: r.profilePhotoUrl,
        authorUrl: r.authorUrl,
      }))
    : FALLBACK_REVIEWS;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Customer Reviews
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            See what homeowners across the South Shore &amp; Cape Cod are saying.
          </p>
        </div>

        {fromGoogle && (
          <div className="mb-14">
            <GoogleRatingSummary
              rating={googleData.rating}
              total={googleData.total}
              reviewUrl={REVIEW_URL}
            />
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, index) => (
            <GoogleReviewCard key={`${r.author}-${index}`} {...r} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Leave a Google Review
          </a>
          <a
            href="https://www.homeadvisor.com/rated.GrahamPainting.43994090.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-3 font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            More reviews on HomeAdvisor
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
