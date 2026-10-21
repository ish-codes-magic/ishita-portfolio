import { ArrowUpRightIcon, BracesIcon } from "lucide-react";

import { PROJECTS } from "@/features/profile/data/projects";
import type { Project } from "@/features/profile/types/projects";

import {
  getSummary,
  PortfolioDetails,
  PortfolioMarkdown,
  PortfolioSection,
  SkillTags,
} from "./section";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/35 sm:p-7">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
          <BracesIcon className="size-5" aria-hidden="true" />
        </span>
        {project.link && (
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
      <h3 className="text-xl leading-snug font-medium tracking-tight">
        {project.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">
        {getSummary(project.description)}
      </p>
      <div className="mt-5">
        <SkillTags skills={project.skills.slice(0, 3)} />
      </div>
      <PortfolioDetails className="mt-5" label="Project details">
        {project.description && (
          <PortfolioMarkdown>{project.description}</PortfolioMarkdown>
        )}
        <div className="mt-5">
          <SkillTags skills={project.skills.slice(3)} />
        </div>
      </PortfolioDetails>
    </article>
  );
}

export function PortfolioProjects() {
  return (
    <PortfolioSection
      id="projects"
      eyebrow="04 / Ideas into code"
      title="A few things I’ve built."
      description="Hands-on explorations in multimodal AI, deep learning, and data engineering. Built to learn by doing."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.slice(0, 4).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {PROJECTS.length > 4 && (
        <PortfolioDetails
          label={`More projects (${PROJECTS.length - 4})`}
          className="mt-6"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {PROJECTS.slice(4).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </PortfolioDetails>
      )}
    </PortfolioSection>
  );
}
