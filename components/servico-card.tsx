import { ArrowUpRight as Seta } from "lucide-react";
import Link from "next/link";
import { FotoAcervo } from "@/components/foto-acervo";
import type { Servico } from "@/lib/servicos-data";
import { apresentacaoSolar } from "@/lib/apresentacao-solar";

export function ServicoCard({ servico, inicial = false, imagemInicial = false }: { servico: Servico; inicial?: boolean; imagemInicial?: boolean }) {
  const Titulo = inicial ? "h3" : "h2";
  return (
    <article data-servico={servico.id} className="group relative overflow-hidden rounded-md border border-border bg-background focus-within:ring-2 focus-within:ring-brand-blue">
      <FotoAcervo numero={apresentacaoSolar[servico.id].foto} loading={imagemInicial ? "eager" : "lazy"} className="aspect-[16/9] rounded-none" />
      <div className="p-6 sm:p-8"><p className="mb-4 text-xs leading-relaxed text-muted-foreground">{apresentacaoSolar[servico.id].legenda}</p>
        <Titulo className="font-heading text-2xl font-medium tracking-tight text-brand-green-dark">{inicial ? servico.titulo : servico.nome}</Titulo>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">{inicial ? servico.intro : servico.resumo}</p>
        <Link prefetch={false} href={"/servicos/" + servico.slug + "/"} aria-label={"Conhecer solução — " + servico.nome.toLowerCase()} className="site-link mt-6 after:absolute after:inset-0">
          Conhecer solução <Seta aria-hidden="true" className="size-4 shrink-0" />
        </Link>
      </div>
    </article>
  );
}
