"use client";

import { useSyncExternalStore } from "react";

function lerPreferencia() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function assinar(atualizar: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", atualizar);
  return () => media.removeEventListener("change", atualizar);
}
const estadoNoServidor = () => false;
export function useMovimentoDoSite() {
  return useSyncExternalStore(assinar, lerPreferencia, estadoNoServidor);
}
