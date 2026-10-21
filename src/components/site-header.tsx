import Link from "next/link";

import { ToggleTheme } from "@/components/toggle-theme";
import { MAIN_NAV } from "@/config/site";
import { USER } from "@/data/user";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 px-5 backdrop-blur-md sm:px-8">
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-50 -translate-y-24 rounded-lg bg-primary px-4 py-3 text-primary-foreground focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-5 py-3 lg:min-h-20 lg:flex-nowrap lg:py-0">
        <Link
          href="/#home"
          className="flex min-h-11 shrink-0 items-center gap-3 rounded-sm"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary font-mono text-sm font-medium text-primary-foreground">
            ip.
          </span>
          <span className="text-sm font-medium tracking-tight sm:text-base">
            {USER.displayName}
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="order-3 no-scrollbar flex w-full min-w-0 items-center gap-5 overflow-x-auto border-t border-border px-1 pt-2 lg:order-none lg:w-auto lg:justify-center lg:gap-4 lg:border-0 lg:pt-0 xl:gap-5"
        >
          {MAIN_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 shrink-0 items-center rounded-sm text-xs text-muted-foreground transition-colors hover:text-primary lg:text-sm"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center">
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
