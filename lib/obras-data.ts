const registros = [
  { file: "obra-01.webp", desc: "Galpão comercial, porta laranja" },
  { file: "obra-02.webp", desc: "Esquina urbana, telhados de telha, painéis visíveis" },
  { file: "obra-03.webp", desc: "Telhado residencial, dois arranjos de painel" },
  { file: "obra-04.webp", desc: "Academia SkyFit" },
  { file: "obra-05.webp", desc: "Supermercado Oliveira" },
  { file: "obra-06.webp", desc: "Galpão grande, 4 fileiras de painéis" },
  { file: "obra-07.webp", desc: "Residência com quadra esportiva e piscina" },
  { file: "obra-08.webp", desc: "Telhado residencial, piscina ao fundo" },
  { file: "obra-09.webp", desc: "Casa com piscina e lago ao fundo" },
  { file: "obra-10.webp", desc: "Churrascaria Espeto na Brasa (comercial)" },
  { file: "obra-11.webp", desc: "Galpão rural, trator, fazenda" },
] as const;


export const obras = registros.map((obra) => ({
  ...obra,
  tipo: "<<PREENCHER>>",
  cidade: "<<PREENCHER>>",
  potenciaKwp: "<<PREENCHER>>",
}));

export function legendaObra(obra: (typeof obras)[number]) {
  return [obra.tipo, obra.cidade, obra.potenciaKwp + " kWp"].join(" · ");
}
