@AGENTS.md

## Atualização vigente R2 — 27/10/2026

R1 aceita e publicada em master/38c5681 preservada. R2 somente local na branch ajustes/r2-identidade-integracoes-contato, aguardando aceite; sem push, merge, deploy, Hostinger ou DNS. Estados de planejamento/aceite R1 abaixo são históricos.

- Identidade pelo PDF: verde #94B94A protagonista, tons funcionais #3F571B/#173B31 para contraste, azul e laranja como apoio. Logo nativa sem slogan, imagens e proporções preservadas. Divergência RGB/hex da fonte continua registrada no vault.
- Inicial mantém Hero e formulário próprios; carrossel manual com quatro perfis na seção de soluções, teclado/toque/rolagem, SVG e sem autoplay. Contato independente simplificado: WhatsApp, telefone, horários, endereço, mapa direto e Como chegar; sem formulário nem calculadora nessa página. Atendimento seg–sex 08:00–17:30, sem sábado.
- Calculadora externa Azume por iframe oficial em /#calculadora, carregada perto da seção e com fallback em nova aba/contato. Não injetar CSS/scripts, recortar campos ou alterar o fornecedor. Carga visual, teclado e destino dos leads exigem registrar os limites verificados; não enviar orçamento ou dados reais de teste sem autorização. Nenhuma fórmula própria ou homologação Q07-A presumida.
- Quinze páginas de aplicação + 404; /simulador/ é somente alias de transição, sem menu/sitemap. vercel.json prepara 308; public/.htaccess prepara 301 Apache/LiteSpeed com fragmento, e public/simulador/index.html oferece fallback sem servidor configurado. Configurações de hospedagem reais não foram alteradas; conferir no destino após autorização própria. Prévia scripts/preview-static.mjs lê redirecionamentos explícitos de vercel.json.
- E4 anterior permanece em componentes sem rota pública e no histórico; arquivamento definitivo/substituição de escopo somente após aceite R2. Usinas e dados dos projetos intactos, aguardando proprietário. Avaliações opção 3 ficam somente no plano; não renderizar relatos não verificados, placeholders ou widget. E3 parcial, Q05-A/Q06/Q07-A e M02/M03 abertos.
- Vault: Etapas/R2-Identidade-integracoes-contato-2026-10-27.md e Materiais/Referencias/R2-2026-10-27/. Prévia R2 em http://127.0.0.1:4176/, referência R1 preservada em 4178. Desfazer apenas o commit R2 por reversão, preservando histórico e alterações posteriores; não aplicar rollback R1/E5 a esta entrega.


## Atualização R1 — 26/10/2026

Estado vigente: E5 aceita e publicada em 4bb0a38; R1 implementada localmente em ajustes/proprietario-2026-10-26, aguardando aceite próprio. Esta atualização prevalece sobre os estados históricos de entrega E5 aguardando avaliação abaixo. Sem push, merge, deploy, Hostinger ou DNS nesta R1.

- Dezesseis páginas e 404: dez anteriores, Nossa História e cinco detalhes de projetos identificados. Onze fotos antigas continuam sem agrupamento; cinco novas não as identificam. Somente Limeira/residencial e Francini/rural têm perfil informado; não criar industrial nem retirar usinas.
- Hero: Sua Energia pode custar menos. Calculadora em preparação antes do CTA, sem cálculo. História usa trajetória familiar, 2022/2023 e SP/MG recebidos; sem fotografia substituta. Não publicar potência, total anual, geração/economia pendentes ou informações inferidas de Igarai. Nome público: Igreja Nossa Senhora da Luz.
- Institucional em lib/institucional-data.ts; originais, autorizações e perguntas no vault. Navegação central em lib/navegacao.ts; menu desktop em 1024 px, mantendo alturas 64/72 px. Derivados locais 480/960/1440/1920 em public/obras/projetos; originais preservados no vault.
- Validação R1 proporcional: regressões E2/E3/E4 e 24 Lighthouse finais (inicial, História, portfólio e detalhe, dois perfis, três execuções). Não repetir os 60 da E5 sem motivo. Comparativo, capturas e limitações em Materiais/Referencias/R1-2026-10-26 no vault. M02/Q05-A/Q06/Q07-A continuam abertos.
- Rollback R1: reverter somente os commits R1 até a árvore 4bb0a38, após conferir branch/HEAD/árvore; não aplicar o rollback E5 para 205dbbf ao desfazer R1. Preservar trabalho posterior. Publicação futura exige autorização própria.



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
  componentes com interatividade real (formulário, revisão de dados, menu mobile)
