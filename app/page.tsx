import { ArrowUpRight, CalendarDays, PanelsTopLeft, UsersRound } from "lucide-react";
import Link from "next/link";
import { localBusiness } from "@/lib/site-config";
import { avaliacoesVisiveis } from "@/lib/depoimentos-data";
import { CalculadoraAzume } from "@/components/calculadora-azume";
import { Depoimentos } from "@/components/depoimentos";
import { Hero } from "@/components/hero";
import { ManutencaoSolar } from "@/components/manutencao-solar";
import { ObrasGallery } from "@/components/obras-gallery";
import { Servicos } from "@/components/servicos";
import { FotoAcervo } from "@/components/foto-acervo";

const topicos = [
  { titulo: "Trajetória em energia solar", texto: "Uma história que começou em família, em Mococa.", Icone: CalendarDays },
  { titulo: "Projetos fotovoltaicos", texto: "Soluções pensadas para o consumo e as condições de cada projeto.", Icone: PanelsTopLeft },
  { titulo: "Equipe própria", texto: "Da engenharia à execução.", Icone: UsersRound },
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
              {topicos.map(({ titulo, texto, Icone }) => (
                <li key={titulo} className="flex items-start gap-4 py-4">
                  <Icone aria-hidden="true" className="size-9 shrink-0 rounded-md bg-brand-soft p-2 text-brand-blue" />
                  <div>
                    <h3 className="font-semibold text-brand-blue">{titulo}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{texto}</p>
                  </div>
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
      <ManutencaoSolar />
      {avaliacoesVisiveis.length > 0 ? <Depoimentos /> : <ObrasGallery />}

      <section className="site-section bg-brand-soft">
        <div className="site-shell">
          <p className="site-eyebrow">Antes da primeira conversa</p>
          <h2 className="site-title">Comece pelo que você já sabe.</h2>
          <div className="mt-12 grid gap-9 md:grid-cols-3">
            {[
              ["01", "Seu contexto", "Conte sua cidade, o perfil do projeto e as características do local."],
              ["02", "Sua conta de energia", "Para pedir uma proposta, tenha em mãos o valor mensal da conta ou o consumo em kWh."],
              ["03", "Suas dúvidas", "Anote o que deseja esclarecer sobre escopo, condições e próximos passos."],
            ].map(([numero, titulo, texto]) => (
              <article key={numero} className="border-t border-border pt-6">
                <span aria-hidden="true" className="text-xs font-semibold text-brand-blue">{numero}</span>
                <h3 className="mt-6 font-heading text-xl font-medium text-brand-blue">{titulo}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-blue py-14 text-white">
        <div className="site-shell">
          <p className="mb-4 text-xs font-semibold tracking-widest uppercase">Vamos conversar</p>
          <h2 className="max-w-2xl font-heading text-3xl leading-snug font-medium">Seu projeto começa com uma conversa.</h2>
          <Link prefetch={false} href="/contato/" className="mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-semibold underline underline-offset-8">
            Veja contatos e localização <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
          </Link>
        </div>
      </section>
      <div className="site-section bg-brand-soft">
        <div className="site-shell max-w-[800px]">
          <CalculadoraAzume />
        </div>
      </div>
    </main>
  );
}
