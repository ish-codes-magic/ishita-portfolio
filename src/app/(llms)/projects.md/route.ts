import { SITE_INFO } from "@/config/site";
import { PROJECTS } from "@/features/profile/data/projects";

const content = `# Projects

${PROJECTS.map((item) => {
  const skills = `\n\nSkills: ${item.skills.join(", ")}`;
  const description = item.description ? `\n\n${item.description.trim()}` : "";
  const research = item.researchId
    ? `\n\nResearch details: ${SITE_INFO.url}/#${item.researchId}`
    : "";
  const links = item.links
    ?.map((link) => `- [${link.label}](${link.href})`)
    .join("\n");
  return `## ${item.title}\n\n${item.category || "Project"}\n\n${item.summary || ""}\n\nProject URL: ${new URL(item.link, SITE_INFO.url).toString()}${skills}${description}${research}${links ? `\n\n${links}` : ""}`;
}).join("\n\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
