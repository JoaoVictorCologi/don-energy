# Don Energy — Site institucional

Next.js 16.2.10 (App Router), React 19, TypeScript e Tailwind CSS 4. Conteúdo em arquivos locais; formulário com React Hook Form/Zod abre uma mensagem no WhatsApp. Sem API, banco de dados ou envio automático.

## Ambiente e execução

Ambiente validado na E1: Node 24.11.0, npm 11.6.1, Windows. A versão de Node está em .nvmrc. Não atualizar dependências automaticamente; preservar o lockfile.

~~~powershell
npm ci
npm run dev
~~~

Validação de entrega:

~~~powershell
npm run lint
npm run build
npm run preview:static
~~~

O build gera out/. A prévia serve http://127.0.0.1:4173, apenas em loopback, com status 404 para endereços inexistentes, sem fallback de SPA. A prévia aplica gzip a HTML, CSS, JavaScript e texto; confirmar compressão no servidor real. Encerre com Ctrl+C. Não usar next start para exportação estática. next dev não serve de referência de desempenho.

## Conteúdo e identidade

- lib/site-config.ts: URL, telefone/WhatsApp, endereço, horários, logo, imagem social e números ainda pendentes. contato-data.ts mantém a interface existente sem duplicar dados. Corrigir a URL nesse único lugar após publicação do domínio definitivo; por enquanto é https://don-energy.vercel.app.
- lib/servicos-data.ts, obras-data.ts e depoimentos-data.ts: conteúdo atual. Dados de obras não confirmados permanecem como <<PREENCHER>>. Textos comerciais, fotos e depoimentos preexistentes ainda precisam de confirmação/autorização antes de publicação.
- public/obras/otimizadas/: miniaturas 320/640 px e Hero 640/960/1440 px em AVIF com alternativa WebP e srcSet. Fontes fotográficas preservadas em public/obras/. unoptimized: true não cria versões menores; preparar os arquivos antes do build.
- public/logo/don-energy-logo-compacta.png: margens alfa recortadas e redução proporcional do original fornecido; não deriva da versão preparada com defeitos. Logo antiga e originais do vault preservados. Identidade e leitura do slogan ainda sujeitas à avaliação final; solicitar variante oficial simplificada se necessário.
- app/globals.css: azul oficial no header/footer, laranja com texto escuro nos CTAs, Inter no corpo e Sora nos títulos. Altura compartilhada do header: 64 px no celular e 72 px a partir de 768 px. Na inicial ele é fixo e transparente sobre a fotografia, sem faixa azul; a superfície torna-se sólida após 16 px de rolagem ou com o menu móvel aberto. Nas internas o fundo é sólido desde o HTML inicial, com espaço reservado abaixo. O Hero reserva altura do header no padding superior para não esconder o título.
- Formulário e links wa.me preenchem a mensagem; o visitante decide enviá-la no WhatsApp. Testes usam somente dados fictícios. Botão flutuante oculta-se quando o formulário está visível e na política de privacidade, sem eliminar o contato do formulário/header/footer. O formulário existente carrega perto da seção via contato-progressivo.tsx; um link de WhatsApp permanece no HTML estático mesmo sem JavaScript.

O menu móvel mantém o Popover Base UI existente, carregado quando o visitante interage com o botão (antecipado em foco/hover). Não é baixado para a navegação desktop. O controle reserva 44 × 44 px durante o carregamento.

## Rotas e SEO

Rotas desta entrega: / e /privacidade/. E2–E4 não implementadas. trailingSlash: true produz privacidade/index.html. Robots e sitemap são estáticos; canonicals e metadados apontam ao endereço publicado configurado. LocalBusiness contém somente os dados confirmados; não inventar avaliações agregadas, certificações ou dados comerciais.

A página 404 é gerada como 404.html; o servidor de produção deve devolvê-la com status 404. A existência do arquivo não configura o servidor por si só. Não cadastrar links para futuras páginas.

## Preparação para Hostinger — publicação não autorizada nesta etapa

1. Confirmar plano exato com suporte a site próprio Custom PHP/HTML, domínio/subdomínio, diretório público e método de envio. Não presumir que o Criador de Sites oferece esse acesso ou que haverá Node em execução.
2. Confirmar a versão aprovada, registrar commit/base, Node e backup da versão publicada e do diretório público. Preservar DNS de e-mail e manter Vercel disponível durante a validação conforme combinado.
3. Gerar out/ com instalação limpa, lint e build. Em homologação pública, impedir indexação; na produção aprovada, permitir indexação. Validar em endereço de homologação antes de trocar DNS.
4. Enviar apenas o conteúdo de out/ ao diretório público indicado, com index.html na raiz, _next/, imagens, ícones, sitemap e robots. Não enviar .git, fontes, node_modules, .env, backups ou credenciais. Publicar de forma controlada, evitando mistura entre HTML novo e ativos de versões diferentes.
5. Testar acesso direto e atualização de / e /privacidade/, links entre elas, parâmetros de URL, mensagem de WhatsApp, recursos estáticos e um endereço inexistente (deve responder 404). Não redirecionar todas as URLs para index.html.
6. Confirmar HTTPS, domínio canônico e ausência de conteúdo misto. Regras de cache/compressão/cabeçalhos dependem do servidor e do plano; não esperar execução de headers/rewrites/redirects do Next na hospedagem de arquivos. Avaliar cache longo imutável só para _next/static/ com hash; HTML/robots/sitemap devem permitir revalidação. Não aplicar cache imutável a todo o diretório.
7. Confirmar o servidor antes de produzir regras. Por exemplo, ErrorDocument 404 /404.html só deve ser adotado se o ambiente real aceitar essa configuração. Não foi criado .htaccess sem conhecer o plano. Não ativar deploy automático, conectar contas ou mudar DNS sem autorização separada.
8. Após publicação autorizada, repetir lint/build se fontes mudarem, testes manuais, verificação de cabeçalhos/status/HTTPS e Lighthouse no endereço real. Guardar HTML e JSON dos relatórios e registrar URL, ferramenta, navegador, perfil, data e condições.

### Rollback de publicação (a confirmar no plano real)

Manter um pacote completo da versão anterior e seu inventário. Se a nova versão falhar, restaurar integralmente o conteúdo público anterior pelo método confirmado no hPanel, incluindo HTML e ativos correspondentes; revalidar rotas, 404, HTTPS e contato. Registrar eventual reversão de DNS e suas condições antes da migração. Não apagar o projeto Vercel automaticamente.

## Qualidade e acompanhamento

Medir o export de produção com Lighthouse 13.5.0: três execuções sequenciais por perfil (celular/desktop), por rota representativa, mediana e variação. Meta: pontuações superiores a 90 nas quatro categorias, sem promessa de resultado fixo. Auditoria automática não substitui navegação por teclado, foco, contraste e teste funcional.

A central do projeto está em C:/Users/colog/Documents/Obsidian Vault/Don-Energy-Site/00-Painel.md. Evidências locais da E1 ficam em Materiais/Referencias/E1/ no vault, fora da publicação. Consulte Etapas/E1-Fundacao.md para aprovação, arquivos, medições, pendências e rollback da implementação. Trabalhar em etapa/e1-fundacao, preservando o trabalho anterior; não publicar nem iniciar E2 sem aprovação.
