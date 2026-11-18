"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

const chave = "don-energy-movimento";
const evento = "don-energy-preferencia-movimento";
const semMovimentoNoServidor = () => false;
const clienteDisponivel = () => true;
const assinarMontagem = () => () => {};

function lerPreferencia() {
  const parametro = new URLSearchParams(window.location.search).get("animacoes");
  if (parametro === "1" || parametro === "0") return parametro === "1";
  try {
    const salvo = window.sessionStorage.getItem(chave);
    if (salvo === "true" || salvo === "false") return salvo === "true";
  } catch { /* O sistema continua como referência sem armazenamento. */ }
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function assinarPreferencia(atualizar: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", atualizar);
  window.addEventListener(evento, atualizar);
  return () => {
    media.removeEventListener("change", atualizar);
    window.removeEventListener(evento, atualizar);
  };
}

// Conteúdo legível antes do JavaScript; a preferência fica somente nesta sessão.
export function EfeitosVisuais() {
  const pathname = usePathname();
  const preferencia = useSyncExternalStore(assinarPreferencia, lerPreferencia, semMovimentoNoServidor);
  const montado = useSyncExternalStore(assinarMontagem, clienteDisponivel, semMovimentoNoServidor);
  const [escolha, setEscolha] = useState<boolean | null>(null);
  const ativo = escolha ?? preferencia;
  const destino = montado ? document.getElementById("preferencias-movimento") : null;

  useEffect(() => {
    // O link de avaliação com animacoes=1 é um opt-in explícito da prévia.
    const parametro = new URLSearchParams(window.location.search).get("animacoes");
    if (parametro === "1" || parametro === "0") {
      try { window.sessionStorage.setItem(chave, String(parametro === "1")); } catch { /* Opcional. */ }
    }
  }, []);

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

  function alternar() {
    const proximo = !ativo;
    setEscolha(proximo);
    try { window.sessionStorage.setItem(chave, String(proximo)); } catch { /* Opcional. */ }
    window.dispatchEvent(new Event(evento));
  }

  return destino ? createPortal(<button type="button" onClick={alternar} className="controle-movimento">{ativo ? "Reduzir animações" : "Ativar animações"}</button>, destino) : null;
}
