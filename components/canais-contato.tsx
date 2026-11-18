import { Mail } from "lucide-react";
import { contato } from "@/lib/contato-data";

const iconesRedes = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  LinkedIn: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 8h.01M7.5 11v5M11.5 16v-5m0 2a2.5 2.5 0 0 1 5 0v3" />
    </>
  ),
};

export function CanaisContato({ mostrarIconesRedes = false, mostrarEmail = true }: { mostrarIconesRedes?: boolean; mostrarEmail?: boolean }) {
  return (
    <div className="flex flex-col items-start text-sm">
      {mostrarEmail && <a href={"mailto:" + contato.email} className="inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:underline">
        <Mail aria-hidden="true" className="size-4 shrink-0" />
        <span>{contato.email}</span>
      </a>}
      <ul aria-label="Redes sociais" className="flex flex-wrap gap-x-5">
        {contato.redesSociais.map(({ nome, url }) => (
          <li key={nome}>
            <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4">
              {mostrarIconesRedes && (
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="size-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {iconesRedes[nome]}
                </svg>
              )}
              {nome}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
