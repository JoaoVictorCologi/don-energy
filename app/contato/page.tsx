import { AberturaPagina } from "@/components/abertura-pagina";
import { fundoPorDoSol } from "@/lib/visual-site";
import type { Metadata } from "next";
import { ArrowUpRight, Clock, MapPin, Phone, MessageCircle } from "lucide-react";
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
  return <main id="conteudo" tabIndex={-1} className="flex-1"><AberturaPagina rotulo="Vamos conversar" titulo="Seu próximo passo começa por aqui." introducao="Fale com a Don Energy sobre o seu projeto solar. Nossa equipe pode conversar com você sobre necessidades, possibilidades e próximos passos." fundo={fundoPorDoSol} /><section id="fale-conosco" className="site-shell visual-conteudo novo-contato scroll-mt-6 pb-16">
    <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16"><div data-revelar id="formulario-proposta" className="scroll-mt-[calc(var(--header-height)+1rem)] visual-painel-contato rounded-2xl bg-brand-blue p-7 text-white sm:p-10"><MessageCircle aria-hidden="true" className="mb-5 size-7 text-brand-green" /><h2 className="font-heading text-2xl font-medium">Vamos falar sobre sua energia?</h2><p className="mt-4 text-sm leading-relaxed text-white/90">Comece uma conversa com a equipe pelo WhatsApp, sem preencher um formulário.</p><a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="visual-botao-claro mt-7">Falar no WhatsApp <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></a><p className="mt-5 text-sm text-white/90">Ou ligue: <a href={"tel:"+siteConfig.telefoneInternacional} className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">{contato.telefoneExibicao}</a></p></div>
      <div className="novo-contato-info"><div data-revelar><MapPin aria-hidden="true" className="mb-4 size-5 text-brand-blue" /><h2 className="font-heading text-xl font-medium text-brand-blue">Encontre a gente</h2><address className="mt-3 text-sm leading-relaxed text-muted-foreground not-italic">{contato.endereco.linha1}<br />{contato.endereco.linha2}</address></div><div data-revelar><Clock aria-hidden="true" className="mb-4 size-5 text-brand-blue" /><h2 className="font-heading text-xl font-medium text-brand-blue">Atendimento</h2><dl className="mt-3 text-sm">{contato.horarios.map(item => <div key={item.dias}><dt className="font-medium">{item.dias}</dt><dd className="mt-1 text-muted-foreground">{item.horario}</dd></div>)}</dl><a href={"tel:"+siteConfig.telefoneInternacional} className="site-link mt-3"><Phone aria-hidden="true" className="size-4" />{contato.telefoneExibicao}</a><CanaisContato mostrarIconesRedes /></div></div>
    </div></section><MapaContato /></main>;
}
