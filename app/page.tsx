import { ArrowUpRight, CalendarDays, Hammer, HardHat } from "lucide-react";
import Link from "next/link";
import { localBusiness } from "@/lib/site-config";
import { avaliacoesVisiveis } from "@/lib/depoimentos-data";
import { CalculadoraAzume } from "@/components/calculadora-azume";
import { Depoimentos } from "@/components/depoimentos";
import { Hero } from "@/components/hero";
import { ObrasGallery } from "@/components/obras-gallery";
import { Servicos } from "@/components/servicos";
import { FotoAcervo } from "@/components/foto-acervo";

const topicos = [
  { texto: "Mais de 4 anos no mercado!", Icone: CalendarDays },
  { texto: "Projetos fotovoltaicos", Icone: Hammer },
  { texto: "Equipe especializada", Icone: HardHat },
];

export default function Home() {
  return (
    <main id="conteudo" tabIndex={-1} className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} />
      <Hero />

      <section aria-labelledby="sobre-titulo" className="site-section">
        <div className="site-shell grid items-center gap-10 md:grid-cols-2 lg:gap-24">
          <div>
            <h2 id="sobre-titulo" className="site-title">A Don Energy</h2>
            <ul className="mt-7 divide-y divide-border">
              {topicos.map(({ texto, Icone }) => (
                <li key={texto} className="flex items-center gap-4 py-5">
                  <Icone aria-hidden="true" className="size-12 shrink-0 rounded-md bg-brand-soft p-2.5 text-brand-blue" />
                  <p className="font-heading text-xl leading-snug font-medium text-brand-blue sm:text-2xl">{texto}</p>
                </li>
              ))}
            </ul>
            <Link prefetch={false} href="/nossa-historia/" className="site-button mt-5">
              Nossa História <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
            </Link>
          </div>
          <figure>
            <FotoAcervo numero="03" />
            <figcaption className="mt-3 text-xs text-muted-foreground">Fotografia do acervo Don Energy.</figcaption>
          </figure>
        </div>
      </section>

      <Servicos />
      {avaliacoesVisiveis.length > 0 ? <Depoimentos /> : <ObrasGallery />}



      <div className="site-section bg-brand-soft">
        <div className="site-shell max-w-[800px]">
          <CalculadoraAzume />
        </div>
      </div>
      <section className="bg-brand-blue py-14 text-white">
        <div className="site-shell">
          <p className="mb-4 text-xs font-semibold tracking-widest uppercase">Vamos conversar</p>
          <h2 className="max-w-2xl font-heading text-3xl leading-snug font-medium">Seu projeto começa com uma conversa.</h2>
          <Link prefetch={false} href="/contato/" className="mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-semibold underline underline-offset-8">
            Veja contatos e localização <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
          </Link>
        </div>
      </section>
    </main>
  );
}
