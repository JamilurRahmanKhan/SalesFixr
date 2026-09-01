"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
    path: (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
      </>
    ),
  },
  {
    href: "/services",
    label: "Services",
    path: (
      <>
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M8 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
      </>
    ),
  },
] as const;

const SECONDARY_NAV_ITEMS = [
  {
    href: "/about",
    label: "About",
    path: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 16v-5M12 8h.01" />
      </>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    path: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 6.5 8 6 8-6" />
      </>
    ),
  },
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="float-nav" aria-label="Primary">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`float-nav-item${pathname === item.href ? " is-active" : ""}`}
        >
          <svg viewBox="0 0 24 24">{item.path}</svg>
          <span>{item.label}</span>
        </Link>
      ))}

      <Link href="/software-portfolio" className="float-nav-cta" aria-label="Enter the journey">
        <svg viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </Link>

      {SECONDARY_NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`float-nav-item${pathname === item.href ? " is-active" : ""}`}
        >
          <svg viewBox="0 0 24 24">{item.path}</svg>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
