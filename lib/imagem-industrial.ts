// Fotografia ilustrativa licenciada no Pexels; não é uma obra da Don Energy.
// Fonte e licença arquivadas no vault: Rural-industrial-carrossel-2026-11-18.
export const imagemIndustrial = {
  src: "/servicos/industrial-pexels-29923348-1440.webp",
  srcSet: [640, 960, 1440, 1920].map(largura => "/servicos/industrial-pexels-29923348-" + largura + ".webp " + largura + "w").join(", "),
  alt: "Vista aérea de galpões industriais com módulos solares nas coberturas. Fotografia ilustrativa.",
  credito: "Fotografia ilustrativa · Nova lv / Pexels",
} as const;
