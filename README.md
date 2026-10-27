# Don Energy — Site institucional

## Revisão vigente da R2 — Hero e cores, 27/10/2026

Pedido direto posterior a ccf560f: calculadora única à direita do Hero no desktop e abaixo do texto no celular/tablet; header verde-base #94B94A desde a abertura, com texto escuro contrastante, sem aumentar 64/72 px ou recolorir a logo. Botões de WhatsApp laranja #D88739, incluindo menu/formulário/atalho; títulos/destaques próprios antes verdes agora azul #384C96. Superfícies de apoio azuis/brancas. O header transparente anterior é referência histórica, substituído nesta prévia por instrução expressa.

Iframe oficial Azume preservado internamente; dimensionado pelo contêiner sem escala artificial ou recortes de campos nas telas conferidas. Foto não é esticada pela altura do quadro no celular. Fallback, privacidade, usinas, avaliações adiadas e Q10-A/Q07-A/M02/M03 mantidos. Versão anterior ccf560f preservada em Git/snapshot; revisão somente local, aguardando aceite. Sem push, merge, deploy, Hostinger ou DNS. Registro no vault em Materiais/Referencias/R2-Hero-cores-2026-10-27/. Esta revisão prevalece sobre a distribuição de cores/posição da calculadora nos registros R2 anteriores abaixo.


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



Next.js 16.2.10 (App Router), React 19, TypeScript e Tailwind CSS 4. Exportação estática, conteúdo local e atendimento pelo WhatsApp. Sem backend, API, banco ou envio automático.

## Estado vigente e preservação

- E1 validada: `e5c4234`. E2 visual validada: `93e0754`.
- E3 em `944c461`: **entrega parcial validada, com detalhes das obras pendentes do proprietário**.
- E4 em `205dbbf`: **interface validada; cálculo pendente de aprovação técnica em Q07-A**. O simulador não calcula estimativas.
- E5: consolidação autorizada na branch `etapa/e5-consolidacao-visual`, base `205dbbf`, aguardando avaliação da entrega. Não fazer push, merge, deploy ou avançar para publicação por inferência.

A central do projeto fica em `C:/Users/colog/Documents/Obsidian Vault/Don-Energy-Site/00-Painel.md`. Consultar `Etapas/E5-Reformulacao-visual.md` e `Materiais/Referencias/E5/` para evidências, commits, limitações e rollback. Questões comerciais/técnicas centralizadas em `Confirmacoes-do-proprietario.md`. Guias anteriores preservados no histórico Git, sem prevalecer sobre este estado.

## Ambiente e comandos

Node 24.11.0 (`.nvmrc`), npm 11.6.1. Preservar lockfile; não atualizar dependências automaticamente.

```powershell
npm ci
npm run dev
npm run lint
npm run build
npm run preview:static
```

O build gera `out/`. A prévia estática serve `http://127.0.0.1:4173/` em loopback, com gzip para texto e status 404 real. `next start` não serve exportação estática. Medir desempenho no build de produção, sem `next dev`.

## Páginas, conteúdo e identidade

Dez rotas: `/`, `/servicos/`, `/servicos/solar-residencial/`, `/servicos/solar-comercial/`, `/servicos/solar-rural/`, `/servicos/usina-de-investimento/`, `/obras/`, `/simulador/`, `/contato/`, `/privacidade/`. Mais `404.html`, robots e sitemap. `trailingSlash: true`, `output: export`, imagens locais com `unoptimized: true`; preparar derivados antes do build.

