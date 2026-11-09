import { ArrowUpRight } from "lucide-react";
import { avaliacoesVisiveis, perfilGoogle, previaAvaliacoes } from "@/lib/depoimentos-data";

export function Depoimentos() {
  if (avaliacoesVisiveis.length === 0) return null;

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="site-section scroll-mt-4 bg-brand-soft">
      <div className="site-shell grid min-w-0 items-center gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
        <div>
          <h2 id="depoimentos-titulo" className="site-title">O que nossos clientes dizem</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {previaAvaliacoes ? "Prévia local de uma seleção de avaliações do Google." : "Uma seleção de avaliações publicadas no Google."}
          </p>
          <a href={perfilGoogle} target="_blank" rel="noopener noreferrer" className="site-link mt-4">
            Ver todas as avaliações no Google <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
          </a>
          <p id="depoimentos-instrucoes" className="mt-3 text-sm text-muted-foreground">
            Deslize os cartões ou use as setas do teclado.
          </p>
        </div>
        <ul
          aria-label="Avaliações de clientes"
          aria-describedby="depoimentos-instrucoes"
          tabIndex={0}
          className="solucoes-trilho m-0 min-w-0 list-none rounded-md p-1 pb-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          {avaliacoesVisiveis.map(({ id, nome, texto, perfilAutor, linkAvaliacao }) => (
            <li key={id} className="solucoes-slide flex flex-col rounded-md border border-border bg-background p-6">
              <p className="text-xs font-semibold tracking-wide text-brand-blue uppercase">Resumo da avaliação</p>
              <h3 className="mt-3 font-heading text-lg font-semibold text-brand-blue">{nome}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{texto}</p>
              <div className="mt-auto pt-4">
                {linkAvaliacao ? (
                  <a href={linkAvaliacao} target="_blank" rel="noopener noreferrer" className="site-link text-sm underline">
                    Ver avaliação individual no Google
                  </a>
                ) : perfilAutor ? (
                  <a href={perfilAutor} target="_blank" rel="noopener noreferrer" className="site-link text-sm underline">
                    Perfil de {nome} no Google
                  </a>
                ) : (
                  <a href={perfilGoogle} target="_blank" rel="noopener noreferrer" className="site-link text-sm underline">
                    Perfil da empresa no Google
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
