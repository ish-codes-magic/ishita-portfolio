import { ArrowDownRightIcon } from "lucide-react";

import { AISafetyProjects } from "@/features/profile/data/aisafety";

import {
  PortfolioDetails,
  PortfolioLinks,
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
      description={
        <>
          <p>
            I investigate how advanced AI systems behave, how their failures can
            be measured, and how we can design mechanisms to keep them safe and
            controllable.
          </p>
          <p>
            My research spans agent security, AI control, model organisms of
            misalignment, chain-of-thought faithfulness, and continuous threat
            modeling. I approach these problems through controlled experiments,
            evaluation frameworks, and practical engineering.
          </p>
        </>
      }
    >
      <div className="grid items-start gap-5 md:grid-cols-2">
        {AISafetyProjects.map((project) => (
          <article
            id={project.id}
            aria-labelledby={`${project.id}-title`}
            key={project.id}
            className="flex flex-col rounded-2xl border border-primary/15 bg-accent/50 p-6 sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4 text-primary">
              <span className="font-mono text-xs leading-relaxed uppercase">
                {project.category}
              </span>
              <ArrowDownRightIcon
                className="size-6 shrink-0"
                aria-hidden="true"
              />
            </div>
            {project.status && (
              <p className="mb-4 w-fit rounded-full border border-primary/25 px-3 py-1 font-mono text-xs text-primary">
                {project.status}
              </p>
            )}
            <h3
              id={`${project.id}-title`}
              className="text-xl leading-snug font-medium tracking-tight"
            >
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.role} · {project.period}
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {project.summary}
            </p>
            <div className="mt-6">
              <SkillTags skills={project.skills.slice(0, 4)} />
            </div>
            <PortfolioDetails
              label={
                project.status
                  ? "Proposed research & questions"
                  : "Research details & contributions"
              }
              className="mt-5"
            >
              {project.description && (
                <PortfolioMarkdown>{project.description}</PortfolioMarkdown>
              )}
              {project.skills.length > 4 && (
                <div className="mt-5">
                  <SkillTags skills={project.skills.slice(4)} />
                </div>
              )}
            </PortfolioDetails>
            {!!project.links?.length && (
              <div className="mt-4">
                <PortfolioLinks links={project.links} />
              </div>
            )}
          </article>
        ))}
      </div>
    </PortfolioSection>
  );
}
