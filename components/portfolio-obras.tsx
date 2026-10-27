import { fotosSemObra, obrasConfirmadas } from "@/lib/obras-data";
import { GaleriaFotos } from "@/components/galeria-fotos";
import { ProjetoCard } from "@/components/projeto-card";

export function PortfolioObras() {
  return <>
    <section aria-labelledby="projetos-titulo" className="site-shell pb-20 md:pb-24"><div className="mb-9 flex flex-col justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-end"><h2 id="projetos-titulo" className="font-heading text-2xl font-medium tracking-tight text-brand-blue">Um olhar para cada projeto.</h2><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Conheça a instalação e veja sua fotografia em enquadramento completo.</p></div><div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{obrasConfirmadas.map(obra => <ProjetoCard key={obra.id} obra={obra} />)}</div></section>
    <section aria-labelledby="acervo-titulo" className="site-shell pb-20 md:pb-24"><div className="mb-9 flex flex-col justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-end"><h2 id="acervo-titulo" className="font-heading text-2xl font-medium tracking-tight text-brand-blue">Mais imagens do nosso acervo.</h2><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Fotografias em diferentes perspectivas. Escolha uma imagem para ampliar.</p></div><GaleriaFotos fotos={fotosSemObra} /></section>
  </>;
}
