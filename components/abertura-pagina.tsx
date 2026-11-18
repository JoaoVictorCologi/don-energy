import Link from "next/link";
import type { ReactNode } from "react";
import type { FundoVisual } from "@/lib/visual-site";

type Props = {
  titulo: string;
  introducao: string;
  rotulo: string;
  fundo: FundoVisual;
  id?: string;
  caminho?: readonly { titulo: string; href: string }[];
  children?: ReactNode;
};

export function AberturaPagina({ titulo, introducao, rotulo, fundo, id = "pagina-titulo", caminho, children }: Props) {
  return (
    <section aria-labelledby={id} className="visual-abertura">
      {/* Imagem decorativa com srcSet local, sem otimizador em produção estática. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={fundo.src} srcSet={fundo.srcSet} sizes="100vw" width={1920} height={1080} alt="" fetchPriority="high" loading="eager" className="visual-fundo" style={{ objectPosition: fundo.posicao }} />
      <div aria-hidden="true" className="visual-sobreposicao" />
      <div className="site-shell relative z-10">
        {caminho && <nav aria-label="Caminho da página" className="visual-caminho">
          {caminho.map(item => <span key={item.href} className="inline-flex items-center gap-3"><Link prefetch={false} href={item.href}>{item.titulo}</Link><span aria-hidden="true">/</span></span>)}
          <span aria-current="page">{rotulo}</span>
        </nav>}
        <div className="visual-abertura-texto">
          <p className="visual-rotulo">{rotulo}</p>
          <h1 id={id}>{titulo}</h1>
          <p className="visual-introducao">{introducao}</p>
          {children && <div className="mt-7">{children}</div>}
        </div>
        <p className="visual-credito">{fundo.credito}</p>
      </div>
    </section>
  );
}
