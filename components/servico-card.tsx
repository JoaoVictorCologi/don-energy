import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { VisualServico } from "@/components/visual-servico";
import type { Servico } from "@/lib/servicos-data";
import { apresentacaoSolar } from "@/lib/apresentacao-solar";

export function ServicoCard({ servico, inicial = false, imagemInicial = false }: { servico: Servico; inicial?: boolean; imagemInicial?: boolean }) {
  const Titulo = inicial ? "h3" : "h2";
  return <article data-revelar data-servico={servico.id} className="novo-servico-card group">
    <div className="novo-servico-foto"><VisualServico perfil={servico.id} loading={imagemInicial ? "eager" : "lazy"} className="aspect-[16/9] rounded-none" /></div>
    <div className="novo-servico-corpo">
      <p className="novo-servico-legenda">{apresentacaoSolar[servico.id].legenda}</p>
      <Titulo>{inicial ? servico.titulo : servico.nome}</Titulo>
      <p className="novo-servico-descricao">{inicial ? servico.intro : servico.resumo}</p>
      <Link prefetch={false} href={"/servicos/" + servico.slug + "/"} aria-label={"Conhecer solução — " + servico.nome.toLowerCase()} className="novo-card-link after:absolute after:inset-0">Conhecer solução <span aria-hidden="true"><ArrowUpRight className="size-5" /></span></Link>
    </div>
  </article>;
}
