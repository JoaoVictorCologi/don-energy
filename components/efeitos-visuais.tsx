"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useMovimentoDoSite } from "@/lib/preferencia-movimento";

// Conteúdo legível antes do JavaScript; movimento adaptado à preferência do sistema.
export function EfeitosVisuais() {
  const pathname = usePathname();
  const ativo = useMovimentoDoSite();

  useEffect(() => {
    document.documentElement.dataset.movimento = ativo ? "ativo" : "reduzido";
    const elementos = [...document.querySelectorAll<HTMLElement>("[data-revelar]")];
    elementos.forEach(elemento => elemento.classList.remove("visual-entrada"));
    if (!ativo || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
          entry.target.classList.add("visual-entrada");
        } else if (!entry.isIntersecting) {
          entry.target.classList.remove("visual-entrada");
        }
      });
    }, { threshold: [0, 0.12], rootMargin: "0px 0px -5% 0px" });
    elementos.forEach(elemento => observer.observe(elemento));
    return () => observer.disconnect();
  }, [pathname, ativo]);

  return null;
}
