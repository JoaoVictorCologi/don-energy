// TODO: atualizar quando o domínio de produção for registrado. Enquanto
// isso, é só um placeholder óbvio — referenciado em app/layout.tsx
// (metadataBase), app/robots.ts e app/sitemap.ts. Trocar aqui é suficiente,
// não precisa procurar no resto do projeto.
export const SITE_URL = "https://SEU-DOMINIO-AQUI.com.br";

// Data fixa, atualizada manualmente só quando o texto da Política de
// Privacidade mudar de verdade — não usar new Date() aqui (isso mudaria a
// cada build, mesmo sem o conteúdo legal ter sido alterado). Alimenta tanto
// o texto visível em app/privacidade/page.tsx quanto o lastModified da
// mesma rota em app/sitemap.ts.
export const PRIVACIDADE_ATUALIZADA_EM = new Date("2026-07-18");
