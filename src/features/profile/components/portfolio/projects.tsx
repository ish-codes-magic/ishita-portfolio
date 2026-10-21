import { ArrowUpRightIcon, BracesIcon } from "lucide-react";

import { PROJECTS } from "@/features/profile/data/projects";
import type { Project } from "@/features/profile/types/projects";
import { cn } from "@/lib/utils";

import {
  getSummary,
  PortfolioDetails,
  PortfolioLinks,
  PortfolioMarkdown,
  PortfolioSection,
  SkillTags,
} from "./section";

function ProjectCard({ project }: { project: Project }) {
  const hasExternalLink = project.link.startsWith("https://");

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/35 sm:p-7",
        project.featured && "border-primary/25 bg-accent/30"
      )}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
          <BracesIcon className="size-5" aria-hidden="true" />
        </span>
        {hasExternalLink && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
          >
            <ArrowUpRightIcon className="size-5" aria-hidden="true" />
          </a>
        )}
      </div>
      {project.category && (
        <p className="mb-3 font-mono text-xs leading-relaxed text-primary uppercase">
          {project.category}
        </p>
      )}
      <h3 className="text-xl leading-snug font-medium tracking-tight">
        {project.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">
        {project.summary ?? getSummary(project.description)}
      </p>
      <div className="mt-5">
        <SkillTags skills={project.skills.slice(0, 3)} />
      </div>
      {project.description && (
        <PortfolioDetails className="mt-5" label="Technical project details">
          <PortfolioMarkdown>{project.description}</PortfolioMarkdown>
          {project.skills.length > 3 && (
            <div className="mt-5">
              <SkillTags skills={project.skills.slice(3)} />
            </div>
          )}
          {project.links && (
            <div className="mt-4">
              <PortfolioLinks links={project.links} />
            </div>
          )}
        </PortfolioDetails>
      )}
      {project.researchId && (
        <a
          href={`#${project.researchId}`}
          className="mt-5 inline-flex min-h-10 w-fit items-center gap-1.5 rounded-sm text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Explore full research
          <ArrowUpRightIcon className="size-4" aria-hidden="true" />
        </a>
      )}
    </article>
  );
}

export function PortfolioProjects() {
  const currentProjects = PROJECTS.filter(
    (project) => !project.isEarlierProject
  );
  const earlierProjects = PROJECTS.filter(
    (project) => project.isEarlierProject
  );

  return (
    <PortfolioSection
      id="projects"
      eyebrow="04 / Ideas into code"
      title="Research, implemented."
      description="Open-source agent security, experimental AI safety, and hands-on engineering projects. Detailed research contributions live in the Research section above."
    >
      <div className="grid items-start gap-5 md:grid-cols-2">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {earlierProjects.length > 0 && (
        <PortfolioDetails label="Earlier projects" className="mt-6">
          <div className="grid gap-5 md:grid-cols-2">
            {earlierProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </PortfolioDetails>
      )}
    </PortfolioSection>
  );
}
