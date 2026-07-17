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
- Cores da marca já configuradas no `tailwind.config.ts`: `#94B94A` (verde),
  `#384C96` (azul), `#D88739` (laranja) — usar os tokens, não hex direto no JSX
- Fontes: Sora (headings) + Inter (body), via `next/font/google`
- Nomes de arquivo: kebab-case. Componentes: PascalCase

## next.config.ts — obrigatório
- `output: 'export'`
- `images: { unoptimized: true }` (otimização de imagem do Next exige servidor)

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
- Logo: usar sempre os arquivos de `public/logo/` — versão fundo branco ainda é
  aproximação gerada, marcar visualmente se precisar trocar depois da aprovação
  do cliente
