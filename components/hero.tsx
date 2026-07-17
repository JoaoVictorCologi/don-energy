import Image from "next/image";

import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="hero-dissolve relative isolate flex min-h-[calc(100svh-88px)] items-center justify-center overflow-hidden px-6 py-24 text-center text-white">
      <Image
        src="/obras/obra-09.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/75 via-brand-blue/45 to-brand-blue/20" />
      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-6">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Energia solar sob medida para você
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            nativeButton={false}
            className="bg-brand-orange text-white hover:bg-brand-orange/90"
            render={
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Falar no WhatsApp
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
            render={<a href="#servicos" />}
          >
            Ver serviços
          </Button>
        </div>
      </div>
    </section>
  );
}
