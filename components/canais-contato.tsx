import { Mail } from "lucide-react";
import { contato } from "@/lib/contato-data";

export function CanaisContato() {
  return (
    <div className="flex flex-col items-start text-sm">
      <a href={"mailto:" + contato.email} className="inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:underline">
        <Mail aria-hidden="true" className="size-4 shrink-0" />
        <span>{contato.email}</span>
      </a>
      <ul aria-label="Redes sociais" className="flex flex-wrap gap-x-5">
        {contato.redesSociais.map(({ nome, url }) => (
          <li key={nome}>
            <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4">
              {nome}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
