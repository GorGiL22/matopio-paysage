"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/content/projects";

type BeforeAfterCardProps = {
  project: Project;
  index?: number;
};

export function BeforeAfterCard({ project, index = 0 }: BeforeAfterCardProps) {
  const [showAfter, setShowAfter] = useState(false);
  const touchHandledRef = useRef(false);

  const toggle = () => setShowAfter((v) => !v);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="group"
    >
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer touch-manipulation shadow-md hover:shadow-2xl hover:shadow-forest/15 transition-shadow duration-500"
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") setShowAfter(true);
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") setShowAfter(false);
        }}
        onPointerDown={(e) => {
          if (e.pointerType !== "touch") return;
          touchHandledRef.current = true;
          toggle();
        }}
        onClick={() => {
          if (touchHandledRef.current) {
            touchHandledRef.current = false;
            return;
          }
          toggle();
        }}
        role="button"
        tabIndex={0}
        aria-pressed={showAfter}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        aria-label={`${project.title} — ${showAfter ? "après" : "avant"} travaux`}
      >
        <Image
          src={project.before}
          alt={`${project.title} — avant`}
          fill
          className={`object-cover transition-opacity duration-700 ${showAfter ? "opacity-0" : "opacity-100"}`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <Image
          src={project.after}
          alt={`${project.title} — après`}
          fill
          className={`object-cover transition-opacity duration-700 ${showAfter ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-charcoal/0 pointer-events-none [@media(hover:hover)]:group-hover:bg-charcoal/10 transition-colors" />

        <div className="absolute top-4 left-4 flex gap-2 pointer-events-none">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md transition-all ${
              !showAfter
                ? "bg-cream text-forest"
                : "bg-charcoal/40 text-cream/70"
            }`}
          >
            Avant
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md transition-all ${
              showAfter
                ? "bg-cream text-forest"
                : "bg-charcoal/40 text-cream/70"
            }`}
          >
            Après
          </span>
        </div>

        <p className="absolute bottom-4 right-4 text-xs text-cream/80 bg-charcoal/50 backdrop-blur-sm px-3 py-1.5 rounded-full pointer-events-none opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity">
          <span className="[@media(hover:hover)]:hidden">Toucher pour comparer</span>
          <span className="hidden [@media(hover:hover)]:inline">Survoler pour comparer</span>
        </p>
      </div>

      <div className="mt-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-sage">
          {project.category}
        </span>
        <h3 className="mt-1 font-display text-xl md:text-2xl text-charcoal">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-charcoal/55">
          {project.location}
        </p>
        <p className="mt-3 text-sm text-charcoal/65 leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}
