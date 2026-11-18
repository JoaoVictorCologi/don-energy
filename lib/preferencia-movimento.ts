"use client";

import { useSyncExternalStore } from "react";

const chave = "don-energy-movimento";
const evento = "don-energy-preferencia-movimento";
// Estado somente do módulo cliente; a renderização no servidor usa sempre false.
let escolhaAtual: boolean | null = null;

function lerPreferencia() {
  if (escolhaAtual !== null) return escolhaAtual;
  const parametro = new URLSearchParams(window.location.search).get("animacoes");
  if (parametro === "1" || parametro === "0") return parametro === "1";
  try {
    const salvo = window.sessionStorage.getItem(chave);
    if (salvo === "true" || salvo === "false") return salvo === "true";
  } catch { /* Usar a preferência do navegador se o armazenamento não estiver disponível. */ }
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function assinar(atualizar: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", atualizar);
  window.addEventListener(evento, atualizar);
  return () => {
    media.removeEventListener("change", atualizar);
    window.removeEventListener(evento, atualizar);
  };
}

const estadoNoServidor = () => false;
export function useMovimentoDoSite() {
  return useSyncExternalStore(assinar, lerPreferencia, estadoNoServidor);
}

export function definirMovimento(ativo: boolean) {
  escolhaAtual = ativo;
  try { window.sessionStorage.setItem(chave, String(ativo)); } catch { /* Opcional. */ }
  window.dispatchEvent(new Event(evento));
}

export function inicializarMovimento() {
  const parametro = new URLSearchParams(window.location.search).get("animacoes");
  if (parametro === "1" || parametro === "0") definirMovimento(parametro === "1");
}
