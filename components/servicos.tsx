import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CarrosselDestaque } from "@/components/carrossel-destaque";
import { VisualServico } from "@/components/visual-servico";
import { servicos } from "@/lib/servicos-data";
import { apresentacaoSolar } from "@/lib/apresentacao-solar";

export function Servicos() {
  return <section id="servicos" className="site-section novo-solucoes">
    <div className="site-shell">
      <div data-revelar className="novo-cabecalho-secao"><div><p className="site-eyebrow">Soluções solares</p><h2 className="site-title">Qual é a sua necessidade?</h2></div><div><p>Necessidades diferentes. Conheça o que considerar em cada solução.</p><Link prefetch={false} href="/servicos/" className="site-link mt-4">Explore as soluções <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></Link></div></div>
      <CarrosselDestaque opcoes={servicos.map(servico => servico.rotulo)}>
        {servicos.map((servico, indice) => <article key={servico.id} id={"solucao-destaque-" + indice} data-solucao-slide data-servico={servico.id} className="solucao-destaque-slide" aria-labelledby={"solucao-titulo-" + servico.id}>
          <figure className="solucao-destaque-visual">
            <div className="solucao-destaque-foto"><VisualServico perfil={servico.id} className="solucao-destaque-imagem" /></div>
            <figcaption>{apresentacaoSolar[servico.id].legenda}</figcaption>
          </figure>
          <div className="solucao-destaque-conteudo">
            <p className="solucao-destaque-rotulo">Soluções Don Energy <span aria-hidden="true">/ {String(indice + 1).padStart(2, "0")}</span></p>
            <h3 id={"solucao-titulo-" + servico.id}>{servico.titulo}</h3>
            <p className="solucao-destaque-descricao">{servico.intro}</p>
            <Link prefetch={false} href={"/servicos/" + servico.slug + "/"} className="solucao-destaque-link" aria-label={"Conhecer solução — " + servico.nome.toLowerCase()}>Conhecer solução <ArrowUpRight aria-hidden="true" className="size-5" /></Link>
          </div>
        </article>)}
      </CarrosselDestaque>
      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">Fotografias do acervo Don Energy e ilustrações de aplicação.</p>
    </div>
  </section>;
}
