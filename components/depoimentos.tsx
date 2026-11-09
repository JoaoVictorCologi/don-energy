import { ArrowUpRight } from "lucide-react";
import { Carrossel } from "@/components/carrossel-solucoes";
import { avaliacoesVisiveis, perfilGoogle, previaAvaliacoes } from "@/lib/depoimentos-data";

export function Depoimentos() {
  if (avaliacoesVisiveis.length === 0) return null;
  const variasAvaliacoes = avaliacoesVisiveis.length > 1;

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="site-section scroll-mt-4 bg-brand-soft">
      <div className="site-shell grid min-w-0 items-start gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:gap-8">
        <div className="rounded-2xl bg-brand-green p-6 text-brand-ink sm:p-8">
          <p className="mb-4 text-xs font-semibold tracking-widest uppercase">Avaliações no Google</p>
          <h2 id="depoimentos-titulo" className="font-heading text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Resumos de experiências compartilhadas por clientes da Don Energy.
          </p>
          <a href={perfilGoogle} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4">
            Ver avaliações no Google <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
          </a>
          {previaAvaliacoes && <p className="mt-2 text-xs">Seleção em revisão local.</p>}
        </div>
        <Carrossel
          id="avaliacoes-paineis"
          titulo="Avaliações de clientes"
          itens="avaliações"
          anterior="Avaliação anterior"
          proximo="Próxima avaliação"
          indicadores={avaliacoesVisiveis.map(({ nome }) => nome)}
        >
          {avaliacoesVisiveis.map(({ id, nome, texto }, indice) => (
            <article
              key={id}
              data-slide
              className={
                "min-w-0 flex-[0_0_100%] snap-start rounded-xl border border-border bg-white p-5 text-brand-ink sm:p-6" +
                (variasAvaliacoes ? " lg:basis-[calc((100%-28px)/2)]" : "")
              }
            >
              <header className="flex items-start gap-3">
                <span aria-hidden="true" className={
                  "grid size-10 shrink-0 place-items-center rounded-full text-sm font-semibold text-white " +
                  (indice % 2 === 0 ? "bg-brand-forest" : "bg-brand-blue")
                }>
                  {nome[0]}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-base leading-snug font-semibold">{nome}</h3>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">Resumo da avaliação</p>
                </div>
                <span className="shrink-0 text-xs font-semibold text-brand-blue">Google</span>
              </header>
              <p className="mt-5 leading-relaxed text-muted-foreground">{texto}</p>
            </article>
          ))}
        </Carrossel>
      </div>
    </section>
  );
}
