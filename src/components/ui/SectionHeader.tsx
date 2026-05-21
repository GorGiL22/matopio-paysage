"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-14 md:mb-16",
        align === "center" && "text-center mx-auto max-w-2xl",
        className,
      )}
    >
      <span
        className={cn(
          "mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em]",
          light ? "text-beige/80" : "text-sage",
        )}
      >
        Matopio Paysage
      </span>
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight",
          light ? "text-cream" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            light ? "text-cream/75" : "text-charcoal/65",
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
