import type { Metadata } from "next";
import { ArrowUpRight, Clock, MapPin, Phone, MessageCircle } from "lucide-react";
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
  return <main id="conteudo" tabIndex={-1} className="flex-1"><section id="fale-conosco" className="site-shell scroll-mt-[var(--header-height)] pt-14 pb-16 md:pt-20"><p className="site-eyebrow">Vamos conversar</p><h1 className="max-w-3xl font-heading text-4xl leading-tight font-medium tracking-[-0.04em] text-brand-green-dark sm:text-5xl">Seu próximo passo<br /> começa por aqui.</h1><p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">Fale com a Don Energy sobre o seu projeto solar. Nossa equipe pode conversar com você sobre necessidades, possibilidades e próximos passos.</p>
    <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16"><div id="formulario-proposta" className="scroll-mt-[calc(var(--header-height)+1rem)] rounded-md bg-brand-forest p-7 text-white sm:p-10"><MessageCircle aria-hidden="true" className="mb-5 size-7 text-brand-green" /><h2 className="font-heading text-2xl font-medium">Vamos falar sobre sua energia?</h2><p className="mt-4 text-sm leading-relaxed text-white/90">Comece uma conversa com a equipe pelo WhatsApp, sem preencher um formulário.</p><a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="site-button mt-7">Falar no WhatsApp <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></a><p className="mt-5 text-sm text-white/90">Ou ligue: <a href={"tel:"+siteConfig.telefoneInternacional} className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">{contato.telefoneExibicao}</a></p></div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1"><div><MapPin aria-hidden="true" className="mb-4 size-5 text-brand-green-dark" /><h2 className="font-heading text-xl font-medium text-brand-green-dark">Encontre a gente</h2><address className="mt-3 text-sm leading-relaxed text-muted-foreground not-italic">{contato.endereco.linha1}<br />{contato.endereco.linha2}</address></div><div className="border-t border-border pt-7 sm:border-t-0 sm:pt-0 lg:border-t lg:pt-7"><Clock aria-hidden="true" className="mb-4 size-5 text-brand-green-dark" /><h2 className="font-heading text-xl font-medium text-brand-green-dark">Atendimento</h2><dl className="mt-3 text-sm">{contato.horarios.map(item => <div key={item.dias}><dt className="font-medium">{item.dias}</dt><dd className="mt-1 text-muted-foreground">{item.horario}</dd></div>)}</dl><a href={"tel:"+siteConfig.telefoneInternacional} className="site-link mt-3"><Phone aria-hidden="true" className="size-4" />{contato.telefoneExibicao}</a></div></div>
    </div></section><MapaContato /></main>;
}
