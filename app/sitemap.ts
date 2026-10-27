import type { MetadataRoute } from "next";
import { obrasConfirmadas } from "@/lib/obras-data";
import { perfisSolares } from "@/lib/perfis-solares";
import { PRIVACIDADE_ATUALIZADA_EM, SITE_URL } from "@/lib/site-config";

export const dynamic = "force-static";
const R1_ATUALIZADA_EM = new Date("2026-10-26");


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL + "/", lastModified: new Date("2026-10-27"), changeFrequency: "monthly", priority: 1 },
    { url: SITE_URL + "/servicos/", lastModified: R1_ATUALIZADA_EM, changeFrequency: "monthly", priority: 0.8 },
    ...perfisSolares.map((perfil) => ({ url: `${SITE_URL}/servicos/${perfil.slug}/`, lastModified: R1_ATUALIZADA_EM, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: SITE_URL + "/nossa-historia/", lastModified: R1_ATUALIZADA_EM, changeFrequency: "yearly", priority: 0.7 },
    ...obrasConfirmadas.map(obra => ({ url: SITE_URL + "/obras/" + obra.slug + "/", lastModified: R1_ATUALIZADA_EM, changeFrequency: "yearly" as const, priority: 0.6 })),
    { url: SITE_URL + "/obras/", lastModified: R1_ATUALIZADA_EM, changeFrequency: "monthly", priority: 0.8 },
    { url: SITE_URL + "/contato/", lastModified: new Date("2026-10-27"), changeFrequency: "monthly", priority: 0.7 },
    { url: SITE_URL + "/privacidade/", lastModified: PRIVACIDADE_ATUALIZADA_EM, changeFrequency: "yearly", priority: 0.3 },
  ];
}
