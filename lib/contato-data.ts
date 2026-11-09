import { siteConfig } from "@/lib/site-config";

// Compatibilidade com os componentes atuais, sem duplicar os dados.
export const contato = {
  telefoneExibicao: siteConfig.telefoneExibicao,
  endereco: siteConfig.endereco,
  horarios: siteConfig.horarios,
  email: "comercial@donenergy.com.br",
  redesSociais: [
    { nome: "Instagram", url: "https://www.instagram.com/don__energy/" },
    { nome: "LinkedIn", url: "https://www.linkedin.com/company/donenergy/?originalSubdomain=br" },
  ],
} as const;
