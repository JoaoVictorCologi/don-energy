import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-blue-header">
      <div className="mx-auto flex max-w-6xl items-center px-6 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/don-energy-logo.png"
            alt="Don Energy"
            width={64}
            height={64}
            priority
            className="h-16 w-16 object-contain"
          />
        </Link>
      </div>
    </header>
  );
}
