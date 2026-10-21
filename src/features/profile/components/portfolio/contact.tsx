import { ArrowUpRightIcon } from "lucide-react";

import { USER } from "@/data/user";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { decodeEmail } from "@/utils/string";

export function PortfolioContact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="my-10 rounded-3xl border border-primary/15 bg-accent px-6 py-10 sm:my-16 sm:px-12 sm:py-14"
    >
      <p className="portfolio-eyebrow mb-4">
        Good things start with a conversation
      </p>
      <h2
        id="contact-title"
        className="text-3xl font-medium tracking-tight sm:text-4xl"
      >
        Let’s exchange ideas.
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
        I’m always interested in thoughtful conversations about AI engineering,
        technical AI safety, model evaluations, and research.
      </p>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
        Whether you’re exploring a research question, building an interesting AI
        system, or working on open-source tools, I’d be glad to connect.
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href={`mailto:${decodeEmail(USER.email)}`}
          className="portfolio-button"
        >
          Email <ArrowUpRightIcon className="size-4" aria-hidden="true" />
        </a>
        {SOCIAL_LINKS.filter((link) => link.title !== "LeetCode").map(
          (link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm font-medium text-primary hover:underline hover:underline-offset-4"
            >
              {link.title}
              <ArrowUpRightIcon className="size-4" aria-hidden="true" />
            </a>
          )
        )}
      </div>
    </section>
  );
}
