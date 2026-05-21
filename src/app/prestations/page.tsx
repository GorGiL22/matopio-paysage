import Image from "next/image";
import { ServiceCard } from "@/components/prestations/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Prestations paysagistes",
  description:
    "Tonte, taille de haies, élagage, engazonnement, débroussaillage et création paysagère. Matopio Paysage, paysagiste à Lissieu.",
  path: "/prestations",
});

export default function PrestationsPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-24">
        <Image
          src={site.images.hero}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/55" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-beige/90 mb-3">
            Expertise
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream max-w-2xl">
            Nos prestations
          </h1>
          <p className="mt-4 max-w-xl text-cream/80 text-lg">
            Des solutions complètes pour créer, transformer et entretenir vos espaces extérieurs.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Un accompagnement sur mesure"
            subtitle="Chaque projet est unique. Nous étudions votre terrain, vos envies et votre budget pour vous proposer la solution la plus adaptée."
            align="left"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
