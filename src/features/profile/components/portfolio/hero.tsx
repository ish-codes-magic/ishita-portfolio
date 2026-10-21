import { ArrowDownRightIcon, ArrowUpRightIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";

import { USER } from "@/data/user";
import { decodeEmail } from "@/utils/string";

export function PortfolioHero() {
  return (
    <section
      aria-labelledby="intro-title"
      className="relative grid items-center gap-12 pt-14 pb-12 sm:pt-20 sm:pb-16 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:pt-24"
    >
      <div>
        <p className="portfolio-eyebrow mb-6 flex items-center gap-2.5">
          <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
          AI engineer &amp; safety researcher
        </p>
        <h1
          id="intro-title"
          className="text-5xl leading-[1.08] font-medium tracking-[-0.045em] sm:text-6xl lg:text-7xl"
        >
          Hi, I’m {USER.firstName}.
          <span className="mt-3 block text-primary">
            I build AI
            <br className="hidden sm:block" /> you can trust.
          </span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          From research to production, I build intelligent systems and explore
          what it takes to make them safe, reliable, and useful.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {USER.jobTitle} at{" "}
          <span className="font-medium text-foreground">
            {USER.jobs[0].company}
          </span>
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#experience" className="portfolio-button">
            Explore my work{" "}
            <ArrowDownRightIcon className="size-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${decodeEmail(USER.email)}`}
            className="portfolio-button-secondary"
          >
            Let’s connect{" "}
            <ArrowUpRightIcon className="size-4" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-7 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPinIcon className="size-4" aria-hidden="true" /> {USER.address}
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
        <div
          className="portfolio-portrait-backdrop absolute -inset-1 rounded-[2.5rem] sm:-inset-6"
          aria-hidden="true"
        />
        <figure className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-3 shadow-[0_12px_48px_-24px_rgba(23,57,43,0.3)] sm:rotate-2">
          <Image
            src="/images/ishita-avatar-ghibli.jpg"
            alt={`Illustrated portrait of ${USER.firstName} ${USER.lastName}`}
            width={804}
            height={859}
            sizes="(max-width: 640px) 85vw, 360px"
            priority
            className="aspect-[1.05] w-full rounded-[1.1rem] object-cover object-top"
          />
          <figcaption className="flex items-center justify-between gap-3 px-2 pt-5 pb-3">
            <div>
              <p className="text-lg font-medium">
                {USER.firstName} {USER.lastName}
              </p>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                Engineering with curiosity &amp; care.
              </p>
            </div>
            <span className="text-2xl text-primary" aria-hidden="true">
              ✳
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
