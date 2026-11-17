"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function LinhaTempoHistoria({ children }: { children: ReactNode }) {
  const lista = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const area = lista.current;
    if (!area) return;
    const marcos = [...area.querySelectorAll<HTMLElement>("[data-marco]")];
    const movimento = window.matchMedia("(prefers-reduced-motion: reduce)");

    function atualizar() {
      const visiveis = marcos.filter(marco => {
        const bounds = marco.getBoundingClientRect();
        return bounds.bottom > 0 && bounds.top < window.innerHeight;
      });
      const centro = window.innerHeight / 2;
      const ativo = visiveis.sort((a, b) => {
        const primeiro = a.getBoundingClientRect();
        const segundo = b.getBoundingClientRect();
        return Math.abs((primeiro.top + primeiro.bottom) / 2 - centro)
          - Math.abs((segundo.top + segundo.bottom) / 2 - centro);
      })[0];
      marcos.forEach(marco => { marco.dataset.ativo = String(marco === ativo); });
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const marco = entry.target as HTMLElement;
          if (!marco.dataset.visitado) {
            marco.dataset.visitado = "true";
            if (!movimento.matches) marco.classList.add("historia-entrada");
          }
        }
      });
      atualizar();
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });

    marcos.forEach(marco => observer.observe(marco));
    return () => observer.disconnect();
  }, []);

  return <ol ref={lista} className="historia-trilho">{children}</ol>;
}
