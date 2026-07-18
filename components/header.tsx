"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#obras", label: "Obras" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-blue-header">
      {/* py e o h-/w- do logo são a fonte real da altura do header — ver
          --header-py / --header-logo-size em app/globals.css se mudar aqui */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-[var(--header-py)]">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/don-energy-logo.png"
            alt="Don Energy"
            width={64}
            height={64}
            preload
            className="h-[var(--header-logo-size)] w-[var(--header-logo-size)] object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 underline-offset-4 hover:text-white hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Popover open={open} onOpenChange={setOpen} modal="trap-focus">
          <PopoverTrigger
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex size-9 items-center justify-center rounded-lg text-white sm:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </PopoverTrigger>
          <PopoverContent align="end" className="w-48 sm:hidden">
            {/* sr-only: permite leitor de tela em touch escapar do menu,
                recomendado pela doc do Base UI pra modal="trap-focus" */}
            <PopoverClose className="sr-only">Fechar menu</PopoverClose>
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
