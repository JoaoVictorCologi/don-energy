import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ObraConfirmada } from "@/lib/obras-data";
import { fotoPorId } from "@/lib/fotos-data";
import { ImagemPortfolio } from "@/components/imagem-portfolio";

export function ProjetoCard({ obra, sizes }: { obra: ObraConfirmada; sizes?: string }) {
  return <article data-revelar data-projeto-id={obra.id} className="novo-projeto-card group">
    <div className="novo-projeto-imagem"><ImagemPortfolio foto={fotoPorId(obra.capaFotoId)} sizes={sizes} /></div>
    <div className="novo-projeto-legenda"><div><h3>{obra.titulo}</h3>{obra.cidade && <p>{obra.cidade}{obra.uf ? " · " + obra.uf : ""}</p>}</div><Link prefetch={false} href={"/obras/" + obra.slug + "/"} aria-label={"Conhecer projeto — " + obra.titulo} className="novo-projeto-link after:absolute after:inset-0"><span className="sr-only">Conhecer projeto</span><ArrowUpRight aria-hidden="true" className="size-6" /></Link></div>
  </article>;
}
