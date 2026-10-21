import { WRITING_AND_TALKS } from "@/features/profile/data/writing";
import type { WritingItem } from "@/features/profile/types/writing";

import {
  PortfolioDetails,
  PortfolioLinks,
  PortfolioMarkdown,
  PortfolioSection,
} from "./section";

function WritingCard({ item }: { item: WritingItem }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <p className="portfolio-eyebrow mb-4">{item.category}</p>
      <h3 className="text-xl leading-snug font-medium tracking-tight">
        {item.title}
      </h3>
      <p className="mt-3 text-sm font-medium text-primary">{item.venue}</p>
      <p className="mt-1 text-sm text-muted-foreground">{item.period}</p>
      <p className="mt-5 text-sm leading-7 text-muted-foreground">
        {item.summary}
      </p>
      <PortfolioDetails
        label={
          item.category === "Research writing"
            ? "About the report"
            : "Presentation details"
        }
        className="mt-4"
      >
        <PortfolioMarkdown>{item.description}</PortfolioMarkdown>
      </PortfolioDetails>
      <div className="mt-3">
        <PortfolioLinks links={item.links} />
      </div>
    </article>
  );
}

export function PortfolioWriting() {
  return (
    <PortfolioSection
      id="writing"
      eyebrow="05 / Writing & Talks"
      title="Sharing the work."
      description="Research writing, technical demonstrations, and conversations about AI safety and agent security."
    >
      <div className="grid items-start gap-5 md:grid-cols-2">
        {WRITING_AND_TALKS.filter((item) => !item.isRelated).map((item) => (
          <WritingCard key={item.id} item={item} />
        ))}
      </div>
      <PortfolioDetails label="Related Research Talks" className="mt-6">
        <div className="grid gap-5 md:grid-cols-2">
          {WRITING_AND_TALKS.filter((item) => item.isRelated).map((item) => (
            <WritingCard key={item.id} item={item} />
          ))}
        </div>
      </PortfolioDetails>
    </PortfolioSection>
  );
}
