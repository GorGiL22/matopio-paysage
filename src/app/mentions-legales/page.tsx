import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Mentions légales",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-32 lg:px-8 prose prose-neutral">
      <h1 className="font-display text-4xl text-charcoal mb-8">Mentions légales</h1>

      <section className="space-y-4 text-charcoal/75 text-sm leading-relaxed">
        <h2 className="font-display text-xl text-charcoal">Éditeur du site</h2>
        <p>
          {site.name}
          <br />
          {site.contact.address}, {site.contact.city}
          <br />
          SIRET : {site.legal.siret}
          <br />
          RCS : {site.legal.rcs}
          <br />
          Directeur de publication : {site.legal.director}
          <br />
          Email : {site.contact.email}
        </p>

        <h2 className="font-display text-xl text-charcoal mt-8">Hébergement</h2>
        <p>
          Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
          États-Unis.
        </p>

        <h2 className="font-display text-xl text-charcoal mt-8">Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus (textes, images, logos) présents sur ce site sont la
          propriété de {site.name} ou de leurs auteurs respectifs. Toute reproduction est
          interdite sans autorisation écrite préalable.
        </p>
      </section>
    </article>
  );
}
