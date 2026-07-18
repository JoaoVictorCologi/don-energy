import type { MetadataRoute } from "next";

import { PRIVACIDADE_ATUALIZADA_EM, SITE_URL } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacidade`,
      lastModified: PRIVACIDADE_ATUALIZADA_EM,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
