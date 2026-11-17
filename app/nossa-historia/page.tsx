import { ArrowUpRight } from "lucide-react";
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
      <section aria-labelledby="historia-titulo" className="bg-brand-forest bg-cover bg-top bg-no-repeat pt-[var(--header-height)]" style={{ backgroundImage: "url(/obras/trajetoria-don-energy.webp)" }}>
        <h1 id="historia-titulo" className="sr-only">Nossa História</h1>
        <a href="/obras/trajetoria-don-energy.webp" target="_blank" rel="noopener noreferrer" aria-label="Ampliar imagem da trajetória da Don Energy" className="block">
          <Image src="/obras/trajetoria-don-energy.webp" width={1600} height={900} alt="Trajetória Don Energy. 2022, nossas raízes e abertura da empresa. 2023, identidade própria. 2024, expansão em São Paulo e Minas Gerais. 2025, indicadores de potência e economia ainda em conferência." priority sizes="100vw" className="h-auto w-full" />
        </a>

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
          <div className="relative z-10 mx-auto -mt-5 max-w-5xl">
            <ValoresInstitucionais />
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">Os indicadores de potência e economia na arte da trajetória seguem em conferência.</p>
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
