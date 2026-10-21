import {
  ArrowUpRightIcon,
  BracesIcon,
  FlaskConicalIcon,
  ShieldCheckIcon,
} from "lucide-react";

import { USER } from "@/data/user";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { TECH_STACK } from "@/features/profile/data/tech-stack";

import {
  PortfolioDetails,
  PortfolioMarkdown,
  PortfolioSection,
} from "./section";

const FOCUS_AREAS = [
  {
    icon: BracesIcon,
    title: "AI in production",
    description:
      "LLM applications, audio intelligence, and reliable systems that solve real-world problems.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Safety & alignment",
    description:
      "Model evaluations, interpretability, and understanding when AI reasoning can be trusted.",
  },
  {
    icon: FlaskConicalIcon,
    title: "Research-led engineering",
    description:
      "Bringing scientific curiosity to machine learning, from particle physics to multimodal models.",
  },
];

export function PortfolioAbout() {
  const paragraphs = USER.about.trim().split("\n\n");

  return (
    <PortfolioSection
      id="about"
      eyebrow="01 / A little about me"
      title="Curiosity, with a practical side."
    >
      <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div>
          <div className="space-y-4 text-base leading-8 text-muted-foreground">
            {paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <PortfolioDetails label="More about my background" className="mt-3">
            <PortfolioMarkdown>
              {paragraphs.slice(2).join("\n\n")}
            </PortfolioMarkdown>
          </PortfolioDetails>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-1.5 text-sm font-medium underline-offset-4 hover:text-primary hover:underline"
              >
                {link.title}
                <ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
          {FOCUS_AREAS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-7">
        <h3 className="portfolio-eyebrow mb-4">Tools I work with</h3>
        <ul className="flex flex-wrap gap-2.5" aria-label="Tech stack">
          {TECH_STACK.map((tech) => (
            <li key={tech.key}>
              <a
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {tech.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PortfolioSection>
  );
}
