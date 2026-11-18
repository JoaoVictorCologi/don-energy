"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Melhoria progressiva: nada fica escondido aguardando JavaScript ou rolagem.
export function EfeitosVisuais() {
  const pathname = usePathname();
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const movimento = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (movimento.matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visual-entrada");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-revelar]").forEach(elemento => observer.observe(elemento));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
