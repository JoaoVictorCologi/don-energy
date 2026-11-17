"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ContatoAlternativo() {
  return (
    <div className="rounded-md border border-border bg-background px-5 py-7 text-center text-foreground">
      <h2 className="font-heading text-2xl font-medium sm:text-3xl">Peça sua proposta</h2>
      <p className="mt-3 text-muted-foreground">Converse com a Don Energy sobre o seu projeto.</p>
      <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center rounded-md bg-brand-blue px-5 font-semibold text-white">Falar no WhatsApp</a>
    </div>
  );
}

// Importação condicional: RHF, Zod e os campos só são baixados perto do uso.
// A alternativa estática mantém o contato disponível mesmo sem JavaScript.
const FormularioContato = dynamic(
  () => import("./formulario-contato").then((module) => module.FormularioContato),
  { ssr: false, loading: ContatoAlternativo }
);

export function ContatoProgressivo() {
  const [carregar, setCarregar] = useState(false);
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCarregar(true);
        observer.disconnect();
      }
    }, { rootMargin: "600px" });
    if (section.current) observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" ref={section} aria-label="Proposta pelo WhatsApp" className="min-h-[68rem] min-w-0 scroll-mt-4 min-[380px]:min-h-[59rem] sm:min-h-[41rem] xl:ml-auto xl:w-full xl:max-w-[560px]">
      {carregar ? <FormularioContato compacto /> : <ContatoAlternativo />}
    </section>
  );
}
