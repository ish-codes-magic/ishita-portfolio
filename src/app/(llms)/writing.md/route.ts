import { WRITING_AND_TALKS } from "@/features/profile/data/writing";

const content = `# Writing & Talks

${WRITING_AND_TALKS.map((item) => `## ${item.title}\n\n${item.category} · ${item.venue} · ${item.period}\n\n${item.summary}\n\n${item.description}\n\n${item.links.map((link) => `- [${link.label}](${link.href})`).join("\n")}`).join("\n\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: { "Content-Type": "text/markdown;charset=utf-8" },
  });
}
