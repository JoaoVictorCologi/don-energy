import Link from "next/link";
import type { Metadata } from "next";
import { ServicoCard } from "@/components/servico-card";
import { servicos } from "@/lib/servicos-data";

const description = "Conheça as soluções da Don Energy em energia solar residencial, comercial, rural e usinas de investimento em Mococa e região.";
export const metadata: Metadata = {
  title: "Soluções em energia solar — Don Energy", description,
  alternates: { canonical: "/servicos/" },
  openGraph: { title: "Soluções em energia solar — Don Energy", description, url: "/servicos/", images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", title: "Soluções em energia solar — Don Energy", description, images: ["/og-image.png"] },
};

export default function ServicosPage() {
  return (
    <main id="conteudo" tabIndex={-1} className="flex-1">
      <section className="border-b bg-muted/30 px-6 py-12 sm:py-16"><div className="mx-auto max-w-6xl"><Link prefetch={false} href="/" className="mb-7 inline-flex min-h-11 items-center text-sm text-brand-blue underline underline-offset-4">← Página inicial</Link><p className="mb-4 text-sm font-semibold tracking-widest text-brand-blue uppercase">Soluções Don Energy</p><h1 className="max-w-3xl font-heading text-4xl leading-tight font-bold tracking-tight text-brand-blue sm:text-5xl">Energia solar para cada perfil de projeto.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Para sua casa, seu negócio, sua propriedade rural ou uma usina de investimento. Conheça as possibilidades e converse sobre o que você precisa.</p></div></section>
      <section aria-labelledby="perfis" className="mx-auto max-w-6xl px-6 py-16 sm:py-20"><h2 id="perfis" className="font-heading text-2xl font-bold text-brand-blue">Qual é o seu perfil?</h2><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{servicos.map((servico) => <ServicoCard key={servico.id} servico={servico} />)}</div><div className="mt-12 rounded-xl border bg-muted/30 p-6 sm:p-8"><h2 className="font-heading text-2xl font-semibold text-brand-blue">Vamos entender seu projeto?</h2><p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">Conte sua cidade e o perfil de interesse. A Don Energy orienta a primeira conversa para avaliar as possibilidades.</p><Link prefetch={false} href="/contato/#formulario-proposta" className="mt-5 inline-flex min-h-12 items-center rounded-md bg-brand-orange px-6 font-semibold text-brand-ink hover:bg-brand-orange/90">Peça sua proposta</Link></div></section>
    </main>
  );
}
