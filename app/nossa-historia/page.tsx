import { ArrowUpRight, ZoomIn } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { institucional } from "@/lib/institucional-data";
import { ChamadaContato } from "@/components/chamada-contato";
import { ValoresInstitucionais } from "@/components/valores-institucionais";
import { FotoAcervo } from "@/components/foto-acervo";
import Image from "next/image";

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
      <section aria-labelledby="texto-historia-titulo" className="site-section">
        <div className="site-shell">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="texto-historia-titulo" className="font-heading text-3xl font-semibold tracking-tight text-brand-blue md:text-4xl">Nossa História</h2>
            <div className="mt-7 space-y-5 text-base leading-loose text-brand-ink">
              <p>A história da Don Energy começou em 2022, em Mococa (SP), quando um pai e seus dois filhos uniram experiência comercial e conhecimento técnico em energia solar. Essa combinação deu origem a uma empresa pautada pela confiança, pela proximidade e pelo cuidado com cada projeto.</p>
              <p>Em 2023, a empresa assumiu sua identidade própria e passou a atuar com a marca Don Energy. Com autonomia para crescer, fortaleceu seus processos e ampliou sua atuação para São Paulo e Minas Gerais, desenvolvendo projetos fotovoltaicos para residências, comércios, indústrias e propriedades rurais.</p>
              <p>Seguimos com o propósito de entender as necessidades de cada cliente e construir relações de longo prazo. Engenharia, qualidade e atendimento próximo orientam o nosso trabalho, da primeira conversa à execução.</p>
            </div>
          </div>
          <figure className="mx-auto mt-12 max-w-5xl">
            <FotoAcervo numero="16" sizes="(min-width: 1200px) 1024px, 90vw" className="aspect-[16/9]" />
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">Igreja Nossa Senhora da Luz · Acervo Don Energy</figcaption>
          </figure>
          <div className="mx-auto mt-12 max-w-5xl">
            <ValoresInstitucionais />
          </div>
        </div>
      </section>
      <section aria-labelledby="trajetoria-titulo" className="bg-brand-soft py-12 md:py-16">
        <div className="site-shell">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <h2 id="trajetoria-titulo" className="font-heading text-2xl font-medium text-brand-blue">Nossa trajetória</h2>
            <a href="/obras/trajetoria-don-energy.webp" target="_blank" rel="noopener noreferrer" className="site-link text-sm">
              Ampliar trajetória <ZoomIn aria-hidden="true" className="size-4" />
            </a>
          </div>
          <figure>
            <a href="/obras/trajetoria-don-energy.webp" target="_blank" rel="noopener noreferrer" aria-label="Ampliar imagem da trajetória da Don Energy" className="block rounded-xl">
              <Image src="/obras/trajetoria-don-energy.webp" width={1600} height={900} alt="Trajetória Don Energy. 2022, nossas raízes e abertura da empresa. 2023, identidade própria. 2024, expansão em São Paulo e Minas Gerais. 2025, indicadores de potência e economia ainda em conferência." className="h-auto w-full rounded-xl" />
            </a>
            <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">Arte da trajetória fornecida pelo proprietário. Os indicadores de potência e economia apresentados na imagem estão em conferência.</figcaption>
          </figure>
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
