import { Hero } from "@/components/home/Hero";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ServiceCard } from "@/components/prestations/ServiceCard";
import { BeforeAfterCard } from "@/components/realisations/BeforeAfterCard";
import { ReviewsSection } from "@/components/avis/ReviewsSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { homeSections } from "@/content/site";
import { homeServices } from "@/content/services";
import { projects } from "@/content/projects";
import { fetchGoogleReviews } from "@/lib/google-reviews";

export default async function HomePage() {
  const { reviews } = await fetchGoogleReviews();

  return (
    <>
      <Hero />

      <section id="prestations" className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title={homeSections.prestations.title}
            subtitle={homeSections.prestations.subtitle}
            eyebrow={false}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} compact />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/prestations" variant="primary">
              Toutes nos prestations
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title={homeSections.realisations.title}
            subtitle={homeSections.realisations.subtitle}
            eyebrow={false}
          />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <BeforeAfterCard key={project.id} project={project} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/realisations" variant="primary">
              {homeSections.realisations.cta}
            </Button>
          </div>
        </div>
      </section>

      <ReviewsSection
        reviews={reviews}
        title={homeSections.avis.title}
        subtitle={homeSections.avis.subtitle}
      />

      <CtaBanner />
    </>
  );
}
