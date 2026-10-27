"use client";

import { useEffect, useRef, useState } from "react";
import { integracaoAzume } from "@/lib/integracao-azume";

export function QuadroAzume() {
  const area = useRef<HTMLDivElement>(null);
  const [ativado, setAtivado] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { setAtivado(true); observer.disconnect(); }
    }, { rootMargin: "150px" });
    if (area.current) observer.observe(area.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={area} className="azume-quadro rounded-md border border-border bg-white">
    {ativado ? <iframe src={integracaoAzume.url} title="Calculadora solar Azume — Don Energy" aria-describedby="azume-aviso" className="h-full w-full rounded-md border-0" referrerPolicy="strict-origin-when-cross-origin" /> : <p className="p-8 text-sm leading-relaxed text-muted-foreground">A calculadora externa será carregada ao chegar a esta seção. Você também pode abri-la pelo link abaixo.</p>}
  </div>;
}
