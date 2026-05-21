"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/services";
import { ServiceIconComponent } from "./ServiceIcon";

type ServiceCardProps = {
  service: Service;
  index?: number;
  compact?: boolean;
};

export function ServiceCard({ service, index = 0, compact = false }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-cream border border-beige/60 shadow-sm hover:shadow-xl hover:shadow-forest/8 transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream/95 text-forest shadow-lg">
          <ServiceIconComponent name={service.icon} className="h-5 w-5" />
        </div>
      </div>

      <div className={compact ? "p-5" : "p-6 md:p-7"}>
        <h3 className="font-display text-xl md:text-2xl text-charcoal group-hover:text-forest transition-colors">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-charcoal/65 leading-relaxed line-clamp-2">
          {compact ? service.shortDescription : service.description}
        </p>
        {!compact && (
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest hover:gap-2 transition-all"
          >
            Demander un devis
            <ArrowUpRight size={16} />
          </Link>
        )}
      </div>
    </motion.article>
  );
}
