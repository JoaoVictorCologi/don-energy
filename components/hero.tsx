import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CalculadoraAzume } from "@/components/calculadora-azume";

export function Hero() {
  return <section aria-labelledby="hero-titulo" className="relative isolate overflow-hidden bg-brand-green py-8 text-white md:py-10">
    <picture>
      <source type="image/avif" srcSet="/obras/otimizadas/hero-640.avif 640w, /obras/otimizadas/hero-960.avif 960w, /obras/otimizadas/hero-1440.avif 1440w" sizes="100vw" />
      <img src="/obras/otimizadas/hero-1440.webp" srcSet="/obras/otimizadas/hero-640.webp 640w, /obras/otimizadas/hero-960.webp 960w, /obras/otimizadas/hero-1440.webp 1440w" sizes="100vw" width="1440" height="960" alt="" fetchPriority="high" loading="eager" className="absolute inset-x-0 top-0 -z-20 h-[720px] w-full object-cover object-[58%_center] xl:inset-0 xl:h-full" />
    </picture>
    <div aria-hidden="true" className="hero-r3-overlay absolute inset-x-0 top-0 -z-10 h-[720px] xl:inset-0 xl:h-full" />
    <div className="hero-shell grid items-start gap-9 xl:grid-cols-[0.9fr_1.1fr] xl:gap-12">
      <div className="hero-r3-copy py-7 md:py-10 xl:pt-16"><p className="mb-7 text-xs font-semibold tracking-[0.15em] uppercase">Don Energy · Energia Solar</p>
        <div className="hero-r3-reading">
          <h1 id="hero-titulo" className="max-w-2xl font-heading text-[clamp(2.4rem,4vw,4rem)] leading-[1.13] font-medium tracking-[-0.04em]"><span className="block pb-4 text-white">Sua Energia</span>{" "}<span className="hero-r3-blue-title hero-r3-panel-surface block px-5 pt-5 text-brand-blue">pode custar menos.</span></h1>
          <div className="hero-r3-blue-body hero-r3-panel-surface px-5 pt-5 pb-6 text-brand-blue">
            <p className="max-w-lg text-base leading-relaxed sm:text-lg">Da sua casa ao seu projeto de investimento.<br className="hidden sm:block" /> Conheça as possibilidades para a sua realidade.</p>
            <p className="mt-5 max-w-lg text-sm leading-relaxed">Conheça a calculadora solar da Azume ou converse com a nossa equipe sobre o seu projeto.</p>
            <Link prefetch={false} href="/servicos/" className="mt-5 inline-flex min-h-12 items-center gap-3 text-sm font-semibold underline underline-offset-8">Conheça as soluções <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></Link>
            <p className="mt-7 border-t border-brand-blue/25 pt-4 text-xs leading-relaxed tracking-wide">Residencial · Comercial · Rural</p>
          </div>
        </div>
      </div>
      <CalculadoraAzume />
    </div>
  </section>;
}
