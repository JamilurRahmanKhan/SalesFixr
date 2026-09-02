import Link from "next/link";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: "M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.68V8.5h3.24v1.57h.05c.45-.86 1.56-1.76 3.2-1.76 3.43 0 4.06 2.26 4.06 5.2V20Z",
  },
  {
    label: "Instagram",
    href: "#",
    icon: "M12 2.5c2.7 0 3 0 4.1.06 1.1.05 1.85.23 2.5.48.68.27 1.26.63 1.83 1.2.57.57.93 1.15 1.2 1.83.25.65.43 1.4.48 2.5.06 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.05 1.1-.23 1.85-.48 2.5a4.94 4.94 0 0 1-1.2 1.83 4.94 4.94 0 0 1-1.83 1.2c-.65.25-1.4.43-2.5.48-1.1.06-1.4.06-4.1.06s-3 0-4.1-.06c-1.1-.05-1.85-.23-2.5-.48a4.94 4.94 0 0 1-1.83-1.2 4.94 4.94 0 0 1-1.2-1.83c-.25-.65-.43-1.4-.48-2.5C2.5 15 2.5 14.7 2.5 12s0-3 .06-4.1c.05-1.1.23-1.85.48-2.5.27-.68.63-1.26 1.2-1.83.57-.57 1.15-.93 1.83-1.2.65-.25 1.4-.43 2.5-.48C9 2.5 9.3 2.5 12 2.5Zm0 2c-2.65 0-2.96 0-4 .06-.9.04-1.4.19-1.72.32-.43.17-.74.37-1.07.7-.33.33-.53.64-.7 1.07-.13.32-.28.82-.32 1.72-.06 1.04-.06 1.35-.06 4s0 2.96.06 4c.04.9.19 1.4.32 1.72.17.43.37.74.7 1.07.33.33.64.53 1.07.7.32.13.82.28 1.72.32 1.04.06 1.35.06 4 .06s2.96 0 4-.06c.9-.04 1.4-.19 1.72-.32.43-.17.74-.37 1.07-.7.33-.33.53-.64.7-1.07.13-.32.28-.82.32-1.72.06-1.04.06-1.35.06-4s0-2.96-.06-4c-.04-.9-.19-1.4-.32-1.72a2.87 2.87 0 0 0-.7-1.07 2.87 2.87 0 0 0-1.07-.7c-.32-.13-.82-.28-1.72-.32-1.04-.06-1.35-.06-4-.06Zm0 3.4a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Zm5.23-2.6a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/14t48hS34wa/",
    icon: "M14.5 8.5H17V5.6h-2.7c-2.5 0-3.9 1.6-3.9 4V12H8v3h2.4v6.5h3.1V15H16l.5-3h-3V9.9c0-.9.3-1.4 1-1.4Z",
  },
  {
    label: "X",
    href: "#",
    icon: "M13.6 10.6 20 3.5h-2l-5.5 6.1-4.6-6.1H2l6.7 9.1-6.7 7.4h2l5.9-6.5 4.9 6.5h5.5l-6.7-9.4Zm-2 2.3-.7-.9-5.4-7.3h2.6l4.3 5.9.7.9 5.7 7.7h-2.6l-4.6-6.3Z",
  },
];

export function Footer() {
  return (
    <footer className="global-footer">
      <div className="container gfooter-social">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            className="gfooter-social-link"
            href={social.href}
            target="_blank"
            rel="noopener"
          >
            <span className="gfooter-social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d={social.icon} />
              </svg>
            </span>
            {social.label}
            <svg className="gfooter-arrow" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17 17 7M9 7h8v8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ))}
      </div>

      <div className="gfooter-divider" role="separator" />

      <div className="container gfooter-bottom">
        <span className="gfooter-copy">
          © SalesFixr 2026 | <Link href="/privacy">Privacy Policy</Link>
        </span>
        <span className="gfooter-wordmark">SALES FIXR</span>
        <span className="gfooter-tag">Software, built with intent</span>
      </div>
    </footer>
  );
}
