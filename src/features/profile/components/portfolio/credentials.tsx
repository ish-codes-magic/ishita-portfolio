import { ArrowUpRightIcon, AwardIcon } from "lucide-react";

import { AWARDS } from "@/features/profile/data/awards";
import { CERTIFICATIONS } from "@/features/profile/data/certifications";
import type { Award } from "@/features/profile/types/awards";
import type { Certification } from "@/features/profile/types/certifications";

import { PortfolioDetails, PortfolioSection } from "./section";

function AwardEntry({ award }: { award: Award }) {
  return (
    <article className="flex gap-4 py-5 first:pt-0">
      <AwardIcon
        className="mt-1 size-5 shrink-0 text-primary"
        aria-hidden="true"
      />
      <div>
        <h4 className="font-medium">
          {award.prize} — {award.title}
        </h4>
        <p className="mt-1 font-mono text-xs text-primary">
          {award.date.slice(0, 4)}
        </p>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {award.description}
        </p>
        {award.referenceLink && (
          <a
            href={award.referenceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-10 items-center gap-1.5 rounded-sm text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            {award.id === "black-hat-sector-2026"
              ? "Official listing"
              : "Research code & report"}
            <ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

function CertificationEntry({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <li className="py-5 first:pt-0">
      <h4 className="leading-relaxed font-medium">
        {certification.credentialURL ? (
          <a
            href={certification.credentialURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-3 rounded-sm text-primary underline-offset-4 hover:underline"
          >
            {certification.title}
            <ArrowUpRightIcon
              className="mt-1 size-4 shrink-0"
              aria-hidden="true"
            />
          </a>
        ) : (
          certification.title
        )}
      </h4>
      <p className="mt-1 text-sm text-muted-foreground">
        {certification.issuer} · {certification.issueDate.slice(0, 4)}
      </p>
      {certification.description && (
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {certification.description}
        </p>
      )}
    </li>
  );
}

export function PortfolioCredentials() {
  const recognition = AWARDS.filter((award) => !award.isAcademicDistinction);
  const distinctions = AWARDS.filter((award) => award.isAcademicDistinction);
  const training = CERTIFICATIONS.filter(
    (certification) => !certification.isAdditional
  );
  const additional = CERTIFICATIONS.filter(
    (certification) => certification.isAdditional
  );

  return (
    <PortfolioSection
      id="recognition"
      eyebrow="06 / Recognition & learning"
      title="Research, recognition, and continued learning."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="mb-6 text-lg font-medium">
            Recognition & fellowships
          </h3>
          <div className="divide-y divide-border">
            {recognition.map((award) => (
              <AwardEntry key={award.id} award={award} />
            ))}
          </div>
          <PortfolioDetails
            label="Earlier Academic Distinctions"
            className="mt-4"
          >
            <div className="divide-y divide-border">
              {distinctions.map((award) => (
                <AwardEntry key={award.id} award={award} />
              ))}
            </div>
          </PortfolioDetails>
        </div>
        <div>
          <h3 className="mb-6 text-lg font-medium">
            Relevant Training & Certifications
          </h3>
          <ul className="divide-y divide-border">
            {training.map((certification) => (
              <CertificationEntry
                key={certification.title}
                certification={certification}
              />
            ))}
          </ul>
          <PortfolioDetails label="Additional Certifications" className="mt-4">
            <ul className="divide-y divide-border">
              {additional.map((certification) => (
                <CertificationEntry
                  key={certification.title}
                  certification={certification}
                />
              ))}
            </ul>
          </PortfolioDetails>
        </div>
      </div>
    </PortfolioSection>
  );
}
