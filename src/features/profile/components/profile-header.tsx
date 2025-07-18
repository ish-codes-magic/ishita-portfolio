import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatarWebp}
            fetchPriority="high"
          />
        </div>
        {/* Flag of Viet Nam */}
        <svg
          className="absolute top-0 -left-px h-8 sm:h-9"
          viewBox="0 0 30 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="6.67" fill="#FF9933" />
          <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
          <rect y="13.33" width="30" height="6.67" fill="#138808" />
          <circle cx="15" cy="10" r="2.5" fill="#000080" />
          <circle cx="15" cy="10" r="2.3" fill="#FFFFFF" />
          <circle cx="15" cy="10" r="0.8" fill="#000080" />
          <g fill="#000080">
            {[...Array(24)].map((_, i) => (
              <line
                key={i}
                x1="15"
                y1="10"
                x2={15 + 2.3 * Math.cos((i * 15 * Math.PI) / 180)}
                y2={10 + 2.3 * Math.sin((i * 15 * Math.PI) / 180)}
                strokeWidth="0.2"
                stroke="#000080"
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56 sm:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {" "}
            {/* <span className="inline dark:hidden">text-zinc-950</span> */}
            {/* <span className="hidden dark:inline">text-zinc-50</span> */}{" "}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] text-info" />
            </SimpleTooltip>
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={[USER.bio, ...USER.flipSentences]} />
          </div>
        </div>
      </div>
    </div>
  );
}
