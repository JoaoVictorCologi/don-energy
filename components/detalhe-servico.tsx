import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { Servico } from "@/lib/servicos-data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function DetalheServico({ servico }: { servico: Servico }) {
  return (
    <>
      <section className="border-b bg-muted/30 px-6 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <nav aria-label="Caminho da página" className="mb-7 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground"><Link prefetch={false} href="/" className="inline-flex min-h-11 items-center underline underline-offset-4">Início</Link><span aria-hidden="true">/</span><Link prefetch={false} href="/servicos/" className="inline-flex min-h-11 items-center underline underline-offset-4">Serviços</Link><span aria-hidden="true">/</span><span aria-current="page">{servico.titulo}</span></nav>
            <p className="mb-4 text-sm font-semibold tracking-widest text-brand-blue uppercase">Don Energy · Mococa e região</p>
            <h1 className="font-heading text-4xl leading-tight font-bold tracking-tight text-brand-blue sm:text-5xl">{servico.nome}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{servico.resumo}</p>
          </div>
          <aside aria-label="Solicitar proposta" className="rounded-2xl border border-brand-green/30 bg-background p-6 shadow-sm sm:p-8">
            <p className="font-heading text-2xl font-semibold text-brand-blue">Seu projeto começa com uma conversa.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Conte o que você precisa e tire suas dúvidas com a Don Energy.</p>
            <Link prefetch={false} href={`/contato/?servico=${servico.slug}#formulario-proposta`} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-orange px-4 text-center font-semibold text-brand-ink hover:bg-brand-orange/90">Peça sua proposta <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></Link>
            <a href={buildWhatsAppUrl(servico.mensagem)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center font-semibold text-brand-blue underline underline-offset-4">Conversar direto no WhatsApp</a>
          </aside>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <section aria-labelledby="necessidade"><h2 id="necessidade" className="font-heading text-2xl font-bold text-brand-blue">O que considerar no seu projeto</h2><p className="mt-5 leading-relaxed text-muted-foreground">{servico.necessidade}</p></section>
          <section aria-labelledby="solucao"><h2 id="solucao" className="font-heading text-2xl font-bold text-brand-blue">Uma solução para o seu perfil</h2><p className="mt-5 leading-relaxed text-muted-foreground">{servico.solucao}</p><ul className="mt-6 grid gap-3">{servico.pontos.map((ponto) => <li key={ponto} className="flex gap-3"><Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand-green" /><span>{ponto}</span></li>)}</ul></section>
        </div>
        <section aria-labelledby="funcionamento" className="mt-16 border-t pt-14">
          <h2 id="funcionamento" className="font-heading text-3xl font-bold text-brand-blue">Informações para a primeira conversa</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">{servico.etapas.map((etapa, i) => <li key={etapa.titulo} className="rounded-xl border bg-muted/20 p-6"><span aria-hidden="true" className="font-heading text-3xl font-bold text-brand-blue">0{i + 1}</span><h3 className="mt-4 font-heading text-xl font-semibold">{etapa.titulo}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{etapa.texto}</p></li>)}</ol>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Escopo, prazos e responsabilidades precisam ser esclarecidos na proposta do projeto.</p>
        </section>
        <section aria-labelledby="duvidas" className="mt-16 max-w-3xl">
          <h2 id="duvidas" className="font-heading text-3xl font-bold text-brand-blue">Dúvidas frequentes</h2>
          <div className="mt-7 divide-y border-y">{servico.faq.map((item) => <details key={item.pergunta} className="group py-2"><summary className="min-h-12 cursor-pointer rounded-sm py-4 pr-3 font-semibold marker:text-brand-blue">{item.pergunta}</summary><p className="pb-5 leading-relaxed text-muted-foreground">{item.resposta}</p></details>)}</div>
        </section>
        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3"><Link prefetch={false} href={`/contato/?servico=${servico.slug}#formulario-proposta`} className="inline-flex min-h-12 items-center rounded-md bg-brand-orange px-6 font-semibold text-brand-ink hover:bg-brand-orange/90">Conversar sobre meu projeto</Link><Link prefetch={false} href="/servicos/" className="inline-flex min-h-11 items-center font-semibold text-brand-blue underline underline-offset-4">Conhecer os outros perfis solares</Link></div>
      </div>
    </>
  );
}
