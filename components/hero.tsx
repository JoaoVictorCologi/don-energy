import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CalculadoraAzume } from "@/components/calculadora-azume";

export function Hero() {
  return <section aria-labelledby="hero-titulo" className="relative isolate overflow-hidden bg-brand-blue py-8 text-white md:py-10">
    <picture>
      <source type="image/avif" srcSet="/obras/otimizadas/hero-640.avif 640w, /obras/otimizadas/hero-960.avif 960w, /obras/otimizadas/hero-1440.avif 1440w" sizes="100vw" />
      {/* Imagem original responsiva preservada; a calculadora é um iframe externo, sem recortes. */}
      <img src="/obras/otimizadas/hero-1440.webp" srcSet="/obras/otimizadas/hero-640.webp 640w, /obras/otimizadas/hero-960.webp 960w, /obras/otimizadas/hero-1440.webp 1440w" sizes="100vw" width="1440" height="960" alt="" fetchPriority="high" loading="eager" className="absolute inset-x-0 top-0 -z-20 h-[720px] w-full object-cover object-[58%_center] xl:inset-0 xl:h-full" />
    </picture>
    <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-linear-to-r xl:inset-0 xl:h-full from-brand-blue/95 via-brand-blue/75 to-brand-blue/35" />
    <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-linear-to-b from-black/35 via-transparent to-brand-blue xl:inset-0 xl:h-full xl:to-black/35" />
    <div className="hero-shell grid items-start gap-9 xl:grid-cols-[0.9fr_1.1fr] xl:gap-12">
      <div className="py-7 md:py-10 xl:pt-16"><p className="mb-7 text-xs font-semibold tracking-[0.15em] uppercase">Don Energy · Mococa e região</p>
        <h1 id="hero-titulo" className="max-w-2xl font-heading text-[clamp(2.4rem,4vw,4rem)] leading-[1.13] font-medium tracking-[-0.04em]">Sua Energia pode custar menos.</h1>
        <p className="mt-7 max-w-lg text-base leading-relaxed text-white/95 sm:text-lg">Da sua casa ao seu projeto de investimento.<br className="hidden sm:block" /> Conheça as possibilidades para a sua realidade.</p>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/95">Conheça a calculadora solar da Azume ou converse com a nossa equipe sobre o seu projeto.</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-4"><Link prefetch={false} href="/#calculadora" className="site-button">Conhecer a calculadora <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></Link><Link prefetch={false} href="/servicos/" className="inline-flex min-h-12 items-center gap-3 text-sm font-medium underline underline-offset-8">Conheça as soluções <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></Link></div>
        <p className="mt-10 border-t border-white/40 pt-5 text-xs leading-relaxed tracking-wide">Residencial · Comercial · Rural · Investimento</p>
      </div>
      <CalculadoraAzume />
    </div>
  </section>;
}
