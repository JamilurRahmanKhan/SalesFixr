import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="brand-header">
      <Link href="/" className="brand-header-logo" aria-label="SalesFixr home">
        <Image src="/images/logo.png" alt="SalesFixr" width={32} height={32} priority />
      </Link>
    </header>
  );
}
