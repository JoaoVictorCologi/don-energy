// Dados confirmados pelo responsável em prompt.md. Uma única fonte para o site.
export const siteConfig = {
  nome: "Don Energy",
  url: "https://don-energy.vercel.app",
  descricao: "Energia solar residencial, comercial e Autoconsumo Remoto - Industrial, com sede em Mococa-SP e atendimento em São Paulo e Minas Gerais.",
  telefoneExibicao: "(19) 99627-4747",
  telefoneInternacional: "+5519996274747",
  whatsapp: "5519996274747",
  endereco: {
    linha1: "Rua Bernardino de Campos, 329",
    linha2: "Brás, Mococa - SP, 13735-030",
    logradouro: "Rua Bernardino de Campos, 329, Brás",
    cidade: "Mococa",
    estado: "SP",
    cep: "13735-030",
    pais: "BR",
  },
  horarios: [
    { dias: "Segunda a sexta", horario: "08:00 – 17:30", schemaDias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], abre: "08:00", fecha: "17:30" },
  ],
  // Marca R3 do proprietário: recorte nativo do JPG, sem redesenho ou ampliação.
  logo: { src: "/logo/don-energy-logo-r3-nativa.png", width: 419, height: 286 },
  imagemSocial: { src: "/og-image.png", width: 1200, height: 630, alt: "Don Energy — Energia Solar" },
  numeros: {
    obrasRealizadas: "<<PREENCHER>>",
    potenciaInstaladaKwp: "<<PREENCHER>>",
    anosDeAtuacao: "<<PREENCHER>>",
  },
} as const;

export const SITE_URL = siteConfig.url;
// Atualizar apenas quando houver alteração real da política.
export const PRIVACIDADE_ATUALIZADA_EM = new Date("2026-10-27");

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL + "/#empresa",
  name: siteConfig.nome,
  url: SITE_URL + "/",
  description: siteConfig.descricao,
  telephone: siteConfig.telefoneInternacional,
  logo: SITE_URL + siteConfig.logo.src,
  image: SITE_URL + siteConfig.imagemSocial.src,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.endereco.logradouro,
    addressLocality: siteConfig.endereco.cidade,
    addressRegion: siteConfig.endereco.estado,
    postalCode: siteConfig.endereco.cep,
    addressCountry: siteConfig.endereco.pais,
  },
  openingHoursSpecification: siteConfig.horarios.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.schemaDias.map((dia) => "https://schema.org/" + dia),
    opens: h.abre,
    closes: h.fecha,
  })),
};
