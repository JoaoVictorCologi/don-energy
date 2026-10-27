import type { Metadata } from "next";

import { contato } from "@/lib/contato-data";
import { PRIVACIDADE_ATUALIZADA_EM } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: { canonical: "/privacidade/" },
  openGraph: { title: "Política de Privacidade — Don Energy", description: "Como a Don Energy usa os dados fornecidos pelo site.", url: "/privacidade/", images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", title: "Política de Privacidade — Don Energy", description: "Como a Don Energy usa os dados fornecidos pelo site.", images: ["/og-image.png"] },
  title: "Política de Privacidade — Don Energy",
  description:
    "Como a Don Energy coleta, usa e protege os dados pessoais fornecidos através deste site.",
};

const ultimaAtualizacaoExibicao = PRIVACIDADE_ATUALIZADA_EM.toLocaleDateString(
  "pt-BR",
  { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }
);

export default function Privacidade() {
  return (
    <main id="conteudo" tabIndex={-1} className="flex-1">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-heading text-3xl font-medium text-brand-blue tracking-tight sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última atualização: {ultimaAtualizacaoExibicao}
        </p>

        <div className="mt-10 flex flex-col gap-8">
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              1. Quem somos
            </h2>
            <p className="mt-3 text-muted-foreground">
              A Don Energy (&quot;nós&quot;) é uma empresa de energia solar
              sediada em Mococa-SP, responsável pelo tratamento dos dados
              pessoais coletados através deste site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              2. Quais dados você informa
            </h2>
            <p className="mt-3 text-muted-foreground">
              Coletamos apenas os dados que você mesmo nos fornece ao
              preencher o formulário de proposta na inicial: nome, telefone, cidade,
              perfil solar e, opcionalmente, consumo mensal de energia ou
              valor da conta de luz.
            </p>
            <p className="mt-3 text-muted-foreground">
              O site não instala ferramentas próprias de publicidade ou análise de comportamento. Serviços externos integrados, como Azume, Google Maps e WhatsApp, podem utilizar cookies e receber informações técnicas da conexão, conforme suas próprias políticas.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">3. Calculadora externa da Azume</h2>
            <p className="mt-3 text-muted-foreground">A inicial integra a calculadora Azume em um quadro de outro domínio, carregado quando você se aproxima dessa seção. Ao utilizar o quadro, seu navegador se conecta à Azume e os dados inseridos são tratados pelo serviço externo. O site da Don Energy não controla os campos, as premissas, o armazenamento ou o encaminhamento interno dessa ferramenta.</p>
            <p className="mt-3 text-muted-foreground">Consulte as informações de privacidade do fornecedor antes de preencher ou enviar dados. Você também pode optar por falar diretamente com a Don Energy pelos contatos do site. Resultados da ferramenta externa não substituem a avaliação específica do projeto.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              4. Como usamos seus dados
            </h2>
            <p className="mt-3 text-muted-foreground">
              Usamos as informações encaminhadas diretamente à Don Energy para elaborar uma
              proposta comercial de energia solar e entrar em contato com
              você.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              5. Como seus dados são transmitidos
            </h2>
            <p className="mt-3 text-muted-foreground">
              O formulário de proposta da inicial não armazena seus dados em banco de dados ou
              servidor próprio. Ao preencher o formulário e preparar a
              mensagem, seu navegador monta um texto com os dados
              informados e abre o WhatsApp para que você mesmo decida
              enviá-la à nossa equipe. Essa conversa passa a ser regida pela
              política de privacidade do WhatsApp/Meta, que você pode
              consultar em{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all underline underline-offset-4"
              >
                https://www.whatsapp.com/legal/privacy-policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              6. Mapa de localização
            </h2>
            <p className="mt-3 text-muted-foreground">
              O mapa do Google na página de contato é visível sem botão de ativação e carregado quando você se aproxima dessa área. Seu navegador se conecta ao Google, que recebe informações técnicas da conexão. O link “Como chegar” também abre um serviço externo do Google.
            </p>
            <p className="mt-3 text-muted-foreground">
              O uso desses serviços está sujeito à <a href="https://policies.google.com/privacy?hl=pt-BR" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">política de privacidade do Google</a>. O formulário que permanece na inicial não encaminha os campos preenchidos ao provedor do mapa. Na página de contato não há formulário nem calculadora. Serviços externos podem usar cookies e outras tecnologias conforme suas próprias políticas.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              7. Compartilhamento com terceiros
            </h2>
            <p className="mt-3 text-muted-foreground">
              Não vendemos, alugamos ou compartilhamos seus dados com
              terceiros para fins de marketing.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              8. Seus direitos (LGPD)
            </h2>
            <p className="mt-3 text-muted-foreground">
              Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018),
              você tem direito a: confirmar a existência de tratamento de
              dados, acessar seus dados, corrigir dados incompletos ou
              desatualizados, solicitar a exclusão de dados tratados com
              seu consentimento, e revogar seu consentimento a qualquer
              momento.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              9. Como exercer seus direitos
            </h2>
            <p className="mt-3 text-muted-foreground">
              Entre em contato conosco pelo telefone {contato.telefoneExibicao}{" "}
              ou pelo endereço {contato.endereco.linha1},{" "}
              {contato.endereco.linha2}.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              10. Alterações nesta política
            </h2>
            <p className="mt-3 text-muted-foreground">
              Podemos atualizar esta política periodicamente. A data da
              última atualização está sempre indicada no topo desta página.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
