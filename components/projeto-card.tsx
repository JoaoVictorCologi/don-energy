import { ArrowUpRight as Seta } from "lucide-react";
import Link from "next/link";
import type { ObraConfirmada } from "@/lib/obras-data";
import { fotoPorId } from "@/lib/fotos-data";
import { ImagemPortfolio } from "@/components/imagem-portfolio";

export function ProjetoCard({ obra }: { obra: ObraConfirmada }) {
  return <article data-projeto-id={obra.id} className="group relative overflow-hidden rounded-md border border-border bg-background focus-within:ring-2 focus-within:ring-brand-blue">
    <ImagemPortfolio foto={fotoPorId(obra.capaFotoId)} />
    <div className="p-6"><h3 className="font-heading text-xl leading-snug font-medium text-brand-green-dark">{obra.titulo}</h3>
      {obra.cidade && <p className="mt-3 text-sm text-muted-foreground">{obra.cidade}{obra.uf ? " · " + obra.uf : ""}</p>}
      <Link prefetch={false} href={"/obras/" + obra.slug + "/"} aria-label={"Conhecer projeto — " + obra.titulo} className="site-link mt-4 after:absolute after:inset-0">Conhecer projeto <Seta aria-hidden="true" className="size-4 shrink-0" /></Link>
    </div>
  </article>;
}
