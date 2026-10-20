import Link from "next/link";
import { ServicoCard } from "@/components/servico-card";
import { servicos } from "@/lib/servicos-data";

export function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-[var(--header-height)] bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Soluções para cada perfil de cliente</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((servico) => <ServicoCard key={servico.id} servico={servico} inicial />)}
        </div>
        <div className="mt-8 text-center"><Link prefetch={false} href="/servicos/" className="inline-flex min-h-11 items-center font-semibold text-brand-blue underline underline-offset-4">Ver todas as soluções solares <span aria-hidden="true" className="ml-2">→</span></Link></div>
      </div>
    </section>
  );
}
