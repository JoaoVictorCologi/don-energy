export const linksPrincipais = [
  { href: "/", label: "Início" },
  { href: "/nossa-historia/", label: "Nossa História" },
  { href: "/servicos/", label: "Soluções" },
  { href: "/obras/", label: "Projetos" },
  { href: "/contato/", label: "Contato" },
] as const;
export function linkAtivo(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}
