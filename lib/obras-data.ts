import { fotosAcervo, fotoPorId, type FotoId } from "@/lib/fotos-data";
import type { PerfilSolarId } from "@/lib/perfis-solares";

export type ObraConfirmada = {
  id: string;
  slug: string;
  agrupamentoConfirmado: true;
  titulo: string;
  descricao: string;
  fotoIds: readonly FotoId[];
  capaFotoId: FotoId;
  cidade?: string;
  uf?: string;
  potenciaKwp?: number;
  perfil?: PerfilSolarId;
  destaque?: number;
};

// Identidades/fotos recebidas em 26/10/2026 e autorizadas para este recorte.
// Somente residencial e rural têm perfil informado. Números, demais perfis e
// localidade pública da igreja aguardam confirmação no vault e não são expostos.
export const obrasConfirmadas: readonly ObraConfirmada[] = [
  { id: "residencial-limeira", slug: "residencial-limeira", agrupamentoConfirmado: true, titulo: "Projeto residencial em Limeira", descricao: "Projeto de energia solar residencial em Limeira, São Paulo. A fotografia apresenta os módulos instalados sobre a cobertura da residência.", fotoIds: ["r1-limeira"], capaFotoId: "r1-limeira", cidade: "Limeira", uf: "SP", perfil: "residencial", destaque: 1 },
  { id: "new-way-mococa", slug: "espaco-de-eventos-new-way", agrupamentoConfirmado: true, titulo: "Espaço de Eventos New Way", descricao: "Instalação solar no Espaço de Eventos New Way, em Mococa, São Paulo. A vista aérea mostra as fileiras de módulos sobre a cobertura.", fotoIds: ["r1-new-way"], capaFotoId: "r1-new-way", cidade: "Mococa", uf: "SP", destaque: 2 },
  { id: "francini-mococa", slug: "pao-de-queijo-francini", agrupamentoConfirmado: true, titulo: "Pão de Queijo Francini", descricao: "Projeto solar na propriedade rural Pão de Queijo Francini, em Mococa, São Paulo. A fotografia mostra os módulos instalados no solo e a área ao redor.", fotoIds: ["r1-francini"], capaFotoId: "r1-francini", cidade: "Mococa", uf: "SP", perfil: "rural", destaque: 3 },
  { id: "oliveira-pirassununga", slug: "supermercado-oliveira-pirassununga", agrupamentoConfirmado: true, titulo: "Supermercado Oliveira", descricao: "Instalação solar do Supermercado Oliveira, em Pirassununga, São Paulo. A vista aérea apresenta os módulos distribuídos sobre as coberturas.", fotoIds: ["r1-oliveira"], capaFotoId: "r1-oliveira", cidade: "Pirassununga", uf: "SP" },
  { id: "igreja-nossa-senhora-da-luz", slug: "igreja-nossa-senhora-da-luz", agrupamentoConfirmado: true, titulo: "Igreja Nossa Senhora da Luz", descricao: "Instalação solar na Igreja Nossa Senhora da Luz. A fotografia mostra os módulos sobre o telhado e a fachada da igreja.", fotoIds: ["r1-nossa-senhora-da-luz"], capaFotoId: "r1-nossa-senhora-da-luz" },
];
export const obrasDestaque = obrasConfirmadas.filter(obra => obra.destaque !== undefined).toSorted((a, b) => (a.destaque ?? 0) - (b.destaque ?? 0));
export function obraPorSlug(slug: string) { return obrasConfirmadas.find(obra => obra.slug === slug); }

export function fotosDaObra(obra: ObraConfirmada) {
  if (!obra.fotoIds.length || !obra.fotoIds.includes(obra.capaFotoId)) {
    throw new Error("A capa deve pertencer à galeria confirmada: " + obra.id);
  }
  return obra.fotoIds.map(fotoPorId);
}

export const fotosSemObra = fotosAcervo.filter(foto =>
  !obrasConfirmadas.some(obra => obra.fotoIds.includes(foto.id))
);
