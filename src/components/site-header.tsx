import Link from "next/link";

import { ToggleTheme } from "@/components/toggle-theme";
import { USER } from "@/data/user";

const LINKS = [
  { title: "About", href: "/#about" },
  { title: "Experience", href: "/#experience" },
  { title: "Research", href: "/#research" },
  { title: "Projects", href: "/#projects" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 px-5 backdrop-blur-md sm:px-8">
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-50 -translate-y-24 rounded-lg bg-primary px-4 py-3 text-primary-foreground focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-5 py-3 sm:min-h-20 sm:flex-nowrap sm:py-0">
        <Link
          href="/"
          aria-label={`ip. ${USER.firstName} ${USER.lastName} — home`}
          className="flex min-h-11 items-center gap-3 rounded-sm"
        >
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-xl bg-primary font-mono text-sm font-medium text-primary-foreground"
          >
            ip.
          </span>
          <span className="text-sm font-medium tracking-tight sm:text-base">
            {USER.firstName} {USER.lastName}
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="order-3 flex w-full items-center justify-between gap-2 border-t border-border pt-2 sm:order-0 sm:w-auto sm:justify-center sm:gap-6 sm:border-0 sm:pt-0 lg:gap-8"
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-10 items-center rounded-sm text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/#contact"
            className="hidden min-h-10 items-center rounded-sm text-sm font-medium text-primary sm:inline-flex"
          >
            Let’s talk{" "}
            <span aria-hidden="true" className="ml-1.5">
              ↗
            </span>
          </Link>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
