import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Politique de confidentialité",
  path: "/politique-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-32 lg:px-8">
      <h1 className="font-display text-4xl text-charcoal mb-8">
        Politique de confidentialité
      </h1>

      <div className="space-y-4 text-charcoal/75 text-sm leading-relaxed">
        <p>
          {site.name} s&apos;engage à protéger les données personnelles collectées via le
          formulaire de contact (nom, téléphone, email, message).
        </p>
        <p>
          Ces données sont utilisées uniquement pour répondre à votre demande de devis ou
          d&apos;information. Elles ne sont ni vendues ni cédées à des tiers.
        </p>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de
          suppression de vos données en contactant : {site.contact.email}.
        </p>
      </div>
    </article>
  );
}
