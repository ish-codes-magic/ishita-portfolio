import {
  ArrowUpRightIcon,
  BracesIcon,
  FlaskConicalIcon,
  ShieldCheckIcon,
} from "lucide-react";

import { USER } from "@/data/user";
import { EXPERTISE_GROUPS } from "@/features/profile/data/expertise";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";

import {
  PortfolioDetails,
  PortfolioMarkdown,
  PortfolioSection,
  SkillTags,
} from "./section";

const FOCUS_AREAS = [
  {
    icon: BracesIcon,
    title: "Production AI Engineering",
    description:
      "Designing, evaluating, and deploying scalable multimodal LLM systems under real-world constraints.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Technical AI Safety Research",
    description:
      "Investigating AI control, agent security, model misalignment, reasoning faithfulness, and behavioral evaluations.",
  },
  {
    icon: FlaskConicalIcon,
    title: "Research-Led Engineering",
    description:
      "Combining scientific experimentation, quantitative analysis, and practical software engineering to understand and improve AI systems.",
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
            {paragraphs.slice(0, 3).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <PortfolioDetails label="More about my background" className="mt-3">
            <PortfolioMarkdown>
              {paragraphs.slice(3).join("\n\n")}
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
        <h3 className="portfolio-eyebrow mb-5">Areas of expertise</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h4 className="mb-4 font-medium">{group.title}</h4>
              <SkillTags skills={group.skills} />
            </div>
          ))}
        </div>
      </div>
    </PortfolioSection>
  );
}
