import { ArrowDownRightIcon } from "lucide-react";

import { AISafetyProjects } from "@/features/profile/data/aisafety";

import {
  getSummary,
  PortfolioDetails,
  PortfolioMarkdown,
  PortfolioSection,
  SkillTags,
} from "./section";

export function PortfolioResearch() {
  return (
    <PortfolioSection
      id="research"
      eyebrow="03 / AI safety & alignment"
      title="Making intelligence more trustworthy."
      description="I’m interested in how models reason, how we evaluate them, and where their explanations fall short."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {AISafetyProjects.map((project, index) => (
          <article
            key={project.id}
            className="flex flex-col rounded-2xl border border-primary/15 bg-accent/50 p-6 sm:p-8"
          >
            <div className="mb-7 flex items-center justify-between text-primary">
              <span className="font-mono text-xs">
                {index === 0 ? "FELLOWSHIP" : "RESEARCH PROJECT"}
              </span>
              <ArrowDownRightIcon className="size-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl leading-snug font-medium tracking-tight">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {getSummary(project.description)}
            </p>
            <div className="mt-6">
              <SkillTags skills={project.skills.slice(0, 4)} />
            </div>
            <PortfolioDetails label="Explore the research" className="mt-5">
              {project.description && (
                <PortfolioMarkdown>{project.description}</PortfolioMarkdown>
              )}
              <div className="mt-5">
                <SkillTags skills={project.skills.slice(4)} />
              </div>
            </PortfolioDetails>
          </article>
        ))}
      </div>
    </PortfolioSection>
  );
}
