"use client";

import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

import { useMovimentoDoSite, definirMovimento, inicializarMovimento } from "@/lib/preferencia-movimento";

const semMovimentoNoServidor = () => false;
const clienteDisponivel = () => true;
const assinarMontagem = () => () => {};

// Conteúdo legível antes do JavaScript; a preferência fica somente nesta sessão.
export function EfeitosVisuais() {
  const pathname = usePathname();
  const ativo = useMovimentoDoSite();
  const montado = useSyncExternalStore(assinarMontagem, clienteDisponivel, semMovimentoNoServidor);
  const destino = montado ? document.getElementById("preferencias-movimento") : null;

  useEffect(inicializarMovimento, []);

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

  function alternar() { definirMovimento(!ativo); }

  return destino ? createPortal(<button type="button" onClick={alternar} className="controle-movimento">{ativo ? "Reduzir animações" : "Ativar animações"}</button>, destino) : null;
}
