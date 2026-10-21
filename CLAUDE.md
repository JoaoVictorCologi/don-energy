@AGENTS.md

# Project: Don Energy — Site institucional

## Tech Stack
- Next.js 16 (App Router), React 19, TypeScript
- TailwindCSS 4, shadcn/ui
- React Hook Form + Zod (validação de formulário, client-side)
- **Sem backend de e-mail.** Formulário de contato/qualificação de lead valida os campos e
  monta um link `wa.me` pré-preenchido — todo contato do site vai para o WhatsApp da empresa,
  não existe envio de e-mail no projeto.

## Regra crítica de arquitetura — LER ANTES DE QUALQUER MUDANÇA
Este projeto builda em **static export** (`output: 'export'` no `next.config.ts`).
NÃO existem as seguintes opções neste projeto:
- Server Actions
- API Routes / Route Handlers
- Middleware / proxy.ts
- `revalidatePath()` / `revalidateTag()` / ISR
- Qualquer chamada a banco de dados no servidor

Se uma feature parecer exigir servidor, a resposta correta é resolver no client
(ex: montar um link `wa.me` com os dados) ou avisar antes de implementar — não
criar Server Action/Route Handler que vai quebrar o build.

**Exceção**: `app/robots.ts` e `app/sitemap.ts` são tecnicamente "Route
Handlers especiais", mas são seguros em static export — rodam só em build
time (sem acessar `Request`) e viram arquivo estático (`/robots.txt`,
`/sitemap.xml`) dentro de `out/`. Não conta como violação da regra acima.

## Commands
- `npm run dev` — servidor local (porta 3000)
- `npm run build` — gera o export estático em `/out`
- `npm run lint` — lint (rodar antes de commitar, não obrigatório a cada edição nesta fase)

## Architecture
- App Router: rotas em `app/`
- Server Components por padrão para conteúdo estático; `'use client'` apenas em
  componentes com interatividade real (formulário, calculadora, menu mobile)
- `components/ui/` — primitivos shadcn
- `components/` — componentes de feature (Hero, Calculadora, FormularioContato, etc.)
- `lib/whatsapp.ts` — helper para montar a URL `wa.me` a partir dos dados do formulário
  (número da empresa, formatação/encoding da mensagem)
- `lib/` — demais helpers e configs

## Code Style
- NEVER use `any` explícito — usar `unknown` + type guard
- Imports: ES modules (import/export), sem require()
- Tailwind only — sem CSS inline, sem styled-components
- Cores da marca configuradas no `app/globals.css`: `#94B94A` (verde),
  `#384C96` (azul), `#D88739` (laranja) — usar os tokens, não hex direto no JSX
- Header fixo: transparente sobre o Hero apenas na inicial e no topo; azul sólido após 16 px de scroll, ao abrir o menu móvel e desde o início nas internas. Manter 64/72 px, reserva de espaço nas internas e padding superior do Hero.
- `--color-brand-blue-header` usa o azul profundo de apoio (`#182447`) quando o Header está sólido e no Footer. A logo compacta deriva do original com transparência; preservar proporção e identidade. CTAs laranja usam `text-brand-ink` para contraste.
- **Exceção intencional — `#25D366` (verde oficial do WhatsApp):** usado só
  no botão flutuante (`components/whatsapp-flutuante.tsx`), como hex direto
  (não é um token da marca, de propósito). É a cor pela qual o ícone do
  WhatsApp é universalmente reconhecido — usar o `--color-brand-green`
  (`#94B94A`) do site deixaria o botão com um verde "errado" pra esse
  contexto específico. Não "corrigir" isso pra usar o token da marca.
- Fontes: Sora (headings) + Inter (body), via `next/font/google`
- Nomes de arquivo: kebab-case. Componentes: PascalCase

## next.config.ts — obrigatório
- `output: 'export'`
- `images: { unoptimized: true }` (otimização de imagem do Next exige servidor)
- `trailingSlash: true`: `/privacidade/index.html`; links e canonicals com barra final.
- Prévia estática: `npm run preview:static`. Não usar `next start` para export.
- Hostinger: publicar apenas conteúdo de `out/`, mediante aprovação separada. Consulte README para validação, backup e rollback.

