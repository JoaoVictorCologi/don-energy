import { ArrowUpRight } from "lucide-react";
import { Carrossel } from "@/components/carrossel-solucoes";
import { avaliacoesPublicaveis, perfilGoogle } from "@/lib/depoimentos-data";

export function Depoimentos() {
  if (avaliacoesPublicaveis.length === 0) return null;

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="site-section bg-brand-soft">
      <div className="site-shell grid items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <h2 id="depoimentos-titulo" className="site-title">O que nossos clientes dizem</h2>
          <a href={perfilGoogle} target="_blank" rel="noopener noreferrer" className="site-link mt-5">
            Ver avaliações no Google <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
          </a>
        </div>
        <Carrossel id="avaliacoes-paineis" titulo="Avaliações de clientes" itens="avaliações" anterior="Avaliação anterior" proximo="Próxima avaliação">
          {avaliacoesPublicaveis.map(({ id, nome, texto, fonte }) => (
            <figure key={id} data-slide className="solucoes-slide rounded-md border border-border bg-background p-6">
              <blockquote cite={fonte} className="leading-relaxed text-muted-foreground">{texto}</blockquote>
              <figcaption className="mt-5 font-semibold text-brand-blue">{nome}</figcaption>
            </figure>
          ))}
        </Carrossel>
      </div>
    </section>
  );
}
