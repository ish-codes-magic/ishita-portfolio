import { SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { USER } from "@/data/user";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-7 pb-[max(1.75rem,env(safe-area-inset-bottom))] sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-xs leading-relaxed text-muted-foreground sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {USER.firstName} {USER.lastName}. Built
          with curiosity.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          <a
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm underline-offset-4 hover:text-primary hover:underline"
          >
            Source code ↗
          </a>
          <a
            href="/llms.txt"
            className="rounded-sm underline-offset-4 hover:text-primary hover:underline"
          >
            llms.txt
          </a>
          <a
            href="https://github.com/ncdai"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm underline-offset-4 hover:text-primary hover:underline"
          >
            Originally inspired by ncdai ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
