import Link from "next/link";
import { AberturaPagina } from "@/components/abertura-pagina";
import { fundoAcervo } from "@/lib/visual-site";
import { ChamadaContato } from "@/components/chamada-contato";
import { ManutencaoSolar } from "@/components/manutencao-solar";
import type { Metadata } from "next";
import { ServicoCard } from "@/components/servico-card";
import { servicos } from "@/lib/servicos-data";

const description = "Conheça as soluções residenciais, comerciais, industriais e de autoconsumo remoto, além de limpeza e manutenção de energia solar.";
export const metadata: Metadata = {
  title: "Soluções em energia solar — Don Energy", description,
  alternates: { canonical: "/servicos/" },
  openGraph: { title: "Soluções em energia solar — Don Energy", description, url: "/servicos/", images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", title: "Soluções em energia solar — Don Energy", description, images: ["/og-image.png"] },
};

export default function ServicosPage() {
  return <main id="conteudo" tabIndex={-1} className="flex-1">
    <AberturaPagina rotulo="Soluções solares" titulo="Qual é a sua necessidade?" introducao="Explore o que considerar em cada projeto e conheça o atendimento para sistemas já instalados." fundo={fundoAcervo("01")} />
    <section aria-label="Soluções solares" className="site-section novo-catalogo"><div className="site-shell"><div className="novo-catalogo-grid">{servicos.map(servico => <ServicoCard key={servico.id} servico={servico} />)}</div><p className="mt-6 text-xs text-muted-foreground">Fotografias do acervo Don Energy e ilustrações de aplicação.</p></div></section>
    <ManutencaoSolar />
    <section className="site-section novo-necessidades"><div className="site-shell"><div className="novo-cabecalho-secao" data-revelar><div><p className="site-eyebrow">O contexto orienta a conversa</p><h2 className="site-title">Necessidades diferentes. Um ponto de partida próprio.</h2></div></div><div className="novo-necessidades-grid">{servicos.map(servico => <article key={servico.id} data-revelar><h3>{servico.titulo}</h3><p>{servico.necessidade}</p><Link prefetch={false} href={"/servicos/" + servico.slug + "/"} className="site-link">Conhecer solução</Link></article>)}</div></div></section>
    <ChamadaContato />
  </main>;
}