- `components/ui/` — primitivos shadcn
- `components/` — componentes de feature (Hero, SimuladorSolar, FormularioContato, etc.)
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

## Estado e limites vigentes — E5
- Ler README.md e o painel do vault antes de alterar o projeto. E5 autorizada em etapa/e5-consolidacao-visual sobre 205dbbf; entrega aguardando avaliação, sem push, merge ou deploy.
- E2 validada em 93e0754. E3 em 944c461: entrega parcial validada, com detalhes das obras pendentes do proprietário. E4 em 205dbbf: interface validada; cálculo pendente de aprovação técnica Q07-A.
- Existem dez páginas e a 404, listadas no README. Não retomar etapas aceitas nem aplicar a maquete independente da porta 4175 automaticamente.
- Marca D25 sem slogan/microtexto abaixo ou ao lado, derivação nativa 834×558 e originais preservados. Preservar a composição e alturas do header.
- Fotografias autorizadas; fotos e projetos são dados distintos. obrasConfirmadas contém os cinco projetos identificados em R1; o acervo antigo não está agrupado. Sem agrupamentos, slugs, cidades, potência, classificação ou contagem presumidos. DetalheObra tem rotas estáticas somente para os cinco registros identificados.
- Depoimentos preservados fora da renderização/bundle público; integração Google adiada. Filtros dependem de dados confirmados.
- FormularioContato RHF/Zod compartilhado, quatro perfis solares. Query servico só aceita slugs conhecidos. Não criar backend/email, resultados ou envio automático. Consentimento e fallback devem permanecer.
- /simulador/ prepara dados, não calcula: Cálculo em preparação, ação Revisar dados. Não inserir fórmulas, parâmetros, conversão R$→kWh ou estimativas. Usina mantém tratamento específico. Contexto em memória e atualização explícita do contato, preservando rascunho; invalidar mensagem antiga após mudança.
- Mapa externo por escolha; Como chegar usa endereço central, confirmado em D27. Sem SDK/chave/geolocalização. Não tratar HTTP 200 como conferência visual.
- SITE_URL centralizado em lib/site-config.ts; domínio/canonical/indexação só mudam após confirmar ambiente. Robots atual permite indexação; não presumir homologação protegida.
- Não inventar serviços, garantias, retorno ou fatos comerciais. Pendências exclusivamente na nota Confirmacoes-do-proprietario.md do vault, sobretudo Q05-A/Q06/Q07-A.

## Validação e preservação
- Rodar lint, TypeScript/build/export e regressões previstas; documentação da E5 no vault define cobertura e evidências. Não criar testes que apenas espelham a implementação.
- Investigar LCP com hipóteses isoladas, preservando nitidez e todos os resultados. Não tornar todas as fotos prioritárias. Depois de estabilizar, dez rotas × dois perfis × três auditorias Lighthouse = 60; registrar mediana, faixa, LCP/CLS e limitações.
- Conferir teclado, foco, 320 px, zoom 200%, 2× e funções além do Lighthouse. Navegadores físicos não testados não podem ser declarados aprovados.
- Commits locais em português; referências E1–E4 preservadas. Rollback E5 retorna à árvore 205dbbf por reverts E5 em ordem inversa, após conferir HEAD/branch/árvore limpa. Preservar qualquer trabalho posterior.
- Git/Vercel e Hostinger são marcos posteriores; consultar dossiê no vault. Não criar PR, conectar projetos, configurar gatilhos, enviar ou publicar sem autorização própria.
