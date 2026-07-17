import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-blue-header">
      {/* py e o h-/w- do logo são a fonte real da altura do header — ver
          --header-py / --header-logo-size em app/globals.css se mudar aqui */}
      <div className="mx-auto flex max-w-6xl items-center px-6 py-[var(--header-py)]">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/don-energy-logo.png"
            alt="Don Energy"
            width={64}
            height={64}
            priority
            className="h-[var(--header-logo-size)] w-[var(--header-logo-size)] object-contain"
          />
        </Link>
      </div>
    </header>
  );
}
