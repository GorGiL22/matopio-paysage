import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { navigation, site } from "@/content/site";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo href="/" />
            <p className="mt-3 text-sm text-cream/70 leading-relaxed max-w-xs">
              {site.tagline}. Artisan paysagiste au service de vos espaces extérieurs.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-beige/90 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-beige/90 mb-4">
              Coordonnées
            </h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-beige" />
                <span>
                  {site.contact.address}
                  <br />
                  {site.contact.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phone}`}
                  className="flex items-center gap-2 hover:text-cream transition-colors"
                >
                  <Phone size={16} className="text-beige" />
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-2 hover:text-cream transition-colors"
                >
                  <Mail size={16} className="text-beige" />
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0 text-beige" />
                <span>{site.contact.openingHours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-beige/90 mb-4">
              Zone d&apos;intervention
            </h3>
            <p className="text-sm text-cream/70 leading-relaxed">{site.contact.zone}</p>
            <p className="mt-6 text-xs text-cream/50">
              SIRET {site.legal.siret} — RCS {site.legal.rcs}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-8 md:flex-row md:items-center md:justify-between text-xs text-cream/50">
          <p>© {year} {site.name}. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-cream/80 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-cream/80 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
