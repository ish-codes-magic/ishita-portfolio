import { ChevronDownIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Markdown } from "@/components/markdown";
import { cn } from "@/lib/utils";

export function PortfolioSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-12 sm:py-18">
      <div className="mb-8 max-w-2xl sm:mb-10">
        <p className="portfolio-eyebrow mb-3">{eyebrow}</p>
        <h2
          id={`${id}-title`}
          className="text-3xl font-medium tracking-tight sm:text-4xl"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

export function SkillTags({ skills }: { skills: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies and skills">
      {Array.from(new Set(skills)).map((skill) => (
        <li
          key={skill}
          className="rounded-md border border-border/70 bg-background/60 px-2.5 py-1 font-mono text-xs leading-relaxed text-muted-foreground"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}

export function PortfolioDetails({
  children,
  label = "Read more",
  className,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <details className={cn("group/details", className)}>
      <summary className="portfolio-summary w-fit cursor-pointer list-none items-center gap-2 rounded-sm py-2 text-sm font-medium text-primary">
        {label}
        <ChevronDownIcon
          aria-hidden="true"
          className="size-4 shrink-0 transition-transform group-open/details:rotate-180"
        />
      </summary>
      <div className="pt-4">{children}</div>
    </details>
  );
}

export function PortfolioMarkdown({ children }: { children: string }) {
  return (
    <div className="portfolio-prose prose prose-sm max-w-none text-muted-foreground dark:prose-invert prose-headings:text-foreground prose-a:text-primary prose-strong:font-medium prose-strong:text-foreground">
      <Markdown>{children}</Markdown>
    </div>
  );
}

export function getSummary(description?: string) {
  return description
    ?.trim()
    .split("\n")[0]
    .replace(/^-\s|\*\*/g, "");
}
