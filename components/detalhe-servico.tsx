import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import type { Servico } from "@/lib/servicos-data";
import { apresentacaoSolar } from "@/lib/apresentacao-solar";
import { AberturaPagina } from "@/components/abertura-pagina";
import { EtapasProposta } from "@/components/etapas-proposta";
import { VisualServico } from "@/components/visual-servico";
import { fundoServico } from "@/lib/visual-site";
import { ChamadaContato } from "@/components/chamada-contato";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function DetalheServico({ servico }: { servico: Servico }) {
  const visual = apresentacaoSolar[servico.id];
  return <>
    <AberturaPagina titulo={visual.abertura} rotulo={servico.nome} introducao={servico.resumo} fundo={fundoServico(servico.id)} caminho={[{ titulo: "Início", href: "/" }, { titulo: "Soluções", href: "/servicos/" }]}><Link prefetch={false} href="/contato/#fale-conosco" className="visual-botao-claro">Conversar sobre meu projeto <ArrowUpRight aria-hidden="true" className="size-4" /></Link></AberturaPagina>
    <section className="site-section novo-contexto-servico"><div className="site-shell">
      <div className="novo-cabecalho-secao" data-revelar><div><p className="site-eyebrow">O que considerar</p><h2 className="site-title">{visual.contexto}</h2></div><p>{servico.necessidade}</p></div>
      <div className="novo-contexto-grid">
        <figure data-revelar className="novo-contexto-midia"><VisualServico perfil={servico.id} className="aspect-[4/3]" /><figcaption>{visual.legenda}</figcaption></figure>
        <div data-revelar className="novo-info-projeto"><p className="visual-rotulo">Seu contexto importa</p><h3>Informações para avaliar o projeto</h3><p>{servico.solucao}</p><ul>{servico.pontos.map(ponto => <li key={ponto}><Check aria-hidden="true" className="size-5 shrink-0" /><span>{ponto}</span></li>)}</ul></div>
      </div>
    </div></section>
    <EtapasProposta etapas={servico.etapas} />
    <section className="site-section novo-perguntas"><div className="site-shell grid gap-10 md:grid-cols-[1fr_1.2fr] lg:gap-20"><div data-revelar><p className="site-eyebrow">Dúvidas deste perfil</p><h2 className="site-title">Para começar com mais clareza.</h2></div><div>{servico.faq.map(item => <details key={item.pergunta}><summary>{item.pergunta}</summary><p>{item.resposta}</p></details>)}</div></div></section>
    <nav aria-label="Próximos caminhos deste serviço" className="servico-proximos"><div className="site-shell servico-proximos-grid">
      <div><p className="site-eyebrow">Continue por aqui</p><h2>O próximo passo é seu.</h2></div>
      <Link prefetch={false} href="/servicos/" className="servico-proximo-link"><ArrowLeft aria-hidden="true" className="size-5 shrink-0" /><span>Conhecer os outros perfis solares</span></Link>
      <a href={buildWhatsAppUrl(servico.mensagem)} target="_blank" rel="noopener noreferrer" className="servico-proximo-link servico-proximo-link--principal"><span>Conversar direto no WhatsApp</span><ArrowUpRight aria-hidden="true" className="size-5 shrink-0" /></a>
    </div></nav>
    <ChamadaContato slug={servico.slug} />
  </>;
}
