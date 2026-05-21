import { ExternalLink, MapPin } from "lucide-react";
import { site } from "@/content/site";

export function GoogleZoneMap() {
  const mapQuery = site.contact.mapAddress;
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&hl=fr&z=11&output=embed`;

  return (
    <div className="mt-4 space-y-3">
      <p className="flex items-start gap-2 text-sm text-charcoal/70">
        <MapPin size={16} className="mt-0.5 shrink-0 text-forest" />
        <span>
          {site.contact.address}
          <br />
          {site.contact.city}
        </span>
      </p>
      <iframe
        src={embedSrc}
        title={`${site.name} — ${site.contact.address}, ${site.contact.city}`}
        className="h-56 w-full rounded-xl border border-beige/80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a
        href={site.contact.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:text-forest-light transition-colors"
      >
        Ouvrir dans Google Maps
        <ExternalLink size={14} />
      </a>
    </div>
  );
}
