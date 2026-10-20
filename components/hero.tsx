import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[min(832px,100svh)] items-center overflow-hidden bg-brand-blue px-6 pt-[calc(var(--header-height)+3rem)] pb-16 text-white sm:pb-24">
      <picture>
        <source type="image/avif" srcSet="/obras/otimizadas/hero-640.avif 640w, /obras/otimizadas/hero-960.avif 960w, /obras/otimizadas/hero-1440.avif 1440w" sizes="100vw" />
      {/* Export estático: srcSet aponta para arquivos preparados, sem otimizador de servidor. */}

      <img src="/obras/otimizadas/hero-1440.webp" srcSet="/obras/otimizadas/hero-640.webp 640w, /obras/otimizadas/hero-960.webp 960w, /obras/otimizadas/hero-1440.webp 1440w" sizes="100vw" width="1440" height="960" alt="" fetchPriority="high" loading="eager" className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center]" />
      </picture>
      {/* Escurecimento contínuo sobre a foto, sem faixa separada atrás do header. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/60 to-black/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-transparent to-black/10" />
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.16em] text-white uppercase">Mococa e região · Energia solar</p>
          <h1 className="font-heading text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">Energia solar para o seu projeto</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white sm:text-lg">Soluções para sua casa, seu negócio, sua propriedade rural ou seu projeto de investimento. Converse com a Don Energy sobre o que você precisa.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} className="min-h-12 bg-brand-orange text-brand-ink hover:bg-brand-orange/90" render={<a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" />}>Falar no WhatsApp <ArrowUpRight aria-hidden="true" /></Button>
            <Button size="lg" variant="outline" nativeButton={false} className="min-h-12 border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white" render={<Link href="/#servicos" />}>Conhecer soluções <ArrowDown aria-hidden="true" /></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
