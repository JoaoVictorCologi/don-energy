// Catálogo R3 confirmado em 04/11/2026. A classificação histórica das obras é independente.
export const perfisSolares = [
  { id: "residencial", titulo: "Residencial", nome: "Energia solar residencial", slug: "solar-residencial", mensagem: "Olá! Tenho interesse em energia solar residencial e gostaria de mais informações." },
  { id: "comercial", titulo: "Comercial", nome: "Energia solar comercial", slug: "solar-comercial", mensagem: "Olá! Tenho interesse em energia solar comercial e gostaria de mais informações." },
  { id: "industrial", titulo: "Autoconsumo Remoto - Industrial", nome: "Autoconsumo Remoto - Industrial", slug: "autoconsumo-remoto-industrial", mensagem: "Olá! Tenho interesse em Autoconsumo Remoto - Industrial e gostaria de conversar sobre meu projeto." },
] as const;
export type PerfilSolarId = (typeof perfisSolares)[number]["id"];
export function perfilPorSlug(slug: string | null) {
  const atual = slug === "solar-rural" ? "autoconsumo-remoto-industrial" : slug;
  return perfisSolares.find(perfil => perfil.slug === atual);
}
