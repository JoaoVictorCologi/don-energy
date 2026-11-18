import { ArrowUpRight, CalendarDays, Hammer, HardHat } from "lucide-react";
import Link from "next/link";
import { localBusiness } from "@/lib/site-config";
import { institucional } from "@/lib/institucional-data";
import { avaliacoesVisiveis } from "@/lib/depoimentos-data";
import { CalculadoraAzume } from "@/components/calculadora-azume";
import { Depoimentos } from "@/components/depoimentos";
import { FundoFotografico } from "@/components/fundo-fotografico";
import { Hero } from "@/components/hero";
import { ObrasGallery } from "@/components/obras-gallery";
import { Servicos } from "@/components/servicos";
import { FotoAcervo } from "@/components/foto-acervo";
import { fundoPorDoSol } from "@/lib/visual-site";

const topicos = [
  { texto: "Mais de 4 anos no mercado!", Icone: CalendarDays },
  { texto: "Projetos fotovoltaicos", Icone: Hammer },
  { texto: "Equipe especializada", Icone: HardHat },
];

export default function Home() {
  return (
    <main id="conteudo" tabIndex={-1} className="novo-inicio flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} />
      <Hero />
      <section id="sobre" tabIndex={-1} aria-labelledby="sobre-titulo" className="site-section novo-sobre">
        <div className="site-shell">
          <div className="novo-cabecalho-secao" data-revelar>
            <div><p className="site-eyebrow">Nossa origem, nosso jeito de trabalhar</p><h2 id="sobre-titulo" className="site-title">A Don Energy</h2></div>
            <p>{institucional.historia[0]}</p>
          </div>
          <div className="novo-sobre-composicao">
            <div className="novo-sobre-painel" data-revelar>
              <ul>{topicos.map(({ texto, Icone }) => <li key={texto}><span className="novo-icone-circulo"><Icone aria-hidden="true" className="size-6" strokeWidth={1.6} /></span><p>{texto}</p></li>)}</ul>
              <Link prefetch={false} href="/nossa-historia/" className="novo-link-branco">Nossa História <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
            </div>
            <figure data-revelar className="novo-foto-principal">
              <FotoAcervo numero="04" sizes="(min-width: 1024px) 65vw, 100vw" />
              <figcaption>Fotografia do acervo Don Energy.</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <Servicos />
      {avaliacoesVisiveis.length > 0 ? <Depoimentos /> : <ObrasGallery />}
      <section aria-label="Calculadora solar" className="site-section novo-calculadora">
        <FundoFotografico fundo={fundoPorDoSol} />
        <div className="site-shell novo-calculadora-grid">
          <div data-revelar className="novo-calculadora-contexto"><p className="visual-rotulo">Explore as possibilidades</p><h2>Conheça a calculadora solar da Azume.</h2><p>Calculadora externa da Azume. Resultado sujeito às premissas do fornecedor e à avaliação do projeto.</p><p>Você também pode conversar com a nossa equipe sobre o seu projeto.</p><Link href="/contato/" prefetch={false} className="novo-link-branco">Falar com a equipe <ArrowUpRight aria-hidden="true" className="size-4" /></Link></div>
          <CalculadoraAzume />
        </div>
      </section>
      <section data-revelar className="novo-faixa-final">
        <div className="site-shell"><p className="visual-rotulo">Vamos conversar</p><div><h2>Seu projeto começa com uma conversa.</h2><Link prefetch={false} href="/contato/" className="visual-botao-claro">Veja contatos e localização <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></Link></div></div>
      </section>
    </main>
  );
}
