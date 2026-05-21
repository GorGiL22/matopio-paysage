import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMeta = {
  title: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = site.description,
  path = "",
}: PageMeta): Metadata {
  const url = `${site.url}${path}`;

  return {
    title: `${title} | ${site.name}`,
    description,
    keywords: [...site.seo.keywords],
    authors: [{ name: site.name }],
    openGraph: {
      type: "website",
      locale: site.seo.locale,
      url,
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      images: [{ url: site.images.og, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [site.images.og],
    },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}
