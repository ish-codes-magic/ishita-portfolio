import { EXPERIENCES } from "@/features/profile/data/experiences";
import type { Experience } from "@/features/profile/types/experiences";

import {
  getSummary,
  PortfolioDetails,
  PortfolioMarkdown,
  PortfolioSection,
  SkillTags,
} from "./section";

function formatPeriod(value: string) {
  const [month, year] = value.split(".").map(Number);
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1)));
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 sm:p-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-medium tracking-tight">
          {experience.companyName}
        </h3>
        {experience.isCurrentEmployer && (
          <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-primary">
            Current role
          </span>
        )}
      </div>
      {experience.positions.map((position) => (
        <div key={position.id}>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-6">
            <h4 className="font-medium text-primary">{position.title}</h4>
            <p className="shrink-0 font-mono text-xs leading-6 text-muted-foreground">
              {formatPeriod(position.employmentPeriod.start)} —{" "}
              {position.employmentPeriod.end
                ? formatPeriod(position.employmentPeriod.end)
                : "Present"}
            </p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {[position.location, position.employmentType]
              .filter(Boolean)
              .join(" · ")}
          </p>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            {getSummary(position.description)}
          </p>
          {position.skills && (
            <div className="mt-5">
              <SkillTags skills={position.skills.slice(0, 5)} />
            </div>
          )}
          <PortfolioDetails label="Responsibilities & impact" className="mt-4">
            {position.description && (
              <PortfolioMarkdown>{position.description}</PortfolioMarkdown>
            )}
            {position.skills && position.skills.length > 5 && (
              <div className="mt-5">
                <SkillTags skills={position.skills.slice(5)} />
              </div>
            )}
          </PortfolioDetails>
        </div>
      ))}
    </article>
  );
}

export function PortfolioExperience() {
  return (
    <PortfolioSection
      id="experience"
      eyebrow="02 / The work so far"
      title="Building things that make a difference."
      description="From leading AI products to exploring machine learning in scientific research."
    >
      <div className="space-y-4">
        {EXPERIENCES.slice(0, 3).map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
      <PortfolioDetails
        label={`Earlier experience & research (${EXPERIENCES.length - 3} roles)`}
        className="mt-6"
      >
        <div className="space-y-4">
          {EXPERIENCES.slice(3).map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </PortfolioDetails>
    </PortfolioSection>
  );
}
