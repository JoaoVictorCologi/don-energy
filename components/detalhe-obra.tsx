import { AberturaPagina } from "@/components/abertura-pagina";
import { fundoAcervo } from "@/lib/visual-site";
import { ArrowLeft as SetaVoltar } from "lucide-react";
// Detalhes somente para projetos identificados; campos ausentes são omitidos.
import Link from "next/link";
import { fotosDaObra, type ObraConfirmada } from "@/lib/obras-data";
import { fotoPorId } from "@/lib/fotos-data";
import { ImagemPortfolio } from "@/components/imagem-portfolio";
import { GaleriaFotos } from "@/components/galeria-fotos";
import { ChamadaContato } from "@/components/chamada-contato";

export function DetalheObra({ obra }: { obra: ObraConfirmada }) {
  const fotos = fotosDaObra(obra);
  if (obra.potenciaKwp !== undefined && obra.potenciaKwp <= 0) throw new Error("Potência deve ser um dado confirmado positivo.");
  return <>
    <AberturaPagina titulo={obra.titulo} rotulo="Projeto Don Energy" introducao={obra.descricao} fundo={fundoAcervo(fotoPorId(obra.capaFotoId).numero)} caminho={[{ titulo: "Início", href: "/" }, { titulo: "Projetos", href: "/obras/" }]} />
    <section data-revelar className="site-shell visual-conteudo novo-projeto-ficha pb-16"><Link prefetch={false} href="/obras/" className="site-link mb-8"><SetaVoltar aria-hidden="true" className="size-4 shrink-0" /> Voltar ao portfólio</Link><dl className="novo-projeto-dados">{obra.cidade && <div><dt className="text-xs text-muted-foreground">Localidade</dt><dd className="mt-2 font-medium text-brand-blue">{obra.cidade}{obra.uf ? " · " + obra.uf : ""}</dd></div>}{obra.potenciaKwp !== undefined && <div><dt className="text-xs text-muted-foreground">Potência</dt><dd className="mt-2 font-medium text-brand-blue">{obra.potenciaKwp} kWp</dd></div>}</dl><div className="novo-projeto-foto-completa"><ImagemPortfolio foto={fotoPorId(obra.capaFotoId)} ampliada /></div></section>
    <section aria-label="Fotografias do projeto" className="site-shell pb-20"><GaleriaFotos fotos={fotos} id={"galeria-" + obra.id} /></section><ChamadaContato />
  </>;
}
