import { ArrowUpRight as Seta } from "lucide-react";
import Link from "next/link";
import { obrasDestaque } from "@/lib/obras-data";
import { ProjetoCard } from "@/components/projeto-card";

export function ObrasGallery() {
  return <section id="obras" className="site-section scroll-mt-[var(--header-height)]"><div className="site-shell"><div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end"><div><p className="site-eyebrow">Projetos Don Energy</p><h2 className="site-title">A energia solar ganha forma.</h2></div><Link prefetch={false} href="/obras/" className="site-link shrink-0">Ver portfólio <Seta aria-hidden="true" className="size-4 shrink-0" /></Link></div><p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">Conheça projetos em diferentes contextos e explore as fotografias de cada instalação.</p><div className="mt-10 grid gap-8 md:grid-cols-3">{obrasDestaque.map(obra => <ProjetoCard key={obra.id} obra={obra} />)}</div></div></section>;
}
