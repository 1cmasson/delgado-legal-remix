import { OG_IMAGES, SITE_URL, businessInfo } from "./schema";

interface SeoOptions {
  title: string;
  description: string;
  /** Path with a leading slash, e.g. `/about`. Empty string for the home page. */
  path?: string;
  /** Site-relative path to a 1200x630 card. Defaults to the site-wide one. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "profile";
}

const DEFAULT_IMAGE_ALT =
  "Delgado Legal P.A. — your trusted partner for real estate and legal solutions";

/**
 * The full head for a route: title, description, canonical, Open Graph, Twitter.
 *
 * Every route needs this, not just the ones that want a custom card. React
 * Router replaces the root `meta` export wholesale when a child route exports
 * its own — it does not merge — so a route returning a bare title/description
 * pair silently ships no social tags at all.
 */
export function buildMeta({
  title,
  description,
  path = "",
  image = OG_IMAGES.default,
  imageAlt = DEFAULT_IMAGE_ALT,
  type = "website",
}: SeoOptions) {
  const url = `${SITE_URL}${path}`;
  // Scrapers do not resolve relative image paths, so these have to be absolute.
  const imageUrl = `${SITE_URL}${image}`;

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },

    { property: "og:site_name", content: businessInfo.name },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
    { property: "og:locale", content: "en_US" },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:alt", content: imageAlt },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: imageAlt },
  ];
}
