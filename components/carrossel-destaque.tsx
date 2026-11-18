"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type KeyboardEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMovimentoDoSite } from "@/lib/preferencia-movimento";

const assinarMontagem = () => () => {};
const montado = () => true;
const noServidor = () => false;

type Props = { children: ReactNode; opcoes: readonly string[] };

// A trilha continua nativa: toque, teclado e links funcionam sem biblioteca externa.
export function CarrosselDestaque({ children, opcoes }: Props) {
  const trilho = useRef<HTMLDivElement>(null);
  const [ativo, setAtivo] = useState(0);
  const movimento = useMovimentoDoSite();
  const interativo = useSyncExternalStore(assinarMontagem, montado, noServidor);

  useEffect(() => {
    const area = trilho.current;
    if (!area) return;
    let timer: number | undefined;
    function atualizar() {
      if (!area) return;
      const slides = [...area.querySelectorAll<HTMLElement>("[data-solucao-slide]")];
      const inicio = area.getBoundingClientRect().left;
      let indice = 0;
      let distancia = Infinity;
      slides.forEach((slide, atual) => {
        const diferenca = Math.abs(slide.getBoundingClientRect().left - inicio);
        if (diferenca < distancia) { distancia = diferenca; indice = atual; }
      });
      setAtivo(indice);
    }
    function agendar() {
      window.clearTimeout(timer);
      timer = window.setTimeout(atualizar, 120);
    }
    const observer = new ResizeObserver(atualizar);
    observer.observe(area);
    area.addEventListener("scroll", agendar, { passive: true });
    area.addEventListener("scrollend", atualizar);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      area.removeEventListener("scroll", agendar);
      area.removeEventListener("scrollend", atualizar);
    };
  }, []);

  // Reinicia o efeito também quando voltamos a um serviço já visitado.
  useEffect(() => {
    const slide = trilho.current?.querySelectorAll<HTMLElement>("[data-solucao-slide]")[ativo];
    if (!slide || !movimento) return;
    slide.classList.remove("solucao-em-destaque");
    void slide.offsetWidth;
    slide.classList.add("solucao-em-destaque");
    return () => slide.classList.remove("solucao-em-destaque");
  }, [ativo, movimento]);

  function selecionar(indice: number) {
    const area = trilho.current;
    const slide = area?.querySelectorAll<HTMLElement>("[data-solucao-slide]")[indice];
    if (!area || !slide) return;
    area.scrollTo({
      left: area.scrollLeft + slide.getBoundingClientRect().left - area.getBoundingClientRect().left,
      behavior: movimento ? "smooth" : "instant",
    });
  }

  function teclado(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    const indice = event.key === "Home" ? 0 : event.key === "End" ? opcoes.length - 1 : event.key === "ArrowRight" ? Math.min(ativo + 1, opcoes.length - 1) : event.key === "ArrowLeft" ? Math.max(0, ativo - 1) : null;
    if (indice === null) return;
    event.preventDefault();
    selecionar(indice);
  }

  return <div className="solucoes-destaque" role="region" aria-roledescription="carrossel" aria-label="Soluções solares em destaque">
    <div className="solucoes-destaque-barra">
      <p className="solucoes-destaque-status"><span aria-hidden="true">{String(ativo + 1).padStart(2, "0")} <span>/ {String(opcoes.length).padStart(2, "0")}</span></span><span className="sr-only" aria-live="polite" aria-atomic="true">Solução {ativo + 1} de {opcoes.length}: {opcoes[ativo]}.</span></p>
      {interativo && <div className="flex gap-3">
        <button type="button" className="carousel-control" aria-label="Solução anterior" aria-controls="solucoes-paineis" disabled={ativo === 0} onClick={() => selecionar(ativo - 1)}><ArrowLeft aria-hidden="true" className="size-5" /></button>
        <button type="button" className="carousel-control" aria-label="Próxima solução" aria-controls="solucoes-paineis" disabled={ativo === opcoes.length - 1} onClick={() => selecionar(ativo + 1)}><ArrowRight aria-hidden="true" className="size-5" /></button>
      </div>}
    </div>
    <div ref={trilho} id="solucoes-paineis" className="solucoes-destaque-trilho" tabIndex={0} onKeyDown={teclado} aria-label="Deslize para explorar as soluções. Use também as setas esquerda e direita, Início ou Fim.">
      {children}
    </div>
    {interativo && <div className="solucoes-destaque-seletores" role="group" aria-label="Escolher solução">
      {opcoes.map((nome, indice) => <button key={nome} type="button" aria-label={"Mostrar solução: " + nome} aria-controls={"solucao-destaque-" + indice} aria-current={ativo === indice ? "true" : undefined} onClick={() => selecionar(indice)}><span aria-hidden="true">{String(indice + 1).padStart(2, "0")}</span>{nome}</button>)}
    </div>}
    <p className="solucoes-destaque-ajuda">Deslize a imagem ou escolha uma solução para conhecer mais.</p>
  </div>;
}
