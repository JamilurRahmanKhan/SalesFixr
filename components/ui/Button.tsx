import Link from "next/link";
import type { ReactNode } from "react";

export function CtaButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const isInternal = href.startsWith("/");
  const classes = `cta-button${className ? ` ${className}` : ""}`;
  const content = (
    <>
      <span>{children}</span>
      <b aria-hidden="true">→</b>
    </>
  );

  return isInternal ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}

export function SlackLink({ href, children }: { href: string; children: ReactNode }) {
  const isInternal = href.startsWith("/");
  return isInternal ? (
    <Link href={href} className="slack-link">
      {children}
    </Link>
  ) : (
    <a href={href} className="slack-link">
      {children}
    </a>
  );
}
