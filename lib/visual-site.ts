import { imagemIndustrial } from "@/lib/imagem-industrial";
import { todasFotos } from "@/lib/fotos-data";
import type { PerfilSolarId } from "@/lib/perfis-solares";

export type FundoVisual = { src: string; srcSet?: string; credito: string; posicao?: string };

// Composição visual não atribui classificação comercial às fotografias.
export function fundoAcervo(numero: string): FundoVisual {
  const foto = todasFotos.find(item => item.numero === numero);
  if (!foto) throw new Error("Imagem de abertura não encontrada: " + numero);
  return { src: foto.ampliacao, srcSet: foto.srcSet, credito: foto.legenda };
}

export const fundoPorDoSol: FundoVisual = {
  src: "/obras/trajetoria-por-do-sol-1280.webp",
  srcSet: [640, 1280, 1920, 2400].map(width => "/obras/trajetoria-por-do-sol" + (width === 2400 ? "" : "-" + width) + ".webp " + width + "w").join(", "),
  credito: "Fotografia ilustrativa · Michael Pointner / Pexels",
  posicao: "center 25%",
};

export function fundoServico(perfil: PerfilSolarId): FundoVisual {
  if (perfil === "industrial") return { src: imagemIndustrial.src, srcSet: imagemIndustrial.srcSet, credito: imagemIndustrial.credito, posicao: "center 55%" };
  if (perfil === "manutencao") return {
    src: "/servicos/manutencao-enviada.webp",
    credito: "Fotografia ilustrativa de limpeza de módulos solares.",
    posicao: "center 45%",
  };
  return fundoAcervo({ residencial: "12", comercial: "01", rural: "11", "autoconsumo-remoto": "14" }[perfil]);
}
