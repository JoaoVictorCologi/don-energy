// Fotografias autorizadas do acervo. Cada arquivo não representa, por si, uma obra.
const registros = [
  { id: "foto-01", numero: "01", largura: 1920, altura: 1080, alt: "Módulos solares sobre uma cobertura, com portões laranja na fachada" },
  { id: "foto-02", numero: "02", largura: 1920, altura: 1080, alt: "Vista aérea de módulos solares em coberturas próximas a uma esquina" },
  { id: "foto-03", numero: "03", largura: 1920, altura: 1080, alt: "Dois conjuntos de módulos solares sobre telhas" },
  { id: "foto-04", numero: "04", largura: 1920, altura: 1080, alt: "Vista aérea de módulos solares sobre uma cobertura" },
  { id: "foto-05", numero: "05", largura: 1920, altura: 1080, alt: "Módulos solares distribuídos sobre uma cobertura, vistos de cima" },
  { id: "foto-06", numero: "06", largura: 1920, altura: 1080, alt: "Fileiras de módulos solares sobre uma cobertura" },
  { id: "foto-07", numero: "07", largura: 1920, altura: 1080, alt: "Vista aérea de módulos solares, com piscina e quadra ao fundo" },
  { id: "foto-08", numero: "08", largura: 1920, altura: 1080, alt: "Módulos solares sobre telhas, com piscina ao fundo" },
  { id: "foto-09", numero: "09", largura: 1440, altura: 1920, alt: "Vista aérea vertical de uma cobertura com módulos solares e áreas externas" },
  { id: "foto-10", numero: "10", largura: 1920, altura: 1080, alt: "Vista aérea de uma instalação de módulos solares sobre cobertura" },
  { id: "foto-11", numero: "11", largura: 1920, altura: 1080, alt: "Módulos solares sobre uma cobertura cercada por áreas abertas" },
] as const;

// Novos materiais identificados no retorno do proprietário. Não agrupam o acervo antigo.
const novos = [
  { id: "r1-limeira", numero: "12", alt: "Vista de cima de módulos solares sobre coberturas claras de uma residência", legenda: "Projeto residencial · Limeira · SP" },
  { id: "r1-new-way", numero: "13", alt: "Três fileiras de módulos solares sobre cobertura clara, com palmeiras ao redor", legenda: "Espaço de Eventos New Way · Mococa · SP" },
  { id: "r1-francini", numero: "14", alt: "Três conjuntos de módulos solares instalados no solo, em área gramada junto a árvores", legenda: "Pão de Queijo Francini · Propriedade rural · Mococa · SP" },
  { id: "r1-oliveira", numero: "15", alt: "Vista aérea de módulos solares nas coberturas do Supermercado Oliveira", legenda: "Supermercado Oliveira · Pirassununga · SP" },
  { id: "r1-nossa-senhora-da-luz", numero: "16", alt: "Módulos solares sobre telhado de telhas, junto à fachada azul e branca de uma igreja", legenda: "Igreja Nossa Senhora da Luz" },
] as const;

export type FotoId = (typeof registros)[number]["id"] | (typeof novos)[number]["id"];
export type Foto = { id: FotoId; numero: string; largura: number; altura: number; alt: string; legenda: string; original?: string; miniatura: string; ampliacao: string; srcSet: string };
export const fotosAcervo: readonly Foto[] = registros.map(foto => ({
  ...foto,
  original: "/obras/obra-" + foto.numero + ".webp",
  legenda: "Instalação solar · Acervo Don Energy",
  miniatura: "/obras/portfolio/" + foto.id + "-480.webp",
  ampliacao: "/obras/portfolio/" + foto.id + "-1440.webp",
  srcSet: [480, 960, 1440].map(largura => "/obras/portfolio/" + foto.id + "-" + largura + ".webp " + largura + "w").join(", "),
}));
export const fotosProjetos: readonly Foto[] = novos.map(foto => ({
  ...foto, largura: 4000, altura: 2250,
  miniatura: "/obras/projetos/" + foto.id + "-480.webp",
  ampliacao: "/obras/projetos/" + foto.id + "-1920.webp",
  srcSet: [480, 960, 1440, 1920].map(largura => "/obras/projetos/" + foto.id + "-" + largura + ".webp " + largura + "w").join(", "),
}));
export const todasFotos: readonly Foto[] = [...fotosAcervo, ...fotosProjetos];
export function fotoPorId(id: FotoId): Foto {
  const foto = todasFotos.find(item => item.id === id);
  if (!foto) throw new Error("Fotografia não encontrada: " + id);
  return foto;
}
// Seleção antiga preservada como referência editorial, sem novos agrupamentos.
export const fotosDestaque = (["foto-09", "foto-01", "foto-11"] as const).map(fotoPorId);
