import { ContatoProgressivo } from "@/components/contato-progressivo";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="novo-hero">
      <picture>
        <source type="image/avif" srcSet="/obras/otimizadas/francini-hero-640.avif 640w, /obras/otimizadas/francini-hero-960.avif 960w, /obras/otimizadas/francini-hero-1440.avif 1440w, /obras/otimizadas/francini-hero-2160.avif 2160w" sizes="100vw" />
        <img src="/obras/otimizadas/francini-hero-1440.webp" srcSet="/obras/otimizadas/francini-hero-640.webp 640w, /obras/otimizadas/francini-hero-960.webp 960w, /obras/otimizadas/francini-hero-1440.webp 1440w, /obras/otimizadas/francini-hero-2160.webp 2160w" sizes="100vw" width="1440" height="960" alt="" fetchPriority="high" loading="eager" className="novo-hero-foto" />
      </picture>
      <div aria-hidden="true" className="novo-hero-overlay" />
      <div className="site-shell novo-hero-conteudo novo-hero-grid">
        <div className="novo-hero-apresentacao">
        <p className="visual-rotulo">Don Energy · Energia Solar</p>
        <h1 id="hero-titulo"><span>Sua Energia</span>{" "}<span>pode custar menos.</span></h1>
        <p className="novo-hero-descricao">Engenharia especializada e projetos personalizados.</p>
        <div className="novo-hero-acoes">
          <a href="#contato" className="visual-botao-claro">Peça sua proposta <ArrowUpRight aria-hidden="true" className="size-4" /></a>
          <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="novo-link-branco">Converse com a nossa equipe sobre o seu projeto <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></a>
        </div>
        </div>
        <ContatoProgressivo />
        <div className="novo-hero-base">
          <p>Residencial · Comercial · Rural · Industrial · Manutenção</p>
          <a href="#sobre" className="novo-explorar">Conheça a Don Energy <ArrowDown aria-hidden="true" className="size-4" /></a>
        </div>
      </div>
    </section>
  );
}
