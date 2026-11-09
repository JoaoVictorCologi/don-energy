import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Carrossel } from "@/components/carrossel-solucoes";
import { avaliacoesVisiveis, perfilGoogle, previaAvaliacoes } from "@/lib/depoimentos-data";

export function Depoimentos() {
  if (avaliacoesVisiveis.length === 0) return null;

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="site-section scroll-mt-4 bg-brand-soft">
      <div className="site-shell grid min-w-0 items-center gap-9 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
        <div>
          <p className="site-eyebrow">Avaliações no Google</p>
          <h2 id="depoimentos-titulo" className="site-title">O que nossos clientes dizem</h2>
          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
            Resumos de experiências compartilhadas por clientes da Don Energy.
          </p>
          <a href={perfilGoogle} target="_blank" rel="noopener noreferrer" className="site-link mt-5 underline">
            Ver avaliações no Google <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
          </a>
          {previaAvaliacoes && <p className="mt-2 text-xs text-muted-foreground">Seleção em revisão local.</p>}
        </div>
        <Carrossel
          id="avaliacoes-paineis"
          titulo="Avaliações de clientes"
          itens="avaliações"
          anterior="Avaliação anterior"
          proximo="Próxima avaliação"
          indicadores={avaliacoesVisiveis.map(({ nome }) => nome)}
        >
          {avaliacoesVisiveis.map(({ id, nome, texto }) => (
            <article key={id} data-slide className="flex min-w-0 flex-[0_0_100%] snap-start flex-col rounded-2xl bg-brand-green p-6 text-brand-ink sm:min-h-[20rem] sm:p-9">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-forest text-white">
                  <MessageCircle aria-hidden="true" className="size-5" />
                </span>
                <p className="text-xs font-semibold tracking-wide uppercase">Resumo da avaliação</p>
              </div>
              <p className="mt-6 font-heading text-xl leading-relaxed font-medium sm:text-2xl">{texto}</p>
              <div className="mt-auto pt-6">
                <div className="border-t border-brand-ink/25 pt-4">
                  <h3 className="font-heading text-base font-semibold sm:text-lg">{nome}</h3>
                  <p className="mt-1 text-sm">Google</p>
                </div>
              </div>
            </article>
          ))}
        </Carrossel>
      </div>
    </section>
  );
}
