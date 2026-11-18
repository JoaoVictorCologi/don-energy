"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode, type KeyboardEvent } from "react";
import { useMovimentoDoSite, definirMovimento } from "@/lib/preferencia-movimento";

const assinarMontagem = () => () => {};
const clienteDisponivel = () => true;
const servidor = () => false;

function iniciarTrajetoria(area: HTMLOListElement) {
  const marcos = area.querySelectorAll<HTMLElement>("[data-marco]");
  area.dataset.movimento = "permitido";
  marcos.forEach(marco => marco.classList.remove("trajetoria-entrada"));
  // Consolida o reinício da sequência em uma única leitura de layout.
  void area.offsetWidth;
  marcos.forEach(marco => marco.classList.add("trajetoria-entrada"));
}

export function LinhaTempoHistoria({ children }: { children: ReactNode }) {
  const lista = useRef<HTMLOListElement>(null);
  const ativo = useMovimentoDoSite();
  const pronto = useSyncExternalStore(assinarMontagem, clienteDisponivel, servidor);

  useEffect(() => {
    const area = lista.current;
    if (!area) return;
    if (!ativo) {
      area.removeAttribute("data-movimento");
      area.querySelectorAll("[data-marco]").forEach(marco => marco.classList.remove("trajetoria-entrada"));
      return;
    }
    // Início na montagem da página: não depende de visibilidade ou rolagem.
    const frame = requestAnimationFrame(() => iniciarTrajetoria(area));
    const aoRetornar = (event: PageTransitionEvent) => {
      if (event.persisted) iniciarTrajetoria(area);
    };
    window.addEventListener("pageshow", aoRetornar);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pageshow", aoRetornar);
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

  function repetirAnimacao() {
    if (!ativo) definirMovimento(true);
    else if (lista.current) iniciarTrajetoria(lista.current);
  }

  return <>
    <div className="trajetoria-controles">
      {pronto && <button type="button" onClick={repetirAnimacao} className="trajetoria-repetir">{ativo ? "Repetir animação" : "Reproduzir animação"} <span aria-hidden="true">↻</span></button>}
      {pronto && !ativo && <p className="text-xs text-white">As animações estão reduzidas. Reproduzir ativa o movimento nesta sessão.</p>}
    </div>
    <ol ref={lista} tabIndex={0} aria-label="Trajetória da Don Energy, de 2022 a 2025" onKeyDown={navegar} className="trajetoria-trilho">{children}</ol>
  </>;
}
