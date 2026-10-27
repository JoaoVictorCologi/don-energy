import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServicoCard } from "@/components/servico-card";
import { CarrosselSolucoes } from "@/components/carrossel-solucoes";
import { servicos } from "@/lib/servicos-data";

export function Servicos() {
  return <section id="servicos" className="site-section scroll-mt-[var(--header-height)] bg-brand-soft"><div className="site-shell"><div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"><div><p className="site-eyebrow">Soluções solares</p><h2 className="site-title">Qual é o seu próximo passo?</h2></div><Link prefetch={false} href="/servicos/" className="site-link shrink-0">Explore as soluções <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></Link></div><p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">Quatro perfis. Necessidades diferentes. Conheça o que considerar em cada um.</p>
    <CarrosselSolucoes>{servicos.map(servico => <div key={servico.id} data-slide className="solucoes-slide"><ServicoCard servico={servico} inicial /></div>)}</CarrosselSolucoes>
    <p className="mt-5 text-xs leading-relaxed text-muted-foreground">Projetos identificados e fotografias do acervo Don Energy. Imagens de composição não definem o perfil de uma instalação.</p></div></section>;
}
