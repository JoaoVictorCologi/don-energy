import { Building2, Check, Home, Tractor, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { servicos } from "@/lib/servicos-data";

const icones = {
  residencial: Home,
  comercial: Building2,
  rural: Tractor,
  usina: TrendingUp,
} as const;

const mensagens = {
  residencial:
    "Olá! Tenho interesse em energia solar residencial e gostaria de mais informações.",
  comercial:
    "Olá! Tenho interesse em energia solar comercial e gostaria de mais informações.",
  rural:
    "Olá! Tenho interesse em energia solar rural e gostaria de mais informações.",
  usina:
    "Olá! Tenho interesse em usina de investimento em energia solar e gostaria de mais informações.",
} as const;

export function Servicos() {
  return (
    <section
      id="servicos"
      className="scroll-mt-[var(--header-height)] bg-background px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Soluções para cada perfil de cliente
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((servico) => {
            const Icon = icones[servico.id];
            return (
              <Card key={servico.id} className="flex flex-col">
                <CardHeader>
                  <Icon className="mb-2 size-8 text-brand-green" />
                  <CardTitle className="text-xl">{servico.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-sm text-muted-foreground">
                    {servico.intro}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {servico.beneficios.map((beneficio) => (
                      <li key={beneficio} className="flex gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand-green" />
                        <span>{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-brand-orange text-white hover:bg-brand-orange/90"
                    nativeButton={false}
                    render={
                      <a
                        href={buildWhatsAppUrl(mensagens[servico.id])}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    Falar no WhatsApp
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
