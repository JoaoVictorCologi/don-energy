"use client";

import { useEffect, useRef, useState, type ReactNode, type KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type CarrosselProps = {
  children: ReactNode;
  id: string;
  titulo: string;
  itens: string;
  anterior: string;
  proximo: string;
};

export function Carrossel({ children, id, titulo, itens, anterior, proximo }: CarrosselProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const [inicio, setInicio] = useState(true);
  const [fim, setFim] = useState(false);

  function atualizar() {
    const area = viewport.current;
    if (!area) return;
    setInicio(area.scrollLeft < 2);
    setFim(area.scrollLeft + area.clientWidth >= area.scrollWidth - 2);
  }

  useEffect(() => {
    const observer = new ResizeObserver(atualizar);
    if (viewport.current) observer.observe(viewport.current);
    return () => observer.disconnect();
  }, []);

  function mover(destino: number | "inicio" | "fim") {
    const area = viewport.current;
    if (!area) return;
    const passo = (area.querySelector<HTMLElement>("[data-slide]")?.offsetWidth ?? area.clientWidth) + 28;
    const left = destino === "inicio" ? 0 : destino === "fim" ? area.scrollWidth : area.scrollLeft + passo * destino;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
    area.scrollTo({ left, behavior });
  }

  function teclado(event: KeyboardEvent<HTMLDivElement>) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    mover(event.key === "Home" ? "inicio" : event.key === "End" ? "fim" : event.key === "ArrowRight" ? 1 : -1);
  }

  return (
    <div className="mt-10" role="region" aria-label={titulo} aria-roledescription="carrossel">
      <div ref={viewport} id={id} tabIndex={0} aria-label={"Cartões de " + itens + ". Use as setas esquerda e direita, Início ou Fim."} onKeyDown={teclado} onScroll={atualizar} className="solucoes-trilho rounded-md pb-3">
        {children}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">Arraste para explorar {itens}.</p>
        <div className="flex gap-3">
          <button type="button" aria-label={anterior} aria-controls={id} disabled={inicio} onClick={() => mover(-1)} className="carousel-control">
            <ArrowLeft aria-hidden="true" className="size-5" />
          </button>
          <button type="button" aria-label={proximo} aria-controls={id} disabled={fim} onClick={() => mover(1)} className="carousel-control">
            <ArrowRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