- `lib/site-config.ts`: única fonte de URL, marca, telefone, endereço, horários e imagem social. `contato-data.ts` é uma fachada. URL configurada: `https://don-energy.vercel.app`; não presumir que configuração local confirma o destino de deploy. Números institucionais não confirmados não são exibidos.
- Marca D25 sem “Energia solar” embaixo ou ao lado. Derivação nativa 834 × 558, transparência e proporções preservadas; originais e versões históricas mantidos. Não ampliar o raster compacto nem reconstruir por IA.
- Sora/Inter, azul e laranja, base clara e azul profundo de apoio. Header 64/72 px, transparente apenas na inicial no topo; sólido após 16 px, menu aberto e desde o início nas internas. Preservar reserva de altura e padding do Hero. CTAs laranja usam texto escuro.
- Fotografias atuais autorizadas (D27), sem classificação por serviço, cidade, potência ou quantidade de obras presumidas. `lib/fotos-data.ts` organiza arquivos; `lib/obras-data.ts` organiza cinco projetos identificados em R1, com detalhes estáticos próprios. Onze fotos não são onze obras. Sem filtros até dados confirmados.
- `public/obras/` preserva fontes; `otimizadas/` contém variantes E2 e Hero AVIF/WebP; `portfolio/` contém variantes 480/960/1440 derivadas das fontes, com ampliação integral. `sizes` sem srcSet não gera variantes no export.
- Depoimentos preservados em `lib/depoimentos-data.ts`, fora do HTML/bundle público até origem e autorização. Integração automática Google adiada. Sem promessas comerciais, técnicas ou financeiras não confirmadas.

## Navegação e fluxos preservados

Menu: Início, Soluções, Projetos, Simulador e Contato. Base UI móvel carrega sob demanda; preservar teclado/Escape/foco e redimensionamento. Ampliação do portfólio carrega diálogo sob demanda; sem JS, abre o arquivo da foto.

Formulário RHF/Zod compartilhado. `?servico=solar-residencial` aceita apenas os quatro slugs; valores desconhecidos são ignorados. Não colocar dados pessoais em URLs internas. Consentimento obrigatório; mensagem preparada abre WhatsApp e o visitante decide enviar. Testes interceptam destinos e usam dados fictícios. Fallback de WhatsApp permanece sem JS; o atalho flutuante só aparece onde previsto e não cobre o formulário.

E4 mostra “Cálculo em preparação” desde o início. Ação principal “Revisar dados”; validação sintática sob demanda, revisão/edição e contato opcional. Sem fórmulas, parâmetros presumidos, conversão R$→kWh, estimativas ou projeções de retorno. Usina tem tratamento próprio. Contexto em memória; atualizar contato exige ação explícita, preservando rascunho e invalidando mensagem antiga quando necessário. Sem persistência em URL/localStorage.

Mapa só carrega após “Carregar mapa”; “Como chegar” abre rotas para o endereço central. Localização confirmada pelo usuário em D27. Sem SDK, API key ou geolocalização. A política descreve conexões com Google e WhatsApp.

## Qualidade, SEO e publicação posterior

Rodar lint, TypeScript/build/export e regressões proporcionais. Auditar as dez páginas em Lighthouse 13.5.0, três amostras por perfil, medianas/faixas; E5 concentra 60 auditorias finais depois de estabilizar. Registrar LCP/CLS e limitações; localhost não comprova Core Web Vitals de campo, Vercel ou Hostinger. Conferir teclado, 320 px, zoom 200%, densidade 2×, 404 e fluxos além da auditoria automática.

Metadados/canonicals/sitemap usam `SITE_URL`. Robots permite indexação no ambiente configurado. Ambiente de avaliação e sua indexação devem ser decididos antes de publicar. Não gerar links para páginas inexistentes nem Review/AggregateRating sem autorização.

Git/Vercel é um marco separado: conferir remoto atual, projeto/conta, repositório vinculado, branch de produção, gatilhos, build/saída, URL, proteção/indexação e deployment anterior. Sem vincular projeto, reconfigurar ou publicar nesta entrega.

Hostinger posterior: confirmar plano com arquivos próprios, domínio, diretório, HTTPS, compressão/cache e 404; não presumir Node nem recursos do Criador de Sites. Enviar apenas `out/` mediante autorização, preservar DNS/e-mail e backup completo. Testar dez rotas, atualização direta, ativos, 404, contatos e avisos E3/E4 na URL real. Cache imutável apenas para ativos com hash; HTML/robots/sitemap devem revalidar. Não criar `.htaccess` antes de conhecer o servidor.

## Rollback

E5 retorna à árvore aceita `205dbbf`, por revert dos commits E5 em ordem inversa, com branch/HEAD/árvore limpa conferidos. Preservar qualquer trabalho posterior antes de replanejar; sem reset ou exclusão recursiva. Recriar `out/` e revalidar fluxos. Não usar rollback E4→E3 para desfazer E5. O script/dry-run e a lista real de commits ficam no vault. Restaurar deployment é operação diferente, sujeita ao destino e autorização do marco seguinte.
