"use client";

import { useEffect, useRef, type ReactNode, type KeyboardEvent } from "react";

export function LinhaTempoHistoria({ children }: { children: ReactNode }) {
  const lista = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const area = lista.current;
    if (!area || !("IntersectionObserver" in window)) return;
    const movimento = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const marco = entry.target as HTMLElement;
        marco.dataset.ativo = String(entry.isIntersecting);
        if (entry.isIntersecting && !marco.dataset.visitado) {
          marco.dataset.visitado = "true";
          if (!movimento.matches) marco.classList.add("trajetoria-entrada");
        }
      });
    }, { threshold: 0.5 });
    area.querySelectorAll("[data-marco]").forEach(marco => observer.observe(marco));
    return () => observer.disconnect();
  }, []);

  function navegar(event: KeyboardEvent<HTMLOListElement>) {
    const area = lista.current;
    if (!area || event.target !== area || area.scrollWidth <= area.clientWidth) return;
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = reduzido ? "auto" : "smooth";
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
