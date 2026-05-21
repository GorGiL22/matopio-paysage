import { site } from "@/content/site";
import { googleReviewsSummary } from "@/content/reviews";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    image: `${site.url}${site.images.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address,
      addressLocality: "Lissieu",
      postalCode: "69380",
      addressCountry: "FR",
    },
    areaServed: site.contact.zone,
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleReviewsSummary.averageRating,
      reviewCount: googleReviewsSummary.totalReviews,
      bestRating: 5,
    },
    sameAs: [site.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
