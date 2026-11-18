import { ArrowUpRight as Seta } from "lucide-react";
import Link from "next/link";

export function ChamadaContato({ titulo = "Seu projeto começa com uma conversa." }: { slug?: string; titulo?: string }) {
  return <section data-revelar className="visual-chamada">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/obras/trajetoria-por-do-sol-1280.webp" srcSet="/obras/trajetoria-por-do-sol-640.webp 640w, /obras/trajetoria-por-do-sol-1280.webp 1280w, /obras/trajetoria-por-do-sol-1920.webp 1920w, /obras/trajetoria-por-do-sol.webp 2400w" sizes="100vw" width={2400} height={1600} alt="" loading="lazy" className="visual-fundo" />
    <div className="site-shell relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
      <div><p className="mb-4 text-xs font-semibold tracking-widest text-[#d0e99d] uppercase">Próximo passo</p><h2 className="max-w-2xl font-heading text-3xl leading-snug font-medium md:text-4xl">{titulo}</h2></div>
      <Link prefetch={false} href="/contato/#fale-conosco" className="visual-botao-claro shrink-0">Conversar sobre meu projeto <Seta aria-hidden="true" className="size-4 shrink-0" /></Link>
    </div>
  </section>;
}
