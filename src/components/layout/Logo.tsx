import Image from "next/image";
import Link from "next/link";
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

  return (
    <Link href={href} className={cn("inline-flex shrink-0", className)} aria-label={`${site.name} — Accueil`}>
      {image}
    </Link>
  );
}