## Workflow (fase atual: MVP para aprovação do cliente)
- Prioridade agora é ter algo visualmente completo e navegável — não é necessário
  suite de teste automatizado nesta fase
- Rodar `npm run build` antes de qualquer entrega pro cliente, pra garantir que o
  export estático não quebrou
- Commits em português, direto: "adiciona seção de calculadora"

## Common Gotchas
- Qualquer imagem usada precisa estar em `public/` ou ser importada localmente —
  sem otimização automática de fontes remotas
- Formulário de contato NÃO envia e-mail — ele só valida (RHF+Zod) e monta um link `wa.me`
  com os dados codificados na mensagem. Não criar Server Action nem API Route pra isso.
- Logo: usar `siteConfig.logo`, arquivo local em `public/logo/`; preservar os originais. A variante compacta e o header sobreposto foram validados no encerramento da E1; preservar a composição.
- `SITE_URL` e todos os dados de contato estão em `lib/site-config.ts`. Usar a URL Vercel até existir domínio definitivo publicado. `lib/contato-data.ts` é uma fachada sem dados duplicados.
- Ícones/favicon usam a convenção de arquivo do Next (`app/favicon.ico`,
  `app/icon.png` + `icon1-4.png`, `app/apple-icon.png`) — não em `public/`.
  Se precisar trocar algum, é só substituir o arquivo no lugar certo, o Next
  gera as tags `<link>` sozinho.

## E2 — Serviços e contato
- Somente os quatro perfis solares, IDs estáveis em `lib/perfis-solares.ts`; detalhes de página separados para não carregar textos longos no formulário.
- Rotas estáticas `/servicos/`, quatro `/servicos/[slug]/` e `/contato/`, com barra final. Detalhes usam generateStaticParams e dynamicParams=false.
- Reutilizar FormularioContato e validação atuais. A query servico aceita apenas um dos quatro slugs e pré-seleciona o radio existente; não adicionar campos de outras atividades.
- Mapa externo somente após clique, consulta pelo endereço central. Não carregar SDK, chave ou conta. Header e Hero E1 preservados.


## Revisão editorial E2 e marca aprovada
- Branch de revisão: etapa/e2-revisao-editorial-mapa, base 1b0480a preservada. E2 aguardando validação; não publicar ou avançar E3.
- siteConfig.logo aponta para a derivação nativa sem microtexto aprovada em D25. Preservar arquivo original, proporções e alturas do header; não reintroduzir o slogan no arquivo ou como texto ao lado.
- Não reintroduzir percentuais, crédito, retorno, garantias ou fluxo comercial como fatos sem confirmação registrada. Não atribuir notas automáticas aos depoimentos.
- “Como chegar” deve abrir a tela de rotas com destino central, sem presumir origem ou pedir geolocalização no código do site. Renderização do mapa e confirmação do imóvel são validações distintas.
- Prévia visual no vault/porta 4175 permanece separada do site funcional.

## Aplicação visual E2
- Composição D27 aplicada às páginas existentes, sem E3/E4. Header compacto e marca sem slogan; cartões fotográficos sem pictogramas/WhatsApp repetido.
- Fotografias atuais autorizadas; classificação e dados das obras continuam em conferência. Depoimentos preservados em arquivo, fora da renderização pública até confirmação.
- Preservar o formulário RHF/Zod e mapa por escolha. E2 aguardando aceite final; sem push, merge ou deploy nesta entrega.

## E3 — acervo e projetos
- E2 validada em 93e0754. E3 autoriza acervo, ampliação, destaques e navegação; não reabrir E2 nem alterar sua identidade.
- Fotografias são arquivos; projetos exigem agrupamento confirmado. obrasConfirmadas vazio é intencional. Não gerar rotas/contagens/classificações a partir dos nomes das fotos.
- DetalheObra é estrutura sem rota pública. Ativar slugs/sitemap/links apenas com grupos confirmados e geração estática real.
- Depoimentos preservados fora do HTML e do bundle público; integração Google adiada. Filtros somente com dados confirmados que os sustentem.
- AmpliacaoGaleria melhora links estáticos com diálogo Base UI sob demanda; sem JS os links abrem a imagem. Preservar teclado/Escape/retorno de foco.
- E3 aguardando avaliação do recorte e dados do proprietário, sem conclusão integral ou publicação.
