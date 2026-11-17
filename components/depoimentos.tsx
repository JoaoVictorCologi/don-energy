import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Carrossel } from "@/components/carrossel-solucoes";
import { avaliacoesVisiveis, notaGoogle, perfilGoogle, previaAvaliacoes } from "@/lib/depoimentos-data";

export function Depoimentos() {
  if (avaliacoesVisiveis.length === 0) return null;
  const variasAvaliacoes = avaliacoesVisiveis.length > 1;

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="site-section scroll-mt-4 bg-brand-soft py-8 md:py-24">
      <div className="site-shell grid min-w-0 items-start gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:gap-8">
        <div className="rounded-2xl bg-brand-blue p-4 text-white sm:p-6 lg:p-8">
          <h2 id="depoimentos-titulo" className="font-heading text-2xl leading-tight font-medium tracking-tight sm:text-3xl lg:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mt-2 text-sm leading-snug">Seleção de avaliações do Google</p>
          <p className="mt-2 text-xs leading-snug">
            {notaGoogle.media.toLocaleString("pt-BR")} de 5 · {notaGoogle.total} avaliações
            {" em "}<time dateTime={notaGoogle.consultadoEm}>{notaGoogle.consultadoEm.split("-").reverse().join("/")}</time>
          </p>
          <a href={perfilGoogle} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4">
            Ver todas as avaliações no Google <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
          </a>
          {previaAvaliacoes && <p className="mt-1 text-xs">Seleção em revisão local.</p>}
        </div>
        <Carrossel
          id="avaliacoes-paineis"
          titulo="Avaliações de clientes"
          itens="avaliações"
          anterior="Avaliação anterior"
          proximo="Próxima avaliação"
          indicadores={avaliacoesVisiveis.map(({ nome }) => nome)}
        >
          {avaliacoesVisiveis.map(({ id, nome, tema, texto, originalConferido, perfilAutor, linkAvaliacao }, indice) => (
            <article
              key={id}
              data-slide
              className={
                "min-w-0 flex-[0_0_100%] snap-start rounded-xl border border-border bg-white p-5 text-brand-ink sm:p-6" +
                (variasAvaliacoes ? " lg:basis-[calc((100%-28px)/2)]" : "")
              }
            >
              <header className="flex items-start gap-2 sm:gap-3">
                <span aria-hidden="true" className={
                  "grid size-10 shrink-0 place-items-center rounded-full text-sm font-semibold text-white " +
                  (indice % 2 === 0 ? "bg-brand-forest" : "bg-brand-blue")
                }>
                  {nome[0]}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-base leading-snug font-semibold">{nome}</h3>
                  {!originalConferido && <p className="mt-1 text-xs leading-snug text-muted-foreground">Resumo da avaliação</p>}
                </div>
                <a
                  href={perfilGoogle}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver perfil da Don Energy no Google"
                  title="Ver Don Energy no Google"
                  className="flex size-11 shrink-0 items-center justify-center rounded-md text-brand-blue"
                >
                  <Image src="/logo/google-g-colorido.png" alt="" width={56} height={56} className="pointer-events-none size-14 max-w-none shrink-0" />
                </a>
              </header>
              <p className="mt-4 inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-forest">
                {tema}
              </p>
              {originalConferido ? <blockquote className="mt-3 whitespace-pre-line leading-relaxed text-muted-foreground">{texto}</blockquote> : <p className="mt-3 leading-relaxed text-muted-foreground">{texto}</p>}
              {(linkAvaliacao || perfilAutor) && (
                <footer className="mt-2 flex flex-wrap gap-x-4 text-xs font-semibold text-brand-blue">
                  {linkAvaliacao && (
                    <a href={linkAvaliacao} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4">
                      Ler avaliação no Google
                    </a>
                  )}
                  {perfilAutor && (
                    <a href={perfilAutor} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4">
                      Ver perfil do autor
                    </a>
                  )}
                </footer>
              )}
            </article>
          ))}
        </Carrossel>
      </div>
    </section>
  );
}
