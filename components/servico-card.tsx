import Link from "next/link";
import { Building2, Check, Home, Tractor, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Servico } from "@/lib/servicos-data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const icones = { residencial: Home, comercial: Building2, rural: Tractor, usina: TrendingUp } as const;

export function ServicoCard({ servico, inicial = false }: { servico: Servico; inicial?: boolean }) {
  const Icon = icones[servico.id];
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <Icon aria-hidden="true" className="mb-2 size-8 text-brand-green" />
        <CardTitle><h3 className="text-xl font-semibold">{inicial ? servico.titulo : servico.nome}</h3></CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm text-muted-foreground">{inicial ? servico.intro : servico.resumo}</p>
        <ul className="flex flex-col gap-2">
          {(inicial ? servico.beneficios : servico.pontos).map((item) => (
            <li key={item} className="flex gap-2 text-sm"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-green" /><span>{item}</span></li>
          ))}
        </ul>
        <Link prefetch={false} href={`/servicos/${servico.slug}/`} className="mt-auto inline-flex min-h-11 items-center self-start font-semibold text-brand-blue underline underline-offset-4" aria-label={`Conhecer ${servico.nome.toLowerCase()}`}>Conhecer solução <span aria-hidden="true" className="ml-2">→</span></Link>
      </CardContent>
      <CardFooter>
        <Button className="min-h-11 w-full bg-brand-orange text-brand-ink hover:bg-brand-orange/90" nativeButton={false} render={<a href={buildWhatsAppUrl(servico.mensagem)} target="_blank" rel="noopener noreferrer" />}>Falar no WhatsApp</Button>
      </CardFooter>
    </Card>
  );
}
