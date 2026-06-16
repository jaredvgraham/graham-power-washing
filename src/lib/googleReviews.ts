export interface GoogleReview {
  review: string;
  author: string;
  rating: number;
  relativeTime?: string;
  profilePhotoUrl?: string;
  authorUrl?: string;
  publishTime?: string;
}

export interface GoogleReviewsResult {
  reviews: GoogleReview[];
  rating: number | null;
  total: number | null;
  googleMapsUri?: string;
}

interface PlacesApiReview {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
}

interface PlacesApiResponse {
  reviews?: PlacesApiReview[];
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
}

// Reviews are refreshed once a day to keep Google Places API usage (and cost) low.
const REVALIDATE_SECONDS = 60 * 60 * 24;

/**
 * Fetches the latest Google reviews for the business via the Google Places API
 * (New). Requires the env vars GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID.
 *
 * Returns null when the integration is not configured or the request fails, so
 * callers can gracefully fall back to curated/manual reviews.
 *
 * Note: the Places API returns at most 5 reviews per place.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsResult | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(
      placeId,
    )}`;

    const res = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "reviews,rating,userRatingCount,googleMapsUri",
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.error(
        "Google Places API error:",
        res.status,
        await res.text().catch(() => ""),
      );
      return null;
    }

    const data: PlacesApiResponse = await res.json();

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .map((r) => ({
        review: r.text?.text ?? r.originalText?.text ?? "",
        author: r.authorAttribution?.displayName ?? "Google User",
        rating: typeof r.rating === "number" ? r.rating : 5,
        relativeTime: r.relativePublishTimeDescription,
        profilePhotoUrl: r.authorAttribution?.photoUri,
        authorUrl: r.authorAttribution?.uri,
        publishTime: r.publishTime,
      }))
      .filter((r) => r.review.trim().length > 0)
      // The Places API (New) has no sort option, so order newest-first by publish time.
      .sort((a, b) => {
        const aTime = a.publishTime ? Date.parse(a.publishTime) : 0;
        const bTime = b.publishTime ? Date.parse(b.publishTime) : 0;
        return bTime - aTime;
      });

    return {
      reviews,
      rating: typeof data.rating === "number" ? data.rating : null,
      total: typeof data.userRatingCount === "number" ? data.userRatingCount : null,
      googleMapsUri: data.googleMapsUri,
    };
  } catch (error) {
    console.error("Failed to fetch Google reviews:", error);
    return null;
  }
}
