"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, Home, Tractor, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { servicos } from "@/lib/servicos-data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const icones = {
  residencial: Home,
  comercial: Building2,
  rural: Tractor,
  usina: TrendingUp,
} as const;

const tiposImovel = servicos.map((s) => ({ id: s.id, titulo: s.titulo }));

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome"),
  telefone: z.string().trim().min(10, "Informe um telefone válido com DDD"),
  tipoImovel: z.enum(
    ["residencial", "comercial", "rural", "usina"],
    "Selecione o tipo de imóvel"
  ),
  consumoOuConta: z.string().trim().optional(),
  cidade: z.string().trim().min(2, "Informe sua cidade"),
  consentimento: z.literal(true, "É preciso aceitar pra continuar"),
});

type FormValues = z.infer<typeof schema>;

const tituloPorId = Object.fromEntries(
  tiposImovel.map((t) => [t.id, t.titulo])
) as Record<FormValues["tipoImovel"], string>;

function montarMensagem(dados: FormValues) {
  const linhas = [
    "Olá! Gostaria de solicitar uma proposta de energia solar.",
    "",
    `Nome: ${dados.nome}`,
    `Telefone: ${dados.telefone}`,
    `Tipo de imóvel: ${tituloPorId[dados.tipoImovel]}`,
    `Cidade: ${dados.cidade}`,
  ];
  if (dados.consumoOuConta) {
    linhas.push(`Consumo/conta: ${dados.consumoOuConta}`);
  }
  return linhas.join("\n");
}

export function FormularioContato() {
  const [enviado, setEnviado] = useState(false);
  const [urlWhatsapp, setUrlWhatsapp] = useState("");
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      telefone: "",
      tipoImovel: "" as unknown as FormValues["tipoImovel"],
      consumoOuConta: "",
      cidade: "",
      consentimento: false as unknown as true,
    },
  });

  function onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Checagem síncrona antes de decidir se abre a aba: o schema do Zod é
    // síncrono, mas o resolver do RHF expõe validação assíncrona por
    // convenção — se a gente esperasse handleSubmit terminar pra só então
    // chamar window.open, o navegador já não consideraria mais isso
    // "dentro do clique do usuário" e bloquearia como pop-up. Por isso só
    // abrimos a aba quando já sabemos, de forma síncrona, que os dados são
    // válidos (evita também abrir/fechar aba em branco à toa a cada
    // tentativa inválida).
    const resultado = schema.safeParse(getValues());

    if (!resultado.success) {
      // Ainda assim roda a validação do RHF, só pra popular as mensagens
      // de erro visuais nos campos (FieldError) — não abre aba nenhuma.
      handleSubmit(() => {})(event);
      return;
    }

    // Sem "noopener" aqui de propósito: passar noopener faz window.open
    // retornar null, e a gente precisa da referência pra navegar a aba
    // depois. Em vez disso, zera popup.opener manualmente (ainda
    // funciona porque about:blank é same-origin nesse instante) — mesma
    // proteção contra tabnabbing, sem perder a referência.
    const popup = window.open("", "_blank");
    const url = buildWhatsAppUrl(montarMensagem(resultado.data));
    setUrlWhatsapp(url);
    if (popup) {
      popup.opener = null;
      popup.location.href = url;
    }
    setEnviado(true);
  }

  if (enviado) {
    return (
      <section
        id="contato"
        className="scroll-mt-[var(--header-height)] bg-background px-6 py-20"
      >
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Perfeito!
          </h2>
          <p className="mt-3 text-muted-foreground">
            Abrimos o WhatsApp numa nova aba com seus dados preenchidos.
          </p>
          <a
            href={urlWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-brand-blue underline underline-offset-4"
          >
            Não abriu? Clique aqui.
          </a>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contato"
      className="scroll-mt-[var(--header-height)] bg-background px-6 py-20"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Peça sua proposta
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Preencha seus dados e fale direto com a gente pelo WhatsApp.
        </p>
        <form onSubmit={onSubmitForm} noValidate className="mt-10">
          <FieldGroup>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field data-invalid={!!errors.nome}>
                <FieldLabel htmlFor="nome">Nome</FieldLabel>
                <Input
                  id="nome"
                  aria-invalid={!!errors.nome}
                  {...register("nome")}
                />
                <FieldError errors={[errors.nome]} />
              </Field>
              <Field data-invalid={!!errors.telefone}>
                <FieldLabel htmlFor="telefone">Telefone/WhatsApp</FieldLabel>
                <Input
                  id="telefone"
                  aria-invalid={!!errors.telefone}
                  {...register("telefone")}
                />
                <FieldError errors={[errors.telefone]} />
              </Field>
            </div>

            <FieldSet>
              <FieldLegend variant="label">Tipo de imóvel</FieldLegend>
              <Controller
                control={control}
                name="tipoImovel"
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    aria-invalid={!!errors.tipoImovel}
                    className={cn(
                      "grid grid-cols-2 gap-3 rounded-lg sm:grid-cols-4",
                      errors.tipoImovel &&
                        "border border-destructive p-3 ring-3 ring-destructive/20"
                    )}
                  >
                    {tiposImovel.map((tipo) => {
                      const Icon = icones[tipo.id];
                      return (
                        <FieldLabel key={tipo.id} htmlFor={`tipo-${tipo.id}`}>
                          <Field orientation="horizontal">
                            <RadioGroupItem value={tipo.id} id={`tipo-${tipo.id}`} />
                            <Icon className="size-4 shrink-0 text-brand-green" />
                            {tipo.titulo}
                          </Field>
                        </FieldLabel>
                      );
                    })}
                  </RadioGroup>
                )}
              />
              <FieldError errors={[errors.tipoImovel]} />
            </FieldSet>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field data-invalid={!!errors.cidade}>
                <FieldLabel htmlFor="cidade">Cidade</FieldLabel>
                <Input
                  id="cidade"
                  aria-invalid={!!errors.cidade}
                  {...register("cidade")}
                />
                <FieldError errors={[errors.cidade]} />
              </Field>
              <Field>
                <FieldLabel htmlFor="consumoOuConta">
                  Consumo mensal (kWh) ou valor da conta — opcional
                </FieldLabel>
                <Input id="consumoOuConta" {...register("consumoOuConta")} />
              </Field>
            </div>

            <Field
              orientation="horizontal"
              data-invalid={!!errors.consentimento}
            >
              <Controller
                control={control}
                name="consentimento"
                render={({ field }) => (
                  <Checkbox
                    id="consentimento"
                    checked={field.value ?? false}
                    onCheckedChange={field.onChange}
                    aria-invalid={!!errors.consentimento}
                  />
                )}
              />
              <FieldLabel htmlFor="consentimento" className="font-normal">
                Concordo com o tratamento dos meus dados conforme a{" "}
                <Link
                  href="/privacidade"
                  prefetch={false}
                  className="underline underline-offset-4"
                >
                  política de privacidade
                </Link>
                .
              </FieldLabel>
            </Field>
            <FieldError errors={[errors.consentimento]} />

            <Button
              type="submit"
              size="lg"
              className="bg-brand-orange text-white hover:bg-brand-orange/90"
            >
              Quero minha proposta
            </Button>
          </FieldGroup>
        </form>
      </div>
    </section>
  );
}
