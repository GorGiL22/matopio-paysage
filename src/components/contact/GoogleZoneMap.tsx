import { ExternalLink } from "lucide-react";
import { site } from "@/content/site";

export function GoogleZoneMap() {
  const [lat, lng] = site.contact.mapCenter;
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=10&hl=fr&output=embed`;

  return (
    <div className="mt-4 space-y-3">
      <iframe
        src={embedSrc}
        title={`Zone d'intervention — ${site.contact.zone}`}
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
