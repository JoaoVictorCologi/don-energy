"use client";

import { useEffect, useRef, useState, type ReactNode, type KeyboardEvent } from "react";
import { useMovimentoDoSite } from "@/lib/preferencia-movimento";
import { ArrowLeft, ArrowRight } from "lucide-react";

type CarrosselProps = {
  children: ReactNode;
  id: string;
  titulo: string;
  itens: string;
  anterior: string;
  proximo: string;
  indicadores?: readonly string[];
};

export function Carrossel({ children, id, titulo, itens, anterior, proximo, indicadores }: CarrosselProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const movimentoAtivo = useMovimentoDoSite();
  const [inicio, setInicio] = useState(true);
  const [fim, setFim] = useState(false);
  const [ativo, setAtivo] = useState(0);
  const [posicoes, setPosicoes] = useState(indicadores?.length ?? 0);

  useEffect(() => {
    const area = viewport.current;
    if (!area) return;

    function atualizar() {
      if (!area) return;
      setInicio(area.scrollLeft < 2);
      const limite = area.scrollWidth - area.clientWidth;
      setFim(area.scrollLeft >= limite - 2);
      if (!indicadores) return;

      const slides = [...area.querySelectorAll<HTMLElement>("[data-slide]")];
      const left = area.getBoundingClientRect().left;
      let maisProximo = 0;
      let distancia = Infinity;
      let acessiveis = 0;
      slides.forEach((slide, indice) => {
        const deslocamento = slide.getBoundingClientRect().left - left;
        // A última posição pode mostrar dois cartões em telas largas.
        if (deslocamento + area.scrollLeft > limite + 2) return;
        acessiveis++;
        const atual = Math.abs(deslocamento);
        if (atual < distancia) {
          distancia = atual;
          maisProximo = indice;
        }
      });
      setAtivo(maisProximo);
      setPosicoes(acessiveis);
    }

    atualizar();
    const observer = new ResizeObserver(atualizar);
    observer.observe(area);
    area.addEventListener("scroll", atualizar, { passive: true });
    return () => {
      observer.disconnect();
      area.removeEventListener("scroll", atualizar);
    };
  }, [indicadores]);

  useEffect(() => {
    const area = viewport.current;
    if (!area || !movimentoAtivo) return;
    let timer: number | undefined;
    let ultimaPosicao = Math.round(area.scrollLeft);

    function animarVisiveis() {
      if (!area) return;
      const posicao = Math.round(area.scrollLeft);
      if (Math.abs(posicao - ultimaPosicao) < 2) return;
      ultimaPosicao = posicao;
      const quadro = area.getBoundingClientRect();
      const fotos = [...area.querySelectorAll<HTMLElement>(".novo-servico-foto")].filter(foto => {
        const limite = foto.getBoundingClientRect();
        const larguraVisivel = Math.min(limite.right, quadro.right) - Math.max(limite.left, quadro.left);
        return larguraVisivel >= limite.width * 0.5;
      });
      fotos.forEach(foto => foto.classList.remove("carrossel-foto-entrada"));
      if (fotos.length) {
        void area.offsetWidth;
        fotos.forEach(foto => foto.classList.add("carrossel-foto-entrada"));
      }
    }

    function agendar() {
      window.clearTimeout(timer);
      // Fallback para navegadores sem scrollend; também atende arraste por toque.
      timer = window.setTimeout(animarVisiveis, 120);
    }
    area.addEventListener("scroll", agendar, { passive: true });
    area.addEventListener("scrollend", animarVisiveis);
    return () => {
      window.clearTimeout(timer);
      area.removeEventListener("scroll", agendar);
      area.removeEventListener("scrollend", animarVisiveis);
      area.querySelectorAll(".carrossel-foto-entrada").forEach(foto => foto.classList.remove("carrossel-foto-entrada"));
    };
  }, [movimentoAtivo]);

  function rolar(area: HTMLDivElement, left: number) {
    const behavior = movimentoAtivo ? "smooth" : "instant";
    area.scrollTo({ left, behavior });
  }

  function mover(destino: number | "inicio" | "fim") {
    const area = viewport.current;
    if (!area) return;
    const passo = (area.querySelector<HTMLElement>("[data-slide]")?.offsetWidth ?? area.clientWidth) + 28;
    const left = destino === "inicio" ? 0 : destino === "fim" ? area.scrollWidth : area.scrollLeft + passo * destino;
    rolar(area, left);
  }

  function selecionar(indice: number) {
    const area = viewport.current;
    const slide = area?.querySelectorAll<HTMLElement>("[data-slide]")[indice];
    if (area && slide) {
      rolar(area, area.scrollLeft + slide.getBoundingClientRect().left - area.getBoundingClientRect().left);
    }
  }

  function teclado(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    mover(event.key === "Home" ? "inicio" : event.key === "End" ? "fim" : event.key === "ArrowRight" ? 1 : -1);
  }

  return (
    <div className={indicadores ? "min-w-0" : "mt-10"} role="region" aria-label={titulo} aria-roledescription="carrossel">
      <div
        ref={viewport}
        id={id}
        tabIndex={0}
        aria-label={"Cartões de " + itens + ". Use as setas esquerda e direita, Início ou Fim."}
        onKeyDown={teclado}
        className="solucoes-trilho rounded-md pb-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        {children}
      </div>
      {(!indicadores || posicoes > 1) && (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          {indicadores ? (
            <div role="group" aria-label="Escolher avaliação" className="flex flex-wrap">
              {indicadores.slice(0, posicoes).map((nome, indice) => (
                <button
                  key={nome + indice}
                  type="button"
                  aria-label={"Mostrar avaliação de " + nome}
                  aria-controls={id}
                  aria-current={ativo === indice ? "true" : undefined}
                  onClick={() => selecionar(indice)}
                  className="grid size-9 place-items-center rounded-full sm:size-11"
                >
                  <span aria-hidden="true" className={ativo === indice ? "h-2.5 w-5 rounded-full bg-brand-forest" : "size-2.5 rounded-full border border-brand-forest"} />
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Arraste para explorar {itens}.</p>
          )}
          <div className="flex gap-3">
            <button type="button" aria-label={anterior} aria-controls={id} disabled={inicio} onClick={() => mover(-1)} className="carousel-control">
              <ArrowLeft aria-hidden="true" className="size-5" />
            </button>
            <button type="button" aria-label={proximo} aria-controls={id} disabled={fim} onClick={() => mover(1)} className="carousel-control">
              <ArrowRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
