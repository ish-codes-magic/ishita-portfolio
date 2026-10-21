import { ArrowDownRightIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";

import { USER } from "@/data/user";

export function PortfolioHero() {
  return (
    <section
      id="home"
      aria-labelledby="intro-title"
      className="relative grid items-center gap-12 pt-14 pb-12 sm:pt-20 sm:pb-16 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:pt-24"
    >
      <div>
        <p className="portfolio-eyebrow mb-6 flex items-center gap-2.5">
          <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
          Founding AI Engineer · AI Safety Researcher
        </p>
        <h1
          id="intro-title"
          className="text-5xl leading-[1.08] font-medium tracking-[-0.045em] sm:text-6xl"
        >
          Hi, I’m {USER.firstName}.
          <span className="mt-4 block text-4xl leading-[1.15] text-primary sm:text-5xl lg:text-[3.25rem]">
            I build AI systems and study how to make them safer.
          </span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          From production multimodal AI to technical safety research, I work on
          building, evaluating, and understanding advanced AI systems.
        </p>
        <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
          I’m currently a Founding Engineer and AI Lead at{" "}
          <span className="font-medium text-foreground">Storefox.ai</span>,
          where I develop AI-powered retail intelligence systems. Alongside my
          engineering work, I research AI control, agent security, LLM
          evaluations, and model misalignment.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#experience" className="portfolio-button">
            Explore My Work{" "}
            <ArrowDownRightIcon className="size-4" aria-hidden="true" />
          </a>
          <a href="#research" className="portfolio-button-secondary">
            Explore My Research{" "}
            <ArrowDownRightIcon className="size-4" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-7 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPinIcon className="size-4" aria-hidden="true" /> {USER.address}
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
        <div
          className="portfolio-portrait-backdrop absolute -inset-1 rounded-[2.5rem] sm:-inset-4 xl:-inset-6"
          aria-hidden="true"
        />
        <figure className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-3 shadow-[0_12px_48px_-24px_rgba(92,49,116,0.35)] sm:rotate-2">
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
