import { localBusiness, siteConfig } from "@/lib/site-config";
import { Depoimentos } from "@/components/depoimentos";
import { ContatoProgressivo } from "@/components/contato-progressivo";
import { Hero } from "@/components/hero";
import { ObrasGallery } from "@/components/obras-gallery";
import { Servicos } from "@/components/servicos";

export default function Home() {
  return (
    <main id="conteudo" tabIndex={-1} className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\u003c") }} />
      <Hero />
      <section aria-labelledby="sobre-titulo" className="bg-muted/30 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 id="sobre-titulo" className="font-heading text-2xl font-bold text-brand-blue">Energia solar com a Don Energy</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{siteConfig.descricao}</p>
        </div>
      </section>
      <Servicos />
      <ObrasGallery />
      <Depoimentos />
      <ContatoProgressivo />
    </main>
  );
}
