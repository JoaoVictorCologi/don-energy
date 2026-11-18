import { AberturaPagina } from "@/components/abertura-pagina";
import { fundoAcervo } from "@/lib/visual-site";
import type { Metadata } from "next";
import { PortfolioObras } from "@/components/portfolio-obras";
import { ChamadaContato } from "@/components/chamada-contato";

const description = "Conheça projetos identificados da Don Energy e explore fotografias de instalações solares em diferentes enquadramentos.";
export const metadata: Metadata = {
  title: "Portfólio — Don Energy", description,
  alternates: { canonical: "/obras/" },
  openGraph: { title: "Portfólio — Don Energy", description, url: "/obras/", images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", title: "Portfólio — Don Energy", description, images: ["/og-image.png"] },
};

export default function ObrasPage() {
  return <main id="conteudo" tabIndex={-1} className="flex-1"><AberturaPagina rotulo="Portfólio · Acervo Don Energy" titulo="A energia solar em imagens." introducao="Projetos com nome e contexto, fotografias em diferentes perspectivas. Explore as instalações e conheça também as imagens do nosso acervo." fundo={fundoAcervo("13")} /><PortfolioObras /><ChamadaContato /></main>;
}
