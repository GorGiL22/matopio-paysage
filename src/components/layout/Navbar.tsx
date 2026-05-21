"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNavigation } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-charcoal/8 bg-white py-2.5 transition-shadow duration-300 md:py-3",
        scrolled ? "shadow-md shadow-charcoal/10" : "shadow-sm shadow-charcoal/5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <Logo priority />

        <nav
          className="flex flex-1 items-center justify-center gap-3 sm:gap-6 md:gap-8"
          aria-label="Navigation principale"
        >
          {headerNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs font-medium tracking-wide transition-colors sm:text-sm",
                "text-charcoal/70 hover:text-forest",
                pathname === item.href && "text-forest",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          href="/contact"
          size="sm"
          variant="primary"
          className="shrink-0 text-xs sm:text-sm"
        >
          <span className="hidden min-[400px]:inline">Demander un devis</span>
          <span className="min-[400px]:hidden">Devis</span>
        </Button>
      </div>
    </header>
  );
}
