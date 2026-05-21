"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  href?: string;
  priority?: boolean;
};

export function Logo({
  className,
  imageClassName,
  href = "/",
  priority = false,
}: LogoProps) {
  const pathname = usePathname();

  const image = (
    <Image
      src={site.images.logo}
      alt={site.name}
      width={365}
      height={311}
      priority={priority}
      className={cn("h-14 w-auto object-contain sm:h-16 md:h-20", imageClassName)}
    />
  );

  if (!href) {
    return <span className={cn("inline-flex shrink-0", className)}>{image}</span>;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn("inline-flex shrink-0", className)}
      aria-label={`${site.name} — Accueil`}
    >
      {image}
    </Link>
  );
}
