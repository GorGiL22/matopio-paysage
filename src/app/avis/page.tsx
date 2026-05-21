import Image from "next/image";
import { ReviewsSection } from "@/components/avis/ReviewsSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { createMetadata } from "@/lib/metadata";
import { fetchGoogleReviews } from "@/lib/google-reviews";

export const metadata = createMetadata({
  title: "Avis clients Google",
  description:
    "Découvrez les avis de nos clients sur Google. Note moyenne 5/5. Matopio Paysage, paysagiste de confiance à Lissieu.",
  path: "/avis",
});

export default async function AvisPage() {
  const { reviews } = await fetchGoogleReviews();

  return (
    <>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden pt-24 bg-forest">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/assets/images/about.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-forest/80" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream">
            Avis clients
          </h1>
          <p className="mt-4 max-w-xl text-cream/80 text-lg">
            La satisfaction de nos clients est notre meilleure récompense.
          </p>
        </div>
      </section>

      <ReviewsSection reviews={reviews} showAll title="Ce que disent nos clients" />

      <CtaBanner />
    </>
  );
}
