"use client";

import { motion } from "framer-motion";
import { homeSections } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-forest px-8 py-14 md:px-16 md:py-20 text-center"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,_#E8DFD4_0%,_transparent_50%)]" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream">
              {homeSections.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-cream/75 text-base md:text-lg">
              {homeSections.cta.text}
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="secondary" size="lg">
                {homeSections.cta.button}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
