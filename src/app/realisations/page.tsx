import Image from "next/image";
import { BeforeAfterCard } from "@/components/realisations/BeforeAfterCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Réalisations — Avant / Après",
  description:
    "Découvrez nos réalisations paysagères : jardins, terrasses bois, engazonnements. Galerie avant/après par Matopio Paysage à Lyon.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-24">
        <Image
          src={site.images.realisations}
          alt="Haie taillée par Matopio Paysage — réalisation avant / après"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/55" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-beige/90 mb-3">
            Portfolio
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream max-w-2xl">
            Nos réalisations
          </h1>
          <p className="mt-4 max-w-xl text-cream/80 text-lg">
            Survolez chaque image pour découvrir la transformation avant / après.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Des projets qui parlent d'eux-mêmes"
            subtitle="Avant / après : la preuve par l'image"
          />
          <div className="grid gap-12 md:grid-cols-2">
            {projects.map((project, i) => (
              <BeforeAfterCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
