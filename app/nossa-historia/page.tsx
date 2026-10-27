import { ArrowUpRight as Seta } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { institucional } from "@/lib/institucional-data";
import { ChamadaContato } from "@/components/chamada-contato";

const description = "Conheça a trajetória familiar da Don Energy: início em Mococa em 2022, identidade própria em 2023 e atuação em São Paulo e Minas Gerais.";
export const metadata: Metadata = {
  title: "Nossa História — Don Energy", description,
  alternates: { canonical: "/nossa-historia/" },
  openGraph: { title: "Nossa História — Don Energy", description, url: "/nossa-historia/", images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", title: "Nossa História — Don Energy", description, images: ["/og-image.png"] },
};

export default function NossaHistoriaPage() {
  return <main id="conteudo" tabIndex={-1} className="flex-1">
    <section className="site-shell pt-14 pb-16 md:pt-20 md:pb-20">
      <p className="site-eyebrow">Nossa História · Don Energy</p>
      <div className="grid gap-8 md:grid-cols-[1.15fr_1fr] md:gap-16">
        <h1 className="font-heading text-4xl leading-tight font-medium tracking-[-0.04em] text-brand-blue sm:text-5xl">Nossa história<br /> começa em família.</h1>
        <div className="max-w-xl"><p className="text-lg leading-relaxed text-brand-blue">Conhecimento técnico, experiência comercial e um propósito em comum.</p><p className="mt-6 leading-relaxed text-muted-foreground">A Don Energy nasceu da união de competências e da vontade de construir relações de confiança. Uma trajetória que começou em Mococa e segue conectada às necessidades de cada cliente.</p></div>
      </div>
    </section>
    <section aria-labelledby="trajetoria-titulo" className="site-section bg-brand-soft">
      <div className="site-shell"><p className="site-eyebrow">Como chegamos até aqui</p><h2 id="trajetoria-titulo" className="site-title">Experiências que se encontram.<br /> Uma empresa que evolui.</h2>
        <ol className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">{institucional.etapas.map(etapa => <li key={etapa.ano} className="border-t border-brand-blue/25 pt-7"><p className="font-heading text-4xl font-medium tracking-tight text-brand-blue">{etapa.ano}</p><h3 className="mt-6 font-heading text-2xl leading-snug font-medium text-brand-blue">{etapa.titulo}</h3><p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{etapa.texto}</p></li>)}</ol>
      </div>
    </section>
    <section className="site-section"><div className="site-shell grid gap-10 md:grid-cols-2 md:gap-20"><div><p className="site-eyebrow">O que nos move</p><h2 className="site-title">Engenharia, qualidade<br /> e proximidade.</h2></div><div className="max-w-xl"><p className="leading-relaxed text-muted-foreground">{institucional.compromisso}</p><p className="mt-6 leading-relaxed text-muted-foreground">{institucional.atuacao}</p><p className="mt-6 leading-relaxed text-muted-foreground">Energia solar para residências, comércios, propriedades rurais e usinas de investimento. Cada projeto começa por entender o contexto, as necessidades e as dúvidas de quem procura a Don Energy.</p><div className="mt-6 flex flex-wrap gap-x-8"><Link prefetch={false} href="/servicos/" className="site-link">Conheça as soluções <Seta aria-hidden="true" className="size-4 shrink-0" /></Link><Link prefetch={false} href="/obras/" className="site-link">Explore os projetos <Seta aria-hidden="true" className="size-4 shrink-0" /></Link></div></div></div></section>
    <ChamadaContato />
  </main>;
}
