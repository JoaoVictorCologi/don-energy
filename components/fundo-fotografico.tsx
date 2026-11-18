import type { FundoVisual } from "@/lib/visual-site";

// Fundos decorativos usam os mesmos derivados locais do acervo, sem dependência de servidor.
export function FundoFotografico({ fundo, prioridade = false }: { fundo: FundoVisual; prioridade?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={fundo.src} srcSet={fundo.srcSet} sizes="100vw" width={1920} height={1080} alt="" loading={prioridade ? "eager" : "lazy"} fetchPriority={prioridade ? "high" : "auto"} className="visual-fundo" style={{ objectPosition: fundo.posicao }} />
  );
}
