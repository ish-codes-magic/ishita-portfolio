import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { USER } from "@/data/user";
import { PortfolioAbout } from "@/features/profile/components/portfolio/about";
import { PortfolioContact } from "@/features/profile/components/portfolio/contact";
import { PortfolioCredentials } from "@/features/profile/components/portfolio/credentials";
import { PortfolioExperience } from "@/features/profile/components/portfolio/experience";
import { PortfolioHero } from "@/features/profile/components/portfolio/hero";
import { PortfolioProjects } from "@/features/profile/components/portfolio/projects";
import { PortfolioResearch } from "@/features/profile/components/portfolio/research";
import { PortfolioWriting } from "@/features/profile/components/portfolio/writing";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="portfolio-shell mx-auto max-w-6xl">
        <PortfolioHero />
        <div className="divide-y divide-border">
          <PortfolioAbout />
          <PortfolioExperience />
          <PortfolioResearch />
          <PortfolioProjects />
          <PortfolioWriting />
          <PortfolioCredentials />
        </div>
        <PortfolioContact />
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: new URL(USER.avatar, SITE_INFO.url).toString(),
      url: SITE_INFO.url,
      jobTitle: USER.jobTitle,
      description: USER.bio,
      sameAs: SOCIAL_LINKS.map((link) => link.href),
      knowsAbout: USER.researchInterests,
      worksFor: {
        "@type": "Organization",
        name: USER.jobs[0].company,
        url: USER.jobs[0].website,
      },
    },
  };
}
