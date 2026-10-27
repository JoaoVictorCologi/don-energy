import { ArrowUpRight as Seta } from "lucide-react";
import Link from "next/link";

export function ChamadaContato({ titulo = "Seu projeto começa com uma conversa." }: { slug?: string; titulo?: string }) {
  return <section className="bg-brand-blue py-16 text-white"><div className="site-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="mb-4 text-xs font-semibold tracking-widest uppercase">Próximo passo</p><h2 className="max-w-2xl font-heading text-3xl leading-snug font-medium">{titulo}</h2></div><Link prefetch={false} href={"/contato/#fale-conosco"} className="site-button shrink-0">Conversar sobre meu projeto <Seta aria-hidden="true" className="size-4 shrink-0" /></Link></div></section>;
}
