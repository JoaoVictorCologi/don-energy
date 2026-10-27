import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { QuadroAzume } from "@/components/quadro-azume";
import { integracaoAzume } from "@/lib/integracao-azume";

export function CalculadoraAzume() {
  return <section id="calculadora" aria-labelledby="calculadora-titulo" className="hero-calculadora min-w-0 scroll-mt-[calc(var(--header-height)+1rem)] rounded-xl border border-white/40 bg-white p-1 text-brand-ink shadow-xl sm:p-4">
    <div className="px-2 pt-2 pb-3"><h2 id="calculadora-titulo" className="sr-only">Calculadora solar</h2><p id="azume-aviso" className="text-xs leading-relaxed text-muted-foreground">Calculadora externa da Azume. Resultado sujeito às premissas do fornecedor e à avaliação do projeto.</p></div>
    <QuadroAzume />
    <div className="px-2 pt-3"><a href={integracaoAzume.url} target="_blank" rel="noopener noreferrer" className="site-link text-xs">Abrir calculadora em nova aba <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></a>
      <details className="mt-2 border-t border-border pt-2 text-xs leading-relaxed text-muted-foreground"><summary className="min-h-11 cursor-pointer rounded-sm py-3 font-semibold text-brand-blue">Sobre os dados e os resultados</summary><p className="pb-3">Ao carregar ou preencher o quadro, você utiliza um serviço da Azume, que recebe os dados inseridos. Consulte as informações de privacidade do fornecedor antes de enviar. A ferramenta não substitui a avaliação do projeto pela Don Energy. Se o quadro não abrir, use a opção em nova aba ou fale com a equipe. Para usinas de investimento, solicite uma avaliação específica.</p><div className="flex flex-wrap gap-x-6"><Link prefetch={false} href="/contato/#fale-conosco" className="site-link text-xs">Falar com a equipe</Link><Link href="/privacidade/" prefetch={false} className="site-link text-xs">Privacidade no site</Link></div></details>
    </div>
  </section>;
}
