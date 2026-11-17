import { Send, Eye, Diamond } from "lucide-react";

const conteudos = [
  {
    titulo: "Missão",
    texto: "Transformar as necessidades de cada cliente em soluções de energia solar bem planejadas. Unir engenharia, cuidado na execução e orientação clara para apoiar escolhas conscientes e um uso mais sustentável da energia.",
    Icone: Send,
  },
  {
    titulo: "Visão",
    texto: "Construir uma trajetória de crescimento responsável, reconhecida pela qualidade dos projetos e pela confiança dos clientes. Ampliar o acesso à energia solar em São Paulo e Minas Gerais, mantendo a proximidade que faz parte da nossa origem.",
    Icone: Eye,
  },
  {
    titulo: "Valores",
    texto: "Agir com transparência nas orientações, responsabilidade técnica em cada projeto e respeito às pessoas. Ouvir antes de propor, cuidar dos detalhes e buscar melhorias contínuas para cultivar relações de confiança ao longo do tempo.",
    Icone: Diamond,
  },
];

export function ValoresInstitucionais() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {conteudos.map(({ titulo, texto, Icone }) => (
        <article key={titulo} className="rounded-2xl bg-brand-deep px-6 py-8 text-center text-white lg:px-8 lg:py-10">
          <span className="mx-auto mb-5 grid size-12 place-items-center rounded-full bg-brand-orange text-brand-deep"><Icone aria-hidden="true" className="size-6" strokeWidth={1.7} /></span>
          <h3 className="font-heading text-xl font-semibold text-white">{titulo}</h3>
          <p className="mt-4 text-[15px] leading-relaxed font-medium text-white">{texto}</p>
        </article>
      ))}
    </div>
  );
}
