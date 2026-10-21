import { ArrowUpRightIcon, AwardIcon } from "lucide-react";

import { AWARDS } from "@/features/profile/data/awards";
import { CERTIFICATIONS } from "@/features/profile/data/certifications";

import { PortfolioSection } from "./section";

export function PortfolioCredentials() {
  return (
    <PortfolioSection
      id="recognition"
      eyebrow="05 / Learning & recognition"
      title="Always a work in progress."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="mb-5 text-lg font-medium">Awards & fellowships</h3>
          <div className="divide-y divide-border">
            {AWARDS.map((award) => (
              <article key={award.id} className="flex gap-4 py-5 first:pt-0">
                <AwardIcon
                  className="mt-1 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-medium">{award.title}</h4>
                  <p className="mt-1 text-sm text-primary">{award.prize}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {award.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-lg font-medium">Certifications</h3>
          <ul className="divide-y divide-border">
            {CERTIFICATIONS.map((certification) => (
              <li key={certification.credentialID} className="py-5 first:pt-0">
                <a
                  href={certification.credentialURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 rounded-sm"
                >
                  <div>
                    <h4 className="leading-relaxed font-medium group-hover:text-primary">
                      {certification.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {certification.issuer} ·{" "}
                      {certification.issueDate.slice(0, 4)}
                    </p>
                  </div>
                  <ArrowUpRightIcon
                    className="mt-1 size-4 shrink-0 text-muted-foreground group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PortfolioSection>
  );
}
