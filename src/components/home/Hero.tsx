"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1100px] w-full overflow-hidden">
      <Image
        src={site.images.hero}
        alt="Paysagiste taillant une haie — Matopio Paysage"
        fill
        priority
        className="object-cover object-[50%_35%] sm:object-[48%_32%]"
        quality={90}
        sizes="100vw"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl font-medium leading-[1.15] text-cream sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl"
        >
          {site.tagline}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10"
        >
          <Button href="/contact" size="lg" variant="primary">
            Demander un devis
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#prestations"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors"
        aria-label="Défiler vers le contenu"
      >
        <ChevronDown className="animate-bounce" size={28} />
      </motion.a>
    </section>
  );
}
