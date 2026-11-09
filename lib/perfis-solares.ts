// A classificação histórica das obras é independente do catálogo de serviços.
export const perfisSolares = [
  { id: "residencial", rotulo: "Residencial", titulo: "Energia Solar Residencial", nome: "Energia Solar Residencial", slug: "solar-residencial", mensagem: "Olá! Tenho interesse em energia solar residencial e gostaria de mais informações." },
  { id: "comercial", rotulo: "Comercial", titulo: "Energia Solar Comercial", nome: "Energia Solar Comercial", slug: "solar-comercial", mensagem: "Olá! Tenho interesse em energia solar comercial e gostaria de mais informações." },
  { id: "industrial", rotulo: "Industrial", titulo: "Energia Solar Industrial", nome: "Energia Solar Industrial", slug: "solar-industrial", mensagem: "Olá! Tenho interesse em energia solar industrial e gostaria de conversar sobre meu projeto." },
  { id: "autoconsumo-remoto", rotulo: "Autoconsumo Remoto", titulo: "Energia Solar Autoconsumo Remoto", nome: "Energia Solar Autoconsumo Remoto", slug: "autoconsumo-remoto", mensagem: "Olá! Tenho interesse em autoconsumo remoto e gostaria de conversar sobre meu projeto." },
] as const;

export type PerfilSolarId = (typeof perfisSolares)[number]["id"];
export const perfilSolarIds = perfisSolares.map(({ id }) => id);

export function perfilPorSlug(slug: string | null) {
  const atual = slug === "solar-rural" || slug === "autoconsumo-remoto-industrial" ? "autoconsumo-remoto" : slug;
  return perfisSolares.find(perfil => perfil.slug === atual);
}
