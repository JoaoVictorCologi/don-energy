import { ArrowUpRight, Handshake, Award, TrendingUp, Sun } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { institucional, marcosHistoria } from "@/lib/institucional-data";
import { ChamadaContato } from "@/components/chamada-contato";
import { LinhaTempoHistoria } from "@/components/linha-tempo-historia";

const description = "Conheça a trajetória familiar da Don Energy, de seu início em Mococa à atuação em São Paulo e Minas Gerais.";
export const metadata: Metadata = {
  title: "Nossa História — Don Energy", description,
  alternates: { canonical: "/nossa-historia/" },
  openGraph: { title: "Nossa História — Don Energy", description, url: "/nossa-historia/", images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", title: "Nossa História — Don Energy", description, images: ["/og-image.png"] },
};

export default function NossaHistoriaPage() {
  return (
    <main id="conteudo" tabIndex={-1} className="flex-1">
      <section aria-labelledby="historia-titulo" className="relative isolate overflow-hidden bg-brand-forest pt-[calc(var(--header-height)+5rem)] pb-20 text-white md:pt-[calc(var(--header-height)+7rem)] md:pb-28">
        <picture>
          <source type="image/webp" srcSet="/obras/projetos/r1-new-way-480.webp 480w, /obras/projetos/r1-new-way-960.webp 960w, /obras/projetos/r1-new-way-1440.webp 1440w, /obras/projetos/r1-new-way-1920.webp 1920w" sizes="100vw" />
          <img src="/obras/projetos/r1-new-way-1920.webp" width="1920" height="1080" alt="" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        </picture>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-forest/80" />
        <div className="site-shell">
          <h1 id="historia-titulo" className="max-w-3xl font-heading text-5xl leading-tight font-medium tracking-tight md:text-7xl">Nossa História</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/95">Uma trajetória que começou em família, em Mococa, e cresceu com a energia solar.</p>
          <p className="mt-8 text-xs text-white/80">Espaço de Eventos New Way · Mococa · Acervo Don Energy</p>
        </div>
      </section>
      <section aria-labelledby="trajetoria-titulo" className="site-section bg-brand-soft">
        <div className="site-shell">
          <div className="grid gap-6 md:grid-cols-2 md:gap-16">
            <h2 id="trajetoria-titulo" className="site-title">Uma história de crescimento, inovação e compromisso.</h2>
            <p className="max-w-xl self-center leading-relaxed text-muted-foreground">Ao longo da nossa trajetória, seguimos com o propósito de levar energia limpa, economia e sustentabilidade a mais pessoas e empresas.</p>
          </div>
          <LinhaTempoHistoria>
            {marcosHistoria.map(({ ano, titulo, texto }, index) => {
              const Icone = [Handshake, Award, TrendingUp, Sun][index];
              return (
                <li key={ano} data-marco className="historia-marco">
                  <span aria-hidden="true" className="historia-ponto" />
                  <article className="historia-cartao">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <time dateTime={ano} className="font-heading text-4xl font-medium tracking-tight text-brand-blue">{ano}</time>
                      <Icone aria-hidden="true" className="size-9 text-brand-blue" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading text-2xl leading-snug font-medium text-brand-blue">{titulo}</h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{texto}</p>
                  </article>
                </li>
              );
            })}
          </LinhaTempoHistoria>
        </div>
      </section>
      <section className="site-section">
        <div className="site-shell grid gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <p className="site-eyebrow">O que nos move</p>
            <h2 className="site-title">Engenharia, qualidade<br /> e proximidade.</h2>
          </div>
          <div className="max-w-xl">
            <p className="leading-relaxed text-muted-foreground">{institucional.compromisso}</p>
            <p className="mt-6 leading-relaxed text-muted-foreground">Cada projeto começa por entender o contexto, as necessidades e as dúvidas de quem procura a Don Energy.</p>
            <div className="mt-6 flex flex-wrap gap-x-8">
              <Link prefetch={false} href="/servicos/" className="site-link">Conheça as soluções <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></Link>
              <Link prefetch={false} href="/obras/" className="site-link">Explore os projetos <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></Link>
            </div>
          </div>
        </div>
      </section>
      <ChamadaContato />
    </main>
  );
}
