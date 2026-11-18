import { fotosSemObra, obrasConfirmadas } from "@/lib/obras-data";
import { GaleriaFotos } from "@/components/galeria-fotos";
import { ProjetoCard } from "@/components/projeto-card";

export function PortfolioObras() {
  return <>
    <section aria-labelledby="projetos-titulo" className="site-section novo-projetos"><div className="site-shell"><div className="novo-cabecalho-secao" data-revelar><div><p className="site-eyebrow">Projetos Don Energy</p><h2 id="projetos-titulo" className="site-title">Um olhar para cada projeto.</h2></div><p>Conheça a instalação e veja sua fotografia em enquadramento completo.</p></div><div className="novo-projetos-grid">{obrasConfirmadas.map(obra => <ProjetoCard key={obra.id} obra={obra} />)}</div></div></section>
    <section aria-labelledby="acervo-titulo" className="site-section novo-acervo"><div className="site-shell"><div className="novo-cabecalho-secao" data-revelar><div><p className="visual-rotulo">Outros olhares</p><h2 id="acervo-titulo" className="site-title">Mais imagens do nosso acervo.</h2></div><p>Fotografias em diferentes perspectivas. Escolha uma imagem para ampliar.</p></div><GaleriaFotos fotos={fotosSemObra} /></div></section>
  </>;
}
