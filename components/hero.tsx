import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ContatoProgressivo } from "@/components/contato-progressivo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="relative isolate overflow-hidden bg-brand-green pb-10 pt-[calc(var(--header-height)+2rem)] text-white md:pb-14">
      <picture>
        <source type="image/avif" srcSet="/obras/otimizadas/hero-640.avif 640w, /obras/otimizadas/hero-960.avif 960w, /obras/otimizadas/hero-1440.avif 1440w" sizes="100vw" />
        <img src="/obras/otimizadas/hero-1440.webp" srcSet="/obras/otimizadas/hero-640.webp 640w, /obras/otimizadas/hero-960.webp 960w, /obras/otimizadas/hero-1440.webp 1440w" sizes="100vw" width="1440" height="960" alt="" fetchPriority="high" loading="eager" className="absolute inset-x-0 top-0 -z-20 h-[720px] w-full object-cover object-[58%_center] xl:inset-0 xl:h-full" />
      </picture>
      <div aria-hidden="true" className="hero-r3-overlay absolute inset-x-0 top-0 -z-10 h-[720px] xl:inset-0 xl:h-full" />
      <div className="hero-shell grid items-start gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:gap-12">
        <div className="py-5 xl:pt-16">
          <p className="mb-6 text-sm font-semibold tracking-[0.15em] uppercase sm:text-base">Don Energy · Energia Solar</p>
          <h1 id="hero-titulo" className="max-w-2xl font-heading text-[clamp(2.4rem,4vw,4rem)] leading-[1.13] font-medium tracking-[-0.04em]">
            Sua Energia <span className="text-[#384c95] [-webkit-text-stroke:3px_#edf2ff] [paint-order:stroke_fill]">pode custar menos.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed">Engenharia especializada e projetos personalizados.</p>
          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2">
            <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4">
              Converse com a nossa equipe sobre o seu projeto <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
            </a>
            <Link prefetch={false} href="/servicos/" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4">
              Conheça as soluções <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
            </Link>
          </div>
          <p className="mt-6 border-t border-white/30 pt-5 text-sm leading-relaxed">Residencial · Comercial · Rural · Industrial · Manutenção</p>
        </div>
        <ContatoProgressivo />
      </div>
    </section>
  );
}
