import { ArrowUpRight, Handshake, Award, TrendingUp, SolarPanel } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { institucional } from "@/lib/institucional-data";
import { ChamadaContato } from "@/components/chamada-contato";
import { ValoresInstitucionais } from "@/components/valores-institucionais";
import { FotoAcervo } from "@/components/foto-acervo";
import Image from "next/image";
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
      <section aria-labelledby="historia-titulo" className="trajetoria-abertura">
        <Image src="/obras/trajetoria-por-do-sol.webp" alt="" fill priority sizes="100vw" className="trajetoria-foto" />
        <div aria-hidden="true" className="trajetoria-overlay" />
        <div className="site-shell relative z-10">
          <div className="trajetoria-introducao">
            <h1 data-revelar id="historia-titulo">Uma história de <span>crescimento,</span> inovação e compromisso.</h1>
            <p data-revelar>Ao longo da nossa trajetória, seguimos firmes no propósito de levar <strong>energia limpa, economia e sustentabilidade</strong> para mais pessoas e empresas.</p>
          </div>
          <p id="trajetoria-ajuda" className="mt-8 text-sm text-white lg:hidden">Deslize para acompanhar os marcos de 2022 a 2025. Pelo teclado, use as setas.</p>
          <LinhaTempoHistoria>
            <li data-marco className="trajetoria-marco">
              <div className="trajetoria-ano">2022</div>
              <Handshake aria-hidden="true" className="trajetoria-icone" strokeWidth={1.3} />
              <span aria-hidden="true" className="trajetoria-ponto" />
              <div className="trajetoria-conteudo"><h2>Nossas raízes</h2><p>Abertura da empresa.</p></div>
            </li>
            <li data-marco className="trajetoria-marco">
              <div className="trajetoria-ano">2023</div>
              <Award aria-hidden="true" className="trajetoria-icone" strokeWidth={1.3} />
              <span aria-hidden="true" className="trajetoria-ponto" />
              <div className="trajetoria-conteudo"><h2>Criação da identidade própria</h2><p>Mais autoridade e liberdade para crescer.</p></div>
            </li>
            <li data-marco className="trajetoria-marco">
              <div className="trajetoria-ano">2024</div>
              <TrendingUp aria-hidden="true" className="trajetoria-icone" strokeWidth={1.3} />
              <span aria-hidden="true" className="trajetoria-ponto" />
              <div className="trajetoria-conteudo"><h2>Expansão comercial</h2><p>Atendendo todo o estado de São Paulo e Minas Gerais.</p></div>
            </li>
            <li data-marco className="trajetoria-marco">
              <div className="trajetoria-ano">2025</div>
              <SolarPanel aria-hidden="true" className="trajetoria-icone" strokeWidth={1.3} />
              <span aria-hidden="true" className="trajetoria-ponto" />
              <div className="trajetoria-conteudo">
                <h2><span className="trajetoria-numero">3 MW</span> de potência instalada</h2>
                <p>Gerando mais de <strong>R$ 5 milhões</strong> em economia com energia elétrica todos os anos para nossos clientes e ajudando o planeta a se tornar mais sustentável.</p>
                <p className="trajetoria-pendente">Indicadores de 2025 em conferência.</p>
              </div>
            </li>
          </LinhaTempoHistoria>
          <p className="trajetoria-credito">Fotografia ilustrativa: Michael Pointner / Pexels.</p>
        </div>
      </section>
      <section aria-labelledby="texto-historia-titulo" className="site-section">
        <div className="site-shell">
          <div data-revelar className="mx-auto max-w-3xl text-center">
            <h2 id="texto-historia-titulo" className="font-heading text-3xl font-semibold tracking-tight text-brand-blue md:text-4xl">Nossa História</h2>
            <div className="mt-7 space-y-5 text-base leading-loose text-brand-ink">
              <p>A história da Don Energy começou em 2022, em Mococa (SP), quando um pai e seus dois filhos uniram experiência comercial e conhecimento técnico em energia solar. Essa combinação deu origem a uma empresa pautada pela confiança, pela proximidade e pelo cuidado com cada projeto.</p>
              <p>Em 2023, a empresa assumiu sua identidade própria e passou a atuar com a marca Don Energy. Com autonomia para crescer, fortaleceu seus processos e ampliou sua atuação para São Paulo e Minas Gerais, desenvolvendo projetos fotovoltaicos para residências, comércios, indústrias e propriedades rurais.</p>
              <p>Seguimos com o propósito de entender as necessidades de cada cliente e construir relações de longo prazo. Engenharia, qualidade e atendimento próximo orientam o nosso trabalho, da primeira conversa à execução.</p>
            </div>
          </div>
          <figure data-revelar className="mx-auto mt-12 max-w-5xl">
            <FotoAcervo numero="16" sizes="(min-width: 1200px) 1024px, 90vw" className="aspect-[16/9]" />
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">Igreja Nossa Senhora da Luz · Acervo Don Energy</figcaption>
          </figure>
          <div className="relative z-10 mx-auto -mt-5 max-w-5xl">
            <ValoresInstitucionais />
          </div>
        </div>
      </section>
      <section className="site-section">
        <div className="site-shell grid gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <p className="site-eyebrow">O que nos move</p>
            <h2 className="site-title">Engenharia, qualidade<br /> e proximidade.</h2>
          </div>
          <div data-revelar className="max-w-xl">
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
