import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { QuadroAzume } from "@/components/quadro-azume";
import { integracaoAzume } from "@/lib/integracao-azume";

export function CalculadoraAzume() {
  return <section id="calculadora" aria-labelledby="calculadora-titulo" className="site-section scroll-mt-[var(--header-height)] bg-brand-soft">
    <div className="site-shell"><div className="mb-9 grid items-end gap-6 md:grid-cols-[1.2fr_1fr]"><div><p className="site-eyebrow">Um ponto de partida</p><h2 id="calculadora-titulo" className="site-title">Conheça as possibilidades<br /> para a sua energia.</h2></div><p id="azume-aviso" className="text-sm leading-relaxed text-muted-foreground">Calculadora externa fornecida pela Azume. Seus resultados dependem das informações e premissas do fornecedor e não substituem uma avaliação do projeto pela Don Energy.</p></div>
      <QuadroAzume />
      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-4"><a href={integracaoAzume.url} target="_blank" rel="noopener noreferrer" className="site-link">Abrir calculadora em nova aba <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></a><Link prefetch={false} href="/contato/#fale-conosco" className="site-link">Prefere conversar com a equipe? <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></Link></div>
      <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted-foreground">Ao carregar ou preencher o quadro, você utiliza um serviço da Azume, que recebe os dados inseridos. Consulte as informações de privacidade do fornecedor antes de enviar. Se o quadro não abrir, use a opção em nova aba ou fale com a Don Energy. Para usinas de investimento, converse diretamente com a equipe sobre uma avaliação específica. <Link href="/privacidade/" prefetch={false} className="underline underline-offset-4">Privacidade no site</Link>.</p>
    </div>
  </section>;
}
