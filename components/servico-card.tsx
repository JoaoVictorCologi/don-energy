import Link from "next/link";
import { FotoAcervo } from "@/components/foto-acervo";
import type { Servico } from "@/lib/servicos-data";
import { apresentacaoSolar } from "@/lib/apresentacao-solar";

export function ServicoCard({ servico, inicial = false }: { servico: Servico; inicial?: boolean }) {
  return <article data-servico={servico.id} className="group overflow-hidden rounded-md border border-border bg-background">
    <Link prefetch={false} href={"/servicos/" + servico.slug + "/"} aria-label={"Conhecer " + servico.nome.toLowerCase()} className="block rounded-md focus-visible:outline-brand-blue">
      <FotoAcervo numero={apresentacaoSolar[servico.id].foto} className="aspect-[16/9] rounded-none" />
      <div className="p-6 sm:p-8"><h3 className="font-heading text-2xl font-medium tracking-tight text-brand-blue">{inicial ? servico.titulo : servico.nome}</h3><p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">{inicial ? servico.intro : servico.resumo}</p><span className="mt-6 inline-flex min-h-11 items-center gap-4 text-sm font-semibold text-brand-blue underline-offset-8 group-hover:underline">Conhecer solução <span aria-hidden="true">↗</span></span></div>
    </Link>
  </article>;
}
