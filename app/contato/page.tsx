import { IconeWhatsApp } from "@/components/icone-whatsapp";
import { AberturaPagina } from "@/components/abertura-pagina";
import { fundoAcervo } from "@/lib/visual-site";
import type { Metadata } from "next";
import { ArrowUpRight, Clock, MapPin, Phone, Mail } from "lucide-react";
import { CanaisContato } from "@/components/canais-contato";
import { MapaContato } from "@/components/mapa-contato";
import { contato } from "@/lib/contato-data";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const description = "Converse com a Don Energy pelo WhatsApp ou telefone. Atendimento de segunda a sexta, das 8h às 17h30. Veja o endereço em Mococa e como chegar.";
export const metadata: Metadata = {
  title: "Contato — Don Energy", description, alternates: { canonical: "/contato/" },
  openGraph: { title: "Contato — Don Energy", description, url: "/contato/", images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", title: "Contato — Don Energy", description, images: ["/og-image.png"] },
};

export default function ContatoPage() {
  return <main id="conteudo" tabIndex={-1} className="flex-1 contato-renovado">
    <AberturaPagina centralizada rotulo="Contato Don Energy" titulo="Vamos conversar sobre sua energia?" introducao="Fale com a Don Energy sobre o seu projeto solar. Nossa equipe pode conversar com você sobre necessidades, possibilidades e próximos passos." fundo={fundoAcervo("13")} />
    <section id="fale-conosco" tabIndex={-1} aria-labelledby="canais-titulo" className="site-shell contato-canais">
      <h2 id="canais-titulo" className="sr-only">Canais de contato</h2>
      <div className="contato-canais-grid">
        <article data-revelar className="contato-canal contato-canal--principal">
          <span className="contato-canal-icone"><IconeWhatsApp /></span>
          <h3>WhatsApp</h3><p className="contato-canal-valor">{contato.telefoneExibicao}</p>
          <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="contato-canal-link">Falar com a equipe <ArrowUpRight aria-hidden="true" className="size-4" /></a>
        </article>
        <article data-revelar className="contato-canal" style={{ animationDelay: "100ms" }}>
          <span className="contato-canal-icone"><Mail aria-hidden="true" strokeWidth={1.6} /></span>
          <h3>E-mail</h3><p className="contato-canal-valor">{contato.email}</p>
          <a href={"mailto:" + contato.email} className="contato-canal-link">Enviar e-mail <ArrowUpRight aria-hidden="true" className="size-4" /></a>
        </article>
        <article data-revelar className="contato-canal" style={{ animationDelay: "200ms" }}>
          <span className="contato-canal-icone"><Clock aria-hidden="true" strokeWidth={1.6} /></span>
          <h3>Atendimento</h3><dl className="contato-canal-horarios">{contato.horarios.map(item => <div key={item.dias}><dt>{item.dias}</dt><dd>{item.horario}</dd></div>)}</dl>
          <p className="contato-canal-nota">Horário de funcionamento</p>
        </article>
        <article data-revelar className="contato-canal" style={{ animationDelay: "300ms" }}>
          <span className="contato-canal-icone"><MapPin aria-hidden="true" strokeWidth={1.6} /></span>
          <h3>Endereço</h3><address className="contato-canal-endereco">{contato.endereco.linha1}<br />{contato.endereco.linha2}</address>
          <a href="#localizacao" className="contato-canal-link">Ver localização <ArrowUpRight aria-hidden="true" className="size-4" /></a>
        </article>
      </div>
    </section>
    <section id="formulario-proposta" tabIndex={-1} aria-labelledby="contato-apoio-titulo" className="site-shell contato-apoio contato-apoio--mapa">
      <MapaContato embutido />
      <div className="contato-lateral">
        <div data-revelar><p className="site-eyebrow">Seu próximo passo começa por aqui</p><h2 id="contato-apoio-titulo" className="site-title">Vamos falar sobre sua energia?</h2><p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">Comece uma conversa com a equipe pelo WhatsApp, sem preencher um formulário.</p></div>
        <aside aria-labelledby="contato-redes-titulo" className="contato-redes contato-redes--vertical" data-revelar>
          <h3 id="contato-redes-titulo" className="site-eyebrow">Outras formas de conversar</h3>
          <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="contato-whatsapp-direto"><span className="contato-whatsapp-icone"><IconeWhatsApp /></span><span>Falar no WhatsApp</span></a>
          <a href={"tel:" + siteConfig.telefoneInternacional} className="site-link"><Phone aria-hidden="true" className="size-5 shrink-0" /><span>Ligue: {contato.telefoneExibicao}</span></a>
          <CanaisContato mostrarIconesRedes mostrarEmail={false} vertical />
        </aside>
      </div>
    </section>
  </main>;
}
