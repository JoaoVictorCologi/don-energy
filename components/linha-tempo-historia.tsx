"use client";

import { useEffect, useRef, type ReactNode, type KeyboardEvent } from "react";
import { useMovimentoDoSite } from "@/lib/preferencia-movimento";

export function LinhaTempoHistoria({ children }: { children: ReactNode }) {
  const lista = useRef<HTMLOListElement>(null);
  const ativo = useMovimentoDoSite();

  useEffect(() => {
    const area = lista.current;
    if (!area) return;
    const marcos = [...area.querySelectorAll<HTMLElement>("[data-marco]")];
    const limpar = () => marcos.forEach(marco => marco.classList.remove("trajetoria-entrada"));
    limpar();
    if (!ativo) {
      area.removeAttribute("data-movimento");
      return;
    }
    area.dataset.movimento = "permitido";

    function repetirVisiveis() {
      limpar();
      if (!area) return;
      void area.offsetWidth;
      const quadro = area.getBoundingClientRect();
      marcos.forEach(marco => {
        const caixa = marco.getBoundingClientRect();
        const largura = Math.min(caixa.right, quadro.right, innerWidth) - Math.max(caixa.left, quadro.left, 0);
        const altura = Math.min(caixa.bottom, innerHeight) - Math.max(caixa.top, 0);
        if (largura >= caixa.width * .15 && altura >= Math.min(64, caixa.height * .15)) marco.classList.add("trajetoria-entrada");
      });
    }
    // Abertura automática; marcos fora da tela aguardam a própria entrada,
    // inclusive no deslize horizontal. Assim o efeito não termina escondido.
    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= .15) entry.target.classList.add("trajetoria-entrada");
          else if (!entry.isIntersecting) entry.target.classList.remove("trajetoria-entrada");
        });
      }, { threshold: [0, .15] });
      marcos.forEach(marco => observer?.observe(marco));
    } else marcos.forEach(marco => marco.classList.add("trajetoria-entrada"));
    const aoRetornar = (event: PageTransitionEvent) => {
      if (event.persisted) repetirVisiveis();
    };
    window.addEventListener("pageshow", aoRetornar);
    return () => {
      observer?.disconnect();
      window.removeEventListener("pageshow", aoRetornar);
      limpar();
      area.removeAttribute("data-movimento");
    };
  }, [ativo]);

  function navegar(event: KeyboardEvent<HTMLOListElement>) {
    const area = lista.current;
    if (!area || event.target !== area || area.scrollWidth <= area.clientWidth) return;
    const behavior = ativo ? "smooth" : "auto";
    const passo = area.querySelector("li")?.getBoundingClientRect().width ?? area.clientWidth;
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      area.scrollBy({ left: event.key === "ArrowRight" ? passo : -passo, behavior });
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      area.scrollTo({ left: event.key === "Home" ? 0 : area.scrollWidth, behavior });
    }
  }

  return <ol ref={lista} tabIndex={0} aria-label="Trajetória da Don Energy, de 2022 a 2025" onKeyDown={navegar} className="trajetoria-trilho">{children}</ol>;
}
