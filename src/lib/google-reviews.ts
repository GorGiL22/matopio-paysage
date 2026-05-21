/**
 * Connexion future à l'API Google Places / Reviews
 *
 * Étapes :
 * - Variable d'environnement GOOGLE_PLACES_API_KEY
 * - reviewsConfig.googlePlaceId dans src/content/reviews.ts
 * - Appeler fetchGoogleReviews() depuis les pages serveur
 */

import { reviews, googleReviewsSummary, reviewsConfig } from "@/content/reviews";
import type { Review } from "@/content/reviews";

export type ReviewsData = {
  summary: typeof googleReviewsSummary;
  reviews: Review[];
  source: "mock" | "google";
};

export async function fetchGoogleReviews(): Promise<ReviewsData> {
  if (reviewsConfig.useMockData) {
    return {
      summary: googleReviewsSummary,
      reviews,
      source: "mock",
    };
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.warn("[Matopio] GOOGLE_PLACES_API_KEY manquante — avis mock utilisés.");
    return {
      summary: googleReviewsSummary,
      reviews,
      source: "mock",
    };
  }

  // TODO: implémenter l'appel Places API (New)
  // const url = `https://places.googleapis.com/v1/places/${reviewsConfig.googlePlaceId}`;
  void apiKey;

  return {
    summary: googleReviewsSummary,
    reviews,
    source: "mock",
  };
}
