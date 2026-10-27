import { ArrowUpRight as Seta } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return <section className="relative isolate flex min-h-[680px] flex-col justify-center overflow-hidden bg-brand-forest pt-[calc(var(--header-height)+4rem)] pb-28 text-white sm:min-h-[760px]">
    <picture>
      <source type="image/avif" srcSet="/obras/otimizadas/hero-640.avif 640w, /obras/otimizadas/hero-960.avif 960w, /obras/otimizadas/hero-1440.avif 1440w" sizes="100vw" />
      {/* Arquivos responsivos locais: nenhum otimizador de servidor. */}
      <img src="/obras/otimizadas/hero-1440.webp" srcSet="/obras/otimizadas/hero-640.webp 640w, /obras/otimizadas/hero-960.webp 960w, /obras/otimizadas/hero-1440.webp 1440w" sizes="100vw" width="1440" height="960" alt="" fetchPriority="high" loading="eager" className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center]" />
    </picture>
    <div className="absolute inset-0 -z-10 bg-linear-to-r from-brand-forest/90 via-brand-forest/65 to-brand-forest/35" />
    <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/45 via-transparent to-brand-forest/40" />
    <div className="site-shell"><p className="mb-7 text-xs font-semibold tracking-[0.15em] uppercase">Don Energy · Mococa e região</p><h1 className="max-w-3xl font-heading text-[clamp(2.4rem,4.8vw,4.4rem)] leading-[1.13] font-medium tracking-[-0.04em]">Sua Energia pode custar menos.</h1><p className="mt-7 max-w-lg text-base leading-relaxed text-white/95 sm:text-lg">Da sua casa ao seu projeto de investimento.<br className="hidden sm:block" /> Conheça as possibilidades para a sua realidade.</p><p className="mt-7 text-sm leading-relaxed text-white">Conheça a calculadora solar da Azume ou converse com a nossa equipe sobre o seu projeto.</p><div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4"><Link prefetch={false} href="/#calculadora" className="site-button">Conhecer a calculadora <Seta aria-hidden="true" className="size-4 shrink-0" /></Link><Link prefetch={false} href="/servicos/" className="inline-flex min-h-12 items-center gap-3 text-sm font-medium underline underline-offset-8">Conheça as soluções <Seta aria-hidden="true" className="size-4 shrink-0" /></Link></div></div>
    <div className="absolute inset-x-0 bottom-0"><div className="site-shell"><p className="border-t border-white/30 py-6 text-xs leading-relaxed tracking-wide">Residencial · Comercial · Rural · Investimento</p></div></div>
  </section>;
}
