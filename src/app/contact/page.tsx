import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactActions } from "@/components/contact/ContactActions";
import { GoogleZoneMap } from "@/components/contact/GoogleZoneMap";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact & devis gratuit",
  description:
    "Contactez Matopio Paysage pour un devis gratuit. Téléphone, email ou formulaire en ligne. Réponse sous 48h.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden pt-24">
        <Image
          src={site.images.hero}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream">
            Contactez-nous
          </h1>
          <p className="mt-4 max-w-xl text-cream/80 text-lg">
            Devis gratuit et personnalisé sous 48 heures.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ContactActions />

          <div className="mt-16 grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3 rounded-2xl bg-white border border-beige/80 p-8 md:p-10 shadow-sm">
              <h2 className="font-display text-2xl md:text-3xl text-charcoal">
                Demander un devis
              </h2>
              <p className="mt-2 text-sm text-charcoal/60">
                Remplissez le formulaire ci-dessous, nous vous recontactons rapidement.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-beige/80 bg-white p-8">
                <h3 className="font-medium text-charcoal">Zone d&apos;intervention</h3>
                <p className="mt-2 text-sm text-charcoal/65 leading-relaxed">
                  {site.contact.zone} (rayon de {site.contact.zoneRadiusKm} km autour de Lissieu)
                </p>
                <GoogleZoneMap />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
