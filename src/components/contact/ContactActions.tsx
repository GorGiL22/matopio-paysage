import { Phone, Mail } from "lucide-react";
import { site } from "@/content/site";

const actions = [
  {
    label: "Appeler",
    href: `tel:${site.contact.phone}`,
    icon: Phone,
    description: site.contact.phoneDisplay,
  },
  {
    label: "Email",
    href: `mailto:${site.contact.email}`,
    icon: Mail,
    description: site.contact.email,
  },
] as const;

export function ContactActions() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <a
            key={action.label}
            href={action.href}
            target={"external" in action && action.external ? "_blank" : undefined}
            rel={"external" in action && action.external ? "noopener noreferrer" : undefined}
            className="group flex flex-col items-center rounded-2xl border border-beige/80 bg-white p-6 text-center shadow-sm hover:border-forest/30 hover:shadow-lg hover:shadow-forest/8 transition-all duration-300"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest group-hover:bg-forest group-hover:text-cream transition-colors duration-300">
              <Icon size={22} strokeWidth={1.5} />
            </span>
            <span className="mt-4 font-medium text-charcoal">{action.label}</span>
            <span className="mt-1 text-xs text-charcoal/55 break-all">{action.description}</span>
          </a>
        );
      })}
    </div>
  );
}
