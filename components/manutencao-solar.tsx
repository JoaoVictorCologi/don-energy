import { ArrowUpRight, Wrench } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ManutencaoSolar() {
  return (
    <section id="manutencao" aria-labelledby="manutencao-titulo" className="site-section bg-brand-soft">
      <div className="site-shell">
        <div className="grid items-center gap-6 rounded-xl border border-border bg-background p-6 md:grid-cols-[auto_1fr_auto] md:gap-8 md:p-9">
          <Wrench aria-hidden="true" className="size-11 rounded-lg bg-brand-soft p-2.5 text-brand-blue" />
          <div>
            <h2 id="manutencao-titulo" className="site-title">Limpeza e Manutenção de Energia Solar</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
              Conte como é seu sistema fotovoltaico e o que você precisa para avaliarmos o atendimento.
            </p>
          </div>
          <a href={buildWhatsAppUrl("Olá! Gostaria de informações sobre limpeza e manutenção do meu sistema de energia solar.")} target="_blank" rel="noopener noreferrer" className="site-link">
            Conversar sobre manutenção <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
