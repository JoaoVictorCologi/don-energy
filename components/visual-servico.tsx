import Image from "next/image";
import { Factory, Sun } from "lucide-react";
import { FotoAcervo } from "@/components/foto-acervo";
import { apresentacaoSolar } from "@/lib/apresentacao-solar";
import type { PerfilSolarId } from "@/lib/perfis-solares";
import { cn } from "@/lib/utils";

export function VisualServico({ perfil, className, loading = "lazy" }: {
  perfil: PerfilSolarId;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  if (perfil === "manutencao") return <Image src="/servicos/manutencao-enviada.webp" width="1200" height="801" alt="Pessoa com uniforme laranja limpando módulos solares com um rodo. Fotografia ilustrativa." loading={loading} className={cn("w-full object-cover", className)} />;
  const { foto } = apresentacaoSolar[perfil];
  if (foto) return <FotoAcervo numero={foto} loading={loading} className={className} />;

  return (
    <div aria-hidden="true" className={cn("relative grid place-items-center overflow-hidden rounded-md bg-brand-soft text-brand-blue", className)}>
      <div className="relative rounded-full border border-brand-blue/20 bg-white/60 p-8">
        <Factory className="size-16" strokeWidth={1.4} />
        <Sun className="absolute -top-3 right-1 size-8 rounded-full bg-brand-soft p-1" strokeWidth={1.5} />
      </div>
    </div>
  );
}
