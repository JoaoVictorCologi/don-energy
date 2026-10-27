"use client";

import { useEffect, useRef, useState, type ReactNode, type KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function CarrosselSolucoes({ children }: { children: ReactNode }) {
  const viewport = useRef<HTMLDivElement>(null);
  const [posicao, setPosicao] = useState({ primeira: 1, ultima: 2, inicio: true, fim: false });

  function atualizar() {
    const area = viewport.current;
    if (!area) return;
    const cards = Array.from(area.querySelectorAll<HTMLElement>("[data-slide]"));
    const bounds = area.getBoundingClientRect();
    const visiveis = cards.flatMap((card, i) => {
      const r = card.getBoundingClientRect();
      return r.left < bounds.right - 30 && r.right > bounds.left + 30 ? [i + 1] : [];
    });
    const nova = { primeira: visiveis[0] ?? 1, ultima: visiveis.at(-1) ?? 4, inicio: area.scrollLeft < 2, fim: area.scrollLeft + area.clientWidth >= area.scrollWidth - 2 };
    setPosicao(atual => Object.keys(nova).every(key => atual[key as keyof typeof nova] === nova[key as keyof typeof nova]) ? atual : nova);
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
    area.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  function teclado(event: KeyboardEvent<HTMLDivElement>) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    mover(event.key === "Home" ? "inicio" : event.key === "End" ? "fim" : event.key === "ArrowRight" ? 1 : -1);
  }

  return <div className="mt-10" role="region" aria-label="Soluções solares" aria-roledescription="carrossel">
    <div ref={viewport} id="solucoes-paineis" tabIndex={0} aria-label="Cartões de soluções. Use as setas esquerda e direita, Início ou Fim." onKeyDown={teclado} onScroll={atualizar} className="solucoes-trilho rounded-md pb-3">
      {children}
    </div>
    <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">Arraste para explorar os quatro perfis.</p>
      <div className="flex min-w-0 flex-wrap items-center gap-3"><span aria-live="polite" aria-atomic="true" className="min-w-20 text-center text-xs text-brand-blue">{posicao.primeira}–{posicao.ultima} de 4</span>
        <button type="button" aria-label="Solução anterior" aria-controls="solucoes-paineis" disabled={posicao.inicio} onClick={() => mover(-1)} className="carousel-control"><ArrowLeft aria-hidden="true" className="size-5" /></button>
        <button type="button" aria-label="Próxima solução" aria-controls="solucoes-paineis" disabled={posicao.fim} onClick={() => mover(1)} className="carousel-control"><ArrowRight aria-hidden="true" className="size-5" /></button>
      </div>
    </div>
  </div>;
}
