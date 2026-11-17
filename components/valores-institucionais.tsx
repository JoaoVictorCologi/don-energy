"use client";

import { useRef, useState, type KeyboardEvent } from "react";

const conteudos = [
  { titulo: "Missão", texto: "Desenvolver soluções em energia solar que considerem a realidade de cada cliente, unindo conhecimento técnico, qualidade e atendimento próximo." },
  { titulo: "Visão", texto: "Crescer com responsabilidade e fortalecer relações de confiança, contribuindo para tornar a energia solar mais acessível a pessoas e empresas." },
  { titulo: "Valores", texto: "Trabalhar com transparência, responsabilidade técnica e respeito às pessoas. Ouvir cada cliente, cuidar da execução e buscar a melhoria contínua." },
];

export function ValoresInstitucionais() {
  const [ativo, setAtivo] = useState(0);
  const botoes = useRef<(HTMLButtonElement | null)[]>([]);

  function navegar(event: KeyboardEvent<HTMLButtonElement>, indice: number) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let destino = indice;
    if (event.key === "Home") destino = 0;
    if (event.key === "End") destino = conteudos.length - 1;
    if (event.key === "ArrowLeft") destino = (indice + conteudos.length - 1) % conteudos.length;
    if (event.key === "ArrowRight") destino = (indice + 1) % conteudos.length;
    setAtivo(destino);
    botoes.current[destino]?.focus();
  }

  return (
    <div className="institucional-abas overflow-hidden rounded-xl border border-border bg-brand-soft">
      <noscript>
        <style>{".institucional-abas [role=tablist],.institucional-abas [role=tabpanel]{display:none}"}</style>
        {conteudos.map(({ titulo, texto }) => (
          <article key={titulo} className="border-b border-border p-6">
            <h3 className="font-heading text-2xl font-medium text-brand-blue">{titulo}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{texto}</p>
          </article>
        ))}
      </noscript>
      <div role="tablist" aria-label="Missão, visão e valores da Don Energy" className="grid grid-cols-3 border-b border-border">
        {conteudos.map(({ titulo }, indice) => (
          <button
            key={titulo}
            ref={element => { botoes.current[indice] = element; }}
            type="button"
            role="tab"
            id={"institucional-aba-" + indice}
            aria-controls={"institucional-painel-" + indice}
            aria-selected={ativo === indice}
            tabIndex={ativo === indice ? 0 : -1}
            onClick={() => setAtivo(indice)}
            onKeyDown={event => navegar(event, indice)}
            className="min-h-14 px-3 py-4 text-base font-semibold text-brand-blue aria-selected:bg-brand-blue aria-selected:text-white focus-visible:-outline-offset-4"
          >
            {titulo}
          </button>
        ))}
      </div>
      {conteudos.map(({ titulo, texto }, indice) => (
        <section
          key={titulo}
          role="tabpanel"
          id={"institucional-painel-" + indice}
          aria-labelledby={"institucional-aba-" + indice}
          hidden={ativo !== indice}
          tabIndex={0}
          className="min-h-44 p-6 sm:p-9"
        >
          <h3 className="font-heading text-2xl font-medium text-brand-blue">{titulo}</h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{texto}</p>
        </section>
      ))}
    </div>
  );
}
