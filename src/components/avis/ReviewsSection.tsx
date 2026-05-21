"use client";

import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";
import type { Review } from "@/content/reviews";
import { googleReviewsSummary } from "@/content/reviews";
import { site } from "@/content/site";
import { StarRating } from "./StarRating";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ReviewsSectionProps = {
  reviews: Review[];
  showAll?: boolean;
  title?: string;
  subtitle?: string;
};

export function ReviewsSection({
  reviews: items,
  showAll = false,
  title = "Ils nous font confiance",
  subtitle = "Avis clients vérifiés sur Google",
}: ReviewsSectionProps) {
  const displayed = showAll ? items : items.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title={title} subtitle={subtitle} eyebrow={false} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-center gap-4 rounded-2xl bg-forest px-8 py-10 text-center md:flex-row md:gap-10"
        >
          <div>
            <p className="font-display text-5xl md:text-6xl text-cream font-medium">
              {googleReviewsSummary.averageRating}/5
            </p>
            <StarRating rating={googleReviewsSummary.averageRating} size={22} className="mt-2 justify-center" />
          </div>
          <div className="text-cream/80">
            <p className="text-lg font-medium text-cream">
              Note moyenne sur {googleReviewsSummary.source}
            </p>
            <p className="text-sm mt-1">
              Basée sur {googleReviewsSummary.totalReviews} avis clients
            </p>
            {site.contact.googleMapsUrl && (
              <a
                href={site.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm text-beige hover:text-cream transition-colors"
              >
                Voir sur Google Maps
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </motion.div>

        <div
          className={cn(
            "grid gap-6 md:grid-cols-2",
            showAll ? "lg:grid-cols-3" : "lg:grid-cols-4",
          )}
        >
          {displayed.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative rounded-2xl border border-beige/80 bg-white p-7 shadow-sm hover:shadow-lg hover:shadow-forest/5 transition-shadow duration-400"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-beige/60" />
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-sm font-semibold text-forest">
                  {review.avatarInitials}
                </div>
                <div>
                  <p className="font-medium text-charcoal">{review.author}</p>
                  <p className="text-xs text-charcoal/50">{review.date}</p>
                </div>
              </div>
              <StarRating rating={review.rating} size={14} className="mt-4" />
              <p className="mt-4 text-sm text-charcoal/70 leading-relaxed">
                {review.text}
              </p>
            </motion.article>
          ))}
        </div>

        {!showAll && items.length > 4 && (
          <div className="mt-12 text-center">
            <Button href="/avis" variant="secondary">
              Lire tous les avis
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
