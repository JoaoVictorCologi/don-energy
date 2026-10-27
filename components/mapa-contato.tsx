import { ArrowUpRight } from "lucide-react";
import { localizacao } from "@/lib/localizacao";

export function MapaContato() {
  return <section aria-labelledby="localizacao-titulo" className="site-shell pb-20">
    <div className="mb-6 flex flex-wrap items-end justify-between gap-5"><div><p className="site-eyebrow">Visite a Don Energy</p><h2 id="localizacao-titulo" className="site-title">Onde estamos</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{localizacao.endereco}</p></div><a href={localizacao.rotaUrl} target="_blank" rel="noopener noreferrer" className="site-link">Como chegar no Google Maps <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></a></div>
    <div className="h-80 overflow-hidden rounded-xl border bg-brand-soft sm:h-96"><iframe title="Mapa do endereço da Don Energy em Mococa" src={localizacao.mapaUrl} loading="lazy" referrerPolicy="no-referrer" allowFullScreen className="h-full w-full border-0" /></div>
    <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted-foreground">Mapa fornecido pelo Google, carregado ao se aproximar desta área da página, sem botão de ativação. Seu navegador se conecta ao Google, sujeito às políticas desse serviço. Se o mapa não aparecer, use o endereço ou o link Como chegar.</p>
  </section>;
}
