import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { ContatoPagina } from "@/components/contato-pagina";
import { ContatoAlternativo } from "@/components/contato-progressivo";
import { MapaContato } from "@/components/mapa-contato";
import { contato } from "@/lib/contato-data";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const description = "Fale com a Don Energy em Mococa: endereço, telefone, horários e formulário para solicitar sua proposta de energia solar pelo WhatsApp.";
export const metadata: Metadata = {
  title: "Contato — Don Energy", description,
  alternates: { canonical: "/contato/" },
  openGraph: { title: "Contato — Don Energy", description, url: "/contato/", images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", title: "Contato — Don Energy", description, images: ["/og-image.png"] },
};

export default function ContatoPage() {
  return (
    <main id="conteudo" tabIndex={-1} className="flex-1">
      <section className="border-b bg-muted/30 px-6 py-12 sm:py-16"><div className="mx-auto max-w-6xl"><Link prefetch={false} href="/" className="mb-7 inline-flex min-h-11 items-center text-sm text-brand-blue underline underline-offset-4">← Página inicial</Link><p className="mb-4 text-sm font-semibold tracking-widest text-brand-blue uppercase">Vamos conversar</p><h1 className="max-w-3xl font-heading text-4xl leading-tight font-bold tracking-tight text-brand-blue sm:text-5xl">Seu projeto solar começa aqui.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Fale sobre sua casa, empresa, propriedade rural ou usina de investimento. Escolha como prefere entrar em contato com a Don Energy.</p><div className="mt-7 flex flex-wrap gap-x-6 gap-y-3"><a href="#formulario-proposta" className="inline-flex min-h-12 items-center rounded-md bg-brand-orange px-6 font-semibold text-brand-ink hover:bg-brand-orange/90">Peça sua proposta</a><a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold text-brand-blue underline underline-offset-4">Falar direto no WhatsApp</a></div></div></section>
      <section aria-label="Informações de contato" className="mx-auto grid max-w-6xl gap-6 px-6 pt-12 md:grid-cols-3">
        <div className="rounded-xl border p-6"><Phone aria-hidden="true" className="mb-4 size-6 text-brand-blue" /><h2 className="font-heading text-xl font-semibold">Telefone e WhatsApp</h2><a href={`tel:${siteConfig.telefoneInternacional}`} className="mt-3 inline-flex min-h-11 items-center text-brand-blue underline underline-offset-4">{contato.telefoneExibicao}</a><p className="mt-1 text-sm text-muted-foreground">Toque no número para ligar ou use o botão de WhatsApp.</p></div>
        <div className="rounded-xl border p-6"><MapPin aria-hidden="true" className="mb-4 size-6 text-brand-blue" /><h2 className="font-heading text-xl font-semibold">Endereço</h2><address className="mt-4 leading-relaxed text-muted-foreground not-italic">{contato.endereco.linha1}<br />{contato.endereco.linha2}</address></div>
        <div className="rounded-xl border p-6"><Clock aria-hidden="true" className="mb-4 size-6 text-brand-blue" /><h2 className="font-heading text-xl font-semibold">Atendimento</h2><dl className="mt-4 space-y-3 text-sm">{contato.horarios.map((item) => <div key={item.dias}><dt className="font-medium">{item.dias}</dt><dd className="mt-1 text-muted-foreground">{item.horario}</dd></div>)}</dl></div>
      </section>
      <section id="formulario-proposta" aria-label="Solicitar proposta solar" className="min-h-[900px] scroll-mt-[var(--header-height)] sm:min-h-[760px]">
        <Suspense fallback={<ContatoAlternativo />}><ContatoPagina /></Suspense>
      </section>
      <MapaContato />
    </main>
  );
}
