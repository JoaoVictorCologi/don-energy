import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { institucional } from "@/lib/institucional-data";
import { ChamadaContato } from "@/components/chamada-contato";
import { FotoAcervo } from "@/components/foto-acervo";

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
      <section aria-labelledby="historia-titulo" className="site-section bg-brand-soft">
        <div className="site-shell grid items-center gap-9 md:grid-cols-2 lg:gap-16">
          <figure>
            <div className="relative">
              <FotoAcervo numero="02" loading="eager" className="aspect-[4/3]" />
              <h1 id="historia-titulo" className="absolute inset-x-4 bottom-4 w-fit rounded-lg bg-brand-blue px-5 py-3 font-heading text-2xl font-medium text-white sm:text-3xl">
                Nossa História
              </h1>
            </div>
            <figcaption className="mt-3 text-xs text-muted-foreground">Fotografia do acervo Don Energy.</figcaption>
          </figure>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            {institucional.historia.map(paragrafo => <p key={paragrafo}>{paragrafo}</p>)}
          </div>
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
