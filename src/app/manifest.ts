import type { MetadataRoute } from "next";

import { META_THEME_COLORS, SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" },
    ],
    id: "/",
    start_url: "/",
    display: "standalone",
    scope: "/",
    background_color: META_THEME_COLORS.light,
    theme_color: META_THEME_COLORS.light,
  };
}
