import { FundoFotografico } from "@/components/fundo-fotografico";
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
      <FundoFotografico fundo={fundo} prioridade />
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
