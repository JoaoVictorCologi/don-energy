import { Target, Eye, HeartHandshake } from "lucide-react";

const conteudos = [
  {
    titulo: "Missão",
    texto: "Transformar as necessidades de cada cliente em soluções de energia solar bem planejadas. Unir engenharia, cuidado na execução e orientação clara para apoiar escolhas conscientes e um uso mais sustentável da energia.",
    Icone: Target,
  },
  {
    titulo: "Visão",
    texto: "Construir uma trajetória de crescimento responsável, reconhecida pela qualidade dos projetos e pela confiança dos clientes. Ampliar o acesso à energia solar em São Paulo e Minas Gerais, mantendo a proximidade que faz parte da nossa origem.",
    Icone: Eye,
  },
  {
    titulo: "Valores",
    texto: "Agir com transparência nas orientações, responsabilidade técnica em cada projeto e respeito às pessoas. Ouvir antes de propor, cuidar dos detalhes e buscar melhorias contínuas para cultivar relações de confiança ao longo do tempo.",
    Icone: HeartHandshake,
  },
];

export function ValoresInstitucionais() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {conteudos.map(({ titulo, texto, Icone }) => (
        <article key={titulo} className="rounded-xl border border-border bg-brand-soft p-6 lg:p-8">
          <Icone aria-hidden="true" className="mb-6 size-9 text-brand-blue" strokeWidth={1.5} />
          <h3 className="font-heading text-2xl font-semibold text-brand-blue">{titulo}</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">{texto}</p>
        </article>
      ))}
    </div>
  );
}
